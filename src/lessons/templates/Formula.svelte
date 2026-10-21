<script lang="ts">
  import { rich } from '../../lib/rich';
  import { revealed } from '../reveal';

  /** Writes the formula, then the worked example line by line, then the boxed answer. */
  let { params, fraction }: { params: { title: string; formula: string; steps: string[]; answer: string }; fraction: number } = $props();
  const shown = $derived(revealed(fraction, params.steps.length + 2));
</script>

<div class="formula">
  <h2>{params.title}</h2>
  <p class="main">{@html rich(params.formula)}</p>
  <ol>
    {#each params.steps as step, i (i)}
      <li class:shown={i + 1 < shown}>{@html rich(step)}</li>
    {/each}
  </ol>
  <p class="answer" class:shown={shown >= params.steps.length + 2}><span>{@html rich(params.answer)}</span></p>
</div>

<style>
  .formula {
    padding: 4cqi 6cqi;
  }

  h2 {
    margin: 0 0 2.5cqi;
    font-size: 3.4cqi;
  }

  .main {
    margin: 0 0 3cqi;
    font-family: 'Cambria Math', Cambria, Georgia, serif;
    font-size: 4.6cqi;
    color: var(--st-amber);
    animation: wipe 1.4s ease-out both;
  }

  ol {
    list-style: none;
    margin: 0;
    padding: 0;
    display: grid;
    gap: 1.2cqi;
  }

  li {
    font-family: 'Cambria Math', Cambria, Georgia, serif;
    font-size: 3cqi;
    opacity: 0;
    clip-path: inset(0 100% 0 0);
    transition:
      opacity 0.3s,
      clip-path 1s ease-out;
  }

  li.shown {
    opacity: 1;
    clip-path: inset(0 0 0 0);
  }

  .answer {
    margin: 3cqi 0 0;
    opacity: 0;
    transition: opacity 0.6s;
  }

  .answer.shown {
    opacity: 1;
  }

  .answer span {
    display: inline-block;
    padding: 1.2cqi 2.4cqi;
    font-family: 'Cambria Math', Cambria, Georgia, serif;
    font-size: 3.6cqi;
    font-weight: 700;
    border: 0.35cqi solid var(--st-teal);
    border-radius: 0.8cqi;
  }

  @keyframes wipe {
    from {
      clip-path: inset(0 100% 0 0);
    }
    to {
      clip-path: inset(0 0 0 0);
    }
  }
</style>
