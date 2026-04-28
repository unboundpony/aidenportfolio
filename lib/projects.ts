/**
 * Project data lives here so the home page stays declarative and the
 * ProjectCard component remains agnostic about content.
 */

export type Metric = {
  /** Short label, e.g. "Index Δ" */
  label: string;
  /** Display value, e.g. "+12.4 pts" or "$48k" */
  value: string;
  /** Optional unit/qualifier shown smaller, e.g. "vs. baseline" */
  hint?: string;
  /** Optional sentiment for color treatment */
  tone?: "neutral" | "positive" | "warning" | "danger" | "accent";
};

export type Sprint = {
  /** Sprint identifier, e.g. "Sprint 2" */
  id: string;
  /** Short title, e.g. "The Strategy Simulator" */
  title: string;
  /** 1–2 sentence summary of the slice */
  summary: string;
  /** The hero engineering concept, e.g. "What-If Sensitivity Analysis" */
  engine: string;
  /** Optional formula rendered in monospace */
  formula?: string;
  /** Bulleted technical highlights */
  highlights: string[];
  /** Tile-able KPI metrics */
  metrics?: Metric[];
};

export type ProjectStatus = "shipping" | "in-progress" | "concept";

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  role: string;
  stack: string[];
  status: ProjectStatus;
  /** Bento span hint */
  span?: "full" | "wide" | "square";
  sprints?: Sprint[];
  metrics?: Metric[];
};

export const omniChannelProject: Project = {
  slug: "omni-channel-dealer-health-index",
  name: "Omni-Channel Dealer Health Index",
  tagline:
    "A unified scoring engine that turns fragmented dealer signals into one defensible health number.",
  description:
    "A multi-sprint product surface for Cox Automotive that fuses inventory, marketing, and operational telemetry into a single composite index — then exposes the levers behind it to PMs, account managers, and dealers themselves.",
  role: "Technical PM · Spec, Modeling, Prototype",
  stack: ["Next.js", "Python", "SQL", "Tailwind v4", "Recharts"],
  status: "in-progress",
  span: "full",
  metrics: [
    { label: "Dealer Cohort", value: "12k+", hint: "rooftops modeled", tone: "neutral" },
    { label: "Composite Weights", value: "7", hint: "tunable channels", tone: "accent" },
    { label: "Refresh", value: "Daily", hint: "batched ETL", tone: "neutral" },
  ],
  sprints: [
    {
      id: "Sprint 2",
      title: "The Strategy Simulator",
      summary:
        "A what-if sensitivity engine that lets a PM nudge channel performance and immediately see the projected health index react.",
      engine: "What-If Sensitivity Analysis",
      formula: "S = Σ ( wᵢ · Δcᵢ )",
      highlights: [
        "User-input Δ on each channel cᵢ propagates through the weighted composite in real time.",
        "Per-channel weights wᵢ are exposed as a tunable matrix — no engineering ticket required.",
        "Surfaces the marginal channel: which lever moves the index the most per unit of effort.",
        "Snapshots are diffable so PMs can A/B narrative scenarios in a stakeholder review.",
      ],
      metrics: [
        { label: "Δ Latency", value: "<60ms", hint: "input → projection", tone: "positive" },
        { label: "Tunable Levers", value: "7", hint: "channels", tone: "accent" },
        { label: "Scenario Diffs", value: "∞", hint: "side-by-side", tone: "neutral" },
      ],
    },
    {
      id: "Sprint 3",
      title: "The Profit Evaporator",
      summary:
        "An inventory carrying-cost burn engine that quantifies floorplan drag in dollars and exposes it as a persistent financial HUD.",
      engine: "Inventory Carrying-Cost Burn Engine",
      formula: "Burn/day = Σ (vᵢ · rᵢ / 365)  +  holdingₒₚₛ",
      highlights: [
        "Real-time monitoring of \"Floorplan Drag\" — interest, depreciation, and ops overhead per VIN per day.",
        "Persistent financial HUD overlays the dealer view so cost erosion is never out of sight.",
        "Threshold alerts fire when a unit crosses its break-even age; PM gets a queue, not a noise stream.",
        "Roll-up pivots from VIN → rooftop → region without a re-query.",
      ],
      metrics: [
        { label: "Avg Daily Burn", value: "$48/VIN", hint: "modeled cohort", tone: "warning" },
        { label: "Break-even Aging", value: "62 days", hint: "median", tone: "neutral" },
        { label: "HUD Refresh", value: "5s", hint: "client-side", tone: "positive" },
      ],
    },
  ],
};

export const futureProject: Project = {
  slug: "future-slot",
  name: "Upcoming Project",
  tagline: "Currently in spec.",
  description:
    "A new prototype is being scoped. Check back soon — momentum is the point.",
  role: "TBD",
  stack: [],
  status: "concept",
  span: "square",
};

export const projects: Project[] = [omniChannelProject, futureProject];
