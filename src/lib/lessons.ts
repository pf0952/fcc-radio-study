import durations from '../../content/narration/durations.json';
import { CHARS_PER_SECOND } from './narrator.svelte';
import type { Lesson, Scene } from './types.ts';

const lessonFiles = import.meta.glob('../../content/lessons/*.json', { eager: true, import: 'default' }) as Record<string, Lesson>;
const videoFiles = import.meta.glob('../../content/videos/*.mp4', { eager: true, query: '?url', import: 'default' }) as Record<string, string>;

/** Built lessons by id ("9-D"). Lessons not written yet are simply absent. */
export const lessons = new Map(Object.values(lessonFiles).map((l) => [l.id, l]));

/** All lessons in study order: Element 3, 8, 9, each by subelement letter. */
export const lessonList = [...lessons.values()].sort((a, b) => a.element - b.element || a.id.localeCompare(b.id));

const narrationFiles = import.meta.glob('../../content/narration/*/*.ogg', { eager: true, query: '?url', import: 'default' }) as Record<string, string>;

/** A scene's recorded narration (content/narration/<lesson>/<scene>.ogg) and its length, or null if there is none. */
export function narrationOf(lesson: string, scene: string): { src: string; seconds: number } | null {
  const src = narrationFiles[`../../content/narration/${lesson}/${scene}.ogg`];
  const seconds = (durations as Record<string, number>)[`${lesson}/${scene}`];
  return src && seconds ? { src, seconds } : null;
}

/** A scene's narration length in seconds at normal speed. */
export const sceneSeconds = (lesson: string, scene: Scene) => narrationOf(lesson, scene.id)?.seconds ?? scene.narration.length / CHARS_PER_SECOND;

/** Rough time to finish a lesson, in seconds: the narration plus half a minute per checkpoint question. */
export const estimateOf = (lesson: Lesson) => lesson.scenes.reduce((sum, s) => sum + sceneSeconds(lesson.id, s), 0) + lesson.checkpoints.length * 30;

/** URL of content/videos/<id>.mp4 when one was added for the lesson. */
export const videoUrl = (id: string): string | null => videoFiles[`../../content/videos/${id}.mp4`] ?? null;

/** Index of the first scene teaching the key topic. */
export const firstSceneOf = (lesson: Lesson, keyTopic: number) => Math.max(0, lesson.scenes.findIndex((s) => s.keyTopic === keyTopic));

/**
 * "Replay that part" after a missed checkpoint question: the first scene of its key topic in the stretch
 * since the previous checkpoint (the part just heard), else the key topic's first scene.
 */
export function replaySceneOf(lesson: Lesson, after: number, keyTopic: number): number {
  const ends = lesson.checkpoints.map((c) => lesson.scenes.findIndex((s) => s.id === c.after)).filter((i) => i >= 0 && i < after);
  const from = ends.length ? Math.max(...ends) + 1 : 0;
  const i = lesson.scenes.findIndex((s, n) => n >= from && n <= after && s.keyTopic === keyTopic);
  return i >= 0 ? i : firstSceneOf(lesson, keyTopic);
}
