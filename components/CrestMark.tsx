/* The school crest as a small lockup mark, next to the wordmark. The
   adjacent "Falcon Hacks '26" text is the accessible name, so the image
   is decorative here. Sources the same keyed logo as the hero. */
export default function CrestMark({
  className = "h-9 w-9",
}: {
  className?: string;
}) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/falcon-crest.png"
      alt=""
      aria-hidden
      width={1200}
      height={1200}
      className={`object-contain ${className}`}
    />
  );
}
