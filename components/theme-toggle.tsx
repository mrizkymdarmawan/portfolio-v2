"use client";

import { MoonIcon, SunIcon } from "@/components/icons";

const THEME_STORAGE_KEY = "portfolio-theme";

function applyTheme(theme: "light" | "dark") {
  document.documentElement.classList.toggle("dark", theme === "dark");
}

export default function ThemeToggle() {
  function onToggleTheme() {
    const isDark = document.documentElement.classList.contains("dark");
    const nextTheme: "light" | "dark" = isDark ? "light" : "dark";
    applyTheme(nextTheme);
    localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
  }

  return (
    <button
      type="button"
      onClick={onToggleTheme}
      aria-label="Toggle light and dark mode"
      className="rounded-full border border-zinc-300 bg-white p-2 text-zinc-800 shadow-sm transition hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:bg-zinc-800"
    >
      <MoonIcon className="size-5 dark:hidden" />
      <SunIcon className="hidden size-5 dark:block" />
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
