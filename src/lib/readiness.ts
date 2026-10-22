import type { AnswerRecord, Exam, Question } from './types.ts';

/** How many recent exams and recent answers per subelement the meter looks at. */
export const RECENT_EXAMS = 3;
export const RECENT_ANSWERS = 20;

export type SubelementAccuracy = { letter: string; title: string; keyTopics: number; answered: number; accuracy: number | null };

export type Readiness = {
  /** 0-1, or null before any answer. */
  score: number | null;
  /** Average of the last RECENT_EXAMS exam scores (0-1), or null before the first exam. */
  examAverage: number | null;
  /** How many exams that average covers. */
  examCount: number;
  subelements: SubelementAccuracy[];
};

/**
 * Readiness meter for one element: the average of the recent exam scores and of the recent accuracy
 * in each subelement, weighted by its number of key topics as the real exam is (one question per key
 * topic). A subelement with no answers yet counts as 0, so the meter only fills as the whole pool is covered.
 */
export function readiness(pool: readonly Question[], answers: readonly AnswerRecord[], exams: readonly Exam[]): Readiness {
  const subOf = new Map(pool.map((q) => [q.id, q.subelement]));
  const subs = new Map<string, SubelementAccuracy & { topics: Set<number>; ok: number }>();
  for (const q of pool) {
    const s = subs.get(q.subelement) ?? { letter: q.subelement, title: q.subelementTitle, keyTopics: 0, answered: 0, accuracy: null, topics: new Set(), ok: 0 };
    s.topics.add(q.keyTopic);
    s.keyTopics = s.topics.size;
    subs.set(q.subelement, s);
  }
  for (let i = answers.length - 1; i >= 0; i--) {
    const s = subs.get(subOf.get(answers[i].q) ?? '');
    if (!s || s.answered >= RECENT_ANSWERS) continue;
    s.answered++;
    if (answers[i].ok) s.ok++;
  }
  const subelements = [...subs.values()].map(({ letter, title, keyTopics, answered, ok }) => ({ letter, title, keyTopics, answered, accuracy: answered ? ok / answered : null }));

  const element = pool[0]?.element;
  const recent = exams.filter((e) => e.element === element && e.score !== null).slice(-RECENT_EXAMS);
  const examAverage = recent.length ? recent.reduce((sum, e) => sum + e.score! / e.items.length, 0) / recent.length : null;
  const totalTopics = subelements.reduce((n, s) => n + s.keyTopics, 0);
  const coverage = subelements.reduce((sum, s) => sum + s.keyTopics * (s.accuracy ?? 0), 0) / totalTopics;
  const anyAnswers = subelements.some((s) => s.answered);
  const score = !anyAnswers && examAverage === null ? null : examAverage === null ? coverage : (examAverage + coverage) / 2;
  return { score, examAverage, examCount: recent.length, subelements };
}
