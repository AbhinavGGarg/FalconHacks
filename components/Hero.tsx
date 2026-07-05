"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Calendar, MapPin, Sparkles } from "lucide-react";
import CtaLink from "./CtaLink";
import FalconFlight from "./FalconFlight";
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

      {/* The falcon — behind copy on mobile, beside it on desktop */}
      <div
        className="pointer-events-none absolute -right-[34%] top-[4%] w-[130vw] max-w-none opacity-25 sm:-right-[16%] sm:w-[92vw] sm:opacity-40 lg:-right-[6%] lg:top-[2%] lg:w-[62vw] lg:max-w-[1040px] lg:opacity-100"
        aria-hidden
      >
        <FalconFlight className="h-auto w-full" />
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
              <CtaLink href={LINKS.updates} size="lg">
                Get Event Updates
              </CtaLink>
              <CtaLink href={LINKS.sponsor} size="lg" variant="outline">
                Become a Sponsor
              </CtaLink>
            </div>
          </Rise>

          <Rise delay={0.66}>
            <p className="mt-10 flex items-center gap-3 text-sm text-muted">
              <FalconMark className="h-4 w-4 text-royal/70" />
              Hosted by Falcon Hacks at Foothill High School
            </p>
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
            <div
              role="group"
              className="flex items-center gap-5 font-mono sm:gap-7"
              aria-label="Countdown activates soon"
            >
              {["Days", "Hrs", "Min", "Sec"].map((unit, i) => (
                <div key={unit} className="flex items-center gap-5 sm:gap-7">
                  {i > 0 && (
                    <span className="text-lg text-bone/25 sm:text-2xl" aria-hidden>
                      :
                    </span>
                  )}
                  <div className="text-center">
                    <p className="text-2xl font-semibold tracking-widest text-bone/60 sm:text-3xl">
                      ——
                    </p>
                    <p className="mt-1 text-[9px] uppercase tracking-[0.3em] text-muted">
                      {unit}
                    </p>
                  </div>
                </div>
              ))}
              <p className="hidden max-w-[120px] text-[9px] uppercase leading-relaxed tracking-[0.22em] text-muted xl:block">
                T-minus sync pending
              </p>
            </div>
          </div>
        </div>
      </Rise>
    </section>
  );
}
