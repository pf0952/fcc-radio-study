import { loadProgressFile, saveProgressFile } from './backend';
import { localDate, nextCard } from './leitner.ts';
import type { Progress, Source } from './types.ts';

const empty = (): Progress => ({ schema: 1, answers: [], exams: [], activeExam: null, deck: {} });

/** Everything the user has done, saved to progress.json. */
export const progress = $state<Progress>(empty());

/** Shown once at startup, e.g. when progress was restored from the backup. */
export const status = $state<{ notice: string | null; saveError: string | null }>({ notice: null, saveError: null });

export async function loadProgress() {
  const { data, notice } = await loadProgressFile();
  if (data) {
    const saved = JSON.parse(data) as Partial<Progress>;
    if (saved.schema !== 1) throw new Error(`progress.json has schema ${saved.schema}; this version of the app reads schema 1.`);
    Object.assign(progress, empty(), saved);
  }
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

/** Adds an answer to the history and updates the missed-questions deck. Call saveProgress() after. */
export function recordAnswer(q: string, ok: boolean, src: Source) {
  progress.answers.push({ q, ok, at: new Date().toISOString(), src });
  const card = nextCard(progress.deck[q], ok, localDate());
  if (card) progress.deck[q] = card;
  else delete progress.deck[q];
}
