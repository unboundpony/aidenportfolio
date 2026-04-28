import type { ReactNode } from "react";

/**
 * BentoGrid — a strict 4-column bento system reserved for project
 * surfaces. Children declare their own `span` via BentoItem so the
 * grid stays declarative.
 *
 * 1x1 → 1 col / 1 row   (default)
 * 2x1 → 2 cols / 1 row  ("wide")
 * 2x2 → 2 cols / 2 rows ("square-lg")
 * 4x2 → full width      ("full")
 */
export function BentoGrid({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`
        grid auto-rows-[minmax(14rem,auto)] grid-cols-1 gap-4
        sm:grid-cols-2 lg:grid-cols-4 lg:gap-5
        ${className}
      `}
    >
      {children}
    </div>
  );
}

export type BentoSpan = "1x1" | "2x1" | "2x2" | "full";

const SPAN_CLASSES: Record<BentoSpan, string> = {
  "1x1": "col-span-1 row-span-1",
  "2x1": "sm:col-span-2 row-span-1",
  "2x2": "sm:col-span-2 sm:row-span-2",
  full: "sm:col-span-2 lg:col-span-4 row-span-1",
};

export function BentoItem({
  span = "1x1",
  className = "",
  children,
}: {
  span?: BentoSpan;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={`${SPAN_CLASSES[span]} ${className}`}>{children}</div>
  );
}
