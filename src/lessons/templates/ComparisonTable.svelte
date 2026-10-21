<script lang="ts">
  import { rich } from '../../lib/rich';
  import { revealed } from '../reveal';

  let { params, fraction }: { params: { title: string; columns: string[]; rows: string[][] }; fraction: number } = $props();
  const shown = $derived(revealed(fraction, params.rows.length));
</script>

<div class="table">
  <h2>{params.title}</h2>
  <table>
    <thead>
      <tr>
        {#each params.columns as c, i (i)}<th>{@html rich(c)}</th>{/each}
      </tr>
    </thead>
    <tbody>
      {#each params.rows as row, r (r)}
        <tr class:shown={r < shown}>
          {#each row as cell, i (i)}<td>{@html rich(cell)}</td>{/each}
        </tr>
      {/each}
    </tbody>
  </table>
</div>

<style>
  .table {
    padding: 4cqi 6cqi;
  }

  h2 {
    margin: 0 0 2.5cqi;
    font-size: 3.4cqi;
  }

  table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0 0.6cqi;
    font-size: 2.1cqi;
  }

  th {
    text-align: left;
    padding: 0 1.6cqi 0.6cqi;
    color: var(--st-amber);
    font-size: 1.8cqi;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  td {
    padding: 1.1cqi 1.6cqi;
    background: var(--st-panel);
  }

  td:first-child {
    font-weight: 700;
    border-radius: 0.8cqi 0 0 0.8cqi;
  }

  td:last-child {
    border-radius: 0 0.8cqi 0.8cqi 0;
  }

  tr {
    opacity: 0;
    transform: translateY(1cqi);
    transition:
      opacity 0.6s,
      transform 0.6s;
  }

  tr.shown,
  thead tr {
    opacity: 1;
    transform: none;
  }
</style>
