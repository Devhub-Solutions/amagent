"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";

const TICKER_ITEMS = [
  "GHI THAO TÁC MỘT LẦN",
  "PHÁT LẠI VÔ HẠN",
  "ĐIỀU KHIỂN BẰNG NGÔN NGỮ TỰ NHIÊN",
  "CHẠY ĐA TRÌNH DUYỆT",
  "DỮ LIỆU Ở LẠI MÁY BẠN",
  "KHÔNG CẦN VIẾT MỘT DÒNG CODE",
];

const STATS: { value: number; suffix: string; label: string }[] = [
  { value: 27, suffix: "×", label: "Nhanh hơn thao tác tay" },
  { value: 10000, suffix: "+", label: "Giờ tiết kiệm mỗi tháng" },
  { value: 8, suffix: "", label: "Luồng chạy song song" },
  { value: 99.9, suffix: "%", label: "Uptime agent nền" },
];

function CountUp({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState("0");
  const isDecimal = value % 1 !== 0;

  useEffect(() => {
    if (!inView) return;
    const duration = 1800;
    const start = performance.now();

    function step(now: number) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = eased * value;
      setDisplay(
        isDecimal
          ? current.toFixed(1)
          : Math.floor(current).toLocaleString("en-US"),
      );
      if (progress < 1) requestAnimationFrame(step);
      else
        setDisplay(
          isDecimal ? value.toFixed(1) : value.toLocaleString("en-US"),
        );
    }
    requestAnimationFrame(step);
  }, [inView, value, isDecimal]);

  return (
    <div
      ref={ref}
      className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold tabular-nums text-white"
    >
      {display}
      <span className="text-gradient-electric">{suffix}</span>
    </div>
  );
}

export function TickerStats() {
  return (
    <section className="relative border-y border-white/8 bg-black/20">
      {/* Marquee ticker */}
      <div className="relative overflow-hidden py-3 border-b border-white/8">
        <div className="flex w-max animate-[marquee_32s_linear_infinite] whitespace-nowrap">
          {[0, 1].map((dup) => (
            <div key={dup} className="flex items-center">
              {TICKER_ITEMS.map((item) => (
                <span
                  key={`${dup}-${item}`}
                  className="mx-8 font-display text-sm tracking-[0.25em] text-white/35"
                >
                  {item}
                  <span className="ml-8 text-cyan-300/70">/</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Stats row */}
      <div className="mx-auto max-w-7xl px-5 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-6">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="border-l border-white/10 pl-5"
            >
              <CountUp value={s.value} suffix={s.suffix} />
              <div className="mt-2 font-mono text-[11px] uppercase tracking-[0.2em] text-white/45">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
