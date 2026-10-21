import { test } from 'node:test';
import assert from 'node:assert/strict';
import { revealed } from '../src/lessons/reveal.ts';
import { QUIZ_SIZE, drawCheckpoint, drawQuiz } from '../src/lib/quiz.ts';
import { pools, seeded } from './helpers.ts';

test('a section quiz has 5 different questions from the lesson key topics', () => {
  for (let seed = 1; seed <= 50; seed++) {
    const qs = drawQuiz(pools[9], [33, 34, 35, 36], seeded(seed));
    assert.equal(qs.length, QUIZ_SIZE);
    assert.equal(new Set(qs.map((q) => q.id)).size, QUIZ_SIZE);
    assert.ok(qs.every((q) => [33, 34, 35, 36].includes(q.keyTopic)));
  }
});

test('quiz questions are spread across as many key topics as possible', () => {
  for (let seed = 1; seed <= 50; seed++) {
    // 4 key topics: every topic appears, one of them twice.
    assert.equal(new Set(drawQuiz(pools[9], [33, 34, 35, 36], seeded(seed)).map((q) => q.keyTopic)).size, 4);
    // 10 key topics: 5 different topics.
    assert.equal(new Set(drawQuiz(pools[8], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], seeded(seed)).map((q) => q.keyTopic)).size, 5);
    // 2 key topics: both appear.
    assert.equal(new Set(drawQuiz(pools[3], [99, 100], seeded(seed)).map((q) => q.keyTopic)).size, 2);
  }
});

test('a retake draws a fresh set', () => {
  const ids = (seed: number) => drawQuiz(pools[9], [33, 34, 35, 36], seeded(seed)).map((q) => q.id).join();
  assert.notEqual(ids(1), ids(2));
});

test('a checkpoint question comes from the key topics just covered', () => {
  for (let seed = 1; seed <= 50; seed++) assert.equal(drawCheckpoint(pools[9], [34], seeded(seed)).keyTopic, 34);
});

test('scene items appear in order as the narration progresses, all before it ends', () => {
  assert.equal(revealed(0, 5), 1);
  assert.equal(revealed(0.5, 5), 3);
  assert.equal(revealed(0.85, 5), 5);
  assert.equal(revealed(1, 5), 5);
  assert.equal(revealed(1, 0), 0);
});
