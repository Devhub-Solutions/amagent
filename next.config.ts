import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  output: isGitHubPages ? "export" : "standalone",
  ...(isGitHubPages ? { basePath: "/amagent" } : {}),
  env: {
    NEXT_PUBLIC_BASE_PATH: isGitHubPages ? "/amagent" : "",
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
  /* Image optimization: AVIF (best compression) + WebP (wide compat).
     Next.js will serve AVIF when browser Accepts it, fallback WebP, fallback original. */
  images: {
    unoptimized: isGitHubPages,
    formats: ["image/avif", "image/webp"],
    remotePatterns: [],
    deviceSizes: [360, 414, 640, 750, 828, 1080, 1200, 1440, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    qualities: [60, 75, 80, 85],
  },
  /* Cache headers for hashed static assets — they're immutable, so cache for 1 year.
     Vercel/Cloudflare will respect this. */
  async headers() {
    return [
      {
        source: "/_next/static/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/screenshots/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=2592000, stale-while-revalidate=86400",
          },
        ],
      },
      {
        source: "/:all.(png|jpg|jpeg|webp|avif|ico|svg|woff2)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=2592000, stale-while-revalidate=86400",
          },
        ],
      },
      {
        source: "/sw.js",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=0, must-revalidate",
          },
          { key: "Service-Worker-Allowed", value: "/" },
        ],
      },
    ];
  },
  compress: true,
  experimental: {
    optimizePackageImports: ["lucide-react", "motion"],
  },
  /* Allow preview URLs from github.io gateway to access dev server
     without cross-origin warnings. */
  allowedDevOrigins: [
    "https://devhub-solutions.github.io/amagent",
    "*.github.io/amagent",
    ".github.io",
  ],
};

export default nextConfig;
