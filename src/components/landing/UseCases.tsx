"use client";

import { motion } from "motion/react";
import {
  FileSpreadsheet,
  ShieldCheck,
  Database,
  ClipboardList,
  ArrowUpRight,
  Building2,
  ShoppingCart,
  Search,
  FlaskConical,
} from "lucide-react";
import { SectionMarker } from "./SectionMarker";

const USE_CASES = [
  {
    icon: FileSpreadsheet,
    title: "Nhập liệu hàng loạt",
    sector: "Vận hành / Kế toán",
    desc: "Đẩy 1.000 dòng từ Excel lên ERP cũ chỉ trong vài phút. Form động, validate, retry khi lỗi — không cần API.",
    stat: "~27×",
    statLabel: "nhanh hơn thủ công",
    accent: "from-cyan-400 to-blue-500",
  },
  {
    icon: FlaskConical,
    title: "Kiểm thử web tự động",
    sector: "QA / Dev",
    desc: "Smoke test, regression test, E2E test trên 4 trình duyệt song song. Báo cáo screenshot + video mỗi lần fail.",
    stat: "8 luồng",
    statLabel: "chạy song song",
    accent: "from-violet-400 to-purple-500",
  },
  {
    icon: Database,
    title: "Thu thập dữ liệu",
    sector: "Marketing / Research",
    desc: "Cào giá đối thủ, review, tin rao vặt theo lịch. Xử lý phân trang, infinite scroll, login wall mà không cần code.",
    stat: "50k+",
    statLabel: "record / ngày",
    accent: "from-emerald-400 to-teal-500",
  },
  {
    icon: ClipboardList,
    title: "Xử lý form lặp",
    sector: "Hành chính / Nhân sự",
    desc: "Điền đơn xin nghỉ phép, báo cáo tuần, đăng ký KPI cho cả team — từ một template. Lưu lịch sử đầy đủ.",
    stat: "−92%",
    statLabel: "thời gian nhập",
    accent: "from-amber-400 to-orange-500",
  },
];

const SECTORS = [
  { icon: ShoppingCart, label: "E-commerce" },
  { icon: Building2, label: "Bán lẻ / F&B" },
  { icon: Search, label: "Nghiên cứu thị trường" },
  { icon: ShieldCheck, label: "Tài chính / Ngân hàng" },
  { icon: FlaskConical, label: "QA / SaaS" },
  { icon: Database, label: "Vận hành dữ liệu" },
];

export function UseCases() {
  return (
    <section id="use-cases" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 mesh-glow-deep opacity-60 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-10 items-end mb-12">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <SectionMarker index="05" label="Use Cases" icon={Database} />
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white leading-tight">
              Một công cụ,{" "}
              <span className="text-gradient-electric">muôn hình muôn kiểu</span>{" "}
              dùng.
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="text-white/60 text-base lg:text-lg"
          >
            Từ nhập liệu kế toán đến cào dữ liệu thị trường — Devhub thay cho
            mọi quy trình nhàm chán mà bạn từng phải thuê người hoặc viết script.
          </motion.p>
        </div>

        {/* Use case grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5">
          {USE_CASES.map((uc, i) => (
            <motion.article
              key={uc.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 2) * 0.06 }}
              className="group relative rounded-3xl glass p-6 lg:p-7 overflow-hidden hover:border-white/20 transition-colors"
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br opacity-0 group-hover:opacity-20 transition-opacity blur-2xl"
                style={{
                  background: `linear-gradient(135deg, ${i % 2 === 0 ? "oklch(0.72 0.19 244)" : "oklch(0.66 0.18 295)"}, transparent)`,
                }}
              />
              <div className="relative flex items-start gap-4">
                <div
                  className={`h-12 w-12 rounded-xl bg-gradient-to-br ${uc.accent} flex items-center justify-center shadow-lg shrink-0`}
                >
                  <uc.icon className="h-5 w-5 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="font-display text-lg font-semibold text-white">
                      {uc.title}
                    </h3>
                    <ArrowUpRight className="h-4 w-4 text-white/30 group-hover:text-cyan-300 group-hover:rotate-45 transition-all" />
                  </div>
                  <div className="text-[11px] uppercase tracking-widest text-cyan-300/80 mt-0.5">
                    {uc.sector}
                  </div>
                  <p className="mt-3 text-sm text-white/65 leading-relaxed">
                    {uc.desc}
                  </p>
                  <div className="mt-4 flex items-baseline gap-2">
                    <span
                      className={`font-display text-2xl font-bold bg-gradient-to-br ${uc.accent} bg-clip-text text-transparent`}
                    >
                      {uc.stat}
                    </span>
                    <span className="text-xs text-white/45">{uc.statLabel}</span>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Sector marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mt-12 relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]"
        >
          <div className="flex gap-3 marquee w-max">
            {[...SECTORS, ...SECTORS].map((s, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl glass text-sm text-white/70 whitespace-nowrap"
              >
                <s.icon className="h-4 w-4 text-cyan-300" />
                {s.label}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
