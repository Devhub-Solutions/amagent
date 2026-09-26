"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { Download, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { assetPath } from "@/lib/assets";

const NAV_LINKS = [
  { href: "#features", label: "Tính năng" },
  { href: "#how", label: "Cách hoạt động" },
  { href: "#showcase", label: "Showcase" },
  { href: "#use-cases", label: "Use cases" },
  { href: "#specs", label: "Thông số" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        setScrolled(window.scrollY > 24);
        raf = 0;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <motion.nav
        initial={false}
        animate={{
          paddingTop: scrolled ? 8 : 18,
          paddingBottom: scrolled ? 8 : 18,
        }}
        transition={{ duration: 0.3 }}
        className={cn("w-full transition-colors", scrolled && "nav-blur")}
      >
        <div className="mx-auto max-w-7xl px-5 lg:px-8 flex items-center gap-4">
          {/* Brand */}
          <a href="#top" className="flex items-center gap-2.5 shrink-0 group">
            <div className="relative h-10 w-10 rounded-xl overflow-hidden ring-1 ring-white/10 shadow-lg glow-electric group-hover:scale-[1.05] transition-transform">
              <Image
                src={assetPath("/logo-nav.png")}
                alt="Devhub Solutions logo"
                fill
                sizes="40px"
                className="object-contain"
                priority
              />
            </div>
            <div className="leading-tight">
              <div className="text-sm font-semibold tracking-tight text-white font-display">
                Devhub
              </div>
              <div className="text-[10px] text-cyan-300/70 -mt-0.5">
                Solutions
              </div>
            </div>
          </a>

          {/* Desktop links */}
          <nav className="hidden md:flex items-center gap-1 mx-auto">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="px-3 py-1.5 text-sm text-white/65 hover:text-white rounded-md hover:bg-white/5 transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Right CTAs */}
          <div className="hidden md:flex items-center gap-2 shrink-0">
            <a
              href="#"
              className="text-sm text-white/70 hover:text-white px-3 py-1.5 rounded-md hover:bg-white/5 transition-colors"
            >
              Đăng nhập
            </a>
            <a
              href="#download"
              className="group relative inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-white bg-gradient-to-br from-[oklch(0.62_0.20_259)] to-[oklch(0.58_0.21_295)] pulse-glow hover:scale-[1.03] transition-transform"
            >
              <Download className="h-4 w-4" />
              <span>Tải xuống</span>
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="ml-auto md:hidden h-9 w-9 rounded-md flex items-center justify-center text-white/80 hover:bg-white/5"
            onClick={() => setOpen((s) => !s)}
            aria-label="Mở menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile drawer */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden"
            >
              <div className="mx-auto max-w-7xl px-5 lg:px-8 py-3 flex flex-col gap-1 border-t border-white/8">
                {NAV_LINKS.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="px-3 py-2 rounded-md text-sm text-white/75 hover:bg-white/5"
                  >
                    {l.label}
                  </a>
                ))}
                <a
                  href="#download"
                  onClick={() => setOpen(false)}
                  className="mt-2 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium text-white bg-gradient-to-br from-[oklch(0.62_0.20_259)] to-[oklch(0.58_0.21_295)]"
                >
                  <Download className="h-4 w-4" /> Tải xuống
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  );
}
