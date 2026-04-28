import type { Metadata } from "next";
import { credentials, skillMatrix, type Credential } from "@/lib/credentials";

export const metadata: Metadata = {
  title: "About",
  description:
    "Credentials, professional history, academic foundation, and entrepreneurial work for Aiden Lee — Technical Product Manager.",
};

const CATEGORY_ORDER: Credential["category"][] = [
  "Professional",
  "Academic",
  "Entrepreneurial",
];

const CATEGORY_LABEL: Record<Credential["category"], string> = {
  Professional: "Professional",
  Academic: "Academic",
  Entrepreneurial: "Entrepreneurial",
};

const CATEGORY_DESC: Record<Credential["category"], string> = {
  Professional: "Where the operating reps happen.",
  Academic: "The optimization & systems foundation.",
  Entrepreneurial: "Owning the funnel end-to-end.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 pb-24">
      <PageHeader />

      <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_22rem]">
        <Timeline />
        <SkillsMatrix />
      </div>
    </div>
  );
}

function PageHeader() {
  return (
    <header className="flex flex-col gap-4">
      <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--color-foreground-soft)]">
        ./about · the credentials
      </p>
      <h1 className="text-balance text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
        The Professional Archive
      </h1>
      <p className="max-w-2xl text-pretty text-base leading-relaxed text-[var(--color-foreground-muted)]">
        A structured timeline of the operating reps, academic foundation, and
        entrepreneurial work behind the lab — kept executive-clean on
        purpose.
      </p>
    </header>
  );
}

function Timeline() {
  return (
    <div className="flex flex-col gap-12">
      {CATEGORY_ORDER.map((category) => {
        const entries = credentials.filter((c) => c.category === category);
        if (entries.length === 0) return null;
        return (
          <section key={category} aria-label={category}>
            <SectionHeader category={category} />
            <ol className="relative mt-6 border-l border-[var(--color-border)] pl-6">
              {entries.map((entry) => (
                <TimelineEntry key={`${entry.org}-${entry.role}`} entry={entry} />
              ))}
            </ol>
          </section>
        );
      })}
    </div>
  );
}

function SectionHeader({ category }: { category: Credential["category"] }) {
  return (
    <div className="flex items-end justify-between gap-4">
      <div>
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-accent)]">
          {String(CATEGORY_ORDER.indexOf(category) + 1).padStart(2, "0")} ·
          Section
        </p>
        <h2 className="mt-1 text-2xl font-semibold tracking-tight sm:text-3xl">
          {CATEGORY_LABEL[category]}
        </h2>
      </div>
      <p className="hidden max-w-xs text-right text-sm text-[var(--color-foreground-muted)] sm:block">
        {CATEGORY_DESC[category]}
      </p>
    </div>
  );
}

function TimelineEntry({ entry }: { entry: Credential }) {
  return (
    <li className="relative pb-8 last:pb-0">
      <span
        aria-hidden
        className="
          absolute -left-[33px] top-2 inline-flex h-3 w-3 items-center
          justify-center rounded-full border-2 border-[var(--color-background)]
          bg-[var(--color-accent)]
          shadow-[0_0_0_3px_color-mix(in_oklch,var(--color-accent)_22%,transparent)]
        "
      />
      <article
        className="
          glass relative overflow-hidden rounded-2xl p-5 sm:p-6
        "
      >
        <header className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
          <div>
            <h3 className="text-lg font-semibold tracking-tight sm:text-xl">
              {entry.role}{" "}
              <span className="text-[var(--color-foreground-soft)]">@</span>{" "}
              <span className="text-[var(--color-accent)]">{entry.org}</span>
            </h3>
            {entry.location && (
              <p className="mt-0.5 text-xs text-[var(--color-foreground-muted)]">
                {entry.location}
              </p>
            )}
          </div>
          <span
            className="
              shrink-0 rounded-full border border-[var(--color-border)]
              bg-[color-mix(in_oklch,var(--color-surface)_70%,transparent)]
              px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.18em]
              text-[var(--color-foreground-muted)]
            "
          >
            {entry.period}
          </span>
        </header>

        <ul className="mt-4 space-y-2 text-sm leading-relaxed text-[var(--color-foreground-muted)]">
          {entry.highlights.map((h) => (
            <li key={h} className="flex gap-2">
              <span
                aria-hidden
                className="mt-2 inline-block h-1 w-1 shrink-0 rounded-full bg-[var(--color-accent)]"
              />
              <span>{h}</span>
            </li>
          ))}
        </ul>
      </article>
    </li>
  );
}

function SkillsMatrix() {
  return (
    <aside aria-label="Skills matrix" className="lg:sticky lg:top-28 lg:self-start">
      <div className="glass-strong rounded-2xl p-5 sm:p-6">
        <header className="mb-5 flex items-end justify-between gap-4">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-accent)]">
              ./stack
            </p>
            <h2 className="mt-1 text-xl font-semibold tracking-tight">
              Skills Matrix
            </h2>
          </div>
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-foreground-soft)]">
            self-rated
          </span>
        </header>

        <div className="space-y-6">
          {skillMatrix.map((bucket) => (
            <div key={bucket.label}>
              <h3 className="mb-3 font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--color-foreground-muted)]">
                {bucket.label}
              </h3>
              <ul className="space-y-2.5">
                {bucket.items.map((item) => (
                  <li key={item.name}>
                    <div className="flex items-baseline justify-between gap-3 text-sm">
                      <span className="font-medium text-[var(--color-foreground)]">
                        {item.name}
                      </span>
                      <span className="font-mono text-[10px] tabular-nums text-[var(--color-foreground-soft)]">
                        {item.level}
                      </span>
                    </div>
                    <div
                      className="
                        relative mt-1.5 h-1.5 w-full overflow-hidden
                        rounded-full
                        bg-[color-mix(in_oklch,var(--color-foreground)_8%,transparent)]
                      "
                    >
                      <div
                        className="
                          absolute inset-y-0 left-0 rounded-full
                          bg-gradient-to-r from-[var(--color-accent)]
                          to-[color-mix(in_oklch,var(--color-accent)_60%,var(--color-foreground))]
                        "
                        style={{ width: `${item.level}%` }}
                        aria-hidden
                      />
                    </div>
                    {item.note && (
                      <p className="mt-1 text-[11px] text-[var(--color-foreground-soft)]">
                        {item.note}
                      </p>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}
