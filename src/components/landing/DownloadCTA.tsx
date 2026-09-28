"use client";

import { motion } from "motion/react";
import Image from "next/image";
import {
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Cpu,
  HardDrive,
  ArrowDownToLine,
} from "lucide-react";
import { assetPath } from "@/lib/assets";
import {
  AppleIcon,
  WindowsIcon,
  LinuxIcon,
  ChipIcon,
  IntelIcon,
} from "./PlatformIcons";

const RELEASE_DOWNLOAD_BASE =
  "https://github.com/Devhub-Solutions/AmAgentCore/releases/latest/download";

type Platform = {
  id: string;
  icon: React.ComponentType<{ className?: string; glow?: "off" | "soft" | "strong" }>;
  label: string;
  sublabel: string;
  size: string;
  ext: string;
  arch?: string;
  href: string;
  highlight?: boolean;
};

const PLATFORMS: Platform[] = [
  {
    id: "windows",
    icon: WindowsIcon,
    label: "Windows",
    sublabel: "10 · 11",
    size: "92 MB",
    ext: ".msi",
    href: `${RELEASE_DOWNLOAD_BASE}/AmAgent-windows.msi`,
    highlight: true,
  },
  {
    id: "macos-arm",
    icon: AppleIcon,
    label: "macOS",
    sublabel: "Apple Silicon",
    size: "78 MB",
    ext: ".dmg",
    arch: "M1 · M2 · M3",
    href: `${RELEASE_DOWNLOAD_BASE}/AmAgent-macos-arm.dmg`,
  },
  {
    id: "macos-intel",
    icon: IntelIcon,
    label: "macOS",
    sublabel: "Intel",
    size: "85 MB",
    ext: ".dmg",
    arch: "x86_64",
    href: `${RELEASE_DOWNLOAD_BASE}/AmAgent-macos-intel.dmg`,
  },
  {
    id: "linux-deb",
    icon: LinuxIcon,
    label: "Linux",
    sublabel: "Debian / Ubuntu",
    size: "88 MB",
    ext: ".deb",
    arch: "64-bit",
    href: `${RELEASE_DOWNLOAD_BASE}/AmAgent-linux-amd64.deb`,
  },
  {
    id: "linux-rpm",
    icon: LinuxIcon,
    label: "Linux",
    sublabel: "Fedora / RHEL",
    size: "90 MB",
    ext: ".rpm",
    arch: "64-bit",
    href: `${RELEASE_DOWNLOAD_BASE}/AmAgent-linux-x86_64.rpm`,
  },
];

export function DownloadCTA() {
  return (
    <section id="download" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 mesh-glow-deep opacity-90 pointer-events-none" />
      <div className="absolute inset-0 bg-circuit pointer-events-none [mask-image:radial-gradient(50%_50%_at_50%_50%,black,transparent)]" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        {/* Top CTA banner */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-[2rem] glass-strong p-8 sm:p-12 lg:p-16 overflow-hidden"
        >
          {/* glow */}
          <div className="absolute -top-32 left-1/4 h-64 w-64 rounded-full bg-cyan-400/20 blur-3xl" />
          <div className="absolute -bottom-32 right-1/4 h-64 w-64 rounded-full bg-violet-500/20 blur-3xl" />

          <div className="relative flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-12">
            <div className="flex-1 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs text-white/80 mb-4">
                <Sparkles className="h-3.5 w-3.5 text-cyan-300" />
                AmAgent Beta — mời bạn dùng thử
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white leading-[1.1]">
                Tải bản Beta miễn phí{" "}
                <span className="text-gradient-electric">và góp ý cùng chúng tôi</span>.
              </h2>
              <p className="mt-4 text-white/65 text-base lg:text-lg leading-relaxed">
                Cài đặt trong khoảng 90 giây. AmAgent hiện đang ở giai đoạn Beta và
                miễn phí trong thời gian thử nghiệm — dữ liệu của bạn ở lại máy bạn.
              </p>

              {/* ====== PLATFORM DOWNLOAD GRID — prominent icons ====== */}
              <div className="mt-7">
                <div className="flex items-center gap-2 mb-3 text-xs text-white/55">
                  <ArrowDownToLine className="h-3.5 w-3.5 text-cyan-300" />
                  <span className="uppercase tracking-widest">
                    Đa nền tảng · Windows · macOS · Linux
                  </span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {PLATFORMS.map((p, i) => (
                    <motion.a
                      key={p.id}
                      href={p.href}
                      download
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.05 }}
                      className={`group relative flex flex-col gap-2 px-4 py-3.5 rounded-xl border transition-all hover:scale-[1.03] ${
                        p.highlight
                          ? "border-cyan-300/50 bg-gradient-to-br from-cyan-400/15 to-violet-500/10 pulse-glow"
                          : "border-white/10 bg-white/4 hover:border-cyan-300/40 hover:bg-white/8"
                      }`}
                    >
                      {/* Platform icon — large + glowing */}
                      <div className="flex items-center justify-between">
                        <p.icon
                          className="h-8 w-8 text-cyan-300 group-hover:scale-110 transition-transform"
                          glow={p.highlight ? "strong" : "soft"}
                        />
                        <span className="text-[10px] font-mono text-white/40 group-hover:text-cyan-300/80 transition-colors">
                          {p.ext}
                        </span>
                      </div>
                      <div className="leading-tight">
                        <div className="text-sm font-semibold text-white font-display">
                          {p.label}
                        </div>
                        <div className="text-[11px] text-cyan-300/80">
                          {p.sublabel}
                        </div>
                        <div className="text-[10px] text-white/45 mt-0.5 flex items-center gap-2">
                          <span className="flex items-center gap-1">
                            <HardDrive className="h-2.5 w-2.5" />
                            {p.size}
                          </span>
                          {p.arch && (
                            <span className="flex items-center gap-1">
                              <Cpu className="h-2.5 w-2.5" />
                              {p.arch}
                            </span>
                          )}
                        </div>
                      </div>
                      {p.highlight && (
                        <span className="absolute -top-2 right-3 px-1.5 py-0.5 rounded-full text-[9px] uppercase tracking-wider bg-gradient-to-r from-[oklch(0.62_0.20_259)] to-[oklch(0.58_0.21_295)] text-white font-medium">
                          phổ biến
                        </span>
                      )}
                    </motion.a>
                  ))}
                </div>
              </div>

              <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-white/55">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" /> Beta miễn phí
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" /> Luôn có bản cập nhật
                </span>
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" /> Local-first
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" /> Signature SHA-256
                </span>
              </div>
            </div>

            {/* Right: floating real-app preview */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="relative w-full max-w-md mx-auto float-soft"
            >
              <div className="absolute -inset-4 bg-gradient-to-br from-cyan-400/30 to-violet-500/30 blur-2xl rounded-3xl" />
              <div className="relative rounded-2xl border border-white/10 bg-[oklch(0.17_0.024_264)] shadow-2xl overflow-hidden glow-electric">
                {/* Browser chrome */}
                <div className="flex items-center gap-3 px-4 py-2.5 border-b border-white/8 bg-[oklch(0.14_0.022_264)]">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-[oklch(0.62_0.22_25)]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[oklch(0.78_0.16_85)]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[oklch(0.72_0.18_140)]" />
                  </div>
                  <div className="flex-1 text-[10px] text-white/50 font-mono truncate text-center">
                    app.amagent.ai/dashboard
                  </div>
                </div>
                {/* Real screenshot — next/image with responsive sizes */}
                <div className="relative aspect-[1280/800]">
                  <Image
                    src={assetPath("/screenshots/dashboard.png")}
                    alt="AmAgent — Dashboard chính"
                    fill
                    sizes="(max-width: 768px) 100vw, 448px"
                    className="object-cover object-top"
                    loading="lazy"
                    quality={75}
                  />
                </div>
                {/* Floating "ready" badge */}
                <div className="absolute top-12 right-3 flex items-center gap-1.5 px-2 py-1 rounded-full bg-emerald-500/15 border border-emerald-400/40 backdrop-blur-md text-[10px] text-emerald-200">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  agent sẵn sàng
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* FAQ teaser */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-14 text-center"
        >
          <div className="text-white/55 text-sm">
            Còn câu hỏi?{" "}
            <a
              href="mailto:hello@devhub.solutions"
              className="text-cyan-300 hover:text-cyan-200 underline-offset-4 hover:underline"
            >
              hello@devhub.solutions
            </a>{" "}
            · phản hồi trong &lt; 6 giờ
          </div>
        </motion.div>
      </div>
    </section>
  );
}
