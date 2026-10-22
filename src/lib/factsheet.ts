import type { Lesson } from './types.ts';

export type SheetFormula = { title: string; formula: string; example: string[] };
export type SheetFacts = { title: string; facts: { text: string; note?: string }[] };
export type SheetSection = { lesson: string; title: string; formulas: SheetFormula[]; numbers: SheetFacts[] };

type FormulaParams = { title: string; formula: string; steps: string[]; answer: string };
type BandParams = { title: string; marks: { label: string; note?: string; tone?: string }[] };
type TimelineParams = { title: string; badges: { label: string; value: string; note?: string }[] };

/**
 * The formula and fact sheet for one element, built from its lessons: every formula scene (with its
 * worked example) and every frequency band and interval scene, by subelement. A formula shown again
 * in a later scene is listed once. Muted band marks (wrong or unrelated frequencies) are left out.
 */
export function factSheet(lessons: readonly Lesson[]): SheetSection[] {
  const seen = new Set<string>();
  return lessons.map((lesson) => {
    const section: SheetSection = { lesson: lesson.id, title: lesson.title, formulas: [], numbers: [] };
    for (const scene of lesson.scenes) {
      if (scene.template === 'formula') {
        const p = scene.params as FormulaParams;
        if (seen.has(p.formula)) continue;
        seen.add(p.formula);
        section.formulas.push({ title: p.title, formula: p.formula, example: [...p.steps, p.answer] });
      } else if (scene.template === 'band-strip') {
        const p = scene.params as BandParams;
        const facts = p.marks.filter((m) => m.tone !== 'muted').map((m) => ({ text: m.label, note: m.note }));
        if (facts.length) section.numbers.push({ title: p.title, facts });
      } else if (scene.template === 'timeline') {
        const p = scene.params as TimelineParams;
        section.numbers.push({ title: p.title, facts: p.badges.map((b) => ({ text: `${b.label}: ${b.value}`, note: b.note })) });
      }
    }
    return section;
  });
}
