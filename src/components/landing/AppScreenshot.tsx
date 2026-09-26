"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { Chrome, Settings2, Circle, Maximize2 } from "lucide-react";
import { cn } from "@/lib/utils";

/* ============================================================
 * AppScreenshot — wraps a real app screenshot in a desktop
 * browser window mockup so it reads as "the actual product
 * running", while preserving the dark glassmorphism vibe.
 *
 * Uses webp thumbnail for fast first paint, falls back to png
 * for the full-res lightbox view.
 * ============================================================ */

const SHOTS = ["login", "dashboard", "agents", "chat", "runs", "data", "integrations", "settings"] as const;
export type ShotName = (typeof SHOTS)[number];

const LABELS: Record<ShotName, string> = {
  login: "Đăng nhập · AmAgent",
  dashboard: "Dashboard chính",
  agents: "Quản lý Agents",
  chat: "Agent Chat",
  runs: "Lịch sử Runs",
  data: "Kho dữ liệu",
  integrations: "Tích hợp",
  settings: "Cài đặt",
};

export function AppScreenshot({
  shot,
  url = "app.amagent.ai",
  className,
  glow = true,
  rounded = "rounded-xl",
  showChrome = true,
}: {
  shot: ShotName;
  url?: string;
  className?: string;
  glow?: boolean;
  rounded?: string;
  showChrome?: boolean;
}) {
  return (
    <div
      className={cn(
        "relative border border-white/10 bg-[oklch(0.17_0.024_264)] shadow-2xl overflow-hidden",
        rounded,
        glow && "glow-electric",
        className,
      )}
    >
      {showChrome && (
        <div className="flex items-center gap-3 px-4 py-2.5 border-b border-white/8 bg-[oklch(0.14_0.022_264)]">
          <div className="flex items-center gap-1.5">
            <span className="h-3 w-3 rounded-full bg-[oklch(0.62_0.22_25)]" />
            <span className="h-3 w-3 rounded-full bg-[oklch(0.78_0.16_85)]" />
            <span className="h-3 w-3 rounded-full bg-[oklch(0.72_0.18_140)]" />
          </div>
          <div className="flex-1 flex items-center justify-center">
            <div className="flex items-center gap-2 px-3 py-1 rounded-md bg-white/5 text-xs text-white/60 w-full max-w-md">
              <Chrome className="h-3 w-3 text-cyan-300/80" />
              <span className="truncate">{url}</span>
            </div>
          </div>
          <div className="flex items-center gap-1 text-white/30">
            <Circle className="h-2 w-2" />
            <Settings2 className="h-3.5 w-3.5" />
          </div>
        </div>
      )}
      <div className="relative bg-black/40 aspect-[1280/800]">
        <Image
          src={`/screenshots/${shot}.png`}
          alt={LABELS[shot]}
          fill
          sizes="(max-width: 768px) 100vw, 480px"
          className="object-cover object-top"
          loading="lazy"
          quality={75}
        />
        {/* subtle scan-line / vignette to blend screenshot with the dark UI */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
      </div>
    </div>
  );
}

/* ============================================================
 * ScreenshotLightbox — large preview with caption.
 * Used by the showcase gallery.
 * ============================================================ */
export function ScreenshotLightbox({
  shot,
  onClose,
}: {
  shot: ShotName;
  onClose: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-[60] bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-5xl max-h-[88vh] overflow-auto scroll-elegant rounded-3xl glass-strong p-6 sm:p-8"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 h-9 w-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 z-10"
          aria-label="Đóng"
        >
          <Maximize2 className="h-4 w-4 rotate-180" />
        </button>
        <div className="mb-4">
          <div className="text-[10px] uppercase tracking-widest text-cyan-300/80">
            AmAgent · giao diện thật
          </div>
          <h3 className="mt-0.5 font-display text-2xl font-semibold text-white">
            {LABELS[shot]}
          </h3>
        </div>
        <Image
          src={`/screenshots/${shot}.png`}
          alt={LABELS[shot]}
          width={1280}
          height={800}
          sizes="(max-width: 1024px) 100vw, 1024px"
          className="w-full h-auto rounded-xl border border-white/10"
          quality={85}
        />
      </motion.div>
    </motion.div>
  );
}

export { SHOTS, LABELS };
