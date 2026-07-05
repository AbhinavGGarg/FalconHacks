import { Code2, Rocket, Users } from "lucide-react";
import Reveal from "./Reveal";
import SectionTag from "./SectionTag";

const CARDS = [
  {
    icon: Code2,
    title: "Build",
    copy: "Turn ideas into real projects.",
    detail:
      "One focused day to go from a blank editor to something you can demo.",
  },
  {
    icon: Users,
    title: "Meet your people",
    copy: "Find teammates, mentors, and other students who love building.",
    detail: "The best part of a hackathon is who you end up building it with.",
  },
  {
    icon: Rocket,
    title: "Take the leap",
    copy: "Pitch what you made, compete, and put yourself out there.",
    detail: "Every big project starts with one nervous first demo.",
  },
];

export default function Why() {
  return (
    <section id="about" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <Reveal>
          <SectionTag>Why Falcon Hacks</SectionTag>
        </Reveal>

        <div className="mt-8 grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-end">
          <Reveal delay={0.08}>
            <h2 className="font-display text-5xl uppercase leading-[0.95] sm:text-7xl">
              One day.
              <br />
              <span className="text-royal">A hundred possibilities.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="max-w-[440px] text-base leading-relaxed text-muted sm:text-lg lg:justify-self-end">
              Falcon Hacks is where curiosity turns into projects. Come with an
              idea, find a team, learn something new, and leave with something
              you built yourself.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {CARDS.map((card, i) => (
            <Reveal key={card.title} delay={0.1 + i * 0.1}>
              <article className="group relative h-full border border-hairline bg-panel p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-royal/50 hover:shadow-[0_18px_50px_-24px_rgba(62,123,255,0.45)] sm:p-9">
                {/* Blueprint corner brackets, revealed on hover */}
                <span
                  className="absolute left-0 top-0 h-4 w-4 border-l-2 border-t-2 border-royal opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  aria-hidden
                />
                <span
                  className="absolute bottom-0 right-0 h-4 w-4 border-b-2 border-r-2 border-royal opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  aria-hidden
                />

                <div className="flex h-14 w-14 items-center justify-center border border-hairline text-royal transition-all duration-300 group-hover:bg-royal group-hover:text-void">
                  <card.icon className="h-6 w-6" aria-hidden />
                </div>

                <h3 className="mt-7 font-display text-3xl uppercase tracking-[0.02em] text-bone">
                  {card.title}
                </h3>
                <p className="mt-3 text-[15px] font-medium leading-relaxed text-bone/90">
                  {card.copy}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {card.detail}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
