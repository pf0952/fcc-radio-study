<script lang="ts">
  import { elements } from '../lib/elements';
  import type { ScreenId } from '../lib/screens';

  let { go }: { go: (id: ScreenId) => void } = $props();
</script>

<h1>Home</h1>
<p class="lead">Lessons, practice exams and review for the FCC commercial radio license exams. Everything runs offline.</p>

<div class="grid">
  {#each elements as el (el.element)}
    <section class="card" aria-labelledby="home-el-{el.element}">
      <p class="eyebrow">Element {el.element}</p>
      <h2 id="home-el-{el.element}">{el.name}</h2>
      <dl>
        <div><dt>Lessons done</dt><dd>0 of {el.subelements.length}</dd></div>
        <div><dt>Section quizzes passed</dt><dd>0 of {el.subelements.length}</dd></div>
        <div><dt>Exams taken</dt><dd>0</dd></div>
        <div><dt>Best score</dt><dd>None yet</dd></div>
      </dl>
      <p class="muted rule">Exam: {el.exam.questions} questions, pass with {el.exam.passMark} correct.</p>
      <button class="primary" onclick={() => go('study')}>Start studying</button>
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

  button {
    align-self: flex-start;
  }
</style>
