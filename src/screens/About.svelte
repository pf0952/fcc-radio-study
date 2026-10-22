<script lang="ts">
  import { getVersion } from '@tauri-apps/api/app';
  import { elements } from '../lib/elements';
  import { pools } from '../lib/pools';
  import { plain } from '../lib/rich';

  const flagged = Object.values(pools)
    .flat()
    .filter((q) => q.flag);
</script>

<h1>About</h1>
<p class="lead">
  FCC Radio Study is a free, offline study program for the FCC commercial radio operator license exams.
  {#await getVersion() then v}Version {v}.{/await}
  Press <kbd>?</kbd> for keyboard shortcuts.
</p>

<section class="card" aria-labelledby="about-pools">
  <h2 id="about-pools">Question pools</h2>
  <ul>
    {#each elements as el (el.element)}
      <li>
        <strong>Element {el.element}, {el.name}:</strong>
        {el.pool.publisher}, {el.pool.date}. {el.questions} questions in {el.keyTopics} key topics; the exam has {el.exam.questions} questions and
        passes with {el.exam.passMark} correct.<br />
        <code>{el.pool.url}</code>
      </li>
    {/each}
  </ul>
  <p class="reminder">
    The pools are U.S. government works. <strong>Confirm with your exam provider (COLEM) that these pools are still current before you sit the exam.</strong>
  </p>
</section>

<section class="card" aria-labelledby="about-radar-mile">
  <h2 id="about-radar-mile">Radar mile</h2>
  <p>
    Element 3 uses 12.346 microseconds for the radar mile and Element 8 uses 12.34 microseconds. The lessons and fact sheets use the value that matches
    each element, and so should you on the exam.
  </p>
</section>

<section class="card" aria-labelledby="about-flags">
  <h2 id="about-flags">Flagged answers</h2>
  <p>
    These {flagged.length} keyed answers are questionable or out of date. The app teaches the keyed answer, because that is what the exam scores, and shows
    this note next to the question.
  </p>
  <dl>
    {#each flagged as q (q.id)}
      <div>
        <dt>{q.id}</dt>
        <dd><span class="muted">{plain(q.stem)}</span><br />{q.flag}</dd>
      </div>
    {/each}
  </dl>
  <p class="muted">
    Element 3 key topic 59 (pulse modulation) was checked against the official pool file: all six keyed answers match the key, so none of them is flagged.
  </p>
</section>

<style>
  ul {
    padding-left: 1.2rem;
  }

  li + li {
    margin-top: 0.75rem;
  }

  .reminder {
    padding: 0.6rem 0.9rem;
    border-left: 4px solid var(--warn);
    background: var(--surface-2);
    border-radius: 6px;
  }

  dl {
    margin: 0;
    display: grid;
    gap: 0.75rem;
  }

  dl div {
    display: grid;
    grid-template-columns: 6.5rem 1fr;
    gap: 0.75rem;
  }

  dt {
    font-weight: 700;
  }

  dd {
    margin: 0;
  }

  dd .muted {
    font-size: 0.875rem;
  }
</style>
