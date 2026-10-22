import { plain } from './rich.ts';
import type { Exam, Question } from './types.ts';

/** One CSV field, quoted when it holds a comma, quote or line break. */
export const csvCell = (value: string | number) => (/[",\r\n]/.test(String(value)) ? `"${String(value).replace(/"/g, '""')}"` : String(value));

const row = (cells: (string | number)[]) => cells.map(csvCell).join(',');

const two = (n: number) => String(n).padStart(2, '0');
/** Local date and time as YYYY-MM-DD HH:MM, which spreadsheets read as a date. */
const localDateTime = (d: Date) => `${d.getFullYear()}-${two(d.getMonth() + 1)}-${two(d.getDate())} ${two(d.getHours())}:${two(d.getMinutes())}`;

/**
 * An exam result as CSV: a short header block, then one row per question with the answer chosen and
 * the correct answer as they were lettered in that exam. Starts with a byte-order mark so Excel reads
 * symbols such as Ω and µ correctly.
 */
export function examCsv(exam: Exam, byId: ReadonlyMap<string, Question>, passMark: number): string {
  const letter = (order: number[], original: number) => 'ABCD'[order.indexOf(original)];
  const lines = [
    row(['Element', exam.element]),
    row(['Finished', exam.finishedAt ? localDateTime(new Date(exam.finishedAt)) : '']),
    row(['Mode', exam.mode === 'study' ? 'Study' : 'Exam']),
    row(['Score', `${exam.score} of ${exam.items.length}`]),
    row(['Result', `${exam.passed ? 'Passed' : 'Not passed'} (pass mark ${passMark})`]),
    row(['Time taken (seconds)', exam.seconds]),
    '',
    row(['Number', 'Question', 'Subelement', 'Key topic', 'Your answer', 'Correct answer', 'Result']),
    ...exam.items.map((item, n) => {
      const q = byId.get(item.q)!;
      const chosen = item.chosen === null ? 'Not answered' : `${letter(item.order, item.chosen)}. ${plain(q.choices[item.chosen])}`;
      const right = `${letter(item.order, q.answer)}. ${plain(q.choices[q.answer])}`;
      return row([n + 1, q.id, q.subelement, q.keyTopic, chosen, right, item.chosen === q.answer ? 'Correct' : 'Wrong']);
    }),
  ];
  return '﻿' + lines.join('\r\n') + '\r\n';
}
