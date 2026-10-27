<script lang="ts">
  import { openUrl } from '../lib/backend';
  import { elementInfo, figureUrl } from '../lib/pools';
  import { rich } from '../lib/rich';
  import type { Item, Question } from '../lib/types.ts';

  let {
    question,
    item,
    reveal = false,
    locked = false,
    onchoose,
  }: {
    question: Question;
    item: Item;
    /** Show right/wrong, the explanation and any flag note. */
    reveal?: boolean;
    locked?: boolean;
    onchoose?: (original: number) => void;
  } = $props();

  const figure = $derived(question.figure ? figureUrl(question.figure) : null);
  const verdict = $derived(item.chosen === null ? 'Not answered.' : item.chosen === question.answer ? 'Correct.' : 'Not quite.');
</script>

<article class="question" aria-labelledby="stem-{question.id}">
  <p class="meta">{question.id} · Key topic {question.keyTopic}: {question.keyTopicTitle}</p>
  <div class="body" class:with-figure={question.figure && figure}>
    <p class="stem" id="stem-{question.id}">{@html rich(question.stem)}</p>

    {#if question.figure}
      {#if figure}
        <figure>
          <img src={figure} alt="Figure {question.figure} from the official question pool" />
        </figure>
      {:else}
        <p class="missing-figure">
          Figure {question.figure} - see the official pool.
          <button class="link" onclick={() => openUrl(elementInfo(question.element).pool.url)}>Open the official pool</button>
        </p>
      {/if}
    {/if}

    <div class="choices" role="group" aria-label="Answer choices">
      {#each item.order as original, pos (original)}
        {@const chosen = item.chosen === original}
        {@const keyed = original === question.answer}
        <button
          class="choice"
          class:chosen
          class:right={reveal && keyed}
          class:wrong={reveal && chosen && !keyed}
          aria-pressed={chosen}
          aria-disabled={locked}
          onclick={() => !locked && onchoose?.(original)}
        >
          <span class="letter" aria-hidden="true">{'ABCD'[pos]}</span>
          <span class="text">{@html rich(question.choices[original])}</span>
          {#if reveal && keyed}
            <span class="tag">Correct answer</span>
          {:else if reveal && chosen}
            <span class="tag">Your answer</span>
          {/if}
        </button>
      {/each}
    </div>
  </div>

  {#if reveal}
    <div class="feedback" class:good={item.chosen === question.answer} role="status">
      <p class="verdict">{verdict}</p>
      <p>{@html rich(question.explanation)}</p>
      {#if question.flag}
        <p class="flag"><strong>Note on this answer:</strong> {question.flag}</p>
      {/if}
    </div>
  {/if}
</article>

<style>
  .meta {
    margin: 0 0 0.5rem;
    color: var(--muted);
    font-size: 0.85rem;
  }

  .stem {
    margin: 0 0 0.75rem;
    font-size: 1.15rem;
    font-weight: 600;
    line-height: 1.45;
  }

  figure {
    margin: 0 0 1rem;
    padding: 0.75rem;
    background: #fff;
    border: 1px solid var(--border);
    border-radius: var(--radius);
    width: fit-content;
    max-width: 100%;
  }

  /* Capped in height too, so a tall diagram still leaves the choices on screen. */
  img {
    display: block;
    width: 30rem;
    max-width: 100%;
    height: auto;
    max-height: 12rem;
    object-fit: contain;
  }

  .question {
    container-type: inline-size;
  }

  /* When the card is wide, the figure sits beside the stem and choices instead of above them. */
  @container (min-width: 44rem) {
    .with-figure {
      display: grid;
      grid-template-columns: minmax(0, 1fr) minmax(0, 40%);
      grid-template-rows: auto 1fr;
      column-gap: 1.25rem;
      align-items: start;
    }

    .with-figure .stem,
    .with-figure .choices {
      grid-column: 1;
    }

    .with-figure figure {
      grid-column: 2;
      grid-row: 1 / span 2;
      margin: 0;
    }

    .with-figure img {
      max-height: 16rem;
    }
  }

  .missing-figure {
    padding: 0.75rem 1rem;
    border: 1px dashed var(--border);
    border-radius: var(--radius);
  }

  .choices {
    display: grid;
    gap: 0.4rem;
  }

  .choice {
    display: grid;
    grid-template-columns: 1.75rem 1fr auto;
    align-items: center;
    gap: 0.75rem;
    text-align: left;
    padding: 0.45rem 0.9rem;
    background: var(--surface);
    color: var(--text);
    border: 1px solid var(--border);
    border-radius: var(--radius);
  }

  .choice:hover:not([aria-disabled='true']) {
    border-color: var(--accent);
  }

  .choice[aria-disabled='true'] {
    cursor: default;
  }

  .letter {
    display: grid;
    place-items: center;
    width: 1.75rem;
    height: 1.75rem;
    border-radius: 50%;
    background: var(--surface-2);
    font-weight: 600;
  }

  .chosen {
    border-color: var(--accent);
    box-shadow: inset 0 0 0 1px var(--accent);
  }

  .chosen .letter {
    background: var(--accent);
    color: var(--accent-text);
  }

  .right {
    border-color: var(--good);
    box-shadow: inset 0 0 0 1px var(--good);
  }

  .right .letter {
    background: var(--good);
    color: #fff;
  }

  .wrong {
    border-color: var(--bad);
    box-shadow: inset 0 0 0 1px var(--bad);
  }

  .wrong .letter {
    background: var(--bad);
    color: #fff;
  }

  .tag {
    font-size: 0.8rem;
    font-weight: 600;
    color: var(--muted);
    white-space: nowrap;
  }

  .feedback {
    margin-top: 0.75rem;
    padding: 0.7rem 1rem;
    border-radius: var(--radius);
    border-left: 4px solid var(--bad);
    background: var(--surface-2);
  }

  .feedback.good {
    border-left-color: var(--good);
  }

  .feedback p {
    margin: 0.25rem 0;
  }

  .verdict {
    font-weight: 700;
  }

  .flag {
    padding-top: 0.5rem;
    border-top: 1px solid var(--border);
    color: var(--warn);
  }
</style>
