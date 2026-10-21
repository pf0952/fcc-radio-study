// Builds content/pools/element-{3,8,9}.json from the official pools in content/source/pools/.
// Run with: npm run pools
// Fails loudly if any element doesn't have exactly the expected questions, key topics and answers.
// Explanations already written in the JSON are kept; flags come from content/source/flags.json.
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { getDocument } from 'pdfjs-dist/legacy/build/pdf.mjs';
import { readWordText } from './word-doc.ts';
import elements from '../content/elements.json' with { type: 'json' };
import flags from '../content/source/flags.json' with { type: 'json' };

const root = new URL('../', import.meta.url);
const SOURCES: Record<number, string> = { 3: 'element-3.doc', 8: 'element-8.doc', 9: 'element-9.pdf' };

// Question labels misprinted in the official pools: "<label as printed>@<key topic heading>" -> correct id.
// Any other label that doesn't match its key topic heading stops the build.
const RELABEL: Record<string, string> = {
  '9-34D4@36': '9-36D4', // 4th Navtex question; the answer key lists it as 36D4
};

export type Question = {
  id: string;
  element: number;
  subelement: string;
  subelementTitle: string;
  keyTopic: number;
  keyTopicTitle: string;
  stem: string;
  choices: string[];
  answer: number;
  figure: string | null;
  explanation: string;
  flag: string | null;
};

/** One text line per paragraph (Word) or per printed row (PDF). */
async function sourceLines(file: string): Promise<string[]> {
  const data = readFileSync(new URL(`content/source/pools/${file}`, root));
  if (file.endsWith('.doc')) return readWordText(data).split('\n');

  const pdf = await getDocument({ data: new Uint8Array(data), verbosity: 0 }).promise;
  const lines: string[] = [];
  for (let n = 1; n <= pdf.numPages; n++) {
    const { items } = await (await pdf.getPage(n)).getTextContent();
    const rows: { y: number; parts: { x: number; s: string }[] }[] = [];
    for (const it of items) {
      if (!('str' in it) || !it.str) continue;
      const [x, y] = [it.transform[4], it.transform[5]];
      let row = rows.find((r) => Math.abs(r.y - y) <= 2);
      if (!row) rows.push((row = { y, parts: [] }));
      row.parts.push({ x, s: it.str });
    }
    rows.sort((a, b) => b.y - a.y);
    for (const r of rows) lines.push(r.parts.sort((a, b) => a.x - b.x).map((p) => p.s).join(' '));
  }
  return lines;
}

const clean = (s: string) => s.replace(/\s+/g, ' ').trim();

/**
 * Reads a choice letter, alone or followed by its text: "A.", "C,", "D", "A. text", "C.150 watts".
 * The pools drop some periods, so "A text" counts only when A is the next letter due.
 */
function choiceMarker(token: string | undefined, q: Question): { index: number; text: string } | null {
  const m = token?.match(/^([A-D])(?:([.,])\s*|\s+|$)(.*)$/);
  if (!m) return null;
  const index = 'ABCD'.indexOf(m[1]);
  if (!m[2] && m[3] && index !== q.choices.filter((c) => c !== undefined).length) return null;
  return { index, text: m[3] };
}

async function parseElement(el: (typeof elements)[number], previous: Map<string, string>, errors: string[]) {
  const lines = await sourceLines(SOURCES[el.element]);
  const questions: Question[] = [];
  const keys = new Map<string, number>();
  const declaredTopics = new Map<string, number>(); // subelement -> "N Key Topics" from its heading
  let subelement = '';
  let subelementTitle = '';
  let keyTopic = 0;
  let keyTopicTitle = '';
  let target: { q: Question; choice?: number } | null = null; // where continuation lines go

  for (const raw of lines) {
    const line = clean(raw);
    const tokens = raw.split('\t').map(clean).filter(Boolean); // the .doc pools tab-separate choice letters
    let m: RegExpMatchArray | null;
    if (!line) continue;

    if ((m = line.match(/^Subelement (?:\d-?)?([A-Z])\s*[-–]\s*(.+?)(?:\s*[:–-]\s*(\d+) Key Topics.*)?$/i))) {
      [subelement, subelementTitle] = [m[1], m[2]];
      if (m[3]) declaredTopics.set(subelement, Number(m[3]));
      target = null;
    } else if ((m = line.match(/^(\d+) Key Topics/i)) && !target) {
      declaredTopics.set(subelement, Number(m[1])); // heading continued on a second line
    } else if ((m = line.match(/^Key Topic (\d+)\s*[:–-]\s*(.+)$/i))) {
      [keyTopic, keyTopicTitle] = [Number(m[1]), m[2]];
      target = null;
    } else if ((m = line.match(/^Section-([A-Z]):\s*(.+?):\s*Key Topic-(\d+):\s*(.+?):?$/))) {
      [subelement, subelementTitle, keyTopic, keyTopicTitle] = [m[1], m[2], Number(m[3]), m[4]];
      target = null;
    } else if ((m = line.match(/^(?:Answer Key|Answers):(.*)$/i))) {
      for (const k of m[1].matchAll(/((?:\d-)?\d{1,3}[A-Z]\d):\s*([A-D])/g)) {
        const id = k[1].includes('-') ? k[1] : `${el.element}-${k[1]}`;
        if (keys.has(id)) errors.push(`${id}: listed twice in the answer key`);
        keys.set(id, 'ABCD'.indexOf(k[2]));
      }
      target = null;
    } else if ((m = line.match(/^(?:(\d)-)?(\d{1,3})([A-Z])(\d)(?:\s+|(?=[A-Z“"]))(.*)$/))) {
      if (m[1] && Number(m[1]) !== el.element) errors.push(`${line.slice(0, 40)}: question from another element`);
      let id = `${el.element}-${m[2]}${m[3]}${m[4]}`;
      if (Number(m[2]) !== keyTopic) {
        if (RELABEL[`${id}@${keyTopic}`]) id = RELABEL[`${id}@${keyTopic}`];
        else errors.push(`${id}: printed under the key topic ${keyTopic} heading`);
      }
      const q: Question = {
        id,
        element: el.element,
        subelement: id.match(/[A-Z]/)![0],
        subelementTitle,
        keyTopic,
        keyTopicTitle,
        stem: m[5],
        choices: [],
        answer: -1,
        figure: null,
        explanation: '',
        flag: null,
      };
      if (q.subelement !== subelement) errors.push(`${q.id}: found under subelement ${subelement}`);
      questions.push(q);
      target = { q };
    } else if (target && choiceMarker(tokens[0], target.q)) {
      // One or two choices per line: "A. text" or, in the .doc pools, "A.<tab>text<tab>C.<tab>text".
      // The token after a bare letter is always its text, even when that text is "C." (Inmarsat-C).
      let expectText = false;
      for (const token of tokens) {
        const marker: ReturnType<typeof choiceMarker> = expectText ? null : choiceMarker(token, target.q);
        if (marker) {
          if (target.q.choices[marker.index] !== undefined) errors.push(`${target.q.id}: choice ${'ABCD'[marker.index]} appears twice`);
          target.q.choices[marker.index] = marker.text;
          target.choice = marker.index;
          expectText = !marker.text;
        } else {
          target.q.choices[target.choice!] += ' ' + token;
          expectText = false;
        }
      }
    } else if (/^(FCC – Element-9 .*|- \d+ -)$/.test(line)) {
      // Element 9 page header and footer
    } else if (target) {
      if (target.choice === undefined) target.q.stem += ' ' + line;
      else target.q.choices[target.choice] += ' ' + line;
    } else if (!/^(FCC Commercial Element|End of|\[END OF)/i.test(line)) {
      errors.push(`Unrecognized line in element ${el.element}: "${line.slice(0, 80)}"`);
    }
  }

  for (const q of questions) {
    q.stem = clean(q.stem);
    q.choices = Array.from(q.choices, (c) => clean(c ?? '')); // a missing letter becomes '' and fails validation
    q.answer = keys.get(q.id) ?? -1;
    const fig = (q.stem + ' ' + q.choices.join(' ')).match(/Fig(?:ure|\.)\s*(\d+[A-Z]\d+)/);
    q.figure = fig ? fig[1] : null;
    q.explanation = previous.get(q.id) ?? '';
    q.flag = (flags as Record<string, string>)[q.id] ?? null;
  }
  return { questions, keys, declaredTopics };
}

function validate(el: (typeof elements)[number], parsed: Awaited<ReturnType<typeof parseElement>>, errors: string[]) {
  const { questions, keys, declaredTopics } = parsed;
  const ids = new Set<string>();
  for (const q of questions) {
    if (ids.has(q.id)) errors.push(`${q.id}: appears twice`);
    ids.add(q.id);
    if (q.choices.length !== 4) errors.push(`${q.id}: has ${q.choices.length} choices, expected 4`);
    if (q.choices.some((c) => !c)) errors.push(`${q.id}: has an empty choice`);
    if (!q.stem) errors.push(`${q.id}: has no question text`);
    if (q.answer < 0) errors.push(`${q.id}: has no answer in the pool's answer key`);
    if (!el.subelements.includes(q.subelement)) errors.push(`${q.id}: unknown subelement ${q.subelement}`);
    if (q.figure && !q.figure.startsWith(String(el.element))) errors.push(`${q.id}: refers to another element's figure ${q.figure}`);
  }
  for (const id of keys.keys()) if (!ids.has(id)) errors.push(`${id}: in the answer key but not in the pool`);

  if (questions.length !== el.questions) errors.push(`Element ${el.element}: ${questions.length} questions, expected ${el.questions}`);
  const topics = new Map<number, Question[]>();
  for (const q of questions) topics.set(q.keyTopic, [...(topics.get(q.keyTopic) ?? []), q]);
  if (topics.size !== el.keyTopics) errors.push(`Element ${el.element}: ${topics.size} key topics, expected ${el.keyTopics}`);
  for (let t = 1; t <= el.keyTopics; t++) {
    const qs = topics.get(t) ?? [];
    if (qs.length !== 6) errors.push(`Element ${el.element} key topic ${t}: ${qs.length} questions, expected 6`);
    if (new Set(qs.map((q) => q.subelement)).size > 1) errors.push(`Element ${el.element} key topic ${t}: spans several subelements`);
  }
  for (const [sub, declared] of declaredTopics) {
    const found = new Set(questions.filter((q) => q.subelement === sub).map((q) => q.keyTopic)).size;
    if (found !== declared) errors.push(`Element ${el.element} subelement ${sub}: heading says ${declared} key topics, found ${found}`);
  }
}

function printCounts(el: (typeof elements)[number], questions: Question[]) {
  console.log(`\nElement ${el.element}, ${el.name}: ${questions.length} questions`);
  let sub = '';
  for (let t = 1; t <= el.keyTopics; t++) {
    const qs = questions.filter((q) => q.keyTopic === t);
    if (qs[0] && qs[0].subelement !== sub) {
      sub = qs[0].subelement;
      console.log(`  Subelement ${sub}: ${qs[0].subelementTitle}`);
    }
    console.log(`    Key topic ${String(t).padStart(3)}: ${qs.length} questions  ${qs[0]?.keyTopicTitle ?? ''}`);
  }
}

const errors: string[] = [];
const missingFigures: string[] = [];
const outputs: [URL, Question[]][] = [];
for (const el of elements) {
  const out = new URL(`content/pools/element-${el.element}.json`, root);
  const previous = new Map<string, string>();
  if (existsSync(out)) for (const q of JSON.parse(readFileSync(out, 'utf8')) as Question[]) if (q.explanation) previous.set(q.id, q.explanation);

  const parsed = await parseElement(el, previous, errors);
  validate(el, parsed, errors);
  printCounts(el, parsed.questions);
  outputs.push([out, parsed.questions]);
  for (const fig of new Set(parsed.questions.map((q) => q.figure).filter((f) => f !== null))) {
    if (!existsSync(new URL(`content/figures/${fig}.png`, root))) missingFigures.push(fig);
  }
}

const allIds = new Set(outputs.flatMap(([, qs]) => qs.map((q) => q.id)));
for (const id of Object.keys(flags)) if (!allIds.has(id)) errors.push(`flags.json: ${id} is not a question in any pool`);

if (missingFigures.length) console.log(`\nMissing figures (the app will point to the official pool): ${missingFigures.join(', ')}`);
if (errors.length) {
  console.error(`\nFAILED with ${errors.length} problem(s); nothing written:`);
  for (const e of errors) console.error(`  - ${e}`);
  process.exit(1);
}
mkdirSync(new URL('content/pools/', root), { recursive: true });
for (const [out, questions] of outputs) writeFileSync(out, JSON.stringify(questions, null, 2) + '\n');
console.log(`\nOK: all pools valid. Wrote ${outputs.map(([out]) => out.pathname.split('/').pop()).join(', ')}.`);
