import type { DeckCard } from './types.ts';

/** Days until a card in box 1-5 is due again. */
export const INTERVAL_DAYS = [1, 2, 4, 8, 16];

/** Local calendar date as YYYY-MM-DD. */
export function localDate(d = new Date()): string {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

export function addDays(date: string, days: number): string {
  const [y, m, d] = date.split('-').map(Number);
  return localDate(new Date(y, m - 1, d + days));
}

/**
 * The missed-questions deck after one answer. Returns the question's new card, or null when it
 * leaves (or never enters) the deck.
 * - A miss anywhere puts the question in box 1, due tomorrow (box 1 is due daily).
 * - A correct answer to a due card moves it up one box; box n is next due after INTERVAL_DAYS[n-1] days.
 * - A correct answer in box 5 retires it. Correct answers before the due date don't move a card.
 */
export function nextCard(card: DeckCard | undefined, correct: boolean, today: string): DeckCard | null {
  if (!correct) return { box: 1, due: addDays(today, INTERVAL_DAYS[0]) };
  if (!card) return null;
  if (card.due > today) return card;
  if (card.box >= 5) return null;
  const box = card.box + 1;
  return { box, due: addDays(today, INTERVAL_DAYS[box - 1]) };
}

export const isDue = (card: DeckCard, today: string) => card.due <= today;

/** Ids of an element's cards that are due, most overdue first. */
export function dueIds(deck: Record<string, DeckCard>, element: number, today: string): string[] {
  return Object.entries(deck)
    .filter(([id, card]) => id.startsWith(`${element}-`) && isDue(card, today))
    .sort(([, a], [, b]) => a.due.localeCompare(b.due) || a.box - b.box)
    .map(([id]) => id);
}
