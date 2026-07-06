import CrestMark from "./CrestMark";
import { LINKS, NAV_ITEMS } from "@/lib/links";

export default function Footer() {
  return (
    <footer id="contact" className="scroll-mt-24 border-t border-hairline bg-panel/60">
      <div className="mx-auto max-w-[1400px] px-5 py-16 sm:px-8 sm:py-20">
        <div className="grid gap-12 md:grid-cols-3 lg:grid-cols-[1.9fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <p className="flex items-center gap-3">
              <CrestMark className="h-11 w-11" />
              <span className="font-display text-2xl tracking-[0.06em] text-bone">
                FALCON HACKS <span className="text-gold">’26</span>
              </span>
            </p>
            <p className="mt-5 max-w-[340px] text-sm leading-relaxed text-muted">
              Hosted by Falcon Hacks at Foothill High School — a student-run
              hackathon for builders across the Bay Area.
            </p>
          </div>

          {/* Mission facts */}
          <div>
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.3em] text-muted">
              Mission
            </p>
            <ul className="mt-5 space-y-3 font-mono text-xs uppercase tracking-[0.16em] text-bone/85">
              <li>October 10, 2026</li>
              <li>Bay Area · Venue TBA</li>
              <li className="text-gold">Free to attend</li>
              <li>
                <a
                  href={LINKS.register}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold transition-colors hover:text-goldhot"
                >
                  Registration — open now ↗
                </a>
              </li>
            </ul>
          </div>

          {/* Navigate */}
          <nav aria-label="Footer">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.3em] text-muted">
              Navigate
            </p>
            <ul className="mt-5 space-y-3">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="font-mono text-xs uppercase tracking-[0.16em] text-bone/85 transition-colors hover:text-royal"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-hairline pt-8 sm:flex-row sm:items-center">
          <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-muted">
            © 2026 Falcon Hacks
          </p>
          <p className="flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.24em] text-bone/80">
            <span className="inline-block h-1.5 w-1.5 bg-gold" aria-hidden />
            Built by students. For students.
          </p>
        </div>
      </div>
    </footer>
  );
}
