<script lang="ts">
  import ExamResults from '../components/ExamResults.svelte';
  import ExamRunner from '../components/ExamRunner.svelte';
  import { generateExam } from '../lib/exam.ts';
  import { elements } from '../lib/elements';
  import { formatDate } from '../lib/keys';
  import { nav } from '../lib/nav.svelte';
  import { pools } from '../lib/pools';
  import { progress, saveProgress } from '../lib/progress.svelte';
  import type { ExamMode } from '../lib/types.ts';

  let resultsId = $state<string | null>(nav.params.results ?? null);
  let view = $state<'list' | 'run' | 'results'>(nav.params.results ? 'results' : 'list');

  let confirmDiscard = $state(false);
  const options = $state(Object.fromEntries(elements.map((e) => [e.element, { mode: 'exam' as ExamMode, timer: false, minutes: e.exam.questions }])));

  const resultsExam = $derived(progress.exams.find((e) => e.id === resultsId));

  function start(element: number) {
    const o = options[element];
    progress.activeExam = {
      id: crypto.randomUUID(),
      element,
      mode: o.mode,
      startedAt: new Date().toISOString(),
      finishedAt: null,
      seconds: 0,
      timerMinutes: o.timer ? Math.max(1, Math.round(o.minutes)) : null,
      items: generateExam(pools[element], progress.answers, Math.random),
      current: 0,
      score: null,
      passed: null,
    };
    saveProgress();
    view = 'run';
  }

  function discard() {
    progress.activeExam = null;
    confirmDiscard = false;
    saveProgress();
  }

  function showResults(id: string) {
    resultsId = id;
    view = 'results';
  }
</script>

{#if view === 'run' && progress.activeExam}
  <ExamRunner exam={progress.activeExam} onfinish={showResults} onleave={() => (view = 'list')} />
{:else if view === 'results' && resultsExam}
  <ExamResults exam={resultsExam} onback={() => (view = 'list')} />
{:else}
  <h1>Practice Exams</h1>
  <p class="lead">
    Each exam is built like the real one: one question from every key topic, in random order. Exam mode holds all feedback until you submit;
    study mode checks each answer as you go.
  </p>

  {#if progress.activeExam}
    {@const a = progress.activeExam}
    <section class="card resume" aria-label="Unfinished exam">
      <p>
        <strong>Unfinished Element {a.element} exam</strong> ({a.mode} mode), {a.items.filter((i) => i.chosen !== null).length} of {a.items.length} answered.
      </p>
      <div class="buttons">
        {#if confirmDiscard}
          <span>Discard this exam? Your answers in it won't be scored.</span>
          <button class="secondary" onclick={() => (confirmDiscard = false)}>Keep it</button>
          <button class="danger" onclick={discard}>Discard</button>
        {:else}
          <button class="secondary" onclick={() => (confirmDiscard = true)}>Discard</button>
          <button class="primary" onclick={() => (view = 'run')}>Resume</button>
        {/if}
      </div>
    </section>
  {/if}

  <div class="elements">
    {#each elements as el (el.element)}
      {@const o = options[el.element]}
      {@const past = progress.exams.filter((e) => e.element === el.element).toReversed()}
      <section class="card" aria-labelledby="exam-el-{el.element}">
        <h2 id="exam-el-{el.element}">Element {el.element}: {el.name}</h2>
        <p class="muted">{el.exam.questions} questions, pass with {el.exam.passMark} correct.</p>

        <fieldset>
          <legend>Mode</legend>
          <label><input type="radio" bind:group={o.mode} value="exam" /> Exam mode</label>
          <label><input type="radio" bind:group={o.mode} value="study" /> Study mode</label>
        </fieldset>
        <div class="timer">
          <label><input type="checkbox" bind:checked={o.timer} /> Use a timer</label>
          {#if o.timer}
            <label class="minutes">
              <input type="number" min="1" max="300" bind:value={o.minutes} aria-label="Timer length in minutes" /> minutes
            </label>
          {/if}
        </div>
        <button class="primary" disabled={!!progress.activeExam} onclick={() => start(el.element)}>Start exam</button>
        {#if progress.activeExam}<p class="muted note">Finish or discard the unfinished exam first.</p>{/if}

        {#if past.length}
          <table>
            <caption class="muted">Past exams</caption>
            <thead><tr><th>Date</th><th>Mode</th><th>Score</th><th>Result</th><th><span class="sr-only">Results</span></th></tr></thead>
            <tbody>
              {#each past as e (e.id)}
                <tr>
                  <td>{formatDate(e.finishedAt!)}</td>
                  <td>{e.mode === 'study' ? 'Study' : 'Exam'}</td>
                  <td class="num">{e.score}/{e.items.length}</td>
                  <td>{e.passed ? 'Passed' : 'Not passed'}</td>
                  <td><button class="link" onclick={() => showResults(e.id)}>Results</button></td>
                </tr>
              {/each}
            </tbody>
          </table>
        {/if}
      </section>
    {/each}
  </div>
{/if}

<style>
  .resume {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    flex-wrap: wrap;
    margin-bottom: 1rem;
    border-left: 6px solid var(--accent);
  }

  .resume p {
    margin: 0;
  }

  .buttons {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    flex-wrap: wrap;
  }

  .elements {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(19rem, 1fr));
    gap: 1rem;
    align-items: start;
  }

  .elements .card {
    margin: 0;
  }

  fieldset {
    border: 0;
    padding: 0;
    margin: 0.75rem 0 0.5rem;
    display: flex;
    gap: 1.25rem;
  }

  legend {
    float: left;
    margin-right: 0.25rem;
    color: var(--muted);
  }

  .timer {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1rem;
    min-height: 2rem;
  }

  .minutes input {
    width: 4.5rem;
  }

  .note {
    margin: 0.4rem 0 0;
    font-size: 0.85rem;
  }

  table {
    width: 100%;
    margin-top: 1rem;
    border-collapse: collapse;
    font-size: 0.9rem;
  }

  caption {
    text-align: left;
    padding-bottom: 0.25rem;
  }

  th {
    text-align: left;
    font-weight: 600;
    color: var(--muted);
    border-bottom: 1px solid var(--border);
    padding: 0.3rem 0.4rem 0.3rem 0;
  }

  td {
    padding: 0.3rem 0.4rem 0.3rem 0;
    border-bottom: 1px solid var(--border);
  }

  .num {
    font-variant-numeric: tabular-nums;
  }
</style>
