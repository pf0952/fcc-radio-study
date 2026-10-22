/**
 * The study calculator: evaluates expressions like "1 / 2pi 500k 0.001u" without eval().
 * + - * / ^ and parentheses, SI prefixes right after a number (p n u µ m k M G), pi, ans (the previous
 * result), and sqrt log ln exp abs sin cos tan asin acos atan (angles in degrees).
 */
const PREFIX: Record<string, number> = { p: 1e-12, n: 1e-9, u: 1e-6, µ: 1e-6, μ: 1e-6, m: 1e-3, k: 1e3, M: 1e6, G: 1e9 };
const DEG = Math.PI / 180;
const FUNCTIONS: Record<string, (x: number) => number> = {
  sqrt: Math.sqrt,
  log: Math.log10,
  ln: Math.log,
  exp: Math.exp,
  abs: Math.abs,
  sin: (x) => Math.sin(x * DEG),
  cos: (x) => Math.cos(x * DEG),
  tan: (x) => Math.tan(x * DEG),
  asin: (x) => Math.asin(x) / DEG,
  acos: (x) => Math.acos(x) / DEG,
  atan: (x) => Math.atan(x) / DEG,
};
const SYMBOLS: Record<string, string> = { '×': '*', '·': '*', '÷': '/', '−': '-', '√': 'sqrt', π: 'pi' };

type Token = { num: number } | { name: string } | { op: string };

function tokenize(source: string): Token[] {
  const s = source.replace(/,/g, '').replace(/\*\*/g, '^');
  const tokens: Token[] = [];
  let i = 0;
  while (i < s.length) {
    const rest = s.slice(i);
    const num = /^(\d+\.?\d*|\.\d+)(e[+-]?\d+)?/i.exec(rest);
    const name = /^[a-zA-Zµμ]+/.exec(rest);
    const c = SYMBOLS[s[i]] ?? s[i];
    if (/\s/.test(c)) i++;
    else if (num) {
      let value = Number(num[0]);
      i += num[0].length;
      // An SI prefix straight after the number (4.7k, 100u), unless it begins a word (2pi).
      if (s[i] in PREFIX && !/[a-zA-Zµμ]/.test(s[i + 1] ?? '')) value *= PREFIX[s[i++]];
      tokens.push({ num: value });
    } else if (c === 'sqrt' || c === 'pi') {
      tokens.push({ name: c });
      i++;
    } else if (name) {
      tokens.push({ name: name[0] });
      i += name[0].length;
    } else if ('+-*/^()'.includes(c)) {
      tokens.push({ op: c });
      i++;
    } else throw new Error(`"${s[i]}" isn't something the calculator understands.`);
  }
  return tokens;
}

/** Evaluates an expression; throws an Error with a message for the user when it can't. */
export function evaluate(source: string, ans: number | null = null): number {
  const tokens = tokenize(source);
  if (!tokens.length) throw new Error('Type an expression, for example 2 * pi * 1k * 10m.');
  let pos = 0;
  const peek = () => tokens[pos];
  const isOp = (t: Token | undefined, ops: string) => !!t && 'op' in t && ops.includes(t.op);
  const startsValue = (t: Token | undefined) => !!t && ('num' in t || 'name' in t || (t as { op: string }).op === '(');

  function expression(): number {
    let value = term();
    while (isOp(peek(), '+-')) value = (tokens[pos++] as { op: string }).op === '+' ? value + term() : value - term();
    return value;
  }
  function term(): number {
    let value = product();
    while (isOp(peek(), '*/')) value = (tokens[pos++] as { op: string }).op === '*' ? value * product() : value / product();
    return value;
  }
  /** Values written side by side multiply first, as in formulas: 1/2pi f C is 1 / (2 × pi × f × C). */
  function product(): number {
    let value = unary();
    while (startsValue(peek())) value *= unary();
    return value;
  }
  function unary(): number {
    if (isOp(peek(), '-')) return pos++, -unary();
    if (isOp(peek(), '+')) return pos++, unary();
    const base = primary();
    return isOp(peek(), '^') ? (pos++, base ** unary()) : base;
  }
  function primary(): number {
    const t = tokens[pos++];
    if (!t) throw new Error('The expression ends too soon.');
    if ('num' in t) return t.num;
    if ('op' in t) {
      if (t.op !== '(') throw new Error(`Unexpected "${t.op}".`);
      const value = expression();
      if (!isOp(tokens[pos++], ')')) throw new Error('A closing parenthesis is missing.');
      return value;
    }
    const name = t.name.toLowerCase();
    if (name === 'pi') return Math.PI;
    if (name === 'ans') {
      if (ans === null) throw new Error('There is no previous answer yet.');
      return ans;
    }
    if (FUNCTIONS[name]) return FUNCTIONS[name](primary());
    throw new Error(`Unknown name "${t.name}".`);
  }

  const value = expression();
  if (pos < tokens.length) throw new Error('Unexpected text after the expression.');
  if (!Number.isFinite(value)) throw new Error('The result is undefined (division by zero?).');
  return value;
}

/** A result for display: up to 10 significant digits, exponent form for very large or small values. */
export function formatResult(x: number): string {
  const abs = Math.abs(x);
  if (x !== 0 && (abs >= 1e9 || abs < 1e-4)) return x.toExponential(6).replace(/\.?0+e/, 'e');
  return String(Number(x.toPrecision(10)));
}

const PREFIX_NAMES: Record<number, string> = { [-12]: 'p', [-9]: 'n', [-6]: 'µ', [-3]: 'm', 3: 'k', 6: 'M', 9: 'G' };

/** The same value with an SI prefix (0.000047 → "47 µ"), or null when no prefix applies. */
export function withPrefix(x: number): string | null {
  if (x === 0) return null;
  const exp = Math.floor(Math.log10(Math.abs(x)) / 3) * 3;
  return PREFIX_NAMES[exp] ? `${Number((x / 10 ** exp).toPrecision(6))} ${PREFIX_NAMES[exp]}` : null;
}
