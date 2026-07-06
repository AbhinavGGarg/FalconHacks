"use client";

import { motion, useReducedMotion } from "framer-motion";

/* The hero emblem: the Foothill Falcons crest, framed in the site's
   instrumentation language — a duotone glow, a slow blueprint ring, and
   dashed stoop-trails sweeping in from below — so the logo reads as
   designed-in rather than pasted on.

   The crest lives at /public/falcon-crest.png. Drop the official school
   logo in at that path (transparent PNG) and it takes over the frame. */
export default function FalconCrest({
  className = "",
}: {
  className?: string;
}) {
  const reduce = useReducedMotion();

  return (
    <div className={`relative ${className}`}>
      {/* Duotone glow behind the crest */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-[10%] rounded-full"
        style={{
          background:
            "radial-gradient(circle at 54% 42%, rgba(62,123,255,0.34), rgba(245,179,36,0.12) 46%, transparent 70%)",
        }}
      />

      {/* Instrumentation: rings, stoop-trails, wingtip ticks */}
      <svg
        aria-hidden
        viewBox="0 0 680 620"
        fill="none"
        className="pointer-events-none absolute inset-0 h-full w-full"
      >
        <circle
          cx="360"
          cy="300"
          r="272"
          stroke="var(--hairline)"
          strokeWidth="1"
          strokeDasharray="4 12"
          className="spin-slow"
        />
        <circle
          cx="360"
          cy="300"
          r="214"
          stroke="var(--hairline)"
          strokeWidth="1"
          strokeDasharray="2 14"
        />
        <path
          d="M-40 560 C 180 520, 300 448, 470 300"
          stroke="var(--royal)"
          strokeWidth="1.5"
          strokeDasharray="3 9"
          className="dash-flow"
          opacity="0.5"
        />
        <path
          d="M-40 612 C 220 584, 372 504, 520 356"
          stroke="var(--gold)"
          strokeWidth="1"
          strokeDasharray="2 10"
          className="dash-flow"
          opacity="0.32"
        />
      </svg>

      {/* The crest */}
      <motion.div
        className="relative flex h-full w-full items-center justify-center"
        initial={reduce ? false : { opacity: 0, scale: 0.92, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/falcon-crest.png"
          alt="Foothill High School Falcons crest"
          width={1400}
          height={1196}
          className="float-idle w-[86%] max-w-[560px] drop-shadow-[0_24px_70px_rgba(0,0,0,0.55)]"
        />
      </motion.div>
    </div>
  );
}
