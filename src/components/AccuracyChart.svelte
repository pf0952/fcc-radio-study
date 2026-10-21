<script lang="ts">
  import type { SubelementStats } from '../lib/exam.ts';

  let { stats, passPct }: { stats: SubelementStats[]; passPct: number } = $props();

  const pct = (s: SubelementStats) => Math.round((s.correct / s.total) * 100);
</script>

<!-- Horizontal bars, weakest first. One series, so no legend; each value sits beside its bar. -->
<div class="chart" style="--p: {passPct / 100}">
  <div class="pass" aria-hidden="true"><span>Pass {passPct}%</span></div>
  <ul aria-label="Accuracy by subelement, weakest first; pass mark {passPct}%">
    {#each stats as s (s.subelement)}
      <li title="Subelement {s.subelement}, {s.title}: {s.correct} of {s.total} correct ({pct(s)}%)">
        <span class="label">{s.subelement} · {s.title}</span>
        <span class="track" aria-hidden="true"><span class="bar" style="width: {pct(s)}%"></span></span>
        <span class="value"><span class="sr-only">{s.subelement} · {s.title}: </span>{s.correct}/{s.total}</span>
      </li>
    {/each}
  </ul>
</div>

<style>
  .chart {
    --label: 14rem;
    --value: 3rem;
    --gap: 0.75rem;
    position: relative;
    padding-top: 1.4rem;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    display: grid;
    grid-template-columns: var(--label) minmax(0, 1fr) var(--value);
    column-gap: var(--gap);
    align-items: center;
    height: 1.75rem;
  }

  .label {
    font-size: 0.9rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .track {
    height: 100%;
    display: flex;
    align-items: center;
    border-left: 1px solid var(--border);
  }

  .bar {
    height: 1rem;
    background: var(--accent);
    border-radius: 0 4px 4px 0;
  }

  .value {
    font-size: 0.85rem;
    color: var(--muted);
    font-variant-numeric: tabular-nums;
  }

  /* Pass line across the bar column. */
  .pass {
    position: absolute;
    top: 0;
    bottom: 0;
    left: calc(var(--label) + var(--gap) + (100% - var(--label) - var(--value) - 2 * var(--gap)) * var(--p));
    border-left: 2px solid var(--text);
    pointer-events: none;
  }

  .pass span {
    position: absolute;
    top: 0;
    left: 0.35rem;
    font-size: 0.75rem;
    color: var(--muted);
    white-space: nowrap;
  }
</style>
