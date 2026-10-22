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
    anchors: { antenna: [470, 236], body: [500, 320], band: [500, 412], switch: [432, 519], pole: [415, 760], lanyard: [575, 430] },
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
  transceiver: {
    svg: `
      <rect x="80" y="250" width="640" height="400" rx="28" fill="${C.panel}" stroke="${C.line}" stroke-width="6"/>
      <rect x="120" y="292" width="330" height="150" rx="12" fill="#0b1a2a"/>
      <g stroke="${C.teal}" stroke-width="10" stroke-linecap="round" opacity="0.85">
        <line x1="148" y1="330" x2="330" y2="330"/><line x1="148" y1="366" x2="420" y2="366"/><line x1="148" y1="402" x2="290" y2="402"/>
      </g>
      <g fill="${C.dark}" stroke="${C.steel}" stroke-width="5">
        <circle cx="530" cy="340" r="38"/><circle cx="640" cy="340" r="38"/>
      </g>
      <g stroke="${C.light}" stroke-width="6" stroke-linecap="round"><line x1="530" y1="340" x2="530" y2="310"/><line x1="640" y1="340" x2="662" y2="318"/></g>
      <g fill="${C.steel}">
        <rect x="120" y="480" width="70" height="40" rx="9"/><rect x="205" y="480" width="70" height="40" rx="9"/><rect x="290" y="480" width="70" height="40" rx="9"/><rect x="375" y="480" width="70" height="40" rx="9"/>
        <rect x="120" y="540" width="70" height="40" rx="9"/><rect x="205" y="540" width="70" height="40" rx="9"/><rect x="290" y="540" width="70" height="40" rx="9"/><rect x="375" y="540" width="70" height="40" rx="9"/>
      </g>
      <g stroke="${C.dark}" stroke-width="6" stroke-linecap="round"><line x1="500" y1="420" x2="690" y2="420"/><line x1="500" y1="444" x2="690" y2="444"/><line x1="500" y1="468" x2="690" y2="468"/></g>
      <rect x="560" y="500" width="130" height="110" rx="12" fill="${C.coral}" stroke="${C.dark}" stroke-width="5"/>
      <text x="625" y="563" font-size="26" font-weight="800" text-anchor="middle" fill="${C.dark}">DISTRESS</text>
      <path d="M150 650 C150 700 110 690 110 730 C110 770 150 760 150 800" fill="none" stroke="${C.dark}" stroke-width="10"/>
      <rect x="95" y="790" width="110" height="80" rx="24" fill="${C.dark}" stroke="${C.line}" stroke-width="5"/>`,
    anchors: { display: [450, 368], volume: [568, 340], squelch: [678, 340], keypad: [445, 530], speaker: [690, 444], distress: [690, 555], mic: [205, 830], panel: [720, 280] },
  },
  antenna: {
    svg: `
      <rect x="60" y="830" width="680" height="22" rx="6" fill="${C.steel}"/>
      <rect x="380" y="430" width="40" height="400" fill="${C.steel}"/>
      <line x1="400" y1="430" x2="400" y2="70" stroke="${C.light}" stroke-width="10" stroke-linecap="round"/>
      <circle cx="400" cy="64" r="12" fill="${C.light}"/>
      <rect x="378" y="400" width="44" height="50" rx="8" fill="${C.dark}"/>
      <rect x="310" y="580" width="180" height="120" rx="14" fill="${C.amber}" stroke="${C.dark}" stroke-width="5"/>
      <text x="400" y="652" font-size="34" font-weight="800" text-anchor="middle" fill="${C.dark}">ATU</text>
      <path d="M490 670 C570 690 610 760 610 830" fill="none" stroke="${C.dark}" stroke-width="14"/>
      <path d="M318 690 L240 830" stroke="#c98a4b" stroke-width="16" stroke-linecap="round"/>`,
    anchors: { tip: [400, 70], whip: [400, 240], insulator: [422, 425], coupler: [490, 630], coax: [600, 780], ground: [270, 780], mast: [420, 760], deck: [700, 840] },
  },
  battery: {
    svg: `
      <rect x="60" y="420" width="320" height="320" rx="18" fill="#2a3f55" stroke="${C.line}" stroke-width="6"/>
      <rect x="420" y="420" width="320" height="320" rx="18" fill="#2a3f55" stroke="${C.line}" stroke-width="6"/>
      <g fill="${C.dark}"><rect x="160" y="400" width="34" height="24" rx="5"/><rect x="210" y="400" width="34" height="24" rx="5"/><rect x="520" y="400" width="34" height="24" rx="5"/><rect x="570" y="400" width="34" height="24" rx="5"/></g>
      <rect x="92" y="372" width="40" height="48" rx="6" fill="${C.coral}"/><rect x="308" y="372" width="40" height="48" rx="6" fill="${C.steel}"/>
      <rect x="452" y="372" width="40" height="48" rx="6" fill="${C.coral}"/><rect x="668" y="372" width="40" height="48" rx="6" fill="${C.steel}"/>
      <text x="112" y="510" font-size="56" font-weight="800" text-anchor="middle" fill="${C.coral}">+</text>
      <text x="328" y="510" font-size="56" font-weight="800" text-anchor="middle" fill="${C.light}">−</text>
      <text x="472" y="510" font-size="56" font-weight="800" text-anchor="middle" fill="${C.coral}">+</text>
      <text x="688" y="510" font-size="56" font-weight="800" text-anchor="middle" fill="${C.light}">−</text>
      <path d="M328 372 C340 300 440 300 472 372" fill="none" stroke="${C.dark}" stroke-width="16"/>
      <path d="M112 372 C112 240 300 200 400 200" fill="none" stroke="${C.coral}" stroke-width="12"/>
      <path d="M688 372 C688 240 500 200 400 220" fill="none" stroke="${C.dark}" stroke-width="12"/>`,
    anchors: { positive: [132, 380], negative: [668, 380], link: [400, 318], caps: [244, 412], case: [380, 600], cables: [400, 210], 'right-battery': [740, 600] },
  },
  multimeter: {
    svg: `
      <rect x="220" y="80" width="360" height="740" rx="40" fill="${C.amber}" stroke="${C.dark}" stroke-width="6"/>
      <rect x="250" y="110" width="300" height="680" rx="26" fill="${C.panel}"/>
      <rect x="280" y="150" width="240" height="130" rx="10" fill="#cfe3c6"/>
      <g fill="#24323f"><rect x="305" y="190" width="40" height="60" rx="6"/><rect x="355" y="190" width="40" height="60" rx="6"/><rect x="405" y="190" width="40" height="60" rx="6"/><rect x="455" y="190" width="40" height="60" rx="6"/></g>
      <circle cx="400" cy="460" r="112" fill="${C.dark}" stroke="${C.steel}" stroke-width="6"/>
      <rect x="388" y="360" width="24" height="90" rx="10" fill="${C.light}"/>
      <g stroke="${C.steel}" stroke-width="5" stroke-linecap="round">
        <line x1="400" y1="320" x2="400" y2="336"/><line x1="500" y1="360" x2="488" y2="372"/><line x1="540" y1="460" x2="524" y2="460"/><line x1="500" y1="560" x2="488" y2="548"/><line x1="300" y1="560" x2="312" y2="548"/><line x1="260" y1="460" x2="276" y2="460"/><line x1="300" y1="360" x2="312" y2="372"/>
      </g>
      <circle cx="310" cy="700" r="24" fill="${C.dark}" stroke="${C.steel}" stroke-width="5"/>
      <circle cx="400" cy="700" r="24" fill="${C.coral}" stroke="${C.dark}" stroke-width="5"/>
      <circle cx="490" cy="700" r="24" fill="${C.dark}" stroke="${C.steel}" stroke-width="5"/>
      <text x="310" y="760" font-size="24" font-weight="700" text-anchor="middle" fill="${C.light}">COM</text>
      <text x="400" y="760" font-size="24" font-weight="700" text-anchor="middle" fill="${C.light}">VΩ</text>
      <text x="490" y="760" font-size="24" font-weight="700" text-anchor="middle" fill="${C.light}">A</text>
      <path d="M310 700 C300 840 520 860 680 870" fill="none" stroke="${C.dark}" stroke-width="10"/>
      <path d="M400 700 C420 800 580 820 720 820" fill="none" stroke="${C.coral}" stroke-width="10"/>`,
    anchors: { display: [520, 215], selector: [512, 460], com: [334, 700], volts: [424, 700], amps: [514, 700], probes: [700, 830], body: [580, 300] },
  },
  oscilloscope: {
    svg: `
      <rect x="40" y="200" width="720" height="480" rx="24" fill="${C.panel}" stroke="${C.line}" stroke-width="6"/>
      <rect x="80" y="240" width="400" height="320" rx="10" fill="#061a1c"/>
      <g stroke="${C.teal}" stroke-width="1.5" opacity="0.35">
        <line x1="120" y1="240" x2="120" y2="560"/><line x1="160" y1="240" x2="160" y2="560"/><line x1="200" y1="240" x2="200" y2="560"/><line x1="240" y1="240" x2="240" y2="560"/><line x1="280" y1="240" x2="280" y2="560"/><line x1="320" y1="240" x2="320" y2="560"/><line x1="360" y1="240" x2="360" y2="560"/><line x1="400" y1="240" x2="400" y2="560"/><line x1="440" y1="240" x2="440" y2="560"/>
        <line x1="80" y1="280" x2="480" y2="280"/><line x1="80" y1="320" x2="480" y2="320"/><line x1="80" y1="360" x2="480" y2="360"/><line x1="80" y1="400" x2="480" y2="400"/><line x1="80" y1="440" x2="480" y2="440"/><line x1="80" y1="480" x2="480" y2="480"/><line x1="80" y1="520" x2="480" y2="520"/>
      </g>
      <path d="M80 400 C120 300 160 300 200 400 S280 500 320 400 S400 300 440 400 S470 470 480 440" fill="none" stroke="${C.teal}" stroke-width="5"/>
      <g fill="${C.dark}" stroke="${C.steel}" stroke-width="5"><circle cx="560" cy="300" r="36"/><circle cx="670" cy="300" r="24"/><circle cx="560" cy="430" r="36"/><circle cx="670" cy="430" r="24"/></g>
      <text x="560" y="365" font-size="20" font-weight="700" text-anchor="middle" fill="${C.light}">VOLTS/DIV</text>
      <text x="560" y="495" font-size="20" font-weight="700" text-anchor="middle" fill="${C.light}">TIME/DIV</text>
      <text x="670" y="485" font-size="20" font-weight="700" text-anchor="middle" fill="${C.light}">TRIG</text>
      <circle cx="560" cy="600" r="22" fill="${C.steel}" stroke="${C.dark}" stroke-width="5"/>
      <path d="M560 622 C560 720 640 740 640 840" fill="none" stroke="${C.dark}" stroke-width="12"/>
      <rect x="626" y="830" width="28" height="50" rx="8" fill="${C.dark}"/>`,
    anchors: { screen: [480, 330], trace: [320, 400], vertical: [596, 300], timebase: [596, 430], trigger: [694, 430], input: [582, 600], probe: [654, 850] },
  },
  'radar-antenna': {
    svg: `
      <rect x="60" y="200" width="680" height="90" rx="22" fill="${C.light}" stroke="${C.steel}" stroke-width="5"/>
      <g fill="${C.line}"><rect x="110" y="228" width="14" height="34" rx="3" transform="rotate(20 117 245)"/><rect x="170" y="228" width="14" height="34" rx="3" transform="rotate(-20 177 245)"/><rect x="230" y="228" width="14" height="34" rx="3" transform="rotate(20 237 245)"/><rect x="290" y="228" width="14" height="34" rx="3" transform="rotate(-20 297 245)"/><rect x="496" y="228" width="14" height="34" rx="3" transform="rotate(20 503 245)"/><rect x="556" y="228" width="14" height="34" rx="3" transform="rotate(-20 563 245)"/><rect x="616" y="228" width="14" height="34" rx="3" transform="rotate(20 623 245)"/><rect x="676" y="228" width="14" height="34" rx="3" transform="rotate(-20 683 245)"/></g>
      <circle cx="400" cy="306" r="26" fill="${C.amber}" stroke="${C.dark}" stroke-width="5"/>
      <path d="M300 320 L500 320 L540 540 L260 540 Z" fill="${C.panel}" stroke="${C.line}" stroke-width="6"/>
      <rect x="520" y="430" width="130" height="90" rx="12" fill="${C.steel}" stroke="${C.dark}" stroke-width="5"/>
      <text x="585" y="485" font-size="26" font-weight="800" text-anchor="middle" fill="${C.dark}">MOTOR</text>
      <rect x="385" y="540" width="30" height="320" fill="${C.amber}"/>
      <g fill="${C.dark}"><rect x="375" y="620" width="50" height="10"/><rect x="375" y="740" width="50" height="10"/></g>
      <path d="M150 150 A300 60 0 0 1 650 150" fill="none" stroke="${C.teal}" stroke-width="6" stroke-dasharray="16 12"/>
      <path d="M650 150 l-26 -14 l4 28 z" fill="${C.teal}"/>`,
    anchors: { array: [740, 245], slots: [124, 262], rotary: [426, 306], gearbox: [400, 450], motor: [650, 475], waveguide: [415, 700], rotation: [650, 150] },
  },
  magnetron: {
    svg: `
      <rect x="80" y="300" width="70" height="240" rx="14" fill="${C.coral}" stroke="${C.dark}" stroke-width="5"/>
      <rect x="650" y="300" width="70" height="240" rx="14" fill="${C.steel}" stroke="${C.dark}" stroke-width="5"/>
      <text x="115" y="438" font-size="44" font-weight="800" text-anchor="middle" fill="${C.dark}">N</text>
      <text x="685" y="438" font-size="44" font-weight="800" text-anchor="middle" fill="${C.dark}">S</text>
      <circle cx="400" cy="420" r="200" fill="#c98a4b" stroke="${C.dark}" stroke-width="6"/>
      <circle cx="400" cy="420" r="110" fill="#8a5a2b"/>
      <g fill="${C.dark}"><circle cx="400" cy="275" r="24"/><circle cx="502" cy="318" r="24"/><circle cx="545" cy="420" r="24"/><circle cx="502" cy="522" r="24"/><circle cx="400" cy="565" r="24"/><circle cx="298" cy="522" r="24"/><circle cx="255" cy="420" r="24"/><circle cx="298" cy="318" r="24"/></g>
      <circle cx="400" cy="420" r="46" fill="${C.dark}" stroke="${C.amber}" stroke-width="6"/>
      <rect x="380" y="90" width="40" height="140" rx="8" fill="${C.amber}" stroke="${C.dark}" stroke-width="4"/>
      <g stroke="${C.steel}" stroke-width="10" stroke-linecap="round"><line x1="385" y1="620" x2="385" y2="860"/><line x1="415" y1="620" x2="415" y2="860"/></g>`,
    anchors: { anode: [600, 420], cavities: [526, 318], cathode: [446, 420], magnet: [150, 420], output: [420, 140], filament: [415, 800] },
  },
  'satcom-terminal': {
    svg: `
      <rect x="600" y="300" width="40" height="540" fill="${C.steel}"/>
      <rect x="520" y="290" width="200" height="24" rx="6" fill="${C.line}"/>
      <path d="M480 300 Q480 110 620 110 Q760 110 760 300 Z" fill="${C.light}" stroke="${C.steel}" stroke-width="5"/>
      <path d="M560 250 Q620 170 690 230" fill="none" stroke="${C.line}" stroke-width="8" stroke-dasharray="10 8"/>
      <rect x="60" y="430" width="380" height="240" rx="20" fill="${C.panel}" stroke="${C.line}" stroke-width="6"/>
      <rect x="95" y="465" width="310" height="150" rx="10" fill="#0b1a2a"/>
      <g stroke="${C.teal}" stroke-width="9" stroke-linecap="round" opacity="0.85"><line x1="120" y1="500" x2="340" y2="500"/><line x1="120" y1="535" x2="380" y2="535"/><line x1="120" y1="570" x2="300" y2="570"/></g>
      <rect x="90" y="700" width="330" height="100" rx="14" fill="${C.dark}" stroke="${C.line}" stroke-width="5"/>
      <g fill="${C.steel}" opacity="0.8"><rect x="110" y="718" width="290" height="16" rx="5"/><rect x="110" y="744" width="290" height="16" rx="5"/><rect x="110" y="770" width="200" height="16" rx="5"/></g>
      <path d="M620 840 L620 870 L250 870 L250 670" fill="none" stroke="${C.dark}" stroke-width="14"/>`,
    anchors: { radome: [760, 230], dish: [690, 230], mast: [640, 560], cable: [430, 870], terminal: [440, 470], screen: [405, 540], keyboard: [420, 750] },
  },
};
