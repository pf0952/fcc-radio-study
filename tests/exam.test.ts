import { test } from 'node:test';
import assert from 'node:assert/strict';
import { generateExam, isCorrect, isPass, keepsOrder, scoreItems, subelementStats } from '../src/lib/exam.ts';
import type { AnswerRecord, Item } from '../src/lib/types.ts';
import { byId, elements, pools, seeded } from './helpers.ts';

for (const el of elements) {
  test(`Element ${el.element}: an exam has exactly one question from each of the ${el.keyTopics} key topics`, () => {
    for (let seed = 1; seed <= 20; seed++) {
      const items = generateExam(pools[el.element], [], seeded(seed));
      assert.equal(items.length, el.exam.questions);
      const topics = items.map((i) => byId.get(i.q)!.keyTopic);
      assert.deepEqual([...topics].sort((a, b) => a - b), Array.from({ length: el.keyTopics }, (_, i) => i + 1));
      assert.ok(items.every((i) => byId.get(i.q)!.element === el.element));
    }
  });
}

test('questions come in random order, and different exams differ', () => {
  const a = generateExam(pools[3], [], seeded(1)).map((i) => i.q);
  const b = generateExam(pools[3], [], seeded(2)).map((i) => i.q);
  assert.notDeepEqual(a, b);
  const topics = a.map((id) => byId.get(id)!.keyTopic);
  assert.notDeepEqual(topics, [...topics].sort((x, y) => x - y), 'not in key topic order');
});

test('prefers questions not answered recently', () => {
  // Answer questions 1-5 of every key topic; the exam must pick question 6 every time.
  const answers: AnswerRecord[] = pools[8].filter((q) => !q.id.endsWith('6')).map((q) => ({ q: q.id, ok: true, at: '2026-01-01T00:00:00.000Z', src: 'drill' }));
  const items = generateExam(pools[8], answers, seeded(3));
  assert.ok(items.every((i) => i.q.endsWith('6')));
});

test('six exams in a row cover every question in the pool once', () => {
  const answers: AnswerRecord[] = [];
  const asked = new Set<string>();
  for (let n = 0; n < 6; n++) {
    const at = new Date(Date.UTC(2026, 0, 1 + n)).toISOString();
    for (const item of generateExam(pools[9], answers, seeded(10 + n))) {
      assert.ok(!asked.has(item.q), `${item.q} repeated before the pool was used up`);
      asked.add(item.q);
      answers.push({ q: item.q, ok: false, at, src: 'exam' });
    }
  }
  assert.equal(asked.size, pools[9].length);
});

test('shuffled choices still track the keyed answer', () => {
  let shuffled = 0;
  for (let seed = 1; seed <= 10; seed++) {
    for (const el of [3, 8, 9]) {
      for (const item of generateExam(pools[el], [], seeded(seed))) {
        const q = byId.get(item.q)!;
        assert.deepEqual([...item.order].sort(), [0, 1, 2, 3], 'order is a permutation');
        const shownAt = item.order.indexOf(q.answer); // where the keyed choice is displayed
        assert.equal(q.choices[item.order[shownAt]], q.choices[q.answer]);
        assert.ok(isCorrect({ ...item, chosen: item.order[shownAt] }, q), 'picking the displayed keyed choice scores as correct');
        for (let p = 0; p < 4; p++) if (p !== shownAt) assert.ok(!isCorrect({ ...item, chosen: item.order[p] }, q));
        if (item.order.some((o, i) => o !== i)) shuffled++;
      }
    }
  }
  assert.ok(shuffled > 1000, `most exams shuffle their choices (got ${shuffled})`);
});

test('"all of the above" and similar questions keep their original order', () => {
  const keep = {
    '3-28C6': 'All of the above.',
    '3-2A6': 'None of these.',
    '8-41E6': 'Any of the above.',
    '3-50F1': 'A and C, but not B.',
    '8-16B2': 'Both the TR and ATR tubes.',
  };
  for (const [id, choice] of Object.entries(keep)) {
    const q = byId.get(id)!;
    assert.ok(q.choices.includes(choice), `${id} has "${choice}"`);
    assert.ok(keepsOrder(q), `${id} keeps its order`);
  }
  assert.ok(!keepsOrder(byId.get('3-1A1')!), 'an ordinary question is shuffled');
  assert.ok(!keepsOrder(byId.get('8-10A3')!), '"With A and B high" names figure inputs, not choices');

  const keepIds = new Set(Object.values(pools).flat().filter(keepsOrder).map((q) => q.id));
  for (let seed = 1; seed <= 30; seed++) {
    for (const el of [3, 8, 9]) {
      for (const item of generateExam(pools[el], [], seeded(seed))) {
        if (keepIds.has(item.q)) assert.deepEqual(item.order, [0, 1, 2, 3], `${item.q} not shuffled`);
      }
    }
  }
});

/** An exam where the first `right` questions are answered correctly, the next `wrong` incorrectly, the rest skipped. */
function answered(el: number, right: number, wrong: number): Item[] {
  return generateExam(pools[el], [], seeded(99)).map((item, i) => {
    const q = byId.get(item.q)!;
    const chosen = i < right ? q.answer : i < right + wrong ? (q.answer + 1) % 4 : null;
    return { ...item, chosen };
  });
}

test('scoring counts only correct answers; skipped questions are wrong', () => {
  assert.equal(scoreItems(answered(3, 80, 15), byId), 80);
  assert.equal(scoreItems(answered(8, 0, 50), byId), 0);
  assert.equal(scoreItems(answered(9, 50, 0), byId), 50);
  assert.equal(scoreItems(answered(9, 20, 0), byId), 20);
});

test('pass/fail uses each element pass mark (Element 3: 75 of 100; Elements 8 and 9: 38 of 50)', () => {
  const mark: Record<number, number> = Object.fromEntries(elements.map((e) => [e.element, e.exam.passMark]));
  assert.deepEqual({ ...mark }, { 3: 75, 8: 38, 9: 38 });
  assert.ok(isPass(scoreItems(answered(3, 75, 25), byId), mark[3]));
  assert.ok(!isPass(scoreItems(answered(3, 74, 26), byId), mark[3]));
  for (const el of [8, 9]) {
    assert.ok(isPass(scoreItems(answered(el, 38, 12), byId), mark[el]));
    assert.ok(!isPass(scoreItems(answered(el, 37, 13), byId), mark[el]));
  }
});

test('subelement accuracy lists the weakest first, with the missed key topics', () => {
  // Miss every question in subelement Q (key topics 99 and 100), get everything else right.
  const items = generateExam(pools[3], [], seeded(5)).map((item) => {
    const q = byId.get(item.q)!;
    return { ...item, chosen: q.subelement === 'Q' ? (q.answer + 1) % 4 : q.answer };
  });
  const stats = subelementStats(items, byId);
  assert.equal(stats.length, 17);
  assert.equal(stats[0].subelement, 'Q');
  assert.deepEqual([stats[0].correct, stats[0].total], [0, 2]);
  assert.deepEqual(stats[0].missedTopics.map((t) => t.keyTopic), [99, 100]);
  assert.ok(stats.slice(1).every((s) => s.correct === s.total && s.missedTopics.length === 0));
  assert.equal(stats.reduce((n, s) => n + s.total, 0), 100);
});
