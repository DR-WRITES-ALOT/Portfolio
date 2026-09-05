import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

type Quote = {
  text: string;
  name: string;
  role: string;
  tilt: number;
  offsetY: string;
  shadow: string;
  tail: "left" | "right";
};

const QUOTES: Quote[] = [
  {
    text: "He said he'd help me with a small web project. Next week my entire photo collection lives in a desktop vault he wrote over the weekend. I did not ask for this level of organisation.",
    name: "THE ANNOYING ROOMMATE",
    role: "UNOFFICIAL QA DEPARTMENT",
    tilt: -2,
    offsetY: "lg:translate-y-0",
    shadow: "shadow-[8px_8px_0_#ff2e7e]",
    tail: "left",
  },
  {
    text: "Asked for “a quick game”. Got a full obby where you hunt for a key to capture an orange man. It has funny characters and zero explanation. I've played it five times.",
    name: "A SUSPICIOUSLY SUPPORTIVE FRIEND",
    role: "FIRST PLAYTESTER",
    tilt: 1.5,
    offsetY: "lg:translate-y-8",
    shadow: "shadow-[8px_8px_0_#ffe600]",
    tail: "right",
  },
  {
    text: "He paused mid-hackathon to help my granny cross the road, then went back and finished the build like nothing happened. Granny now asks about him daily.",
    name: "GRANNY (PERSONALLY)",
    role: "CIVILIAN TESTIMONIAL",
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
        <SectionHeading index="05" title="STREET INTEL" tag="// word on the street*" accent="#2be8ff" />

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
                  TIP #{String(i + 1).padStart(2, "0")}
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
          <p className="mt-8 text-center font-mono2 text-[9px] md:text-[10px] tracking-[0.25em] text-mute">
            * 100% REAL IN SPIRIT. NAMES CHANGED TO PROTECT THE INNOCENT, THE GUILTY, AND THE ORANGE MAN.
          </p>
        </Reveal>

        <Reveal delay={200}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4 font-display text-2xl tracking-wide text-mute">
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
