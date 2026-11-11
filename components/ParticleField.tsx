"use client";

import { useEffect, useRef } from "react";

type Props = {
  /** Плотность частиц (шт на области по умолчанию). */
  count?: number;
  className?: string;
  /** Тон частиц: голубой или неоново-зелёный. */
  tone?: "accent" | "neon";
};

/**
 * Лёгкое поле плавающих частиц на canvas.
 * Отключается при prefers-reduced-motion, на паузе при скрытой вкладке.
 */
export function ParticleField({ count = 46, className, tone = "accent" }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let running = true;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const colors =
      tone === "neon"
        ? ["rgba(57,255,114,", "rgba(101,220,145,"]
        : ["rgba(84,168,255,", "rgba(164,213,255,"];

    type P = { x: number; y: number; r: number; vx: number; vy: number; a: number; c: string };
    let particles: P[] = [];

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = Math.max(1, Math.floor(rect.width * dpr));
      canvas.height = Math.max(1, Math.floor(rect.height * dpr));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: (Math.random() * 1.8 + 0.6) * dpr,
        vx: (Math.random() - 0.5) * 0.16 * dpr,
        vy: (Math.random() - 0.5) * 0.16 * dpr,
        a: Math.random() * 0.5 + 0.15,
        c: colors[Math.random() < 0.72 ? 0 : 1],
      }));
    };

    const tick = () => {
      if (!running) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `${p.c}${p.a})`;
        ctx.fill();
      }
      raf = requestAnimationFrame(tick);
    };

    resize();
    tick();

    const onVisibility = () => {
      running = !document.hidden && !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (running) {
        cancelAnimationFrame(raf);
        tick();
      } else {
        cancelAnimationFrame(raf);
      }
    };

    const observer = new ResizeObserver(resize);
    observer.observe(canvas);
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      observer.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [count, tone]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 h-full w-full ${className ?? ""}`}
    />
  );
}
