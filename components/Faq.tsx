"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Plus } from "lucide-react";
import Reveal from "./Reveal";
import SectionTag from "./SectionTag";
import { LINKS } from "@/lib/links";

const FAQS = [
  {
    q: "Who can attend?",
    a: "All high school students and younger are welcome — Falcon Hacks is built for student creators and builders from across the Bay Area. Registration is open now.",
  },
  {
    q: "How much does it cost?",
    a: "Nothing. Falcon Hacks is completely free to attend.",
  },
  {
    q: "Do I need coding experience?",
    a: "No. Beginners are welcome. The point is to learn, build, and try something new.",
  },
  {
    q: "Can I come without a team?",
    a: "Yes. There will be ways to meet other builders and form teams.",
  },
  {
    q: "Where is it happening?",
    a: "The event will take place in the Bay Area. Venue details are coming soon.",
  },
  {
    q: "How do I register?",
    a: "Registration is open — click any Register button on this page to fill out the form. Follow Falcon Hacks for other announcements too.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const reduce = useReducedMotion();

  return (
    <section
      id="faq"
      className="relative scroll-mt-24 border-t border-hairline py-24 sm:py-32"
    >
      <div className="mx-auto grid max-w-[1400px] gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_1.5fr] lg:gap-20">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <Reveal>
            <SectionTag>FAQ</SectionTag>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-8 font-display text-5xl uppercase leading-[0.95] sm:text-6xl">
              Before
              <br />
              you <span className="text-royal">ask.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-[360px] text-base leading-relaxed text-muted">
              Registration is open now — more details roll out as the event
              gets closer, so sign up and you won’t miss anything.
            </p>
          </Reveal>
          <Reveal delay={0.22}>
            <a
              href={LINKS.register}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-royal transition-colors hover:text-royalhot"
            >
              Register now
              <span aria-hidden>↗</span>
            </a>
          </Reveal>
        </div>

        <Reveal delay={0.12}>
          <div className="border-t border-hairline">
            {FAQS.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <div key={faq.q} className="border-b border-hairline">
                  <h3>
                    <button
                      type="button"
                      onClick={() => setOpenIndex(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      aria-controls={isOpen ? `faq-panel-${i}` : undefined}
                      id={`faq-button-${i}`}
                      className="group flex w-full items-center justify-between gap-6 py-6 text-left transition-colors"
                    >
                      <span
                        className={`text-lg font-semibold transition-colors duration-200 sm:text-xl ${
                          isOpen ? "text-royal" : "text-bone group-hover:text-royal"
                        }`}
                      >
                        {faq.q}
                      </span>
                      <span
                        className={`flex h-9 w-9 shrink-0 items-center justify-center border transition-all duration-300 ${
                          isOpen
                            ? "rotate-45 border-royal bg-royal text-void"
                            : "border-hairline text-muted group-hover:border-royal group-hover:text-royal"
                        }`}
                        aria-hidden
                      >
                        <Plus className="h-4 w-4" />
                      </span>
                    </button>
                  </h3>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-panel-${i}`}
                        role="region"
                        aria-labelledby={`faq-button-${i}`}
                        initial={reduce ? false : { height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="max-w-[560px] pb-7 pr-12 text-[15px] leading-relaxed text-muted">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
