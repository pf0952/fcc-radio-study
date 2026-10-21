/** Display position (0-3) for answer keys 1-4 or A-D, else null. */
export function choiceKey(e: KeyboardEvent): number | null {
  const i = '1234'.indexOf(e.key) >= 0 ? '1234'.indexOf(e.key) : 'abcd'.indexOf(e.key.toLowerCase());
  return e.key.length === 1 && i >= 0 ? i : null;
}

/** True when the key event came from inside an element matching `selector`. */
export const fromInside = (e: KeyboardEvent, selector: string) => e.target instanceof Element && !!e.target.closest(selector);

/** True when a shortcut should be left alone: typing in a field, a modifier held, or a dialog open. */
export function ignoreShortcut(e: KeyboardEvent): boolean {
  return e.ctrlKey || e.altKey || e.metaKey || fromInside(e, 'input, textarea, select, [contenteditable]') || !!document.querySelector('dialog[open]');
}

export function formatDuration(seconds: number): string {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;
  return h ? `${h} h ${String(m).padStart(2, '0')} min` : m ? `${m} min ${String(s).padStart(2, '0')} s` : `${s} s`;
}

export const formatDate = (iso: string) => new Date(iso).toLocaleDateString(undefined, { day: 'numeric', month: 'short', year: 'numeric' });
