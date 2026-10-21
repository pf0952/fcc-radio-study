import type { AnswerRecord, Item, Question, Rng } from './types.ts';

/** Fisher-Yates shuffle into a new array. */
export function shuffle<T>(items: readonly T[], rng: Rng): T[] {
  const out = [...items];
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

// Choices that point at the other choices; such questions keep their original order.
const KEEP_ORDER = [
  /\b(all|none|any)\s+of\s+(the\s+)?(above|these|following)\b/i, // all/none/any of the above, of these
  /^(both|neither)\b/i, // "Both ...", "Neither ..."
  /^(either\s+)?[A-D](\s*,\s*[A-D])*,?\s+(and|or|nor)\s+[A-D]\b/, // "A and C, but not B"
];

export const keepsOrder = (q: Question) => q.choices.some((c) => KEEP_ORDER.some((re) => re.test(c)));

export const choiceOrder = (q: Question, rng: Rng) => (keepsOrder(q) ? q.choices.map((_, i) => i) : shuffle(q.choices.map((_, i) => i), rng));

export const newItem = (q: Question, rng: Rng): Item => ({ q: q.id, order: choiceOrder(q, rng), chosen: null, flagged: false });

/** Latest answer time per question id. */
export function lastSeen(answers: readonly AnswerRecord[]): Map<string, string> {
  const seen = new Map<string, string>();
  for (const a of answers) if ((seen.get(a.q) ?? '') < a.at) seen.set(a.q, a.at);
  return seen;
}

/**
 * Builds an exam like the real one: one question from each key topic, in random order.
 * Within a key topic it picks among the questions answered least recently (never-answered first),
 * so repeated exams work through the whole pool.
 */
export function generateExam(pool: readonly Question[], answers: readonly AnswerRecord[], rng: Rng): Item[] {
  const seen = lastSeen(answers);
  const byTopic = new Map<number, Question[]>();
  for (const q of pool) byTopic.set(q.keyTopic, [...(byTopic.get(q.keyTopic) ?? []), q]);
  const picks = [...byTopic.values()].map((qs) => {
    const oldest = qs.reduce((min, q) => ((seen.get(q.id) ?? '') < min ? (seen.get(q.id) ?? '') : min), '￿');
    const candidates = qs.filter((q) => (seen.get(q.id) ?? '') === oldest);
    return candidates[Math.floor(rng() * candidates.length)];
  });
  return shuffle(picks, rng).map((q) => newItem(q, rng));
}

export const isCorrect = (item: Item, q: Question) => item.chosen === q.answer;

export const scoreItems = (items: readonly Item[], byId: ReadonlyMap<string, Question>) =>
  items.filter((item) => isCorrect(item, byId.get(item.q)!)).length;

export const isPass = (score: number, passMark: number) => score >= passMark;

export type SubelementStats = {
  subelement: string;
  title: string;
  correct: number;
  total: number;
  /** Key topics with at least one missed question, in key topic order. */
  missedTopics: { keyTopic: number; title: string }[];
};

/** Accuracy per subelement, weakest first (ties: more misses first, then letter). */
export function subelementStats(items: readonly Item[], byId: ReadonlyMap<string, Question>): SubelementStats[] {
  const stats = new Map<string, SubelementStats>();
  for (const item of items) {
    const q = byId.get(item.q)!;
    const s = stats.get(q.subelement) ?? { subelement: q.subelement, title: q.subelementTitle, correct: 0, total: 0, missedTopics: [] };
    s.total++;
    if (isCorrect(item, q)) s.correct++;
    else if (!s.missedTopics.some((t) => t.keyTopic === q.keyTopic)) s.missedTopics.push({ keyTopic: q.keyTopic, title: q.keyTopicTitle });
    stats.set(q.subelement, s);
  }
  for (const s of stats.values()) s.missedTopics.sort((a, b) => a.keyTopic - b.keyTopic);
  return [...stats.values()].sort(
    (a, b) => a.correct / a.total - b.correct / b.total || b.total - b.correct - (a.total - a.correct) || a.subelement.localeCompare(b.subelement),
  );
}
