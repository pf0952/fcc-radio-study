import { test } from 'node:test';
import assert from 'node:assert/strict';
import { DRILL_SIZE, drillFrom, weakestDrill } from '../src/lib/drill.ts';
import type { AnswerRecord } from '../src/lib/types.ts';
import { pools, seeded } from './helpers.ts';

const at = '2026-10-20T12:00:00.000Z';

test('a subelement drill has 10 questions from that subelement, last-missed first', () => {
  const sub = pools[8].filter((q) => q.subelement === 'E');
  const answers: AnswerRecord[] = [
    { q: sub[0].id, ok: false, at, src: 'exam' },
    { q: sub[1].id, ok: false, at, src: 'exam' },
    { q: sub[2].id, ok: true, at, src: 'exam' },
  ];
  const drill = drillFrom(sub, answers, seeded(1));
  assert.equal(drill.length, DRILL_SIZE);
  assert.ok(drill.every((q) => q.subelement === 'E'));
  assert.deepEqual(new Set(drill.slice(0, 2).map((q) => q.id)), new Set([sub[0].id, sub[1].id]));
  assert.ok(!drill.some((q) => q.id === sub[2].id), 'answered-right questions come after unseen ones');
});

test('a weakest-topics drill takes two questions from each of the five weakest key topics', () => {
  const weak = [3, 7, 12, 20, 41];
  const answers: AnswerRecord[] = pools[9].map((q) => ({ q: q.id, ok: !weak.includes(q.keyTopic), at, src: 'exam' }));
  const drill = weakestDrill(pools[9], answers, seeded(2));
  assert.equal(drill.length, DRILL_SIZE);
  assert.deepEqual([...new Set(drill.map((q) => q.keyTopic))].sort((a, b) => a - b), weak);
});
