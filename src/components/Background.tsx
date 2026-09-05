import { useEffect, useRef } from "react";
import { useReducedMotion } from "../lib/hooks";

type Shape = {
  kind: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  rot: number;
  vr: number;
  color: string;
  depth: number;
};

const COLORS = ["#ffe600", "#ff7a18", "#ff2e7e", "#2be8ff"];

/** Full-viewport canvas of drifting neon comic glyphs with pointer parallax. */
export default function Background() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = 0;
    let h = 0;
    let raf = 0;
    let mx = 0.5;
    let my = 0.5;
    const DPR = Math.min(2, window.devicePixelRatio || 1);
    const shapes: Shape[] = [];

    const resize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = Math.floor(w * DPR);
      canvas.height = Math.floor(h * DPR);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    };

    const seed = () => {
      shapes.length = 0;
      const n = Math.min(30, Math.max(14, Math.floor((w * h) / 58000)));
      for (let i = 0; i < n; i += 1) {
        shapes.push({
          kind: Math.floor(Math.random() * 6),
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.34,
          vy: (Math.random() - 0.5) * 0.34,
          r: 8 + Math.random() * 20,
          rot: Math.random() * Math.PI * 2,
          vr: (Math.random() - 0.5) * 0.012,
          color: COLORS[Math.floor(Math.random() * COLORS.length)],
          depth: 0.3 + Math.random() * 0.7,
        });
      }
    };

    const drawShape = (s: Shape, ox: number, oy: number) => {
      ctx.save();
      ctx.translate(s.x + ox * s.depth, s.y + oy * s.depth);
      ctx.rotate(s.rot);
      ctx.globalAlpha = 0.16 + 0.42 * s.depth;
      ctx.strokeStyle = s.color;
      ctx.fillStyle = s.color;
      ctx.lineWidth = 2;
      ctx.shadowColor = s.color;
      ctx.shadowBlur = 9;
      const r = s.r;
      switch (s.kind) {
        case 0: // plus
          ctx.beginPath();
          ctx.moveTo(-r, 0);
          ctx.lineTo(r, 0);
          ctx.moveTo(0, -r);
          ctx.lineTo(0, r);
          ctx.stroke();
          break;
        case 1: // triangle
          ctx.beginPath();
          ctx.moveTo(0, -r);
          ctx.lineTo(r * 0.9, r * 0.7);
          ctx.lineTo(-r * 0.9, r * 0.7);
          ctx.closePath();
          ctx.stroke();
          break;
        case 2: // ring
          ctx.beginPath();
          ctx.arc(0, 0, r, 0, Math.PI * 2);
          ctx.stroke();
          break;
        case 3: {
          // 4-point sparkle
          ctx.beginPath();
          for (let i = 0; i < 8; i += 1) {
            const rr = i % 2 === 0 ? r : r * 0.36;
            const a = (Math.PI / 4) * i - Math.PI / 2;
            ctx.lineTo(Math.cos(a) * rr, Math.sin(a) * rr);
          }
          ctx.closePath();
          ctx.fill();
          break;
        }
        case 4: // dot
          ctx.beginPath();
          ctx.arc(0, 0, r * 0.26, 0, Math.PI * 2);
          ctx.fill();
          break;
        default:
          // zigzag
          ctx.beginPath();
          ctx.moveTo(-r, r * 0.4);
          ctx.lineTo(-r * 0.33, -r * 0.4);
          ctx.lineTo(r * 0.33, r * 0.4);
          ctx.lineTo(r, -r * 0.4);
          ctx.stroke();
      }
      ctx.restore();
    };

    const render = () => {
      ctx.clearRect(0, 0, w, h);
      const ox = (mx - 0.5) * 44;
      const oy = (my - 0.5) * 44;
      for (const s of shapes) drawShape(s, ox, oy);
    };

    const tick = () => {
      for (const s of shapes) {
        s.x += s.vx;
        s.y += s.vy;
        s.rot += s.vr;
        const m = 70;
        if (s.x < -m) s.x = w + m;
        if (s.x > w + m) s.x = -m;
        if (s.y < -m) s.y = h + m;
        if (s.y > h + m) s.y = -m;
      }
      render();
      raf = requestAnimationFrame(tick);
    };

    const onMove = (e: PointerEvent) => {
      mx = e.clientX / Math.max(1, w);
      my = e.clientY / Math.max(1, h);
    };
    const onVis = () => {
      cancelAnimationFrame(raf);
      if (!document.hidden && !reduced) raf = requestAnimationFrame(tick);
    };
    const onResize = () => {
      resize();
      seed();
      if (reduced) render();
    };

    resize();
    seed();
    if (reduced) {
      render();
    } else {
      raf = requestAnimationFrame(tick);
      window.addEventListener("pointermove", onMove);
      document.addEventListener("visibilitychange", onVis);
    }
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("resize", onResize);
      document.removeEventListener("visibilitychange", onVis);
    };
  }, [reduced]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      aria-hidden="true"
    />
  );
}
