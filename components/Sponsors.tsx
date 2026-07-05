import CtaLink from "./CtaLink";
import FalconMark from "./FalconMark";
import Reveal from "./Reveal";
import SectionTag from "./SectionTag";
import { LINKS } from "@/lib/links";

export default function Sponsors() {
  return (
    <section
      id="sponsors"
      className="relative scroll-mt-24 border-t border-hairline py-24 sm:py-32"
    >
      <div
        className="drift drift--gold"
        style={{ top: "30%", animationDelay: "-4s", animationDuration: "30s" }}
        aria-hidden
      />
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-end">
          <div>
            <Reveal>
              <SectionTag>Sponsors</SectionTag>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-8 font-display text-5xl uppercase leading-[0.95] sm:text-7xl">
                Help the next generation{" "}
                <span className="text-royal">take off.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-7 max-w-[560px] text-base leading-relaxed text-muted sm:text-lg">
                Falcon Hacks brings ambitious student builders together with
                the tools, mentorship, and community to turn bold ideas into
                real projects. Partner with us to support the next wave of
                creators.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.22} className="lg:justify-self-end">
            <CtaLink href={LINKS.sponsor} size="lg">
              Partner With Falcon Hacks
            </CtaLink>
          </Reveal>
        </div>

        <Reveal delay={0.18}>
          <p className="mt-16 flex items-center gap-3 font-mono text-[11px] font-semibold uppercase tracking-[0.3em] text-gold">
            <span className="blink inline-block h-2 w-2 rounded-full bg-gold" aria-hidden />
            Partner opportunities opening soon
          </p>
        </Reveal>

        <div className="mt-5 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {[1, 2, 3, 4].map((slot, i) => (
            <Reveal key={slot} delay={0.08 * i}>
              <div className="group flex aspect-[8/5] flex-col items-center justify-center gap-3 border border-dashed border-bone/15 bg-panel/50 transition-colors duration-300 hover:border-royal/40">
                <FalconMark mono className="h-8 w-8 text-bone/15 transition-colors duration-300 group-hover:text-royal/40" />
                <p className="font-mono text-[10px] uppercase tracking-[0.26em] text-muted">
                  Reserved · {String(slot).padStart(2, "0")}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
