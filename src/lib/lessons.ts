import type { Lesson } from './types.ts';

const lessonFiles = import.meta.glob('../../content/lessons/*.json', { eager: true, import: 'default' }) as Record<string, Lesson>;
const videoFiles = import.meta.glob('../../content/videos/*.mp4', { eager: true, query: '?url', import: 'default' }) as Record<string, string>;

/** Built lessons by id ("9-D"). Lessons not written yet are simply absent. */
export const lessons = new Map(Object.values(lessonFiles).map((l) => [l.id, l]));

/** All lessons in study order: Element 3, 8, 9, each by subelement letter. */
export const lessonList = [...lessons.values()].sort((a, b) => a.element - b.element || a.id.localeCompare(b.id));

/** URL of content/videos/<id>.mp4 when one was added for the lesson. */
export const videoUrl = (id: string): string | null => videoFiles[`../../content/videos/${id}.mp4`] ?? null;

/** Index of the first scene teaching the key topic. */
export const firstSceneOf = (lesson: Lesson, keyTopic: number) => Math.max(0, lesson.scenes.findIndex((s) => s.keyTopic === keyTopic));
