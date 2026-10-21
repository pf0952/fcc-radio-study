/** One pool question, as generated into content/pools/element-N.json. */
export type Question = {
  id: string;
  element: number;
  subelement: string;
  subelementTitle: string;
  keyTopic: number;
  keyTopicTitle: string;
  stem: string;
  choices: string[];
  /** Index into choices of the keyed answer. */
  answer: number;
  figure: string | null;
  explanation: string;
  flag: string | null;
};

/** Where an answer was given. */
export type Source = 'exam' | 'study' | 'drill' | 'review' | 'quiz' | 'checkpoint';

export type AnswerRecord = { q: string; ok: boolean; at: string; src: Source };

/** A question as placed in an exam or practice set. */
export type Item = {
  q: string;
  /** Display order: order[i] is the original index of the choice shown in position i. */
  order: number[];
  /** Original index of the chosen choice, or null if unanswered. */
  chosen: number | null;
  flagged: boolean;
};

export type ExamMode = 'exam' | 'study';

export type Exam = {
  id: string;
  element: number;
  mode: ExamMode;
  startedAt: string;
  finishedAt: string | null;
  /** Active time spent, in seconds. */
  seconds: number;
  /** Optional countdown length; null when the timer is off. */
  timerMinutes: number | null;
  items: Item[];
  current: number;
  /** Set when the exam is submitted. */
  score: number | null;
  passed: boolean | null;
};

/** A question in the missed-questions deck (Leitner box 1-5, due on a local YYYY-MM-DD date). */
export type DeckCard = { box: number; due: string };

export type Progress = {
  schema: 1;
  answers: AnswerRecord[];
  exams: Exam[];
  activeExam: Exam | null;
  deck: Record<string, DeckCard>;
};

export type Rng = () => number;
