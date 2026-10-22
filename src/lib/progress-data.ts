import type { Progress } from './types.ts';

export const emptyProgress = (): Progress => ({
  schema: 1,
  answers: [],
  exams: [],
  activeExam: null,
  deck: {},
  lessons: {},
  quizzes: {},
  lastLesson: null,
  prefs: { voice: null, rate: 1, captions: true, theme: 'system', textSize: 100, unlockAll: false },
});

const isObject = (v: unknown): v is Record<string, unknown> => typeof v === 'object' && v !== null && !Array.isArray(v);

/**
 * Reads progress JSON (progress.json or an exported file). Fields added in later versions get their
 * defaults, so older files still load. Throws a message for the user when the file isn't progress.
 */
export function parseProgress(text: string): Progress {
  let saved: unknown;
  try {
    saved = JSON.parse(text);
  } catch {
    throw new Error('This file is not valid JSON.');
  }
  if (!isObject(saved) || !('schema' in saved)) throw new Error('This file is not FCC Radio Study progress.');
  if (saved.schema !== 1) throw new Error(`This file has progress schema ${saved.schema}; this version of the app reads schema 1.`);
  const empty = emptyProgress();
  for (const key of ['answers', 'exams'] as const) {
    if (key in saved && !Array.isArray(saved[key])) throw new Error(`This progress file is damaged ("${key}" is not a list).`);
  }
  for (const key of ['deck', 'lessons', 'quizzes', 'prefs'] as const) {
    if (key in saved && !isObject(saved[key])) throw new Error(`This progress file is damaged ("${key}" is not a record).`);
  }
  const merged = { ...empty, ...saved } as Progress;
  merged.prefs = { ...empty.prefs, ...(saved.prefs as object | undefined) };
  return merged;
}

const ofElement = (id: string, element: number) => id.startsWith(`${element}-`);
const without = <T>(record: Record<string, T>, element: number) => Object.fromEntries(Object.entries(record).filter(([id]) => !ofElement(id, element)));

/** Progress with everything about one element removed: answers, exams, deck, lessons and quizzes. Settings stay. */
export function resetElement(p: Progress, element: number): Progress {
  return {
    ...p,
    answers: p.answers.filter((a) => !ofElement(a.q, element)),
    exams: p.exams.filter((e) => e.element !== element),
    activeExam: p.activeExam?.element === element ? null : p.activeExam,
    deck: without(p.deck, element),
    lessons: without(p.lessons, element),
    quizzes: without(p.quizzes, element),
    lastLesson: p.lastLesson && ofElement(p.lastLesson, element) ? null : p.lastLesson,
  };
}

/** Fresh progress that keeps the settings. */
export const resetAll = (p: Progress): Progress => ({ ...emptyProgress(), prefs: p.prefs });
