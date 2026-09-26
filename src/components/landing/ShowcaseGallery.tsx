"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Grid3x3, Maximize2, X, Bot, Workflow, LayoutGrid, MousePointer2, Activity, Database } from "lucide-react";
import { AppScreenshot, ScreenshotLightbox, type ShotName } from "./AppScreenshot";
import { SectionMarker } from "./SectionMarker";

type Cell = {
  id: string;
  shot: ShotName;
  title: string;
  tag: string;
  span: string;
};

const CELLS: Cell[] = [
  {
    id: "chat",
    shot: "chat",
    title: "Agent Chat",
    tag: "Chat · điều khiển bằng lời",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    id: "dashboard",
    shot: "dashboard",
    title: "Dashboard chính",
    tag: "Trung tâm điều khiển",
    span: "md:col-span-2",
  },
  {
    id: "agents",
    shot: "agents",
    title: "Quản lý Agents",
    tag: "Multi-agent",
    span: "md:col-span-2",
  },
  {
    id: "runs",
    shot: "runs",
    title: "Lịch sử Runs",
    tag: "Monitoring",
    span: "md:col-span-2",
  },
  {
    id: "settings",
    shot: "settings",
    title: "Cài đặt hệ thống",
    tag: "Configuration",
    span: "md:col-span-2 md:row-span-2",
  },
];

const TAG_ICONS: Record<string, React.ElementType> = {
  "Chat · điều khiển bằng lời": Bot,
  "Trung tâm điều khiển": LayoutGrid,
  "Multi-agent": Workflow,
  Monitoring: Activity,
  Configuration: Database,
};

export function ShowcaseGallery() {
  const [active, setActive] = useState<ShotName | null>(null);

  return (
    <section id="showcase" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-circuit-fine opacity-25 pointer-events-none [mask-image:radial-gradient(50%_50%_at_50%_50%,black,transparent)]" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="max-w-2xl"
          >
            <SectionMarker index="04" label="Showcase Gallery" icon={Grid3x3} />
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white leading-tight">
              Giao diện thật,{" "}
              <span className="text-gradient-electric">không mockup</span>.
            </h2>
            <p className="mt-4 text-white/60 text-base lg:text-lg">
              Mỗi ảnh dưới đây là screenshot thật của AmAgent — click để phóng to
              xem chi tiết pixel.
            </p>
          </motion.div>
          <div className="flex flex-wrap gap-2 text-xs text-white/50">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full glass">
              <Bot className="h-3 w-3 text-cyan-300" /> Chat
            </span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full glass">
              <Workflow className="h-3 w-3 text-violet-300" /> Agents
            </span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full glass">
              <LayoutGrid className="h-3 w-3 text-emerald-300" /> Dashboard
            </span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full glass">
              <Activity className="h-3 w-3 text-amber-300" /> Runs
            </span>
          </div>
        </div>

        {/* Bento grid of real screenshots */}
        <div className="grid grid-cols-1 md:grid-cols-4 md:auto-rows-[260px] gap-4 lg:gap-5">
          {CELLS.map((cell, i) => {
            const TagIcon = TAG_ICONS[cell.tag] ?? MousePointer2;
            return (
              <motion.button
                key={cell.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 4) * 0.06 }}
                onClick={() => setActive(cell.shot)}
                className={`group relative overflow-hidden rounded-3xl glass p-3 text-left ${cell.span} hover:border-white/20 transition-colors`}
              >
                {/* hover zoom layer */}
                <div className="absolute inset-0 origin-center transition-transform duration-500 group-hover:scale-[1.04] pointer-events-none">
                  <div className="absolute -inset-x-10 -top-10 h-32 bg-gradient-to-b from-cyan-400/15 to-transparent blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                <div className="relative flex items-center justify-between mb-2 px-1">
                  <div>
                    <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-widest text-cyan-300/80">
                      <TagIcon className="h-3 w-3" />
                      {cell.tag}
                    </div>
                    <h3 className="text-base font-semibold text-white font-display mt-0.5">
                      {cell.title}
                    </h3>
                  </div>
                  <div className="h-8 w-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/40 group-hover:text-cyan-300 group-hover:border-cyan-300/40 transition-colors">
                    <Maximize2 className="h-3.5 w-3.5" />
                  </div>
                </div>

                <div className="relative h-[calc(100%-3rem)] overflow-hidden flex items-center justify-center rounded-2xl">
                  <AppScreenshot
                    shot={cell.shot}
                    url="app.amagent.ai"
                    showChrome={false}
                    glow={false}
                    rounded="rounded-xl"
                    className="!shadow-none w-full h-full object-cover"
                  />
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* Tiny note row */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-8 flex items-center justify-center gap-2 text-xs text-white/45"
        >
          <MousePointer2 className="h-3.5 w-3.5 text-cyan-300" />
          Click bất kỳ screenshot nào để xem kích thước đầy đủ
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {active && (
          <ScreenshotLightbox shot={active} onClose={() => setActive(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
