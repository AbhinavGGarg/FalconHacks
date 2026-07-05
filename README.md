# Falcon Hacks 2026 — Build Something That Takes Flight

Marketing site for **Falcon Hacks 2026**, a student-run Bay Area hackathon hosted by the Falcon Hacks club at Foothill High School.

**Sat · October 10, 2026 — Bay Area · Venue TBA**
**Free to attend · open to all high schoolers and younger**

## Stack

- [Next.js 16](https://nextjs.org) (App Router, static prerender — no backend)
- TypeScript
- Tailwind CSS v4 (design tokens in [`app/globals.css`](app/globals.css))
- Framer Motion (reveals, hero sequence, drawer/accordion)
- Canvas boids flock behind the hero ([`components/FlockField.tsx`](components/FlockField.tsx)) — move your cursor through it
- Lucide icons (+ hand-drawn brand icons in [`components/SocialIcons.tsx`](components/SocialIcons.tsx))

Palette is the Foothill falcon's: royal blue `#3e7bff` + gold `#f5b324` on blue-ink `#05080f`, warm bone text.

Type: **Anton** (display) · **Archivo** (body) · **IBM Plex Mono** (readouts) — self-hosted via `next/font`.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (fully static)
```

## Updating links

Every outward link (updates list, registration, sponsorship, Instagram, Discord, LinkedIn, email) lives in one file: [`lib/links.ts`](lib/links.ts). Swap a placeholder there and it updates site-wide. Until real destinations exist, the update/sponsor CTAs scroll to the footer.

## Structure

```
app/            layout (fonts, metadata), page, global styles, favicon
components/     one file per section — Hero, Marquee, Why, Experience,
                OpenToAll, Venue, Sponsors, Faq, FinalCta, Footer, Nav
                + shared kit: CtaLink, Reveal, SectionTag, FalconFlight, FalconMark
lib/links.ts    all placeholder URLs
```

No invented facts on the page: venue, schedule, sponsors, prizes, and registration all render as intentional "coming soon / TBA" states until announced.

---

Built by students. For students.
