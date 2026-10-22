import { test } from 'node:test';
import assert from 'node:assert/strict';
import { emptyProgress, parseProgress, resetAll, resetElement } from '../src/lib/progress-data.ts';
import type { Exam, Progress } from '../src/lib/types.ts';

function sample(): Progress {
  const p = emptyProgress();
  p.answers = [
    { q: '3-1A1', ok: true, at: '2026-10-20T10:00:00Z', src: 'exam' },
    { q: '9-33D2', ok: false, at: '2026-10-20T10:01:00Z', src: 'checkpoint' },
  ];
  p.exams = [{ id: 'e3', element: 3 } as Exam, { id: 'e9', element: 9 } as Exam];
  p.activeExam = { id: 'a9', element: 9 } as Exam;
  p.deck = { '9-33D2': { box: 1, due: '2026-10-21' }, '3-5A3': { box: 2, due: '2026-10-22' } };
  p.lessons = { '9-D': { scene: 0, completed: true, completedAt: '2026-10-20T09:00:00Z' }, '3-A': { scene: 4, completed: false, completedAt: null } };
  p.quizzes = { '9-D': { passed: true, best: 5, last: 5, attempts: 1, at: '2026-10-20T09:30:00Z' } };
  p.lastLesson = '9-D';
  p.prefs = { ...p.prefs, theme: 'dark', textSize: 115, voice: 'Microsoft Zira' };
  return p;
}

test('exported progress reads back exactly (export, then import on another computer)', () => {
  const p = sample();
  assert.deepEqual(parseProgress(JSON.stringify(p)), p);
});

test('a progress file from an earlier version gets the new fields with their defaults', () => {
  // Phase 3-5 files had no lastLesson and only the lesson player settings.
  const old = { schema: 1, answers: [], exams: [], activeExam: null, deck: {}, lessons: {}, quizzes: {}, prefs: { voice: 'Microsoft David', rate: 1.25, captions: false } };
  const p = parseProgress(JSON.stringify(old));
  assert.equal(p.lastLesson, null);
  assert.deepEqual(p.prefs, { voice: 'Microsoft David', rate: 1.25, captions: false, theme: 'system', textSize: 100, unlockAll: false });
  const bare = parseProgress('{"schema":1}');
  assert.deepEqual(bare, emptyProgress());
});

test('files that are not progress are refused with a reason', () => {
  assert.throws(() => parseProgress('{"schema":1,'), /not valid JSON/);
  assert.throws(() => parseProgress('[1,2]'), /not FCC Radio Study progress/);
  assert.throws(() => parseProgress('{"name":"something else"}'), /not FCC Radio Study progress/);
  assert.throws(() => parseProgress('{"schema":2}'), /schema 2/);
  assert.throws(() => parseProgress('{"schema":1,"answers":{}}'), /"answers" is not a list/);
  assert.throws(() => parseProgress('{"schema":1,"deck":[]}'), /"deck" is not a record/);
});

test('resetting one element removes only that element and keeps the settings', () => {
  const p = resetElement(sample(), 9);
  assert.deepEqual(p.answers.map((a) => a.q), ['3-1A1']);
  assert.deepEqual(p.exams.map((e) => e.id), ['e3']);
  assert.equal(p.activeExam, null);
  assert.deepEqual(Object.keys(p.deck), ['3-5A3']);
  assert.deepEqual(Object.keys(p.lessons), ['3-A']);
  assert.deepEqual(p.quizzes, {});
  assert.equal(p.lastLesson, null);
  assert.equal(p.prefs.theme, 'dark');
});

test('resetting another element leaves an unfinished exam and the last lesson alone', () => {
  const p = resetElement(sample(), 3);
  assert.equal(p.activeExam?.id, 'a9');
  assert.equal(p.lastLesson, '9-D');
  assert.deepEqual(Object.keys(p.lessons), ['9-D']);
});

test('resetting everything keeps only the settings', () => {
  const p = resetAll(sample());
  assert.deepEqual({ ...p, prefs: null }, { ...emptyProgress(), prefs: null });
  assert.deepEqual(p.prefs, sample().prefs);
});
