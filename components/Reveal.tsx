"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

/* Shared reveal-on-scroll wrapper. Opacity-only fade (no transform) so text
   selection is never offset mid-animation; once, gentle ease. */
export default function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-12% 0px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
