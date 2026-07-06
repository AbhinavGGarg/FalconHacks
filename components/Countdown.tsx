"use client";

import { useEffect, useState } from "react";

/* Live countdown to the event. Targets the start of Oct 10, 2026 in
   Bay Area time (PDT, UTC-7) so every visitor counts to the same moment.
   Renders dashes until mounted to avoid a server/client hydration
   mismatch, then ticks once a second. */

const TARGET = new Date("2026-10-10T00:00:00-07:00").getTime();

type Parts = { d: number; h: number; m: number; s: number };

function partsFrom(now: number): Parts {
  let s = Math.max(0, Math.floor((TARGET - now) / 1000));
  const d = Math.floor(s / 86400);
  s -= d * 86400;
  const h = Math.floor(s / 3600);
  s -= h * 3600;
  const m = Math.floor(s / 60);
  s -= m * 60;
  return { d, h, m, s };
}

const pad = (n: number) => String(n).padStart(2, "0");

export default function Countdown() {
  const [parts, setParts] = useState<Parts | null>(null);

  useEffect(() => {
    const tick = () => setParts(partsFrom(Date.now()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const cells: { label: string; value: string }[] = [
    { label: "Days", value: parts ? String(parts.d) : "—" },
    { label: "Hrs", value: parts ? pad(parts.h) : "—" },
    { label: "Min", value: parts ? pad(parts.m) : "—" },
    { label: "Sec", value: parts ? pad(parts.s) : "—" },
  ];

  const srLabel = parts
    ? `${parts.d} days, ${parts.h} hours, ${parts.m} minutes until Falcon Hacks`
    : "Countdown to Falcon Hacks, October 10, 2026";

  return (
    <div
      className="flex items-center gap-4 font-mono sm:gap-6"
      role="timer"
      aria-label={srLabel}
    >
      {cells.map((c, i) => (
        <div key={c.label} className="flex items-center gap-4 sm:gap-6" aria-hidden>
          {i > 0 && (
            <span className="text-lg text-bone/20 sm:text-2xl">:</span>
          )}
          <div className="text-center tabular-nums">
            <p className="text-3xl font-semibold tracking-widest text-bone sm:text-4xl">
              {c.value}
            </p>
            <p className="mt-1.5 text-[9px] uppercase tracking-[0.3em] text-muted">
              {c.label}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
