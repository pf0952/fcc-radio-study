<script lang="ts">
  import { formatDate } from '../lib/keys';
  import type { Exam } from '../lib/types.ts';

  let { exams, passPct, highlight }: { exams: Exam[]; passPct: number; highlight?: string } = $props();

  // Fixed coordinate box; the SVG scales to its container.
  const W = 640;
  const H = 220;
  const pad = { left: 44, right: 16, top: 12, bottom: 30 };
  const x = (i: number, n: number) => (n === 1 ? (pad.left + W - pad.right) / 2 : pad.left + (i * (W - pad.left - pad.right)) / (n - 1));
  const y = (pct: number) => pad.top + ((100 - pct) * (H - pad.top - pad.bottom)) / 100;

  const points = $derived(
    exams.map((e, i) => {
      const pct = Math.round((e.score! / e.items.length) * 100);
      return { e, pct, x: x(i, exams.length), y: y(pct) };
    }),
  );
</script>

<svg viewBox="0 0 {W} {H}" role="img" aria-label="Scores of all {exams.length} practice exams for this element, oldest first; pass mark {passPct}%">
  {#each [0, 25, 50, 75, 100] as tick (tick)}
    <line class="grid" x1={pad.left} x2={W - pad.right} y1={y(tick)} y2={y(tick)} />
    <text class="axis" x={pad.left - 8} y={y(tick) + 4} text-anchor="end">{tick}%</text>
  {/each}
  <line class="pass" x1={pad.left} x2={W - pad.right} y1={y(passPct)} y2={y(passPct)} />
  <text class="axis" x={W - pad.right} y={y(passPct) - 6} text-anchor="end">Pass {passPct}%</text>

  {#if points.length > 1}
    <polyline class="line" points={points.map((p) => `${p.x},${p.y}`).join(' ')} />
  {/if}
  {#each points as p (p.e.id)}
    <g>
      <title>{formatDate(p.e.finishedAt!)} ({p.e.mode} mode): {p.e.score} of {p.e.items.length}, {p.pct}%, {p.e.passed ? 'passed' : 'not passed'}</title>
      <circle class="hit" cx={p.x} cy={p.y} r="12" />
      <circle class="dot" class:current={p.e.id === highlight} cx={p.x} cy={p.y} r={p.e.id === highlight ? 6 : 4.5} />
    </g>
  {/each}
  {#if points.length}
    <text class="axis" x={points[0].x} y={H - 8} text-anchor={points.length > 1 ? 'start' : 'middle'}>{formatDate(points[0].e.finishedAt!)}</text>
    {#if points.length > 1}
      <text class="axis" x={points.at(-1)!.x} y={H - 8} text-anchor="end">{formatDate(points.at(-1)!.e.finishedAt!)}</text>
    {/if}
  {/if}
</svg>

<style>
  svg {
    display: block;
    width: 100%;
    max-width: 44rem;
    height: auto;
  }

  .grid {
    stroke: var(--border);
    stroke-width: 1;
  }

  .pass {
    stroke: var(--text);
    stroke-width: 1.5;
  }

  .axis {
    fill: var(--muted);
    font-size: 12px;
    font-variant-numeric: tabular-nums;
  }

  .line {
    fill: none;
    stroke: var(--accent);
    stroke-width: 2;
    stroke-linejoin: round;
    stroke-linecap: round;
  }

  .hit {
    fill: transparent;
  }

  .dot {
    fill: var(--accent);
    stroke: var(--surface);
    stroke-width: 2;
  }

  .dot.current {
    stroke: var(--text);
  }
</style>
