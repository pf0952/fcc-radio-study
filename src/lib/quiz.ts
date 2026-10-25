import { shuffle } from './exam.ts';
import type { Question, Rng } from './types.ts';

export const QUIZ_SIZE = 5;
export const QUIZ_PASS = 4;

/**
 * A section quiz: QUIZ_SIZE random questions from the lesson's key topics, spread across as many
 * key topics as possible (one per topic first, then a second round if there are fewer topics).
 */
export function drawQuiz(pool: readonly Question[], keyTopics: readonly number[], rng: Rng): Question[] {
  const topics = shuffle(keyTopics, rng);
  const remaining = new Map(topics.map((t) => [t, shuffle(pool.filter((q) => q.keyTopic === t), rng)]));
  const picks: Question[] = [];
  while (picks.length < QUIZ_SIZE && [...remaining.values()].some((qs) => qs.length)) {
    for (const t of topics) {
      const q = remaining.get(t)!.pop();
      if (q && picks.length < QUIZ_SIZE) picks.push(q);
    }
  }
  return picks;
}

/** One random question for a mid-lesson checkpoint: from `questions` when given, else from the key topics. */
export function drawCheckpoint(pool: readonly Question[], keyTopics: readonly number[], rng: Rng, questions?: readonly string[]): Question {
  const listed = questions?.length ? pool.filter((q) => questions.includes(q.id)) : [];
  const candidates = listed.length ? listed : pool.filter((q) => keyTopics.includes(q.keyTopic));
  return candidates[Math.floor(rng() * candidates.length)];
}
