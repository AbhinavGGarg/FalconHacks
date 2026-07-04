/* Mono instrument-readout eyebrow that opens every section. */
export default function SectionTag({
  children,
  light = false,
}: {
  children: string;
  light?: boolean;
}) {
  return (
    <p
      className={`flex items-center gap-3 font-mono text-[11px] font-medium uppercase tracking-[0.32em] ${
        light ? "text-void/70" : "text-muted"
      }`}
    >
      <span className="inline-block h-2 w-2 bg-ember" aria-hidden />
      {children}
      <span
        className={`hidden h-px w-16 sm:inline-block ${
          light ? "bg-void/25" : "bg-hairline"
        }`}
        aria-hidden
      />
    </p>
  );
}
