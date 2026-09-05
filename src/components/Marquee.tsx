type MarqueeProps = {
  items: string[];
  className?: string;
  reverse?: boolean;
  speed?: number;
  star?: string;
};

export default function Marquee({
  items,
  className = "",
  reverse = false,
  speed = 26,
  star = "✷",
}: MarqueeProps) {
  const half = [...items, ...items, ...items];
  return (
    <div className={`marquee border-y-[3px] border-ink ${className}`}>
      <div
        className={`marquee-track ${reverse ? "reverse" : ""}`}
        style={{ "--speed": `${speed}s` } as React.CSSProperties}
      >
        {[0, 1].map((copy) => (
          <div key={copy} className="flex shrink-0" aria-hidden={copy === 1}>
            {half.map((it, i) => (
              <span key={i} className="flex items-center">
                <span className="font-display text-2xl md:text-3xl tracking-wide whitespace-nowrap px-5 py-2.5">
                  {it}
                </span>
                <span className="font-display text-2xl opacity-70" aria-hidden="true">
                  {star}
                </span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
