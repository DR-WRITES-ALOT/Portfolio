import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

type Quote = {
  text: React.ReactNode;
  name: string;
  role: string;
  tilt: number;
  offsetY: string;
  shadow: string;
  tail: "left" | "right";
};

const QUOTES: Quote[] = [
  {
    text: (
      <>
        Kira shipped a build so smooth our churn dropped{" "}
        <span className="bg-volt px-1 border border-ink">overnight</span>. The dashboard
        feels like a game nobody wants to put down.
      </>
    ),
    name: "JUNO PARKS",
    role: "PRODUCT LEAD @ NEON ARCADE",
    tilt: -2,
    offsetY: "lg:translate-y-0",
    shadow: "shadow-[8px_8px_0_#ff2e7e]",
    tail: "left",
  },
  {
    text: (
      <>
        Every agency promised “wow”. Kira delivered{" "}
        <span className="bg-punch text-paper px-1 border border-ink">holy crap</span> — in
        six weeks, on budget, with zero jank.
      </>
    ),
    name: "REN OKABE",
    role: "FOUNDER @ KAIJU DASH",
    tilt: 1.5,
    offsetY: "lg:translate-y-8",
    shadow: "shadow-[8px_8px_0_#ffe600]",
    tail: "right",
  },
  {
    text: (
      <>
        Our brand finally sounds as loud as it looks. Motion, punch,{" "}
        <span className="bg-acid px-1 border border-ink">60fps everywhere</span>. 10/10,
        would combo again.
      </>
    ),
    name: "MARA VEX",
    role: "CMO @ SYNTHWAVE.FM",
    tilt: -1,
    offsetY: "lg:-translate-y-2",
    shadow: "shadow-[8px_8px_0_#2be8ff]",
    tail: "left",
  },
];

export default function Testimonials() {
  return (
    <section className="relative scroll-mt-24 py-20 md:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5">
        <SectionHeading index="05" title="STREET INTEL" tag="// transmissions from clients" accent="#2be8ff" />

        <div className="grid md:grid-cols-3 gap-8 md:gap-7 lg:gap-9">
          {QUOTES.map((q, i) => (
            <Reveal key={q.name} delay={i * 130} rotate={q.tilt} className={q.offsetY}>
              <figure
                className={`relative bg-paper text-ink border-[3px] border-ink ${q.shadow} p-6 pb-8 transition-transform duration-300 hover:-translate-y-1.5 hover:rotate-0`}
              >
                <span
                  className="absolute -top-4 left-5 font-display text-xl bg-void text-volt border-2 border-ink px-2 py-0.5 -rotate-2"
                  aria-hidden="true"
                >
                  INTEL #{String(i + 1).padStart(2, "0")}
                </span>
                <blockquote className="text-base md:text-lg font-medium leading-snug mt-2">
                  “{q.text}”
                </blockquote>
                <figcaption className="mt-5 pt-4 border-t-2 border-ink/15">
                  <p className="font-mono2 text-[10px] font-bold tracking-[0.2em]">{q.name}</p>
                  <p className="font-mono2 text-[9px] tracking-[0.2em] text-ink/60 mt-1">{q.role}</p>
                  <p className="font-display text-lg text-ember tracking-widest mt-2" aria-label="5 out of 5 stars">
                    ★★★★★
                  </p>
                </figcaption>
                {/* speech tail */}
                <span
                  className={`absolute -bottom-3 w-6 h-6 bg-paper border-b-[3px] border-r-[3px] border-ink rotate-45 ${
                    q.tail === "left" ? "left-10" : "right-10"
                  }`}
                  aria-hidden="true"
                />
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <div className="mt-14 flex flex-wrap items-center justify-center gap-4 font-display text-2xl tracking-wide text-mute">
            <span className="text-punch -rotate-6 inline-block">TRUE!</span>
            <span aria-hidden="true" className="text-volt">✦</span>
            <span className="text-acid rotate-3 inline-block">NO NOTES.</span>
            <span aria-hidden="true" className="text-volt">✦</span>
            <span className="text-volt -rotate-3 inline-block">SHIP IT AGAIN.</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
