/* The Falcon Hacks mark: three swept wing blades + a gold beak — the
   Foothill falcon reduced to geometry. Reused in the nav, footer,
   sponsor tiles, favicon. `mono` renders everything in currentColor
   (for ghost watermarks). */
export default function FalconMark({
  className = "h-6 w-6",
  mono = false,
}: {
  className?: string;
  mono?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path d="M6 50 L38 13 L45.5 19.5 L17 53 Z" fill="currentColor" />
      <path
        d="M27 54 L45 33 L50.5 37.8 L35 55.5 Z"
        fill="currentColor"
        opacity="0.5"
      />
      <path
        d="M38 13 L58 5 L47.5 23.5 Z"
        fill={mono ? "currentColor" : "var(--gold)"}
        opacity={mono ? 0.85 : 1}
      />
    </svg>
  );
}
