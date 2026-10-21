<script lang="ts">
  import { elements } from '../lib/elements';
  import { dueIds, localDate } from '../lib/leitner.ts';
  import { go } from '../lib/nav.svelte';
  import { progress } from '../lib/progress.svelte';

  const today = localDate();
</script>

<h1>Home</h1>
<p class="lead">Lessons, practice exams and review for the FCC commercial radio license exams. Everything runs offline.</p>

<div class="grid">
  {#each elements as el (el.element)}
    {@const exams = progress.exams.filter((e) => e.element === el.element)}
    {@const best = exams.length ? Math.max(...exams.map((e) => e.score ?? 0)) : null}
    {@const due = dueIds(progress.deck, el.element, today).length}
    <section class="card" aria-labelledby="home-el-{el.element}">
      <p class="eyebrow">Element {el.element}</p>
      <h2 id="home-el-{el.element}">{el.name}</h2>
      <dl>
        <div><dt>Lessons done</dt><dd>{[...el.subelements].filter((s) => progress.lessons[`${el.element}-${s}`]?.completed).length} of {el.subelements.length}</dd></div>
        <div><dt>Section quizzes passed</dt><dd>{[...el.subelements].filter((s) => progress.quizzes[`${el.element}-${s}`]?.passed).length} of {el.subelements.length}</dd></div>
        <div><dt>Exams taken</dt><dd>{exams.length}</dd></div>
        <div><dt>Best score</dt><dd>{best === null ? 'None yet' : `${best} of ${el.exam.questions}`}</dd></div>
        <div><dt>Missed questions due</dt><dd>{due}</dd></div>
      </dl>
      <p class="muted rule">Exam: {el.exam.questions} questions, pass with {el.exam.passMark} correct.</p>
      <div class="buttons">
        <button class="primary" onclick={() => go('exams')}>Practice exam</button>
        {#if due}<button class="secondary" onclick={() => go('review')}>Review {due} due</button>{/if}
      </div>
    </section>
  {/each}
</div>

<style>
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(17rem, 1fr));
    gap: 1rem;
  }

  .grid .card {
    margin: 0;
    display: flex;
    flex-direction: column;
  }

  .eyebrow {
    margin: 0;
    color: var(--muted);
    font-size: 0.85rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  dl {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.75rem 1rem;
    margin: 0.5rem 0 1rem;
  }

  dt {
    color: var(--muted);
    font-size: 0.85rem;
  }

  dd {
    margin: 0;
    font-weight: 600;
  }

  .rule {
    margin: auto 0 1rem;
    font-size: 0.9rem;
  }

  .buttons {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
  }
</style>
