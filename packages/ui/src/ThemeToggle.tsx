"use client";

import { useSyncExternalStore } from "react";
import clsx from "clsx";
import { THEME_EVENT, THEME_KEY, type Theme } from "./theme";

const subscribe = (onChange: () => void) => {
  window.addEventListener(THEME_EVENT, onChange);
  const mq = window.matchMedia("(prefers-color-scheme: dark)");
  mq.addEventListener("change", onChange);
  return () => {
    window.removeEventListener(THEME_EVENT, onChange);
    mq.removeEventListener("change", onChange);
  };
};
const getSnapshot = (): Theme => (document.documentElement.dataset.theme === "light" ? "light" : "dark");

/**
 * Sun / moon button. Reads <html data-theme> (set before paint by THEME_SCRIPT),
 * writes the choice to localStorage and tells other toggles on the page.
 * `serverTheme` must match the data-theme the layout renders on the server.
 */
export function ThemeToggle({ className, serverTheme = "dark" }: { className?: string; serverTheme?: Theme }) {
  const theme = useSyncExternalStore(subscribe, getSnapshot, () => serverTheme);
  const next: Theme = theme === "dark" ? "light" : "dark";

  const toggle = () => {
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem(THEME_KEY, next);
    } catch {
      /* private mode: the choice just will not persist */
    }
    window.dispatchEvent(new Event(THEME_EVENT));
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={`Switch to ${next} mode`}
      title={`Switch to ${next} mode`}
      className={clsx("inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-colors", className)}
    >
      <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" aria-hidden>
        {theme === "dark" ? (
          <>
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M19.1 4.9l-1.4 1.4M6.3 17.7l-1.4 1.4" />
          </>
        ) : (
          <path d="M20 14.5A8.5 8.5 0 1 1 9.5 4a7 7 0 0 0 10.5 10.5z" />
        )}
      </svg>
    </button>
  );
}
