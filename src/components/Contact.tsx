import { useState } from "react";
import Magnetic from "./Magnetic";
import Reveal from "./Reveal";

const EMAIL = "hello@kiravolt.dev";

const SOCIALS = [
  {
    label: "GITHUB",
    href: "https://github.com",
    icon: (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
        <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55v-2.15c-3.2.7-3.87-1.37-3.87-1.37-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.69 5.38-5.25 5.67.41.35.78 1.05.78 2.12v3.14c0 .3.21.66.8.55A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
      </svg>
    ),
  },
  {
    label: "DRIBBBLE",
    href: "https://dribbble.com",
    icon: (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
        <path d="M12 24C5.38 24 0 18.62 0 12S5.38 0 12 0s12 5.38 12 12-5.38 12-12 12Zm8.24-6.07c-.4-1.24-1.85-5.53-5.4-6.76 1.36-2.8 1.93-5.23 2.1-6.03a10.2 10.2 0 0 1 3.3 5.8c0 2.7-1.04 5.16-2.75 6.99h2.75Zm-4.9-8.17c-1.92 3.43-4.53 6.34-7.66 8.45 1.76.42 5.37 1.52 9.14.55a10.18 10.18 0 0 0-1.48-9Zm-3.31 9.6c-2.75-.77-4.8-2.6-5.9-5.03 1.2.16 4.3.33 7.3-.66.54 1.1 1.02 2.24 1.4 3.37-1 .3-1.95.45-2.8 2.32Zm-8.3-5.46a10.2 10.2 0 0 1 7.9-9.94c-.9 1.4-2.53 3.5-3.64 6.3-2.5.83-4.56 1.1-6.26 1.2a10.2 10.2 0 0 1 2-6.44A10.2 10.2 0 0 0 1.8 12c0 .46.03.91.09 1.35l1.84-1.44Z" />
      </svg>
    ),
  },
  {
    label: "X",
    href: "https://x.com",
    icon: (
      <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor" aria-hidden="true">
        <path d="M18.9 1.15h3.68l-8.04 9.19L24 22.85h-7.41l-5.8-7.58-6.64 7.58H.47l8.6-9.83L0 1.15h7.59l5.24 6.93 6.07-6.93Zm-1.29 19.5h2.04L6.49 3.24H4.3l13.31 17.41Z" />
      </svg>
    ),
  },
  {
    label: "LINKEDIN",
    href: "https://linkedin.com",
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
                GOT A QUEST?
              </span>
              <span className="block comic-title text-6xl sm:text-8xl text-volt mt-2" style={{ "--ts": "#2be8ff" } as React.CSSProperties}>
                LET'S MAKE IT LOUD.
              </span>
            </h2>
          </Reveal>
          <Reveal delay={180}>
            <p className="mt-7 max-w-xl text-mute text-base md:text-lg leading-relaxed">
              Two quest slots open for <span className="text-volt font-semibold">Q3 2026</span>. Bring a
              brief, a napkin sketch, or a boss you can't beat — I'll answer within 24 hours with a
              plan of attack.
            </p>
          </Reveal>

          <Reveal delay={280}>
            <div className="mt-9 flex flex-wrap items-center gap-6">
              <Magnetic strength={0.28}>
                <a
                  href={`mailto:${EMAIL}?subject=${encodeURIComponent("New quest for Kira Volt")}`}
                  data-hover
                  className="btn-comic shadow-pink bg-volt text-ink text-2xl md:text-3xl px-9 py-4"
                >
                  TRANSMIT MESSAGE
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
                  ["LOCATION", <>NEO-KYOTO <span className="text-mute">(UTC+9)</span></>],
                  ["RESPONSE TIME", <>&lt; 24 HOURS</>],
                  [
                    "AVAILABILITY",
                    <>
                      <span className="dot-live inline-block w-2 h-2 rounded-full bg-live mr-2 align-middle" />
                      2 SLOTS — Q3 2026
                    </>,
                  ],
                  ["NOW SHIPPING", <span className="text-punch">NEON ARCADE v2</span>],
                  ["COFFEE LEVEL", <span className="text-ember">CRITICAL ☕</span>],
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
            © 2026 KIRA VOLT — <span className="text-volt">HANDCRAFTED</span>, NO TEMPLATES WERE HARMED.
          </p>
          <p className="font-mono2 text-[10px] tracking-[0.22em] text-mute hidden md:block">
            ISSUE #27 <span className="text-punch">★</span> PRINTED ON THE INTERNET
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
