<script lang="ts">
  import ExamResults from '../components/ExamResults.svelte';
  import ExamRunner from '../components/ExamRunner.svelte';
  import { generateExam } from '../lib/exam.ts';
  import { elements } from '../lib/elements';
  import { formatDate } from '../lib/keys';
  import { go, nav, toTop } from '../lib/nav.svelte';
  import { pools, subelementsOf } from '../lib/pools';
  import { progress, saveProgress } from '../lib/progress.svelte';
  import { unlockStatus } from '../lib/unlock.ts';
  import type { ExamMode } from '../lib/types.ts';

  let resultsId = $state<string | null>(nav.params.results ?? null);
  let view = $state<'list' | 'run' | 'results'>(nav.params.results ? 'results' : nav.params.resume && progress.activeExam ? 'run' : 'list');
  $effect(() => {
    void view;
    toTop();
  });

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
    study mode checks each answer as you go. An element's exams open once you've finished its lessons and passed its section quizzes.
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

  <!-- Three across when the exams are open; the longer checklists of locked elements need the width of two. -->
  <div class="elements" class:locked-any={elements.some((el) => !unlockStatus(el.element, subelementsOf(el.element), progress, progress.prefs.unlockAll).unlocked)}>
    {#each elements as el (el.element)}
      {@const o = options[el.element]}
      {@const past = progress.exams.filter((e) => e.element === el.element).toReversed()}
      {@const lock = unlockStatus(el.element, subelementsOf(el.element), progress, progress.prefs.unlockAll)}
      <section class="card" aria-labelledby="exam-el-{el.element}">
        <h2 id="exam-el-{el.element}">Element {el.element}: {el.name}</h2>
        <p class="muted">{el.exam.questions} questions, pass with {el.exam.passMark} correct.</p>

        {#if !lock.unlocked}
          <div class="locked">
            <p>
              <strong>Locked.</strong> These exams open once every Element {el.element} lesson is played to the end and every section quiz is passed:
              {lock.done} of {lock.total} done.
            </p>
            <ul class="checklist" aria-label="What's left for Element {el.element}">
              {#each lock.steps.filter((s) => !s.lessonDone || !s.quizPassed) as s (s.lesson)}
                <li>
                  <span class="what"><strong>{s.lesson}</strong> {s.title}</span>
                  <span class="marks">
                    <span class:ok={s.lessonDone}><span aria-hidden="true">{s.lessonDone ? '✓' : '○'}</span> Lesson<span class="sr-only">{s.lessonDone ? ' done' : ' not done'}</span></span>
                    <span class:ok={s.quizPassed}><span aria-hidden="true">{s.quizPassed ? '✓' : '○'}</span> Quiz<span class="sr-only">{s.quizPassed ? ' passed' : ' not passed'}</span></span>
                  </span>
                  {#if !s.lessonDone}
                    <button class="secondary small" onclick={() => go('study', { lesson: s.lesson })} aria-label="Play lesson {s.lesson}">Play</button>
                  {:else}
                    <button class="secondary small" onclick={() => go('study', { quiz: s.lesson })} aria-label="Take the {s.lesson} section quiz">Quiz</button>
                  {/if}
                </li>
              {/each}
            </ul>
          </div>
        {:else}
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
        {/if}

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
    grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
    gap: 1rem;
    align-items: start;
  }

  .elements.locked-any {
    grid-template-columns: repeat(auto-fit, minmax(19rem, 1fr));
  }

  .elements .card {
    margin: 0;
  }

  fieldset {
    border: 0;
    padding: 0;
    margin: 0.75rem 0 0.5rem;
    display: flex;
    flex-wrap: wrap;
    gap: 0.25rem 1.25rem;
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

  .locked {
    margin-top: 0.75rem;
    padding: 0.75rem 0.9rem;
    border-radius: var(--radius);
    background: var(--surface-2);
  }

  .locked > p {
    margin: 0 0 0.6rem;
    font-size: 0.9rem;
  }

  .checklist {
    list-style: none;
    margin: 0;
    padding: 0;
    display: grid;
    gap: 0.35rem;
  }

  .checklist li {
    display: grid;
    grid-template-columns: 1fr auto auto;
    align-items: center;
    gap: 0.6rem;
    font-size: 0.875rem;
  }

  .what {
    min-width: 0;
  }

  .marks {
    display: flex;
    gap: 0.6rem;
    color: var(--muted);
    white-space: nowrap;
  }

  .marks .ok {
    color: var(--good);
    font-weight: 600;
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
