import pool3 from '../../content/pools/element-3.json';
import pool8 from '../../content/pools/element-8.json';
import pool9 from '../../content/pools/element-9.json';
import { elements, type ElementInfo } from './elements';
import type { Question } from './types.ts';

export const pools: Record<number, Question[]> = { 3: pool3, 8: pool8, 9: pool9 };
export const questionById = new Map(Object.values(pools).flat().map((q) => [q.id, q]));
export const elementInfo = (element: number): ElementInfo => elements.find((e) => e.element === element)!;

const figureFiles = import.meta.glob('../../content/figures/*.png', { eager: true, query: '?url', import: 'default' }) as Record<string, string>;

/** Bundled image URL for a pool figure, or null if the image is missing. */
export const figureUrl = (figure: string): string | null => figureFiles[`../../content/figures/${figure}.png`] ?? null;

/** Subelements of an element in order, with their titles. */
export function subelementsOf(element: number): { letter: string; title: string }[] {
  const seen = new Map<string, string>();
  for (const q of pools[element]) if (!seen.has(q.subelement)) seen.set(q.subelement, q.subelementTitle);
  return [...seen].map(([letter, title]) => ({ letter, title }));
}
