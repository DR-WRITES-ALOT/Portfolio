import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "../lib/hooks";

type Burst = { id: number; x: number; y: number; word: string };

const WORDS = ["POW!", "ZAP!", "BAM!", "ZOK!", "BIFF!", "BOOM!"];
const HOVER_SEL = "a, button, [data-hover], input, textarea, select, label";

/** Custom comic cursor: fast volt dot + lagging punch ring + on-click burst words. */
export default function Cursor() {
  const reduced = useReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const [bursts, setBursts] = useState<Burst[]>([]);
  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);
  const idRef = useRef(0);

  useEffect(() => {
    setEnabled(window.matchMedia("(pointer: fine)").matches);
  }, []);

  useEffect(() => {
    if (!enabled || reduced) return;
    document.documentElement.classList.add("has-cursor");

    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let dx = mx;
    let dy = my;
    let rx = mx;
    let ry = my;
    let scale = 1;
    let hover = false;
    let raf = 0;

    const move = (e: PointerEvent) => {
      mx = e.clientX;
      my = e.clientY;
      const t = e.target as HTMLElement | null;
      hover = !!t && !!t.closest && !!t.closest(HOVER_SEL);
    };

    const down = (e: PointerEvent) => {
      const id = ++idRef.current;
      const word = WORDS[Math.floor(Math.random() * WORDS.length)];
      setBursts((b) => [...b.slice(-4), { id, x: e.clientX, y: e.clientY, word }]);
      window.setTimeout(() => {
        setBursts((b) => b.filter((x) => x.id !== id));
      }, 680);
    };

    const loop = () => {
      dx += (mx - dx) * 0.6;
      dy += (my - dy) * 0.6;
      rx += (mx - rx) * 0.16;
      ry += (my - ry) * 0.16;
      scale += ((hover ? 1.9 : 1) - scale) * 0.18;
      if (dotRef.current)
        dotRef.current.style.transform = `translate3d(${dx}px, ${dy}px, 0) translate(-50%,-50%)`;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${rx}px, ${ry}px, 0) translate(-50%,-50%) scale(${scale.toFixed(3)})`;
        ringRef.current.style.borderColor = hover ? "#ffe600" : "#ff2e7e";
        ringRef.current.style.background = hover ? "rgba(255,230,0,0.08)" : "transparent";
      }
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("pointerdown", down);
    raf = requestAnimationFrame(loop);

    return () => {
      document.documentElement.classList.remove("has-cursor");
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerdown", down);
      cancelAnimationFrame(raf);
    };
  }, [enabled, reduced]);

  if (!enabled || reduced) return null;

  return (
    <>
      <div
        ref={ringRef}
        aria-hidden="true"
        className="fixed top-0 left-0 z-[120] pointer-events-none rounded-full border-2"
        style={{ width: 38, height: 38, borderColor: "#ff2e7e" }}
      />
      <div
        ref={dotRef}
        aria-hidden="true"
        className="fixed top-0 left-0 z-[121] pointer-events-none rounded-full"
        style={{
          width: 9,
          height: 9,
          background: "#ffe600",
          border: "2px solid #05030a",
        }}
      />
      {bursts.map((b) => (
        <span key={b.id} className="burst" style={{ left: b.x, top: b.y }}>
          {b.word}
        </span>
      ))}
    </>
  );
}
