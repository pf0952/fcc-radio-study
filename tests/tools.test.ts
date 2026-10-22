import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readdirSync, readFileSync } from 'node:fs';
import { evaluate, formatResult, withPrefix } from '../src/lib/calc.ts';
import { csvCell, examCsv } from '../src/lib/csv.ts';
import { factSheet } from '../src/lib/factsheet.ts';
import { readiness } from '../src/lib/readiness.ts';
import type { AnswerRecord, Exam, Lesson } from '../src/lib/types.ts';
import { byId, pools } from './helpers.ts';

const close = (a: number, b: number) => assert.ok(Math.abs(a - b) <= 1e-9 * Math.max(1, Math.abs(b)), `${a} is not ${b}`);

test('calculator: precedence, unary minus, powers and parentheses', () => {
  assert.equal(evaluate('2 + 3 * 4'), 14);
  assert.equal(evaluate('(2 + 3) * 4'), 20);
  assert.equal(evaluate('-2^2'), -4);
  assert.equal(evaluate('2^3^2'), 512);
  assert.equal(evaluate('2^-1'), 0.5);
  assert.equal(evaluate('10 - 4 - 3'), 3);
  assert.equal(evaluate('12 / 4 / 3'), 1);
  assert.equal(evaluate('3 × 4 ÷ 2 − 1'), 5);
  assert.equal(evaluate('1,000 * 2'), 2000);
  assert.equal(evaluate('2 ** 10'), 1024);
});

test('calculator: SI prefixes, pi and side-by-side multiplication as in formulas', () => {
  close(evaluate('4.7k'), 4700);
  close(evaluate('100u'), 1e-4);
  close(evaluate('100µ'), 1e-4);
  close(evaluate('2.5M + 3G'), 3.0025e9);
  close(evaluate('1e-6 * 12.34'), 12.34e-6);
  close(evaluate('2pi'), 2 * Math.PI);
  close(evaluate('2π'), 2 * Math.PI);
  // X_C = 1 / (2 pi f C) for 500 kHz and 0.001 µF, written the way the formula is.
  close(evaluate('1 / 2pi 500k 0.001u'), 1 / (2 * Math.PI * 500e3 * 1e-9));
  close(evaluate('3(4 + 1)'), 15);
});

test('calculator: functions, degrees and the previous answer', () => {
  close(evaluate('sqrt(100 * 50)'), Math.sqrt(5000));
  close(evaluate('√16 + 1'), 5);
  close(evaluate('cos(60)'), 0.5);
  close(evaluate('atan(1)'), 45);
  close(evaluate('10 log(500 / 0.5)'), 30);
  close(evaluate('ln(exp(2))'), 2);
  close(evaluate('ans * 2', 21), 42);
  close(evaluate('sqrt(100)^2'), 100);
});

test('calculator: mistakes give a message instead of a wrong number', () => {
  assert.throws(() => evaluate(''), /Type an expression/);
  assert.throws(() => evaluate('2 +'), /ends too soon/);
  assert.throws(() => evaluate('(2 + 3'), /closing parenthesis/);
  assert.throws(() => evaluate('2 + 3)'), /Unexpected text/);
  assert.throws(() => evaluate('1 / 0'), /undefined/);
  assert.throws(() => evaluate('foo(2)'), /Unknown name "foo"/);
  assert.throws(() => evaluate('ans + 1'), /no previous answer/);
  assert.throws(() => evaluate('4.7kΩ'), /"Ω"/);
  assert.throws(() => evaluate('alert(1)'), /Unknown name "alert"/);
});

test('calculator: results are shown plainly, with an SI prefix where one helps', () => {
  assert.equal(formatResult(0.1 + 0.2), '0.3');
  assert.equal(formatResult(318.3098862), '318.3098862');
  assert.equal(formatResult(4.7e-5), '4.7e-5');
  assert.equal(formatResult(1.2e10), '1.2e+10');
  assert.equal(formatResult(0), '0');
  assert.equal(withPrefix(4.7e-5), '47 µ');
  assert.equal(withPrefix(16200), '16.2 k');
  assert.equal(withPrefix(42), null);
});

test('CSV: fields with commas, quotes or line breaks are quoted', () => {
  assert.equal(csvCell('plain'), 'plain');
  assert.equal(csvCell('a, b'), '"a, b"');
  assert.equal(csvCell('say "hi"'), '"say ""hi"""');
  assert.equal(csvCell('two\nlines'), '"two\nlines"');
  assert.equal(csvCell(42), '42');
});

test('CSV: an exam result lists every question with the letters shown in that exam', () => {
  const q1 = pools[9][0];
  const q2 = pools[9][6];
  const exam: Exam = {
    id: 'x',
    element: 9,
    mode: 'exam',
    startedAt: '2026-10-22T09:00:00Z',
    finishedAt: '2026-10-22T09:40:00Z',
    seconds: 2400,
    timerMinutes: null,
    items: [
      { q: q1.id, order: [3, 2, 1, 0], chosen: q1.answer, flagged: false },
      { q: q2.id, order: [0, 1, 2, 3], chosen: null, flagged: true },
    ],
    current: 0,
    score: 1,
    passed: false,
    };
  const csv = examCsv(exam, byId, 38);
  assert.ok(csv.startsWith('﻿'));
  const lines = csv.slice(1).trimEnd().split('\r\n');
  assert.match(lines[1], /^Finished,2026-10-2[12] \d\d:\d\d$/); // local time, whatever the time zone
  assert.equal(lines[3], 'Score,1 of 2');
  assert.equal(lines[4], 'Result,Not passed (pass mark 38)');
  assert.equal(lines[7], 'Number,Question,Subelement,Key topic,Your answer,Correct answer,Result');
  assert.equal(lines.length, 10);
  const shown = 'ABCD'[3 - q1.answer];
  assert.ok(lines[8].startsWith(`1,${q1.id},A,1,`));
  assert.ok(lines[8].includes(`${shown}. `));
  assert.ok(lines[8].endsWith(',Correct'));
  assert.ok(lines[9].includes(',Not answered,'));
  assert.ok(lines[9].endsWith(',Wrong'));
});

test('readiness: nothing answered is no reading; it fills only as the pool is covered', () => {
  const pool = pools[8];
  assert.equal(readiness(pool, [], []).score, null);
  // Perfect answers in subelement A only: readiness is A's share of the key topics.
  const aIds = pool.filter((q) => q.subelement === 'A').map((q) => q.id);
  const answers: AnswerRecord[] = aIds.map((q) => ({ q, ok: true, at: '2026-10-22T10:00:00Z', src: 'drill' }));
  const r = readiness(pool, answers, []);
  const a = r.subelements.find((s) => s.letter === 'A')!;
  assert.equal(a.accuracy, 1);
  assert.equal(a.answered, 20); // only the 20 most recent answers per subelement count
  close(r.score!, a.keyTopics / 50);
  assert.equal(r.subelements.find((s) => s.letter === 'B')!.accuracy, null);
});

test('readiness: averages the last 3 exams with the subelement accuracy', () => {
  const pool = pools[9];
  const exam = (score: number) => ({ element: 9, score, items: Array(50) }) as unknown as Exam;
  const answers: AnswerRecord[] = pool.map((q, i) => ({ q: q.id, ok: i % 2 === 0, at: '2026-10-22T10:00:00Z', src: 'exam' }));
  const r = readiness(pool, answers, [exam(10), exam(40), exam(40), exam(40)]);
  close(r.examAverage!, 0.8);
  assert.equal(r.examCount, 3);
  const coverage = r.subelements.reduce((s, x) => s + x.keyTopics * x.accuracy!, 0) / 50;
  close(r.score!, (0.8 + coverage) / 2);
});

test('fact sheet: every formula scene of an element appears once, with its worked example', () => {
  const lessons: Lesson[] = readdirSync('content/lessons')
    .filter((f) => f.startsWith('8-'))
    .map((f) => JSON.parse(readFileSync(`content/lessons/${f}`, 'utf8')));
  const sheet = factSheet(lessons);
  assert.equal(sheet.length, 6);
  const formulas = sheet.flatMap((s) => s.formulas);
  const distinct = new Set(lessons.flatMap((l) => l.scenes.filter((s) => s.template === 'formula').map((s) => (s.params as { formula: string }).formula)));
  assert.equal(formulas.length, distinct.size);
  assert.ok(formulas.some((f) => f.formula.includes('12.34 µs')));
  assert.ok(formulas.every((f) => f.example.length >= 1));
});
