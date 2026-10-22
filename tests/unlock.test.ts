import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readdirSync, readFileSync } from 'node:fs';
import { emptyProgress } from '../src/lib/progress-data.ts';
import { nextStep, unlockStatus } from '../src/lib/unlock.ts';
import type { Exam, Lesson, Progress } from '../src/lib/types.ts';
import { pools } from './helpers.ts';

const subelements = (element: number) => [...new Map(pools[element].map((q) => [q.subelement, q.subelementTitle]))].map(([letter, title]) => ({ letter, title }));
const lessons: Lesson[] = readdirSync('content/lessons')
  .sort((a, b) => a.localeCompare(b, 'en', { numeric: true }))
  .map((f) => JSON.parse(readFileSync(`content/lessons/${f}`, 'utf8')));

const done = { scene: 0, completed: true, completedAt: '2026-10-22T10:00:00Z' };
const passed = { passed: true, best: 5, last: 5, attempts: 1, at: '2026-10-22T10:00:00Z' };
const failed = { passed: false, best: 2, last: 2, attempts: 1, at: '2026-10-22T10:00:00Z' };

/** Progress with every lesson of the element completed and every quiz passed. */
function finished(element: number): Progress {
  const p = emptyProgress();
  for (const { letter } of subelements(element)) {
    p.lessons[`${element}-${letter}`] = { ...done };
    p.quizzes[`${element}-${letter}`] = { ...passed };
  }
  return p;
}

test('a new user has every element locked, with a full checklist', () => {
  for (const element of [3, 8, 9]) {
    const s = unlockStatus(element, subelements(element), emptyProgress());
    assert.equal(s.unlocked, false);
    assert.equal(s.done, 0);
    assert.equal(s.steps.length, subelements(element).length);
    assert.equal(s.total, s.steps.length * 2);
    assert.ok(s.steps.every((st) => !st.lessonDone && !st.quizPassed));
  }
  assert.deepEqual(
    unlockStatus(9, subelements(9), emptyProgress()).steps.map((s) => s.lesson),
    ['9-A', '9-B', '9-C', '9-D', '9-E', '9-F', '9-G'],
  );
});

test('an element unlocks when every lesson is completed and every quiz is passed', () => {
  assert.equal(unlockStatus(8, subelements(8), finished(8)).unlocked, true);
  assert.equal(unlockStatus(8, subelements(8), finished(8)).done, 12);
});

test('one lesson not played to the end keeps the element locked, and the checklist names it', () => {
  const p = finished(9);
  p.lessons['9-C'] = { scene: 12, completed: false, completedAt: null };
  const s = unlockStatus(9, subelements(9), p);
  assert.equal(s.unlocked, false);
  assert.deepEqual(
    s.steps.filter((st) => !st.lessonDone || !st.quizPassed).map((st) => [st.lesson, st.lessonDone, st.quizPassed]),
    [['9-C', false, true]],
  );
});

test('a quiz that needs review keeps the element locked; a missing quiz does too', () => {
  const p = finished(9);
  p.quizzes['9-E'] = { ...failed };
  assert.equal(unlockStatus(9, subelements(9), p).unlocked, false);
  delete p.quizzes['9-E'];
  assert.equal(unlockStatus(9, subelements(9), p).unlocked, false);
});

test('a section stays passed after a later lower score, so the element stays unlocked', () => {
  const p = finished(9);
  p.quizzes['9-A'] = { passed: true, best: 4, last: 1, attempts: 3, at: '2026-10-22T11:00:00Z' };
  assert.equal(unlockStatus(9, subelements(9), p).unlocked, true);
});

test('progress in one element never unlocks another', () => {
  const p = { ...finished(3), ...{ lessons: { ...finished(3).lessons, ...finished(8).lessons }, quizzes: { ...finished(3).quizzes, ...finished(8).quizzes } } };
  assert.equal(unlockStatus(3, subelements(3), p).unlocked, true);
  assert.equal(unlockStatus(8, subelements(8), p).unlocked, true);
  assert.equal(unlockStatus(9, subelements(9), p).unlocked, false);
});

test('the developer switch unlocks everything without changing the checklist', () => {
  const s = unlockStatus(3, subelements(3), emptyProgress(), true);
  assert.equal(s.unlocked, true);
  assert.equal(s.done, 0);
});

test('continue: a new user starts with the first lesson', () => {
  const step = nextStep(emptyProgress(), lessons);
  assert.equal(step?.kind, 'lesson');
  assert.equal(step?.kind === 'lesson' && step.lesson.id, '3-A');
});

test('continue: an unfinished exam comes first', () => {
  const p = emptyProgress();
  p.activeExam = { element: 8 } as Exam;
  p.lastLesson = '9-D';
  assert.deepEqual(nextStep(p, lessons), { kind: 'exam', element: 8 });
});

test('continue: resume the last lesson at its scene, then its quiz, then the next lesson', () => {
  const p = emptyProgress();
  p.lastLesson = '9-D';
  p.lessons['9-D'] = { scene: 6, completed: false, completedAt: null };
  let step = nextStep(p, lessons);
  assert.ok(step?.kind === 'lesson' && step.lesson.id === '9-D' && step.scene === 6);

  p.lessons['9-D'] = { ...done };
  step = nextStep(p, lessons);
  assert.ok(step?.kind === 'quiz' && step.lesson.id === '9-D');

  p.quizzes['9-D'] = { ...passed };
  step = nextStep(p, lessons);
  assert.ok(step?.kind === 'lesson' && step.lesson.id === '9-E' && step.scene === 0);
});

test('continue: after the last lesson it goes back for skipped ones, then to a practice exam', () => {
  const p = finished(9);
  p.lastLesson = '9-G';
  delete p.quizzes['9-B'];
  const step = nextStep(p, lessons);
  assert.ok(step?.kind === 'quiz' && step.lesson.id === '9-B');
  p.quizzes['9-B'] = { ...passed };
  assert.deepEqual(nextStep(p, lessons), { kind: 'practice', element: 9 });
});
