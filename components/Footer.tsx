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
              Hosted by Falcon Hacks at Foothill High School and cohosted with
              CodeStarters — a student-run hackathon for builders across the Bay
              Area.
            </p>
            <a
              href={LINKS.discord}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2.5 border border-hairline px-5 py-3 font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-bone transition-all duration-200 hover:-translate-y-0.5 hover:border-royal hover:text-royalhot"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-[17px] w-[17px] text-royal"
                aria-hidden
              >
                <path d="M20.32 4.37a19.8 19.8 0 0 0-4.93-1.51 13.78 13.78 0 0 0-.64 1.28 18.27 18.27 0 0 0-5.5 0 12.64 12.64 0 0 0-.64-1.28h-.05A19.74 19.74 0 0 0 3.64 4.4 20.15 20.15 0 0 0 .11 18.09a19.9 19.9 0 0 0 6.04 3.03 14.55 14.55 0 0 0 1.3-2.1 12.9 12.9 0 0 1-2.04-.98c.17-.12.34-.25.5-.38a14.2 14.2 0 0 0 12.18 0c.17.13.33.26.5.38a12.94 12.94 0 0 1-2.05.98 14.44 14.44 0 0 0 1.3 2.1 19.84 19.84 0 0 0 6.05-3.04A20.11 20.11 0 0 0 20.32 4.37ZM8.02 15.33c-1.18 0-2.16-1.08-2.16-2.42s.95-2.42 2.16-2.42 2.18 1.09 2.16 2.42c0 1.34-.95 2.42-2.16 2.42Zm7.97 0c-1.18 0-2.15-1.08-2.15-2.42s.94-2.42 2.15-2.42 2.18 1.09 2.16 2.42c0 1.34-.95 2.42-2.16 2.42Z" />
              </svg>
              Join our Discord
            </a>
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
