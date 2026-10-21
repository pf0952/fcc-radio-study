import { test } from 'node:test';
import assert from 'node:assert/strict';
import { addDays, dueIds, nextCard } from '../src/lib/leitner.ts';

const today = '2026-10-21';

test('a missed question goes to box 1, due the next day', () => {
  assert.deepEqual(nextCard(undefined, false, today), { box: 1, due: '2026-10-22' });
});

test('a correct answer does not add a question to the deck', () => {
  assert.equal(nextCard(undefined, true, today), null);
});

test('each correct answer to a due card moves it up one box: due after 2, 4, 8, 16 days', () => {
  let card = nextCard(undefined, false, today)!;
  let day = card.due;
  const expected = [
    { box: 2, days: 2 },
    { box: 3, days: 4 },
    { box: 4, days: 8 },
    { box: 5, days: 16 },
  ];
  for (const { box, days } of expected) {
    card = nextCard(card, true, day)!;
    assert.deepEqual(card, { box, due: addDays(day, days) });
    day = card.due;
  }
});

test('a correct answer in box 5 retires the question', () => {
  assert.equal(nextCard({ box: 5, due: today }, true, today), null);
});

test('a correct answer before the due date leaves the card where it is', () => {
  const card = { box: 2, due: '2026-10-23' };
  assert.deepEqual(nextCard(card, true, today), card);
});

test('a miss from any box sends the card back to box 1', () => {
  for (let box = 1; box <= 5; box++) assert.deepEqual(nextCard({ box, due: today }, false, today), { box: 1, due: '2026-10-22' });
});

test('overdue cards count as due', () => {
  assert.deepEqual(nextCard({ box: 3, due: '2026-10-01' }, true, today), { box: 4, due: '2026-10-29' });
});

test('due cards are counted per element, most overdue first', () => {
  const deck = {
    '3-1A1': { box: 2, due: '2026-10-21' },
    '3-2A1': { box: 1, due: '2026-10-19' },
    '3-3A1': { box: 1, due: '2026-10-22' },
    '8-1A1': { box: 1, due: '2026-10-20' },
  };
  assert.deepEqual(dueIds(deck, 3, today), ['3-2A1', '3-1A1']);
  assert.deepEqual(dueIds(deck, 8, today), ['8-1A1']);
  assert.deepEqual(dueIds(deck, 9, today), []);
});

test('dates roll over months and years', () => {
  assert.equal(addDays('2026-12-31', 1), '2027-01-01');
  assert.equal(addDays('2028-02-28', 1), '2028-02-29');
  assert.equal(addDays('2026-03-07', 16), '2026-03-23');
});
