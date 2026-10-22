<script lang="ts">
  import { onMount } from 'svelte';
  import { evaluate, formatResult, withPrefix } from '../lib/calc.ts';

  /** Calculator panel for study mode and drills (never shown in exam mode). */
  let { onclose }: { onclose: () => void } = $props();

  let expr = $state('');
  let error = $state<string | null>(null);
  let history = $state<{ expr: string; value: number }[]>([]);
  let input: HTMLInputElement;
  const latest = $derived(history[0]);

  function calculate(e: SubmitEvent) {
    e.preventDefault();
    try {
      const value = evaluate(expr, latest?.value ?? null);
      history = [{ expr, value }, ...history].slice(0, 6);
      expr = '';
      error = null;
    } catch (err) {
      error = (err as Error).message;
    }
  }

  function reuse(text: string) {
    expr = text;
    input.focus();
  }

  onMount(() => input.focus());
</script>

<section class="card calc" aria-labelledby="calc-title">
  <div class="head">
    <h2 id="calc-title">Calculator</h2>
    <button class="link" onclick={onclose}>Close</button>
  </div>
  <form onsubmit={calculate}>
    <input
      bind:this={input}
      bind:value={expr}
      aria-label="Expression"
      aria-describedby="calc-help"
      placeholder="e.g. 1 / 2pi 500k 0.001u"
      autocomplete="off"
      spellcheck="false"
    />
    <button class="primary" type="submit" aria-label="Calculate">=</button>
  </form>
  <output class="result" aria-live="polite">
    {#if error}
      <span class="error">{error}</span>
    {:else if latest}
      <span class="value">{formatResult(latest.value)}</span>
      {#if withPrefix(latest.value)}<span class="muted">= {withPrefix(latest.value)}</span>{/if}
    {/if}
  </output>
  <!-- The latest result is shown above, unless an error message has taken its place. -->
  {#if history.length > (error ? 0 : 1)}
    <ol class="history" aria-label="Earlier results">
      {#each history.slice(error ? 0 : 1) as h, i (i)}
        <li><button class="link" onclick={() => reuse(h.expr)}>{h.expr}</button> <span class="muted">= {formatResult(h.value)}</span></li>
      {/each}
    </ol>
  {/if}
  <details id="calc-help">
    <summary>What you can type</summary>
    <ul>
      <li><code>+ - * / ^</code> and parentheses; <code>×</code> and <code>÷</code> work too</li>
      <li>Prefixes right after a number: <code>p n u m k M G</code>, as in <code>4.7k</code> or <code>100u</code></li>
      <li><code>pi</code>, and <code>ans</code> for the last result</li>
      <li><code>sqrt log ln exp sin cos tan asin acos atan</code>, angles in degrees</li>
      <li>Numbers side by side multiply first, as in a formula: <code>1 / 2pi 500k 0.001u</code> is 1 ÷ (2 × π × 500k × 0.001u)</li>
    </ul>
  </details>
</section>

<style>
  .calc {
    margin: 0;
  }

  .head {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
  }

  .head h2 {
    font-size: 1rem;
  }

  form {
    display: flex;
    gap: 0.4rem;
  }

  input {
    flex: 1;
    min-width: 0;
    font-family: 'Cascadia Mono', Consolas, monospace;
  }

  .result {
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    gap: 0.5rem;
    min-height: 2.2rem;
    margin: 0.5rem 0;
  }

  .value {
    font-size: 1.35rem;
    font-weight: 700;
    font-variant-numeric: tabular-nums;
    overflow-wrap: anywhere;
  }

  .error {
    color: var(--bad);
    font-size: 0.875rem;
  }

  .history {
    list-style: none;
    margin: 0 0 0.5rem;
    padding: 0;
    font-size: 0.85rem;
    font-family: 'Cascadia Mono', Consolas, monospace;
  }

  .history li {
    overflow-wrap: anywhere;
  }

  details {
    font-size: 0.8rem;
  }

  summary {
    cursor: pointer;
    color: var(--muted);
  }

  details ul {
    margin: 0.4rem 0 0;
    padding-left: 1.1rem;
  }
</style>
