"use client";

import { cn } from "@/lib/utils";
import { assetPath } from "@/lib/assets";

/* ============================================================
 * Platform icons — branded SVG paths for Windows, macOS, Linux,
 * Apple Silicon, Intel. Larger and more prominent than the
 * generic lucide icons previously used.
 * ============================================================ */

type IconProps = {
  className?: string;
  /** Glow intensity — "off" | "soft" | "strong" */
  glow?: "off" | "soft" | "strong";
};

const GLOW_BY_INTENSITY: Record<NonNullable<IconProps["glow"]>, string> = {
  off: "",
  soft: "drop-shadow-[0_0_8px_oklch(0.62_0.20_259_/_0.45)]",
  strong: "drop-shadow-[0_0_14px_oklch(0.80_0.13_202_/_0.65)] drop-shadow-[0_0_22px_oklch(0.62_0.20_259_/_0.4)]",
};

/* Windows — 4-square flag, electric blue */
export function WindowsIcon({ className, glow = "soft" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={cn("h-5 w-5", GLOW_BY_INTENSITY[glow], className)}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M3 5.4 10.4 4.4v7.1H3V5.4Zm0 13.2 7.4 1V12.6H3v6ZM11.5 4.3 21 3v8.6h-9.5V4.3Zm0 8.3H21V21l-9.5-1.3v-7.1Z" />
    </svg>
  );
}

function LocalBrandIcon({
  src,
  alt = "",
  className,
  glow = "soft",
}: IconProps & { src: string; alt?: string }) {
  return (
    <img
      src={assetPath(src)}
      alt={alt}
      className={cn("h-5 w-5 object-contain", GLOW_BY_INTENSITY[glow], className)}
      aria-hidden={alt ? undefined : true}
      draggable={false}
    />
  );
}

/* Apple — Iconify Logos, local SVG */
export function AppleIcon({ className, glow = "soft" }: IconProps) {
  return <LocalBrandIcon src="/icons/iconify/apple.svg" className={className} glow={glow} />;
}

/* Linux — Iconify Logos Tux, local SVG */
export function LinuxIcon({ className, glow = "soft" }: IconProps) {
  return <LocalBrandIcon src="/icons/iconify/linux-tux.svg" className={className} glow={glow} />;
}

/* Red Hat — Iconify Logos, local SVG */
export function RedHatIcon({ className, glow = "soft" }: IconProps) {
  return <LocalBrandIcon src="/icons/iconify/redhat.svg" className={className} glow={glow} />;
}

/* Apple Silicon — M-series chip outline (alternative to Apple logo) */
export function ChipIcon({ className, glow = "soft" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={cn("h-5 w-5", GLOW_BY_INTENSITY[glow], className)}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="7" y="7" width="10" height="10" rx="1.5" />
      <path d="M10 4v2M14 4v2M10 18v2M14 18v2M4 10h2M4 14h2M18 10h2M18 14h2" />
      <path d="M10 10h4v4h-4z" fill="currentColor" stroke="none" />
    </svg>
  );
}

/* Intel — Iconify Logos, local SVG */
export function IntelIcon({ className, glow = "soft" }: IconProps) {
  return <LocalBrandIcon src="/icons/iconify/intel.svg" className={className} glow={glow} />;
}
