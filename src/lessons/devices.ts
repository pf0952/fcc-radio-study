// Simple labeled-illustration drawings for equipment cards, on an 800 x 900 canvas.
// Each device names its anchor points so lesson files can attach callouts by name.

export type Device = { svg: string; anchors: Record<string, [number, number]> };

const C = {
  dark: '#1d2b3a',
  panel: '#24405e',
  line: '#4a6b8a',
  light: '#eaf1f8',
  steel: '#9db2c8',
  amber: '#f4b942',
  orange: '#f28c28',
  teal: '#4fd1c5',
  coral: '#ff7a6b',
};

export const devices: Record<string, Device> = {
  epirb: {
    svg: `
      <rect x="230" y="180" width="340" height="660" rx="30" fill="${C.panel}" stroke="${C.line}" stroke-width="6"/>
      <rect x="250" y="470" width="46" height="96" rx="8" fill="${C.steel}"/>
      <text x="273" y="510" font-size="30" font-weight="700" text-anchor="middle" fill="${C.dark}">N</text>
      <text x="273" y="552" font-size="30" font-weight="700" text-anchor="middle" fill="${C.dark}">S</text>
      <line x1="400" y1="232" x2="400" y2="70" stroke="${C.steel}" stroke-width="12" stroke-linecap="round"/>
      <circle cx="400" cy="66" r="12" fill="${C.steel}"/>
      <path d="M330 300 Q330 228 400 228 Q470 228 470 300 Z" fill="${C.light}" opacity="0.92"/>
      <path d="M360 270 L440 270" stroke="${C.amber}" stroke-width="6" stroke-linecap="round" opacity="0.8"/>
      <rect x="300" y="296" width="200" height="450" rx="40" fill="${C.amber}"/>
      <rect x="300" y="420" width="200" height="64" fill="${C.dark}"/>
      <text x="400" y="465" font-size="40" font-weight="800" text-anchor="middle" fill="${C.amber}">406</text>
      <circle cx="400" cy="570" r="20" fill="${C.coral}" stroke="${C.dark}" stroke-width="4"/>
      <rect x="320" y="770" width="160" height="66" rx="16" fill="${C.teal}" stroke="${C.dark}" stroke-width="4"/>
      <text x="400" y="814" font-size="28" font-weight="700" text-anchor="middle" fill="${C.dark}">HRU</text>`,
    anchors: { antenna: [400, 120], strobe: [452, 268], band: [500, 452], beacon: [500, 660], button: [420, 570], magnet: [296, 518], release: [480, 803], bracket: [540, 300] },
  },
  sart: {
    svg: `
      <rect x="385" y="560" width="30" height="300" rx="10" fill="${C.steel}"/>
      <path d="M320 262 Q320 186 400 186 Q480 186 480 262 Z" fill="${C.amber}"/>
      <rect x="300" y="258" width="200" height="340" rx="40" fill="${C.orange}"/>
      <rect x="300" y="380" width="200" height="64" fill="${C.dark}"/>
      <text x="400" y="424" font-size="38" font-weight="800" text-anchor="middle" fill="${C.orange}">SART</text>
      <rect x="368" y="498" width="64" height="42" rx="10" fill="${C.dark}"/>
      <rect x="388" y="506" width="24" height="26" rx="4" fill="${C.coral}"/>
      <path d="M500 330 C590 360 600 470 520 520" fill="none" stroke="${C.light}" stroke-width="6" stroke-dasharray="12 10"/>`,
    anchors: { antenna: [400, 214], body: [400, 320], band: [400, 412], switch: [400, 519], pole: [400, 760], lanyard: [575, 430] },
  },
  'vhf-handheld': {
    svg: `
      <rect x="300" y="70" width="46" height="215" rx="23" fill="${C.dark}" stroke="${C.line}" stroke-width="5"/>
      <rect x="292" y="248" width="62" height="30" rx="8" fill="${C.steel}"/>
      <rect x="258" y="262" width="310" height="580" rx="54" fill="${C.amber}" stroke="${C.dark}" stroke-width="6"/>
      <rect x="296" y="318" width="234" height="140" rx="14" fill="${C.dark}"/>
      <rect x="308" y="330" width="210" height="116" rx="8" fill="${C.teal}" opacity="0.9"/>
      <text x="413" y="414" font-size="72" font-weight="800" text-anchor="middle" fill="${C.dark}">16</text>
      <g stroke="${C.dark}" stroke-width="6" stroke-linecap="round">
        <line x1="330" y1="490" x2="496" y2="490"/><line x1="330" y1="514" x2="496" y2="514"/><line x1="330" y1="538" x2="496" y2="538"/>
      </g>
      <g fill="${C.dark}">
        <rect x="312" y="580" width="56" height="40" rx="10"/><rect x="385" y="580" width="56" height="40" rx="10"/><rect x="458" y="580" width="56" height="40" rx="10"/>
        <rect x="312" y="636" width="56" height="40" rx="10"/><rect x="385" y="636" width="56" height="40" rx="10"/><rect x="458" y="636" width="56" height="40" rx="10"/>
        <rect x="312" y="692" width="56" height="40" rx="10"/><rect x="385" y="692" width="56" height="40" rx="10"/><rect x="458" y="692" width="56" height="40" rx="10"/>
      </g>
      <rect x="236" y="380" width="26" height="120" rx="9" fill="${C.coral}" stroke="${C.dark}" stroke-width="4"/>
      <path d="M600 610 C600 580 640 545 640 545 C640 545 680 580 680 610 A40 40 0 0 1 600 610 Z" fill="${C.teal}" opacity="0.85"/>`,
    anchors: { antenna: [346, 150], display: [530, 388], speaker: [496, 514], keypad: [514, 656], ptt: [249, 440], body: [568, 790], water: [680, 610] },
  },
  navtex: {
    svg: `
      <rect x="60" y="300" width="450" height="330" rx="26" fill="${C.panel}" stroke="${C.line}" stroke-width="6"/>
      <rect x="100" y="340" width="370" height="176" rx="12" fill="#0b1a2a"/>
      <g stroke="${C.teal}" stroke-width="10" stroke-linecap="round" opacity="0.85">
        <line x1="128" y1="378" x2="420" y2="378"/><line x1="128" y1="414" x2="380" y2="414"/><line x1="128" y1="450" x2="440" y2="450"/><line x1="128" y1="486" x2="330" y2="486"/>
      </g>
      <g fill="${C.steel}">
        <rect x="104" y="548" width="58" height="40" rx="10"/><rect x="178" y="548" width="58" height="40" rx="10"/><rect x="252" y="548" width="58" height="40" rx="10"/>
        <rect x="326" y="548" width="58" height="40" rx="10"/><rect x="400" y="548" width="58" height="40" rx="10"/>
      </g>
      <line x1="660" y1="560" x2="660" y2="110" stroke="${C.steel}" stroke-width="14" stroke-linecap="round"/>
      <circle cx="660" cy="104" r="14" fill="${C.steel}"/>
      <rect x="606" y="552" width="108" height="96" rx="14" fill="${C.amber}" stroke="${C.dark}" stroke-width="5"/>
      <text x="660" y="611" font-size="30" font-weight="800" text-anchor="middle" fill="${C.dark}">AMP</text>
      <path d="M660 648 L660 770 L285 770 L285 630" fill="none" stroke="${C.dark}" stroke-width="16"/>
      <path d="M660 648 L660 770 L285 770 L285 630" fill="none" stroke="${C.steel}" stroke-width="5" stroke-dasharray="18 12"/>`,
    anchors: { screen: [470, 428], buttons: [458, 568], antenna: [660, 200], amplifier: [714, 600], coax: [470, 770], receiver: [510, 330] },
  },
};
