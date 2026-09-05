import Magnetic from "./Magnetic";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { useInView } from "../lib/hooks";

const BARS = [
  { label: "REACT / TYPESCRIPT", value: 96, color: "#ffe600" },
  { label: "CREATIVE CODE — WEBGL / THREE", value: 90, color: "#ff2e7e" },
  { label: "MOTION — GSAP / RIVE / CSS", value: 94, color: "#2be8ff" },
  { label: "UI DESIGN — FIGMA / SYSTEMS", value: 88, color: "#ff7a18" },
  { label: "PERF / A11Y AUDITS", value: 91, color: "#6eff8c" },
  { label: "NODE / EDGE APIS", value: 82, color: "#ffe600" },
];

const GEAR = [
  "React 19",
  "TypeScript",
  "Vite",
  "Three.js",
  "GSAP",
  "Tailwind v4",
  "Figma",
  "Blender",
  "Node",
  "Bun",
  "WebGPU*",
  "Shaders",
  "Rive",
  "Framer",
];

export default function Skills() {
  const { ref, inView } = useInView<HTMLDivElement>(0.2);

  return (
    <section id="loadout" className="relative scroll-mt-24 py-20 md:py-28 bg-panel/40 border-y-[3px] border-ink">
      <div className="absolute inset-0 halftone opacity-40 pointer-events-none" aria-hidden="true" />
      <div className="relative max-w-7xl mx-auto px-5">
        <SectionHeading index="02" title="LOADOUT" tag="// equipped systems" accent="#2be8ff" />

        <div ref={ref} className="grid lg:grid-cols-5 gap-10 lg:gap-14">
          {/* core bars */}
          <div className="lg:col-span-3">
            <Reveal>
              <h3 className="font-display text-2xl text-paper tracking-wide mb-6 flex items-center gap-3">
                <span className="w-4 h-4 bg-volt border-2 border-ink inline-block" aria-hidden="true" />
                CORE SYSTEMS
              </h3>
            </Reveal>
            <div className="space-y-6">
              {BARS.map((b, i) => (
                <Reveal key={b.label} delay={i * 70}>
                  <div className="flex justify-between items-baseline mb-1.5 gap-3">
                    <span className="font-mono2 text-[11px] font-bold tracking-[0.18em] text-paper">
                      {b.label}
                    </span>
                    <span className="font-display text-2xl leading-none" style={{ color: b.color }}>
                      {b.value}%
                    </span>
                  </div>
                  <div className="h-7 border-[3px] border-ink bg-void relative overflow-hidden">
                    <div
                      className="h-full stripes-anim border-r-[3px] border-ink transition-[width] duration-[1200ms] ease-out"
                      style={{
                        width: inView ? `${b.value}%` : "0%",
                        background: b.color,
                        transitionDelay: `${i * 110}ms`,
                      }}
                    />
                    <span className="absolute right-2 top-1/2 -translate-y-1/2 font-mono2 text-[9px] font-bold tracking-[0.2em] text-mute">
                      PWR
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* gear + quest */}
          <div className="lg:col-span-2 space-y-8">
            <Reveal delay={120}>
              <div className="bg-panel border-[3px] border-ink shadow-[8px_8px_0_#ffe600] p-6">
                <h3 className="font-display text-2xl text-paper tracking-wide mb-5 flex items-center gap-3">
                  <span className="w-4 h-4 bg-punch border-2 border-ink inline-block" aria-hidden="true" />
                  EQUIPPED GEAR
                </h3>
                <div className="flex flex-wrap gap-2.5">
                  {GEAR.map((g) => (
                    <Magnetic key={g} strength={0.45}>
                      <span
                        data-hover
                        className="inline-block font-mono2 text-xs font-bold tracking-wider text-paper bg-void border-2 border-ink px-3 py-1.5 shadow-[4px_4px_0_#05030a] hover:bg-volt hover:text-ink transition-colors duration-150"
                      >
                        {g}
                      </span>
                    </Magnetic>
                  ))}
                </div>
                <p className="font-mono2 text-[10px] text-mute mt-4">* currently being forged</p>
              </div>
            </Reveal>

            <Reveal delay={220}>
              <div className="bg-void border-[3px] border-ink shadow-[8px_8px_0_#ff2e7e] p-6 font-mono2 text-xs leading-7">
                <p className="text-mute">
                  <span className="text-punch">~/kira $</span> cat current_quest.log
                </p>
                <p className="text-paper">
                  <span className="text-volt">▸</span> learning: <span className="text-acid">WebGPU compute shaders</span>
                </p>
                <p className="text-paper">
                  <span className="text-volt">▸</span> status: <span className="text-punch">OBSESSED</span>
                </p>
                <p className="text-paper">
                  <span className="text-volt">▸</span> side-quest: comic engine in the browser
                </p>
                <p className="text-mute">
                  <span className="text-punch">~/kira $</span> <span className="blink text-volt">▌</span>
                </p>
                <div className="mt-4">
                  <div className="flex justify-between text-[10px] tracking-[0.2em] mb-1.5">
                    <span className="text-paper">XP TO NEXT LEVEL</span>
                    <span className="text-volt">74%</span>
                  </div>
                  <div className="h-4 border-2 border-ink bg-panel overflow-hidden">
                    <div
                      className="h-full stripes-anim transition-[width] duration-[1400ms] ease-out"
                      style={{ width: inView ? "74%" : "0%", background: "#ff7a18" }}
                    />
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
