<script lang="ts">
  import { onMount } from 'svelte';
  import QuestionCard from '../components/QuestionCard.svelte';
  import { newItem } from '../lib/exam.ts';
  import { choiceKey, fromInside, ignoreShortcut } from '../lib/keys';
  import { firstSceneOf, narrationOf, replaySceneOf, videoUrl } from '../lib/lessons';
  import { Narration } from '../lib/narrator.svelte';
  import { pools } from '../lib/pools';
  import { progress, recordAnswer, saveProgress } from '../lib/progress.svelte';
  import { drawCheckpoint } from '../lib/quiz';
  import type { Checkpoint, Item, Lesson, Question } from '../lib/types.ts';
  import Scene from './Scene.svelte';

  let {
    lesson,
    startAt = null,
    onquiz,
    onexit,
  }: { lesson: Lesson; startAt?: number | null; onquiz: () => void; onexit: () => void } = $props();

  type Overlay = { kind: 'checkpoint'; after: number; question: Question; item: Item } | { kind: 'end' };

  // svelte-ignore state_referenced_locally
  progress.lessons[lesson.id] ??= { scene: 0, completed: false, completedAt: null };
  // Read it back: the stored value is the reactive copy (what `??=` returns is the plain object).
  // svelte-ignore state_referenced_locally
  const saved = progress.lessons[lesson.id];
  const prefs = progress.prefs;
  const last = $derived(lesson.scenes.length - 1);
  const topicTitle = (t: number) => pools[lesson.element].find((q) => q.keyTopic === t)?.keyTopicTitle ?? '';
  // svelte-ignore state_referenced_locally
  const video = videoUrl(lesson.id);

  // svelte-ignore state_referenced_locally
  let index = $state(startAt ?? Math.min(saved.scene, lesson.scenes.length - 1));
  let narration = $state<Narration | null>(null);
  let overlay = $state<Overlay | null>(null);
  let showTranscript = $state(false);
  let showVideo = $state(false);
  let dialog = $state<HTMLDialogElement>();
  let advance: ReturnType<typeof setTimeout> | undefined;

  const scene = $derived(lesson.scenes[index]);
  // Before the narration starts (e.g. after jumping while paused) the whole scene is shown.
  const fraction = $derived(narration && (narration.playing || narration.progress > 0) ? narration.progress / narration.text.length : 1);
  const spoken = $derived(narration && narration.progress > 0 && !narration.done ? narration.progress : 0);
  const checkpointAfter = $derived(new Set(lesson.checkpoints.map((c) => c.after)));

  function startScene(i: number, play: boolean) {
    clearTimeout(advance);
    narration?.stop();
    overlay = null;
    showVideo = false;
    index = Math.max(0, Math.min(last, i));
    saved.scene = index;
    saveProgress();
    const at = index;
    const s = lesson.scenes[at];
    narration = new Narration(s.narration, { audio: narrationOf(lesson.id, s.id), rate: prefs.rate, onend: () => sceneEnded(at) });
    if (play) narration.play();
  }

  function sceneEnded(i: number) {
    if (i !== index) return;
    saveProgress();
    advance = setTimeout(() => {
      const checkpoint = lesson.checkpoints.find((c) => c.after === lesson.scenes[i].id);
      if (checkpoint) openCheckpoint(checkpoint, i);
      else continueAfter(i);
    }, 900);
  }

  function continueAfter(i: number) {
    if (i < last) return startScene(i + 1, true);
    saved.completed = true;
    saved.completedAt = new Date().toISOString();
    saved.scene = 0;
    saveProgress();
    overlay = { kind: 'end' };
  }

  function openCheckpoint(c: Checkpoint, after: number) {
    const question = drawCheckpoint(pools[lesson.element], c.keyTopics, Math.random, c.questions);
    overlay = { kind: 'checkpoint', after, question, item: newItem(question, Math.random) };
  }

  // Show the checkpoint as a modal dialog once it is rendered.
  $effect(() => {
    if (overlay?.kind === 'checkpoint' && dialog && !dialog.open) dialog.showModal();
  });

  function answerCheckpoint(original: number) {
    if (overlay?.kind !== 'checkpoint' || overlay.item.chosen !== null) return;
    overlay.item.chosen = original;
    recordAnswer(overlay.question.id, original === overlay.question.answer, 'checkpoint');
    saveProgress();
  }

  function leaveCheckpoint(replay: boolean) {
    if (overlay?.kind !== 'checkpoint') return;
    const { after, question } = overlay;
    dialog?.close();
    overlay = null;
    if (replay) startScene(replaySceneOf(lesson, after, question.keyTopic), true);
    else continueAfter(after);
  }

  function togglePlay() {
    if (!narration) return;
    if (narration.playing) {
      clearTimeout(advance);
      narration.pause();
    } else if (narration.done) startScene(index, true);
    else narration.play();
  }

  const playingNow = () => !!narration?.playing;

  function setRate(rate: number) {
    prefs.rate = rate;
    narration?.setRate(rate);
    saveProgress();
  }

  function onkeydown(e: KeyboardEvent) {
    if (overlay?.kind === 'checkpoint') {
      const pos = choiceKey(e);
      if (pos !== null && pos < overlay.item.order.length) answerCheckpoint(overlay.item.order[pos]);
      else if (e.key === 'Enter' && overlay.item.chosen !== null && !fromInside(e, 'button')) {
        e.preventDefault();
        leaveCheckpoint(false);
      }
      return;
    }
    if (ignoreShortcut(e) || showVideo) return;
    if (e.key === ' ') {
      e.preventDefault();
      togglePlay();
    } else if (e.key === 'ArrowRight') {
      startScene(index + 1, playingNow());
    } else if (e.key === 'ArrowLeft') {
      startScene(index - 1, playingNow());
    }
  }

  // Open on the saved scene and start playing; stop speaking when the player closes.
  onMount(() => {
    progress.lastLesson = lesson.id;
    startScene(index, true);
    return () => {
      clearTimeout(advance);
      narration?.stop();
    };
  });
</script>

<svelte:window {onkeydown} />

<div class="player">
  <header>
    <button class="link" onclick={onexit}>← Lessons</button>
    <h1>{lesson.id} {lesson.title}</h1>
    <p class="muted">Element {lesson.element} · key topics {lesson.keyTopics[0]}–{lesson.keyTopics.at(-1)} · {lesson.scenes.length} scenes</p>
  </header>

  <div class="stage-wrap">
    {#if showVideo && video}
      <!-- svelte-ignore a11y_media_has_caption -->
      <video src={video} controls class="video"></video>
    {:else}
      <Scene {scene} {fraction} />
    {/if}
    {#if overlay?.kind === 'end'}
      <div class="end">
        <h2>Lesson complete</h2>
        <p>Next, the section quiz: 5 questions from this lesson's key topics. Get 4 right to pass.</p>
        <div class="buttons">
          <button class="primary" onclick={onquiz}>Take the section quiz</button>
          <button class="secondary" onclick={() => startScene(0, true)}>Replay lesson</button>
          <button class="secondary" onclick={onexit}>Back to lessons</button>
        </div>
      </div>
    {/if}
  </div>

  {#if prefs.captions && !showVideo}
    <p class="captions" aria-live="off">
      <span class="spoken">{scene.narration.slice(0, spoken)}</span>{scene.narration.slice(spoken)}
    </p>
  {/if}

  <div class="timeline" aria-label="Scenes">
    {#each lesson.scenes as s, i (s.id)}
      <button
        class="segment"
        class:checkpoint={checkpointAfter.has(s.id)}
        aria-label="Scene {i + 1}: {s.onScreen[0] ?? ''}{checkpointAfter.has(s.id) ? ' (checkpoint after)' : ''}"
        aria-current={i === index ? 'step' : undefined}
        onclick={() => startScene(i, playingNow())}
      >
        <span style="width: {i < index ? 100 : i === index ? Math.round(fraction * 100) : 0}%"></span>
      </button>
    {/each}
  </div>

  <div class="controls">
    <div class="group">
      <button class="secondary" onclick={() => startScene(index - 1, playingNow())} disabled={index === 0} aria-label="Previous scene">⏮</button>
      <button class="primary play" onclick={togglePlay} aria-label={narration?.playing ? 'Pause' : 'Play'}>{narration?.playing ? 'Pause' : 'Play'}</button>
      <button class="secondary" onclick={() => startScene(index + 1, playingNow())} disabled={index === last} aria-label="Next scene">⏭</button>
      <button class="secondary" onclick={() => startScene(index, true)}>Replay scene</button>
      <span class="muted count">Scene {index + 1} of {lesson.scenes.length}</span>
    </div>
    <div class="group">
      <label>
        Speed
        <select value={prefs.rate} onchange={(e) => setRate(Number(e.currentTarget.value))}>
          {#each [0.75, 1, 1.25, 1.5] as r (r)}<option value={r}>{r}×</option>{/each}
        </select>
      </label>
      <label class="check"><input type="checkbox" bind:checked={prefs.captions} onchange={saveProgress} /> Captions</label>
      <button class="secondary" aria-pressed={showTranscript} onclick={() => (showTranscript = !showTranscript)}>Transcript</button>
      {#if video}
        <button class="secondary" aria-pressed={showVideo} onclick={() => ((showVideo = !showVideo), narration?.pause())}>Watch video</button>
      {/if}
    </div>
  </div>

  {#if showTranscript}
    <section class="card transcript" aria-label="Transcript">
      {#each lesson.keyTopics as t (t)}
        <h2>Key topic {t}: {topicTitle(t)}</h2>
        {#each lesson.scenes as s, i (s.id)}
          {#if s.keyTopic === t}
            <p class:current={i === index}>
              <button class="link" onclick={() => startScene(i, false)}>Scene {i + 1}</button>
              {s.narration}
            </p>
          {/if}
        {/each}
      {/each}
    </section>
  {/if}
</div>

{#if overlay?.kind === 'checkpoint'}
  <dialog bind:this={dialog} class="checkpoint" aria-label="Checkpoint question" oncancel={(e) => e.preventDefault()}>
    <p class="eyebrow">Checkpoint</p>
    <QuestionCard question={overlay.question} item={overlay.item} reveal={overlay.item.chosen !== null} locked={overlay.item.chosen !== null} onchoose={answerCheckpoint} />
    {#if overlay.item.chosen !== null}
      <div class="dialog-actions">
        {#if overlay.item.chosen !== overlay.question.answer}
          <button class="secondary" onclick={() => leaveCheckpoint(true)}>Replay that part</button>
        {/if}
        <button class="primary" onclick={() => leaveCheckpoint(false)}>Continue</button>
      </div>
    {:else}
      <p class="muted hint">Pick an answer to continue. This won't stop you going on, but it counts toward your weak spots.</p>
    {/if}
  </dialog>
{/if}

<style>
  .player {
    max-width: 68rem;
  }

  header h1 {
    margin: 0.5rem 0 0;
  }

  header p {
    margin: 0.2rem 0 1rem;
  }

  .stage-wrap {
    position: relative;
  }

  .video {
    width: 100%;
    aspect-ratio: 16 / 9;
    background: #000;
    border-radius: var(--radius);
  }

  .end {
    position: absolute;
    inset: 0;
    display: grid;
    place-content: center;
    text-align: center;
    padding: 2rem;
    border-radius: var(--radius);
    background: rgb(11 26 42 / 0.9);
    color: #eaf1f8;
  }

  .end h2 {
    font-size: 1.8rem;
  }

  .end .buttons {
    display: flex;
    gap: 0.6rem;
    justify-content: center;
    flex-wrap: wrap;
  }

  .captions {
    min-height: 3.2em;
    margin: 0.75rem 0 0;
    padding: 0.7rem 1rem;
    border-radius: var(--radius);
    background: var(--surface);
    border: 1px solid var(--border);
    color: var(--muted);
    font-size: 1.05rem;
    line-height: 1.5;
  }

  .spoken {
    color: var(--text);
  }

  .timeline {
    display: flex;
    gap: 3px;
    margin: 0.75rem 0;
  }

  .segment {
    position: relative;
    flex: 1;
    height: 0.6rem;
    padding: 0;
    border: 0;
    border-radius: 3px;
    background: var(--surface-2);
    overflow: hidden;
  }

  .segment span {
    position: absolute;
    inset: 0 auto 0 0;
    background: var(--accent);
  }

  .segment.checkpoint::after {
    content: '';
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    width: 4px;
    background: var(--warn);
  }

  .segment[aria-current='step'] {
    outline: 2px solid var(--accent);
    outline-offset: 1px;
  }

  .controls {
    display: flex;
    justify-content: space-between;
    gap: 0.75rem;
    flex-wrap: wrap;
  }

  .group {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    flex-wrap: wrap;
  }

  .play {
    min-width: 5.5rem;
  }

  .count {
    font-size: 0.9rem;
    font-variant-numeric: tabular-nums;
  }

  label {
    display: flex;
    align-items: center;
    gap: 0.35rem;
    font-size: 0.9rem;
  }

  label select {
    max-width: 14rem;
  }

  .transcript {
    margin-top: 1rem;
  }

  .transcript h2 {
    font-size: 1rem;
    margin: 1rem 0 0.4rem;
  }

  .transcript p {
    margin: 0.4rem 0;
    line-height: 1.55;
  }

  .transcript p.current {
    padding-left: 0.6rem;
    border-left: 3px solid var(--accent);
  }

  .transcript .link {
    margin-right: 0.4rem;
    font-weight: 600;
  }

  .checkpoint {
    width: min(46rem, 92vw);
    max-width: none;
  }

  .eyebrow {
    margin: 0 0 0.5rem;
    color: var(--warn);
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    font-size: 0.85rem;
  }

  .hint {
    font-size: 0.9rem;
  }

  .dialog-actions {
    display: flex;
    justify-content: flex-end;
    gap: 0.6rem;
    margin-top: 1rem;
  }
</style>
