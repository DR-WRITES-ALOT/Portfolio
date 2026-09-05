import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

type Mission = {
  id: string;
  year: string;
  title: string;
  role: string;
  img: string;
  alt: string;
  desc: string;
  tags: string[];
  stats: { value: string; label: string }[];
  shadow: string;
  accent: string;
};

const MISSIONS: Mission[] = [
  {
    id: "CASE-01",
    year: "2025",
    title: "NEON ARCADE",
    role: "LEAD CREATIVE DEV",
    img: "/images/proj-arcade.jpg",
    alt: "Comic illustration of a neon cyberpunk arcade leaderboard dashboard",
    desc: "A WebGL game hub where the leaderboard is a living city. Real-time rankings rendered as holographic billboards, with a custom particle engine for win-streak celebrations.",
    tags: ["THREE.JS", "REACT", "WEBSOCKETS", "GLSL"],
    stats: [
      { value: "+212%", label: "SESSION TIME" },
      { value: "60FPS", label: "ON MID-TIER MOBILE" },
      { value: "SOTD", label: "AWWWARDS" },
    ],
    shadow: "shadow-[10px_10px_0_#ffe600]",
    accent: "#ffe600",
  },
  {
    id: "CASE-02",
    year: "2024",
    title: "SYNTHWAVE.FM",
    role: "UI ENGINEER",
    img: "/images/proj-synth.jpg",
    alt: "Comic illustration of a retro-futuristic music streaming app with cassette and equalizer",
    desc: "Music streaming for the retro-future: a cassette-deck player, waveform scrubbing drawn on canvas, and queue cards that riffle like a comic panel flip.",
    tags: ["REACT", "WEB AUDIO", "CANVAS", "PWA"],
    stats: [
      { value: "4.9★", label: "APP STORE" },
      { value: "38K", label: "DAILY LISTENERS" },
      { value: "-41%", label: "SKIP RATE" },
    ],
    shadow: "shadow-[10px_10px_0_#ff2e7e]",
    accent: "#ff2e7e",
  },
  {
    id: "CASE-03",
    year: "2024",
    title: "KAIJU DASH",
    role: "DESIGN + FRONTEND",
    img: "/images/proj-kaiju.jpg",
    alt: "Comic illustration of a friendly kaiju delivering a parcel between neon skyscrapers",
    desc: "Same-day delivery, but the courier is a 40-metre kaiju. Live map tracking with monster-scale animations, and a checkout flow that converts like a finishing move.",
    tags: ["NEXT.JS", "MAPBOX", "RIVE", "STRIPE"],
    stats: [
      { value: "+64%", label: "CONVERSION" },
      { value: "1.2s", label: "LCP" },
      { value: "0", label: "CITIES FLATTENED" },
    ],
    shadow: "shadow-[10px_10px_0_#ff7a18]",
    accent: "#ff7a18",
  },
  {
    id: "CASE-04",
    year: "2023",
    title: "GHOST PROTOCOL",
    role: "CREATIVE DEV",
    img: "/images/proj-ghost.jpg",
    alt: "Comic illustration of a cyberpunk security dashboard with a ghost hologram over a world map",
    desc: "A SOC dashboard that makes threat-hunting feel like a ghost story. 50k events/min streamed into a canvas heatmap, with an incident timeline that reads like a manga chapter.",
    tags: ["TYPESCRIPT", "D3", "WEBSOCKETS", "EDGE FN"],
    stats: [
      { value: "50K/MIN", label: "EVENTS RENDERED" },
      { value: "-28%", label: "MTTR" },
      { value: "SOC2", label: "COMPLIANT" },
    ],
    shadow: "shadow-[10px_10px_0_#2be8ff]",
    accent: "#2be8ff",
  },
];

export default function Projects() {
  return (
    <section id="missions" className="relative scroll-mt-24 py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-5">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading index="03" title="MISSIONS" tag="// selected case files" accent="#ff7a18" />
          <Reveal delay={150} className="mb-12 md:mb-16">
            <p className="font-mono2 text-[11px] tracking-[0.25em] text-mute">
              SCROLL TO DEPLOY <span className="text-volt blink">▼</span>
            </p>
          </Reveal>
        </div>

        <div className="relative">
          {MISSIONS.map((m, i) => (
            <div
              key={m.id}
              className="sticky mb-14 last:mb-0"
              style={{ top: `${86 + i * 20}px`, zIndex: i + 1 }}
            >
              <article
                className={`bg-panel border-[3px] border-ink ${m.shadow} grid md:grid-cols-2 overflow-hidden ${
                  i % 2 === 0 ? "md:-rotate-[0.5deg]" : "md:rotate-[0.5deg]"
                }`}
              >
                {/* image */}
                <div
                  className={`relative overflow-hidden border-b-[3px] border-ink md:border-b-0 h-64 md:h-auto ${
                    i % 2 === 0 ? "md:border-r-[3px]" : "md:order-2 md:border-l-[3px]"
                  }`}
                >
                  <img src={m.img} alt={m.alt} className="kenburns w-full h-full object-cover min-h-64" />
                  <div className="absolute inset-0 halftone-ink opacity-30 pointer-events-none" aria-hidden="true" />
                  <span className="absolute top-4 right-4 rotate-12 font-display text-xl md:text-2xl tracking-widest text-punch border-[3px] border-punch bg-void/70 px-2.5 py-0.5">
                    {i === 3 ? "DECLASSIFIED" : "CLASSIFIED"}
                  </span>
                  <span className="absolute bottom-3 left-3 font-mono2 text-[9px] font-bold tracking-[0.25em] text-ink bg-volt border-2 border-ink px-1.5 py-0.5">
                    FILE {i + 1}/4
                  </span>
                </div>

                {/* content */}
                <div className="p-6 md:p-9 flex flex-col">
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <span
                      className="font-mono2 text-[10px] font-bold tracking-[0.2em] text-ink px-2 py-0.5 border-2 border-ink"
                      style={{ background: m.accent }}
                    >
                      {m.id} // {m.year}
                    </span>
                    <span className="font-mono2 text-[10px] font-bold tracking-[0.2em] text-mute border-2 border-panel2 px-2 py-0.5">
                      {m.role}
                    </span>
                  </div>

                  <h3
                    className="comic-title font-display text-4xl md:text-6xl leading-[0.95] tracking-wide text-paper"
                    style={{ "--ts": m.accent } as React.CSSProperties}
                  >
                    {m.title}
                  </h3>

                  <p className="text-mute leading-relaxed mt-4 text-sm md:text-base">{m.desc}</p>

                  <div className="flex flex-wrap gap-2 mt-5">
                    {m.tags.map((t) => (
                      <span
                        key={t}
                        className="font-mono2 text-[10px] font-bold tracking-[0.18em] text-paper bg-void border-2 border-ink px-2 py-1"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="grid grid-cols-3 gap-3 border-t-2 border-panel2 mt-auto pt-5 md:pt-6">
                    {m.stats.map((s) => (
                      <div key={s.label}>
                        <p className="font-display text-2xl md:text-3xl leading-none" style={{ color: m.accent }}>
                          {s.value}
                        </p>
                        <p className="font-mono2 text-[9px] tracking-[0.18em] text-mute mt-1.5">{s.label}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6">
                    <a
                      href={`mailto:hello@kiravolt.dev?subject=${encodeURIComponent(
                        `Open case file: ${m.title}`
                      )}`}
                      data-hover
                      className="btn-comic bg-void text-volt text-lg px-5 py-2"
                    >
                      REQUEST FULL CASE ↗
                    </a>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>

        <Reveal delay={100}>
          <p className="mt-14 text-center font-mono2 text-[11px] tracking-[0.3em] text-mute">
            ★ 43 MORE FILES IN THE VAULT — <a href="#signal" data-hover className="text-punch hover:text-volt transition-colors">REQUEST ACCESS</a> ★
          </p>
        </Reveal>
      </div>
    </section>
  );
}
