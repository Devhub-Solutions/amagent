import type { Metadata, Viewport } from "next";
import { Geist, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { WebVitals } from "@/components/landing/WebVitals";
import ServiceWorkerRegister from "@/components/landing/ServiceWorkerRegister";
import { assetPath } from "@/lib/assets";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const SITE_URL = "https://devhub.solutions";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0A0E1A" },
    { media: "(prefers-color-scheme: light)", color: "#0F1420" },
  ],
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Devhub Solutions — AI Agent tự động hóa trình duyệt",
  description:
    "Devhub Solutions (MST 0319405240) là AI Agent tự động hoá trình duyệt desktop: ghi & phát lại thao tác, Agent Chat điều khiển bằng ngôn ngữ tự nhiên, RPA hiện đại cho Windows & macOS.",
  keywords: [
    "Devhub Solutions",
    "AmAgent",
    "AI Agent",
    "RPA",
    "browser automation",
    "tự động hoá trình duyệt",
    "record and replay",
    "agent chat",
    "Devhub Solutions Company Limited",
  ],
  authors: [{ name: "Devhub Solutions Company Limited", url: SITE_URL }],
  creator: "Devhub Solutions Company Limited",
  publisher: "Devhub Solutions Company Limited",
  applicationName: "Devhub Solutions — AmAgent",
  category: "technology",
  formatDetection: { telephone: true, address: true, email: true },
  icons: {
    icon: [
      { url: assetPath("/favicon.ico"), sizes: "any" },
      { url: assetPath("/favicon.png"), type: "image/png", sizes: "64x64" },
      { url: assetPath("/icon-192.png"), type: "image/png", sizes: "192x192" },
      { url: assetPath("/icon-512.png"), type: "image/png", sizes: "512x512" },
    ],
    shortcut: [assetPath("/favicon.ico")],
    apple: [{ url: assetPath("/apple-touch-icon.png"), sizes: "180x180", type: "image/png" }],
  },
  manifest: undefined,
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: SITE_URL,
    siteName: "Devhub Solutions",
    title: "Devhub Solutions — AI Agent tự động hóa trình duyệt",
    description:
      "Để AI làm việc thay bạn. Tự động hoá tác vụ trình duyệt bằng ngôn ngữ tự nhiên, ghi & phát lại thao tác, chạy đa trình duyệt.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Devhub Solutions — AI Agent tự động hóa trình duyệt",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Devhub Solutions — AI Agent tự động hóa trình duyệt",
    description:
      "Để AI làm việc thay bạn. Tự động hoá tác vụ trình duyệt bằng ngôn ngữ tự nhiên.",
    images: ["/og-image.png"],
  },
  other: {
    "business:contact_data:country_name": "Vietnam",
    "business:contact_data:locality": "Ho Chi Minh City",
    "business:contact_data:street_address":
      "842/1/58 Nguyễn Kiệm, Phường Hạnh Thông",
    "business:contact_data:postal_code": "700000",
    "business:contact_data:phone_number": "+84706688336",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" suppressHydrationWarning className="dark">
      <body
        className={`${geistSans.variable} ${spaceGrotesk.variable} antialiased bg-background text-foreground`}
      >
        <div className="grain-overlay" aria-hidden="true" />
        {children}
        {/* Structured data: Organization — placed at end of body to avoid blocking HTML parse */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Devhub Solutions Company Limited",
              alternateName: "Devhub Solutions",
              url: SITE_URL,
              logo: `${SITE_URL}/og-image.png`,
              taxID: "0319405240",
              foundingDate: "2024",
              founder: { "@type": "Person", name: "Đoàn Ngọc Thành" },
              email: "hello@devhub.solutions",
              telephone: "+84-706-688-336",
              address: {
                "@type": "PostalAddress",
                streetAddress: "842/1/58 Nguyễn Kiệm, Phường Hạnh Thông",
                addressLocality: "Ho Chi Minh City",
                addressRegion: "Ho Chi Minh",
                postalCode: "700000",
                addressCountry: "VN",
              },
              areaServed: "VN",
              knowsLanguage: ["vi", "en"],
              sameAs: [],
            }),
          }}
        />
        {/* RUM beacon — tracks Core Web Vitals from real users → /api/rum */}
        <WebVitals />
        {/* Service Worker for offline cache + faster return visits */}
        <ServiceWorkerRegister />
      </body>
    </html>
  );
}
