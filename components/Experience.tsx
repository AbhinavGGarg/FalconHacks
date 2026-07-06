import Reveal from "./Reveal";
import SectionTag from "./SectionTag";

/* Numbered because the day genuinely runs in this order. */
const ARC = [
  {
    title: "Team up",
    copy: "Meet other builders, swap ideas, and find the crew you’ll spend the day with.",
  },
  {
    title: "Build all day",
    copy: "Heads-down time to make something real — at whatever pace fits you.",
  },
  {
    title: "Learn from mentors",
    copy: "Get unstuck, pick up new tools, and ask the questions you can’t ask a search bar.",
  },
  {
    title: "Share your work",
    copy: "Put your project in front of the room and see what everyone else dreamed up.",
  },
  {
    title: "Celebrate what you made",
    copy: "One day, something you built, and people to cheer for it with you.",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative scroll-mt-24 overflow-hidden border-t border-hairline py-24 sm:py-32"
    >
      <div className="drift" style={{ top: "18%", animationDelay: "-8s" }} aria-hidden />
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <Reveal>
          <SectionTag>What to expect</SectionTag>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-8 max-w-[900px] font-display text-5xl uppercase leading-[0.95] sm:text-7xl">
            Your next favorite project{" "}
            <span className="text-stroke-royal">starts here.</span>
          </h2>
        </Reveal>

        <div className="mt-16 border-t border-hairline">
          {ARC.map((step, i) => (
            <Reveal key={step.title} delay={0.05 * i}>
              <div
                className="group grid grid-cols-[auto_1fr] items-baseline gap-6 border-b border-hairline py-8 transition-colors duration-300 hover:bg-panel/60 sm:gap-10 sm:py-9"
                style={{ paddingLeft: `min(${i * 4}%, ${i * 44}px)` }}
              >
                <span
                  className="font-mono text-sm font-semibold tracking-widest text-gold/70 transition-colors duration-300 group-hover:text-gold sm:text-base"
                  aria-hidden
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex flex-col gap-2 pr-4 lg:flex-row lg:items-baseline lg:justify-between lg:gap-12">
                  <h3 className="font-display text-3xl uppercase tracking-[0.02em] text-bone transition-transform duration-300 group-hover:translate-x-1.5 sm:text-5xl">
                    {step.title}
                  </h3>
                  <p className="max-w-[420px] text-sm leading-relaxed text-muted sm:text-base lg:text-right">
                    {step.copy}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <p className="mt-10 inline-flex items-center gap-3 border border-hairline px-5 py-3 font-mono text-[11px] font-medium uppercase tracking-[0.28em] text-muted">
            <span className="blink inline-block h-2 w-2 rounded-full bg-gold" aria-hidden />
            Full agenda coming soon
          </p>
        </Reveal>
      </div>
    </section>
  );
}
