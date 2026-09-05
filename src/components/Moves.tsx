import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { useInView } from "../lib/hooks";

type Move = {
  keys: string[];
  name: string;
  desc: string;
  tag: string;
  value: string;
  color: string;
  max?: boolean;
};

const MOVES: Move[] = [
  {
    keys: ["↑", "↑", "P"],
    name: "WEB BUILD",
    desc: "From napkin sketch to working page in a weekend. HTML/CSS/JS fundamentals, sharpened on every project that needs to exist yesterday.",
    tag: "HTML · CSS · JAVASCRIPT",
    value: "EVERYDAY",
    color: "#2be8ff",
  },
  {
    keys: ["↓", "↘", "→", "P"],
    name: "DESKTOP VAULT",
    desc: "SnapHarbor — a Tauri + Rust + React media vault with SHA-256 dedupe and plug-in auto-sync. Learned a whole systems stack by shipping one real app.",
    tag: "TAURI · RUST · REACT · TS",
    value: "v1.0.0",
    color: "#ffe600",
  },
  {
    keys: ["←", "P"],
    name: "PYTHON SCRIPTS",
    desc: "Started with a school-day Python script in 2023 — still the fastest tool for hackathon backends, drone-mapper glue and anything that needs doing now.",
    tag: "PYTHON · STREAMLIT",
    value: "2023→",
    color: "#6eff8c",
  },
  {
    keys: ["→", "↓", "P"],
    name: "UNITY GAME BUILD",
    desc: "“capture the orange man” — a 5-minute obby-meets-room-escape comedy in Unity. Funny characters, one key, one locked room, zero mercy.",
    tag: "UNITY · C#",
    value: "IN THE FORGE",
    color: "#ff2e7e",
  },
  {
    keys: ["QCF", "×2", "P"],
    name: "ULTRA: SHIP IT",
    desc: "Idea → prototype → code → deploy. If it's fun enough to build, it's fun enough to finish — then publish it where the world can see it on GitHub.",
    tag: "END-TO-END BUILDS",
    value: "COLLABS OPEN",
    color: "#ff7a18",
    max: true,
  },
];

export default function Moves() {
  const { ref, inView } = useInView<HTMLDivElement>(0.15);

  return (
    <section id="moves" className="relative scroll-mt-24 py-20 md:py-28 bg-panel/40 border-y-[3px] border-ink">
      <div className="absolute inset-0 halftone opacity-40 pointer-events-none" aria-hidden="true" />
      <div className="relative max-w-7xl mx-auto px-5">
        <SectionHeading index="04" title="SPECIAL MOVES" tag="// what I'm actually up to" accent="#ff2e7e" />

        <Reveal>
          <div ref={ref} className="bg-panel border-[3px] border-ink shadow-[12px_12px_0_#ffe600]">
            <div className="flex items-center justify-between bg-void border-b-[3px] border-ink px-5 py-3">
              <span className="font-display text-xl tracking-wide text-volt">MOVE LIST</span>
              <span className="font-mono2 text-[10px] tracking-[0.25em] text-mute hidden sm:block">
                SELECT YOUR INTEREST
              </span>
            </div>

            <ul className="divide-y-[3px] divide-ink">
              {MOVES.map((m, i) => (
                <li
                  key={m.name}
                  className="group grid md:grid-cols-[180px_1fr_170px] items-center gap-5 md:gap-8 px-5 md:px-7 py-6 transition-colors duration-200 hover:bg-panel2"
                >
                  <div className="flex flex-wrap items-center gap-1.5">
                    {m.keys.map((k, ki) => (
                      <span key={ki} className="keycap">
                        {k}
                      </span>
                    ))}
                  </div>

                  <div>
                    <h3
                      className="font-display text-2xl md:text-4xl tracking-wide leading-none"
                      style={{ color: m.color }}
                    >
                      {m.name}
                      {m.max && (
                        <span className="ml-3 align-middle font-mono2 text-[9px] font-bold tracking-[0.2em] text-ink bg-volt border-2 border-ink px-1.5 py-0.5 inline-block -rotate-3">
                          MAX
                        </span>
                      )}
                    </h3>
                    <p className="text-mute text-sm leading-relaxed mt-2 max-w-2xl">{m.desc}</p>
                    <p className="font-mono2 text-[9px] font-bold tracking-[0.25em] text-mute mt-2.5">
                      ▸ {m.tag}
                    </p>
                  </div>

                  <div className="md:justify-self-end w-full md:w-40">
                    <div className="flex justify-between items-baseline mb-1">
                      <span className="font-mono2 text-[10px] font-bold text-mute">STATUS</span>
                      <span className="font-display text-base md:text-lg leading-none text-paper" style={{ color: m.color }}>
                        {m.value}
                      </span>
                    </div>
                    <div className="h-4 border-2 border-ink bg-void overflow-hidden">
                      <div
                        className="h-full stripes-anim transition-[width] duration-1000 ease-out group-hover:brightness-125"
                        style={{
                          width: inView ? "100%" : "0%",
                          background: m.color,
                          transitionDelay: `${200 + i * 130}ms`,
                        }}
                      />
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="border-t-[3px] border-ink px-5 md:px-7 py-4 bg-void">
              <div className="flex items-center gap-4">
                <span className="font-display text-lg text-punch tracking-wide whitespace-nowrap">
                  BUILD METER
                </span>
                <div className="flex-1 h-5 border-2 border-ink bg-panel overflow-hidden">
                  <div
                    className="h-full stripes-anim transition-[width] duration-[1600ms] ease-out"
                    style={{
                      width: inView ? "100%" : "0%",
                      background: "linear-gradient(90deg,#ffe600,#ff7a18,#ff2e7e)",
                    }}
                  />
                </div>
                <span className="font-mono2 text-[10px] font-bold tracking-[0.2em] text-volt blink whitespace-nowrap">
                  CHARGED
                </span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
