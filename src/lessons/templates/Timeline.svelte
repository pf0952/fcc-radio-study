<script lang="ts">
  import { rich } from '../../lib/rich';
  import { revealed } from '../reveal';

  /** Interval badges, e.g. "EPIRB battery: 5 years or after use". */
  let { params, fraction }: { params: { title: string; badges: { label: string; value: string; note?: string }[] }; fraction: number } = $props();
  const shown = $derived(revealed(fraction, params.badges.length));
</script>

<div class="timeline">
  <h2>{params.title}</h2>
  <div class="badges">
    {#each params.badges as b, i (i)}
      <div class="badge" class:shown={i < shown}>
        <svg viewBox="0 0 48 48" aria-hidden="true">
          <circle cx="24" cy="24" r="20" />
          <path d="M24 12v13l8 5" />
        </svg>
        <p class="value">{@html rich(b.value)}</p>
        <p class="label">{@html rich(b.label)}</p>
        {#if b.note}<p class="note">{@html rich(b.note)}</p>{/if}
      </div>
    {/each}
  </div>
</div>

<style>
  .timeline {
    padding: 4cqi 6cqi;
  }

  h2 {
    margin: 0 0 4cqi;
    font-size: 3.4cqi;
  }

  .badges {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20cqi, 1fr));
    gap: 2.4cqi;
  }

  .badge {
    padding: 2.4cqi;
    border-radius: 1.4cqi;
    background: var(--st-panel);
    border: 0.15cqi solid var(--st-line);
    opacity: 0;
    transform: scale(0.85);
    transition:
      opacity 0.6s,
      transform 0.6s cubic-bezier(0.2, 1.4, 0.4, 1);
  }

  .badge.shown {
    opacity: 1;
    transform: none;
  }

  svg {
    width: 5cqi;
    height: 5cqi;
    fill: none;
    stroke: var(--st-teal);
    stroke-width: 3.5;
    stroke-linecap: round;
  }

  .value {
    margin: 1.2cqi 0 0.4cqi;
    font-size: 3.3cqi;
    font-weight: 700;
    color: var(--st-amber);
    line-height: 1.15;
  }

  .label {
    margin: 0;
    font-size: 2.1cqi;
  }

  .note {
    margin: 0.6cqi 0 0;
    font-size: 1.7cqi;
    color: var(--st-muted);
  }
</style>
