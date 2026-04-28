export function Hero() {
  return (
    <section
      aria-label="Introduction"
      className="
        relative mx-auto max-w-6xl px-6 pb-12 pt-6
        sm:pb-16 sm:pt-10
      "
    >
      <div className="flex flex-col gap-6">
        <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[var(--color-border)] bg-[color-mix(in_oklch,var(--color-surface)_70%,transparent)] px-3 py-1.5">
          <span
            aria-hidden
            className="
              h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]
              shadow-[0_0_10px_color-mix(in_oklch,var(--color-accent)_60%,transparent)]
            "
            style={{ animation: "pulse-ring 2.4s ease-in-out infinite" }}
          />
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--color-foreground-muted)]">
            The Project Lab · Open
          </span>
        </div>

        <h1
          className="
            text-balance font-semibold leading-[1.05] tracking-tight
            text-4xl sm:text-5xl lg:text-6xl
          "
        >
          <span>Aiden Lee</span>{" "}
          <span className="text-[var(--color-foreground-soft)]">{"//"}</span>{" "}
          <span
            className="
              bg-gradient-to-br from-[var(--color-foreground)]
              via-[var(--color-accent)] to-[var(--color-foreground)]
              bg-clip-text text-transparent
            "
          >
            Technical Product Management Lab
          </span>
          <span aria-hidden className="text-[var(--color-accent)]">.</span>
        </h1>

        <p className="max-w-2xl text-pretty text-base leading-relaxed text-[var(--color-foreground-muted)] sm:text-lg">
          A collection of high-velocity prototypes and data-driven tools built
          at the intersection of{" "}
          <span className="text-[var(--color-foreground)]">
            Industrial Engineering
          </span>{" "}
          and{" "}
          <span className="text-[var(--color-foreground)]">PM logic</span>.
        </p>

        <ul
          aria-label="Currently working on"
          className="flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-[11px] text-[var(--color-foreground-soft)]"
        >
          <li>
            <span className="text-[var(--color-foreground-muted)]">role</span>{" "}
            ·{" "}
            <span className="text-[var(--color-foreground)]">
              PM @ Cox Automotive
            </span>
          </li>
          <li aria-hidden>·</li>
          <li>
            <span className="text-[var(--color-foreground-muted)]">stack</span>{" "}
            ·{" "}
            <span className="text-[var(--color-foreground)]">
              Next.js · Python · SQL
            </span>
          </li>
          <li aria-hidden>·</li>
          <li>
            <span className="text-[var(--color-foreground-muted)]">based</span>{" "}
            ·{" "}
            <span className="text-[var(--color-foreground)]">Atlanta, GA</span>
          </li>
        </ul>
      </div>
    </section>
  );
}
