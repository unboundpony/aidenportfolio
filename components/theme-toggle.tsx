"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

/**
 * Sun/Moon toggle. Uses CSS-only icons (no external icon lib) so the
 * portfolio bundle stays tiny.
 */
export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = mounted && resolvedTheme === "dark";
  const next = isDark ? "light" : "dark";

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label={`Activate ${next === "dark" ? "Cyber Indigo" : "Nordic Slate"} theme`}
      onClick={() => setTheme(next)}
      className="
        glass relative inline-flex h-9 w-9 items-center justify-center
        rounded-full transition-transform duration-300
        hover:scale-105 active:scale-95
        focus-visible:outline-none focus-visible:ring-2
        focus-visible:ring-[var(--color-accent)]
      "
    >
      {/* Sun */}
      <span
        aria-hidden
        className={`
          absolute inline-block h-4 w-4 rounded-full
          bg-[var(--color-accent)]
          shadow-[0_0_0_2px_color-mix(in_oklch,var(--color-accent)_18%,transparent)]
          transition-all duration-500
          ${isDark ? "scale-0 rotate-90 opacity-0" : "scale-100 rotate-0 opacity-100"}
        `}
      />
      {/* Moon */}
      <span
        aria-hidden
        className={`
          absolute inline-block h-4 w-4 rounded-full
          bg-[var(--color-foreground)]
          transition-all duration-500
          ${isDark ? "scale-100 rotate-0 opacity-100" : "scale-0 -rotate-90 opacity-0"}
        `}
        style={{
          boxShadow:
            "inset -3px -2px 0 0 var(--color-background)",
        }}
      />
    </button>
  );
}
