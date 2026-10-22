import type { ScreenId } from './screens';

/** What a screen should open straight into, e.g. a drill started from exam results. */
export type NavParams = {
  drill?: { element: number; topics: number[] };
  results?: string;
  /** Study: play this lesson ("9-D"), optionally from the first scene of a key topic. */
  lesson?: string;
  topic?: number;
  /** Study: open this lesson's section quiz. */
  quiz?: string;
  /** Practice Exams: go straight back into the unfinished exam. */
  resume?: boolean;
};

/** `visit` counts navigations, so going to the screen already shown still opens it afresh. */
export const nav = $state<{ screen: ScreenId; params: NavParams; visit: number }>({ screen: 'home', params: {}, visit: 0 });

/** Scrolls the main area back to the top, e.g. when a screen switches from a list to a lesson. */
export const toTop = () => document.querySelector('main')?.scrollTo(0, 0);

export function go(screen: ScreenId, params: NavParams = {}) {
  nav.screen = screen;
  nav.params = params;
  nav.visit++;
}
