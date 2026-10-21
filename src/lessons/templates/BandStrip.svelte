<script lang="ts">
  import { rich } from '../../lib/rich';
  import { revealed } from '../reveal';

  type Mark = { at: number; label: string; note?: string; tone?: 'key' | 'muted' };
  /**
   * Frequencies or channels placed along a band. Pins sit at their place on the strip; their labels are
   * spread evenly underneath (in band order) with connector lines, so close frequencies never collide.
   */
  let {
    params,
    fraction,
  }: { params: { title: string; min: number; max: number; scale?: 'linear' | 'log' | 'even'; ends?: [string, string]; marks: Mark[] }; fraction: number } = $props();

  const X0 = 110;
  const X1 = 1490;
  const STRIP = 250;
  const shown = $derived(revealed(fraction, params.marks.length));

  const order = $derived([...params.marks.keys()].sort((a, b) => params.marks[a].at - params.marks[b].at));
  function position(i: number): number {
    const { min, max, scale } = params;
    const at = params.marks[i].at;
    if (scale === 'even') return X0 + ((order.indexOf(i) + 0.5) * (X1 - X0)) / params.marks.length;
    const t = scale === 'log' ? (Math.log(at) - Math.log(min)) / (Math.log(max) - Math.log(min)) : (at - min) / (max - min);
    return X0 + Math.min(1, Math.max(0, t)) * (X1 - X0);
  }
  const slotW = $derived((X1 - X0) / params.marks.length);
  const slot = (i: number) => X0 + (order.indexOf(i) + 0.5) * slotW;
</script>

<svg viewBox="0 0 1600 900" role="presentation">
  <defs>
    <linearGradient id="band-fill" x1="0" x2="1">
      <stop offset="0" stop-color="var(--st-line)" />
      <stop offset="1" stop-color="var(--st-panel)" />
    </linearGradient>
  </defs>
  <text class="title" x="60" y="90">{params.title}</text>
  <rect x={X0} y={STRIP} width={X1 - X0} height="34" rx="17" fill="url(#band-fill)" class="strip" />
  {#if params.ends}
    <text class="end" x={X0} y={STRIP + 80}>{params.ends[0]}</text>
    <text class="end" x={X1} y={STRIP + 80} text-anchor="end">{params.ends[1]}</text>
  {/if}

  {#each params.marks as m, i (i)}
    {#if i < shown}
      {@const x = position(i)}
      {@const sx = slot(i)}
      <g class="mark {m.tone ?? ''}">
        <polyline points="{x},{STRIP + 17} {x},{STRIP + 120} {sx},{STRIP + 200} {sx},{STRIP + 250}" class="connector" />
        <line x1={x} y1={STRIP - 46} x2={x} y2={STRIP + 34} class="pin" />
        <circle cx={x} cy={STRIP - 52} r="15" class="head" />
        <foreignObject x={sx - Math.min(170, slotW / 2 - 8)} y={STRIP + 255} width={Math.min(340, slotW - 16)} height="330">
          <div class="card">
            <strong>{@html rich(m.label)}</strong>
            {#if m.note}<span>{@html rich(m.note)}</span>{/if}
          </div>
        </foreignObject>
      </g>
    {/if}
  {/each}
</svg>

<style>
  svg {
    width: 100%;
    height: 100%;
  }

  .title {
    fill: var(--st-text);
    font-size: 54px;
    font-weight: 700;
  }

  .strip {
    stroke: var(--st-line);
    stroke-width: 2;
  }

  .end {
    fill: var(--st-muted);
    font-size: 28px;
  }

  .mark {
    animation: appear 0.6s ease-out both;
  }

  .pin {
    stroke: var(--st-teal);
    stroke-width: 6;
  }

  .head {
    fill: var(--st-teal);
  }

  .connector {
    fill: none;
    stroke: color-mix(in srgb, var(--st-teal) 60%, transparent);
    stroke-width: 3;
  }

  .card {
    padding: 14px 16px;
    border-radius: 14px;
    background: var(--st-panel);
    border: 3px solid var(--st-teal);
    color: var(--st-text);
    font-size: 30px;
    line-height: 1.2;
  }

  .card strong {
    display: block;
  }

  .card span {
    display: block;
    margin-top: 6px;
    font-size: 24px;
    color: var(--st-muted);
  }

  .key .pin,
  .key .connector {
    stroke: var(--st-amber);
  }

  .key .head {
    fill: var(--st-amber);
  }

  .key .card {
    border-color: var(--st-amber);
    box-shadow: 0 0 0 3px color-mix(in srgb, var(--st-amber) 30%, transparent);
  }

  .muted .pin,
  .muted .connector {
    stroke: var(--st-muted);
  }

  .muted .head {
    fill: var(--st-muted);
  }

  .muted .card {
    border-color: var(--st-line);
    opacity: 0.75;
  }

  @keyframes appear {
    from {
      opacity: 0;
    }
  }
</style>
