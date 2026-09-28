"use client";

import { cn } from "@/lib/utils";

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

/* Apple — macOS logo, monochrome inherited from parent */
export function AppleIcon({ className, glow = "soft" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={cn("h-5 w-5", GLOW_BY_INTENSITY[glow], className)}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M17.05 12.04c-.02-2.18 1.78-3.23 1.86-3.28-1.01-1.48-2.59-1.69-3.15-1.71-1.34-.14-2.62.79-3.3.79-.69 0-1.74-.77-2.86-.75-1.47.02-2.83.86-3.59 2.17-1.53 2.65-.39 6.58 1.1 8.74.73 1.06 1.6 2.24 2.74 2.2 1.1-.04 1.52-.71 2.85-.71 1.32 0 1.71.71 2.87.69 1.19-.02 1.94-1.07 2.66-2.13.84-1.23 1.18-2.42 1.2-2.48-.03-.01-2.3-.88-2.32-3.5l-.06-.03Zm-2.42-6.42c.61-.74 1.02-1.76.91-2.78-.88.03-1.94.58-2.57 1.31-.57.65-1.06 1.69-.93 2.69.98.07 1.98-.5 2.59-1.22Z" />
    </svg>
  );
}

/* Linux — Tux penguin, monochrome line-art */
export function LinuxIcon({ className, glow = "soft" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={cn("h-5 w-5", GLOW_BY_INTENSITY[glow], className)}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2.5c-2.35 0-4.1 1.9-4.1 4.65 0 1.12-.45 1.93-1 2.9-.62 1.1-1.3 2.34-1.3 4.3 0 3.9 2.84 7.15 6.4 7.15s6.4-3.25 6.4-7.15c0-1.96-.68-3.2-1.3-4.3-.55-.97-1-1.78-1-2.9C16.1 4.4 14.35 2.5 12 2.5Z" />
      <path d="M8.55 13.1c.65-1.2 1.72-1.9 3.45-1.9s2.8.7 3.45 1.9v4.15c-.86 1.35-2.02 2.1-3.45 2.1s-2.59-.75-3.45-2.1V13.1Z" fill="none" stroke="currentColor" strokeWidth="1" />
      <circle cx="10.35" cy="8.3" r=".62" fill="currentColor" />
      <circle cx="13.65" cy="8.3" r=".62" fill="currentColor" />
      <path d="m10.8 9.35 1.2 1.15 1.2-1.15-1.2-.7-1.2.7ZM5.6 20.4l2.8-.75M18.4 20.4l-2.8-.75" fill="none" stroke="currentColor" strokeWidth="1.15" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
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

/* Intel — stylized "i" inside ring */
export function IntelIcon({ className, glow = "soft" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={cn("h-5 w-5", GLOW_BY_INTENSITY[glow], className)}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M5 9h2.4v6.4H5V9Zm5.7 0v6.4h2.2v-3.7c0-.6.4-1 1-1 .5 0 .8.3.8.8v3.9H17v-4.2c0-1.4-.9-2.3-2.3-2.3-.7 0-1.3.2-1.8.7V9h-2.2Zm-3.4-2.3a1.4 1.4 0 1 1 0 2.8 1.4 1.4 0 0 1 0-2.8Z" />
    </svg>
  );
}
