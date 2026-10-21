<script lang="ts">
  import { rich } from '../../lib/rich';
  import { revealed } from '../reveal';

  type Params = {
    title: string;
    /** Range of the outer ring, in nautical miles (geometry only). */
    rangeNm: number;
    rings?: number;
    echoes?: { bearing: number; range: number }[];
    /** SART response: dots outward from the transponder along its bearing. */
    sart?: { bearing: number; range: number; dots: number; spacing: number };
    vrm?: { range: number; label?: string };
    ebl?: { bearing: number; label?: string };
    /** Legend lines, shown one by one together with the overlays (echoes, SART, VRM, EBL in that order). */
    labels?: string[];
  };
  let { params, fraction }: { params: Params; fraction: number } = $props();

  const C = 450;
  const R = 400;
  const at = (bearing: number, range: number) => {
    const r = (range / params.rangeNm) * R;
    const a = (bearing * Math.PI) / 180;
    return { x: C + r * Math.sin(a), y: C - r * Math.cos(a) };
  };

  const overlays = $derived(['echoes', 'sart', 'vrm', 'ebl'].filter((k) => params[k as keyof Params]));
  const labels = $derived(params.labels ?? []);
  const shown = $derived(revealed(fraction, Math.max(overlays.length, labels.length)));
  const visible = (name: string) => overlays.indexOf(name) >= 0 && overlays.indexOf(name) < shown;
  const sartDots = $derived(
    params.sart ? Array.from({ length: params.sart.dots }, (_, k) => at(params.sart!.bearing, params.sart!.range + k * params.sart!.spacing)) : [],
  );
</script>

<div class="ppi">
  <svg viewBox="0 0 900 900" role="presentation">
    <defs>
      <radialGradient id="ppi-face">
        <stop offset="0" stop-color="#0f3a3a" />
        <stop offset="1" stop-color="#061a1c" />
      </radialGradient>
      <linearGradient id="ppi-glow" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0" stop-color="var(--st-teal)" stop-opacity="0" />
        <stop offset="1" stop-color="var(--st-teal)" stop-opacity="0.45" />
      </linearGradient>
    </defs>
    <circle cx={C} cy={C} r={R + 14} class="bezel" />
    <circle cx={C} cy={C} r={R} fill="url(#ppi-face)" />
    {#each Array.from({ length: params.rings ?? 4 }, (_, k) => ((k + 1) * R) / (params.rings ?? 4)) as r, i (i)}
      <circle cx={C} cy={C} {r} class="ring" />
    {/each}
    {#each Array.from({ length: 36 }, (_, k) => k * 10) as b (b)}
      {@const p = at(b, params.rangeNm)}
      {@const q = at(b, params.rangeNm * (b % 30 ? 0.97 : 0.94))}
      <line x1={p.x} y1={p.y} x2={q.x} y2={q.y} class="tick" />
    {/each}
    <line x1={C} y1={C} x2={C} y2={C - R} class="heading" />

    <g class="sweep">
      <path d="M{C} {C} L{C} {C - R} A{R} {R} 0 0 0 {C - R * Math.sin(Math.PI / 5)} {C - R * Math.cos(Math.PI / 5)} Z" fill="url(#ppi-glow)" />
      <line x1={C} y1={C} x2={C} y2={C - R} class="beam" />
    </g>

    {#if visible('echoes')}
      {#each params.echoes ?? [] as e, i (i)}
        {@const p = at(e.bearing, e.range)}
        <ellipse cx={p.x} cy={p.y} rx="14" ry="9" class="echo" transform="rotate({e.bearing} {p.x} {p.y})" />
      {/each}
    {/if}
    {#if visible('sart')}
      {#each sartDots as d, i (i)}
        <circle cx={d.x} cy={d.y} r="9" class="sart-dot" style="animation-delay: {i * 0.18}s" />
      {/each}
    {/if}
    {#if visible('vrm') && params.vrm}
      <circle cx={C} cy={C} r={(params.vrm.range / params.rangeNm) * R} class="vrm" />
    {/if}
    {#if visible('ebl') && params.ebl}
      {@const p = at(params.ebl.bearing, params.rangeNm)}
      <line x1={C} y1={C} x2={p.x} y2={p.y} class="ebl" />
    {/if}
    <circle cx={C} cy={C} r="7" class="own-ship" />
  </svg>

  <div class="legend">
    <h2>{params.title}</h2>
    <ul>
      {#each labels as l, i (i)}
        <li class:shown={i < shown}>{@html rich(l)}</li>
      {/each}
    </ul>
  </div>
</div>

<style>
  .ppi {
    height: 100%;
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 3cqi;
    padding: 2.5cqi 4cqi;
    align-items: center;
  }

  svg {
    height: 100%;
    aspect-ratio: 1;
  }

  .bezel {
    fill: #10202c;
    stroke: var(--st-line);
    stroke-width: 4;
  }

  .ring {
    fill: none;
    stroke: color-mix(in srgb, var(--st-teal) 35%, transparent);
    stroke-width: 2;
  }

  .tick,
  .heading {
    stroke: color-mix(in srgb, var(--st-teal) 50%, transparent);
    stroke-width: 2;
  }

  .sweep {
    transform-origin: 450px 450px;
    animation: spin 4s linear infinite;
  }

  .beam {
    stroke: var(--st-teal);
    stroke-width: 3;
  }

  .echo {
    fill: var(--st-amber);
    animation: glow 4s linear infinite;
  }

  .sart-dot {
    fill: var(--st-amber);
    opacity: 0;
    animation: appear 0.4s ease-out forwards;
  }

  .vrm {
    fill: none;
    stroke: var(--st-amber);
    stroke-width: 3;
    stroke-dasharray: 14 10;
  }

  .ebl {
    stroke: var(--st-amber);
    stroke-width: 3;
    stroke-dasharray: 14 10;
  }

  .own-ship {
    fill: var(--st-text);
  }

  h2 {
    margin: 0 0 2cqi;
    font-size: 3.2cqi;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: grid;
    gap: 1.4cqi;
  }

  li {
    padding: 1cqi 1.6cqi;
    border-left: 0.4cqi solid var(--st-amber);
    background: var(--st-panel);
    border-radius: 0 0.8cqi 0.8cqi 0;
    font-size: 2.1cqi;
    line-height: 1.3;
    opacity: 0;
    transition: opacity 0.6s;
  }

  li.shown {
    opacity: 1;
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }

  @keyframes glow {
    0%,
    100% {
      opacity: 0.55;
    }
    10% {
      opacity: 1;
    }
  }

  @keyframes appear {
    to {
      opacity: 1;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .sweep,
    .echo {
      animation: none;
    }
  }
</style>
