import FalconMark from "./FalconMark";
import Reveal from "./Reveal";

const TAGS = [
  "High schoolers & below",
  "First-time friendly",
  "Student-run",
  "Bay Area builders",
  "Teams welcome",
  "Learn by building",
];

/* The one inverted section — bone paper, ink type. */
export default function OpenToAll() {
  return (
    <section className="relative overflow-hidden bg-bone py-24 text-void sm:py-32">
      <FalconMark
        mono
        className="pointer-events-none absolute -right-16 -top-20 h-[420px] w-[420px] text-void/[0.05] sm:h-[560px] sm:w-[560px]"
      />

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8">
        <Reveal>
          <h2 className="font-display text-[clamp(3.2rem,9vw,8rem)] uppercase leading-[0.92]">
            No experience?
            <br />
            <span className="text-royal">Still come.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.12}>
          <p className="mt-8 max-w-[620px] text-lg leading-relaxed text-void/75 sm:text-xl">
            You do not need to be an expert coder to belong at Falcon Hacks.
            Bring your curiosity, an idea, a friend, or nothing but the
            willingness to try. If you’re in high school or younger, you’re in
            — and it won’t cost you a thing.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <ul className="mt-10 flex flex-wrap gap-3">
            <li className="flex items-center gap-2.5 rounded-full bg-void px-5 py-2.5 font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-bone">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-gold" aria-hidden />
              Free to attend
            </li>
            {TAGS.map((tag) => (
              <li
                key={tag}
                className="rounded-full border border-void/25 px-5 py-2.5 font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-void/80 transition-colors duration-200 hover:border-royal hover:text-royal"
              >
                {tag}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
