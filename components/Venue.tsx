import CtaLink from "./CtaLink";
import Reveal from "./Reveal";
import SectionTag from "./SectionTag";
import { LINKS } from "@/lib/links";

/* Candidate-site dots blinking across the survey grid — several spots
   under consideration, deliberately no single pin. */
const CANDIDATES = [
  { x: 150, y: 130, delay: "0s" },
  { x: 350, y: 100, delay: "-0.9s" },
  { x: 410, y: 260, delay: "-1.6s" },
  { x: 120, y: 330, delay: "-2.3s" },
  { x: 280, y: 410, delay: "-0.5s" },
];

function SurveyGrid() {
  return (
    <div className="relative border border-hairline bg-panel p-3">
      {/* Corner readouts */}
      <p className="absolute left-4 top-4 z-10 font-mono text-[10px] uppercase tracking-[0.24em] text-muted">
        LAT — TBA
      </p>
      <p className="absolute right-4 top-4 z-10 font-mono text-[10px] uppercase tracking-[0.24em] text-muted">
        LON — TBA
      </p>
      <p className="absolute bottom-4 left-4 z-10 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.24em] text-gold">
        <span className="blink inline-block h-1.5 w-1.5 rounded-full bg-gold" aria-hidden />
        Site scan active
      </p>
      <p className="absolute bottom-4 right-4 z-10 font-mono text-[10px] uppercase tracking-[0.24em] text-royal">
        Region locked
      </p>

      <svg
        viewBox="0 0 520 520"
        className="h-auto w-full"
        role="img"
        aria-label="Abstract scanning grid — venue search in progress across the Bay Area"
      >
        {/* Survey grid */}
        {Array.from({ length: 12 }, (_, i) => (
          <g key={i} stroke="var(--hairline)" strokeWidth="1">
            <line x1={(i + 1) * 40} y1="0" x2={(i + 1) * 40} y2="520" />
            <line x1="0" y1={(i + 1) * 40} x2="520" y2={(i + 1) * 40} />
          </g>
        ))}

        {/* Concentric search rings */}
        {[70, 130, 190, 245].map((r) => (
          <circle
            key={r}
            cx="260"
            cy="260"
            r={r}
            fill="none"
            stroke="var(--bone)"
            strokeOpacity="0.14"
            strokeWidth="1"
            strokeDasharray="4 8"
          />
        ))}

        {/* Rotating sweep */}
        <g className="spin-slow" style={{ animationDuration: "14s" }}>
          <line
            x1="260"
            y1="260"
            x2="260"
            y2="18"
            stroke="var(--royal)"
            strokeWidth="1.5"
            opacity="0.6"
          />
          <line
            x1="260"
            y1="260"
            x2="330"
            y2="32"
            stroke="var(--royal)"
            strokeWidth="1"
            opacity="0.18"
          />
        </g>

        {/* Candidate sites */}
        {CANDIDATES.map((c) => (
          <g key={`${c.x}-${c.y}`}>
            <circle
              cx={c.x}
              cy={c.y}
              r="4"
              fill="var(--gold)"
              className="blink"
              style={{ animationDelay: c.delay }}
            />
            <circle
              cx={c.x}
              cy={c.y}
              r="12"
              fill="none"
              stroke="var(--gold)"
              strokeWidth="1"
              opacity="0.35"
            />
          </g>
        ))}

        {/* Center: the undecided landing point */}
        <g>
          <circle cx="260" cy="260" r="34" fill="none" stroke="var(--royal)" strokeWidth="1" className="radar-pulse" />
          <circle cx="260" cy="260" r="34" fill="none" stroke="var(--royal)" strokeWidth="1" className="radar-pulse" style={{ animationDelay: "-1.6s" }} />
          <line x1="244" y1="260" x2="276" y2="260" stroke="var(--royal)" strokeWidth="1.5" />
          <line x1="260" y1="244" x2="260" y2="276" stroke="var(--royal)" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

export default function Venue() {
  return (
    <section
      id="venue"
      className="relative scroll-mt-24 border-t border-hairline py-24 sm:py-32"
    >
      <div className="mx-auto grid max-w-[1400px] items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        <div>
          <Reveal>
            <SectionTag>Where we’re landing</SectionTag>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-8 font-display text-5xl uppercase leading-[0.95] sm:text-7xl">
              The Bay Area.
              <br />
              <span className="text-royal">Exact coordinates soon.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-7 max-w-[520px] text-base leading-relaxed text-muted sm:text-lg">
              We’re finding the right home for Falcon Hacks 2026. Join the
              update list to be first to hear when the venue is announced.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="mt-9">
              <CtaLink href={LINKS.updates} size="lg">
                Get Venue Updates
              </CtaLink>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="mx-auto w-full max-w-[560px]">
          <SurveyGrid />
        </Reveal>
      </div>
    </section>
  );
}
