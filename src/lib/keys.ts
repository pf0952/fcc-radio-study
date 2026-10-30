/** Display position (0-3) for answer keys 1-4 or A-D, else null. */
export function choiceKey(e: KeyboardEvent): number | null {
  const i = '1234'.indexOf(e.key) >= 0 ? '1234'.indexOf(e.key) : 'abcd'.indexOf(e.key.toLowerCase());
  return e.key.length === 1 && i >= 0 ? i : null;
}

/** True when the key event came from inside an element matching `selector`. */
export const fromInside = (e: KeyboardEvent, selector: string) => e.target instanceof Element && !!e.target.closest(selector);

/** True when a shortcut should be left alone: typing in a field, a modifier held, or a dialog open. */
export function ignoreShortcut(e: KeyboardEvent): boolean {
  return e.ctrlKey || e.altKey || e.metaKey || fromInside(e, 'input:not([type=range]), textarea, select, [contenteditable]') || !!document.querySelector('dialog[open]');
}

export function formatDuration(seconds: number): string {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;
  return h ? `${h} h ${String(m).padStart(2, '0')} min` : m ? `${m} min ${String(s).padStart(2, '0')} s` : `${s} s`;
}

/** A video-player time: "4:07", "1:05:20". */
export function formatClock(seconds: number): string {
  const total = Math.floor(seconds);
  const h = Math.floor(total / 3600);
  const m = Math.floor((total % 3600) / 60);
  const s = String(total % 60).padStart(2, '0');
  return h ? `${h}:${String(m).padStart(2, '0')}:${s}` : `${m}:${s}`;
}

/** A rough length, to the nearest 5 minutes: "About 50 min", "About 1 h 5 min". */
export function formatEstimate(seconds: number): string {
  const minutes = Math.max(5, Math.round(seconds / 300) * 5);
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return `About ${h ? `${h} h${m ? ` ${m} min` : ''}` : `${m} min`}`;
}

export const formatDate =(iso: string) => new Date(iso).toLocaleDateString(undefined, { day: 'numeric', month: 'short', year: 'numeric' });
