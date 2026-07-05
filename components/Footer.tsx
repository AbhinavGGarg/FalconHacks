import { Mail } from "lucide-react";
import FalconMark from "./FalconMark";
import { DiscordIcon, InstagramIcon, LinkedinIcon } from "./SocialIcons";
import { LINKS, NAV_ITEMS } from "@/lib/links";

const SOCIALS = [
  { label: "Instagram", href: LINKS.instagram, Icon: InstagramIcon },
  { label: "Discord", href: LINKS.discord, Icon: DiscordIcon },
  { label: "LinkedIn", href: LINKS.linkedin, Icon: LinkedinIcon },
  { label: "Email", href: LINKS.email, Icon: Mail },
];

export default function Footer() {
  return (
    <footer id="contact" className="scroll-mt-24 border-t border-hairline bg-panel/60">
      <div className="mx-auto max-w-[1400px] px-5 py-16 sm:px-8 sm:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1.2fr]">
          {/* Brand */}
          <div>
            <p className="flex items-center gap-2.5">
              <FalconMark className="h-8 w-8 text-royal" />
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
              <li className="text-muted">Registration — coming soon</li>
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

          {/* Connect */}
          <div>
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.3em] text-muted">
              Connect
            </p>
            <ul className="mt-5 flex gap-3">
              {SOCIALS.map(({ label, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    aria-label={label}
                    className="flex h-11 w-11 items-center justify-center border border-hairline text-muted transition-all duration-200 hover:-translate-y-0.5 hover:border-royal hover:text-royal"
                  >
                    <Icon className="h-[18px] w-[18px]" aria-hidden />
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-5 max-w-[260px] text-xs leading-relaxed text-muted">
              Social channels are coming online soon — the update list hears
              everything first.
            </p>
          </div>
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
