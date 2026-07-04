"use client";

import { motion, useReducedMotion } from "framer-motion";

/* The hero signature: an abstract falcon wing built from five swept
   blades, a beak triangle, and a dashed stoop-trail drawn across the
   canvas. Pure vector — no imagery. */

const BLADES = [
  { d: "M330 585 L822 148 L858 180 L400 622 Z", opacity: 1 },
  { d: "M362 632 L780 236 L810 264 L424 664 Z", opacity: 0.72 },
  { d: "M390 676 L734 314 L758 338 L444 702 Z", opacity: 0.48 },
  { d: "M412 716 L682 388 L702 408 L458 736 Z", opacity: 0.3 },
  { d: "M430 752 L622 462 L638 478 L466 768 Z", opacity: 0.16 },
];

export default function FalconFlight({
  className = "",
}: {
  className?: string;
}) {
  const reduce = useReducedMotion();

  return (
    <svg
      viewBox="0 0 980 820"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Blueprint instrumentation */}
      <circle
        cx="610"
        cy="330"
        r="250"
        stroke="var(--hairline)"
        strokeWidth="1"
        strokeDasharray="4 10"
        className="spin-slow"
      />
      <circle
        cx="330"
        cy="585"
        r="26"
        stroke="var(--cobalt)"
        strokeWidth="1"
        strokeDasharray="3 6"
        opacity="0.6"
      />
      <line
        x1="294"
        y1="585"
        x2="366"
        y2="585"
        stroke="var(--cobalt)"
        strokeWidth="1"
        opacity="0.5"
      />
      <line
        x1="330"
        y1="549"
        x2="330"
        y2="621"
        stroke="var(--cobalt)"
        strokeWidth="1"
        opacity="0.5"
      />

      {/* Stoop trails */}
      <motion.path
        d="M-60 720 C 240 700, 470 610, 828 168"
        stroke="var(--ember)"
        strokeWidth="1.5"
        strokeDasharray="3 9"
        className="dash-flow"
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 0.9, duration: 1.2 }}
      />
      <motion.path
        d="M-60 784 C 280 764, 520 664, 852 224"
        stroke="var(--cobalt)"
        strokeWidth="1"
        strokeDasharray="2 10"
        className="dash-flow"
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 0.32 }}
        transition={{ delay: 1.1, duration: 1.2 }}
      />

      {/* Wingtip speed ticks */}
      {[0, 1, 2].map((i) => (
        <motion.line
          key={i}
          x1={700 - i * 34}
          y1={120 + i * 30}
          x2={646 - i * 34}
          y2={168 + i * 30}
          stroke="var(--bone)"
          strokeWidth="1.5"
          initial={reduce ? false : { opacity: 0, x: -30, y: 30 }}
          animate={{ opacity: 0.28 - i * 0.07, x: 0, y: 0 }}
          transition={{ delay: 0.75 + i * 0.1, duration: 0.7 }}
        />
      ))}

      {/* The falcon: blades sweep in low → high */}
      <g className="float-idle">
        {BLADES.map((b, i) => (
          <motion.path
            key={b.d}
            d={b.d}
            fill="var(--ember)"
            initial={reduce ? false : { opacity: 0, x: -64, y: 64 }}
            animate={{ opacity: b.opacity, x: 0, y: 0 }}
            transition={{
              delay: 0.15 + i * 0.09,
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          />
        ))}
        {/* Head + beak */}
        <motion.path
          d="M822 148 L920 96 L862 196 Z"
          fill="var(--ember-hot)"
          initial={reduce ? false : { opacity: 0, x: -64, y: 64 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ delay: 0.62, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        />
        {/* Eye tick — the one cobalt point on the bird */}
        <motion.circle
          cx="864"
          cy="142"
          r="5"
          fill="var(--void)"
          stroke="var(--cobalt)"
          strokeWidth="2"
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.15, duration: 0.5 }}
        />
      </g>
    </svg>
  );
}
