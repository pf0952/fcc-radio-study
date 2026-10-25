/**
 * How many of a scene's n items to show at narration progress `fraction` (0-1): the first at once, then
 * item k (counting from 0) at 85% × k / n of the narration, about when the narrator reaches it. The last
 * item lands well before the end, so even a 2-row table shows its second row halfway through.
 */
export const revealed = (fraction: number, n: number) => (n <= 0 ? 0 : Math.min(n, 1 + Math.floor((fraction / 0.85) * n + 1e-9)));
