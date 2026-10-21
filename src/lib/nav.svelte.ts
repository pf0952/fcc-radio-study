import type { ScreenId } from './screens';

/** What a screen should open straight into, e.g. a drill started from exam results. */
export type NavParams = { drill?: { element: number; topics: number[] }; results?: string };

export const nav = $state<{ screen: ScreenId; params: NavParams }>({ screen: 'home', params: {} });

export function go(screen: ScreenId, params: NavParams = {}) {
  nav.screen = screen;
  nav.params = params;
}
