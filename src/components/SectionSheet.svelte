<script lang="ts">
  import { fitColumns } from '../lessons/fit';
  import { rich } from '../lib/rich';
  import type { SectionSheet } from '../lib/types.ts';

  /** One section's notes on a single page: the text is sized to fill the page exactly, on screen and in print. */
  let { title, sheet, onback }: { title: string; sheet: SectionSheet; onback: () => void } = $props();

  let page = $state<HTMLElement>();
  let columns = $state<HTMLElement>();

  const fit = () => page && columns && fitColumns(page, columns);

  /** The print page is measured here, on screen, so the fit holds on paper: Letter landscape inside the @page margins. */
  function beforePrint() {
    if (!page) return;
    page.style.width = '10.4in';
    page.style.height = '7.9in';
    fit();
    page.style.fontSize = `${parseFloat(page.style.fontSize) * 0.98}px`;
  }

  function afterPrint() {
    if (!page) return;
    page.style.width = page.style.height = '';
    fit();
  }

  $effect(() => {
    if (!page) return;
    const watch = new ResizeObserver(fit);
    watch.observe(page);
    return () => watch.disconnect();
  });
</script>

<svelte:window onbeforeprint={beforePrint} onafterprint={afterPrint} />

<div class="reader">
  <article class="page" bind:this={page}>
    <header>
      <h1>{title}</h1>
      <p>{@html rich(sheet.summary)}</p>
      <div class="actions no-print">
        <button class="secondary small" onclick={onback}>Back</button>
        <button class="primary small" onclick={() => window.print()}>Print</button>
      </div>
    </header>

    <div class="columns" bind:this={columns}>
      {#each sheet.blocks as block, i (i)}
        <section class="block {block.kind}">
          <h2>{block.title}</h2>
          {#if block.kind === 'notes' || block.kind === 'traps'}
            <ul>
              {#each block.items as item, j (j)}<li>{@html rich(item)}</li>{/each}
            </ul>
          {:else if block.kind === 'terms'}
            <dl>
              {#each block.items as item, j (j)}
                <div><dt>{@html rich(item.term)}</dt> <dd>{@html rich(item.def)}</dd></div>
              {/each}
            </dl>
          {:else if block.kind === 'formulas'}
            {#each block.items as item, j (j)}
              <div class="formula">
                <p class="name">{@html rich(item.name)}</p>
                <p class="math">{@html rich(item.formula)}</p>
                <p>{@html rich(item.means)}</p>
                {#if item.example}<p class="example">{@html rich(item.example)}</p>{/if}
              </div>
            {/each}
          {:else if block.kind === 'table'}
            <table>
              <thead>
                <tr>{#each block.head as cell, j (j)}<th scope="col">{@html rich(cell)}</th>{/each}</tr>
              </thead>
              <tbody>
                {#each block.rows as row, j (j)}
                  <tr>{#each row as cell, k (k)}<td>{@html rich(cell)}</td>{/each}</tr>
                {/each}
              </tbody>
            </table>
          {:else}
            <figure>
              <!-- Diagrams are written for these sheets and ship with the app. -->
              {@html block.svg}
              {#if block.caption}<figcaption>{@html rich(block.caption)}</figcaption>{/if}
            </figure>
          {/if}
        </section>
      {/each}
    </div>
  </article>
</div>

<style>
  /* Most of main's padding goes to the page: every bit of room makes the text bigger. */
  .reader {
    display: flex;
    flex-direction: column;
    height: calc(100% + 1.75rem);
    margin: -0.9rem -1.9rem;
  }

  /* Paper in both themes: the sheet is a page to read or print. */
  .page {
    --ink: #17202b;
    --soft: #4a5666;
    --rule: #d6dce4;
    --navy: #12355b;
    --tint: #eef3fa;
    --caution: #fdf3dd;
    --caution-ink: #6b4200;
    page: section-sheet;
    flex: 1;
    min-height: 0;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    border-radius: var(--radius);
    background: #fff;
    color: var(--ink);
    box-shadow: var(--shadow);
    line-height: 1.32;
    print-color-adjust: exact;
  }

  /* Subscripts shouldn't push lines apart in text this tightly set. */
  .page :global(sub),
  .page :global(sup) {
    line-height: 0;
  }

  header {
    flex: none;
    display: flex;
    align-items: baseline;
    gap: 0.4em 1.25em;
    padding: 0.6em 1.25em 0.65em;
    background: var(--navy);
    color: #fff;
  }

  h1 {
    flex: none;
    margin: 0;
    font-size: 1.65em;
    line-height: 1.15;
  }

  header p {
    flex: 1;
    margin: 0;
    color: #d3dfec;
  }

  .actions {
    flex: none;
    display: flex;
    gap: 0.4rem;
    align-self: center;
  }

  .columns {
    flex: 1;
    min-height: 0;
    margin: 0.8em 1.25em;
    overflow: hidden;
    columns: 3;
    column-fill: auto;
    column-gap: 1.5em;
    column-rule: 1px solid var(--rule);
  }

  .block {
    padding-bottom: 0.75em;
  }

  /* Lists may run on into the next column, between items; everything else stays whole. */
  .block:not(.notes, .terms, .formulas),
  li,
  dl div,
  .formula {
    break-inside: avoid;
  }

  h2 {
    break-after: avoid;
    margin: 0 0 0.25em;
    color: var(--navy);
    font-size: 1.04em;
    line-height: 1.2;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li {
    position: relative;
    padding-left: 0.85em;
  }

  li + li {
    margin-top: 0.15em;
  }

  li::before {
    content: '';
    position: absolute;
    left: 0.1em;
    top: 0.5em;
    width: 0.32em;
    height: 0.32em;
    border-radius: 50%;
    background: var(--navy);
  }

  dl {
    margin: 0;
  }

  dl div + div {
    margin-top: 0.15em;
  }

  dt {
    display: inline;
    font-weight: 700;
  }

  dd {
    display: inline;
    margin: 0;
  }

  .formula {
    padding: 0.35em 0.6em 0.4em;
    border-radius: 5px;
    background: var(--tint);
  }

  .formula + .formula {
    margin-top: 0.3em;
  }

  .formula p {
    margin: 0;
  }

  .name {
    color: var(--soft);
    font-size: 0.86em;
    font-weight: 600;
  }

  .math {
    color: var(--navy);
    font-family: 'Cambria Math', Cambria, Georgia, serif;
    font-size: 1.18em;
    font-weight: 600;
  }

  .example {
    color: var(--soft);
    font-size: 0.92em;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    font-size: 0.92em;
    font-variant-numeric: tabular-nums;
  }

  th {
    padding: 0 0.5em 0.1em 0;
    border-bottom: 1px solid var(--navy);
    text-align: left;
  }

  td {
    padding: 0.08em 0.5em 0.08em 0;
    border-bottom: 1px solid var(--rule);
    vertical-align: top;
  }

  .traps {
    padding: 0.4em 0.6em 0.5em;
    margin-bottom: 0.75em;
    border-radius: 5px;
    background: var(--caution);
  }

  .traps h2 {
    color: var(--caution-ink);
  }

  figure {
    margin: 0;
  }

  /* Sized from the text, so a wide column doesn't blow a diagram up at the text's expense. */
  figure :global(svg) {
    display: block;
    width: 100%;
    max-width: 25em;
    height: auto;
    margin: 0 auto;
    font-family: inherit;
  }

  figcaption {
    margin-top: 0.15em;
    color: var(--soft);
    font-size: 0.88em;
  }

  /* Letter landscape, whatever the rest of the app prints as. */
  @page section-sheet {
    size: letter landscape;
    margin: 0.3in;
  }

  @media print {
    .reader {
      display: block;
      height: auto;
      margin: 0;
    }

    .page {
      border-radius: 0;
      box-shadow: none;
    }
  }
</style>
