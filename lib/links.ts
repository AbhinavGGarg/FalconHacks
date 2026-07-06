/* ── Placeholder links ──────────────────────────────────────────
   Every outward-pointing link on the site reads from this file.
   Swap a value here and it updates everywhere.
   "#contact" scrolls to the footer until real destinations exist. */

export const LINKS = {
  /** Registration form (Google Form) — every "Register" button points here */
  register: "https://forms.gle/7Ke1xrKE1VZp9HJm8",
  /** Legacy alias, kept in sync with register */
  updates: "https://forms.gle/7Ke1xrKE1VZp9HJm8",
  /** Sponsorship inquiries — opens an email to the organizer */
  sponsor: "mailto:abhinavmgarg@gmail.com?subject=Sponsoring%20Falcon%20Hacks%202026",
  /** Sponsorship prospectus PDF (hosted in /public) — opens in a new tab */
  prospectus: "/sponsorship-prospectus.pdf",
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
