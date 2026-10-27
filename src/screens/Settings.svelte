<script lang="ts">
  import { dataInfo, exportFile, showInFolder } from '../lib/backend';
  import { elements } from '../lib/elements';
  import { localDate } from '../lib/leitner.ts';
  import { parseProgress, resetAll, resetElement } from '../lib/progress-data.ts';
  import { progress, replaceProgress, saveProgress } from '../lib/progress.svelte';
  import type { Progress } from '../lib/types.ts';

  const SIZES = [
    { value: 90, label: 'Smaller (90%)' },
    { value: 100, label: 'Normal (100%)' },
    { value: 115, label: 'Larger (115%)' },
    { value: 130, label: 'Largest (130%)' },
  ];

  let message = $state<{ text: string; error: boolean; path?: string } | null>(null);
  let pending = $state<{ name: string; data: Progress } | null>(null);
  let resetTarget = $state('all');
  let fileInput: HTMLInputElement;
  let importDialog: HTMLDialogElement;
  let resetDialog: HTMLDialogElement;

  const summary = (p: Progress) =>
    `${Object.values(p.lessons).filter((l) => l.completed).length} lessons completed, ` +
    `${Object.values(p.quizzes).filter((q) => q.passed).length} section quizzes passed, ` +
    `${p.exams.length} practice exam${p.exams.length === 1 ? '' : 's'} and ${p.answers.length} answers`;

  async function exportProgress() {
    try {
      const path = await exportFile(`fcc-radio-study-progress-${localDate()}.json`, JSON.stringify($state.snapshot(progress)));
      message = { text: `Saved to ${path}. Copy it to the other computer, then choose "Import progress" there.`, error: false, path };
    } catch (e) {
      message = { text: `Export failed: ${e}`, error: true };
    }
  }

  async function importChosen() {
    const file = fileInput.files?.[0];
    fileInput.value = ''; // so choosing the same file again still counts
    if (!file) return;
    try {
      pending = { name: file.name, data: parseProgress(await file.text()) };
      importDialog.showModal();
    } catch (e) {
      message = { text: `${file.name} can't be imported. ${(e as Error).message}`, error: true };
    }
  }

  async function confirmImport() {
    if (!pending) return;
    const { name, data } = pending;
    importDialog.close();
    // Settings (speed, theme, text size) belong to this computer and stay as they are.
    await replaceProgress({ ...data, prefs: $state.snapshot(progress.prefs) });
    message = { text: `Imported ${name}: ${summary(data)}.`, error: false };
  }

  async function confirmReset() {
    resetDialog.close();
    const current = $state.snapshot(progress) as Progress;
    const all = resetTarget === 'all';
    await replaceProgress(all ? resetAll(current) : resetElement(current, Number(resetTarget)));
    message = { text: all ? 'All progress was reset.' : `Element ${resetTarget} progress was reset.`, error: false };
  }
</script>

<h1>Settings</h1>
<p class="lead">Appearance, moving your progress to another computer, and where it is stored.</p>

{#if message}
  {@const path = message.path}
  <p class="message card" class:error={message.error} role="status">
    {message.text}
    {#if path}<button class="link" onclick={() => showInFolder(path)}>Show in folder</button>{/if}
  </p>
{/if}

<div class="cards">
  <section class="card" aria-labelledby="settings-look">
    <h2 id="settings-look">Appearance</h2>
    <fieldset>
      <legend>Theme</legend>
      <label><input type="radio" name="theme" value="system" bind:group={progress.prefs.theme} onchange={saveProgress} /> Match Windows</label>
      <label><input type="radio" name="theme" value="light" bind:group={progress.prefs.theme} onchange={saveProgress} /> Light</label>
      <label><input type="radio" name="theme" value="dark" bind:group={progress.prefs.theme} onchange={saveProgress} /> Dark</label>
    </fieldset>
    <label class="row">
      Text size
      <select bind:value={progress.prefs.textSize} onchange={saveProgress}>
        {#each SIZES as s (s.value)}<option value={s.value}>{s.label}</option>{/each}
      </select>
    </label>
    <p class="muted note">The whole app scales with the window. Text size makes everything bigger or smaller on top of that; lesson scenes always fill their stage.</p>
  </section>

  <section class="card" aria-labelledby="settings-progress">
    <h2 id="settings-progress">Your progress</h2>
    <p class="muted">{summary(progress)}.</p>
    <div class="buttons">
      <button class="secondary" onclick={exportProgress}>Export progress</button>
      <button class="secondary" onclick={() => fileInput.click()}>Import progress…</button>
      <input bind:this={fileInput} type="file" accept=".json,application/json" class="sr-only" tabindex="-1" aria-hidden="true" onchange={importChosen} />
    </div>
    <p class="muted note">
      Export saves everything to one .json file in your Downloads folder. Import on another computer replaces the progress there; settings stay as they
      are.
    </p>

    <h3>Reset</h3>
    <div class="buttons">
      <label>
        <span class="sr-only">What to reset</span>
        <select bind:value={resetTarget}>
          <option value="all">All progress</option>
          {#each elements as el (el.element)}<option value={String(el.element)}>Element {el.element} only</option>{/each}
        </select>
      </label>
      <button class="danger" onclick={() => resetDialog.showModal()}>Reset…</button>
    </div>
  </section>

  <section class="card" aria-labelledby="settings-data">
    <h2 id="settings-data">Data folder</h2>
    {#await dataInfo()}
      <p class="muted">Checking…</p>
    {:then info}
      <p><code>{info.path}</code></p>
      {#if info.portable}
        <p class="muted">Portable: the folder sits next to the program, so your progress travels with it on a USB stick.</p>
      {:else}
        <p class="muted">The folder next to the program isn't writable, so your progress is stored in your Windows profile (%APPDATA%) instead.</p>
      {/if}
    {:catch err}
      <p class="error">Could not read the data folder: {err}</p>
    {/await}
  </section>

  <section class="card" aria-labelledby="settings-dev">
    <h2 id="settings-dev">Developer options</h2>
    <label class="row">
      <input type="checkbox" bind:checked={progress.prefs.unlockAll} onchange={saveProgress} />
      Unlock everything
    </label>
    <p class="muted note">Opens every practice exam without finishing the lessons and section quizzes. For testing; leave it off to study.</p>
  </section>
</div>

<dialog bind:this={importDialog} aria-labelledby="import-title" onclose={() => (pending = null)}>
  <h2 id="import-title">Replace your progress?</h2>
  {#if pending}
    <p><strong>{pending.name}</strong> has {summary(pending.data)}.</p>
    <p>It replaces all progress on this computer ({summary(progress)}). Export this computer's progress first if you might want it back.</p>
  {/if}
  <div class="dialog-actions">
    <button class="secondary" onclick={() => importDialog.close()}>Cancel</button>
    <button class="danger" onclick={confirmImport}>Replace my progress</button>
  </div>
</dialog>

<dialog bind:this={resetDialog} aria-labelledby="reset-title">
  <h2 id="reset-title">{resetTarget === 'all' ? 'Reset all progress?' : `Reset Element ${resetTarget}?`}</h2>
  <p>
    This deletes {resetTarget === 'all' ? 'all' : `Element ${resetTarget}'s`} lesson progress, section quiz results, practice exams, answer history and
    missed-questions deck. Your settings stay. It can't be undone, so export your progress first if you might want it back.
  </p>
  <div class="dialog-actions">
    <button class="secondary" onclick={() => resetDialog.close()}>Cancel</button>
    <button class="danger" onclick={confirmReset}>{resetTarget === 'all' ? 'Reset all progress' : `Reset Element ${resetTarget}`}</button>
  </div>
</dialog>

<style>
  /* Two columns when there is room, so the page fits the window. */
  .cards {
    columns: 2 24rem;
    column-gap: 1rem;
  }

  .cards > .card {
    break-inside: avoid;
    margin: 0 0 1rem;
  }

  .message {
    margin: 0 0 1rem;
    border-left: 4px solid var(--good);
  }

  .message.error {
    border-left-color: var(--bad);
  }

  h3 {
    font-size: 1rem;
    margin: 1.25rem 0 0.5rem;
  }

  fieldset {
    border: 0;
    padding: 0;
    margin: 0 0 0.75rem;
    display: flex;
    gap: 1.25rem;
    flex-wrap: wrap;
  }

  legend {
    float: left;
    margin-right: 0.5rem;
    color: var(--muted);
  }

  .row {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .note {
    margin: 0.5rem 0 0;
    font-size: 0.875rem;
  }

  .buttons {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    flex-wrap: wrap;
  }

  .error {
    color: var(--bad);
  }

  .dialog-actions {
    display: flex;
    justify-content: flex-end;
    gap: 0.6rem;
    margin-top: 1rem;
  }
</style>
