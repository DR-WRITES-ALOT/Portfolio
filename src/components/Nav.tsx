import { useState } from "react";
import Magnetic from "./Magnetic";

const LINKS = [
  { label: "ORIGIN", href: "#origin" },
  { label: "LOADOUT", href: "#loadout" },
  { label: "MISSIONS", href: "#missions" },
  { label: "MOVES", href: "#moves" },
  { label: "SIGNAL", href: "#signal" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-40 bg-void/85 backdrop-blur-sm border-b-[3px] border-ink">
        <div className="max-w-7xl mx-auto px-5 h-16 flex items-center justify-between gap-4">
          <Magnetic strength={0.25}>
            <a href="#top" className="flex items-center gap-3 group" data-hover>
              <span className="font-display text-2xl leading-none bg-volt text-ink border-[3px] border-ink px-2.5 py-1 -rotate-3 shadow-[4px_4px_0_#05030a] transition-transform duration-200 group-hover:rotate-3">
                DR!
              </span>
              <span className="hidden sm:block font-mono2 text-xs tracking-[0.3em] text-paper">
                DR-WRITES<span className="text-punch">-ALOT</span>
              </span>
            </a>
          </Magnetic>

          <nav className="hidden lg:flex items-center gap-7">
            {LINKS.map((l) => (
              <Magnetic key={l.href} strength={0.4}>
                <a
                  href={l.href}
                  data-hover
                  className="group relative font-mono2 text-[11px] font-bold tracking-[0.28em] text-mute hover:text-volt transition-colors duration-200"
                >
                  {l.label}
                  <span className="absolute -bottom-1.5 left-0 h-[3px] w-0 bg-volt transition-all duration-300 ease-out group-hover:w-full" />
                </a>
              </Magnetic>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <span className="hidden md:flex items-center gap-2 font-mono2 text-[10px] tracking-[0.2em] text-mute border-2 border-panel2 px-2.5 py-1.5">
              <span className="dot-live w-2 h-2 rounded-full bg-live inline-block" />
              OPEN&nbsp;FOR&nbsp;Q3
            </span>
            <Magnetic strength={0.35} className="hidden sm:inline-block">
              <a href="#signal" data-hover className="btn-comic bg-punch text-paper text-lg px-4 py-1.5">
                HIRE ME
              </a>
            </Magnetic>
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
              data-hover
              className="lg:hidden btn-comic bg-volt text-ink w-11 h-11 !p-0"
            >
              <svg width="20" height="16" viewBox="0 0 20 16" fill="none" aria-hidden="true">
                {open ? (
                  <path d="M2 2 L18 14 M18 2 L2 14" stroke="currentColor" strokeWidth="3.2" strokeLinecap="square" />
                ) : (
                  <path d="M1 2.5 H19 M1 8 H13 M1 13.5 H19" stroke="currentColor" strokeWidth="3.2" strokeLinecap="square" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* mobile menu */}
      <div
        className={`fixed inset-0 z-30 lg:hidden bg-void halftone transition-all duration-300 ease-out ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="h-full pt-28 px-8 flex flex-col gap-2">
          {LINKS.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`font-display text-6xl leading-tight text-paper hover:text-volt transition-all duration-300 border-b-[3px] border-panel2 py-3 flex items-baseline gap-4 ${
                open ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
              }`}
              style={{ transitionDelay: open ? `${80 + i * 60}ms` : "0ms" }}
            >
              <span className="font-mono2 text-xs text-punch">0{i + 1}</span>
              {l.label}
            </a>
          ))}
          <p className="mt-8 font-mono2 text-xs tracking-[0.25em] text-mute">
            CHENNAI <span className="text-volt">✦</span> UTC+5:30{" "}
            <span className="text-volt">✦</span> PORTFOLIO v1.0
          </p>
        </div>
      </div>
    </>
  );
}
