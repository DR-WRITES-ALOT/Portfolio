import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const PANELS = [
  {
    caption: "CHAPTER 01 — 2023",
    title: "THE FIRST BYTE",
    text: "First Python script, typed in school. It prints. It loops. It changes everything. Officially hooked on making computers do things.",
    sfx: "HELLO WORLD!",
    bg: "bg-panel",
    titleColor: "text-volt",
    textColor: "text-mute",
    sfxColor: "text-punch",
    rot: -1,
  },
  {
    caption: "CHAPTER 02 — 2025",
    title: "THE DEEP DIVE",
    text: "Starts developing for real and joins GitHub as DR-WRITES-ALOT. First public repos go live — SnapHarbor and FLOW stop being ideas and start being code.",
    sfx: "COMMIT!",
    bg: "bg-punch",
    titleColor: "text-paper",
    textColor: "text-paper/90",
    sfxColor: "text-volt",
    rot: 1,
  },
  {
    caption: "CHAPTER 03 — 2025",
    title: "CAMPUS ARC",
    text: "Clears school at RSK, Trichy and joins VIT Chennai for B.Tech CSE. Core CS in the classroom, side builds at midnight, and a desktop media vault slowly becoming a real release.",
    sfx: "LEVEL UP!",
    bg: "bg-volt",
    titleColor: "text-ink",
    textColor: "text-ink/80",
    sfxColor: "text-punch",
    rot: -1,
  },
  {
    caption: "CHAPTER 04 — 2026",
    title: "HACKATHON ERA",
    text: "Hackathon season opens — a Gemma-powered drone disaster mapper goes into the arena. Now exploring Unity and C#, one orange man at a time.",
    sfx: "GAME ON!",
    bg: "bg-panel",
    titleColor: "text-acid",
    textColor: "text-mute",
    sfxColor: "text-volt",
    rot: 1,
  },
];

export default function About() {
  return (
    <section id="origin" className="relative scroll-mt-24 py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-5">
        <SectionHeading index="01" title="ORIGIN STORY" tag="// how it started" accent="#ffe600" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-7">
          {PANELS.map((p, i) => (
            <Reveal key={p.title} delay={i * 100} rotate={p.rot} className="h-full">
              <article
                className={`relative h-full overflow-hidden border-[3px] border-ink shadow-[8px_8px_0_#05030a] ${p.bg} transition-transform duration-300 hover:-translate-y-1.5`}
              >
                <div className="absolute inset-0 halftone-ink opacity-40 pointer-events-none" aria-hidden="true" />
                <div className="relative p-5 flex flex-col h-full min-h-64">
                  <span className="self-start font-mono2 text-[9px] font-bold tracking-[0.18em] bg-void text-volt border-2 border-ink px-2 py-1 shadow-[3px_3px_0_#05030a]">
                    {p.caption}
                  </span>
                  <span
                    className="font-display text-7xl leading-none mt-4 opacity-25 select-none"
                    style={{ color: "currentColor" }}
                    aria-hidden="true"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className={`font-display text-3xl tracking-wide mt-2 ${p.titleColor}`}>
                    {p.title}
                  </h3>
                  <p className={`text-sm leading-relaxed mt-2 mb-8 ${p.textColor}`}>{p.text}</p>
                  <span
                    className={`absolute bottom-3 right-3 font-display text-3xl -rotate-8 stroke-ink-2 ${p.sfxColor}`}
                  >
                    {p.sfx}
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={150}>
          <p className="mt-16 md:mt-20 font-display text-3xl md:text-5xl leading-tight max-w-4xl">
            <span className="text-paper stroke-ink-2">
              “BUILD.{" "}
            </span>
            <span className="bg-volt text-ink border-[3px] border-ink px-2 inline-block rotate-1 shadow-[5px_5px_0_#05030a]">
              BREAK.
            </span>
            <span className="text-acid stroke-ink-2"> REPEAT.”</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
