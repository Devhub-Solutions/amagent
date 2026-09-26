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

/* Linux — Tux penguin, monochrome */
export function LinuxIcon({ className, glow = "soft" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={cn("h-5 w-5", GLOW_BY_INTENSITY[glow], className)}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12.05 2c-1.46 0-2.62 1.18-2.62 2.62 0 .35.07.69.18 1-.86.86-1.4 2.1-1.4 3.49 0 1.06.32 1.95.78 2.78.18.32.39.62.6.92.42.6.85 1.18 1.13 1.92.14.37.23.78.27 1.23-.46.18-.83.55-.97 1.05-.18.65.07 1.32.55 1.74-.32.32-.55.74-.55 1.23 0 .27.08.5.2.7-.46.27-.78.74-.78 1.3 0 .84.7 1.5 1.55 1.5h4.4c.86 0 1.55-.66 1.55-1.5 0-.56-.32-1.03-.78-1.3.13-.2.2-.43.2-.7 0-.5-.23-.92-.55-1.24.48-.42.73-1.08.55-1.73-.14-.5-.51-.87-.97-1.05.04-.45.13-.86.27-1.23.28-.74.71-1.32 1.13-1.92.21-.3.42-.6.6-.92.46-.83.78-1.72.78-2.78 0-1.39-.54-2.63-1.4-3.49.11-.31.18-.65.18-1C14.66 3.18 13.5 2 12.05 2Zm0 1.5c.62 0 1.12.5 1.12 1.12 0 .25-.08.47-.21.65-.36-.22-.78-.35-1.23-.35-.16 0-.32.02-.47.05-.06-.13-.1-.27-.1-.43 0-.62.5-1.12 1.12-1.12l-.23.08Z" />
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
