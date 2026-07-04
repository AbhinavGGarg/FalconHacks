import CtaLink from "./CtaLink";
import Reveal from "./Reveal";
import { LINKS } from "@/lib/links";

/* Runway edge lights, parametrized down the two converging edges. */
const LIGHT_STOPS = [0.22, 0.42, 0.62, 0.82];

function Runway() {
  return (
    <svg
      viewBox="0 0 1200 430"
      className="pointer-events-none absolute bottom-0 left-1/2 h-[46%] w-[160%] max-w-none -translate-x-1/2 sm:w-full"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      {/* Horizon */}
      <line
        x1="0"
        y1="40"
        x2="1200"
        y2="40"
        stroke="var(--hairline)"
        strokeWidth="1"
      />
      {/* Runway edges */}
      <line x1="585" y1="40" x2="330" y2="430" stroke="var(--bone)" strokeOpacity="0.3" strokeWidth="1.5" />
      <line x1="615" y1="40" x2="870" y2="430" stroke="var(--bone)" strokeOpacity="0.3" strokeWidth="1.5" />
      {/* Outer guide lines */}
      <line x1="560" y1="40" x2="60" y2="430" stroke="var(--bone)" strokeOpacity="0.08" strokeWidth="1" />
      <line x1="640" y1="40" x2="1140" y2="430" stroke="var(--bone)" strokeOpacity="0.08" strokeWidth="1" />
      {/* Streaming centerline */}
      <line
        x1="600"
        y1="40"
        x2="600"
        y2="430"
        stroke="var(--ember)"
        strokeWidth="2.5"
        strokeDasharray="10 14"
        className="runway-dash"
        opacity="0.85"
      />
      {/* Edge lights */}
      {LIGHT_STOPS.map((t, i) => (
        <g key={t}>
          <circle
            cx={585 - 255 * t}
            cy={40 + 390 * t}
            r={2 + t * 2.5}
            fill="var(--ember)"
            className="blink"
            style={{ animationDelay: `${i * -0.55}s` }}
          />
          <circle
            cx={615 + 255 * t}
            cy={40 + 390 * t}
            r={2 + t * 2.5}
            fill="var(--ember)"
            className="blink"
            style={{ animationDelay: `${i * -0.55 - 0.28}s` }}
          />
        </g>
      ))}
      {/* Threshold point */}
      <circle cx="600" cy="40" r="3.5" fill="var(--cobalt)" />
    </svg>
  );
}

export default function FinalCta() {
  return (
    <section className="relative overflow-hidden border-t border-hairline">
      <div className="blueprint-grid absolute inset-0 opacity-50" aria-hidden />
      <Runway />
      <div className="drift" style={{ top: "20%", animationDuration: "22s" }} aria-hidden />

      <div className="relative mx-auto flex min-h-[88svh] max-w-[1400px] flex-col items-center justify-center px-5 py-28 text-center sm:px-8">
        <Reveal>
          <h2 className="font-display text-[clamp(3.4rem,10vw,9rem)] uppercase leading-[0.92]">
            Your idea
            <br />
            <span className="text-ember">deserves a runway.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.14}>
          <p className="mt-8 font-mono text-sm font-medium uppercase tracking-[0.3em] text-bone/85 sm:text-base">
            November 14, 2026 · Bay Area · Falcon Hacks
          </p>
        </Reveal>

        <Reveal delay={0.24}>
          <div className="mt-10">
            <CtaLink href={LINKS.updates} size="lg">
              Get Event Updates
            </CtaLink>
          </div>
        </Reveal>

        <Reveal delay={0.32}>
          <p className="mt-6 text-sm text-muted">
            Venue, registration, sponsors, and more coming soon.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
