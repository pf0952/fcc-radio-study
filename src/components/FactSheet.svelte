<script lang="ts">
  import { factSheet } from '../lib/factsheet.ts';
  import { lessonList } from '../lib/lessons';
  import { elementInfo } from '../lib/pools';
  import { rich } from '../lib/rich';

  /** The printable formula and fact sheet for one element, built from its lessons. */
  let { element, onback }: { element: number; onback: () => void } = $props();

  const info = $derived(elementInfo(element));
  const sections = $derived(factSheet(lessonList.filter((l) => l.element === element)).filter((s) => s.formulas.length || s.numbers.length));
  // The two elements use different values for the radar mile (see About).
  const RADAR_MILE: Record<number, string> = { 3: '12.346', 8: '12.34' };
</script>

<div class="sheet">
  <div class="bar no-print">
    <button class="link" onclick={onback}>← Lessons</button>
    <button class="primary" onclick={() => window.print()}>Print</button>
  </div>
  <h1>Element {element} formula and fact sheet</h1>
  <p class="muted intro">{info.name}: the formulas with their worked examples, and the frequencies and intervals, from every lesson in this element.</p>
  {#if RADAR_MILE[element]}
    <p class="radar-mile"><strong>Radar mile:</strong> Element {element} uses {RADAR_MILE[element]} µs per nautical mile (the round trip of a radar pulse to a target 1 nautical mile away).</p>
  {/if}

  {#each sections as s (s.lesson)}
    <section aria-labelledby="sheet-{s.lesson}">
      <h2 id="sheet-{s.lesson}">{s.lesson} {s.title}</h2>
      {#if s.formulas.length}
        <dl class="formulas">
          {#each s.formulas as f, i (i)}
            <div class="formula">
              <dt>
                <span class="name">{f.title}</span>
                <span class="math">{@html rich(f.formula)}</span>
              </dt>
              <dd>
                {#each f.example as line, j (j)}<span class="line">{@html rich(line)}</span>{/each}
              </dd>
            </div>
          {/each}
        </dl>
      {/if}
      {#each s.numbers as group, i (i)}
        <h3>{group.title}</h3>
        <ul class="facts">
          {#each group.facts as fact, j (j)}
            <li>{@html rich(fact.text)}{#if fact.note}<span class="muted"> · {@html rich(fact.note)}</span>{/if}</li>
          {/each}
        </ul>
      {/each}
    </section>
  {/each}
</div>

<style>
  .sheet {
    max-width: 62rem;
  }

  .bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.75rem;
  }

  .intro {
    margin: 0 0 0.75rem;
  }

  .radar-mile {
    padding: 0.6rem 0.9rem;
    border-left: 4px solid var(--warn);
    background: var(--surface-2);
    border-radius: 6px;
  }

  section {
    margin-top: 1.5rem;
    break-inside: avoid-page;
  }

  h2 {
    padding-bottom: 0.3rem;
    border-bottom: 2px solid var(--border);
  }

  h3 {
    margin: 1rem 0 0.3rem;
    font-size: 0.95rem;
  }

  .formulas {
    margin: 0;
    display: grid;
    gap: 0.4rem;
  }

  .formula {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
    gap: 1rem;
    padding: 0.5rem 0.75rem;
    border: 1px solid var(--border);
    border-radius: 6px;
    background: var(--surface);
    break-inside: avoid;
  }

  dt {
    display: grid;
    gap: 0.15rem;
  }

  .name {
    font-size: 0.8rem;
    font-weight: 600;
    color: var(--muted);
  }

  .math {
    font-family: 'Cambria Math', Cambria, Georgia, serif;
    font-size: 1.1rem;
  }

  dd {
    margin: 0;
    display: grid;
    align-content: center;
    font-family: 'Cambria Math', Cambria, Georgia, serif;
    font-size: 0.9rem;
  }

  .line:last-child {
    font-weight: 700;
  }

  .facts {
    margin: 0;
    padding-left: 1.2rem;
    font-size: 0.92rem;
  }
</style>
