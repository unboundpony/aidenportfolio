/**
 * PlaceholderCard — the "Future Project" slot.
 *
 * Empty-state pattern with a deliberately gentle pulse + animated
 * "[Processing...]" tag to communicate active momentum without
 * implying anything is broken or loading.
 */
export function PlaceholderCard() {
  return (
    <article
      aria-label="Upcoming project placeholder"
      className="
        relative flex h-full min-h-[14rem] flex-col items-start
        justify-between overflow-hidden rounded-2xl
        border border-dashed border-[var(--color-border-strong)]
        bg-[color-mix(in_oklch,var(--color-surface)_45%,transparent)]
        p-5 backdrop-blur-md sm:p-6
      "
    >
      <div className="shimmer-overlay" aria-hidden />

      <div className="relative flex items-center gap-2">
        <span
          aria-hidden
          className="
            relative inline-flex h-2.5 w-2.5 items-center justify-center
            rounded-full bg-[var(--color-accent)]
          "
          style={{ animation: "pulse-ring 2.4s cubic-bezier(0.4, 0, 0.6, 1) infinite" }}
        />
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-foreground-muted)]">
          Slot · Empty State
        </span>
      </div>

      <div className="relative">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--color-foreground-soft)]">
          Upcoming Project
        </p>
        <h3 className="mt-2 font-mono text-2xl font-semibold leading-tight tracking-tight sm:text-3xl">
          [<span className="processing-dots">Processing</span>]
        </h3>
        <p className="mt-3 max-w-sm text-sm leading-relaxed text-[var(--color-foreground-muted)]">
          Something is being scoped right now. The lab never sleeps — check
          back soon.
        </p>
      </div>

      <div className="relative flex items-center gap-2 font-mono text-[11px] text-[var(--color-foreground-soft)]">
        <span
          aria-hidden
          className="inline-block h-px w-6 bg-[var(--color-accent)]"
        />
        spec · prototype · ship
      </div>
    </article>
  );
}
