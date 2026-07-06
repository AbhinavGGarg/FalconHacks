"use client";

import { motion, useReducedMotion } from "framer-motion";

/* The hero emblem: the Foothill crest set into a bone medallion with a
   gold rim — the logo is drawn for a light background, so the seal gives
   it the contrast it needs and reads as an official school crest. The
   medallion floats inside the site's instrumentation (a slow blueprint
   ring + dashed stoop-trails).

   The crest itself lives at /public/falcon-crest.svg (traced vector).
   Replace that file to swap the logo; the medallion frame stays. */
export default function FalconCrest({
  className = "",
}: {
  className?: string;
}) {
  const reduce = useReducedMotion();

  return (
    <div className={`relative ${className}`}>
      {/* Instrumentation: rings + stoop-trails around the medallion */}
      <svg
        aria-hidden
        viewBox="0 0 680 680"
        fill="none"
        className="pointer-events-none absolute inset-0 h-full w-full"
      >
        <circle
          cx="340"
          cy="340"
          r="330"
          stroke="var(--hairline)"
          strokeWidth="1"
          strokeDasharray="4 12"
          className="spin-slow"
        />
        <path
          d="M-40 620 C 200 580, 330 500, 470 360"
          stroke="var(--royal)"
          strokeWidth="1.5"
          strokeDasharray="3 9"
          className="dash-flow"
          opacity="0.5"
        />
        <path
          d="M-40 672 C 240 640, 400 560, 540 410"
          stroke="var(--gold)"
          strokeWidth="1"
          strokeDasharray="2 10"
          className="dash-flow"
          opacity="0.32"
        />
      </svg>

      {/* The medallion */}
      <motion.div
        className="relative mx-auto flex aspect-square w-[82%] max-w-[460px] items-center justify-center"
        initial={reduce ? false : { opacity: 0, scale: 0.92, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="float-idle h-full w-full rounded-full bg-gold p-[2.5%] shadow-[0_30px_90px_-26px_rgba(0,0,0,0.8)]">
          <div className="flex h-full w-full items-center justify-center rounded-full bg-bone p-[12%] shadow-[inset_0_2px_14px_rgba(5,8,15,0.18)]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/falcon-crest.svg"
              alt="Foothill High School Falcons crest"
              width={1167}
              height={1167}
              className="h-full w-full object-contain"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
