import { useCallback, useEffect, useState } from "react";
import Background from "./components/Background";
import Cursor from "./components/Cursor";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Moves from "./components/Moves";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import { useReducedMotion, useScrollProgress } from "./lib/hooks";

function ProgressBar() {
  const p = useScrollProgress();
  return (
    <div
      className="fixed top-0 left-0 z-[60] h-[5px] border-r-2 border-ink"
      style={{
        width: `${(p * 100).toFixed(2)}%`,
        background: "linear-gradient(90deg,#ffe600,#ff7a18,#ff2e7e)",
      }}
      aria-hidden="true"
    />
  );
}

function BootScreen({ onDone }: { onDone: () => void }) {
  const [leaving, setLeaving] = useState(false);
  useEffect(() => {
    const t1 = window.setTimeout(() => setLeaving(true), 1450);
    const t2 = window.setTimeout(onDone, 2000);
    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
    };
  }, [onDone]);
  return (
    <div
      className={`fixed inset-0 z-[200] bg-void grid place-items-center transition-transform duration-500 ease-in ${
        leaving ? "-translate-y-full" : ""
      }`}
      style={{ borderBottom: "3px solid #05030a" }}
      aria-hidden="true"
    >
      <div className="text-center px-6">
        <p className="intro-line font-mono2 text-[11px] font-bold tracking-[0.35em] text-acid" style={{ animationDelay: "0.05s" }}>
          KIRA.VOLT OS — v2.7
        </p>
        <p
          className="intro-line font-display text-7xl md:text-9xl text-volt stroke-ink-4 tracking-wide mt-3"
          style={{ animationDelay: "0.2s" }}
        >
          KIRA VOLT
        </p>
        <div className="intro-line mt-7 h-4 w-64 md:w-80 mx-auto border-2 border-ink bg-panel overflow-hidden" style={{ animationDelay: "0.38s" }}>
          <div className="intro-load h-full stripes-anim bg-volt" />
        </div>
        <p className="intro-line font-mono2 text-[10px] tracking-[0.3em] text-mute mt-5" style={{ animationDelay: "0.5s" }}>
          CALIBRATING NEON <span className="text-live">… OK</span>{" "}
          <span className="text-punch">▮▮▮▮▮</span> READY
        </p>
      </div>
    </div>
  );
}

export default function App() {
  const reduced = useReducedMotion();
  const [boot, setBoot] = useState(
    () => !window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );

  useEffect(() => {
    if (reduced) setBoot(false);
  }, [reduced]);

  const finishBoot = useCallback(() => setBoot(false), []);

  return (
    <div className="relative min-h-screen">
      {/* ambient layers */}
      <Background />
      <div className="fixed inset-0 z-[1] vignette pointer-events-none" aria-hidden="true" />
      <div className="fixed inset-0 z-[55] scanlines opacity-50 pointer-events-none" aria-hidden="true" />
      <div className="fixed inset-0 z-[56] noise opacity-[0.05] pointer-events-none" aria-hidden="true" />

      <Cursor />
      <ProgressBar />
      {boot && !reduced && <BootScreen onDone={finishBoot} />}

      <a
        href="#origin"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[300] btn-comic bg-volt text-ink px-4 py-2 text-sm"
      >
        SKIP TO CONTENT
      </a>

      <Nav />

      <main className="relative z-10">
        <Hero />

        <div className="relative z-10 -rotate-1 scale-[1.02]">
          <Marquee
            items={[
              "REACT",
              "WEBGL",
              "MOTION DESIGN",
              "DESIGN SYSTEMS",
              "CREATIVE CODE",
              "60 FPS OR BUST",
              "TYPESCRIPT",
              "THREE.JS",
            ]}
            className="bg-volt text-ink"
            speed={30}
          />
        </div>
        <div className="relative z-10 rotate-1 scale-[1.02] -mt-2.5">
          <Marquee
            items={[
              "HIRE THE PUNCH",
              "NEO-KYOTO",
              "OPEN FOR Q3",
              "COMMIT & DEPLOY",
              "NO BORING UI",
              "SPLASH-PAGE ENERGY",
            ]}
            className="bg-punch text-paper"
            reverse
            speed={34}
            star="★"
          />
        </div>

        <About />
        <Skills />
        <Projects />
        <Moves />
        <Testimonials />
        <Contact />
      </main>
    </div>
  );
}
