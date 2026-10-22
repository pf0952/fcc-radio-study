<script lang="ts">
  import PracticeRunner from '../components/PracticeRunner.svelte';
  import { pools } from '../lib/pools';
  import { progress, saveProgress } from '../lib/progress.svelte';
  import { QUIZ_PASS, QUIZ_SIZE, drawQuiz } from '../lib/quiz';
  import type { Lesson, Question } from '../lib/types.ts';

  let { lesson, onreplay, onclose }: { lesson: Lesson; onreplay: (keyTopic: number) => void; onclose: () => void } = $props();

  // svelte-ignore state_referenced_locally
  progress.lastLesson = lesson.id;
  const draw = () => drawQuiz(pools[lesson.element], lesson.keyTopics, Math.random);
  let attempt = $state(0);
  let questions = $state(draw());
  const topicTitle = (t: number) => pools[lesson.element].find((q) => q.keyTopic === t)?.keyTopicTitle ?? '';
  const missedTopics = (missed: Question[]) => [...new Set(missed.map((q) => q.keyTopic))].sort((a, b) => a - b);

  function finished({ right }: { right: number }) {
    const prev = progress.quizzes[lesson.id];
    const best = Math.max(right, prev?.best ?? 0);
    // A section stays Passed once any attempt reaches the pass mark.
    progress.quizzes[lesson.id] = { passed: best >= QUIZ_PASS, best, last: right, attempts: (prev?.attempts ?? 0) + 1, at: new Date().toISOString() };
    saveProgress();
  }

  function retake() {
    questions = draw();
    attempt++;
  }
</script>

{#key attempt}
  <PracticeRunner title="Section quiz: {lesson.id} {lesson.title}" {questions} source="quiz" {onclose} onfinish={finished}>
    {#snippet summary({ right, missed })}
      <section class="card result" class:pass={right >= QUIZ_PASS}>
        <p class="score">{right} of {QUIZ_SIZE} correct</p>
        {#if right >= QUIZ_PASS}
          <p class="status">Passed</p>
          <p class="muted">This section is marked Passed.</p>
        {:else}
          <p class="status">Needs review</p>
          <p class="muted">You need {QUIZ_PASS} of {QUIZ_SIZE} to pass. Replay the parts you missed, then retake the quiz with new questions.</p>
          <ul>
            {#each missedTopics(missed) as t (t)}
              <li>
                <span>Key topic {t}: {topicTitle(t)}</span>
                <button class="secondary small" onclick={() => onreplay(t)}>Replay these scenes</button>
              </li>
            {/each}
          </ul>
        {/if}
        <div class="buttons">
          {#if right < QUIZ_PASS}<button class="primary" onclick={retake}>Retake with new questions</button>{/if}
          <button class={right >= QUIZ_PASS ? 'primary' : 'secondary'} onclick={onclose}>Back to lessons</button>
        </div>
      </section>
    {/snippet}
  </PracticeRunner>
{/key}

<style>
  .result {
    border-left: 6px solid var(--warn);
  }

  .result.pass {
    border-left-color: var(--good);
  }

  .score {
    margin: 0;
    font-size: 1.75rem;
    font-weight: 700;
  }

  .status {
    margin: 0.25rem 0;
    font-size: 1.15rem;
    font-weight: 700;
  }

  ul {
    list-style: none;
    padding: 0;
    display: grid;
    gap: 0.5rem;
  }

  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
  }

  .buttons {
    display: flex;
    gap: 0.6rem;
    margin-top: 1rem;
  }
</style>
