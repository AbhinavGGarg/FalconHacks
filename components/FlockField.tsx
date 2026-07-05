"use client";

import { useEffect, useRef } from "react";

/* A living sky: a small flock of triangle-birds drifts up-right behind
   the hero on classic boids rules. Move the cursor through them and
   they scatter. One gold bird leads. Canvas-only, pauses offscreen,
   renders a single still frame under prefers-reduced-motion. */

type Bird = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
};

const WIND = { x: 0.012, y: -0.006 };
const PERCEPTION = 68;
const SEPARATION = 26;
const CURSOR_RADIUS = 150;
const MAX_SPEED = 1.15;
const MIN_SPEED = 0.35;

export default function FlockField({
  className = "",
}: {
  className?: string;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)")
      .matches;
    const canHover = window.matchMedia("(hover: hover)").matches;

    let width = 0;
    let height = 0;
    let raf = 0;
    let running = false;
    let visible = true;
    const cursor = { x: -9999, y: -9999, active: false };

    const resize = () => {
      // Read dpr per resize: browser zoom / monitor changes update it.
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = Math.max(1, Math.round(width * dpr));
      canvas.height = Math.max(1, Math.round(height * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();

    const count = Math.min(
      72,
      Math.max(26, Math.round((width * height) / 26000))
    );
    const birds: Bird[] = Array.from({ length: count }, (_, i) => {
      const speed = MIN_SPEED + Math.random() * (MAX_SPEED - MIN_SPEED);
      const angle = -0.4 + (Math.random() - 0.5) * 1.6;
      let color: string;
      if (i === 0) {
        color = "rgba(245, 179, 36, 0.95)";
      } else if (i % 5 === 0) {
        color = `rgba(62, 123, 255, ${0.35 + Math.random() * 0.2})`;
      } else {
        color = `rgba(242, 239, 229, ${0.14 + Math.random() * 0.2})`;
      }
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        size: i === 0 ? 4.4 : 2.1 + Math.random() * 1.3,
        color,
      };
    });

    const step = () => {
      for (const b of birds) {
        let ax = WIND.x;
        let ay = WIND.y;
        let nCount = 0;
        let avgVx = 0;
        let avgVy = 0;
        let cx = 0;
        let cy = 0;

        for (const o of birds) {
          if (o === b) continue;
          const dx = o.x - b.x;
          const dy = o.y - b.y;
          const d2 = dx * dx + dy * dy;
          if (d2 > PERCEPTION * PERCEPTION) continue;
          nCount++;
          avgVx += o.vx;
          avgVy += o.vy;
          cx += o.x;
          cy += o.y;
          if (d2 < SEPARATION * SEPARATION && d2 > 0.01) {
            const d = Math.sqrt(d2);
            ax -= (dx / d) * 0.045;
            ay -= (dy / d) * 0.045;
          }
        }
        if (nCount > 0) {
          ax += (avgVx / nCount - b.vx) * 0.04; // alignment
          ay += (avgVy / nCount - b.vy) * 0.04;
          ax += (cx / nCount - b.x) * 0.0022; // cohesion
          ay += (cy / nCount - b.y) * 0.0022;
        }

        // Scatter away from the cursor
        if (cursor.active) {
          const dx = b.x - cursor.x;
          const dy = b.y - cursor.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < CURSOR_RADIUS * CURSOR_RADIUS && d2 > 0.01) {
            const d = Math.sqrt(d2);
            const force = ((CURSOR_RADIUS - d) / CURSOR_RADIUS) * 0.32;
            ax += (dx / d) * force;
            ay += (dy / d) * force;
          }
        }

        b.vx += ax;
        b.vy += ay;
        const speed = Math.hypot(b.vx, b.vy);
        if (speed > MAX_SPEED) {
          b.vx = (b.vx / speed) * MAX_SPEED;
          b.vy = (b.vy / speed) * MAX_SPEED;
        } else if (speed < MIN_SPEED && speed > 0.001) {
          b.vx = (b.vx / speed) * MIN_SPEED;
          b.vy = (b.vy / speed) * MIN_SPEED;
        }
        b.x += b.vx;
        b.y += b.vy;

        // Wrap with margin
        const m = 24;
        if (b.x < -m) b.x = width + m;
        if (b.x > width + m) b.x = -m;
        if (b.y < -m) b.y = height + m;
        if (b.y > height + m) b.y = -m;
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      for (const b of birds) {
        const angle = Math.atan2(b.vy, b.vx);
        const s = b.size;
        ctx.save();
        ctx.translate(b.x, b.y);
        ctx.rotate(angle);
        ctx.beginPath();
        ctx.moveTo(s * 1.7, 0);
        ctx.lineTo(-s, s * 0.75);
        ctx.lineTo(-s * 0.45, 0);
        ctx.lineTo(-s, -s * 0.75);
        ctx.closePath();
        ctx.fillStyle = b.color;
        ctx.fill();
        ctx.restore();
      }
    };

    const loop = () => {
      step();
      draw();
      raf = requestAnimationFrame(loop);
    };

    const start = () => {
      if (running || reduce || !visible || document.hidden) return;
      running = true;
      raf = requestAnimationFrame(loop);
    };
    const stop = () => {
      running = false;
      cancelAnimationFrame(raf);
    };

    // Reduced motion: settle the flock, render one still frame
    if (reduce) {
      for (let i = 0; i < 60; i++) step();
      draw();
    } else {
      start();
    }

    const onPointerMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      cursor.x = e.clientX - rect.left;
      cursor.y = e.clientY - rect.top;
      cursor.active =
        cursor.x >= 0 && cursor.y >= 0 && cursor.x <= width && cursor.y <= height;
    };
    const onPointerLeave = () => {
      cursor.active = false;
    };
    if (canHover && !reduce) {
      window.addEventListener("pointermove", onPointerMove, { passive: true });
      document.documentElement.addEventListener(
        "pointerleave",
        onPointerLeave
      );
    }

    const onVisibility = () => {
      if (document.hidden) stop();
      else start();
    };
    document.addEventListener("visibilitychange", onVisibility);

    const io = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        if (visible) start();
        else stop();
      },
      { threshold: 0 }
    );
    io.observe(canvas);

    const ro = new ResizeObserver(() => {
      resize();
      if (reduce) draw();
    });
    ro.observe(canvas);

    return () => {
      stop();
      io.disconnect();
      ro.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
      if (canHover && !reduce) {
        window.removeEventListener("pointermove", onPointerMove);
        document.documentElement.removeEventListener(
          "pointerleave",
          onPointerLeave
        );
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none h-full w-full ${className}`}
      aria-hidden="true"
    />
  );
}
