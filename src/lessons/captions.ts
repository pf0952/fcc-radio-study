/** Longest caption, in words: two lines at the largest text size. */
const MAX_WORDS = 22;

/**
 * Splits narration into caption-sized pieces, as [start, end) offsets into the text: one sentence each,
 * with long sentences cut near the middle, at a comma or dash where there is one.
 */
export function captionChunks(text: string): [number, number][] {
  const out: [number, number][] = [];
  let start = 0;
  for (const m of text.matchAll(/[.!?]["')\]]*\s+(?=["'(\[]?[A-Z0-9])/g)) {
    const end = m.index + m[0].length;
    cut(text, start, end, out);
    start = end;
  }
  if (start < text.length) cut(text, start, text.length, out);
  return out;
}

function cut(text: string, a: number, b: number, out: [number, number][]) {
  const piece = text.slice(a, b);
  if (piece.trim().split(/\s+/).length <= MAX_WORDS) return void out.push([a, b]);
  const mid = (b - a) / 2;
  const nearest = (re: RegExp) => {
    let best = -1;
    for (const m of piece.matchAll(re)) {
      const at = m.index + m[0].length;
      if (best < 0 || Math.abs(at - mid) < Math.abs(best - mid)) best = at;
    }
    return best;
  };
  const punct = nearest(/[,;:]\s+|\s+[—–-]\s+/g);
  const at = punct > (b - a) / 4 && punct < ((b - a) * 3) / 4 ? punct : nearest(/\s+/g);
  cut(text, a, a + at, out);
  cut(text, a + at, b, out);
}

/** Index of the piece being spoken at character `at` (the last piece once narration is done). */
export const chunkAt = (chunks: [number, number][], at: number) => {
  const i = chunks.findIndex(([, end]) => at < end);
  return i < 0 ? chunks.length - 1 : i;
};
