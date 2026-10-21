/**
 * How many of a scene's n items to show at narration progress `fraction` (0-1): the first at once,
 * the rest spread over the first 85% of the narration so the last lands before the narrator finishes.
 */
export const revealed = (fraction: number, n: number) => (n <= 0 ? 0 : Math.min(n, 1 + Math.floor((fraction / 0.85) * (n - 1) + 1e-9)));
