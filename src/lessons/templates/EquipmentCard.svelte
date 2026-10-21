<script lang="ts">
  import { figureUrl } from '../../lib/pools';
  import { rich } from '../../lib/rich';
  import { devices } from '../devices';
  import { revealed } from '../reveal';

  type Callout = { label: string; at?: string; x?: number; y?: number };
  /**
   * A drawing (a built-in device, or a pool figure) with callouts appearing one by one.
   * Callouts point at a named device anchor (`at`), or at x/y percentages of the picture.
   */
  let { params, fraction }: { params: { title: string; device?: string; figure?: string; callouts: Callout[] }; fraction: number } = $props();

  // Picture area on the 1600 x 900 stage, and the 800 x 900 drawing scaled into it.
  const BOX = { x: 40, y: 120, w: 760, h: 760 };
  const S = Math.min(BOX.w / 800, BOX.h / 900);
  const OX = BOX.x + (BOX.w - 800 * S) / 2;
  const OY = BOX.y + (BOX.h - 900 * S) / 2;

  const device = $derived(params.device ? devices[params.device] : undefined);
  const figure = $derived(params.figure ? figureUrl(params.figure) : null);
  const shown = $derived(revealed(fraction, params.callouts.length));
  const slotH = $derived(Math.min(170, 760 / params.callouts.length));
  // Labels are stacked in the order of their anchors from top to bottom, so leader lines don't cross;
  // they still appear in the lesson's teaching order.
  const slots = $derived.by(() => {
    const byHeight = params.callouts.map((c, i) => ({ i, y: anchor(c).y })).sort((a, b) => a.y - b.y);
    return params.callouts.map((_, i) => byHeight.findIndex((s) => s.i === i));
  });

  function anchor(c: Callout): { x: number; y: number } {
    if (device && c.at && device.anchors[c.at]) {
      const [ax, ay] = device.anchors[c.at];
      return { x: OX + ax * S, y: OY + ay * S };
    }
    return { x: BOX.x + ((c.x ?? 50) / 100) * BOX.w, y: BOX.y + ((c.y ?? 50) / 100) * BOX.h };
  }
  const labelY = (i: number) => 140 + i * slotH;
</script>

<svg viewBox="0 0 1600 900" role="presentation">
  <text class="title" x="60" y="80">{params.title}</text>

  {#if device}
    <g transform="translate({OX} {OY}) scale({S})" class="device">{@html device.svg}</g>
  {:else if figure}
    <rect x={BOX.x} y={BOX.y} width={BOX.w} height={BOX.h} rx="16" fill="#fff" />
    <image href={figure} x={BOX.x + 20} y={BOX.y + 20} width={BOX.w - 40} height={BOX.h - 40} preserveAspectRatio="xMidYMid meet" />
  {/if}

  {#each params.callouts as c, i (i)}
    {#if i < shown}
      {@const a = anchor(c)}
      {@const y = labelY(slots[i]) + (slotH - 20) / 2}
      <g class="callout" class:latest={i === shown - 1}>
        <polyline points="{a.x},{a.y} {a.x + (840 - a.x) * 0.6},{y} 860,{y}" class="leader" />
        <circle cx={a.x} cy={a.y} r="11" class="dot" />
        <foreignObject x="870" y={labelY(slots[i])} width="690" height={slotH - 16}>
          <div class="label">{@html rich(c.label)}</div>
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

  .device {
    animation: appear 0.8s ease-out both;
  }

  .callout {
    animation: appear 0.6s ease-out both;
  }

  .leader {
    fill: none;
    stroke: var(--st-teal);
    stroke-width: 3;
  }

  .dot {
    fill: var(--st-teal);
    stroke: var(--st-bg);
    stroke-width: 4;
  }

  .label {
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 22px;
    border-radius: 14px;
    background: var(--st-panel);
    border-left: 6px solid var(--st-teal);
    color: var(--st-text);
    font-size: 31px;
    line-height: 1.2;
  }

  .latest .leader {
    stroke: var(--st-amber);
  }

  .latest .dot {
    fill: var(--st-amber);
  }

  .latest .label {
    border-left-color: var(--st-amber);
  }

  @keyframes appear {
    from {
      opacity: 0;
    }
  }
</style>
