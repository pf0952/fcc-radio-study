<script lang="ts">
  import { elements } from '../lib/elements';
  import { dueIds, localDate } from '../lib/leitner.ts';
  import { lessonList } from '../lib/lessons';
  import { go } from '../lib/nav.svelte';
  import { pools, subelementsOf } from '../lib/pools';
  import { progress } from '../lib/progress.svelte';
  import { RECENT_ANSWERS, readiness } from '../lib/readiness.ts';
  import { nextStep, unlockStatus } from '../lib/unlock.ts';

  const today = localDate();
  const step = $derived(nextStep(progress, lessonList));
  const pct = (x: number) => Math.round(x * 100);

  function verdict(score: number, passPct: number) {
    if (score * 100 >= passPct) return 'On track to pass';
    if (score * 100 >= passPct - 15) return 'Getting close';
    return 'Keep studying';
  }

  function continueNow() {
    if (!step) return;
    if (step.kind === 'exam') go('exams', { resume: true });
    else if (step.kind === 'lesson') go('study', { lesson: step.lesson.id });
    else if (step.kind === 'quiz') go('study', { quiz: step.lesson.id });
    else go('exams');
  }
</script>

<h1>Home</h1>
<p class="lead">Lessons, practice exams and review for the FCC commercial radio license exams. Everything runs offline.</p>

{#if step}
  <section class="card continue" aria-labelledby="continue-title">
    <div>
      <p class="eyebrow">Continue where you left off</p>
      {#if step.kind === 'exam'}
        {@const a = progress.activeExam!}
        <h2 id="continue-title">Element {step.element} practice exam</h2>
        <p class="muted">{a.items.filter((i) => i.chosen !== null).length} of {a.items.length} answered, {a.mode} mode.</p>
      {:else if step.kind === 'lesson'}
        <h2 id="continue-title">{step.lesson.id} {step.lesson.title}</h2>
        <p class="muted">{step.scene > 0 ? `Lesson, scene ${step.scene + 1} of ${step.lesson.scenes.length}.` : `Next lesson, ${step.lesson.scenes.length} scenes.`}</p>
      {:else if step.kind === 'quiz'}
        <h2 id="continue-title">{step.lesson.id} {step.lesson.title}: section quiz</h2>
        <p class="muted">The lesson is done. Pass its quiz with 4 of 5.</p>
      {:else}
        <h2 id="continue-title">Element {step.element} practice exam</h2>
        <p class="muted">Every lesson and section quiz in Element {step.element} is done.</p>
      {/if}
    </div>
    <button class="primary" onclick={continueNow}>
      {step.kind === 'exam' ? 'Resume exam' : step.kind === 'lesson' ? (step.scene > 0 ? 'Resume lesson' : 'Start lesson') : step.kind === 'quiz' ? 'Take the quiz' : 'Start an exam'}
    </button>
  </section>
{/if}

<div class="grid">
  {#each elements as el (el.element)}
    {@const exams = progress.exams.filter((e) => e.element === el.element)}
    {@const best = exams.length ? Math.max(...exams.map((e) => e.score ?? 0)) : null}
    {@const due = dueIds(progress.deck, el.element, today).length}
    {@const subs = subelementsOf(el.element)}
    {@const ready = readiness(pools[el.element], progress.answers, progress.exams)}
    {@const passPct = Math.round((el.exam.passMark / el.exam.questions) * 100)}
    {@const lock = unlockStatus(el.element, subs, progress, progress.prefs.unlockAll)}
    <section class="card" aria-labelledby="home-el-{el.element}">
      <p class="eyebrow">Element {el.element}</p>
      <h2 id="home-el-{el.element}">{el.name}</h2>

      <div class="readiness">
        <p class="ready-line">
          <span>Readiness</span>
          <strong>{ready.score === null ? 'No answers yet' : `${pct(ready.score)}% · ${verdict(ready.score, passPct)}`}</strong>
        </p>
        <div
          class="meter"
          role="meter"
          aria-label="Element {el.element} readiness"
          aria-valuemin="0"
          aria-valuemax="100"
          aria-valuenow={ready.score === null ? 0 : pct(ready.score)}
          aria-valuetext={ready.score === null ? 'No answers yet' : `${pct(ready.score)} percent, pass mark ${passPct} percent`}
        >
          <span class="fill" style="width: {ready.score === null ? 0 : pct(ready.score)}%"></span>
          <span class="pass" style="left: {passPct}%" title="Pass mark: {passPct}%"></span>
        </div>
        <ol class="subs" aria-label="Recent accuracy by subelement">
          {#each ready.subelements as s (s.letter)}
            {@const text = s.accuracy === null ? `${s.letter} ${s.title}: no answers yet` : `${s.letter} ${s.title}: ${pct(s.accuracy)}% of your last ${s.answered} answers`}
            <li title={text}>
              <span class="bar" class:none={s.accuracy === null}><span style="height: {s.accuracy === null ? 0 : Math.max(4, pct(s.accuracy))}%"></span></span>
              <span class="letter" aria-hidden="true">{s.letter}</span>
              <span class="sr-only">{text}</span>
            </li>
          {/each}
        </ol>
        <p class="muted how">
          {ready.examAverage === null
            ? 'Your recent accuracy'
            : `${ready.examCount === 1 ? 'Your exam score' : `Your last ${ready.examCount} exams`} (${pct(ready.examAverage)}%) and recent accuracy`} per subelement
          (last {RECENT_ANSWERS} answers each), weighted like the real exam.
        </p>
      </div>

      <dl>
        <div><dt>Lessons done</dt><dd>{subs.filter((s) => progress.lessons[`${el.element}-${s.letter}`]?.completed).length} of {subs.length}</dd></div>
        <div><dt>Section quizzes passed</dt><dd>{subs.filter((s) => progress.quizzes[`${el.element}-${s.letter}`]?.passed).length} of {subs.length}</dd></div>
        <div><dt>Exams taken</dt><dd>{exams.length}</dd></div>
        <div><dt>Best score</dt><dd>{best === null ? 'None yet' : `${best} of ${el.exam.questions}`}</dd></div>
        <div><dt>Missed questions due</dt><dd>{due}</dd></div>
      </dl>
      <p class="muted rule">
        Exam: {el.exam.questions} questions, pass with {el.exam.passMark}.
        {#if !lock.unlocked}Opens after every lesson and section quiz ({lock.done} of {lock.total} done).{/if}
      </p>
      <div class="buttons">
        <button class="primary" onclick={() => go('exams')}>{lock.unlocked ? 'Practice exam' : 'Practice exams (locked)'}</button>
        {#if due}<button class="secondary" onclick={() => go('review')}>Review {due} due</button>{/if}
      </div>
    </section>
  {/each}
</div>

<style>
  .continue {
    padding-block: 0.9rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    flex-wrap: wrap;
    margin-bottom: 1rem;
    border-left: 6px solid var(--accent);
  }

  .continue h2 {
    margin: 0.15rem 0 0.1rem;
  }

  .continue p.muted {
    margin: 0;
  }

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

  .grid h2 {
    font-size: 1.1rem;
  }

  .eyebrow {
    margin: 0;
    color: var(--muted);
    font-size: 0.85rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .readiness {
    margin: 0.25rem 0 0.75rem;
  }

  .ready-line {
    display: flex;
    justify-content: space-between;
    gap: 0.5rem;
    margin: 0 0 0.35rem;
    font-size: 0.9rem;
  }

  .ready-line span {
    color: var(--muted);
  }

  .meter {
    position: relative;
    height: 0.7rem;
    border-radius: 99px;
    background: var(--surface-2);
  }

  .fill {
    position: absolute;
    inset: 0 auto 0 0;
    border-radius: 99px;
    background: var(--accent);
  }

  .pass {
    position: absolute;
    top: -0.25rem;
    bottom: -0.25rem;
    width: 2px;
    margin-left: -1px;
    background: var(--text);
  }

  .subs {
    display: flex;
    gap: 2px;
    list-style: none;
    padding: 0;
    margin: 0.5rem 0 0;
  }

  .subs li {
    flex: 1;
    display: grid;
    justify-items: center;
    gap: 0.15rem;
    min-width: 0;
  }

  .bar {
    position: relative;
    width: 100%;
    max-width: 1.4rem;
    height: 1.8rem;
    border-radius: 3px 3px 0 0;
    background: var(--surface-2);
  }

  .bar span {
    position: absolute;
    inset: auto 0 0 0;
    border-radius: 3px 3px 0 0;
    background: var(--accent);
  }

  .bar.none {
    background: transparent;
    border: 1px dashed var(--border);
  }

  .letter {
    font-size: 0.7rem;
    color: var(--muted);
  }

  .how {
    margin: 0.5rem 0 0;
    font-size: 0.78rem;
  }

  dl {
    display: grid;
    gap: 0.15rem;
    margin: 0.25rem 0 0.75rem;
  }

  dl div {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    gap: 0.5rem;
  }

  dt {
    color: var(--muted);
    font-size: 0.85rem;
  }

  dd {
    margin: 0;
    font-weight: 600;
    text-align: right;
  }

  .rule {
    margin: auto 0 0.75rem;
    font-size: 0.9rem;
  }

  .buttons {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
  }
</style>
