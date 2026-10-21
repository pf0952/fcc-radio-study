// Checks content/lessons/*.json against content/source/lesson-briefs.md:
//   - every key topic in a lesson's brief appears in at least one scene;
//   - every number shown or spoken in a scene appears in that lesson's brief;
//   - a checkpoint follows every 3-4 scenes, on the key topics just covered;
//   - each scene's template has the parameters it needs.
// Run with: npm run lessons          (checks the lessons that exist)
//           npm run lessons -- --all  (also fails if any of the 30 lessons is missing)
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { devices } from '../src/lessons/devices.ts';
import type { Lesson, Scene } from '../src/lib/types.ts';

const root = new URL('../', import.meta.url);
const requireAll = process.argv.includes('--all');

// Briefs: "## Lesson 9-D: Title" sections, with "### Key topic N:" headings.
const briefText = readFileSync(new URL('content/source/lesson-briefs.md', root), 'utf8');
const briefs = new Map<string, { topics: number[]; numbers: Set<string> }>();
for (const section of briefText.split(/^## Lesson /m).slice(1)) {
  const id = section.slice(0, section.indexOf(':'));
  const topics = [...section.matchAll(/^### Key topic (\d+):/gm)].map((m) => Number(m[1]));
  briefs.set(id, { topics, numbers: new Set(numbersIn(section)) });
}

/** Numbers in text, normalized ("2,000" -> "2000"; markup ignored). */
function numbersIn(text: string): string[] {
  return (text.replace(/<\/?su[bp]>/g, '').match(/\d+(?:[.,]\d+)*/g) ?? []).flatMap((n) =>
    /^\d{1,3}(,\d{3})+$/.test(n) ? [n.replace(/,/g, '')] : n.split(','),
  );
}

/** Every string inside a value (numbers in params are drawing geometry and are not checked). */
function strings(value: unknown): string[] {
  if (typeof value === 'string') return [value];
  if (Array.isArray(value)) return value.flatMap(strings);
  if (value && typeof value === 'object') return Object.values(value).flatMap(strings);
  return [];
}

const TEMPLATES: Record<string, (p: Record<string, any>) => string | null> = {
  'title-card': (p) => (p.title ? null : 'needs title'),
  'key-facts': (p) => (p.title && Array.isArray(p.items) && p.items.length ? null : 'needs title and items'),
  formula: (p) => (p.title && p.formula && Array.isArray(p.steps) && p.answer ? null : 'needs title, formula, steps and answer'),
  'comparison-table': (p) =>
    !p.title || !Array.isArray(p.columns) || !Array.isArray(p.rows)
      ? 'needs title, columns and rows'
      : p.rows.some((r: unknown[]) => r.length !== p.columns.length)
        ? 'every row needs one cell per column'
        : null,
  timeline: (p) => (p.title && Array.isArray(p.badges) && p.badges.every((b: any) => b.label && b.value) ? null : 'needs title and badges with label and value'),
  'band-strip': (p) =>
    p.title && typeof p.min === 'number' && typeof p.max === 'number' && Array.isArray(p.marks) && p.marks.every((m: any) => typeof m.at === 'number' && m.label)
      ? null
      : 'needs title, numeric min/max and marks with at and label',
  'block-diagram': (p) => {
    if (!p.title || !Array.isArray(p.blocks) || !Array.isArray(p.links)) return 'needs title, blocks and links';
    const ids = new Set(p.blocks.map((b: any) => b.id));
    const bad = p.links.find((l: any) => !ids.has(l.from) || !ids.has(l.to));
    return bad ? `link ${bad.from} -> ${bad.to} names a missing block` : null;
  },
  waveform: (p) =>
    p.title && ['sine', 'square', 'sawtooth', 'pulse', 'am', 'fm', 'ssb', 'sart-sweep', 'repeat'].includes(p.kind) ? null : 'needs title and a known kind',
  'radar-ppi': (p) => (p.title && typeof p.rangeNm === 'number' ? null : 'needs title and rangeNm'),
  'equipment-card': (p) => {
    if (!p.title || !Array.isArray(p.callouts)) return 'needs title and callouts';
    if (p.device) {
      const d = devices[p.device];
      if (!d) return `unknown device "${p.device}"`;
      const bad = p.callouts.find((c: any) => c.at && !d.anchors[c.at]);
      return bad ? `device "${p.device}" has no anchor "${bad.at}"` : null;
    }
    if (p.figure) return existsSync(new URL(`content/figures/${p.figure}.png`, root)) ? null : `figure ${p.figure} not found`;
    return 'needs a device or a figure';
  },
};

const problems: string[] = [];
const files = readdirSync(new URL('content/lessons/', root)).filter((f) => f.endsWith('.json'));
const lessons = files.map((f) => JSON.parse(readFileSync(new URL(`content/lessons/${f}`, root), 'utf8')) as Lesson);

for (const [i, lesson] of lessons.entries()) {
  const p = (msg: string) => problems.push(`${lesson.id}: ${msg}`);
  if (files[i] !== `${lesson.id}.json`) p(`file name ${files[i]} doesn't match id`);
  const brief = briefs.get(lesson.id);
  if (!brief) {
    p('no brief with this id');
    continue;
  }
  if (JSON.stringify(lesson.keyTopics) !== JSON.stringify(brief.topics)) p(`keyTopics ${JSON.stringify(lesson.keyTopics)} differ from the brief's ${JSON.stringify(brief.topics)}`);

  // Key topics covered by scenes.
  for (const t of brief.topics) if (!lesson.scenes.some((s) => s.keyTopic === t)) p(`key topic ${t} has no scene`);

  // Scenes: ids, templates, numbers.
  const ids = new Set<string>();
  let checkedNumbers = 0;
  for (const s of lesson.scenes as Scene[]) {
    if (ids.has(s.id)) p(`scene id ${s.id} used twice`);
    ids.add(s.id);
    if (!brief.topics.includes(s.keyTopic)) p(`${s.id}: key topic ${s.keyTopic} is not in this lesson`);
    const check = TEMPLATES[s.template];
    if (!check) p(`${s.id}: unknown template "${s.template}"`);
    else if (check(s.params)) p(`${s.id} (${s.template}): ${check(s.params)}`);
    if (!s.narration?.trim()) p(`${s.id}: no narration`);
    if (!Array.isArray(s.onScreen) || !s.onScreen.length) p(`${s.id}: no onScreen labels`);
    for (const text of [s.narration, ...s.onScreen, ...strings(s.params)]) {
      for (const n of numbersIn(text ?? '')) {
        checkedNumbers++;
        if (!brief.numbers.has(n)) p(`${s.id}: number ${n} is not in the brief ("${text.slice(0, 70)}")`);
      }
    }
  }

  // Checkpoints: one after every 3-4 scenes, on the key topics just covered.
  if (!lesson.checkpoints.length) p('has no checkpoint');
  const order = lesson.scenes.map((s) => s.id);
  let previous = 0;
  for (const c of lesson.checkpoints) {
    const at = order.indexOf(c.after) + 1;
    if (!at) {
      p(`checkpoint after unknown scene ${c.after}`);
      continue;
    }
    if (at - previous < 3 || at - previous > 4) p(`checkpoint after ${c.after} comes ${at - previous} scenes after the previous one (should be 3-4)`);
    const covered = new Set(lesson.scenes.slice(previous, at).map((s) => s.keyTopic));
    if (!c.keyTopics.length || c.keyTopics.some((t) => !covered.has(t))) p(`checkpoint after ${c.after} asks about key topics ${c.keyTopics} not covered since the last checkpoint`);
    previous = at;
  }
  if (lesson.scenes.length - previous > 4) p(`the last ${lesson.scenes.length - previous} scenes have no checkpoint`);

  console.log(
    `${lesson.id}: ${lesson.scenes.length} scenes, key topics ${brief.topics.join(', ')} all in scenes: ${brief.topics.every((t) => lesson.scenes.some((s) => s.keyTopic === t)) ? 'yes' : 'NO'}, ` +
      `${lesson.checkpoints.length} checkpoints, ${checkedNumbers} numbers checked against the brief`,
  );
}

const missing = [...briefs.keys()].filter((id) => !lessons.some((l) => l.id === id));
if (missing.length) {
  const msg = `${missing.length} of ${briefs.size} lessons not written yet: ${missing.join(', ')}`;
  if (requireAll) problems.push(msg);
  else console.log(`\n(${msg})`);
}

if (problems.length) {
  console.error(`\nFAILED with ${problems.length} problem(s):`);
  for (const pr of problems) console.error(`  - ${pr}`);
  process.exit(1);
}
console.log('\nOK: every key topic has a scene, every number matches its brief, and checkpoints follow every 3-4 scenes.');
