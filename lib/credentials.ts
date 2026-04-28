export type Credential = {
  category: "Professional" | "Academic" | "Entrepreneurial";
  org: string;
  role: string;
  period: string;
  location?: string;
  highlights: string[];
};

export const credentials: Credential[] = [
  {
    category: "Professional",
    org: "Cox Automotive",
    role: "Product Manager",
    period: "Present",
    location: "Atlanta, GA",
    highlights: [
      "Owns the spec & roadmap for the Omni-Channel Dealer Health Index — a composite scoring product spanning inventory, marketing, and ops signals.",
      "Drives sensitivity-analysis and carrying-cost modeling features into the dealer surface.",
      "Translates IE-grade analytical primitives into PM artifacts (PRDs, dashboards, decision trees).",
    ],
  },
  {
    category: "Professional",
    org: "Amazon Operations",
    role: "Area Manager Intern",
    period: "Summer",
    location: "Fulfillment Center",
    highlights: [
      "Ran a labor-balanced shift across multi-process paths; tuned takt and headcount in real time.",
      "Built a small Python tooling layer to surface throughput drag and rebalance flow.",
      "Practiced Amazon's leadership principles under live operational pressure.",
    ],
  },
  {
    category: "Academic",
    org: "Kennesaw State University",
    role: "B.S. Industrial & Systems Engineering",
    period: "In Progress",
    location: "Marietta, GA",
    highlights: [
      "Concentration: Optimization & Facility Planning.",
      "Coursework: linear / integer programming, simulation, queueing, ergonomics, and lean systems.",
      "Capstone trajectory: applying IE primitives to product decisioning surfaces.",
    ],
  },
  {
    category: "Entrepreneurial",
    org: "Luxe Computers",
    role: "Founder",
    period: "Active",
    highlights: [
      "Custom-built and serviced PCs end-to-end — sourcing, build, QA, customer handoff.",
      "Operated the funnel as a real product: lead → spec → build → support.",
    ],
  },
  {
    category: "Entrepreneurial",
    org: "Luxe Pressure Washing LLC",
    role: "Founder",
    period: "Active",
    highlights: [
      "Service-based business with a route-optimized scheduling logic.",
      "Built repeatable SOPs for crew dispatch, pricing tiers, and customer retention.",
    ],
  },
];

export type SkillBucket = {
  label: string;
  items: { name: string; level: number /* 0–100 */; note?: string }[];
};

export const skillMatrix: SkillBucket[] = [
  {
    label: "Frontend & Product Surface",
    items: [
      { name: "Next.js / React", level: 88, note: "App Router, RSC, Tailwind v4" },
      { name: "TypeScript", level: 82 },
      { name: "Tailwind / Design Systems", level: 86 },
    ],
  },
  {
    label: "Data & Modeling",
    items: [
      { name: "Python", level: 84, note: "pandas, NumPy, light ML" },
      { name: "SQL", level: 86, note: "warehouse-grade joins & windows" },
      { name: "Sensitivity / Optimization", level: 78, note: "IE foundations" },
    ],
  },
  {
    label: "PM Craft",
    items: [
      { name: "PRDs & Specs", level: 90 },
      { name: "Stakeholder Comms", level: 88 },
      { name: "Roadmapping", level: 84 },
    ],
  },
  {
    label: "Engineering-Adjacent",
    items: [
      { name: "AutoCAD", level: 72, note: "facility & layout" },
      { name: "Vibe Coding", level: 95, note: "agentic prototyping cadence" },
      { name: "Systems Thinking", level: 90 },
    ],
  },
];
