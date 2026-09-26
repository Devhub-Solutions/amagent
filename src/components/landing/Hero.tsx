"use client";

import { motion } from "motion/react";
import { assetPath } from "@/lib/assets";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle2,
  Download,
  Play,
  Sparkles,
} from "lucide-react";
import { BrowserWindow, CursorTrail } from "./Mockups";
import { CircuitBackground } from "./CircuitBackground";
import { SectionMarker } from "./SectionMarker";
import { AppleIcon, WindowsIcon, LinuxIcon } from "./PlatformIcons";

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};
const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export function Hero() {
  return (
    <section
      id="top"
      className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden"
    >
      {/* Layered backgrounds */}
      <div className="absolute inset-0 mesh-glow-deep pointer-events-none" />
      <div className="absolute inset-0 bg-circuit pointer-events-none [mask-image:radial-gradient(60%_50%_at_50%_30%,black,transparent)]" />
      <CircuitBackground className="opacity-70" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center text-center"
        >
          {/* Eyebrow */}
          <motion.div variants={item}>
            <SectionMarker index="01" label="Devhub Solutions" />
          </motion.div>
          <motion.div
            variants={item}
            className="mt-1 inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs text-white/80"
          >
            <Sparkles className="h-3.5 w-3.5 text-cyan-300" />
            <span>Phiên bản 2.4 · Agent Engine thế hệ mới</span>
            <span className="h-3 w-px bg-white/15" />
            <span className="text-cyan-300/80">vừa phát hành</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={item}
            className="mt-6 font-display text-4xl sm:text-5xl lg:text-7xl font-semibold tracking-tight text-white max-w-5xl leading-[1.05]"
          >
            AI Agent{" "}
            <span className="text-gradient-electric">tự động hoá</span>
            <br className="hidden sm:block" /> trình duyệt của bạn
          </motion.h1>

          {/* Subhead */}
          <motion.p
            variants={item}
            className="mt-5 max-w-2xl text-base sm:text-lg text-white/65 leading-relaxed"
          >
            Devhub Solutions ghi & phát lại thao tác, điều khiển trình duyệt bằng
            ngôn ngữ tự nhiên và chạy RPA trên nhiều trình duyệt cùng lúc — để bạn
            rảnh tay làm việc xứng đáng với con người.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={item}
            className="mt-8 flex flex-col sm:flex-row items-center gap-3"
          >
            <a
              href="#download"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl text-base font-medium text-white bg-gradient-to-br from-[oklch(0.62_0.20_259)] to-[oklch(0.58_0.21_295)] pulse-glow hover:scale-[1.03] transition-transform"
            >
              <Download className="h-4 w-4" />
              Tải xuống miễn phí
              <ArrowRight className="h-4 w-4 -mr-1 group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a
              href="#how"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-base font-medium text-white/85 glass hover:bg-white/8 transition-colors"
            >
              <Play className="h-4 w-4 text-cyan-300" />
              Xem demo 60s
            </a>
          </motion.div>

          {/* Trust row */}
          <motion.div
            variants={item}
            className="mt-7 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-white/55"
          >
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" /> Dữ liệu
              cục bộ — không lên cloud
            </span>
            <span className="flex items-center gap-1.5">
              <AppleIcon className="h-4 w-4 text-cyan-300" glow="soft" /> macOS 12+
            </span>
            <span className="flex items-center gap-1.5">
              <WindowsIcon className="h-4 w-4 text-cyan-300" glow="soft" /> Windows 10/11
            </span>
            <span className="flex items-center gap-1.5">
              <LinuxIcon className="h-4 w-4 text-cyan-300" glow="soft" /> Linux 64-bit
            </span>
            <span className="flex items-center gap-1.5">
              <Sparkles className="h-3.5 w-3.5 text-violet-300" /> 14 ngày dùng
              thử Pro
            </span>
          </motion.div>
        </motion.div>

        {/* Hero mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35, ease: "easeOut" }}
          className="relative mt-16 lg:mt-20 mx-auto max-w-5xl"
        >
          {/* Soft glow behind */}
          <div className="absolute -inset-x-12 -inset-y-6 bg-gradient-to-br from-cyan-500/20 via-blue-600/15 to-violet-600/20 blur-3xl rounded-[40px] pointer-events-none" />

          {/* Floating mini panels */}
          <motion.div
            initial={{ opacity: 0, x: -40, y: 10 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ delay: 0.7, duration: 0.7 }}
            className="hidden lg:block absolute -left-16 top-12 z-20 float-soft"
          >
            <div className="glass rounded-2xl p-3 w-56">
              <div className="flex items-center gap-2 text-xs text-white/80 mb-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Agent đang chạy
              </div>
              <div className="flex flex-col gap-1.5 text-[11px] text-white/70">
                <div className="flex justify-between">
                  <span>Trang đã duyệt</span>
                  <span className="text-cyan-300 tabular-nums">42</span>
                </div>
                <div className="flex justify-between">
                  <span>Click đã thực hiện</span>
                  <span className="text-cyan-300 tabular-nums">318</span>
                </div>
                <div className="flex justify-between">
                  <span>Dòng đã nhập</span>
                  <span className="text-cyan-300 tabular-nums">1.2k</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40, y: 10 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ delay: 0.85, duration: 0.7 }}
            className="hidden lg:block absolute -right-12 -bottom-8 z-20 float-soft [animation-delay:-3s]"
          >
            <div className="glass rounded-2xl p-3 w-60">
              <div className="flex items-center gap-2 mb-2">
                <div className="h-6 w-6 rounded-md bg-gradient-to-br from-cyan-400 to-violet-500" />
                <span className="text-xs text-white/85">Workflow · 12 bước</span>
              </div>
              <div className="text-[11px] text-white/55">
                Hoàn tất trong{" "}
                <span className="text-cyan-300 font-medium">3 phút 22 giây</span>{" "}
                — nhanh hơn thủ công 27×.
              </div>
            </div>
          </motion.div>

          {/* Main browser window with REAL app screenshot */}
          <BrowserWindow url="app.amagent.ai/login">
            <div className="relative bg-[oklch(0.14_0.022_264)] aspect-[1285/783]">
              {/* Real app screenshot (dark login screen) — LCP image, priority + AVIF/WebP */}
              <Image
                src={assetPath("/screenshots/login.png")}
                alt="AmAgent — màn hình đăng nhập"
                fill
                priority
                fetchPriority="high"
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1024px"
                className="object-cover object-top"
                quality={80}
              />
              {/* scan-line vignette to blend screenshot with dark UI */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              <CursorTrail />
              {/* bottom action bar — keeps the "agent is acting" vibe */}
              <div className="absolute bottom-3 left-3 right-3 flex items-center gap-2 px-3 py-2 rounded-lg bg-black/55 border border-white/10 backdrop-blur-md">
                <span className="text-[10px] text-rose-400 font-mono">● REC</span>
                <span className="text-[11px] text-white/70 font-mono truncate">
                  agent đã mở trang → điền thông tin đăng nhập → sẵn sàng điều khiển
                </span>
                <span className="ml-auto text-[10px] text-cyan-300 shrink-0">live</span>
              </div>
            </div>
          </BrowserWindow>
        </motion.div>

        {/* Logos / trust strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="mt-16 flex flex-col items-center gap-3"
        >
          <div className="text-[11px] uppercase tracking-widest text-white/35">
            Đang đồng hành cùng các đội ngũ tại
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-white/40">
            {["FPT Retail", "Tiki Ops", "Vinmec Data", "Sapo Cloud", "Momo QA"].map(
              (b) => (
                <span
                  key={b}
                  className="font-display text-base font-medium tracking-tight"
                >
                  {b}
                </span>
              ),
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
