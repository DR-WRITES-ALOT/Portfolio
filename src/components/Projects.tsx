import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const GITHUB = "https://github.com/DR-WRITES-ALOT";
const EMAIL = "sreejithsh09@gmail.com";

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
  href?: string;
};

const MISSIONS: Mission[] = [
  {
    id: "CASE-01",
    year: "2026",
    title: "SNAPHARBOR",
    role: "DESKTOP — TAURI + RUST",
    img: "images/proj-arcade.jpg",
    alt: "Comic-style cover art for SnapHarbor, a desktop media vault",
    desc: "A local-first photo & video media vault for Windows. SHA-256 dedupe so nothing copies twice, one-click sync the moment a phone or SD card plugs in, a timeline gallery, automation rules and a system tray that keeps transfers alive. Released as v1.0.0.",
    tags: ["TAURI", "RUST", "REACT", "TYPESCRIPT", "SQLITE"],
    stats: [
      { value: "v1.0.0", label: "RELEASED" },
      { value: "SHA-256", label: "DEDUPE" },
      { value: "AUTO", label: "SYNC ON PLUG-IN" },
    ],
    shadow: "shadow-[10px_10px_0_#ffe600]",
    accent: "#ffe600",
    href: `${GITHUB}/SnapHarbor`,
  },
  {
    id: "CASE-02",
    year: "2026",
    title: "FLOW — NEVER LATE",
    role: "TRANSIT SIM — WEB APP",
    img: "images/proj-synth.jpg",
    alt: "Comic-style cover art for FLOW, a transit simulation app",
    desc: "A deterministic transit simulation that demonstrates proactive journey recovery. FLOW watches your connections, calculates connection confidence in real time, and when a disruption hits, it secures an alternative route before you're stuck.",
    tags: ["TYPESCRIPT", "PRISMA", "NODE", "SIM"],
    stats: [
      { value: "REAL-TIME", label: "CONFIDENCE" },
      { value: "AUTO", label: "ROUTE RECOVERY" },
      { value: "SAVED", label: "TIME VS BASELINE" },
    ],
    shadow: "shadow-[10px_10px_0_#ff2e7e]",
    accent: "#ff2e7e",
    href: `${GITHUB}/FLOW`,
  },
  {
    id: "CASE-03",
    year: "2026",
    title: "CAPTURE THE ORANGE MAN",
    role: "UNITY — PRIVATE REPO",
    img: "images/proj-kaiju.jpg",
    alt: "Comic-style cover art for Capture the Orange Man, a Unity game",
    desc: "A 5-minute obstacle course + room escape, built in Unity. Search for the key while running into funny characters along the way, then reach the locked room and take the win. Small game, big personality.",
    tags: ["UNITY", "C#", "GAME DEV"],
    stats: [
      { value: "5 MIN", label: "PLAYTIME" },
      { value: "1", label: "KEY TO FIND" },
      { value: "1", label: "LOCKED ROOM" },
    ],
    shadow: "shadow-[10px_10px_0_#ff7a18]",
    accent: "#ff7a18",
  },
  {
    id: "CASE-04",
    year: "2026",
    title: "THIS PORTFOLIO",
    role: "REACT + VITE + TAILWIND",
    img: "images/proj-ghost.jpg",
    alt: "Comic-style cover art for this portfolio site",
    desc: "The page you're reading — a comic-book UI that compiles to one self-contained HTML file, then ships itself. Every commit is built and deployed to GitHub Pages by a GitHub Actions pipeline. Dogfooding is fun.",
    tags: ["REACT", "VITE", "TYPESCRIPT", "TAILWIND", "GH ACTIONS"],
    stats: [
      { value: "100%", label: "ONE HTML FILE" },
      { value: "CI", label: "DEPLOY ON PUSH" },
      { value: "LIVE", label: "GITHUB PAGES" },
    ],
    shadow: "shadow-[10px_10px_0_#2be8ff]",
    accent: "#2be8ff",
    href: `${GITHUB}/Portfolio`,
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
                    {m.href ? (
                      <a
                        href={m.href}
                        target="_blank"
                        rel="noreferrer"
                        data-hover
                        className="btn-comic bg-void text-volt text-lg px-5 py-2"
                      >
                        VIEW ON GITHUB ↗
                      </a>
                    ) : (
                      <a
                        href={`mailto:${EMAIL}?subject=${encodeURIComponent(
                          `Demo access: ${m.title}`
                        )}`}
                        data-hover
                        className="btn-comic bg-void text-volt text-lg px-5 py-2"
                      >
                        ASK FOR THE DEMO ↗
                      </a>
                    )}
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>

        <Reveal delay={100}>
          <p className="mt-14 text-center font-mono2 text-[11px] tracking-[0.3em] text-mute">
            ★ MORE BUILDS ON GITHUB —{" "}
            <a href={GITHUB} data-hover target="_blank" rel="noreferrer" className="text-punch hover:text-volt transition-colors">
              @DR-WRITES-ALOT
            </a>{" "}
            ★
          </p>
        </Reveal>
      </div>
    </section>
  );
}
