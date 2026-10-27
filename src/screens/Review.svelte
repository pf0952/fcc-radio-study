<script lang="ts">
  import PracticeRunner from '../components/PracticeRunner.svelte';
  import { drillFrom, weakestDrill } from '../lib/drill.ts';
  import { elements } from '../lib/elements';
  import { dueIds, localDate } from '../lib/leitner.ts';
  import { nav, toTop } from '../lib/nav.svelte';
  import { pools, questionById, subelementsOf } from '../lib/pools';
  import { progress } from '../lib/progress.svelte';
  import type { Question, Source } from '../lib/types.ts';

  let session = $state<{ title: string; questions: Question[]; source: Source } | null>(null);
  $effect(() => {
    void session;
    toTop();
  });
  const chosenSub = $state(Object.fromEntries(elements.map((e) => [e.element, e.subelements[0]])));
  const today = localDate();

  // Opened from exam results: drill the missed key topics straight away.
  if (nav.params.drill) {
    const { element, topics } = nav.params.drill;
    session = {
      title: `Element ${element} drill: key topics ${topics.join(', ')}`,
      questions: drillFrom(pools[element].filter((q) => topics.includes(q.keyTopic)), progress.answers, Math.random),
      source: 'drill',
    };
  }

  function review(element: number) {
    session = {
      title: `Element ${element} missed questions`,
      questions: dueIds(progress.deck, element, today).map((id) => questionById.get(id)!),
      source: 'review',
    };
  }

  function drillWeakest(element: number) {
    session = { title: `Element ${element} drill: weakest key topics`, questions: weakestDrill(pools[element], progress.answers, Math.random), source: 'drill' };
  }

  function drillSubelement(element: number) {
    const sub = chosenSub[element];
    session = {
      title: `Element ${element} drill: subelement ${sub}`,
      questions: drillFrom(pools[element].filter((q) => q.subelement === sub), progress.answers, Math.random),
      source: 'drill',
    };
  }
</script>

{#if session}
  <PracticeRunner {...session} onclose={() => (session = null)} />
{:else}
  <h1>Review</h1>
  <p class="lead">
    Every question you miss goes into a missed-questions deck. Answer it right when it comes due and it moves up a box: due again after 1, 2, 4, 8
    and then 16 days, then it's retired. Drills are quick sets of 10.
  </p>

  <div class="elements">
    {#each elements as el (el.element)}
      {@const cards = Object.entries(progress.deck).filter(([id]) => id.startsWith(`${el.element}-`))}
      {@const due = dueIds(progress.deck, el.element, today).length}
      <section class="card" aria-labelledby="review-el-{el.element}">
        <h2 id="review-el-{el.element}">Element {el.element}: {el.name}</h2>

        <h3>Missed questions</h3>
        <p><strong>{due}</strong> due today · {cards.length} in the deck</p>
        <ol class="boxes" aria-label="Questions per box">
          {#each [1, 2, 3, 4, 5] as box (box)}
            <li><span class="n">{cards.filter(([, c]) => c.box === box).length}</span><span class="muted">Box {box}</span></li>
          {/each}
        </ol>
        <button class="primary" disabled={!due} onclick={() => review(el.element)}>
          {due ? `Review ${due} due question${due === 1 ? '' : 's'}` : 'Nothing due'}
        </button>

        <h3>Drill</h3>
        <button class="secondary" onclick={() => drillWeakest(el.element)}>10 from my weakest key topics</button>
        <div class="sub-drill">
          <label>
            <span class="sr-only">Subelement</span>
            <select bind:value={chosenSub[el.element]}>
              {#each subelementsOf(el.element) as s (s.letter)}
                <option value={s.letter}>{s.letter}: {s.title}</option>
              {/each}
            </select>
          </label>
          <button class="secondary" onclick={() => drillSubelement(el.element)}>Drill subelement</button>
        </div>
      </section>
    {/each}
  </div>
{/if}

<style>
  .elements {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
    gap: 1rem;
    align-items: start;
  }

  .elements .card {
    margin: 0;
  }

  h3 {
    font-size: 1rem;
    margin: 1.25rem 0 0.4rem;
  }

  .boxes {
    display: flex;
    gap: 0.4rem;
    list-style: none;
    padding: 0;
    margin: 0 0 0.75rem;
  }

  .boxes li {
    flex: 1;
    display: grid;
    justify-items: center;
    padding: 0.35rem 0;
    border-radius: 6px;
    background: var(--surface-2);
    font-size: 0.8rem;
  }

  .n {
    font-size: 1.1rem;
    font-weight: 600;
    font-variant-numeric: tabular-nums;
  }

  .sub-drill {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-top: 0.5rem;
  }

  .sub-drill label {
    max-width: 100%;
  }

  select {
    max-width: min(14rem, 100%);
  }
</style>
