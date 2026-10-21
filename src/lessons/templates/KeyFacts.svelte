<script lang="ts">
  import { rich } from '../../lib/rich';
  import { revealed } from '../reveal';

  let { params, fraction }: { params: { title: string; items: string[] }; fraction: number } = $props();
  const shown = $derived(revealed(fraction, params.items.length));
</script>

<div class="facts">
  <h2>{params.title}</h2>
  <ul>
    {#each params.items as item, i (i)}
      <li class:shown={i < shown} class:latest={i === shown - 1}>{@html rich(item)}</li>
    {/each}
  </ul>
</div>

<style>
  .facts {
    padding: 4cqi 6cqi;
  }

  h2 {
    margin: 0 0 3cqi;
    font-size: 3.6cqi;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: grid;
    gap: 1.6cqi;
  }

  li {
    position: relative;
    padding: 1.2cqi 2cqi 1.2cqi 4cqi;
    font-size: 2.3cqi;
    line-height: 1.35;
    border-radius: 0.8cqi;
    background: var(--st-panel);
    opacity: 0;
    transform: translateX(-2cqi);
    transition:
      opacity 0.6s,
      transform 0.6s,
      box-shadow 0.6s;
  }

  li::before {
    content: '';
    position: absolute;
    left: 1.6cqi;
    top: 2.1cqi;
    width: 1cqi;
    height: 1cqi;
    border-radius: 50%;
    background: var(--st-teal);
  }

  li.shown {
    opacity: 1;
    transform: none;
  }

  li.latest {
    box-shadow: inset 0.4cqi 0 0 var(--st-amber);
  }
</style>
