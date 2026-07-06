import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

type Variant = "solid" | "outline";

/* Tactile CTA used across the site. External links (http/https) open in
   a new tab automatically; anchors and mailto stay in-page. */
export default function CtaLink({
  href,
  children,
  variant = "solid",
  size = "md",
  showArrow = true,
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: "sm" | "md" | "lg";
  showArrow?: boolean;
  className?: string;
}) {
  const base =
    "group inline-flex items-center justify-center gap-2 font-mono uppercase tracking-[0.18em] transition-all duration-200 active:scale-[0.97] select-none";

  const sizes = {
    sm: "px-4 py-2.5 text-[11px]",
    md: "px-6 py-3.5 text-xs",
    lg: "px-8 py-4 text-sm",
  }[size];

  const variants = {
    solid:
      "bg-gold text-void font-semibold hover:bg-goldhot hover:-translate-y-0.5 hover:shadow-[0_10px_36px_-10px_rgba(245,179,36,0.6)]",
    outline:
      "border border-bone/25 text-bone hover:border-royal hover:text-royalhot hover:-translate-y-0.5",
  }[variant];

  const external = /^https?:\/\//.test(href);

  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`${base} ${sizes} ${variants} ${className}`}
    >
      {children}
      {showArrow && (
        <ArrowUpRight
          className="h-[1.1em] w-[1.1em] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          aria-hidden
        />
      )}
    </a>
  );
}
