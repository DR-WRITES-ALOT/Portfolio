import { useState } from "react";
import Magnetic from "./Magnetic";
import Reveal from "./Reveal";

const EMAIL = "sreejithsh09@gmail.com";

const SOCIALS = [
  {
    label: "GITHUB",
    href: "https://github.com/DR-WRITES-ALOT",
    icon: (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
        <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55v-2.15c-3.2.7-3.87-1.37-3.87-1.37-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.69 5.38-5.25 5.67.41.35.78 1.05.78 2.12v3.14c0 .3.21.66.8.55A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
      </svg>
    ),
  },
  {
    label: "LINKEDIN",
    href: "https://www.linkedin.com/in/sreejith-s-h-810803243/",
    icon: (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
        <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
      </svg>
    ),
  },
];

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section id="signal" className="relative scroll-mt-24 pt-20 md:pt-28 overflow-hidden">
      <div className="absolute inset-0 cyber-grid pointer-events-none" aria-hidden="true" />
      <div className="absolute -bottom-32 -left-24 w-96 h-96 rounded-full halftone pointer-events-none" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-5 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-7">
          <Reveal>
            <p className="font-mono2 text-[11px] font-bold tracking-[0.3em] text-punch mb-5">
              // 06 — SEND A SIGNAL
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="font-display leading-[0.88] tracking-wide">
              <span className="block comic-title text-6xl sm:text-8xl text-paper" style={{ "--ts": "#ff2e7e" } as React.CSSProperties}>
                GOT AN IDEA?
              </span>
              <span className="block comic-title text-6xl sm:text-8xl text-volt mt-2" style={{ "--ts": "#2be8ff" } as React.CSSProperties}>
                LET'S BUILD SOMETHING.
              </span>
            </h2>
          </Reveal>
          <Reveal delay={180}>
            <p className="mt-7 max-w-xl text-mute text-base md:text-lg leading-relaxed">
              Open for <span className="text-volt font-semibold">collabs &amp; open source</span> — a build, a
              game jam, or an idea that deserves a sketch. I'm a CSE student at VIT Chennai and I usually
              reply within 24 hours.
            </p>
          </Reveal>

          <Reveal delay={280}>
            <div className="mt-9 flex flex-wrap items-center gap-6">
              <Magnetic strength={0.28}>
                <a
                  href={`mailto:${EMAIL}?subject=${encodeURIComponent("Let's build something — found you via your portfolio")}`}
                  data-hover
                  className="btn-comic shadow-pink bg-volt text-ink text-2xl md:text-3xl px-9 py-4"
                >
                  SAY HELLO
                  <svg width="26" height="22" viewBox="0 0 26 22" fill="none" aria-hidden="true">
                    <path d="M2 19 L13 3 L17 9 L24 2 L21 12 L15 11 L13 17 Z" fill="#ff2e7e" stroke="#05030a" strokeWidth="2" strokeLinejoin="round" />
                  </svg>
                </a>
              </Magnetic>
              <Magnetic strength={0.35}>
                <button onClick={copyEmail} data-hover className="btn-comic bg-void text-acid text-base px-5 py-2.5">
                  {copied ? "COPIED! ✔" : EMAIL}
                </button>
              </Magnetic>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-5">
          <Reveal delay={200} rotate={1}>
            <div className="bg-panel border-[3px] border-ink shadow-[10px_10px_0_#ffe600]">
              <div className="flex items-center justify-between bg-ember border-b-[3px] border-ink px-5 py-2.5">
                <span className="font-display text-xl tracking-wide text-ink">STATUS PANEL</span>
                <span className="font-mono2 text-[10px] font-bold tracking-[0.2em] text-ink">LIVE</span>
              </div>
              <dl className="divide-y-2 divide-panel2 font-mono2 text-xs">
                {[
                  ["LOCATION", <>CHENNAI, INDIA <span className="text-mute">(UTC+5:30)</span></>],
                  ["RESPONSE TIME", <>&lt; 24 HOURS</>],
                  [
                    "AVAILABILITY",
                    <>
                      <span className="dot-live inline-block w-2 h-2 rounded-full bg-live mr-2 align-middle" />
                      COLLABS · OPEN SOURCE
                    </>,
                  ],
                  ["NOW SHIPPING", <span className="text-punch">SEM 3 — B.TECH CSE</span>],
                  ["CURRENT OBSESSION", <span className="text-ember">UNITY (C#)</span>],
                ].map(([k, v]) => (
                  <div key={k as string} className="flex items-center justify-between gap-4 px-5 py-3.5">
                    <dt className="tracking-[0.2em] text-mute">{k}</dt>
                    <dd className="font-bold tracking-wider text-paper text-right">{v}</dd>
                  </div>
                ))}
              </dl>
              <div className="border-t-[3px] border-ink p-5">
                <p className="font-mono2 text-[10px] tracking-[0.25em] text-mute mb-3">FIND ME IN THE</p>
                <div className="flex flex-wrap gap-2.5">
                  {SOCIALS.map((s) => (
                    <Magnetic key={s.label} strength={0.45}>
                      <a
                        href={s.href}
                        target="_blank"
                        rel="noreferrer"
                        data-hover
                        className="flex items-center gap-2 font-mono2 text-[10px] font-bold tracking-[0.15em] text-paper bg-void border-2 border-ink px-3 py-2 shadow-[4px_4px_0_#05030a] hover:bg-punch transition-colors duration-150"
                      >
                        {s.icon}
                        {s.label}
                      </a>
                    </Magnetic>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* footer */}
      <footer className="relative mt-20 md:mt-28 border-t-[3px] border-ink bg-void/80">
        <div className="max-w-7xl mx-auto px-5 py-7 flex flex-wrap items-center justify-between gap-5">
          <p className="font-mono2 text-[10px] tracking-[0.22em] text-mute">
            © 2026 SREEJITH S H — <span className="text-volt">HANDCRAFTED</span>, NO TEMPLATES WERE HARMED.
          </p>
          <p className="font-mono2 text-[10px] tracking-[0.22em] text-mute hidden md:block">
            DR-WRITES-ALOT <span className="text-punch">★</span> ONLINE
          </p>
          <Magnetic strength={0.4}>
            <a
              href="#top"
              data-hover
              aria-label="Back to top"
              className="btn-comic bg-volt text-ink w-12 h-12 !p-0 text-2xl leading-none"
            >
              ↑
            </a>
          </Magnetic>
        </div>
      </footer>
    </section>
  );
}
