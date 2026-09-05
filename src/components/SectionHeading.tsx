import { CSSProperties } from "react";
import Reveal from "./Reveal";

type SectionHeadingProps = {
  index: string;
  title: string;
  tag: string;
  accent?: string;
};

export default function SectionHeading({
  index,
  title,
  tag,
  accent = "#ff2e7e",
}: SectionHeadingProps) {
  return (
    <Reveal className="mb-12 md:mb-16">
      <div className="flex flex-wrap items-center gap-3 mb-4">
        <span className="font-mono2 text-xs font-bold tracking-[0.25em] text-ink bg-volt border-2 border-ink px-2.5 py-1 shadow-[3px_3px_0_#05030a]">
          {index}
        </span>
        <span className="font-mono2 text-xs tracking-[0.25em] text-mute uppercase">
          {tag}
        </span>
        <span className="hidden sm:block h-[3px] flex-1 max-w-40 bg-panel2" />
      </div>
      <h2
        className="comic-title font-display leading-[0.9] text-5xl sm:text-7xl lg:text-8xl tracking-wide"
        style={{ "--ts": accent } as CSSProperties}
      >
        {title}
      </h2>
    </Reveal>
  );
}
