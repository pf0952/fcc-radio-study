<script lang="ts">
  import { newItem } from '../lib/exam.ts';
  import { choiceKey, fromInside, ignoreShortcut } from '../lib/keys';
  import { plain } from '../lib/rich';
  import { recordAnswer, saveProgress } from '../lib/progress.svelte';
  import type { Item, Question, Source } from '../lib/types.ts';
  import QuestionCard from './QuestionCard.svelte';

  /** A short question set with feedback after each answer: drills and missed-question reviews. */
  let { title, questions, source, onclose }: { title: string; questions: Question[]; source: Source; onclose: () => void } = $props();

  // The question set is fixed for the life of the runner.
  // svelte-ignore state_referenced_locally
  const items = $state<Item[]>(questions.map((q) => newItem(q, Math.random)));
  let index = $state(0);
  let done = $state(false);

  const item = $derived(items[index]);
  const question = $derived(questions[index]);
  const right = $derived(items.filter((i, n) => i.chosen === questions[n].answer).length);

  function choose(original: number) {
    if (item.chosen !== null) return;
    item.chosen = original;
    recordAnswer(question.id, original === question.answer, source);
    saveProgress();
  }

  function next() {
    if (item.chosen === null) return;
    if (index < items.length - 1) index++;
    else done = true;
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

{#if done}
  <section class="card">
    <p class="score">{right} of {items.length} correct</p>
    {#if right < items.length}
      <p>Missed this time (they're in your missed-questions deck):</p>
      <ul>
        {#each questions as q, n (q.id)}
          {#if items[n].chosen !== q.answer}<li><strong>{q.id}</strong> {plain(q.stem)}</li>{/if}
        {/each}
      </ul>
    {/if}
    <button class="primary" onclick={onclose}>Done</button>
  </section>
{:else}
  <section class="card" aria-label="Question {index + 1} of {items.length}">
    <p class="muted progress-line">Question {index + 1} of {items.length} · {right} correct so far</p>
    {#key question.id}
      <QuestionCard {question} {item} reveal={item.chosen !== null} locked={item.chosen !== null} onchoose={choose} />
    {/key}
    <div class="next">
      <button class="primary" disabled={item.chosen === null} onclick={next}>{index < items.length - 1 ? 'Next' : 'Finish'}</button>
    </div>
  </section>
{/if}

<style>
  .back {
    margin-bottom: 0.75rem;
  }

  .progress-line {
    margin: 0 0 0.75rem;
  }

  .next {
    display: flex;
    justify-content: flex-end;
    margin-top: 1.25rem;
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
