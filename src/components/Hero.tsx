import { CSSProperties, MouseEvent, useRef } from "react";
import Magnetic from "./Magnetic";
import Reveal from "./Reveal";
import { useCountUp, useInView, useReducedMotion, useScramble } from "../lib/hooks";

const MINI_STATS = [
  { label: "CODING", value: 95, color: "#ffe600" },
  { label: "DESIGN", value: 92, color: "#ff2e7e" },
  { label: "SPEED", value: 88, color: "#2be8ff" },
  { label: "CHARM", value: 99, color: "#ff7a18" },
];

function starPoints(spikes: number, outer: number, inner: number) {
  const pts: string[] = [];
  for (let i = 0; i < spikes * 2; i += 1) {
    const r = i % 2 === 0 ? outer : inner;
    const a = (Math.PI / spikes) * i - Math.PI / 2;
    pts.push(`${(50 + Math.cos(a) * r).toFixed(2)},${(50 + Math.sin(a) * r).toFixed(2)}`);
  }
  return pts.join(" ");
}

function Stat({
  value,
  suffix,
  label,
  color,
  active,
}: {
  value: number;
  suffix?: string;
  label: string;
  color: string;
  active: boolean;
}) {
  const n = useCountUp(value, active);
  return (
    <div className="px-4 py-2">
      <p className="font-display text-4xl md:text-5xl leading-none" style={{ color }}>
        {n}
        {suffix}
      </p>
      <p className="font-mono2 text-[10px] tracking-[0.25em] text-mute mt-1.5">{label}</p>
    </div>
  );
}

export default function Hero() {
  const kicker = useScramble("CREATIVE DEVELOPER × INTERFACE ARTIST");
  const reduced = useReducedMotion();
  const cardRef = useRef<HTMLDivElement | null>(null);
  const { ref: statsRef, inView: statsIn } = useInView<HTMLDivElement>(0.3);

  const onTilt = (e: MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    if (!el || reduced) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(900px) rotateY(${(px * 6).toFixed(2)}deg) rotateX(${(
      -py * 6
    ).toFixed(2)}deg)`;
  };
  const offTilt = () => {
    const el = cardRef.current;
    if (el) el.style.transform = "perspective(900px) rotateY(0deg) rotateX(0deg)";
  };

  return (
    <section id="top" className="relative pt-28 md:pt-36 pb-14 overflow-hidden">
      {/* layered backdrop */}
      <div className="absolute inset-0 cyber-grid pointer-events-none" aria-hidden="true" />
      <div
        className="absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full halftone opacity-60 pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/3 -left-16 w-72 h-72 rounded-full border-[3px] border-panel2 pointer-events-none"
        aria-hidden="true"
      />
      <svg
        className="absolute top-28 right-[8%] w-10 h-10 float-slow text-punch pointer-events-none hidden md:block"
        style={{ "--fl-rot": "12deg" } as CSSProperties}
        viewBox="0 0 40 40"
        fill="none"
        aria-hidden="true"
      >
        <path d="M20 2 V38 M2 20 H38" stroke="currentColor" strokeWidth="6" strokeLinecap="square" />
      </svg>
      <svg
        className="absolute bottom-24 left-[6%] w-8 h-8 float-slower text-acid pointer-events-none hidden md:block"
        style={{ "--fl-rot": "-8deg" } as CSSProperties}
        viewBox="0 0 40 40"
        fill="currentColor"
        aria-hidden="true"
      >
        <polygon points={starPoints(4, 19, 7)} />
      </svg>

      <div className="relative max-w-7xl mx-auto px-5 grid lg:grid-cols-12 gap-12 lg:gap-8 items-start">
        {/* LEFT — splash type */}
        <div className="lg:col-span-7 relative">
          <Reveal>
            <p className="font-mono2 text-[11px] md:text-xs font-bold tracking-[0.3em] text-acid mb-5">
              {"// PORTFOLIO — ISSUE #27 :: "}
              <span className="text-volt">{kicker}</span>
              <span className="blink text-punch">▌</span>
            </p>
          </Reveal>

          <h1 className="font-display leading-[0.82] tracking-wide select-none">
            <Reveal delay={80}>
              <span className="block text-[clamp(4.2rem,12.5vw,9rem)] text-volt stroke-ink-4 neon-flicker">
                KIRA
              </span>
            </Reveal>
            <Reveal delay={160}>
              <span
                className="glitch block text-[clamp(4.2rem,12.5vw,9rem)] text-hollow"
                data-text="VOLT"
              >
                VOLT
              </span>
            </Reveal>
            <Reveal delay={240}>
              <span className="block mt-3 text-[clamp(2.2rem,6vw,4.4rem)] text-paper stroke-ink-3">
                BUILDS{" "}
                <span className="inline-block bg-punch text-paper border-[3px] border-ink px-3 -rotate-2 shadow-[5px_5px_0_#05030a]">
                  LOUD
                </span>{" "}
                INTERFACES
              </span>
            </Reveal>
          </h1>

          <Reveal delay={330}>
            <p className="mt-7 max-w-xl text-mute text-base md:text-lg leading-relaxed">
              I turn briefs into <span className="text-volt font-semibold">60fps comic-book software</span> —
              half design system, half boss fight. Eight years of shipping sites, apps and
              WebGL worlds that refuse to be boring.
            </p>
          </Reveal>

          <Reveal delay={420}>
            <div className="mt-8 flex flex-wrap items-center gap-5">
              <Magnetic strength={0.3}>
                <a href="#missions" data-hover className="btn-comic bg-volt text-ink text-xl md:text-2xl px-7 py-3">
                  SEE MISSIONS
                  <span aria-hidden="true">↓</span>
                </a>
              </Magnetic>
              <Magnetic strength={0.3}>
                <a
                  href="#signal"
                  data-hover
                  className="btn-comic shadow-pink bg-void text-volt text-xl md:text-2xl px-7 py-3 border-punch"
                >
                  TRANSMIT A BRIEF
                </a>
              </Magnetic>
            </div>
          </Reveal>

          <Reveal delay={500}>
            <div
              ref={statsRef}
              className="mt-12 border-t-[3px] border-ink grid grid-cols-2 sm:grid-cols-4 divide-x-[3px] divide-ink max-w-2xl"
            >
              <Stat value={8} suffix="+" label="YEARS ACTIVE" color="#ffe600" active={statsIn} />
              <Stat value={47} label="MISSIONS SHIPPED" color="#ff2e7e" active={statsIn} />
              <Stat value={12} label="AWARDS BANKED" color="#2be8ff" active={statsIn} />
              <Stat value={999} suffix="+" label="COFFEE COUNT" color="#ff7a18" active={statsIn} />
            </div>
          </Reveal>
        </div>

        {/* RIGHT — character select card */}
        <div className="lg:col-span-5 relative lg:mt-6">
          {/* speech bubble */}
          <div
            className="hidden xl:block absolute -left-32 top-8 z-20 rotate-[-4deg] float-slower"
            style={{ "--fl-rot": "-4deg" } as CSSProperties}
          >
            <div className="relative bg-paper text-ink border-[3px] border-ink px-5 py-3 shadow-[6px_6px_0_#05030a] max-w-52">
              <p className="font-display text-xl leading-tight">
                NEED A UI THAT <span className="bg-punch text-paper px-1">SLAPS?</span>
              </p>
              <span
                className="absolute -right-2.5 top-1/2 w-5 h-5 bg-paper border-t-[3px] border-r-[3px] border-ink rotate-45"
                aria-hidden="true"
              />
            </div>
          </div>

          {/* starburst badge */}
          <div className="absolute -top-9 -left-5 z-20 w-28 h-28 md:w-32 md:h-32">
            <svg viewBox="0 0 100 100" className="w-full h-full spin-slow drop-shadow-[3px_3px_0_#05030a]" aria-hidden="true">
              <polygon points={starPoints(12, 49, 38)} fill="#ffe600" stroke="#05030a" strokeWidth="2.5" />
            </svg>
            <span className="absolute inset-0 grid place-items-center text-center font-display text-[13px] leading-[0.95] text-ink rotate-[-8deg]">
              OPEN
              <br />
              TO WORK!
            </span>
          </div>

          <Reveal delay={200} rotate={1.5}>
            <div
              ref={cardRef}
              onMouseMove={onTilt}
              onMouseLeave={offTilt}
              className="relative bg-panel border-[3px] border-ink shadow-[12px_12px_0_#ff2e7e] will-change-transform"
              style={{ transition: "transform 0.35s cubic-bezier(0.16,1,0.3,1)" }}
              data-hover
            >
              <div className="flex items-center justify-between bg-volt border-b-[3px] border-ink px-4 py-2">
                <span className="font-display text-xl tracking-wide text-ink">CHARACTER SELECT</span>
                <span className="font-mono2 text-[10px] font-bold tracking-[0.25em] text-ink">
                  P1 ▸ READY
                </span>
              </div>

              <div className="relative halftone bg-panel2 border-b-[3px] border-ink overflow-hidden">
                <img
                  src="/images/avatar.png"
                  alt="Comic portrait of Kira Volt, cyberpunk UI developer with pink hair and yellow goggles"
                  className="w-full h-72 md:h-80 object-cover object-top"
                />
                <div className="scan-band" aria-hidden="true" />
                <span className="absolute top-3 left-3 font-mono2 text-[9px] font-bold tracking-[0.2em] text-ink bg-acid border-2 border-ink px-1.5 py-0.5">
                  SCAN 100%
                </span>
                <span className="absolute bottom-3 right-3 font-mono2 text-[9px] font-bold tracking-[0.2em] text-acid blink">
                  ● REC
                </span>
              </div>

              <div className="p-5">
                <div className="flex items-baseline justify-between gap-3">
                  <h2 className="font-display text-4xl text-paper tracking-wide">KIRA VOLT</h2>
                  <span className="font-mono2 text-[10px] font-bold text-ink bg-punch border-2 border-ink px-1.5 py-0.5">
                    LV.27
                  </span>
                </div>
                <p className="font-mono2 text-[11px] tracking-[0.22em] text-mute mt-1 mb-5">
                  CLASS: UI ENGINEER — NEO-KYOTO
                </p>

                <ul className="space-y-3">
                  {MINI_STATS.map((s, i) => (
                    <li key={s.label}>
                      <div className="flex justify-between font-mono2 text-[10px] font-bold tracking-[0.2em] mb-1">
                        <span className="text-paper">{s.label}</span>
                        <span style={{ color: s.color }}>{s.value}</span>
                      </div>
                      <div className="h-4 border-2 border-ink bg-void overflow-hidden">
                        <div
                          className="h-full stripes-anim border-r-2 border-ink transition-[width] duration-1000 ease-out"
                          style={{
                            width: statsIn ? `${s.value}%` : "0%",
                            background: s.color,
                            transitionDelay: `${300 + i * 120}ms`,
                          }}
                        />
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 pt-4 border-t-2 border-panel2 flex items-center justify-between gap-3">
                  <div
                    className="h-6 w-28 border-2 border-ink"
                    style={{
                      background:
                        "repeating-linear-gradient(90deg,#f4ecdd 0 2px,#05030a 2px 4px,#f4ecdd 4px 7px,#05030a 7px 8px,#f4ecdd 8px 12px,#05030a 12px 15px)",
                    }}
                    aria-hidden="true"
                  />
                  <span className="font-mono2 text-[9px] tracking-[0.2em] text-mute">
                    ID: KV-2077-NK
                  </span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
