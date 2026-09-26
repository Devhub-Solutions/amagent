"use client";

import { motion } from "motion/react";
import {
  Cpu,
  HardDrive,
  MonitorSmartphone,
  ShieldCheck,
  Lock,
  Eye,
  Chrome,
  Apple,
  Terminal,
  Fingerprint,
  Database,
  Wifi,
  RefreshCw,
} from "lucide-react";
import { Pill } from "./Mockups";
import { SectionMarker } from "./SectionMarker";

const SPECS = [
  {
    icon: Cpu,
    label: "CPU",
    value: "Intel i5 / Apple M1 trở lên",
    detail: "2 nhân vật lý tối thiểu · khuyến nghị 4 nhân+",
  },
  {
    icon: HardDrive,
    label: "RAM",
    value: "8 GB trở lên",
    detail: "12 GB+ nếu chạy 8 luồng song song",
  },
  {
    icon: MonitorSmartphone,
    label: "Màn hình",
    value: "1366 × 768 trở lên",
    detail: "Full HD+ cho workflow builder",
  },
  {
    icon: HardDrive,
    label: "Ổ cứng",
    value: "1.2 GB cài đặt",
    detail: "~10 GB cho cache & log tuỳ chỉnh",
  },
  {
    icon: Wifi,
    label: "Mạng",
    value: "10 Mbps trở lên",
    detail: "Local-first · không cần internet để chạy",
  },
  {
    icon: Apple,
    label: "OS",
    value: "macOS 12+ · Windows 10/11",
    detail: "Linux bản preview cho team DevOps",
  },
];

const SECURITY = [
  {
    icon: Database,
    title: "Local-first storage",
    desc: "Toàn bộ workflow, log và dữ liệu thu thập lưu tại máy bạn. Không có đám mây, không có telemetry trộm.",
  },
  {
    icon: Lock,
    title: "Mã hoá AES-256",
    desc: "Mật khẩu đăng nhập, cookie và secret được mã hoá AES-256-GCM trong vault cục bộ. Khoá mở bằng master password.",
  },
  {
    icon: Eye,
    title: "Chế độ riêng tư",
    desc: "Chụp ảnh màn hình tự động che thông tin nhạy cảm (số thẻ, CCCD, OTP). Có thể tắt lưu log hoàn toàn.",
  },
  {
    icon: Fingerprint,
    title: "Cách ly profile",
    desc: "Mỗi agent có profile riêng — cookie, fingerprint, phiên đăng nhập tách bạch. Không trộn lẫn giữa các luồng.",
  },
];

const COMPAT = [
  { icon: Chrome, name: "Chrome", version: "120+", note: "Chromium / Brave" },
  { icon: Chrome, name: "Edge", version: "120+", note: "Chromium engine" },
  { icon: Chrome, name: "Firefox", version: "120+", note: "Gecko engine" },
  { icon: Apple, name: "Safari", version: "Preview", note: "macOS only" },
];

export function TrustSpecs() {
  return (
    <section id="specs" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-circuit-fine opacity-25 pointer-events-none [mask-image:radial-gradient(50%_50%_at_50%_50%,black,transparent)]" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <SectionMarker index="06" label="Trust & Specs" icon={ShieldCheck} />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white leading-tight"
          >
            Đáng tin cậy đủ để{" "}
            <span className="text-gradient-electric">chạy trong doanh nghiệp</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="mt-4 text-white/60 text-base lg:text-lg"
          >
            Yêu cầu hệ thống nhẹ, bảo mật dữ liệu cục bộ, tương thích nhiều trình
            duyệt — Devhub chạy được trên laptop nhân viên, không cần hạ tầng riêng.
          </motion.p>
        </div>

        {/* Spec grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {SPECS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.05 }}
              className="rounded-2xl glass p-5 flex items-start gap-4"
            >
              <div className="h-10 w-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                <s.icon className="h-5 w-5 text-cyan-300" />
              </div>
              <div>
                <div className="text-[11px] uppercase tracking-widest text-white/45">
                  {s.label}
                </div>
                <div className="text-sm font-medium text-white mt-0.5">
                  {s.value}
                </div>
                <div className="text-xs text-white/50 mt-1">{s.detail}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Security panel */}
        <div className="mt-14 grid lg:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="rounded-3xl glass p-6 lg:p-8"
          >
            <div className="flex items-center gap-2 mb-5">
              <ShieldCheck className="h-5 w-5 text-emerald-400" />
              <h3 className="font-display text-xl font-semibold text-white">
                Bảo mật dữ liệu cục bộ
              </h3>
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              {SECURITY.map((s) => (
                <div key={s.title} className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <div className="h-7 w-7 rounded-lg bg-emerald-400/10 border border-emerald-400/30 flex items-center justify-center">
                      <s.icon className="h-3.5 w-3.5 text-emerald-300" />
                    </div>
                    <span className="text-sm font-medium text-white">{s.title}</span>
                  </div>
                  <p className="text-xs text-white/55 leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              <Pill icon={Lock} tone="emerald">AES-256-GCM</Pill>
              <Pill icon={Fingerprint} tone="emerald">Profile isolation</Pill>
              <Pill icon={Eye} tone="emerald">No telemetry</Pill>
            </div>
          </motion.div>

          {/* Compatibility */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="rounded-3xl glass p-6 lg:p-8"
          >
            <div className="flex items-center gap-2 mb-5">
              <RefreshCw className="h-5 w-5 text-cyan-300" />
              <h3 className="font-display text-xl font-semibold text-white">
                Tương thích trình duyệt
              </h3>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {COMPAT.map((b) => (
                <div
                  key={b.name}
                  className="rounded-2xl bg-white/4 border border-white/8 p-4 flex items-center gap-3"
                >
                  <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center">
                    <b.icon className="h-5 w-5 text-white/80" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-white">{b.name}</div>
                    <div className="text-[11px] text-cyan-300/80">{b.version}</div>
                    <div className="text-[10px] text-white/45">{b.note}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-5 text-xs text-white/55 leading-relaxed">
              Mỗi trình duyệt có driver riêng, tự cập nhật khi có phiên bản mới.
              Có thể chạy song song 8 luồng trên 4 trình duyệt khác nhau cùng lúc.
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              <Pill icon={Chrome} tone="cyan">Chromium 120+</Pill>
              <Pill icon={Terminal} tone="cyan">Headless mode</Pill>
              <Pill icon={Apple} tone="cyan">macOS · Windows · Linux</Pill>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
