import type { Project, Sprint } from "@/lib/projects";
import { MetricTile } from "./metric-tile";

const STATUS_LABEL: Record<Project["status"], string> = {
  shipping: "Shipping",
  "in-progress": "In Progress",
  concept: "Concept",
};

const STATUS_DOT: Record<Project["status"], string> = {
  shipping: "bg-[var(--color-success)]",
  "in-progress": "bg-[var(--color-accent)]",
  concept: "bg-[var(--color-warning)]",
};

export type ProjectCardVariant = "full" | "compact";

/**
 * ProjectCard — the modular project surface.
 *
 *  - Accepts an optional `sprints` array so projects like the
 *    Omni-Channel Dealer Health Index can deep-dive on each
 *    sprint without bespoke markup.
 *  - "full" variant is intended for the featured slot.
 *  - "compact" variant slots into BentoGrid 1x1 / 2x1 cells.
 */
export function ProjectCard({
  project,
  variant = "full",
}: {
  project: Project;
  variant?: ProjectCardVariant;
}) {
  if (variant === "compact") {
    return <CompactProjectCard project={project} />;
  }
  return <FullProjectCard project={project} />;
}

function StatusBadge({ status }: { status: Project["status"] }) {
  return (
    <span
      className="
        inline-flex items-center gap-2 rounded-full border
        border-[var(--color-border)]
        bg-[color-mix(in_oklch,var(--color-surface)_70%,transparent)]
        px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.16em]
        text-[var(--color-foreground-muted)]
      "
    >
      <span
        aria-hidden
        className={`h-1.5 w-1.5 rounded-full ${STATUS_DOT[status]}`}
      />
      {STATUS_LABEL[status]}
    </span>
  );
}

function FullProjectCard({ project }: { project: Project }) {
  return (
    <article
      aria-labelledby={`project-${project.slug}`}
      className="
        glass-strong group relative overflow-hidden rounded-3xl
        p-6 sm:p-8 lg:p-10
      "
    >
      {/* Soft accent corner */}
      <div
        aria-hidden
        className="
          pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full
          bg-[radial-gradient(closest-side,color-mix(in_oklch,var(--color-accent)_28%,transparent),transparent_70%)]
        "
      />

      <header className="relative flex flex-col gap-4">
        <div className="flex flex-wrap items-center gap-3">
          <StatusBadge status={project.status} />
          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-foreground-soft)]">
            Featured · {project.role}
          </span>
        </div>

        <h2
          id={`project-${project.slug}`}
          className="
            text-balance text-3xl font-semibold leading-tight
            tracking-tight sm:text-4xl lg:text-5xl
          "
        >
          {project.name}
        </h2>

        <p className="max-w-3xl text-base leading-relaxed text-[var(--color-foreground-muted)] sm:text-lg">
          {project.tagline}
        </p>

        <p className="max-w-3xl text-sm leading-relaxed text-[var(--color-foreground-soft)]">
          {project.description}
        </p>

        {project.stack.length > 0 && (
          <ul className="flex flex-wrap gap-1.5 pt-1">
            {project.stack.map((s) => (
              <li
                key={s}
                className="
                  rounded-md border border-[var(--color-border)]
                  bg-[color-mix(in_oklch,var(--color-surface-muted)_80%,transparent)]
                  px-2 py-0.5 font-mono text-[11px]
                  text-[var(--color-foreground-muted)]
                "
              >
                {s}
              </li>
            ))}
          </ul>
        )}
      </header>

      {project.metrics && project.metrics.length > 0 && (
        <div className="relative mt-7 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {project.metrics.map((m) => (
            <MetricTile key={m.label} metric={m} />
          ))}
        </div>
      )}

      {project.sprints && project.sprints.length > 0 && (
        <div className="relative mt-8 grid grid-cols-1 gap-4 lg:grid-cols-2">
          {project.sprints.map((sprint) => (
            <SprintPanel key={sprint.id} sprint={sprint} />
          ))}
        </div>
      )}
    </article>
  );
}

function SprintPanel({ sprint }: { sprint: Sprint }) {
  return (
    <section
      aria-label={`${sprint.id} — ${sprint.title}`}
      className="
        glass relative overflow-hidden rounded-2xl p-5 sm:p-6
      "
    >
      <div className="flex items-center justify-between gap-3">
        <span
          className="
            inline-flex items-center gap-2 rounded-full
            bg-[color-mix(in_oklch,var(--color-accent)_18%,transparent)]
            px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.18em]
            text-[var(--color-accent)]
          "
        >
          <span aria-hidden className="h-1 w-1 rounded-full bg-[var(--color-accent)]" />
          {sprint.id}
        </span>
        <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--color-foreground-soft)]">
          {sprint.engine}
        </span>
      </div>

      <h3 className="mt-3 text-xl font-semibold tracking-tight sm:text-2xl">
        {sprint.title}
      </h3>

      <p className="mt-2 text-sm leading-relaxed text-[var(--color-foreground-muted)]">
        {sprint.summary}
      </p>

      {sprint.formula && (
        <pre
          className="
            mt-4 overflow-x-auto rounded-lg border border-[var(--color-border)]
            bg-[color-mix(in_oklch,var(--color-surface-muted)_80%,transparent)]
            px-3 py-2 font-mono text-[13px]
            text-[var(--color-foreground)]
          "
        >
          <code>{sprint.formula}</code>
        </pre>
      )}

      <ul className="mt-4 space-y-2 text-sm leading-relaxed text-[var(--color-foreground-muted)]">
        {sprint.highlights.map((h) => (
          <li key={h} className="flex gap-2">
            <span
              aria-hidden
              className="mt-2 inline-block h-1 w-1 shrink-0 rounded-full bg-[var(--color-accent)]"
            />
            <span>{h}</span>
          </li>
        ))}
      </ul>

      {sprint.metrics && sprint.metrics.length > 0 && (
        <div className="mt-5 grid grid-cols-3 gap-2.5">
          {sprint.metrics.map((m) => (
            <MetricTile key={m.label} metric={m} />
          ))}
        </div>
      )}
    </section>
  );
}

function CompactProjectCard({ project }: { project: Project }) {
  return (
    <article
      aria-labelledby={`project-${project.slug}`}
      className="
        glass relative flex h-full flex-col gap-3 overflow-hidden
        rounded-2xl p-5 sm:p-6
      "
    >
      <StatusBadge status={project.status} />
      <h3
        id={`project-${project.slug}`}
        className="text-lg font-semibold tracking-tight"
      >
        {project.name}
      </h3>
      <p className="text-sm leading-relaxed text-[var(--color-foreground-muted)]">
        {project.tagline}
      </p>
      {project.stack.length > 0 && (
        <ul className="mt-auto flex flex-wrap gap-1.5 pt-2">
          {project.stack.slice(0, 4).map((s) => (
            <li
              key={s}
              className="
                rounded-md border border-[var(--color-border)] px-2 py-0.5
                font-mono text-[11px] text-[var(--color-foreground-muted)]
              "
            >
              {s}
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}
