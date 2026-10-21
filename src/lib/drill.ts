import { shuffle } from './exam.ts';
import type { AnswerRecord, Question, Rng } from './types.ts';

export const DRILL_SIZE = 10;

/** Last answer per question id: true = right, false = wrong. */
function lastResult(answers: readonly AnswerRecord[]): Map<string, boolean> {
  const last = new Map<string, AnswerRecord>();
  for (const a of answers) if (!last.has(a.q) || last.get(a.q)!.at <= a.at) last.set(a.q, a);
  return new Map([...last].map(([id, a]) => [id, a.ok]));
}

/** Missed last time first, then never answered, then the rest; random within each group. */
function byPriority(questions: readonly Question[], answers: readonly AnswerRecord[], rng: Rng): Question[] {
  const last = lastResult(answers);
  const rank = (q: Question) => (last.get(q.id) === false ? 0 : last.has(q.id) ? 2 : 1);
  return shuffle(questions, rng).sort((a, b) => rank(a) - rank(b));
}

/** Up to DRILL_SIZE questions from the given questions, missed and unseen ones first. */
export function drillFrom(questions: readonly Question[], answers: readonly AnswerRecord[], rng: Rng): Question[] {
  return byPriority(questions, answers, rng).slice(0, DRILL_SIZE);
}

/** Accuracy per key topic from the answer history; topics never answered count as 75%. */
export function topicAccuracy(pool: readonly Question[], answers: readonly AnswerRecord[]): Map<number, number> {
  const topicOf = new Map(pool.map((q) => [q.id, q.keyTopic]));
  const tally = new Map<number, { ok: number; total: number }>();
  for (const a of answers) {
    const t = topicOf.get(a.q);
    if (t === undefined) continue;
    const s = tally.get(t) ?? { ok: 0, total: 0 };
    s.total++;
    if (a.ok) s.ok++;
    tally.set(t, s);
  }
  return new Map(pool.map((q) => [q.keyTopic, tally.has(q.keyTopic) ? tally.get(q.keyTopic)!.ok / tally.get(q.keyTopic)!.total : 0.75]));
}

/** Two questions from each of the five weakest key topics. */
export function weakestDrill(pool: readonly Question[], answers: readonly AnswerRecord[], rng: Rng): Question[] {
  const accuracy = topicAccuracy(pool, answers);
  const topics = shuffle([...accuracy.keys()], rng).sort((a, b) => accuracy.get(a)! - accuracy.get(b)!);
  return topics.slice(0, DRILL_SIZE / 2).flatMap((t) => byPriority(pool.filter((q) => q.keyTopic === t), answers, rng).slice(0, 2));
}
