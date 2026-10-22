<script lang="ts">
  import { exportFile, showInFolder } from '../lib/backend';
  import { examCsv } from '../lib/csv.ts';
  import { isCorrect, subelementStats } from '../lib/exam.ts';
  import { formatDate, formatDuration } from '../lib/keys';
  import { localDate } from '../lib/leitner.ts';
  import { lessons } from '../lib/lessons';
  import { go } from '../lib/nav.svelte';
  import { elementInfo, questionById } from '../lib/pools';
  import { progress } from '../lib/progress.svelte';
  import type { Exam } from '../lib/types.ts';
  import AccuracyChart from './AccuracyChart.svelte';
  import QuestionCard from './QuestionCard.svelte';
  import TrendChart from './TrendChart.svelte';

  let { exam, onback }: { exam: Exam; onback: () => void } = $props();

  const info = $derived(elementInfo(exam.element));
  const passPct = $derived(Math.round((info.exam.passMark / info.exam.questions) * 100));
  const stats = $derived(subelementStats(exam.items, questionById));
  const weakest = $derived(stats.filter((s) => s.correct < s.total).slice(0, 3));
  const missed = $derived(exam.items.map((item, n) => ({ item, n })).filter(({ item }) => !isCorrect(item, questionById.get(item.q)!)));
  const history = $derived(progress.exams.filter((e) => e.element === exam.element && e.finishedAt));

  let exported = $state<{ text: string; path?: string } | null>(null);

  async function exportCsv() {
    try {
      const name = `fcc-element-${exam.element}-exam-${localDate(new Date(exam.finishedAt!))}.csv`;
      const path = await exportFile(name, examCsv(exam, questionById, info.exam.passMark));
      exported = { text: `Saved to ${path}.`, path };
    } catch (e) {
      exported = { text: `Export failed: ${e}` };
    }
  }
</script>

<div class="results">
  <button class="link back" onclick={onback}>← Practice exams</button>
  <div class="title-row">
    <div>
      <h1>Element {exam.element} exam results</h1>
      <p class="muted">{formatDate(exam.finishedAt!)} · {exam.mode === 'study' ? 'Study mode' : 'Exam mode'}</p>
    </div>
    <div class="export">
      <button class="secondary" onclick={exportCsv}>Export to CSV</button>
      {#if exported}
        {@const path = exported.path}
        <p class="muted" role="status">
          {exported.text}
          {#if path}<button class="link" onclick={() => showInFolder(path)}>Show in folder</button>{/if}
        </p>
      {/if}
    </div>
  </div>

  <section class="card summary" class:pass={exam.passed} aria-label="Score">
    <div>
      <p class="score">{exam.score} <span>of {exam.items.length}</span></p>
      <p class="verdict">{exam.passed ? 'Passed' : 'Not passed'} · pass mark {info.exam.passMark}</p>
    </div>
    <dl>
      <div><dt>Correct</dt><dd>{Math.round((exam.score! / exam.items.length) * 100)}%</dd></div>
      <div><dt>Missed</dt><dd>{missed.length}</dd></div>
      <div><dt>Time taken</dt><dd>{formatDuration(exam.seconds)}</dd></div>
    </dl>
  </section>

  <section class="card">
    <h2>Accuracy by subelement</h2>
    <AccuracyChart {stats} {passPct} />
  </section>

  {#if weakest.length}
    <section class="card">
      <h2>Your weakest subelements</h2>
      <div class="weak">
        {#each weakest as s (s.subelement)}
          {@const lessonId = `${exam.element}-${s.subelement}`}
          {@const hasLesson = lessons.has(lessonId)}
          <div class="weak-item">
            <h3>Subelement {s.subelement}: {s.title}</h3>
            <p class="muted">{s.correct} of {s.total} correct. Missed key topics:</p>
            <ul>
              {#each s.missedTopics as t (t.keyTopic)}
                <li>Key topic {t.keyTopic}: {t.title}</li>
              {/each}
            </ul>
            <div class="buttons">
              <button class="secondary small" disabled={!hasLesson} title={hasLesson ? undefined : 'This lesson is not built yet'} onclick={() => go('study', { lesson: lessonId, topic: s.missedTopics[0]?.keyTopic })}>
                Replay lesson
              </button>
              <button class="secondary small" disabled={!hasLesson} title={hasLesson ? undefined : 'This lesson is not built yet'} onclick={() => go('study', { quiz: lessonId })}>
                Retake section quiz
              </button>
              <button class="primary small" onclick={() => go('review', { drill: { element: exam.element, topics: s.missedTopics.map((t) => t.keyTopic) } })}>
                Drill these questions
              </button>
            </div>
          </div>
        {/each}
      </div>
    </section>
  {/if}

  <section class="card">
    <h2>Score trend</h2>
    <TrendChart exams={history} {passPct} highlight={exam.id} />
  </section>

  <section aria-labelledby="missed-title">
    <h2 id="missed-title" class="section-title">Missed questions ({missed.length})</h2>
    {#each missed as { item, n } (item.q)}
      <div class="card missed">
        <p class="muted number">Question {n + 1}</p>
        <QuestionCard question={questionById.get(item.q)!} {item} reveal locked />
      </div>
    {:else}
      <p class="card">You answered every question correctly.</p>
    {/each}
  </section>
</div>

<style>
  .back {
    margin-bottom: 0.75rem;
  }

  .title-row {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 1rem;
    flex-wrap: wrap;
  }

  .title-row p {
    margin: 0;
  }

  .export {
    display: grid;
    justify-items: end;
    gap: 0.3rem;
    max-width: 26rem;
    font-size: 0.875rem;
    text-align: right;
    overflow-wrap: anywhere;
  }

  .results > .card,
  .results > section {
    margin-top: 1rem;
  }

  .summary {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 1.5rem;
    border-left: 6px solid var(--bad);
  }

  .summary.pass {
    border-left-color: var(--good);
  }

  .score {
    margin: 0;
    font-size: 3rem;
    font-weight: 700;
    line-height: 1;
  }

  .score span {
    font-size: 1.25rem;
    font-weight: 500;
    color: var(--muted);
  }

  .verdict {
    margin: 0.4rem 0 0;
    font-weight: 600;
  }

  .summary dl {
    display: flex;
    gap: 2rem;
    margin: 0;
  }

  dt {
    color: var(--muted);
    font-size: 0.85rem;
  }

  dd {
    margin: 0;
    font-size: 1.25rem;
    font-weight: 600;
  }

  .weak {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
    gap: 1.25rem;
  }

  .weak-item h3 {
    font-size: 1rem;
    margin: 0 0 0.25rem;
  }

  .weak-item p,
  .weak-item ul {
    margin: 0.25rem 0;
    font-size: 0.9rem;
  }

  .weak-item ul {
    padding-left: 1.1rem;
  }

  .buttons {
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem;
    margin-top: 0.6rem;
  }

  .section-title {
    margin-top: 1.5rem;
  }

  .missed + .missed {
    margin-top: 0.75rem;
  }

  .number {
    margin: 0 0 0.25rem;
    font-size: 0.85rem;
  }
</style>
