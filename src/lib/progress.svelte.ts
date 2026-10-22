import { loadProgressFile, saveProgressFile } from './backend';
import { localDate, nextCard } from './leitner.ts';
import { emptyProgress, parseProgress } from './progress-data.ts';
import type { Progress, Source } from './types.ts';

/** Everything the user has done, saved to progress.json. */
export const progress = $state<Progress>(emptyProgress());

/** Shown once at startup, e.g. when progress was restored from the backup. */
export const status = $state<{ notice: string | null; saveError: string | null }>({ notice: null, saveError: null });

export async function loadProgress() {
  const { data, notice } = await loadProgressFile();
  if (data) Object.assign(progress, parseProgress(data));
  status.notice = notice;
}

let queue = Promise.resolve();

/** Saves the whole progress file. Saves run one after another, never overlapping. */
export function saveProgress(): Promise<void> {
  const data = JSON.stringify($state.snapshot(progress));
  queue = queue
    .then(() => saveProgressFile(data))
    .then(() => {
      status.saveError = null;
    })
    .catch((e) => {
      status.saveError = String(e);
    });
  return queue;
}

/** Replaces all progress (after an import or a reset) and saves it. */
export function replaceProgress(next: Progress): Promise<void> {
  Object.assign(progress, next);
  return saveProgress();
}

/** Adds an answer to the history and updates the missed-questions deck. Call saveProgress() after. */
export function recordAnswer(q: string, ok: boolean, src: Source) {
  progress.answers.push({ q, ok, at: new Date().toISOString(), src });
  const card = nextCard(progress.deck[q], ok, localDate());
  if (card) progress.deck[q] = card;
  else delete progress.deck[q];
}
