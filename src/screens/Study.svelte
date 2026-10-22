<script lang="ts">
  import FactSheet from '../components/FactSheet.svelte';
  import LessonPlayer from '../lessons/LessonPlayer.svelte';
  import SectionQuiz from '../lessons/SectionQuiz.svelte';
  import { elements } from '../lib/elements';
  import { firstSceneOf, lessons, videoUrl } from '../lib/lessons';
  import { nav } from '../lib/nav.svelte';
  import { subelementsOf } from '../lib/pools';
  import { progress } from '../lib/progress.svelte';

  type View = { kind: 'list' } | { kind: 'play'; id: string; start: number | null } | { kind: 'quiz'; id: string } | { kind: 'sheet'; element: number };

  function initial(): View {
    const p = nav.params;
    if (p.quiz && lessons.has(p.quiz)) return { kind: 'quiz', id: p.quiz };
    if (p.lesson && lessons.has(p.lesson)) {
      const start = p.topic !== undefined ? firstSceneOf(lessons.get(p.lesson)!, p.topic) : null;
      return { kind: 'play', id: p.lesson, start };
    }
    return { kind: 'list' };
  }
  let view = $state<View>(initial());

  const list = () => (view = { kind: 'list' });
  const play = (id: string, start: number | null = null) => (view = { kind: 'play', id, start });
</script>

{#if view.kind === 'play'}
  {@const id = view.id}
  {#key `${id}:${view.start}`}
    <LessonPlayer lesson={lessons.get(id)!} startAt={view.start} onquiz={() => (view = { kind: 'quiz', id })} onexit={list} />
  {/key}
{:else if view.kind === 'quiz'}
  {@const lesson = lessons.get(view.id)!}
  <SectionQuiz {lesson} onreplay={(t) => play(lesson.id, firstSceneOf(lesson, t))} onclose={list} />
{:else if view.kind === 'sheet'}
  <FactSheet element={view.element} onback={list} />
{:else}
  <h1>Study</h1>
  <p class="lead">One narrated lesson per subelement, with checkpoint questions along the way and a 5-question section quiz at the end. Pass the quiz with 4 of 5.</p>

  {#each elements as el (el.element)}
    {@const element = el.element}
    <section class="element" aria-labelledby="study-el-{el.element}">
      <div class="element-head">
        <h2 id="study-el-{el.element}">Element {el.element}: {el.name}</h2>
        <button class="secondary small" onclick={() => (view = { kind: 'sheet', element })}>Formula and fact sheet</button>
      </div>
      <div class="lessons">
        {#each subelementsOf(el.element) as s (s.letter)}
          {@const id = `${el.element}-${s.letter}`}
          {@const lesson = lessons.get(id)}
          {@const lp = progress.lessons[id]}
          {@const quiz = progress.quizzes[id]}
          <article class="card lesson" class:missing={!lesson}>
            <p class="eyebrow">{id}</p>
            <h3>{s.title}</h3>
            {#if lesson}
              <p class="status">
                <span class="badge" class:done={lp?.completed}>
                  {lp?.completed ? 'Completed' : lp && lp.scene > 0 ? `Scene ${lp.scene + 1} of ${lesson.scenes.length}` : 'Not started'}
                </span>
                <span class="badge" class:done={quiz?.passed} class:review={quiz && !quiz.passed}>
                  {quiz ? (quiz.passed ? `Quiz passed (${quiz.best}/5)` : `Quiz: needs review (${quiz.last}/5)`) : 'Quiz not taken'}
                </span>
              </p>
              <div class="buttons">
                <button class="primary small" onclick={() => play(id)}>{lp && lp.scene > 0 && !lp.completed ? 'Resume' : lp?.completed ? 'Replay' : 'Play'}</button>
                <button class="secondary small" onclick={() => (view = { kind: 'quiz', id })}>Section quiz</button>
                {#if videoUrl(id)}<span class="muted video">Video available</span>{/if}
              </div>
            {:else}
              <p class="muted status">Lesson not built yet.</p>
            {/if}
          </article>
        {/each}
      </div>
    </section>
  {/each}
{/if}

<style>
  .element + .element {
    margin-top: 2rem;
  }

  .element-head {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    gap: 1rem;
    flex-wrap: wrap;
  }

  .lessons {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
    gap: 0.75rem;
  }

  .lesson {
    margin: 0;
    padding: 1rem 1.1rem;
    display: flex;
    flex-direction: column;
  }

  .card + .card {
    margin-top: 0;
  }

  .lesson.missing {
    opacity: 0.6;
  }

  .eyebrow {
    margin: 0;
    color: var(--muted);
    font-size: 0.8rem;
    font-weight: 700;
  }

  h3 {
    margin: 0.1rem 0 0.5rem;
    font-size: 1.05rem;
  }

  .status {
    display: flex;
    flex-wrap: wrap;
    gap: 0.35rem;
    margin: 0 0 0.75rem;
    font-size: 0.85rem;
  }

  .badge {
    padding: 0.1rem 0.5rem;
    border-radius: 99px;
    background: var(--surface-2);
  }

  .badge.done {
    background: color-mix(in srgb, var(--good) 18%, var(--surface));
    color: var(--good);
    font-weight: 600;
  }

  .badge.review {
    background: color-mix(in srgb, var(--warn) 18%, var(--surface));
    color: var(--warn);
    font-weight: 600;
  }

  .buttons {
    margin-top: auto;
    display: flex;
    align-items: center;
    gap: 0.4rem;
  }

  .video {
    font-size: 0.8rem;
  }
</style>
