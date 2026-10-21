<script lang="ts">
  import { isPass, scoreItems } from '../lib/exam.ts';
  import { choiceKey, formatDuration, fromInside, ignoreShortcut } from '../lib/keys';
  import { elementInfo, questionById } from '../lib/pools';
  import { progress, recordAnswer, saveProgress } from '../lib/progress.svelte';
  import type { Exam } from '../lib/types.ts';
  import QuestionCard from './QuestionCard.svelte';

  let { exam, onfinish, onleave }: { exam: Exam; onfinish: (id: string) => void; onleave: () => void } = $props();

  const info = $derived(elementInfo(exam.element));
  const study = $derived(exam.mode === 'study');
  const item = $derived(exam.items[exam.current]);
  const question = $derived(questionById.get(item.q)!);
  const answered = $derived(exam.items.filter((i) => i.chosen !== null).length);
  const unanswered = $derived(exam.items.flatMap((i, n) => (i.chosen === null ? [n] : [])));
  const flagged = $derived(exam.items.flatMap((i, n) => (i.flagged ? [n] : [])));
  const remaining = $derived(exam.timerMinutes ? exam.timerMinutes * 60 - exam.seconds : null);

  let confirm: HTMLDialogElement;

  // Count active time; save it now and then so it survives the app closing.
  $effect(() => {
    const timer = setInterval(() => {
      exam.seconds++;
      if (exam.seconds % 15 === 0) saveProgress();
    }, 1000);
    return () => clearInterval(timer);
  });

  function choose(original: number) {
    if (study && item.chosen !== null) return; // study mode locks the first answer
    item.chosen = original;
    if (study) recordAnswer(item.q, original === question.answer, 'study');
    saveProgress();
  }

  function goTo(n: number) {
    exam.current = Math.max(0, Math.min(exam.items.length - 1, n));
    saveProgress();
  }

  function toggleFlag() {
    item.flagged = !item.flagged;
    saveProgress();
  }

  function submit() {
    confirm.close();
    // Keep a reference: the `exam` prop reads progress.activeExam, which is cleared below.
    const finished = exam;
    for (const i of finished.items) {
      // Study mode already recorded answered questions; skipped ones count as missed.
      if (!study || i.chosen === null) recordAnswer(i.q, i.chosen === questionById.get(i.q)!.answer, study ? 'study' : 'exam');
    }
    finished.finishedAt = new Date().toISOString();
    finished.score = scoreItems(finished.items, questionById);
    finished.passed = isPass(finished.score, info.exam.passMark);
    progress.exams.push(finished);
    progress.activeExam = null;
    saveProgress();
    onfinish(finished.id);
  }

  function onkeydown(e: KeyboardEvent) {
    if (ignoreShortcut(e)) return;
    const pos = choiceKey(e);
    if (pos !== null && pos < item.order.length) {
      e.preventDefault();
      choose(item.order[pos]);
    } else if (e.key === 'Enter' && !fromInside(e, 'button')) {
      e.preventDefault();
      goTo(exam.current + 1);
    } else if (e.key === 'ArrowRight') {
      goTo(exam.current + 1);
    } else if (e.key === 'ArrowLeft') {
      goTo(exam.current - 1);
    } else if (e.key.toLowerCase() === 'f') {
      toggleFlag();
    }
  }

  const label = (n: number) => {
    const i = exam.items[n];
    const parts = [`Question ${n + 1}`, i.chosen === null ? 'not answered' : 'answered'];
    if (study && i.chosen !== null) parts.push(i.chosen === questionById.get(i.q)!.answer ? 'correct' : 'wrong');
    if (i.flagged) parts.push('flagged');
    return parts.join(', ');
  };
</script>

<svelte:window {onkeydown} />

<div class="runner">
  <header class="bar">
    <div>
      <h1>Element {exam.element} practice exam</h1>
      <p class="muted">
        {study ? 'Study mode: answers are checked as you go.' : 'Exam mode: no feedback until you submit.'}
        {answered} of {exam.items.length} answered.
      </p>
    </div>
    <div class="actions">
      {#if remaining !== null}
        <p class="timer" class:over={remaining <= 0} aria-live={remaining <= 0 ? 'polite' : 'off'}>
          {remaining > 0 ? `${formatDuration(remaining)} left` : 'Time is up. Submit when ready.'}
        </p>
      {/if}
      <button class="secondary" onclick={onleave}>Save and exit</button>
      <button class="primary" onclick={() => confirm.showModal()}>Submit exam</button>
    </div>
  </header>

  <div class="layout">
    <section class="card current" aria-label="Question {exam.current + 1} of {exam.items.length}">
      <div class="question-head">
        <h2>Question {exam.current + 1} of {exam.items.length}</h2>
        <button class="secondary small" aria-pressed={item.flagged} onclick={toggleFlag}>
          {item.flagged ? 'Flagged for review' : 'Flag for review'}
        </button>
      </div>
      {#key item.q}
        <QuestionCard {question} {item} reveal={study && item.chosen !== null} locked={study && item.chosen !== null} onchoose={choose} />
      {/key}
      <div class="nav-buttons">
        <button class="secondary" disabled={exam.current === 0} onclick={() => goTo(exam.current - 1)}>Previous</button>
        {#if exam.current < exam.items.length - 1}
          <button class="primary" onclick={() => goTo(exam.current + 1)}>Next</button>
        {:else}
          <button class="primary" onclick={() => confirm.showModal()}>Review and submit</button>
        {/if}
      </div>
    </section>

    <nav class="card grid-panel" aria-label="Question navigator">
      <h2>Questions</h2>
      <div class="grid">
        {#each exam.items as i, n (i.q)}
          <button
            class="cell"
            class:answered={i.chosen !== null}
            class:right={study && i.chosen !== null && i.chosen === questionById.get(i.q)!.answer}
            class:wrong={study && i.chosen !== null && i.chosen !== questionById.get(i.q)!.answer}
            class:flagged={i.flagged}
            aria-current={n === exam.current ? 'step' : undefined}
            aria-label={label(n)}
            onclick={() => goTo(n)}>{n + 1}</button
          >
        {/each}
      </div>
      <p class="legend muted"><span class="swatch answered"></span> Answered <span class="swatch flag"></span> Flagged</p>
    </nav>
  </div>
</div>

<dialog bind:this={confirm} aria-labelledby="submit-title">
  <h2 id="submit-title">Submit your exam?</h2>
  {#if unanswered.length}
    <p>{unanswered.length} question{unanswered.length === 1 ? ' is' : 's are'} not answered and will count as wrong:</p>
    <p class="jump-list">
      {#each unanswered as n (n)}
        <button class="link" onclick={() => (confirm.close(), goTo(n))}>{n + 1}</button>
      {/each}
    </p>
  {:else}
    <p>All {exam.items.length} questions are answered.</p>
  {/if}
  {#if flagged.length}
    <p class="muted">Flagged for review: {flagged.map((n) => n + 1).join(', ')}</p>
  {/if}
  <div class="dialog-actions">
    <button class="secondary" onclick={() => confirm.close()}>Keep working</button>
    <button class="primary" onclick={submit}>Submit</button>
  </div>
</dialog>

<style>
  .bar {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 1rem;
    margin-bottom: 1.25rem;
  }

  .bar p {
    margin: 0;
  }

  .actions {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    flex-wrap: wrap;
    justify-content: flex-end;
  }

  .timer {
    font-variant-numeric: tabular-nums;
    font-weight: 600;
  }

  .timer.over {
    color: var(--warn);
  }

  .layout {
    display: grid;
    grid-template-columns: minmax(0, 1fr) 17rem;
    gap: 1rem;
    align-items: start;
  }

  .question-head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    margin-bottom: 0.75rem;
  }

  .question-head h2 {
    margin: 0;
    font-size: 1rem;
    color: var(--muted);
  }

  .nav-buttons {
    display: flex;
    justify-content: space-between;
    margin-top: 1.25rem;
  }

  .grid-panel {
    position: sticky;
    top: 0;
  }

  .grid-panel h2 {
    font-size: 1rem;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(2.1rem, 1fr));
    gap: 0.3rem;
  }

  .cell {
    position: relative;
    height: 2.1rem;
    padding: 0;
    font-size: 0.8rem;
    font-variant-numeric: tabular-nums;
    background: var(--surface);
    color: var(--text);
    border: 1px solid var(--border);
    border-radius: 6px;
  }

  .cell.answered {
    background: var(--surface-2);
    font-weight: 600;
  }

  .cell.right {
    background: var(--good);
    border-color: var(--good);
    color: #fff;
  }

  .cell.wrong {
    background: var(--bad);
    border-color: var(--bad);
    color: #fff;
  }

  .cell.flagged::after,
  .swatch.flag {
    content: '';
    position: absolute;
    top: 2px;
    right: 2px;
    width: 0.45rem;
    height: 0.45rem;
    border-radius: 50%;
    background: var(--warn);
  }

  .cell[aria-current='step'] {
    outline: 2px solid var(--accent);
    outline-offset: 1px;
  }

  .legend {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    font-size: 0.8rem;
    margin: 0.75rem 0 0;
  }

  .swatch {
    position: relative;
    display: inline-block;
    width: 0.8rem;
    height: 0.8rem;
    border-radius: 3px;
    border: 1px solid var(--border);
  }

  .swatch.answered {
    background: var(--surface-2);
  }

  .swatch.flag {
    position: static;
    margin-left: 0.6rem;
    border: 0;
  }

  .jump-list {
    display: flex;
    flex-wrap: wrap;
    gap: 0.25rem 0.6rem;
  }

  .dialog-actions {
    display: flex;
    justify-content: flex-end;
    gap: 0.6rem;
    margin-top: 1rem;
  }
</style>
