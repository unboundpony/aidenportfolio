import type { Metric } from "@/lib/projects";

const TONE_CLASSES: Record<NonNullable<Metric["tone"]>, string> = {
  neutral: "text-[var(--color-foreground)]",
  positive: "text-[var(--color-success)]",
  warning: "text-[var(--color-warning)]",
  danger: "text-[var(--color-danger)]",
  accent: "text-[var(--color-accent)]",
};

export function MetricTile({ metric }: { metric: Metric }) {
  const tone = TONE_CLASSES[metric.tone ?? "neutral"];
  return (
    <div
      className="
        flex flex-col gap-1 rounded-xl border border-[var(--color-border)]
        bg-[color-mix(in_oklch,var(--color-surface)_70%,transparent)]
        px-3 py-2.5
      "
    >
      <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--color-foreground-soft)]">
        {metric.label}
      </span>
      <span className={`text-lg font-semibold leading-tight ${tone}`}>
        {metric.value}
      </span>
      {metric.hint && (
        <span className="text-[11px] text-[var(--color-foreground-muted)]">
          {metric.hint}
        </span>
      )}
    </div>
  );
}
