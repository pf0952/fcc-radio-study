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

export type TemplateName =
  | 'title-card'
  | 'formula'
  | 'block-diagram'
  | 'waveform'
  | 'radar-ppi'
  | 'equipment-card'
  | 'comparison-table'
  | 'timeline'
  | 'band-strip'
  | 'key-facts';

/** One animated scene: a template with its parameters, the short labels it shows, and what the narrator says. */
export type Scene = {
  id: string;
  keyTopic: number;
  template: TemplateName;
  params: Record<string, unknown>;
  onScreen: string[];
  narration: string;
};

/** A pop-up question shown after the given scene, drawn from these key topics. */
export type Checkpoint = { after: string; keyTopics: number[] };

/** content/lessons/<id>.json */
export type Lesson = {
  id: string;
  element: number;
  title: string;
  keyTopics: number[];
  scenes: Scene[];
  checkpoints: Checkpoint[];
  video: string | null;
};

export type LessonProgress = { scene: number; completed: boolean; completedAt: string | null };

export type QuizResult = { passed: boolean; best: number; last: number; attempts: number; at: string };

export type Theme = 'system' | 'light' | 'dark';

/** Settings: lesson player, appearance, and the developer switch that opens every practice exam. */
export type Prefs = { voice: string | null; rate: number; captions: boolean; theme: Theme; textSize: number; unlockAll: boolean };

export type Progress = {
  schema: 1;
  answers: AnswerRecord[];
  exams: Exam[];
  activeExam: Exam | null;
  deck: Record<string, DeckCard>;
  lessons: Record<string, LessonProgress>;
  quizzes: Record<string, QuizResult>;
  /** Lesson most recently opened, for "Continue where you left off". */
  lastLesson: string | null;
  prefs: Prefs;
};

export type Rng = () => number;
