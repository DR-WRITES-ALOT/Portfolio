import { CSSProperties, ReactNode } from "react";
import { useInView } from "../lib/hooks";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  rotate?: number;
  className?: string;
  threshold?: number;
};

export default function Reveal({
  children,
  delay = 0,
  rotate = 0,
  className = "",
  threshold = 0.15,
}: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>(threshold);
  const style = {
    transitionDelay: `${delay}ms`,
    "--rv-rot": `${rotate}deg`,
  } as CSSProperties;
  return (
    <div ref={ref} className={`reveal ${inView ? "in" : ""} ${className}`} style={style}>
      {children}
    </div>
  );
}
