import { Hero } from "@/components/hero";
import { BentoGrid, BentoItem } from "@/components/bento-grid";
import { ProjectCard } from "@/components/project-card";
import { PlaceholderCard } from "@/components/placeholder-card";
import { omniChannelProject } from "@/lib/projects";

export default function HomePage() {
  return (
    <>
      <Hero />

      <section
        aria-label="Project Lab"
        className="mx-auto max-w-6xl px-6 pb-20"
      >
        <header className="mb-6 flex items-end justify-between gap-4">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-foreground-soft)]">
              ./projects
            </p>
            <h2 className="mt-1 text-2xl font-semibold tracking-tight sm:text-3xl">
              The Project Lab
            </h2>
          </div>
          <div
            className="
              hidden font-mono text-[11px] uppercase tracking-[0.2em]
              text-[var(--color-foreground-soft)] sm:block
            "
          >
            bento · 1×1 / 2×2 / full
          </div>
        </header>

        <BentoGrid>
          <BentoItem span="full">
            <ProjectCard project={omniChannelProject} variant="full" />
          </BentoItem>

          <BentoItem span="2x2">
            <PlaceholderCard />
          </BentoItem>

          <BentoItem span="2x1">
            <NextUpTeaser />
          </BentoItem>
        </BentoGrid>
      </section>
    </>
  );
}

/**
 * A small "next up" teaser that lives in a 2x1 cell beside the future
 * project placeholder. Keeps the bento balanced visually while
 * communicating the operating cadence of the lab.
 */
function NextUpTeaser() {
  return (
    <div
      className="
        glass relative flex h-full flex-col justify-between gap-4
        overflow-hidden rounded-2xl p-5 sm:p-6
      "
    >
      <div className="flex items-center gap-2">
        <span
          aria-hidden
          className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]"
        />
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-foreground-muted)]">
          Operating Cadence
        </span>
      </div>

      <div>
        <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">
          Two-week sprints. Public artifacts.
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-[var(--color-foreground-muted)]">
          Every prototype here is shipped on a sprint cadence — spec on
          Monday, working slice by Friday, deep-dive write-up on the
          following Monday.
        </p>
      </div>

      <ul
        className="
          grid grid-cols-3 gap-2 font-mono text-[11px]
          text-[var(--color-foreground-soft)]
        "
      >
        <li className="rounded-md border border-[var(--color-border)] px-2 py-1">
          <span className="block text-[10px] uppercase tracking-[0.16em] text-[var(--color-foreground-muted)]">
            Mon
          </span>
          spec
        </li>
        <li className="rounded-md border border-[var(--color-border)] px-2 py-1">
          <span className="block text-[10px] uppercase tracking-[0.16em] text-[var(--color-foreground-muted)]">
            Fri
          </span>
          slice
        </li>
        <li className="rounded-md border border-[var(--color-border)] px-2 py-1">
          <span className="block text-[10px] uppercase tracking-[0.16em] text-[var(--color-foreground-muted)]">
            Mon+1
          </span>
          ship
        </li>
      </ul>
    </div>
  );
}
