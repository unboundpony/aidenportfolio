import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navigation } from "@/components/navigation";

export const metadata: Metadata = {
  title: {
    default: "Aiden Lee // Technical PM Lab",
    template: "%s — Aiden Lee // Technical PM Lab",
  },
  description:
    "A high-velocity Technical Product Management portfolio at the intersection of Industrial Engineering and product logic. Featuring the Omni-Channel Dealer Health Index.",
  keywords: [
    "Technical Product Manager",
    "Industrial Engineering",
    "Cox Automotive",
    "Dealer Health Index",
    "Aiden Lee",
    "Portfolio",
  ],
  authors: [{ name: "Aiden Lee" }],
  creator: "Aiden Lee",
  openGraph: {
    title: "Aiden Lee // Technical PM Lab",
    description:
      "Technical PM portfolio: prototypes & data-driven tools at the seam of IE + PM logic.",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "oklch(98% 0.01 240)" },
    { media: "(prefers-color-scheme: dark)", color: "oklch(16% 0.025 270)" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider>
          <a
            href="#main"
            className="
              sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4
              focus:z-[60] focus:rounded-md focus:bg-[var(--color-accent)]
              focus:px-3 focus:py-2 focus:text-[var(--color-accent-foreground)]
            "
          >
            Skip to content
          </a>
          <Navigation />
          <main id="main" className="pt-24 sm:pt-28">
            {children}
          </main>
          <footer
            className="
              mx-auto mt-24 max-w-6xl px-6 pb-10 text-xs
              text-[var(--color-foreground-soft)]
            "
          >
            <div className="flex flex-col items-start justify-between gap-2 border-t border-[var(--color-border)] pt-6 sm:flex-row sm:items-center">
              <p className="font-mono">
                © {new Date().getFullYear()} Aiden Lee · Built in the lab.
              </p>
              <p className="font-mono">
                <span className="text-[var(--color-accent)]">●</span>{" "}
                v0.1 · Nordic Slate / Cyber Indigo
              </p>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
