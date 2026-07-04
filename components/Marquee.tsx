const PHRASES = [
  "Build",
  "Learn",
  "Ship",
  "Create",
  "Compete",
  "Meet your team",
  "Take flight",
];

function Row({ ariaHidden = false }: { ariaHidden?: boolean }) {
  return (
    <div
      className="flex shrink-0 items-center"
      aria-hidden={ariaHidden || undefined}
    >
      {[0, 1].map((rep) =>
        PHRASES.map((phrase, i) => (
          <span
            key={`${rep}-${phrase}`}
            className="flex shrink-0 items-center"
          >
            <span
              className={`whitespace-nowrap px-7 font-display text-4xl uppercase tracking-[0.04em] sm:px-10 sm:text-5xl ${
                (rep * PHRASES.length + i) % 2 === 0
                  ? "text-bone"
                  : "text-stroke"
              }`}
            >
              {phrase}
            </span>
            <span
              className="h-2.5 w-2.5 shrink-0 rotate-45 bg-ember"
              aria-hidden
            />
          </span>
        ))
      )}
    </div>
  );
}

export default function Marquee() {
  return (
    <div
      className="relative overflow-hidden border-y border-hairline bg-panel/40 py-7"
      role="marquee"
      aria-label="Build, learn, ship, create, compete, meet your team, take flight"
    >
      <div className="marquee-track flex w-max">
        <Row />
        <Row ariaHidden />
      </div>
    </div>
  );
}
