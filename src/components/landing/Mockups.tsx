"use client";

import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import {
  Activity,
  Bot,
  CheckCircle2,
  Chrome,
  CircleDot,
  MousePointer2,
  Database,
  FileSpreadsheet,
  LayoutGrid,
  MousePointerClick,
  Play,
  Redo2,
  Settings2,
  Terminal,
  Workflow,
  Zap,
} from "lucide-react";
import { cn } from "@/lib/utils";

/* ============================================================
 * BrowserWindow — desktop browser mockup with traffic lights,
 * URL bar and a softly glowing frame.
 * ============================================================ */
export function BrowserWindow({
  url = "app.devhub.solutions/agent",
  children,
  className,
  active = true,
}: {
  url?: string;
  children?: React.ReactNode;
  className?: string;
  active?: boolean;
}) {
  return (
    <div
      className={cn(
        "relative rounded-xl border border-white/10 bg-[oklch(0.19_0.028_264)] shadow-2xl overflow-hidden",
        active && "glow-electric",
        className,
      )}
    >
      {/* Title bar */}
      <div className="flex items-center gap-3 px-4 py-2.5 border-b border-white/8 bg-[oklch(0.17_0.024_264)]">
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
          <Settings2 className="h-3.5 w-3.5" />
        </div>
      </div>
      {/* Content area */}
      <div className="relative">{children}</div>
    </div>
  );
}

/* ============================================================
 * ChatPanel — Agent Chat mockup with typing indicator.
 * ============================================================ */
export function ChatPanel({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "rounded-2xl glass p-4 w-full max-w-sm flex flex-col gap-3",
        className,
      )}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="relative h-8 w-8 rounded-lg overflow-hidden ring-1 ring-white/15 shadow-lg shrink-0">
            <Image
              src="/logo-nav.png"
              alt="Devhub Solutions logo"
              fill
              sizes="32px"
              className="object-contain"
            />
          </div>
          <div>
            <div className="text-sm font-semibold text-white">AmAgent</div>
            <div className="text-[10px] text-cyan-300/80 flex items-center gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              đang quan sát trình duyệt
            </div>
          </div>
        </div>
        <Terminal className="h-4 w-4 text-white/40" />
      </div>

      {/* messages */}
      <div className="flex flex-col gap-2">
        <div className="self-end max-w-[80%] rounded-2xl rounded-tr-sm bg-[oklch(0.62_0.20_259)] text-white text-xs px-3 py-2">
          Tìm 50 sản phẩm giá dưới 500k trên Shopee, xuất ra Excel nhé.
        </div>
        <div className="self-start max-w-[85%] rounded-2xl rounded-tl-sm bg-white/8 text-white/90 text-xs px-3 py-2 flex flex-col gap-1.5">
          <div className="flex items-center gap-1.5 text-cyan-300">
            <CheckCircle2 className="h-3 w-3" />
            Đã hiểu: 50 sản phẩm · giá &lt; 500.000đ · xuất Excel
          </div>
          <div className="text-white/70">Bắt đầu tự động hoá...</div>
          <div className="flex flex-col gap-1 mt-1 text-[10px] text-white/60">
            <span className="flex items-center gap-1.5">
              <MousePointerClick className="h-3 w-3 text-cyan-300" />
              Mở shopee.vn, gõ từ khoá tìm kiếm
            </span>
            <span className="flex items-center gap-1.5">
              <Database className="h-3 w-3 text-violet-300" />
              Cào dữ liệu qua 5 trang kết quả
            </span>
            <span className="flex items-center gap-1.5">
              <FileSpreadsheet className="h-3 w-3 text-emerald-300" />
              Ghi vào Excel · 50 dòng · 8 cột
            </span>
          </div>
        </div>
        <div className="self-start flex items-center gap-1 text-[10px] text-white/50 ml-1">
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 animate-bounce [animation-delay:-0.2s]" />
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 animate-bounce [animation-delay:-0.1s]" />
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 animate-bounce" />
          đang thao tác...
        </div>
      </div>

      {/* input */}
      <div className="flex items-center gap-2 mt-1 px-3 py-2 rounded-xl bg-white/5 border border-white/10">
        <span className="text-xs text-white/40 flex-1">Nhập yêu cầu cho Agent…</span>
        <div className="h-7 w-7 rounded-lg bg-gradient-to-br from-[oklch(0.62_0.20_259)] to-[oklch(0.58_0.21_295)] flex items-center justify-center">
          <Zap className="h-3.5 w-3.5 text-white" />
        </div>
      </div>
    </div>
  );
}

/* ============================================================
 * WorkflowBuilder — node-based automation builder mockup.
 * ============================================================ */
export function WorkflowBuilder({ className }: { className?: string }) {
  const nodes = [
    { icon: MousePointerClick, label: "Mở trang", color: "from-cyan-400 to-blue-500" },
    { icon: MousePointer2, label: "Click nút", color: "from-violet-400 to-purple-500" },
    { icon: Database, label: "Lấy dữ liệu", color: "from-emerald-400 to-teal-500" },
    { icon: FileSpreadsheet, label: "Xuất Excel", color: "from-amber-400 to-orange-500" },
  ];
  return (
    <div
      className={cn(
        "rounded-2xl glass p-4 w-full max-w-md",
        className,
      )}
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <Workflow className="h-4 w-4 text-cyan-300" />
          <span className="text-sm font-semibold text-white">Workflow Builder</span>
        </div>
        <span className="text-[10px] text-white/40">12 bước · đã lưu</span>
      </div>
      <div className="grid grid-cols-4 gap-2 relative">
        {/* connector line */}
        <div className="absolute top-5 left-2 right-2 h-px bg-gradient-to-r from-cyan-400/40 via-violet-400/40 to-amber-400/40" />
        {nodes.map((n, i) => (
          <motion.div
            key={n.label}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12 }}
            className="relative flex flex-col items-center gap-1.5"
          >
            <div
              className={cn(
                "h-9 w-9 rounded-xl bg-gradient-to-br flex items-center justify-center shadow-lg relative z-10",
                n.color,
              )}
            >
              <n.icon className="h-4 w-4 text-white" />
            </div>
            <span className="text-[9px] text-white/70 text-center leading-tight">
              {n.label}
            </span>
          </motion.div>
        ))}
      </div>
      <div className="mt-3 flex items-center gap-2 text-[10px] text-white/50 flex-wrap">
        <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10">
          trigger: 09:00
        </span>
        <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10">
          repeat: hàng ngày
        </span>
        <span className="px-2 py-0.5 rounded bg-emerald-400/10 border border-emerald-400/30 text-emerald-300 ml-auto">
          chạy thành công
        </span>
      </div>
    </div>
  );
}

/* ============================================================
 * TaskDashboard — list of running/completed tasks.
 * ============================================================ */
export function TaskDashboard({ className }: { className?: string }) {
  const tasks = [
    { name: "Cào giá đối thủ", status: "running", progress: 64, items: "32/50" },
    { name: "Nhập liệu form", status: "running", progress: 28, items: "14/50" },
    { name: "Kiểm thử đăng nhập", status: "done", progress: 100, items: "50/50" },
    { name: "Thu thập review", status: "queued", progress: 0, items: "0/120" },
  ];
  const statusMap: Record<string, { dot: string; label: string; color: string }> = {
    running: { dot: "bg-cyan-400", label: "đang chạy", color: "text-cyan-300" },
    done: { dot: "bg-emerald-400", label: "hoàn tất", color: "text-emerald-300" },
    queued: { dot: "bg-white/40", label: "chờ", color: "text-white/50" },
  };
  return (
    <div className={cn("rounded-2xl glass p-4 w-full max-w-md", className)}>
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <LayoutGrid className="h-4 w-4 text-cyan-300" />
          <span className="text-sm font-semibold text-white">Dashboard tác vụ</span>
        </div>
        <span className="text-[10px] text-white/40 flex items-center gap-1">
          <Activity className="h-3 w-3" /> Live
        </span>
      </div>
      <div className="flex flex-col gap-2">
        {tasks.map((t) => {
          const s = statusMap[t.status];
          return (
            <div
              key={t.name}
              className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-white/4 border border-white/8"
            >
              <div className="flex flex-col gap-1 flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-white/90 truncate">{t.name}</span>
                  <span className={cn("text-[10px] flex items-center gap-1", s.color)}>
                    <span className={cn("h-1.5 w-1.5 rounded-full", s.dot)} />
                    {s.label}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-1 flex-1 rounded-full bg-white/8 overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-cyan-400 to-violet-400"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${t.progress}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, ease: "easeOut" }}
                    />
                  </div>
                  <span className="text-[10px] text-white/50 tabular-nums w-12 text-right">
                    {t.items}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ============================================================
 * CursorTrail — a wandering cursor with a fading trail.
 * Used inside hero demo window.
 * ============================================================ */
export function CursorTrail({ className }: { className?: string }) {
  const reduce = useReducedMotion();
  if (reduce) return null;
  return (
    <motion.div
      className={cn("absolute z-20 pointer-events-none", className)}
      initial={{ x: 20, y: 40, opacity: 0 }}
      animate={{
        x: [20, 180, 240, 120, 20],
        y: [40, 90, 180, 220, 40],
        opacity: [0, 1, 1, 1, 0.85],
      }}
      transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
    >
      <div className="relative">
        {/* trail */}
        <div className="absolute -inset-3 rounded-full bg-cyan-400/20 blur-md" />
        <MousePointer2 className="h-5 w-5 text-cyan-300 drop-shadow-[0_0_8px_oklch(0.82_0.15_196_/_0.9)]" />
        <span className="absolute left-6 top-1 text-[10px] px-2 py-0.5 rounded-md bg-cyan-400/20 border border-cyan-300/40 text-cyan-100 whitespace-nowrap">
          Agent click
        </span>
      </div>
    </motion.div>
  );
}

/* ============================================================
 * DemoPlayer — a compact looping "video" placeholder
 * showing the agent clicking through a fake product page.
 * ============================================================ */
export function DemoPlayer({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative rounded-2xl overflow-hidden border border-white/10 bg-[oklch(0.17_0.024_264)]",
        className,
      )}
    >
      {/* fake page chrome */}
      <div className="px-3 py-2 flex items-center gap-2 border-b border-white/8 bg-white/4">
        <CircleDot className="h-3 w-3 text-rose-400" />
        <span className="text-[10px] text-white/60">demo · tự động lặp</span>
        <span className="ml-auto flex items-center gap-1 text-[10px] text-cyan-300">
          <Play className="h-3 w-3" /> phát full demo
        </span>
      </div>
      {/* fake shopping page being automated */}
      <div className="relative p-4 bg-gradient-to-br from-[oklch(0.20_0.030_264)] to-[oklch(0.17_0.024_264)] min-h-[200px]">
        <div className="grid grid-cols-3 gap-2">
          {Array.from({ length: 6 }).map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0.4 }}
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.4,
                ease: "easeInOut",
              }}
              className="rounded-md bg-white/6 border border-white/8 p-2 flex flex-col gap-1"
            >
              <div className="h-8 rounded bg-white/10" />
              <div className="h-1.5 w-3/4 rounded bg-white/15" />
              <div className="h-1.5 w-1/2 rounded bg-cyan-400/40" />
            </motion.div>
          ))}
        </div>
        <CursorTrail />
      </div>
    </div>
  );
}

/* ============================================================
 * TerminalLog — animated typing log lines for How-It-Works.
 * ============================================================ */
export function TerminalLog({
  lines,
  className,
}: {
  lines: { icon: React.ElementType; text: string; color: string }[];
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-xl glass p-4 font-mono text-xs flex flex-col gap-1.5",
        className,
      )}
    >
      <div className="flex items-center gap-1.5 text-white/40 mb-1">
        <span className="h-2 w-2 rounded-full bg-rose-400/70" />
        <span className="h-2 w-2 rounded-full bg-amber-400/70" />
        <span className="h-2 w-2 rounded-full bg-emerald-400/70" />
        <span className="ml-2 text-[10px]">agent.log</span>
      </div>
      {lines.map((l, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -8 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.18 }}
          className="flex items-center gap-2"
        >
          <l.icon className={cn("h-3 w-3 shrink-0", l.color)} />
          <span className="text-white/80">{l.text}</span>
        </motion.div>
      ))}
      <div className="flex items-center gap-1 mt-1 text-white/50">
        <span className="text-cyan-300">›</span>
        <span className="caret-blink">_</span>
      </div>
    </div>
  );
}

/* ============================================================
 * Pill — small labelled chip used in spec/trust sections.
 * ============================================================ */
export function Pill({
  icon: Icon,
  children,
  tone = "default",
}: {
  icon: React.ElementType;
  children: React.ReactNode;
  tone?: "default" | "cyan" | "violet" | "emerald";
}) {
  const tones = {
    default: "border-white/10 text-white/70",
    cyan: "border-cyan-400/30 text-cyan-200 bg-cyan-400/5",
    violet: "border-violet-400/30 text-violet-200 bg-violet-400/5",
    emerald: "border-emerald-400/30 text-emerald-200 bg-emerald-400/5",
  };
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border bg-white/4 text-xs",
        tones[tone],
      )}
    >
      <Icon className="h-3 w-3" />
      {children}
    </span>
  );
}

/* ============================================================
 * RecordReplayMock — a small UI showing REC button + steps.
 * ============================================================ */
export function RecordReplayMock({ className }: { className?: string }) {
  return (
    <div className={cn("rounded-2xl glass p-4 w-full max-w-xs", className)}>
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-rose-500 animate-pulse" />
          <span className="text-sm font-semibold text-white">Đang ghi</span>
        </div>
        <Redo2 className="h-4 w-4 text-cyan-300" />
      </div>
      <div className="flex flex-col gap-1.5">
        {[
          "Mở https://erp.example.com",
          "Đăng nhập (user / pass)",
          "Vào menu Đơn hàng → Thêm mới",
          "Điền 8 trường · tải file đính kèm",
          "Lưu · chuyển sang đơn kế tiếp",
        ].map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12 }}
            className="flex items-center gap-2 text-xs text-white/75"
          >
            <span className="font-mono text-cyan-300/80 text-[10px] w-5">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="truncate">{step}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
