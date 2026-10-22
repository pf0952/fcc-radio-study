<script lang="ts">
  import { openUrl } from '../lib/backend';
  import { elements } from '../lib/elements';
  import { elementInfo, figureUrl, pools, subelementsOf } from '../lib/pools';
  import { progress } from '../lib/progress.svelte';
  import { plain, rich } from '../lib/rich';

  const PAGE = 25;
  const all = Object.values(pools).flat();
  const searchable = new Map(all.map((q) => [q.id, plain([q.id, q.stem, ...q.choices, q.explanation, q.flag ?? ''].join(' ')).toLowerCase()]));

  // Filter values are strings from the form controls; '' means any.
  let element = $state('');
  let subelement = $state('');
  let keyTopic = $state('');
  let text = $state('');
  let missedOnly = $state(false);
  let flaggedOnly = $state(false);
  let shown = $state(PAGE);
  let open = $state<Record<string, boolean>>({});

  const missCount = $derived(progress.answers.reduce((m, a) => (a.ok ? m : m.set(a.q, (m.get(a.q) ?? 0) + 1)), new Map<string, number>()));
  const subs = $derived(element ? subelementsOf(Number(element)) : []);
  const topics = $derived(
    element && subelement ? [...new Map(pools[Number(element)].filter((q) => q.subelement === subelement).map((q) => [q.keyTopic, q.keyTopicTitle]))] : [],
  );
  const needle = $derived(text.trim().toLowerCase());
  const results = $derived(
    all.filter(
      (q) =>
        (!element || q.element === Number(element)) &&
        (!subelement || q.subelement === subelement) &&
        (!keyTopic || q.keyTopic === Number(keyTopic)) &&
        (!missedOnly || missCount.has(q.id)) &&
        (!flaggedOnly || q.flag) &&
        (!needle || searchable.get(q.id)!.includes(needle)),
    ),
  );

  /** Any filter change starts the list from the top again. */
  const changed = () => (shown = PAGE);
</script>

<h1>Question Browser</h1>
<p class="lead">Every question in the three pools. Filter and search, then show a question's answer and explanation when you're ready.</p>

<form class="card filters" aria-label="Filter questions" onsubmit={(e) => e.preventDefault()}>
  <label>
    Element
    <select bind:value={element} onchange={() => ((subelement = ''), (keyTopic = ''), changed())}>
      <option value="">All elements</option>
      {#each elements as el (el.element)}<option value={String(el.element)}>Element {el.element}: {el.name}</option>{/each}
    </select>
  </label>
  <label>
    Subelement
    <select bind:value={subelement} disabled={!element} onchange={() => ((keyTopic = ''), changed())}>
      <option value="">All subelements</option>
      {#each subs as s (s.letter)}<option value={s.letter}>{s.letter}: {s.title}</option>{/each}
    </select>
  </label>
  <label>
    Key topic
    <select bind:value={keyTopic} disabled={!subelement} onchange={changed}>
      <option value="">All key topics</option>
      {#each topics as [t, title] (t)}<option value={String(t)}>{t}: {title}</option>{/each}
    </select>
  </label>
  <label class="search">
    Search
    <input type="search" bind:value={text} oninput={changed} placeholder="Words or a question number, e.g. SART or 9-34D5" />
  </label>
  <div class="checks">
    <label><input type="checkbox" bind:checked={missedOnly} onchange={changed} /> Questions I've missed</label>
    <label><input type="checkbox" bind:checked={flaggedOnly} onchange={changed} /> Flagged answers</label>
  </div>
</form>

<p class="count" aria-live="polite">
  {results.length ? `Showing ${Math.min(shown, results.length)} of ${results.length} question${results.length === 1 ? '' : 's'}` : 'No questions match these filters.'}
</p>

{#each results.slice(0, shown) as q (q.id)}
  {@const isOpen = !!open[q.id]}
  {@const misses = missCount.get(q.id)}
  {@const figure = q.figure ? figureUrl(q.figure) : null}
  <article class="card question" aria-labelledby="bq-{q.id}">
    <p class="meta">
      <strong>{q.id}</strong> · Element {q.element} · {q.subelement}: {q.subelementTitle} · Key topic {q.keyTopic}: {q.keyTopicTitle}
      {#if misses}<span class="tag miss">Missed {misses}×</span>{/if}
      {#if q.flag}<span class="tag flag">Flagged answer</span>{/if}
    </p>
    <p class="stem" id="bq-{q.id}">{@html rich(q.stem)}</p>
    {#if q.figure}
      {#if figure}
        <figure><img src={figure} alt="Figure {q.figure} from the official question pool" /></figure>
      {:else}
        <p class="muted">
          Figure {q.figure} - see the official pool.
          <button class="link" onclick={() => openUrl(elementInfo(q.element).pool.url)}>Open the official pool</button>
        </p>
      {/if}
    {/if}
    <ol class="choices">
      {#each q.choices as choice, i (i)}
        <li class:right={isOpen && i === q.answer}>
          <span class="letter">{'ABCD'[i]}.</span>
          <span>{@html rich(choice)}</span>
          {#if isOpen && i === q.answer}<strong class="key">Correct answer</strong>{/if}
        </li>
      {/each}
    </ol>
    {#if isOpen}
      <div class="answer" role="region" aria-label="Answer to {q.id}">
        <p>{@html rich(q.explanation)}</p>
        {#if q.flag}<p class="flag-note"><strong>Note on this answer:</strong> {q.flag}</p>{/if}
      </div>
    {/if}
    <button class="secondary small" aria-expanded={isOpen} onclick={() => (open[q.id] = !isOpen)}>{isOpen ? 'Hide answer' : 'Show answer'}</button>
  </article>
{/each}

{#if shown < results.length}
  <button class="secondary more" onclick={() => (shown += PAGE)}>Show {Math.min(PAGE, results.length - shown)} more</button>
{/if}

<style>
  .filters {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 0.75rem 1rem;
    margin-bottom: 1rem;
  }

  .filters label {
    display: grid;
    gap: 0.2rem;
    font-size: 0.875rem;
    color: var(--muted);
  }

  .filters select,
  .filters input[type='search'] {
    width: 100%;
    color: var(--text);
  }

  .search {
    grid-column: 1 / -1;
  }

  .checks {
    grid-column: 1 / -1;
    display: flex;
    gap: 1.5rem;
    flex-wrap: wrap;
  }

  .checks label {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    color: var(--text);
  }

  .count {
    color: var(--muted);
    margin: 0 0 0.75rem;
  }

  .question + .question {
    margin-top: 0.75rem;
  }

  .meta {
    margin: 0 0 0.4rem;
    font-size: 0.8rem;
    color: var(--muted);
  }

  .tag {
    display: inline-block;
    margin-left: 0.4rem;
    padding: 0 0.45rem;
    border-radius: 99px;
    font-weight: 600;
    background: var(--surface-2);
  }

  .tag.miss {
    color: var(--bad);
  }

  .tag.flag {
    color: var(--warn);
  }

  .stem {
    margin: 0 0 0.6rem;
    font-weight: 600;
  }

  figure {
    margin: 0 0 0.75rem;
    padding: 0.5rem;
    background: #fff;
    border: 1px solid var(--border);
    border-radius: var(--radius);
    width: fit-content;
    max-width: 100%;
  }

  img {
    display: block;
    width: 22rem;
    max-width: 100%;
    height: auto;
  }

  .choices {
    list-style: none;
    margin: 0 0 0.75rem;
    padding: 0;
    display: grid;
    gap: 0.25rem;
  }

  .choices li {
    display: flex;
    gap: 0.5rem;
    padding: 0.25rem 0.5rem;
    border-radius: 6px;
  }

  .letter {
    font-weight: 600;
    color: var(--muted);
  }

  .choices li.right {
    background: color-mix(in srgb, var(--good) 14%, var(--surface));
    box-shadow: inset 3px 0 0 var(--good);
  }

  .key {
    margin-left: auto;
    color: var(--good);
    font-size: 0.8rem;
    white-space: nowrap;
  }

  .answer {
    margin-bottom: 0.75rem;
    padding: 0.6rem 0.9rem;
    border-radius: var(--radius);
    background: var(--surface-2);
  }

  .answer p {
    margin: 0.2rem 0;
  }

  .flag-note {
    color: var(--warn);
  }

  .more {
    margin-top: 1rem;
  }
</style>
