"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Calendar, MapPin, Sparkles } from "lucide-react";
import CodeStartersMark from "./CodeStartersMark";
import Countdown from "./Countdown";
import CtaLink from "./CtaLink";
import FalconCrest from "./FalconCrest";
import FalconMark from "./FalconMark";
import FlockField from "./FlockField";
import { LINKS } from "@/lib/links";

const EASE = [0.22, 1, 0.36, 1] as const;

function Rise({
  children,
  delay,
  className,
}: {
  children: React.ReactNode;
  delay: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 36 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.85, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col overflow-hidden"
    >
      {/* Blueprint backdrop */}
      <div
        className="blueprint-grid blueprint-fade absolute inset-0"
        aria-hidden
      />
      {/* The living sky — a cursor-shy flock drifting up-right */}
      <div className="absolute inset-0" aria-hidden>
        <FlockField />
      </div>
      <div className="drift" style={{ top: "24%" }} aria-hidden />
      <div
        className="drift drift--gold"
        style={{ top: "62%", animationDelay: "-12s", animationDuration: "34s" }}
        aria-hidden
      />

      {/* The falcon crest medallion — desktop only; a light seal behind
          mobile copy would hurt contrast, and the nav carries the crest there */}
      <div className="pointer-events-none absolute right-[1%] top-[62%] hidden aspect-square w-[33vw] max-w-[440px] -translate-y-1/2 lg:block xl:right-[3%]">
        <FalconCrest className="h-full w-full" />
      </div>

      {/* Copy block */}
      <div className="relative z-10 mx-auto flex w-full max-w-[1400px] flex-1 flex-col justify-center px-5 pb-10 pt-36 sm:px-8 lg:pt-40">
        <div className="max-w-[1020px]">
          <Rise delay={0.05}>
            <p className="flex items-center gap-3 font-mono text-[11px] font-semibold uppercase tracking-[0.34em] text-royal sm:text-xs">
              <span className="inline-block h-px w-10 bg-royal" aria-hidden />
              Foothill High School presents
            </p>
          </Rise>

          <Rise delay={0.15}>
            <h1 className="mt-6 font-display text-[clamp(3.5rem,8.6vw,8.5rem)] uppercase leading-[0.92] tracking-[0.01em]">
              <span className="block">Build something</span>
              <span className="block text-royal">that takes flight.</span>
            </h1>
          </Rise>

          <Rise delay={0.3}>
            <p className="mt-7 max-w-[560px] text-base leading-relaxed text-muted sm:text-lg">
              Falcon Hacks is a student-run hackathon bringing Bay Area
              builders together for one unforgettable day of ideas, code,
              creativity, and competition. Whether it’s your first project or
              your tenth, you belong here.
            </p>
          </Rise>

          <Rise delay={0.42}>
            <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3 font-mono text-xs font-medium uppercase tracking-[0.2em] text-bone sm:text-sm">
              <span className="flex items-center gap-2.5">
                <Calendar className="h-4 w-4 text-royal" aria-hidden />
                Sat · October 10, 2026
              </span>
              <span className="flex items-center gap-2.5">
                <MapPin className="h-4 w-4 text-royal" aria-hidden />
                Bay Area · Venue TBA
              </span>
              <span className="flex items-center gap-2.5 text-gold">
                <Sparkles className="h-4 w-4" aria-hidden />
                Free to attend
              </span>
            </div>
          </Rise>

          <Rise delay={0.54}>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <CtaLink href={LINKS.register} size="lg">
                Register Now
              </CtaLink>
              <CtaLink href={LINKS.sponsor} size="lg" variant="outline">
                Become a Sponsor
              </CtaLink>
              <CtaLink href={LINKS.prospectus} size="lg" variant="outline">
                Sponsorship Prospectus
              </CtaLink>
            </div>
          </Rise>

          <Rise delay={0.6}>
            <a
              href={LINKS.discord}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2.5 border border-hairline px-7 py-3.5 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-bone transition-all duration-200 hover:-translate-y-0.5 hover:border-royal hover:text-royalhot"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-[18px] w-[18px] text-royal"
                aria-hidden
              >
                <path d="M20.32 4.37a19.8 19.8 0 0 0-4.93-1.51 13.78 13.78 0 0 0-.64 1.28 18.27 18.27 0 0 0-5.5 0 12.64 12.64 0 0 0-.64-1.28h-.05A19.74 19.74 0 0 0 3.64 4.4 20.15 20.15 0 0 0 .11 18.09a19.9 19.9 0 0 0 6.04 3.03 14.55 14.55 0 0 0 1.3-2.1 12.9 12.9 0 0 1-2.04-.98c.17-.12.34-.25.5-.38a14.2 14.2 0 0 0 12.18 0c.17.13.33.26.5.38a12.94 12.94 0 0 1-2.05.98 14.44 14.44 0 0 0 1.3 2.1 19.84 19.84 0 0 0 6.05-3.04A20.11 20.11 0 0 0 20.32 4.37ZM8.02 15.33c-1.18 0-2.16-1.08-2.16-2.42s.95-2.42 2.16-2.42 2.18 1.09 2.16 2.42c0 1.34-.95 2.42-2.16 2.42Zm7.97 0c-1.18 0-2.15-1.08-2.15-2.42s.94-2.42 2.15-2.42 2.18 1.09 2.16 2.42c0 1.34-.95 2.42-2.16 2.42Z" />
              </svg>
              Join our Discord
            </a>
          </Rise>

          <Rise delay={0.66}>
            <div className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-muted">
              <FalconMark className="h-4 w-4 shrink-0 text-royal/70" aria-hidden />
              <span>Hosted by Falcon Hacks at Foothill High School</span>
              <span className="text-muted/50" aria-hidden>
                ·
              </span>
              <span>Cohosted with</span>
              <CodeStartersMark className="h-[18px]" />
            </div>
          </Rise>
        </div>
      </div>

      {/* Mission readout — countdown placeholder, no fake numbers */}
      <Rise delay={0.8} className="relative z-10 w-full">
        <div className="mx-auto max-w-[1400px] px-5 pb-8 sm:px-8">
          <div className="flex flex-col gap-6 border border-hairline bg-panel/70 px-6 py-5 backdrop-blur-sm sm:flex-row sm:items-center sm:justify-between sm:px-8">
            <div>
              <p className="flex items-center gap-2.5 font-mono text-[10px] font-semibold uppercase tracking-[0.3em] text-muted">
                <span className="blink inline-block h-2 w-2 rounded-full bg-gold" aria-hidden />
                Mission status · Confirmed
              </p>
              <p className="mt-2 font-display text-2xl uppercase tracking-[0.02em] text-bone sm:text-3xl">
                Next mission launches{" "}
                <span className="text-gold">October 10, 2026</span>
              </p>
            </div>
            <Countdown />
          </div>
        </div>
      </Rise>
    </section>
  );
}
