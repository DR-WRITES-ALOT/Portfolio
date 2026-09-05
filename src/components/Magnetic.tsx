import { ReactNode, useEffect, useRef } from "react";
import { useReducedMotion } from "../lib/hooks";

type MagneticProps = {
  children: ReactNode;
  strength?: number;
  className?: string;
  disabled?: boolean;
};

/**
 * Wraps children in a magnetic field: the inner content leans toward
 * the pointer and springs back on leave. No-op for touch / reduced motion.
 */
export default function Magnetic({
  children,
  strength = 0.32,
  className = "",
  disabled = false,
}: MagneticProps) {
  const outer = useRef<HTMLSpanElement | null>(null);
  const inner = useRef<HTMLDivElement | null>(null);
  const raf = useRef(0);
  const target = useRef({ x: 0, y: 0 });
  const pos = useRef({ x: 0, y: 0 });
  const reduced = useReducedMotion();

  useEffect(() => {
    const el = outer.current;
    const box = inner.current;
    if (!el || !box) return;
    if (reduced || disabled) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const loop = () => {
      pos.current.x += (target.current.x - pos.current.x) * 0.16;
      pos.current.y += (target.current.y - pos.current.y) * 0.16;
      if (
        Math.abs(pos.current.x - target.current.x) < 0.05 &&
        Math.abs(pos.current.y - target.current.y) < 0.05 &&
        target.current.x === 0
      ) {
        box.style.transform = "translate3d(0,0,0)";
      } else {
        box.style.transform = `translate3d(${pos.current.x.toFixed(2)}px, ${pos.current.y.toFixed(
          2
        )}px, 0)`;
      }
      raf.current = requestAnimationFrame(loop);
    };

    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      target.current = {
        x: (e.clientX - (r.left + r.width / 2)) * strength,
        y: (e.clientY - (r.top + r.height / 2)) * strength,
      };
    };
    const onLeave = () => {
      target.current = { x: 0, y: 0 };
    };

    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);
    raf.current = requestAnimationFrame(loop);

    return () => {
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
      cancelAnimationFrame(raf.current);
      if (box) box.style.transform = "translate3d(0,0,0)";
    };
  }, [reduced, disabled, strength]);

  return (
    <span ref={outer} className={`inline-block ${className}`}>
      <div ref={inner} className="inline-block will-change-transform">
        {children}
      </div>
    </span>
  );
}
