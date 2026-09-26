import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { TickerStats } from "@/components/landing/TickerStats";
import dynamic from "next/dynamic";
import { Footer } from "@/components/landing/Footer";
import { StickyDownloadBar } from "@/components/landing/StickyDownloadBar";

/* Code-split below-fold sections — they're server-rendered for SEO but loaded
   as separate JS chunks so the initial bundle stays small. Skeleton keeps CLS=0. */
const CoreFeatures = dynamic(() => import("@/components/landing/CoreFeatures").then(m => m.CoreFeatures), {
  ssr: true,
  loading: () => <SectionSkeleton className="h-[600px]" />,
});
const HowItWorks = dynamic(() => import("@/components/landing/HowItWorks").then(m => m.HowItWorks), {
  ssr: true,
  loading: () => <SectionSkeleton className="h-[800px]" />,
});
const ShowcaseGallery = dynamic(() => import("@/components/landing/ShowcaseGallery").then(m => m.ShowcaseGallery), {
  ssr: true,
  loading: () => <SectionSkeleton className="h-[700px]" />,
});
const UseCases = dynamic(() => import("@/components/landing/UseCases").then(m => m.UseCases), {
  ssr: true,
  loading: () => <SectionSkeleton className="h-[700px]" />,
});
const TrustSpecs = dynamic(() => import("@/components/landing/TrustSpecs").then(m => m.TrustSpecs), {
  ssr: true,
  loading: () => <SectionSkeleton className="h-[800px]" />,
});
const DownloadCTA = dynamic(() => import("@/components/landing/DownloadCTA").then(m => m.DownloadCTA), {
  ssr: true,
  loading: () => <SectionSkeleton className="h-[900px]" />,
});

function SectionSkeleton({ className }: { className?: string }) {
  return (
    <div
      className={`relative py-24 lg:py-32 ${className ?? ""}`}
      aria-hidden="true"
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="h-6 w-32 rounded-full bg-white/5 animate-pulse mb-4" />
        <div className="h-12 w-3/4 rounded-xl bg-white/5 animate-pulse mb-3" />
        <div className="h-12 w-1/2 rounded-xl bg-white/5 animate-pulse mb-8" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="h-64 rounded-3xl bg-white/5 animate-pulse" />
          <div className="h-64 rounded-3xl bg-white/5 animate-pulse" />
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col bg-background overflow-x-hidden">
      <Navbar />
      <div className="flex-1 flex flex-col">
        <Hero />
        <TickerStats />
        <CoreFeatures />
        <HowItWorks />
        <ShowcaseGallery />
        <UseCases />
        <TrustSpecs />
        <DownloadCTA />
      </div>
      <Footer />
      <StickyDownloadBar />
    </main>
  );
}
