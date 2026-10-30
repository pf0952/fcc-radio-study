<script lang="ts">
  import { onMount } from 'svelte';
  import QuestionCard from '../components/QuestionCard.svelte';
  import { newItem } from '../lib/exam.ts';
  import { choiceKey, formatClock, formatEstimate, fromInside, ignoreShortcut } from '../lib/keys';
  import { estimateOf, narrationOf, replaySceneOf, sceneSeconds, videoUrl } from '../lib/lessons';
  import { Narration } from '../lib/narrator.svelte';
  import { pools } from '../lib/pools';
  import { progress, recordAnswer, saveProgress } from '../lib/progress.svelte';
  import { drawCheckpoint } from '../lib/quiz';
  import type { Checkpoint, Item, Lesson, Question } from '../lib/types.ts';
  import { captionChunks, chunkAt } from './captions';
  import { shrinkToFit } from './fit';
  import Scene from './Scene.svelte';

  let {
    lesson,
    startAt = null,
    onquiz,
    onexit,
  }: { lesson: Lesson; startAt?: number | null; onquiz: () => void; onexit: () => void } = $props();

  type Overlay = { kind: 'checkpoint'; after: number; question: Question; item: Item } | { kind: 'end' };

  const SKIP_SECONDS = 5;

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
  let showVideo = $state(false);
  let dialog = $state<HTMLDialogElement>();
  let transcript = $state<HTMLDialogElement>();
  let advance: ReturnType<typeof setTimeout> | undefined;
  /** Where the scrub bar is being dragged to, in seconds into the lesson. */
  let scrub = $state<number | null>(null);
  let resumeAfterScrub = false;

  const lengths = $derived(lesson.scenes.map((s) => sceneSeconds(lesson.id, s)));
  /** Where each scene starts in the lesson, in seconds; the extra last entry is the lesson's length. */
  const starts = $derived(lengths.reduce((all, s, i) => [...all, all[i] + s], [0]));
  const total = $derived(starts[lengths.length]);
  const sceneAt = (t: number) => Math.min(last, starts.findLastIndex((s) => s <= t));

  const elapsed = $derived(starts[index] + (narration?.time ?? 0));
  const position = $derived(scrub ?? elapsed);
  // While scrubbing, the stage and captions follow the bar.
  const shown = $derived(scrub === null ? index : sceneAt(scrub));
  const scene = $derived(lesson.scenes[shown]);
  /** Characters of this scene's narration reached by the player or the scrub bar. */
  const reached = $derived(scrub === null ? (narration?.progress ?? 0) : Math.floor(((scrub - starts[shown]) / lengths[shown]) * scene.narration.length));
  // Before the narration starts (e.g. after jumping while paused) the whole scene is shown.
  const fraction = $derived(scrub !== null || narration?.playing || reached > 0 ? reached / scene.narration.length : 1);
  const spoken = $derived(narration?.done && scrub === null ? 0 : reached);
  // Captions show the piece of the narration being spoken, so they always fit in two lines.
  const chunks = $derived(captionChunks(scene.narration));
  const chunk = $derived(chunks[chunkAt(chunks, reached)]);
  const checkpointMarks = $derived(lesson.checkpoints.map((c) => starts[lesson.scenes.findIndex((s) => s.id === c.after) + 1] / total));
  // The opening title card also says how long the lesson takes.
  const staged = $derived.by(() => {
    if (shown > 0) return scene;
    const length = formatEstimate(estimateOf(lesson));
    return { ...scene, params: { ...scene.params, length }, onScreen: [...scene.onScreen, length] };
  });

  function startScene(i: number, play: boolean, from = 0) {
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
    if (from > 0) narration.seek(from);
    if (play) narration.play();
  }

  /** Jumps to a time in the lesson. It stops a second short of the end, so the lesson still finishes by playing out. */
  function seekTo(t: number, play = playingNow()) {
    const to = Math.max(0, Math.min(t, total - 1));
    const i = sceneAt(to);
    if (i !== index || !narration || narration.done) return startScene(i, play, to - starts[i]);
    narration.seek(to - starts[i]);
    if (play) narration.play();
  }

  function skip(seconds: number) {
    const to = elapsed + seconds;
    // Skipping forward stops at a checkpoint rather than jumping over it.
    const checkpoint = to >= starts[index + 1] ? lesson.checkpoints.find((c) => c.after === lesson.scenes[index].id) : undefined;
    if (!checkpoint) return seekTo(to);
    clearTimeout(advance);
    narration?.stop();
    openCheckpoint(checkpoint, index);
  }

  function scrubTo(t: number) {
    if (scrub === null) {
      resumeAfterScrub = playingNow();
      clearTimeout(advance);
      narration?.pause();
    }
    scrub = t;
  }

  function scrubDone() {
    if (scrub === null) return;
    const t = scrub;
    scrub = null;
    seekTo(t, resumeAfterScrub);
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

  function openTranscript() {
    transcript?.showModal();
    transcript?.querySelector('.current')?.scrollIntoView({ block: 'center' });
  }

  function togglePlay() {
    if (!narration) return;
    if (narration.playing) {
      clearTimeout(advance);
      narration.pause();
    } else if (narration.done) startScene(index, true);
    else narration.play();
  }

  // A narration that has just finished counts: the lesson is moving on to the next scene by itself.
  const playingNow = () => !!narration && (narration.playing || narration.done);

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
    } else if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
      e.preventDefault();
      const direction = e.key === 'ArrowRight' ? 1 : -1;
      if (e.shiftKey) startScene(index + direction, playingNow());
      else skip(direction * SKIP_SECONDS);
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

<svelte:window {onkeydown} onpointerup={scrubDone} />

<div class="player">
  <header>
    <div class="top">
      <button class="link" onclick={onexit}>← Lessons</button>
      <div class="group">
        <label>
          Speed
          <select value={prefs.rate} onchange={(e) => setRate(Number(e.currentTarget.value))}>
            {#each [0.75, 1, 1.25, 1.5] as r (r)}<option value={r}>{r}×</option>{/each}
          </select>
        </label>
        <label class="check"><input type="checkbox" bind:checked={prefs.captions} onchange={saveProgress} /> Captions</label>
        <button class="secondary small" onclick={openTranscript}>Transcript</button>
        {#if video}
          <button class="secondary small" aria-pressed={showVideo} onclick={() => ((showVideo = !showVideo), narration?.pause())}>Watch video</button>
        {/if}
      </div>
    </div>
    <div class="title">
      <h1>{lesson.id} {lesson.title}</h1>
      <p class="muted">Element {lesson.element} · key topics {lesson.keyTopics[0]}–{lesson.keyTopics.at(-1)} · {lesson.scenes.length} scenes</p>
    </div>
  </header>

  <!-- The stage takes whatever height is left, as wide as 16:9 allows, so the player never scrolls. -->
  <div class="stage-wrap">
    <div class="stage-box">
      {#if showVideo && video}
        <!-- svelte-ignore a11y_media_has_caption -->
        <video src={video} controls class="video"></video>
      {:else}
        <Scene scene={staged} {fraction} />
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
  </div>

  {#if prefs.captions && !showVideo}
    {#key chunk}
      <p class="captions" aria-live="off" use:shrinkToFit>
        {#if spoken > chunk[0]}<span class="spoken">{scene.narration.slice(chunk[0], Math.min(spoken, chunk[1]))}</span>{/if}{scene.narration.slice(Math.max(spoken, chunk[0]), chunk[1])}
      </p>
    {/key}
  {/if}

  <div class="timeline">
    <div class="bar" style="--at: {position / total}">
      <input
        class="scrub"
        type="range"
        min="0"
        max={total}
        step="1"
        value={position}
        aria-label="Lesson position"
        aria-valuetext="{formatClock(position)} of {formatClock(total)}, scene {shown + 1}"
        oninput={(e) => scrubTo(Number(e.currentTarget.value))}
        onchange={scrubDone}
      />
      {#each checkpointMarks as mark, i (i)}<span class="mark" style="--at: {mark}"></span>{/each}
    </div>
    <span class="clock">{formatClock(position)} / {formatClock(total)}</span>
  </div>

  <div class="controls group">
    <button class="secondary" onclick={() => startScene(index - 1, playingNow())} disabled={index === 0} aria-label="Previous scene">⏮</button>
    <button class="secondary" onclick={() => skip(-SKIP_SECONDS)} aria-label="Back {SKIP_SECONDS} seconds">−{SKIP_SECONDS}s</button>
    <button class="primary play" onclick={togglePlay} aria-label={narration?.playing ? 'Pause' : 'Play'}>
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d={narration?.playing ? 'M6 5h4v14H6zM14 5h4v14h-4z' : 'M8 5v14l11-7z'} /></svg>
    </button>
    <button class="secondary" onclick={() => skip(SKIP_SECONDS)} aria-label="Forward {SKIP_SECONDS} seconds">+{SKIP_SECONDS}s</button>
    <button class="secondary" onclick={() => startScene(index + 1, playingNow())} disabled={index === last} aria-label="Next scene">⏭</button>
    <button class="secondary" onclick={() => startScene(index, true)}>Replay scene</button>
    <span class="muted count">Scene {shown + 1} of {lesson.scenes.length}</span>
  </div>
</div>

<dialog bind:this={transcript} class="transcript" aria-labelledby="transcript-title">
  <div class="transcript-head">
    <h2 id="transcript-title">Transcript</h2>
    <button class="secondary small" onclick={() => transcript?.close()}>Close</button>
  </div>
  {#each lesson.keyTopics as t (t)}
    <h3>Key topic {t}: {topicTitle(t)}</h3>
    {#each lesson.scenes as s, i (s.id)}
      {#if s.keyTopic === t}
        <p class:current={i === index}>
          <button class="link" onclick={() => (transcript?.close(), startScene(i, false))}>Scene {i + 1}</button>
          {s.narration}
        </p>
      {/if}
    {/each}
  {/each}
</dialog>

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
  /*
   * The player fills the window height. Its width is what a 16:9 stage can use at this height (the rest of the
   * player is about 15.3rem tall, main's padding 3rem), so the captions and controls line up with the stage.
   */
  .player {
    container-type: inline-size;
    display: flex;
    flex-direction: column;
    height: 100%;
    max-width: calc((100vh - 18.3rem) * 16 / 9);
    margin: 0 auto;
  }

  .title {
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    column-gap: 1rem;
    margin: 0.35rem 0 0.75rem;
  }

  .title h1 {
    margin: 0;
    font-size: 1.5rem;
  }

  .title p {
    margin: 0;
  }

  .stage-wrap {
    flex: 1 1 0;
    min-height: 12rem;
    max-height: calc(100cqw * 9 / 16);
    container-type: size;
  }

  .stage-box {
    position: relative;
    width: min(100cqw, 100cqh * 16 / 9);
    margin: 0 auto;
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

  /* Two lines, sized in rem so shrinkToFit can make a long piece smaller without shrinking the box. */
  .captions {
    flex: none;
    height: calc(2 * 1.05rem * 1.5 + 1.4rem + 2px);
    overflow: hidden;
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
    flex: none;
    display: flex;
    align-items: center;
    gap: 0.6rem;
    margin: 0.4rem 0;
  }

  /* --at (0-1) places things on the bar; the thumb's centre stops half a thumb short of each end. */
  .bar,
  .mark {
    --x: calc(var(--thumb) / 2 + (100% - var(--thumb)) * var(--at));
  }

  .bar {
    --thumb: 0.9rem;
    position: relative;
    flex: 1;
    min-width: 0;
    display: flex;
  }

  .scrub {
    width: 100%;
    height: 1.25rem;
    margin: 0;
    padding: 0;
    border: 0;
    appearance: none;
    background: none;
    cursor: pointer;
  }

  .scrub::-webkit-slider-runnable-track {
    height: 0.4rem;
    border-radius: 99px;
    background: linear-gradient(to right, var(--accent) var(--x), color-mix(in srgb, var(--muted) 35%, var(--surface-2)) var(--x));
  }

  .scrub::-webkit-slider-thumb {
    appearance: none;
    width: var(--thumb);
    height: var(--thumb);
    margin-top: calc((0.4rem - var(--thumb)) / 2);
    border-radius: 50%;
    background: var(--accent);
  }

  /* Checkpoints. */
  .mark {
    position: absolute;
    top: 50%;
    left: var(--x);
    width: 3px;
    height: 0.4rem;
    transform: translate(-50%, -50%);
    background: var(--warn);
    pointer-events: none;
  }

  .clock {
    font-size: 0.85rem;
    font-variant-numeric: tabular-nums;
    white-space: nowrap;
  }

  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
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
    display: grid;
    place-items: center;
    min-width: 4rem;
  }

  .play svg {
    display: block;
    width: 1.5rem;
    height: 1.5rem;
    fill: currentColor;
  }

  .count {
    margin-left: auto;
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
    width: min(46rem, 92vw);
    max-width: none;
    max-height: 85vh;
    padding-top: 0;
  }

  .transcript-head {
    position: sticky;
    top: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.25rem 0 0.5rem;
    background: var(--surface);
  }

  .transcript-head h2 {
    margin: 0;
  }

  .transcript h3 {
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

  /* Wide enough for the question card to put a figure beside the choices. */
  .checkpoint {
    width: min(52rem, 92vw);
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
