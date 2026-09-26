"use client";

import Image from "next/image";
import {
  Github,
  Twitter,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  BadgeCheck,
  User,
} from "lucide-react";
import { assetPath } from "@/lib/assets";

const LINKS: Record<string, { label: string; href: string }[]> = {
  "Sản phẩm": [
    { label: "Tính năng", href: "#features" },
    { label: "Cách hoạt động", href: "#how" },
    { label: "Showcase", href: "#showcase" },
    { label: "Thông số", href: "#specs" },
    { label: "Tải xuống", href: "#download" },
  ],
  "Use cases": [
    { label: "Nhập liệu hàng loạt", href: "#use-cases" },
    { label: "Kiểm thử web", href: "#use-cases" },
    { label: "Thu thập dữ liệu", href: "#use-cases" },
    { label: "Xử lý form lặp", href: "#use-cases" },
  ],
  "Công ty": [
    { label: "Về chúng tôi", href: "#" },
    { label: "Blog kỹ thuật", href: "#" },
    { label: "Tuyển dụng", href: "#" },
    { label: "Liên hệ", href: "mailto:hello@devhub.solutions" },
  ],
  "Pháp lý": [
    { label: "Điều khoản", href: "#" },
    { label: "Bảo mật", href: "#" },
    { label: "Giấy phép", href: "#" },
    { label: "Changelog", href: "#" },
  ],
};

// Business info (from tax registry)
const COMPANY = {
  legalName: "Devhub Solutions Company Limited",
  shortName: "Devhub Solutions",
  taxId: "0319405240",
  address: "842/1/58 Nguyễn Kiệm, Phường Hạnh Thông, TP. Hồ Chí Minh",
  phone: "0706 688 336",
  phoneHref: "tel:+84706688336",
  representative: "Đoàn Ngọc Thành",
  email: "hello@devhub.solutions",
};

export function Footer() {
  return (
    <footer className="relative mt-10 border-t border-white/8 bg-[oklch(0.11_0.020_264)]">
      <div className="absolute inset-0 bg-circuit-fine opacity-20 pointer-events-none [mask-image:linear-gradient(to_bottom,black,transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 lg:gap-12">
          {/* Brand + business info */}
          <div className="col-span-2">
            <div className="flex items-center gap-3">
              <div className="relative h-12 w-12 rounded-xl overflow-hidden ring-1 ring-white/10 shadow-lg shrink-0">
                <Image
                  src={assetPath("/logo-footer.png")}
                  alt="Devhub Solutions logo"
                  fill
                  sizes="48px"
                  className="object-contain"
                />
              </div>
              <div className="leading-tight">
                <div className="text-sm font-semibold text-white font-display">
                  Devhub Solutions
                </div>
                <div className="text-[10px] text-cyan-300/70 -mt-0.5">
                  Company Limited
                </div>
              </div>
            </div>
            <p className="mt-4 text-xs text-white/55 leading-relaxed max-w-xs">
              AI Agent tự động hoá trình duyệt desktop — để AI làm việc thay bạn.
              Local-first, đa trình duyệt, chạy được cả ngàn lần.
            </p>

            {/* Business registry info */}
            <dl className="mt-5 grid grid-cols-1 gap-2 text-[11px] text-white/65 max-w-sm">
              <div className="flex items-start gap-2">
                <BadgeCheck className="h-3.5 w-3.5 text-cyan-300 shrink-0 mt-0.5" />
                <dt className="text-white/45 w-20 shrink-0">MST</dt>
                <dd className="font-mono">{COMPANY.taxId}</dd>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="h-3.5 w-3.5 text-cyan-300 shrink-0 mt-0.5" />
                <dt className="text-white/45 w-20 shrink-0">Địa chỉ</dt>
                <dd className="leading-snug">{COMPANY.address}</dd>
              </div>
              <div className="flex items-start gap-2">
                <User className="h-3.5 w-3.5 text-cyan-300 shrink-0 mt-0.5" />
                <dt className="text-white/45 w-20 shrink-0">Đại diện</dt>
                <dd>{COMPANY.representative}</dd>
              </div>
              <div className="flex items-start gap-2">
                <Phone className="h-3.5 w-3.5 text-cyan-300 shrink-0 mt-0.5" />
                <dt className="text-white/45 w-20 shrink-0">Điện thoại</dt>
                <dd>
                  <a
                    href={COMPANY.phoneHref}
                    className="hover:text-cyan-300 transition-colors"
                  >
                    {COMPANY.phone}
                  </a>
                </dd>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="h-3.5 w-3.5 text-cyan-300 shrink-0 mt-0.5" />
                <dt className="text-white/45 w-20 shrink-0">Email</dt>
                <dd>
                  <a
                    href={`mailto:${COMPANY.email}`}
                    className="hover:text-cyan-300 transition-colors"
                  >
                    {COMPANY.email}
                  </a>
                </dd>
              </div>
            </dl>

            <div className="mt-5 flex items-center gap-2">
              {[
                { icon: Github, href: "#" },
                { icon: Twitter, href: "#" },
                { icon: Linkedin, href: "#" },
                { icon: Mail, href: `mailto:${COMPANY.email}` },
              ].map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  className="h-8 w-8 rounded-lg bg-white/4 border border-white/10 flex items-center justify-center text-white/60 hover:text-cyan-300 hover:border-cyan-300/40 transition-colors"
                  aria-label="social"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(LINKS).map(([title, items]) => (
            <div key={title}>
              <div className="text-[11px] uppercase tracking-widest text-white/40 mb-3">
                {title}
              </div>
              <ul className="flex flex-col gap-2">
                {items.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-sm text-white/65 hover:text-white transition-colors"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-6 border-t border-white/8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-white/40 text-center sm:text-left">
            <div>
              © 2026 {COMPANY.legalName}. Mọi quyền được bảo lưu.
            </div>
            <div className="mt-1 text-[10px] text-white/30">
              MST {COMPANY.taxId} · Đăng ký tại TP. Hồ Chí Minh, Việt Nam
            </div>
          </div>
          <div className="flex items-center gap-4 text-xs text-white/40">
            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Toàn bộ hệ thống đang hoạt động
            </span>
            <span>v2.4.1 · build 20260926</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
