<script lang="ts">
  import { newItem } from '../lib/exam.ts';
  import { choiceKey, fromInside, ignoreShortcut } from '../lib/keys';
  import { plain } from '../lib/rich';
  import { recordAnswer, saveProgress } from '../lib/progress.svelte';
  import type { Snippet } from 'svelte';
  import type { Item, Question, Source } from '../lib/types.ts';
  import Calculator from './Calculator.svelte';
  import QuestionCard from './QuestionCard.svelte';

  type Result = { right: number; missed: Question[] };

  /** A short question set with feedback after each answer: drills, missed-question reviews and section quizzes. */
  let {
    title,
    questions,
    source,
    onclose,
    onfinish,
    summary,
  }: {
    title: string;
    questions: Question[];
    source: Source;
    onclose: () => void;
    onfinish?: (result: Result) => void;
    /** Replaces the default end-of-set summary. */
    summary?: Snippet<[Result]>;
  } = $props();

  // The question set is fixed for the life of the runner.
  // svelte-ignore state_referenced_locally
  const items = $state<Item[]>(questions.map((q) => newItem(q, Math.random)));
  let index = $state(0);
  let done = $state(false);
  let showCalc = $state(false);

  const item = $derived(items[index]);
  const question = $derived(questions[index]);
  const right = $derived(items.filter((i, n) => i.chosen === questions[n].answer).length);
  const result = $derived({ right, missed: questions.filter((q, n) => items[n].chosen !== q.answer) });

  function choose(original: number) {
    if (item.chosen !== null) return;
    item.chosen = original;
    recordAnswer(question.id, original === question.answer, source);
    saveProgress();
  }

  function next() {
    if (item.chosen === null) return;
    if (index < items.length - 1) index++;
    else {
      done = true;
      onfinish?.(result);
    }
  }

  function onkeydown(e: KeyboardEvent) {
    if (done || ignoreShortcut(e)) return;
    const pos = choiceKey(e);
    if (pos !== null && pos < item.order.length) {
      e.preventDefault();
      choose(item.order[pos]);
    } else if (e.key === 'Enter' && !fromInside(e, 'button')) {
      e.preventDefault();
      next();
    }
  }
</script>

<svelte:window {onkeydown} />

<button class="link back" onclick={onclose}>← Back</button>
<h1>{title}</h1>

{#if done && summary}
  {@render summary(result)}
{:else if done}
  <section class="card">
    <p class="score">{right} of {items.length} correct</p>
    {#if result.missed.length}
      <p>Missed this time (they're in your missed-questions deck):</p>
      <ul>
        {#each result.missed as q (q.id)}
          <li><strong>{q.id}</strong> {plain(q.stem)}</li>
        {/each}
      </ul>
    {/if}
    <button class="primary" onclick={onclose}>Done</button>
  </section>
{:else}
  <div class="work" class:with-calc={showCalc}>
    <section class="card" aria-label="Question {index + 1} of {items.length}">
      <div class="progress-line">
        <p class="muted">Question {index + 1} of {items.length} · {right} correct so far</p>
        <button class="secondary small" aria-expanded={showCalc} onclick={() => (showCalc = !showCalc)}>Calculator</button>
      </div>
      {#key question.id}
        <QuestionCard {question} {item} reveal={item.chosen !== null} locked={item.chosen !== null} onchoose={choose} />
      {/key}
      <div class="next">
        <button class="primary" disabled={item.chosen === null} onclick={next}>{index < items.length - 1 ? 'Next' : 'Finish'}</button>
      </div>
    </section>
    {#if showCalc}<Calculator onclose={() => (showCalc = false)} />{/if}
  </div>
{/if}

<style>
  .back {
    margin-bottom: 0.75rem;
  }

  .progress-line {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    margin: 0 0 0.75rem;
  }

  .progress-line p {
    margin: 0;
  }

  .work.with-calc {
    display: grid;
    grid-template-columns: minmax(0, 1fr) 18rem;
    gap: 1rem;
    align-items: start;
  }

  .next {
    display: flex;
    justify-content: flex-end;
    margin-top: 0.75rem;
  }

  .score {
    font-size: 1.75rem;
    font-weight: 700;
    margin: 0 0 0.5rem;
  }

  ul {
    padding-left: 1.2rem;
  }
</style>
