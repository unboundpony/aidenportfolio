"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./theme-toggle";

type NavLink = {
  href: string;
  label: string;
  external?: boolean;
};

const NAV_LINKS: readonly NavLink[] = [
  { href: "/", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/resume.pdf", label: "Resume", external: true },
];

export function Navigation() {
  const pathname = usePathname();

  return (
    <header
      className="
        fixed inset-x-0 top-3 z-50 mx-auto flex max-w-6xl items-center
        justify-between gap-4 px-3 sm:px-6
      "
    >
      <nav
        aria-label="Primary"
        className="
          glass flex w-full items-center justify-between gap-2
          rounded-full px-3 py-2 sm:px-4
        "
      >
        <Link
          href="/"
          className="
            group flex items-center gap-2 rounded-full px-2 py-1
            font-mono text-sm tracking-tight
          "
        >
          <span
            aria-hidden
            className="
              inline-block h-2 w-2 rounded-full
              bg-[var(--color-accent)]
              shadow-[0_0_10px_color-mix(in_oklch,var(--color-accent)_60%,transparent)]
            "
          />
          <span className="font-semibold">aiden</span>
          <span className="text-[var(--color-foreground-soft)]">
            {"//portfolio"}
          </span>
        </Link>

        <ul className="flex items-center gap-1">
          {NAV_LINKS.map((link) => {
            const active =
              !link.external &&
              (link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href));

            const className = `
              relative inline-flex items-center rounded-full px-3 py-1.5
              text-sm font-medium transition-colors
              ${
                active
                  ? "text-[var(--color-foreground)]"
                  : "text-[var(--color-foreground-muted)] hover:text-[var(--color-foreground)]"
              }
            `;

            return (
              <li key={link.href}>
                {link.external ? (
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={className}
                  >
                    {link.label}
                    <span aria-hidden className="ml-1 text-xs opacity-60">
                      ↗
                    </span>
                  </a>
                ) : (
                  <Link href={link.href} className={className}>
                    {link.label}
                    {active && (
                      <span
                        aria-hidden
                        className="
                          absolute inset-x-3 -bottom-0.5 h-px
                          bg-gradient-to-r from-transparent
                          via-[var(--color-accent)] to-transparent
                        "
                      />
                    )}
                  </Link>
                )}
              </li>
            );
          })}
          <li className="ml-1">
            <ThemeToggle />
          </li>
        </ul>
      </nav>
    </header>
  );
}
