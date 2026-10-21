<script lang="ts">
  import { elements } from '../lib/elements';
</script>

<h1>About</h1>
<p class="lead">FCC Radio Study is a free, offline study program for the FCC commercial radio operator license exams.</p>

<section class="card" aria-labelledby="about-pools">
  <h2 id="about-pools">Question pools</h2>
  <ul>
    {#each elements as el (el.element)}
      <li>
        <strong>Element {el.element}, {el.name}:</strong>
        {el.pool.publisher}, {el.pool.date}.<br />
        <code>{el.pool.url}</code>
      </li>
    {/each}
  </ul>
  <p class="muted">The pools are U.S. government works. Confirm with your exam provider (COLEM) that these pools are still current before you sit the exam.</p>
</section>

<section class="card" aria-labelledby="about-radar-mile">
  <h2 id="about-radar-mile">Radar mile</h2>
  <p>Element 3 uses 12.346 microseconds for the radar mile and Element 8 uses 12.34 microseconds. Use the value that matches the element you are studying.</p>
</section>

<style>
  ul {
    padding-left: 1.2rem;
  }

  li + li {
    margin-top: 0.75rem;
  }
</style>
