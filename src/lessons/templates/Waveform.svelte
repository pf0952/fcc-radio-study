<script lang="ts">
  import { rich } from '../../lib/rich';
  import { revealed } from '../reveal';

  type Params = {
    title: string;
    kind: 'sine' | 'square' | 'sawtooth' | 'pulse' | 'am' | 'fm' | 'ssb' | 'sart-sweep' | 'repeat';
    /** Annotations shown one by one beside the drawing. */
    labels?: string[];
    cycles?: number;
    /** pulse: fraction of each period the pulse is on. */
    duty?: number;
    /** am: modulation depth 0-1. */
    depth?: number;
    /** ssb: which sidebands to draw and whether the carrier is present. */
    sideband?: 'upper' | 'lower' | 'both';
    carrier?: 'suppressed' | 'full';
    /** sart-sweep: durations of the fast and slow sweeps (relative). */
    fast?: number;
    slow?: number;
    /** repeat: characters sent twice, and which copy a noise burst wipes out. */
    chars?: string[];
    noiseAt?: number;
    /** Axis captions (words, no numbers). */
    xAxis?: string;
    yAxis?: string;
  };
  let { params, fraction }: { params: Params; fraction: number } = $props();

  const W = 1600;
  const H = 560;
  const X0 = 90;
  const X1 = 1540;
  const YC = 280;
  const AMP = 210;
  const labels = $derived(params.labels ?? []);
  const shownLabels = $derived(revealed(fraction, labels.length));

  /** SVG path through f(x) for x in [0, 1], f in [-1, 1]. */
  function trace(f: (x: number) => number, samples = 1600): string {
    let d = '';
    for (let i = 0; i <= samples; i++) {
      const x = i / samples;
      d += `${i ? 'L' : 'M'}${(X0 + x * (X1 - X0)).toFixed(1)} ${(YC - f(x) * AMP).toFixed(1)} `;
    }
    return d;
  }

  const TAU = Math.PI * 2;
  const frac = (v: number) => v - Math.floor(v);

  const drawing = $derived.by(() => {
    const p = params;
    const c = p.cycles;
    const extra: { d: string; cls: string }[] = [];
    const dots: { x: number; y: number }[] = [];
    const boxes: { x: number; y: number; w: number; h: number; text: string; cls: string }[] = [];
    let main = '';
    switch (p.kind) {
      case 'sine':
        main = trace((x) => Math.sin(TAU * (c ?? 3) * x));
        break;
      case 'square':
        main = trace((x) => (Math.sin(TAU * (c ?? 4) * x) >= 0 ? 0.8 : -0.8), 3200);
        break;
      case 'sawtooth':
        main = trace((x) => 0.8 * (2 * frac((c ?? 4) * x) - 1), 3200);
        break;
      case 'pulse':
        main = trace((x) => (frac((c ?? 5) * x) < (p.duty ?? 0.15) ? 0.8 : -0.6), 3200);
        break;
      case 'am': {
        const m = p.depth ?? 0.6;
        const env = (x: number) => (1 + m * Math.sin(TAU * 2 * x)) / (1 + m);
        main = trace((x) => env(x) * Math.sin(TAU * (c ?? 36) * x));
        extra.push({ d: trace(env), cls: 'envelope' }, { d: trace((x) => -env(x)), cls: 'envelope' });
        break;
      }
      case 'fm':
        main = trace((x) => Math.sin(TAU * (c ?? 16) * x + 7 * Math.sin(TAU * 2 * x)));
        break;
      case 'ssb': {
        // Spectrum: frequency across, amplitude up. Carrier in the middle.
        const base = YC + AMP;
        const mid = (X0 + X1) / 2;
        extra.push({ d: `M${X0} ${base} L${X1} ${base}`, cls: 'axis' });
        const band = (from: number, to: number) => `M${from} ${base} L${from + 30} ${base - AMP * 0.8} L${to - 30} ${base - AMP * 0.8} L${to} ${base} Z`;
        if (p.sideband !== 'lower') extra.push({ d: band(mid + 40, mid + 480), cls: 'band' });
        if (p.sideband === 'lower' || p.sideband === 'both') extra.push({ d: band(mid - 480, mid - 40), cls: 'band' });
        extra.push({ d: `M${mid} ${base} L${mid} ${base - AMP * (p.carrier === 'full' ? 1.05 : 0.35)}`, cls: p.carrier === 'full' ? 'carrier' : 'carrier suppressed' });
        break;
      }
      case 'sart-sweep': {
        // Frequency against time: a fast sweep across the band, then a slow sweep back, repeated.
        const n = c ?? 12;
        const r = (p.fast ?? 0.4) / ((p.fast ?? 0.4) + (p.slow ?? 7.5));
        const w = (X1 - X0) / n;
        const lo = YC + AMP;
        const hi = YC - AMP;
        main = `M${X0} ${lo}`;
        for (let k = 0; k < n; k++) {
          const x = X0 + k * w;
          main += ` L${x + r * w} ${hi} L${x + w} ${lo}`;
          dots.push({ x: x + r * w + (w - r * w) / 2, y: YC });
        }
        extra.push({ d: `M${X0} ${YC} L${X1} ${YC}`, cls: 'radar-line' });
        break;
      }
      case 'repeat': {
        // Each character is sent twice; a noise burst wipes one copy, the receiver prints the good one.
        const chars = p.chars ?? ['N', 'A', 'V'];
        const slot = (X1 - X0) / (chars.length * 2 + 1);
        chars.forEach((ch, i) => {
          [0, 1].forEach((copy) => {
            const x = X0 + slot * (i * 2 + copy) + slot * 0.1;
            const hit = p.noiseAt === i * 2 + copy;
            boxes.push({ x, y: YC - 170, w: slot * 0.8, h: 110, text: ch, cls: hit ? 'char hit' : 'char' });
          });
          boxes.push({ x: X0 + slot * (i * 2 + 0.5) + slot * 0.1, y: YC + 90, w: slot * 0.8, h: 110, text: ch, cls: 'char printed' });
        });
        if (p.noiseAt !== undefined) {
          const x = X0 + slot * p.noiseAt;
          let d = `M${x} ${YC - 60}`;
          for (let k = 1; k <= 10; k++) d += ` L${x + (slot * k) / 10} ${YC - 60 - (k % 2 ? 150 : 20)}`;
          extra.push({ d, cls: 'noise' });
        }
        break;
      }
    }
    return { main, extra, dots, boxes };
  });
</script>

<div class="waveform">
  <h2>{params.title}</h2>
  <svg viewBox="0 0 {W} {H}" role="presentation">
    {#if params.kind !== 'ssb' && params.kind !== 'repeat'}
      <line class="axis" x1={X0} y1={YC} x2={X1} y2={YC} />
    {/if}
    {#each drawing.extra as e, i (i)}
      <path class={e.cls} d={e.d} pathLength="1" />
    {/each}
    {#if drawing.main}<path class="main" d={drawing.main} pathLength="1" />{/if}
    {#each drawing.dots as dot, i (i)}
      <circle class="dot" cx={dot.x} cy={dot.y} r="13" style="animation-delay: {1.6 + i * 0.22}s" />
    {/each}
    {#each drawing.boxes as b, i (i)}
      <g class={b.cls} style="animation-delay: {i * 0.12}s">
        <rect x={b.x} y={b.y} width={b.w} height={b.h} rx="12" />
        <text x={b.x + b.w / 2} y={b.y + b.h / 2 + 18}>{b.text}</text>
      </g>
    {/each}
    {#if params.yAxis}<text class="axis-label" x={X0} y={YC - AMP - 22}>{params.yAxis}</text>{/if}
    {#if params.xAxis}<text class="axis-label" x={X1} y={H - 6} text-anchor="end">{params.xAxis}</text>{/if}
  </svg>
  {#if labels.length}
    <ul>
      {#each labels as l, i (i)}
        <li class:shown={i < shownLabels}>{@html rich(l)}</li>
      {/each}
    </ul>
  {/if}
</div>

<style>
  .waveform {
    height: 100%;
    display: grid;
    grid-template-rows: auto 1fr auto;
    padding: 3.5cqi 5cqi 3cqi;
  }

  h2 {
    margin: 0 0 1cqi;
    font-size: 3.4cqi;
  }

  svg {
    width: 100%;
    height: 100%;
    min-height: 0;
  }

  .axis {
    stroke: var(--st-line);
    stroke-width: 3;
    fill: none;
  }

  .main {
    fill: none;
    stroke: var(--st-teal);
    stroke-width: 5;
    stroke-linejoin: round;
    stroke-dasharray: 1;
    animation: draw 2.2s ease-in-out both;
  }

  .envelope {
    fill: none;
    stroke: var(--st-amber);
    stroke-width: 3;
    stroke-dasharray: 0.006 0.006;
  }

  .band {
    fill: color-mix(in srgb, var(--st-teal) 35%, transparent);
    stroke: var(--st-teal);
    stroke-width: 4;
  }

  .carrier {
    stroke: var(--st-amber);
    stroke-width: 8;
  }

  .carrier.suppressed {
    stroke-dasharray: 0.08 0.06;
    opacity: 0.7;
  }

  .radar-line {
    stroke: var(--st-amber);
    stroke-width: 3;
    stroke-dasharray: 0.01 0.008;
    fill: none;
  }

  .dot {
    fill: var(--st-amber);
    opacity: 0;
    animation: pop 0.3s ease-out forwards;
  }

  .noise {
    fill: none;
    stroke: var(--st-coral);
    stroke-width: 6;
    stroke-linejoin: bevel;
  }

  .char {
    opacity: 0;
    animation: pop 0.4s ease-out forwards;
  }

  .char rect {
    fill: var(--st-panel);
    stroke: var(--st-teal);
    stroke-width: 3;
  }

  .char.hit rect {
    stroke: var(--st-coral);
    fill: color-mix(in srgb, var(--st-coral) 25%, var(--st-panel));
  }

  .char.printed rect {
    stroke: var(--st-amber);
  }

  .char text {
    fill: var(--st-text);
    font-size: 54px;
    font-weight: 700;
    text-anchor: middle;
  }

  .axis-label {
    fill: var(--st-muted);
    font-size: 30px;
  }

  ul {
    list-style: none;
    margin: 1.2cqi 0 0;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 1cqi 1.4cqi;
  }

  li {
    padding: 0.7cqi 1.4cqi;
    border-radius: 99px;
    background: var(--st-panel);
    border: 0.15cqi solid var(--st-line);
    font-size: 1.9cqi;
    opacity: 0;
    transition: opacity 0.6s;
  }

  li.shown {
    opacity: 1;
  }

  @keyframes draw {
    from {
      stroke-dashoffset: 1;
    }
    to {
      stroke-dashoffset: 0;
    }
  }

  @keyframes pop {
    from {
      opacity: 0;
      transform: scale(0.4);
    }
    to {
      opacity: 1;
      transform: none;
    }
  }

  .dot,
  .char {
    transform-box: fill-box;
    transform-origin: center;
  }
</style>
