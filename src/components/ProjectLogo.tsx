/**
 * Paper-comic illustrated panels for each project.
 * Hand-drawn vector "printed comic" art: aged paper, halftone shading,
 * ink misregistration-style layers and full scenes (not single icons).
 */

export type PaperKey = "snap" | "drone" | "orange" | "code";

const INK = "#241a12";
const PAPER = "#eee1bd";
const PAPER_LT = "#f6ecd2";
const GRAIN = "#4a3417";

/* ---------- geometry helpers ---------- */

function rays(cx: number, cy: number, ro: number, ri: number, n: number) {
  const pts: string[] = [];
  for (let i = 0; i < n * 2; i += 1) {
    const a = (Math.PI / n) * i - Math.PI / 2;
    const r = i % 2 === 0 ? ro : ri;
    pts.push(`${(cx + Math.cos(a) * r).toFixed(1)},${(cy + Math.sin(a) * r).toFixed(1)}`);
  }
  return pts.join(" ");
}

function sparkle(cx: number, cy: number, r: number) {
  const pts: string[] = [];
  for (let i = 0; i < 8; i += 1) {
    const a = (Math.PI / 4) * i - Math.PI / 2;
    const rr = i % 2 === 0 ? r : r * 0.34;
    pts.push(`${(cx + Math.cos(a) * rr).toFixed(1)},${(cy + Math.sin(a) * rr).toFixed(1)}`);
  }
  return pts.join(" ");
}

function waves(top = 234) {
  let d = `M -30 300 L -30 ${top}`;
  for (let x = 0; x <= 460; x += 40) d += ` q 20 ${-27} 40 0`;
  d += " L 430 300 Z";
  return d;
}



function Defs({ id }: { id: string }) {
  return (
    <defs>
      {/* halftone dot pattern */}
      <pattern id={`${id}-dots`} width="12" height="12" patternUnits="userSpaceOnUse">
        <circle cx="3" cy="3" r="1.7" fill={INK} />
      </pattern>
      {/* fine newsprint texture */}
      <filter id={`${id}-grain`}>
        <feTurbulence type="fractalNoise" baseFrequency="0.55" numOctaves="3" stitchTiles="stitch" />
        <feColorMatrix type="saturate" values="0" />
        <feComponentTransfer>
          <feFuncA type="linear" slope="0.10" />
        </feComponentTransfer>
      </filter>
      {/* soft paper stain blotches */}
      <filter id={`${id}-stain`}>
        <feTurbulence type="fractalNoise" baseFrequency="0.012 0.02" numOctaves="2" />
        <feColorMatrix type="saturate" values="0" />
        <feComponentTransfer>
          <feFuncA type="linear" slope="0.07" />
        </feComponentTransfer>
      </filter>
      {/* corner vignette */}
      <radialGradient id={`${id}-vig`} cx="50%" cy="46%" r="72%">
        <stop offset="62%" stopColor={GRAIN} stopOpacity="0" />
        <stop offset="100%" stopColor={GRAIN} stopOpacity="0.34" />
      </radialGradient>
    </defs>
  );
}

function PaperLayers({ id }: { id: string }) {
  return (
    <>
      {/* paper base */}
      <rect x="0" y="0" width="400" height="300" fill={PAPER} />
      {/* stain blotches */}
      <rect x="0" y="0" width="400" height="300" filter={`url(#${id}-stain)`} opacity="0.9" />
      {/* vignette shading */}
      <rect x="0" y="0" width="400" height="300" fill={`url(#${id}-vig)`} />
      {/* halftone band top + bottom for print feel */}
      <rect x="0" y="0" width="400" height="34" fill={`url(#${id}-dots)`} opacity="0.16" />
      <rect x="0" y="278" width="400" height="22" fill={`url(#${id}-dots)`} opacity="0.16" />
      {/* ink edge frame, slightly rough (comic cutout) */}
      <path
        d="M 6 4 h 386 q 4 0 4 4 v 282 q 0 4 -4 4 h -386 q -4 0 -4 -4 v -282 q 0 -4 4 -4 Z"
        fill="none"
        stroke={INK}
        strokeWidth="7"
        opacity="0.9"
      />
      {/* fine grain on top */}
      <rect x="0" y="0" width="400" height="300" filter={`url(#${id}-grain)`} />
    </>
  );
}

/* ---------- scenes ---------- */

function SnapScene({ accent }: { accent: string }) {
  return (
    <g>
      {/* sunburst */}
      <polygon points={rays(328, 66, 120, 26, 12)} fill="#ffd23f" opacity="0.85" />
      <circle cx="328" cy="66" r="30" fill={accent} />
      {/* sparkles / circuit nodes in sky */}
      <polygon points={sparkle(268, 44, 13)} fill={INK} />
      <polygon points={sparkle(90, 58, 10)} fill={accent} />
      <g stroke={INK} strokeWidth="5" strokeLinecap="round">
        <path d="M 190 26 h 34" />
        <path d="M 228 26 h 10 l 8 -9" />
        <circle cx="246" cy="17" r="5" fill={accent} stroke="none" />
        <circle cx="186" cy="26" r="5" fill={accent} stroke="none" />
      </g>

      {/* sea */}
      <path d={waves(236)} fill={INK} />
      <path
        d="M 20 252 q 22 -12 44 0 M 84 266 q 22 -12 44 0 M 190 256 q 22 -12 44 0 M 300 268 q 20 -10 40 0"
        stroke={PAPER_LT}
        strokeWidth="4"
        fill="none"
        opacity="0.55"
        strokeLinecap="round"
      />
      {/* halftone shading on water */}
      <path d={waves(260)} fill={`url(#snap-dots)`} opacity="0.5" />

      {/* the anchor */}
      <g stroke={INK} strokeWidth="15" strokeLinecap="round" strokeLinejoin="round" fill="none">
        <circle cx="150" cy="96" r="23" />
        <path d="M150 119 v 62" strokeWidth="16" />
        <path d="M108 128 h 84" strokeWidth="13" />
        <path d="M150 181 C 146 218 112 220 94 200 L 108 194" />
        <path d="M150 181 C 154 218 188 220 206 200 L 192 194" />
      </g>
      {/* rope + gear accent */}
      <g fill="none" stroke={accent} strokeWidth="6" strokeLinecap="round">
        <path d="M150 73 v -8 M150 61 l 9 -6 M159 55 l 10 -2" />
      </g>
      <rect x="128" y="210" width="9" height="9" transform="rotate(20 132 214)" fill={accent} />
      <rect x="166" y="202" width="7" height="7" transform="rotate(-15 169 205)" fill={accent} />

      {/* floating photo cards */}
      <g transform="rotate(-8 66 168)">
        <rect x="44" y="146" width="46" height="40" fill={PAPER_LT} stroke={INK} strokeWidth="6" />
        <rect x="50" y="152" width="34" height="20" fill={INK} opacity="0.85" />
        <path d="M50 162 l 9 -7 7 5 8 -8 10 10" stroke={PAPER_LT} strokeWidth="2.5" fill="none" />
        <rect x="50" y="178" width="10" height="2" fill={INK} opacity="0.5" />
        <rect x="66" y="178" width="14" height="2" fill={INK} opacity="0.5" />
      </g>
      <g transform="rotate(7 336 168)">
        <rect x="312" y="150" width="40" height="34" fill={PAPER_LT} stroke={INK} strokeWidth="5" />
        <circle cx="332" cy="164" r="8" fill={accent} />
        <path d="M318 182 v -4 M346 182 v -4" stroke={INK} strokeWidth="3" />
      </g>
    </g>
  );
}

function DroneScene({ accent }: { accent: string }) {
  return (
    <g>
      {/* sky halftone band + sun rays */}
      <rect x="0" y="0" width="400" height="70" fill={`url(#drone-dots)`} opacity="0.16" />
      <polygon points={rays(330, 52, 120, 22, 12)} fill="#ffd23f" opacity="0.5" />

      {/* radar rings over the disaster map */}
      <g fill="none" stroke={INK} strokeWidth="5" opacity="0.55">
        <circle cx="196" cy="212" r="58" />
        <circle cx="196" cy="212" r="96" strokeDasharray="3 13" strokeWidth="4" opacity="0.45" />
      </g>
      {/* scan sweep */}
      <path
        d="M196 212 L130 156 A58 58 0 0 1 196 154 Z"
        fill={accent}
        opacity="0.30"
      />
      <path d="M196 212 L130 156 M196 212 L196 154" stroke={accent} strokeWidth="4" />

      {/* ground / map terrain */}
      <path d="M0 236 h400 v64 H0 Z" fill={PAPER_LT} stroke={INK} strokeWidth="6" />
      <g fill="none" stroke={INK} strokeWidth="3" opacity="0.35">
        <path d="M0 252 q 60 -14 120 -4 t 130 2 t 150 -6 v 20 q -70 10 -140 2 t -140 -2 t -120 4 Z" />
        <path d="M0 268 q 80 -10 150 0 t 150 0 t 100 -2" />
      </g>
      {/* damaged buildings + rubble */}
      <g stroke={INK} strokeWidth="5" fill="none">
        <rect x="52" y="242" width="34" height="30" transform="skewX(-6)" fill="#d9c69a" />
        <path d="M60 244 l 8 14 -6 10 M76 242 v 16 l 6 6" />
        <rect x="318" y="246" width="28" height="26" fill="#d9c69a" />
        <path d="M320 262 l 12 -12 12 12 M326 250 l 6 6" />
      </g>
      {/* target markers */}
      <g stroke="#ff2e7e" strokeWidth="5" strokeLinecap="round">
        <circle cx="128" cy="258" r="9" fill="none" />
        <path d="M122 252 l 12 12 M134 252 l -12 12" />
        <path d="M128 240 v 36 M112 258 h 32" opacity="0.35" strokeDasharray="3 6" />
      </g>
      <circle cx="262" cy="246" r="8" fill="#ff2e7e" stroke={INK} strokeWidth="4" />
      <path d="M262 230 v 32 M246 246 h 32" stroke="#ff2e7e" strokeWidth="3" strokeDasharray="3 6" opacity="0.4" />

      {/* AI beacon */}
      <g>
        <polygon points={sparkle(348, 220, 15)} fill={accent} />
        <circle cx="348" cy="220" r="6" fill={accent} />
      </g>

      {/* scanner beam from drone to ground */}
      <polygon
        points="150,132 176,168 120,168"
        fill={accent}
        opacity="0.16"
      />
      <path d="M150 132 L140 176 M150 132 L162 176" stroke={accent} strokeWidth="3" strokeDasharray="2 8" opacity="0.7" />

      {/* the drone */}
      <g>
        {/* rotors */}
        <g fill="none" stroke={INK} strokeWidth="6">
          <ellipse cx="86" cy="96" rx="30" ry="11" transform="rotate(-32 86 96)" />
          <ellipse cx="214" cy="96" rx="30" ry="11" transform="rotate(32 214 96)" />
          <ellipse cx="86" cy="176" rx="30" ry="11" transform="rotate(32 86 176)" />
          <ellipse cx="214" cy="176" rx="30" ry="11" transform="rotate(-32 214 176)" />
        </g>
        {/* arms */}
        <g stroke={INK} strokeWidth="10" strokeLinecap="round">
          <path d="M150 136 L112 96 M150 136 L188 96 M150 136 L112 176 M150 136 L188 176" />
        </g>
        {/* body */}
        <rect x="112" y="120" width="76" height="34" rx="12" fill={PAPER_LT} stroke={INK} strokeWidth="8" />
        {/* camera / sensor */}
        <circle cx="150" cy="158" r="12" fill={INK} />
        <circle cx="150" cy="158" r="6" fill="#2be8ff" />
        {/* blink light */}
        <circle cx="176" cy="126" r="4" fill={accent} />
        {/* comic speed ticks above */}
        <path d="M 108 84 l 10 -16 M 148 76 v -18 M 188 84 l -8 -18" stroke={INK} strokeWidth="5" strokeLinecap="round" />
      </g>
    </g>
  );
}

function OrangeScene({ accent }: { accent: string }) {
  return (
    <g>
      <rect x="0" y="0" width="400" height="70" fill={`url(#orange-dots)`} opacity="0.18" />

      {/* floor + hatch */}
      <rect x="0" y="252" width="400" height="48" fill={INK} />
      <g stroke={PAPER_LT} strokeWidth="3" opacity="0.4">
        <path d="M0 264 h400 M0 278 h400" />
      </g>

      {/* floating platform blocks */}
      <g>
        <rect x="20" y="130" width="54" height="22" fill={accent} stroke={INK} strokeWidth="7" />
        <rect x="18" y="182" width="40" height="18" fill={accent} stroke={INK} strokeWidth="7" />
        <rect x="96" y="96" width="44" height="18" fill={accent} stroke={INK} strokeWidth="7" />
        <path d="M20 130 l 12 -14 10 14 M96 96 l 10 -12 8 12" stroke={INK} strokeWidth="6" fill="none" />
      </g>

      {/* the orange man — running, goofy */}
      <g>
        {/* action puff */}
        <circle cx="84" cy="238" r="14" fill={PAPER_LT} stroke={INK} strokeWidth="6" />
        <circle cx="66" cy="244" r="9" fill={PAPER_LT} stroke={INK} strokeWidth="5" />
        <path d="M 96 64 l 10 -22 M 112 58 l 6 -24" stroke={INK} strokeWidth="5" strokeLinecap="round" />

        <circle cx="158" cy="186" r="52" fill={accent} stroke={INK} strokeWidth="11" />
        {/* goofy face */}
        <circle cx="138" cy="176" r="7" fill={PAPER_LT} />
        <circle cx="180" cy="176" r="7" fill={PAPER_LT} />
        <circle cx="138" cy="176" r="3.4" fill={INK} />
        <circle cx="180" cy="176" r="3.4" fill={INK} />
        <path d="M 122 160 q 10 -8 18 -4 M 194 156 q 8 -4 18 4" stroke={INK} strokeWidth="5" fill="none" strokeLinecap="round" />
        {/* shouting mouth */}
        <ellipse cx="160" cy="206" rx="13" ry="15" fill={INK} />
        <ellipse cx="160" cy="200" rx="8" ry="6" fill="#ff7a5c" />
        <rect x="152" y="196" width="16" height="3.4" fill={PAPER_LT} />
        {/* sweat */}
        <path d="M 216 150 q 4 12 -4 16 M 218 196 q 5 10 -2 15" stroke="#2be8ff" strokeWidth="5" fill="none" strokeLinecap="round" />
        {/* limbs running */}
        <path d="M 150 232 L 132 260 L 138 262 M 172 232 L 192 258 L 198 254" stroke={INK} strokeWidth="11" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M 122 196 L 96 214 L 92 208 M 202 190 L 240 178" stroke={INK} strokeWidth="10" strokeLinecap="round" />
      </g>

      {/* the key (in hand) */}
      <g>
        <circle cx="262" cy="170" r="12" fill="#ffe600" stroke={INK} strokeWidth="7" />
        <rect x="257" y="180" width="10" height="52" fill="#ffe600" stroke={INK} strokeWidth="6" />
        <path d="M 267 210 h 18 M 267 224 h 12" stroke="#ffe600" strokeWidth="8" strokeLinecap="round" />
      </g>

      {/* locked door */}
      <g>
        <polygon points={rays(322, 120, 86, 18, 10)} fill="#ffd23f" opacity="0.9" />
        <rect x="296" y="52" width="96" height="200" fill="#c9a06a" stroke={INK} strokeWidth="10" />
        <path d="M 312 52 v 200 M 376 52 v 200" stroke={INK} strokeWidth="5" opacity="0.5" />
        <circle cx="330" cy="170" r="22" fill="#ffd23f" stroke={INK} strokeWidth="9" />
        <path d="M 318 150 v -8 a 12 12 0 0 1 24 0 v 8" fill="none" stroke={INK} strokeWidth="8" />
        <circle cx="330" cy="170" r="6" fill={INK} />
        <rect x="344" y="150" width="8" height="10" fill={accent} stroke={INK} strokeWidth="4" />
      </g>
    </g>
  );
}

function CodeScene({ accent }: { accent: string }) {
  return (
    <g>
      {/* sky halftone + stars */}
      <rect x="0" y="0" width="400" height="110" fill={`url(#code-dots)`} opacity="0.16" />
      <polygon points={sparkle(52, 44, 12)} fill="#ffe600" />
      <polygon points={sparkle(336, 36, 9)} fill="#ff7a18" />

      {/* skyline */}
      <g fill={INK} opacity="0.95">
        <path d="M0 300 V 218 h34 v-16 h28 v16 h26 v-30 h30 v30 h24 v-20 h32 v20 h28 v-38 h30 v38 h26 v-24 h34 v24 h30 v-30 h34 v30 h28 V300 Z" />
      </g>

      {/* giant code brackets as city monuments */}
      <g stroke={INK} strokeWidth="26" strokeLinecap="round" strokeLinejoin="round" fill="none">
        <path d="M 118 96 L 62 160 L 118 224" />
        <path d="M 282 96 L 338 160 L 282 224" />
      </g>
      <g stroke={INK} strokeWidth="20" strokeLinecap="round" fill="none">
        <path d="M 200 66 v 108" />
      </g>
      {/* slash spark */}
      <polygon points={rays(200, 210, 30, 10, 8)} fill={accent} />

      {/* central comic page */}
      <g transform="rotate(-4 200 160)">
        <rect x="128" y="86" width="146" height="150" fill={PAPER_LT} stroke={INK} strokeWidth="8" />
        {/* comic gutters */}
        <path d="M 128 138 h 146 M 128 190 h 146 M 201 138 v 98" stroke={INK} strokeWidth="4" />
        <rect x="138" y="96" width="54" height="32" fill={`url(#code-dots)`} opacity="0.5" />
        <polygon points={sparkle(243, 156, 16)} fill={accent} />
        <polygon points={sparkle(170, 214, 12)} fill="#ffe600" />
        {/* rising panels */}
        <path d="M 150 196 l 8 -10 8 6 10 -12" stroke={INK} strokeWidth="5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M 224 112 h 36 M 224 122 h 26" stroke={accent} strokeWidth="6" strokeLinecap="round" />
        <path d="M 143 162 h 40" stroke={INK} strokeWidth="5" strokeLinecap="round" opacity="0.5" />
      </g>

      {/* launching rocket */}
      <g transform="rotate(24 330 84)">
        <path d="M 322 40 h 16 v 52 h -16 Z" fill={PAPER_LT} stroke={INK} strokeWidth="6" />
        <circle cx="330" cy="52" r="6" fill={accent} />
        <path d="M 322 66 h 16" stroke={INK} strokeWidth="5" />
        <path d="M 322 92 l -10 16 h 8 l 2 12 8 -12 8 12 2 -12 h 8 Z" fill={accent} stroke={INK} strokeWidth="5" strokeLinejoin="round" />
        {/* smoke */}
        <circle cx="314" cy="122" r="12" fill={PAPER_LT} stroke={INK} strokeWidth="5" />
        <circle cx="346" cy="128" r="10" fill={PAPER_LT} stroke={INK} strokeWidth="5" />
        {/* motion */}
        <path d="M 352 24 h 22 M 336 12 h 16" stroke={INK} strokeWidth="5" strokeLinecap="round" />
      </g>
    </g>
  );
}

/* ---------- main component ---------- */

export default function PaperComic({ project }: { project: PaperKey }) {
  const accent = { snap: "#2be8ff", drone: "#ff2e7e", orange: "#ff7a18", code: "#2be8ff" }[project];
  const label = {
    snap: "SnapHarbor comic cover — anchor with circuit tech over a halftone sea",
    drone: "Rapid Response Drone Mapper comic cover — drone scanning a disaster map for targets",
    orange: "Capture the Orange Man comic cover — goofy orange man chased by a key into a locked door",
    code: "This portfolio comic cover — giant code brackets framing a comic page with a launching rocket",
  }[project];

  return (
    <svg
      viewBox="0 0 400 300"
      preserveAspectRatio="xMidYMid slice"
      className="absolute inset-0 w-full h-full"
      role="img"
      aria-label={label}
    >
      <Defs id={project} />
      <PaperLayers id={project} />
      {project === "snap" && <SnapScene accent={accent} />}
      {project === "drone" && <DroneScene accent={accent} />}
      {project === "orange" && <OrangeScene accent={accent} />}
      {project === "code" && <CodeScene accent={accent} />}
    </svg>
  );
}
