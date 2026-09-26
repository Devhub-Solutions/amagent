"use client";

import { useEffect } from "react";

/**
 * ServiceWorkerRegister — client component that registers /sw.js on mount.
 * Wrapped in try/catch + feature detection so it never breaks the page.
 * In dev mode (next dev) we skip registration to avoid caching dev assets.
 */
export default function ServiceWorkerRegister() {
  useEffect(() => {
    if (process.env.NODE_ENV !== "production") return;
    if (typeof window === "undefined" || !("serviceWorker" in navigator)) return;

    const register = async () => {
      try {
        await navigator.serviceWorker.register("/sw.js", {
          scope: "/",
          updateViaCache: "none",
        });
        console.debug("[SW] registered");
      } catch (e) {
        console.warn("[SW] registration failed:", e);
      }
    };

    // Register after window load to not compete with first paint.
    if (document.readyState === "complete") register();
    else window.addEventListener("load", register, { once: true });

    return () => window.removeEventListener("load", register);
  }, []);

  return null;
}
