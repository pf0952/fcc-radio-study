import elements from '../content/elements.json' with { type: 'json' };
import pool3 from '../content/pools/element-3.json' with { type: 'json' };
import pool8 from '../content/pools/element-8.json' with { type: 'json' };
import pool9 from '../content/pools/element-9.json' with { type: 'json' };
import type { Question, Rng } from '../src/lib/types.ts';

export const pools: Record<number, Question[]> = { 3: pool3, 8: pool8, 9: pool9 };
export const byId = new Map(Object.values(pools).flat().map((q) => [q.id, q]));
export { elements };

/** Small seeded generator (mulberry32) so failures are reproducible. */
export function seeded(seed: number): Rng {
  return () => {
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
