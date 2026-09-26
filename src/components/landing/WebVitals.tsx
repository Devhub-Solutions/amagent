"use client";

import { useEffect } from "react";
import { onLCP, onCLS, onINP, onFCP, onTTFB, type Metric } from "web-vitals";

/* WebVitals — client-side RUM (Real User Monitoring).
 * Captures LCP, CLS, INP, FCP, TTFB from real user sessions and POSTs
 * to /api/rum for aggregation. Runs once per session per metric.
 *
 * Rating thresholds (Google Core Web Vitals):
 *   LCP  ≤ 2.5s = good, ≤ 4.0s = needs improvement, > 4.0s = poor
 *   CLS  ≤ 0.1  = good, ≤ 0.25 = needs improvement, > 0.25 = poor
 *   INP  ≤ 200ms = good, ≤ 500ms = needs improvement, > 500ms = poor
 *   FCP  ≤ 1.8s = good, ≤ 3.0s = needs improvement, > 3.0s = poor
 *   TTFB ≤ 0.8s = good, ≤ 1.8s = needs improvement, > 1.8s = poor
 */
function rate(name: string, value: number): "good" | "ni" | "poor" {
  const thresholds: Record<string, [number, number]> = {
    LCP: [2500, 4000],
    CLS: [0.1, 0.25],
    INP: [200, 500],
    FCP: [1800, 3000],
    TTFB: [800, 1800],
  };
  const [good, ni] = thresholds[name] ?? [Infinity, Infinity];
  if (value <= good) return "good";
  if (value <= ni) return "ni";
  return "poor";
}

function send(metric: Metric) {
  if (process.env.NEXT_PUBLIC_STATIC_EXPORT === "true") return;

  const payload = {
    name: metric.name,
    value: Math.round(metric.value * 100) / 100,
    rating: rate(metric.name, metric.value),
    id: metric.id,
    delta: metric.delta ? Math.round(metric.delta * 100) / 100 : 0,
    navigationType: metric.navigationType,
    path: typeof location !== "undefined" ? location.pathname : "/",
    ts: Date.now(),
  };

  // Use sendBeacon for reliability on unload, fall back to fetch.
  if (typeof navigator !== "undefined" && navigator.sendBeacon) {
    const blob = new Blob([JSON.stringify(payload)], { type: "application/json" });
    navigator.sendBeacon("/api/rum", blob);
  } else {
    fetch("/api/rum", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: { "Content-Type": "application/json" },
      keepalive: true,
    }).catch(() => {
      /* silent fail — RUM should never break UX */
    });
  }
}

export function WebVitals() {
  useEffect(() => {
    // Report CLS / INP / LCP as they happen; FCP / TTFB once on load.
    onLCP(send, { reportAllChanges: false });
    onCLS(send, { reportAllChanges: false });
    onINP(send, { reportAllChanges: false });
    onFCP(send, { reportAllChanges: false });
    onTTFB(send, { reportAllChanges: false });
  }, []);

  return null;
}
