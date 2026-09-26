/* ============================================================
 * Devhub Solutions — Service Worker
 * Self-contained (no build step). Caches Next.js hashed assets,
 * screenshots, and fonts for offline use + fast return visits.
 *
 * Strategy:
 *   - INSTALL: pre-cache critical app shell (logo, og-image, offline fallback)
 *   - FETCH images / static / fonts: CacheFirst (immutable, 1 year)
 *   - FETCH HTML navigations: NetworkFirst (always serve fresh when online)
 *   - FETCH /api/*: NetworkOnly (never cache API responses)
 *   - ACTIVATE: clean up old caches when version bumps
 *
 * Bump CACHE_VERSION below on every release to invalidate old caches.
 * ============================================================ */
const CACHE_VERSION = "v1.0.0";
const STATIC_CACHE = `dh-static-${CACHE_VERSION}`;
const IMAGE_CACHE = `dh-images-${CACHE_VERSION}`;
const FONT_CACHE = `dh-fonts-${CACHE_VERSION}`;
const HTML_CACHE = `dh-html-${CACHE_VERSION}`;

const PRECACHE_URLS = [
  "/favicon.ico",
  "/logo-nav.png",
  "/og-image.png",
  "/offline.html",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(STATIC_CACHE)
      .then((cache) => cache.addAll(PRECACHE_URLS).catch(() => null))
      .then(() => self.skipWaiting()),
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys
            .filter((k) => ![STATIC_CACHE, IMAGE_CACHE, FONT_CACHE, HTML_CACHE].includes(k))
            .map((k) => caches.delete(k)),
        ),
      )
      .then(() => self.clients.claim()),
  );
});

self.addEventListener("fetch", (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Only handle GET — never intercept POST/PUT/etc
  if (request.method !== "GET") return;

  // Never cache API requests or Next.js dev HMR
  if (url.pathname.startsWith("/api/") || url.pathname.startsWith("/_next/webpack-hmr")) {
    return;
  }

  // Cross-origin requests (e.g. fonts from Google if any) — pass through
  if (url.origin !== self.location.origin) return;

  // 1. HTML navigations — NetworkFirst, fall back to cache, then offline page
  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request)
        .then((response) => {
          const copy = response.clone();
          caches.open(HTML_CACHE).then((cache) => cache.put(request, copy));
          return response;
        })
        .catch(async () => {
          const cached = await caches.match(request);
          return cached || (await caches.match("/offline.html")) || Response.error();
        }),
    );
    return;
  }

  // 2. Images (incl. /_next/image optimization endpoint) — CacheFirst, 30 days
  if (
    request.destination === "image" ||
    /\.(?:png|jpg|jpeg|webp|avif|gif|svg|ico)$/i.test(url.pathname) ||
    url.pathname.startsWith("/_next/image")
  ) {
    event.respondWith(
      caches.open(IMAGE_CACHE).then(async (cache) => {
        const cached = await cache.match(request);
        if (cached) return cached;
        try {
          const response = await fetch(request);
          if (response.ok && response.status === 200) cache.put(request, response.clone());
          return response;
        } catch {
          return cached || Response.error();
        }
      }),
    );
    return;
  }

  // 3. Static assets (_next/static/*) — CacheFirst, 1 year (immutable hashed)
  if (url.pathname.startsWith("/_next/static/")) {
    event.respondWith(
      caches.open(STATIC_CACHE).then(async (cache) => {
        const cached = await cache.match(request);
        if (cached) return cached;
        try {
          const response = await fetch(request);
          if (response.ok && response.status === 200) cache.put(request, response.clone());
          return response;
        } catch {
          return cached || Response.error();
        }
      }),
    );
    return;
  }

  // 4. Fonts (woff2/ttf) — CacheFirst, 1 year
  if (/\.(?:woff2?|ttf|otf|eot)$/i.test(url.pathname) || url.pathname.startsWith("/_next/static/media/")) {
    event.respondWith(
      caches.open(FONT_CACHE).then(async (cache) => {
        const cached = await cache.match(request);
        if (cached) return cached;
        try {
          const response = await fetch(request);
          if (response.ok && response.status === 200) cache.put(request, response.clone());
          return response;
        } catch {
          return cached || Response.error();
        }
      }),
    );
    return;
  }

  // 5. Default — try network, fall back to cache
  event.respondWith(
    fetch(request).catch(async () => (await caches.match(request)) || Response.error()),
  );
});

// Allow page to trigger skipWaiting from UI (e.g. "New version available" toast)
self.addEventListener("message", (event) => {
  if (event.data === "SKIP_WAITING") self.skipWaiting();
});
