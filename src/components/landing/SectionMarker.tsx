import type { ElementType } from "react";

export function SectionMarker({
  index,
  label,
  icon: Icon,
}: {
  index: string;
  label: string;
  icon?: ElementType;
}) {
  return (
    <div className="inline-flex items-center gap-3 mb-4">
      <span className="h-px w-8 bg-cyan-300/70" />
      {Icon ? <Icon className="h-3.5 w-3.5 text-cyan-300/90" /> : null}
      <span className="font-mono text-[11px] tracking-[0.28em] text-cyan-300/90 uppercase">
        {index} — {label}
      </span>
    </div>
  );
}
