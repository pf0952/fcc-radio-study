<script lang="ts">
  import { rich } from '../../lib/rich';
  import { revealed } from '../reveal';

  type Block = { id: string; label: string; note?: string };
  type Link = { from: string; to: string; label?: string; struck?: boolean };
  /** Boxes appear in order; a link appears once both ends are shown, and a signal dot runs along it. */
  let { params, fraction }: { params: { title: string; blocks: Block[]; links: Link[]; columns?: number }; fraction: number } = $props();

  const W = 1600;
  const H = 900;
  const TOP = 140;
  const BW = 300;
  const BH = 150;

  const cols = $derived(params.columns ?? Math.min(4, params.blocks.length));
  const rows = $derived(Math.ceil(params.blocks.length / cols));
  const centers = $derived(
    new Map(
      params.blocks.map((b, i) => {
        const cw = (W - 120) / cols;
        const ch = (H - TOP - 40) / rows;
        return [b.id, { x: 60 + cw * (i % cols) + cw / 2, y: TOP + ch * Math.floor(i / cols) + ch / 2 }];
      }),
    ),
  );
  const shown = $derived(revealed(fraction, params.blocks.length));
  const isShown = (id: string) => params.blocks.findIndex((b) => b.id === id) < shown;

  /** Where the line from a's center toward b leaves a's box. */
  function edge(a: { x: number; y: number }, b: { x: number; y: number }) {
    const dx = b.x - a.x;
    const dy = b.y - a.y;
    const s = Math.min(dx ? BW / 2 / Math.abs(dx) : Infinity, dy ? BH / 2 / Math.abs(dy) : Infinity);
    return { x: a.x + dx * s, y: a.y + dy * s };
  }

  const lines = $derived(
    params.links.map((l) => {
      const a = centers.get(l.from)!;
      const b = centers.get(l.to)!;
      const p = edge(a, b);
      const q = edge(b, a);
      return { ...l, p, q, mid: { x: (p.x + q.x) / 2, y: (p.y + q.y) / 2 } };
    }),
  );
</script>

<svg viewBox="0 0 {W} {H}" role="presentation">
  <defs>
    <marker id="bd-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M0 0 L10 5 L0 10 z" fill="var(--st-teal)" />
    </marker>
    <marker id="bd-arrow-struck" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M0 0 L10 5 L0 10 z" fill="var(--st-coral)" />
    </marker>
  </defs>
  <text class="title" x="60" y="80">{params.title}</text>

  {#each lines as l, i (i)}
    {#if isShown(l.from) && isShown(l.to)}
      <g class="link" class:struck={l.struck}>
        <line x1={l.p.x} y1={l.p.y} x2={l.q.x} y2={l.q.y} pathLength="1" marker-end="url(#{l.struck ? 'bd-arrow-struck' : 'bd-arrow'})" />
        {#if l.struck}
          <path class="cross" d="M{l.mid.x - 18} {l.mid.y - 18} L{l.mid.x + 18} {l.mid.y + 18} M{l.mid.x + 18} {l.mid.y - 18} L{l.mid.x - 18} {l.mid.y + 18}" />
        {:else}
          <circle class="signal" r="9">
            <animateMotion dur="1.8s" repeatCount="indefinite" path="M{l.p.x} {l.p.y} L{l.q.x} {l.q.y}" />
          </circle>
        {/if}
        {#if l.label}
          <foreignObject x={l.mid.x - 150} y={l.mid.y - (Math.abs(l.q.y - l.p.y) < 20 ? 70 : 25)} width="300" height="60">
            <div class="link-label">{@html rich(l.label)}</div>
          </foreignObject>
        {/if}
      </g>
    {/if}
  {/each}

  {#each params.blocks as b, i (b.id)}
    {@const c = centers.get(b.id)!}
    <g class="block" class:shown={i < shown}>
      <rect x={c.x - BW / 2} y={c.y - BH / 2} width={BW} height={BH} rx="18" />
      <foreignObject x={c.x - BW / 2} y={c.y - BH / 2} width={BW} height={BH}>
        <div class="block-text">
          <strong>{@html rich(b.label)}</strong>
          {#if b.note}<span>{@html rich(b.note)}</span>{/if}
        </div>
      </foreignObject>
    </g>
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

  .block {
    opacity: 0;
    transition: opacity 0.6s;
  }

  .block.shown {
    opacity: 1;
  }

  .block rect {
    fill: var(--st-panel);
    stroke: var(--st-teal);
    stroke-width: 3;
  }

  .block-text {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 10px 16px;
    color: var(--st-text);
    font-size: 30px;
    line-height: 1.2;
  }

  .block-text span {
    margin-top: 6px;
    font-size: 23px;
    color: var(--st-muted);
  }

  .link line {
    stroke: var(--st-teal);
    stroke-width: 4;
    stroke-dasharray: 1;
    animation: draw 0.9s ease-out both;
  }

  .link.struck line {
    stroke: var(--st-coral);
    stroke-dasharray: 0.03 0.02;
    animation: none;
  }

  .cross {
    stroke: var(--st-coral);
    stroke-width: 7;
    stroke-linecap: round;
  }

  .signal {
    fill: var(--st-amber);
  }

  .link-label {
    text-align: center;
    color: var(--st-muted);
    font-size: 24px;
    line-height: 1.15;
  }

  .link.struck .link-label {
    color: var(--st-coral);
  }

  @keyframes draw {
    from {
      stroke-dashoffset: 1;
    }
    to {
      stroke-dashoffset: 0;
    }
  }
</style>
