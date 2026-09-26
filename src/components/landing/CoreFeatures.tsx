"use client";

import { motion } from "motion/react";
import Image from "next/image";
import {
  Bot,
  Database,
  Layers,
  MousePointerClick,
  MessageSquare,
  Redo2,
  Globe2,
  ArrowUpRight,
  CheckCircle2,
  MousePointer2,
  Chrome,
} from "lucide-react";
import { SectionMarker } from "./SectionMarker";
import { assetPath } from "@/lib/assets";

type Feature = {
  id: string;
  icon: React.ElementType;
  eyebrow: string;
  title: string;
  description: string;
  bullets: string[];
  mock: React.ReactNode;
};

const FEATURES: Feature[] = [
  {
    id: "rpa",
    icon: MousePointerClick,
    eyebrow: "RPA Engine",
    title: "Tự động hoá tác vụ kiểu RPA",
    description:
      "Lập luồng tự động hoá multi-step với điều kiện nhánh, vòng lặp, biến và biểu thức. Agent mô phỏng click, gõ phím, scroll, upload file chính xác đến từng pixel — chạy cả ngàn lần không mệt.",
    bullets: ["Nhánh / loop / biến / biểu thức", "Chạy nền headless", "Lên lịch theo cron"],
    mock: (
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-[10px] text-white/60">
          <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 font-mono">if</span>
          <span>price &gt; 500k</span>
          <span className="text-cyan-300">→</span>
          <span>bỏ qua sản phẩm</span>
        </div>
        <div className="flex items-center gap-2 text-[10px] text-white/60">
          <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 font-mono">loop</span>
          <span>50 trang</span>
          <span className="text-cyan-300">→</span>
          <span>cào từng card</span>
        </div>
        <div className="flex items-center gap-2 text-[10px] text-white/60">
          <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 font-mono">end</span>
        </div>
      </div>
    ),
  },
  {
    id: "chat",
    icon: MessageSquare,
    eyebrow: "Agent Chat",
    title: "Điều khiển bằng ngôn ngữ tự nhiên",
    description:
      "Mô tả việc cần làm bằng tiếng Việt hoặc tiếng Anh — Agent tự hiểu ngữ cảnh trang, sinh plan từng bước, hỏi lại khi thiếu thông tin và thực thi ngay trên trình duyệt đang mở. Không cần code, không cần kéo-thả.",
    bullets: ["Hiểu ngữ cảnh DOM hiện tại", "Hỏi lại khi mập mờ", "Sửa lỗi tự động khi web đổi"],
    mock: (
      <div className="flex flex-col gap-1.5 text-[10px]">
        <div className="self-end max-w-[80%] rounded-lg rounded-tr-sm bg-[oklch(0.62_0.20_259)] text-white px-2 py-1.5">
          Lọc đơn VIP hôm nay, gửi email cảm ơn.
        </div>
        <div className="self-start max-w-[85%] rounded-lg rounded-tl-sm bg-white/8 text-white/90 px-2 py-1.5">
          Đã hiểu · 18 đơn VIP · email template <span className="text-cyan-300">thankyou_v2</span>
        </div>
        <div className="self-start text-white/50 ml-1 text-[9px]">đang gửi 18 email…</div>
      </div>
    ),
  },
  {
    id: "record",
    icon: Redo2,
    eyebrow: "Record & Replay",
    title: "Ghi thao tác — phát lại muôn lần",
    description:
      "Bấm REC, làm việc như bình thường. Devhub ghi lại mọi click, scroll, nhập liệu và wait thông minh. Phát lại hàng loạt với bộ dữ liệu khác nhau — không cần viết một dòng code.",
    bullets: ["Smart wait cho web chậm", "Tham số hoá đầu vào", "Replay batch hàng nghìn dòng"],
    mock: (
      <div className="space-y-1.5 text-[10px] text-white/70 font-mono">
        <div className="flex items-center gap-2">
          <span className="text-rose-400">●</span> open erp.example.com
        </div>
        <div className="flex items-center gap-2">
          <span className="text-cyan-300">→</span> login {"{{user}}"}, {"{{pass}}"}
        </div>
        <div className="flex items-center gap-2">
          <span className="text-cyan-300">→</span> click "Đơn hàng"
        </div>
        <div className="flex items-center gap-2">
          <span className="text-cyan-300">→</span> fill form từ rows.csv
        </div>
        <div className="flex items-center gap-2">
          <span className="text-emerald-400">✓</span> save & next (×120)
        </div>
      </div>
    ),
  },
  {
    id: "browsers",
    icon: Globe2,
    eyebrow: "Multi-Browser",
    title: "Tích hợp đa trình duyệt",
    description:
      "Chạy song song trên Chrome, Edge, Firefox và Brave. Mỗi agent có profile riêng — cookie, phiên đăng nhập, fingerprint tách bạch. Đồng bộ dữ liệu giữa các luồng qua biến dùng chung.",
    bullets: ["Chrome · Edge · Firefox · Brave", "Profile & cookie độc lập", "Chạy song song 8 luồng"],
    mock: (
      <div className="grid grid-cols-4 gap-1.5">
        {[
          { name: "Chrome", color: "bg-rose-400" },
          { name: "Edge", color: "bg-cyan-400" },
          { name: "Firefox", color: "bg-amber-400" },
          { name: "Brave", color: "bg-violet-400" },
        ].map((b, i) => (
          <motion.div
            key={b.name}
            initial={{ opacity: 0.5 }}
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.6, repeat: Infinity, delay: i * 0.25 }}
            className="rounded-md bg-white/6 border border-white/8 p-1.5 flex flex-col items-center gap-1"
          >
            <span className={`h-1.5 w-full rounded ${b.color}`} />
            <span className="text-[8px] text-white/70">{b.name}</span>
            <span className="text-[8px] text-cyan-300">live</span>
          </motion.div>
        ))}
      </div>
    ),
  },
];

export function CoreFeatures() {
  return (
    <section id="features" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-circuit-fine opacity-30 pointer-events-none [mask-image:radial-gradient(50%_50%_at_50%_50%,black,transparent)]" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <SectionMarker index="02" label="Core Features" icon={Layers} />
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white leading-tight">
            Bốn năng lực cốt lõi để{" "}
            <span className="text-gradient-electric">AI làm thay bạn</span>.
          </h2>
          <p className="mt-4 text-white/60 text-base lg:text-lg max-w-2xl">
            Mỗi năng lực được thiết kế để hoạt động độc lập, nhưng khi kết hợp lại
            tạo nên một pipeline tự động hoá hoàn chỉnh — từ ý định đến kết quả.
          </p>
        </motion.div>

        {/* Feature grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
          {FEATURES.map((f, idx) => (
            <motion.article
              key={f.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: (idx % 2) * 0.08 }}
              className="group relative rounded-3xl glass overflow-hidden hover:border-white/20 transition-colors"
            >
              {/* hover gradient sweep */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute -inset-x-20 -top-20 h-40 bg-gradient-to-b from-cyan-400/15 to-transparent blur-2xl" />
              </div>

              <div className="relative p-6 lg:p-8 flex flex-col gap-5">
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="relative h-11 w-11 rounded-xl bg-gradient-to-br from-[oklch(0.62_0.20_259)] to-[oklch(0.58_0.21_295)] flex items-center justify-center shadow-lg">
                      <f.icon className="h-5 w-5 text-white" />
                      <div className="absolute inset-0 rounded-xl ring-1 ring-white/20" />
                    </div>
                    <div>
                      <div className="text-[11px] uppercase tracking-widest text-cyan-300/80">
                        {f.eyebrow}
                      </div>
                      <h3 className="text-lg font-semibold text-white font-display mt-0.5">
                        {f.title}
                      </h3>
                    </div>
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-white/30 group-hover:text-cyan-300 group-hover:rotate-45 transition-all" />
                </div>

                {/* Body */}
                <p className="text-sm text-white/65 leading-relaxed">
                  {f.description}
                </p>

                {/* Mini visual mock */}
                <motion.div
                  initial={{ opacity: 0.6 }}
                  whileHover={{ opacity: 1 }}
                  className="relative rounded-2xl bg-black/30 border border-white/8 p-4 min-h-[120px] flex items-center"
                >
                  <div className="absolute top-2 right-3 text-[9px] text-white/30 font-mono">
                    feature preview
                  </div>
                  <div className="w-full">{f.mock}</div>
                </motion.div>

                {/* Bullets */}
                <div className="flex flex-wrap gap-2">
                  {f.bullets.map((b) => (
                    <span
                      key={b}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/4 border border-white/10 text-[11px] text-white/65"
                    >
                      <CheckCircle2 className="h-3 w-3 text-emerald-400" />
                      {b}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Sub-feature strip */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3"
        >
          {[
            { icon: Bot, label: "AI Agent Engine v2.4" },
            { icon: Database, label: "Local-first storage" },
            { icon: MousePointer2, label: "Pixel-perfect replay" },
            { icon: Chrome, label: "Chrome / Edge / Firefox / Brave" },
          ].map((s) => (
            <div
              key={s.label}
              className="flex items-center gap-2 px-4 py-3 rounded-xl glass"
            >
              <s.icon className="h-4 w-4 text-cyan-300 shrink-0" />
              <span className="text-xs text-white/75">{s.label}</span>
            </div>
          ))}
        </motion.div>

        {/* Real app screenshots strip — additional evidence of the product */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3"
        >
          {([
            { shot: "dashboard", label: "Dashboard" },
            { shot: "chat", label: "Agent Chat" },
            { shot: "runs", label: "Runs" },
            { shot: "data", label: "Data" },
          ] as { shot: "dashboard" | "chat" | "runs" | "data"; label: string }[]).map(
            (s) => (
              <div
                key={s.shot}
                className="group relative rounded-xl overflow-hidden border border-white/8 hover:border-cyan-300/30 transition-colors aspect-[16/9]"
              >
                <Image
                  src={assetPath(`/screenshots/${s.shot}.png`)}
                  alt={`AmAgent — ${s.label}`}
                  fill
                  sizes="(max-width: 768px) 50vw, 320px"
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  quality={60}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute bottom-1.5 left-2 text-[10px] text-white/85 font-medium">
                  {s.label}
                </div>
                <div className="absolute top-1.5 right-2 text-[9px] px-1.5 py-0.5 rounded bg-black/50 text-cyan-300 backdrop-blur-sm border border-cyan-300/30">
                  live
                </div>
              </div>
            ),
          )}
        </motion.div>
      </div>
    </section>
  );
}
