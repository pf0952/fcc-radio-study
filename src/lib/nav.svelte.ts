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
};

export const nav = $state<{ screen: ScreenId; params: NavParams }>({ screen: 'home', params: {} });

export function go(screen: ScreenId, params: NavParams = {}) {
  nav.screen = screen;
  nav.params = params;
}
