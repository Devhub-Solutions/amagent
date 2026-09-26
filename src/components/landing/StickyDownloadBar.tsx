"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Download, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function StickyDownloadBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("top");
    const download = document.getElementById("download");
    if (!hero || !download) return;

    let heroVisible = true;
    let downloadVisible = false;

    const update = () => setVisible(!heroVisible && !downloadVisible);

    const heroObs = new IntersectionObserver(
      ([entry]) => {
        heroVisible = entry.isIntersecting;
        update();
      },
      { threshold: 0 },
    );
    const downloadObs = new IntersectionObserver(
      ([entry]) => {
        downloadVisible = entry.isIntersecting;
        update();
      },
      { threshold: 0 },
    );

    heroObs.observe(hero);
    downloadObs.observe(download);
    return () => {
      heroObs.disconnect();
      downloadObs.disconnect();
    };
  }, []);

  return (
    <div
      className={cn(
        "fixed bottom-0 left-0 right-0 z-40 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
        visible ? "translate-y-0" : "translate-y-full",
      )}
    >
      <div className="nav-blur border-t border-cyan-300/20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 py-3.5 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 min-w-0">
            {/* Brand logo chip */}
            <div className="relative h-8 w-8 rounded-lg overflow-hidden ring-1 ring-white/15 shrink-0">
              <Image
                src="/logo-nav.png"
                alt="Devhub Solutions logo"
                fill
                sizes="32px"
                className="object-contain"
              />
            </div>
            <div className="min-w-0">
              <div className="font-display text-base sm:text-lg text-white leading-none truncate">
                Sẵn sàng để AI làm việc thay bạn?
              </div>
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/45 mt-1 hidden sm:block">
                Cài đặt 90 giây · Dùng thử Pro 14 ngày
              </div>
            </div>
          </div>
          <a
            href="#download"
            className="pulse-glow shrink-0 inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-lg text-sm font-medium text-white bg-gradient-to-br from-[oklch(0.62_0.20_259)] to-[oklch(0.58_0.21_295)] hover:scale-[1.03] transition-transform whitespace-nowrap"
          >
            <Download className="h-4 w-4" />
            <span className="hidden sm:inline">Tải xuống</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}

