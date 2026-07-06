"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import CodeStartersMark from "./CodeStartersMark";
import CrestMark from "./CrestMark";
import CtaLink from "./CtaLink";
import { LINKS, NAV_ITEMS } from "@/lib/links";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);
  const wasOpen = useRef(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  // The drawer only exists below lg; if the viewport crosses the
  // breakpoint while it's open, close it so body scroll unlocks.
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const onChange = (e: MediaQueryListEvent) => {
      if (e.matches) setOpen(false);
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  // Focus management: into the dialog on open, back to the trigger on close.
  useEffect(() => {
    if (open) {
      wasOpen.current = true;
      closeRef.current?.focus();
    } else if (wasOpen.current) {
      wasOpen.current = false;
      triggerRef.current?.focus();
    }
  }, [open]);

  // Keep Tab inside the open drawer.
  const trapTab = (e: React.KeyboardEvent) => {
    if (e.key !== "Tab") return;
    const focusables = drawerRef.current?.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled])'
    );
    if (!focusables || focusables.length === 0) return;
    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[100] transition-all duration-300 ${
        scrolled
          ? "border-b border-hairline bg-void/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav
        aria-label="Main"
        className="mx-auto flex h-[72px] max-w-[1400px] items-center justify-between px-5 sm:px-8"
      >
        <div className="flex items-center gap-3.5">
          <a
            href="#top"
            className="group flex items-center gap-2.5"
            aria-label="Falcon Hacks ’26 — back to top"
          >
            <CrestMark className="h-10 w-10 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            <span className="font-display text-lg tracking-[0.06em] text-bone">
              FALCON HACKS <span className="text-gold">’26</span>
            </span>
          </a>
          <span
            className="hidden items-center gap-3 sm:flex"
            aria-label="Cohosted with CodeStarters"
          >
            <span className="font-display text-lg text-muted/40" aria-hidden>
              ×
            </span>
            <CodeStartersMark className="h-[18px]" />
          </span>
        </div>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 lg:flex">
          <ul className="flex items-center gap-7">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="group relative font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-muted transition-colors hover:text-bone"
                >
                  {item.label}
                  <span
                    className="absolute -bottom-1.5 left-0 h-px w-0 bg-royal transition-all duration-300 group-hover:w-full"
                    aria-hidden
                  />
                </a>
              </li>
            ))}
          </ul>
          <CtaLink href={LINKS.register} size="sm" showArrow={false}>
            Register
          </CtaLink>
        </div>

        {/* Mobile trigger */}
        <button
          ref={triggerRef}
          type="button"
          onClick={() => setOpen(true)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label="Open menu"
          className="flex h-11 w-11 items-center justify-center border border-hairline text-bone transition-colors hover:border-royal hover:text-royal lg:hidden"
        >
          <Menu className="h-5 w-5" aria-hidden />
        </button>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            ref={drawerRef}
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
            onKeyDown={trapTab}
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: -16 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[110] flex h-[100dvh] flex-col bg-void lg:hidden"
          >
            <div className="flex h-[72px] items-center justify-between border-b border-hairline px-5 sm:px-8">
              <span className="flex items-center gap-2.5">
                <CrestMark className="h-10 w-10" />
                <span className="font-display text-lg tracking-[0.06em] text-bone">
                  FALCON HACKS <span className="text-gold">’26</span>
                </span>
              </span>
              <button
                ref={closeRef}
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="flex h-11 w-11 items-center justify-center border border-hairline text-bone transition-colors hover:border-royal hover:text-royal"
              >
                <X className="h-5 w-5" aria-hidden />
              </button>
            </div>

            <ul className="flex flex-1 flex-col justify-center gap-2 px-6">
              {NAV_ITEMS.map((item, i) => (
                <motion.li
                  key={item.href}
                  initial={reduce ? false : { opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 + i * 0.06, duration: 0.4 }}
                >
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="group flex items-baseline gap-4 py-3"
                  >
                    <span className="font-mono text-[11px] text-gold">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-display text-5xl uppercase leading-none text-bone transition-colors group-hover:text-royal">
                      {item.label}
                    </span>
                  </a>
                </motion.li>
              ))}
            </ul>

            <div className="border-t border-hairline p-6">
              <CtaLink
                href={LINKS.register}
                size="lg"
                className="w-full"
                showArrow
              >
                Register
              </CtaLink>
              <p className="mt-4 text-center font-mono text-[10px] uppercase tracking-[0.28em] text-muted">
                Sat · October 10, 2026 — Bay Area
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
