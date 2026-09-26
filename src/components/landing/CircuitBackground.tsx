"use client";

import { useEffect, useRef } from "react";

/**
 * CircuitBackground — animated canvas background with slow-moving
 * "circuit-line" particles. Lightweight: ~40 nodes, capped DPR,
 * pauses when the tab is hidden. Respects prefers-reduced-motion.
 */
export function CircuitBackground({
  className = "",
  density = 0.6,
}: {
  className?: string;
  density?: number;
}) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 1.75);

    let width = 0;
    let height = 0;
    let raf = 0;
    let running = true;

    type Node = {
      x: number;
      y: number;
      vx: number;
      vy: number;
      r: number;
      pulse: number;
      hue: number;
    };
    let nodes: Node[] = [];

    const palette = [
      [200, 0.15, 0.82], // cyan
      [244, 0.19, 0.72], // electric blue
      [295, 0.18, 0.66], // violet
    ];

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const rect = parent.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.min(
        50,
        Math.max(18, Math.floor((width * height) / 26000) * density),
      );
      nodes = Array.from({ length: count }).map(() => {
        const c = palette[Math.floor(Math.random() * palette.length)];
        return {
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.18,
          vy: (Math.random() - 0.5) * 0.18,
          r: 0.8 + Math.random() * 1.6,
          pulse: Math.random() * Math.PI * 2,
          hue: c[0],
        };
      });
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // edges
      const maxDist = 140;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < maxDist) {
            const alpha = (1 - d / maxDist) * 0.35;
            ctx.strokeStyle = `hsla(${(a.hue + b.hue) / 2}, 80%, 65%, ${alpha})`;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      // nodes
      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        n.pulse += 0.03;
        if (n.x < -20) n.x = width + 20;
        if (n.x > width + 20) n.x = -20;
        if (n.y < -20) n.y = height + 20;
        if (n.y > height + 20) n.y = -20;

        const glow = 0.6 + Math.sin(n.pulse) * 0.4;
        const grad = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, 14);
        grad.addColorStop(0, `hsla(${n.hue}, 90%, 70%, ${0.55 * glow})`);
        grad.addColorStop(1, `hsla(${n.hue}, 90%, 70%, 0)`);
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(n.x, n.y, 14, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = `hsla(${n.hue}, 90%, 80%, ${0.9 * glow})`;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fill();
      }

      if (running) raf = requestAnimationFrame(draw);
    };

    let inViewport = true;

    const onVisibility = () => {
      if (document.hidden) {
        running = false;
        cancelAnimationFrame(raf);
      } else if (!reduce && inViewport) {
        running = true;
        raf = requestAnimationFrame(draw);
      }
    };

    // Pause animation when section scrolls out of viewport — saves CPU when
    // user is reading below-fold content.
    const onIntersect: IntersectionObserverCallback = ([entry]) => {
      inViewport = entry.isIntersecting;
      if (!inViewport) {
        running = false;
        cancelAnimationFrame(raf);
      } else if (!reduce && !document.hidden) {
        running = true;
        raf = requestAnimationFrame(draw);
      }
    };
    const io = new IntersectionObserver(onIntersect, { threshold: 0 });
    if (canvas.parentElement) io.observe(canvas.parentElement);

    resize();
    let resizeRaf = 0;
    const onResize = () => {
      if (resizeRaf) return;
      resizeRaf = requestAnimationFrame(() => {
        resize();
        resizeRaf = 0;
      });
    };
    window.addEventListener("resize", onResize);
    document.addEventListener("visibilitychange", onVisibility);

    if (reduce) {
      // draw a single static frame
      draw();
      running = false;
    } else {
      raf = requestAnimationFrame(draw);
    }

    return () => {
      cancelAnimationFrame(raf);
      cancelAnimationFrame(resizeRaf);
      io.disconnect();
      window.removeEventListener("resize", onResize);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [density]);

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none absolute inset-0 ${className}`}
      aria-hidden="true"
    />
  );
}
