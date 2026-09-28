"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import {
  MousePointerClick,
  Brain,
  Play,
  FileBarChart,
  ArrowRight,
} from "lucide-react";
import { SectionMarker } from "./SectionMarker";

const STEPS = [
  {
    icon: MousePointerClick,
    title: "Ghi thao tác",
    desc: "Bấm REC và làm việc bình thường. Devhub ghi lại mọi click, gõ phím, scroll kèm selector ổn định — không phải HTML brittle.",
    accent: "from-cyan-400 to-blue-500",
    glow: "oklch(0.82 0.15 196)",
    code: ["record.start()", "click 'login'", "type user / pass", "snapshot DOM"],
  },
  {
    icon: Brain,
    title: "Agent hiểu ngữ cảnh",
    desc: "LLM phân tích trang đang mở, ý định người dùng và dữ liệu đầu vào. Agent lập plan từng bước, hỏi lại nếu thiếu, tự sửa khi web thay đổi.",
    accent: "from-violet-400 to-purple-500",
    glow: "oklch(0.66 0.18 295)",
    code: ["understand intent", "inspect DOM ctx", "build 4-step plan", "ask → confirm"],
  },
  {
    icon: Play,
    title: "Tự động thực thi",
    desc: "Agent chạy trên trình duyệt thật, chờ thông minh khi web chậm, xử lý popup & CAPTCHA nhẹ. Có thể chạy nền headless 8 luồng song song.",
    accent: "from-emerald-400 to-teal-500",
    glow: "oklch(0.75 0.15 160)",
    code: ["smart-wait", "click → fill → submit", "handle popup", "loop × 50"],
  },
  {
    icon: FileBarChart,
    title: "Báo cáo kết quả",
    desc: "Xuất Excel/CSV/JSON, chụp ảnh màn hình từng bước, log đầy đủ và dashboard chạy live. Lỗi tự đánh dấu, retry hoặc gửi Slack.",
    accent: "from-amber-400 to-orange-500",
    glow: "oklch(0.78 0.16 75)",
    code: ["export.xlsx", "screenshot/step", "log → dashboard", "alert → slack"],
  },
];

export function HowItWorks() {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start 75%", "end 25%"],
  });
  // animated progress line
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="how" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 mesh-glow-deep opacity-70 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <SectionMarker index="03" label="How It Works" icon={Brain} />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white leading-tight"
          >
            Từ ý định đến kết quả{" "}
            <span className="text-gradient-electric">trong 4 bước</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="mt-4 text-white/60 text-base lg:text-lg"
          >
            Mỗi bước nối tiếp bước trước — connect-the-dots — khi bạn cuộn tới.
            Đó là cách Devhub biến một yêu cầu bằng lời thành một pipeline chạy
            được 24/7.
          </motion.p>
        </div>

        {/* Diagram track */}
        <div ref={trackRef} className="relative mt-20">
          {/* center progress line (desktop) */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-px">
            <div className="absolute inset-0 bg-white/8" />
            <motion.div
              style={{ scaleY: lineScale, transformOrigin: "top" }}
              className="absolute inset-0 bg-gradient-to-b from-cyan-400 via-violet-400 to-amber-400"
            />
          </div>

          <div className="flex flex-col gap-16 lg:gap-28">
            {STEPS.map((step, i) => {
              const isLeft = i % 2 === 0;
              return (
                <div
                  key={step.title}
                  className="relative grid lg:grid-cols-2 gap-8 items-center"
                >
                  {/* Number badge on the center line */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.6 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                    className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 h-12 w-12 rounded-full items-center justify-center font-mono text-sm text-white bg-gradient-to-br from-[oklch(0.20_0.030_264)] to-[oklch(0.17_0.024_264)] border-2 border-white/15"
                    style={{ boxShadow: `0 0 24px ${step.glow}` }}
                  >
                    <span style={{ color: step.glow }}>{`0${i + 1}`}</span>
                  </motion.div>

                  {/* Text side */}
                  <motion.div
                    initial={{ opacity: 0, x: isLeft ? -32 : 32 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.6 }}
                    className={isLeft ? "lg:pr-12 lg:text-right" : "lg:order-2 lg:pl-12"}
                  >
                    <div
                      className={`inline-flex items-center gap-2 ${
                        isLeft ? "lg:flex-row-reverse" : ""
                      }`}
                    >
                      <div
                        className={`h-10 w-10 rounded-xl bg-gradient-to-br ${step.accent} flex items-center justify-center shadow-lg`}
                      >
                        <step.icon className="h-5 w-5 text-white" />
                      </div>
                      <span className="text-xs uppercase tracking-widest text-white/50">
                        Bước {i + 1}
                      </span>
                    </div>
                    <h3 className="mt-3 font-display text-2xl font-semibold text-white">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-white/60 text-sm lg:text-base leading-relaxed">
                      {step.desc}
                    </p>
                  </motion.div>

                  {/* Visual side: terminal log */}
                  <motion.div
                    initial={{ opacity: 0, x: isLeft ? 32 : -32 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.6, delay: 0.08 }}
                    className={isLeft ? "" : "lg:order-1"}
                  >
                    <div className="rounded-2xl glass p-5 max-w-md mx-auto">
                      <div className="flex items-center gap-1.5 mb-3">
                        <span className="h-2.5 w-2.5 rounded-full bg-rose-400/70" />
                        <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
                        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
                        <span className="ml-2 text-[10px] text-white/40 font-mono">
                          step_{i + 1}.log
                        </span>
                      </div>
                      <div className="flex flex-col gap-1.5 font-mono text-xs">
                        {step.code.map((line, li) => (
                          <motion.div
                            key={li}
                            initial={{ opacity: 0, x: -8 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: li * 0.12 }}
                            className="flex items-center gap-2"
                          >
                            <span
                              className="text-[10px] w-5"
                              style={{ color: step.glow }}
                            >
                              {String(li + 1).padStart(2, "0")}
                            </span>
                            <span className="text-white/80">{line}</span>
                            <span className="ml-auto text-white/30">✓</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mt-20 flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <a
            href="#download"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium text-white bg-gradient-to-br from-[oklch(0.62_0.20_259)] to-[oklch(0.58_0.21_295)] glow-electric hover:scale-[1.03] transition-transform"
          >
            Bắt đầu trong 2 phút
            <ArrowRight className="h-4 w-4" />
          </a>
          <span className="text-xs text-white/45">
            Miễn phí trong giai đoạn Beta · góp ý để cùng hoàn thiện
          </span>
        </motion.div>
      </div>
    </section>
  );
}
