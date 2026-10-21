// Minimal reader for legacy Word 97-2003 (.doc) files, enough for the FCC pools.
// Returns the main document text, one paragraph per line, with Insert > Symbol characters and
// Symbol-font text turned into Unicode, and superscript/subscript runs wrapped in <sup>/<sub>.
// Format reference: Microsoft [MS-DOC].
import CFB from 'cfb';

// Adobe Symbol font encoding for 0x20-0x7E, then the upper range we may meet.
const SYMBOL_LOW = ' !∀#∃%&∋()∗+,−./0123456789:;<=>?≅ΑΒΧΔΕΦΓΗΙϑΚΛΜΝΟΠΘΡΣΤΥςΩΞΨΖ[∴]⊥_‾αβχδεφγηιϕκλμνοπθρστυϖωξψζ{|}∼';
const SYMBOL_HIGH: Record<number, string> = {
  0xa2: '′', 0xa3: '≤', 0xa5: '∞', 0xab: '↔', 0xac: '←', 0xad: '↑', 0xae: '→', 0xaf: '↓',
  0xb0: '°', 0xb1: '±', 0xb2: '″', 0xb3: '≥', 0xb4: '×', 0xb5: '∝', 0xb6: '∂', 0xb7: '•',
  0xb8: '÷', 0xb9: '≠', 0xba: '≡', 0xbb: '≈', 0xbc: '…', 0xc6: '∅', 0xd0: '∠', 0xd6: '√',
  0xd7: '⋅', 0xe5: '∑', 0xf2: '∫',
};

function symbolChar(code: number): string {
  const c = code & 0xff; // Insert > Symbol stores 0xF0xx private-use codes
  const ch = c >= 0x20 && c <= 0x7e ? [...SYMBOL_LOW][c - 0x20] : SYMBOL_HIGH[c];
  if (!ch) throw new Error(`No Unicode mapping for Symbol font character 0x${c.toString(16)}`);
  return ch;
}

const SPRM_SYMBOL = 0x6a09; // ftc (2 bytes) + character code (2 bytes)
const SPRM_ISS = 0x2a48; // 1 = superscript, 2 = subscript
const SPRM_FONT = 0x4a4f; // font index for ASCII text
const SPRM_DELETED = 0x0800; // tracked-change deletion

type CharProps = { symbol?: number; iss: number; font?: number; deleted: boolean };

/** Splits a grpprl (list of property modifiers) into the properties we care about. */
function readProps(grpprl: Buffer): CharProps {
  const props: CharProps = { iss: 0, deleted: false };
  let i = 0;
  while (i + 2 <= grpprl.length) {
    const sprm = grpprl.readUInt16LE(i);
    const spra = sprm >> 13;
    const size = [1, 1, 2, 4, 2, 2, grpprl[i + 2] + 1, 3][spra];
    const at = i + 2;
    if (sprm === SPRM_SYMBOL) props.symbol = grpprl.readUInt16LE(at + 2) | (grpprl.readUInt16LE(at) << 16);
    else if (sprm === SPRM_ISS) props.iss = grpprl[at];
    else if (sprm === SPRM_FONT) props.font = grpprl.readUInt16LE(at);
    else if (sprm === SPRM_DELETED) props.deleted = grpprl[at] === 1;
    i = at + size;
  }
  return props;
}

// Symbol, Euclid Symbol, MT Symbol... all share the Symbol encoding.
const isSymbolFont = (name: string | undefined) => !!name && /\bSymbol$/.test(name);

export function readWordText(file: Buffer): string {
  const cfb = CFB.read(file, { type: 'buffer' });
  const stream = (name: string) => {
    const entry = CFB.find(cfb, name);
    if (!entry) throw new Error(`Missing stream ${name}; is this a Word 97-2003 .doc file?`);
    return Buffer.from(entry.content as Uint8Array);
  };
  const wd = stream('WordDocument');
  const table = stream(wd.readUInt16LE(0x0a) & 0x0200 ? '1Table' : '0Table');

  // File Information Block: locate ccpText and the (fc, lcb) pairs we need.
  const csw = wd.readUInt16LE(32);
  const lwStart = 34 + csw * 2 + 2;
  const cslw = wd.readUInt16LE(34 + csw * 2);
  const fcLcbStart = lwStart + cslw * 4 + 2;
  const ccpText = wd.readInt32LE(lwStart + 12);
  const fcLcb = (index: number) => [wd.readUInt32LE(fcLcbStart + index * 8), wd.readUInt32LE(fcLcbStart + index * 8 + 4)];

  // Font table: index -> name.
  const [fcFfn] = fcLcb(15);
  const fonts: string[] = [];
  for (let n = table.readUInt16LE(fcFfn), p = fcFfn + 4; n > 0; n--) {
    const len = table[p] + 1;
    const name = table.subarray(p + 40, p + len).toString('utf16le');
    fonts.push(name.split('\0')[0]);
    p += len;
  }

  // Character formatting runs, keyed by file offset (FC).
  const [fcBte, lcbBte] = fcLcb(12);
  const nBte = (lcbBte - 4) / 8;
  const runs: { start: number; end: number; props: CharProps }[] = [];
  for (let b = 0; b < nBte; b++) {
    const pn = table.readUInt32LE(fcBte + (nBte + 1) * 4 + b * 4) & 0x3fffff;
    const page = wd.subarray(pn * 512, pn * 512 + 512);
    const crun = page[511];
    for (let r = 0; r < crun; r++) {
      const off = page[(crun + 1) * 4 + r] * 2;
      const grpprl = off ? page.subarray(off + 1, off + 1 + page[off]) : Buffer.alloc(0);
      runs.push({ start: page.readUInt32LE(r * 4), end: page.readUInt32LE(r * 4 + 4), props: readProps(grpprl) });
    }
  }
  runs.sort((a, b) => a.start - b.start);
  const propsAt = (fc: number): CharProps => {
    let lo = 0;
    let hi = runs.length - 1;
    while (lo <= hi) {
      const mid = (lo + hi) >> 1;
      if (fc < runs[mid].start) hi = mid - 1;
      else if (fc >= runs[mid].end) lo = mid + 1;
      else return runs[mid].props;
    }
    return { iss: 0, deleted: false };
  };

  // Piece table: where each range of character positions lives in the WordDocument stream.
  const [fcClx] = fcLcb(33);
  let p = fcClx;
  while (table[p] === 0x01) p += 3 + table.readUInt16LE(p + 1);
  if (table[p] !== 0x02) throw new Error('Unexpected piece table format');
  const nPieces = (table.readUInt32LE(p + 1) - 4) / 12;
  const cps = p + 5;
  const pcds = cps + (nPieces + 1) * 4;
  const cp1252 = new TextDecoder('windows-1252');

  let out = '';
  let iss = 0;
  const fieldStack: boolean[] = []; // true while inside a field's code (hidden) part
  const setIss = (next: number) => {
    if (next === iss) return;
    if (iss) out += iss === 1 ? '</sup>' : '</sub>';
    if (next === 1 || next === 2) out += next === 1 ? '<sup>' : '<sub>';
    iss = next === 1 || next === 2 ? next : 0;
  };

  for (let i = 0; i < nPieces; i++) {
    const cpStart = table.readUInt32LE(cps + i * 4);
    const cpEnd = Math.min(table.readUInt32LE(cps + i * 4 + 4), ccpText);
    const raw = table.readUInt32LE(pcds + i * 8 + 2);
    const compressed = (raw & 0x40000000) !== 0;
    const base = compressed ? (raw & 0x3fffffff) / 2 : raw & 0x3fffffff;
    for (let cp = cpStart; cp < cpEnd; cp++) {
      const fc = compressed ? base + (cp - cpStart) : base + (cp - cpStart) * 2;
      const code = compressed ? cp1252.decode(wd.subarray(fc, fc + 1)).charCodeAt(0) : wd.readUInt16LE(fc);
      const props = propsAt(fc);
      if (props.deleted) continue;
      if (code === 0x13) { fieldStack.push(true); continue; }
      if (code === 0x14) { if (fieldStack.length) fieldStack[fieldStack.length - 1] = false; continue; }
      if (code === 0x15) { fieldStack.pop(); continue; }
      if (fieldStack.includes(true)) continue;

      let ch: string;
      if (props.symbol !== undefined) {
        const symbolFont = fonts[props.symbol >>> 16];
        const symbolCode = props.symbol & 0xffff;
        if (isSymbolFont(symbolFont)) ch = symbolChar(symbolCode);
        else if (symbolCode < 0xf000) ch = String.fromCharCode(symbolCode); // a Unicode font's own character
        else throw new Error(`Inserted symbol 0x${symbolCode.toString(16)} from unsupported font ${symbolFont}`);
      } else if (props.font !== undefined && isSymbolFont(fonts[props.font]) && code >= 0x20) ch = symbolChar(code);
      else if (code === 0x0d || code === 0x07 || code === 0x0c) ch = '\n';
      else if (code >= 0xf020 && code <= 0xf0ff) ch = symbolChar(code); // Symbol-font character stored as text
      else if (code === 0x0b) ch = ' ';
      else if (code === 0x1e) ch = '-';
      else if (code === 0xa0) ch = ' ';
      else if (code < 0x09 || code === 0x1f) continue; // pictures, footnote marks, soft hyphens
      else ch = String.fromCharCode(code);

      if (ch === '\n') {
        setIss(0);
        out += ch;
      } else {
        setIss(ch.trim() ? props.iss : iss); // spaces don't open or close a sub/superscript run
        out += ch;
      }
    }
  }
  setIss(0);
  // Keep spaces outside the tags: "X<sub>L </sub>=" -> "X<sub>L</sub> =".
  return out.replace(/(\s+)<\/(sub|sup)>/g, '</$2>$1').replace(/<(sub|sup)>(\s+)/g, '$2<$1>').replace(/<(sub|sup)><\/\1>/g, '');
}
