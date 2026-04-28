# AidenPortfolio.dev

A high-performance Technical PM portfolio — built as a "Project Lab" for high-velocity prototypes at the seam of Industrial Engineering and PM logic.

- **Stack:** Next.js 15 (App Router) · React 19 · TypeScript · Tailwind v4 (`oklch` tokens) · `next-themes`
- **Theme:** `Nordic Slate` (light) ⇄ `Cyber Indigo` (dark) — toggled from the persistent header
- **Surface:** Glassmorphism with a subtle engineering-grid backdrop and ambient gradient

## Architecture

```
app/
  layout.tsx          Global ThemeProvider, persistent header, footer, metadata
  page.tsx            "/" — Hero + Project Lab BentoGrid
  about/page.tsx      "/about" — Credentials timeline + Skills Matrix
  globals.css         Tailwind v4 @theme tokens (oklch) + glass/animation utilities
components/
  navigation.tsx      Top-tier persistent header w/ Sun/Moon toggle
  theme-provider.tsx  next-themes wrapper (class-strategy)
  theme-toggle.tsx    Sun/Moon switch (no icon-lib dependency)
  hero.tsx            Minimalist headline + role/stack chips
  bento-grid.tsx      Strict 4-col bento — 1×1, 2×1, 2×2, full spans
  project-card.tsx    Modular card; accepts a `sprints` array for deep-dives
  metric-tile.tsx     KPI tile (sentiment-tinted)
  placeholder-card.tsx  Empty-state "[Processing...]" slot for upcoming work
lib/
  projects.ts         Featured project + sprint data (Omni-Channel Dealer Health Index)
  credentials.ts      Professional / Academic / Entrepreneurial timeline + skills
```

### Featured project deep-dive

The Omni-Channel Dealer Health Index card pulls from `lib/projects.ts` and renders:

- **Sprint 2 — The Strategy Simulator:** What-If sensitivity engine. Formula `S = Σ ( wᵢ · Δcᵢ )`.
- **Sprint 3 — The Profit Evaporator:** Inventory carrying-cost burn engine + persistent financial HUD.

The `ProjectCard` is fully data-driven, so adding another project + sprints requires no markup changes — just a new entry in `lib/projects.ts`.

### Bento spans

`BentoItem` accepts:

- `1x1` — single cell (default)
- `2x1` — wide
- `2x2` — large square
- `full` — full-width (used by the featured card)

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start
```

## Adding your resume

The `Resume` nav link points to `/resume.pdf`. Drop your resume at `public/resume.pdf` and it'll just work.

## Design tokens

All colors are authored in `oklch` for perceptual uniformity. Light-mode background is `oklch(98% 0.01 240)`; the accent is `oklch(60% 0.15 250)`. The dark theme shifts the same axes into the indigo/violet end of the gamut. Edit `app/globals.css` to retune.
