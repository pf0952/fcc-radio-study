import data from '../../content/elements.json';

/** Per-element facts and exam rules. content/elements.json is the one place to change them. */
export type ElementInfo = (typeof data)[number];

export const elements: ElementInfo[] = data;
