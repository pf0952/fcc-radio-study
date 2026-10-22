import type { Lesson, Progress } from './types.ts';

export type UnlockStep = { lesson: string; title: string; lessonDone: boolean; quizPassed: boolean };

/**
 * An element's practice exams unlock when every lesson in it has been played to the end and every
 * section quiz in it is Passed. `steps` is the checklist, one entry per subelement; the developer
 * switch `unlockAll` opens every element regardless.
 */
export function unlockStatus(
  element: number,
  subelements: readonly { letter: string; title: string }[],
  p: Pick<Progress, 'lessons' | 'quizzes'>,
  unlockAll = false,
): { unlocked: boolean; done: number; total: number; steps: UnlockStep[] } {
  const steps = subelements.map(({ letter, title }) => {
    const id = `${element}-${letter}`;
    return { lesson: id, title, lessonDone: !!p.lessons[id]?.completed, quizPassed: !!p.quizzes[id]?.passed };
  });
  const done = steps.reduce((n, s) => n + Number(s.lessonDone) + Number(s.quizPassed), 0);
  return { unlocked: unlockAll || done === steps.length * 2, done, total: steps.length * 2, steps };
}

export type NextStep =
  | { kind: 'exam'; element: number }
  | { kind: 'lesson'; lesson: Lesson; scene: number }
  | { kind: 'quiz'; lesson: Lesson }
  | { kind: 'practice'; element: number };

/**
 * "Continue where you left off": an unfinished exam first; otherwise, starting from the lesson opened
 * last, the first lesson of its element that isn't played to the end or whose quiz isn't passed;
 * once the whole element is done, a practice exam. With no history it starts at the first lesson.
 * `lessons` must be in study order.
 */
export function nextStep(p: Pick<Progress, 'activeExam' | 'lastLesson' | 'lessons' | 'quizzes'>, lessons: readonly Lesson[]): NextStep | null {
  if (p.activeExam) return { kind: 'exam', element: p.activeExam.element };
  const last = lessons.find((l) => l.id === p.lastLesson) ?? lessons[0];
  if (!last) return null;
  const own = lessons.filter((l) => l.element === last.element);
  const from = own.indexOf(last);
  for (const lesson of [...own.slice(from), ...own.slice(0, from)]) {
    const lp = p.lessons[lesson.id];
    if (!lp?.completed) return { kind: 'lesson', lesson, scene: lp?.scene ?? 0 };
    if (!p.quizzes[lesson.id]?.passed) return { kind: 'quiz', lesson };
  }
  return { kind: 'practice', element: last.element };
}
