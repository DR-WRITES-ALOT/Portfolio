import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const PANELS = [
  {
    caption: "CHAPTER 01 — 2016",
    title: "THE SPARK",
    text: "Age 14. View-source on a fan-comic site, and the brain gets rewired forever. First hand-coded page goes live. It has a marquee. No regrets.",
    sfx: "BOOM!",
    bg: "bg-panel",
    titleColor: "text-volt",
    textColor: "text-mute",
    sfxColor: "text-punch",
    rot: -1,
  },
  {
    caption: "CHAPTER 02 — 2019",
    title: "TRAINING ARC",
    text: "CS degree by day, freelance builds by night. 30+ sites shipped, sleep optional. Learns that 'it works on my machine' is not a release strategy.",
    sfx: "GRIND!",
    bg: "bg-punch",
    titleColor: "text-paper",
    textColor: "text-paper/90",
    sfxColor: "text-volt",
    rot: 1,
  },
  {
    caption: "CHAPTER 03 — 2022",
    title: "POWER-UP",
    text: "Senior creative dev at a neon-soaked studio. Award-winning campaign sites, WebGL boss fights, and a design system used by 40 devs.",
    sfx: "LEVEL UP!",
    bg: "bg-volt",
    titleColor: "text-ink",
    textColor: "text-ink/80",
    sfxColor: "text-punch",
    rot: -1,
  },
  {
    caption: "CHAPTER 04 — 2026",
    title: "SOLO RUN",
    text: "Independent. Building loud interfaces for brands on three continents. Still drawing storyboards before writing a single line of code.",
    sfx: "BOSS DOWN!",
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
              “GOOD UI WHISPERS.{" "}
            </span>
            <span className="bg-volt text-ink border-[3px] border-ink px-2 inline-block rotate-1 shadow-[5px_5px_0_#05030a]">
              GREAT UI THROWS THE FIRST PUNCH.”
            </span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
