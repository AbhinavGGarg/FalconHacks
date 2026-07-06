/* ── Placeholder links ──────────────────────────────────────────
   Every outward-pointing link on the site reads from this file.
   Swap a value here and it updates everywhere.
   "#contact" scrolls to the footer until real destinations exist. */

export const LINKS = {
  /** Mailing-list / updates signup — replace with the real form URL */
  updates: "#contact",
  /** Registration platform — replace when registration opens */
  register: "#contact",
  /** Sponsorship inquiries — opens an email to the organizer */
  sponsor: "mailto:abhinavmgarg@gmail.com?subject=Sponsoring%20Falcon%20Hacks%202026",
  /** e.g. https://instagram.com/falconhacks */
  instagram: "#",
  /** e.g. https://discord.gg/xxxx */
  discord: "#",
  /** e.g. https://linkedin.com/company/falcon-hacks */
  linkedin: "#",
  /** Replace with the real inbox */
  email: "mailto:team@falconhacks.example",
} as const;

export const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "FAQ", href: "#faq" },
  { label: "Sponsors", href: "#sponsors" },
  { label: "Contact", href: "#contact" },
] as const;
