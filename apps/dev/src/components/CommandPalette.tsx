"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import { EASE_OUT_EXPO } from "@atreya/brand/motion";
import { CONTACT_EMAIL, whatsappLink } from "@atreya/ui/contact";
import { SITES } from "@atreya/ui/EcosystemNav";
import { allProjects, personalInfo } from "@/data/portfolio";
import { services } from "@/data/services";
import { posts } from "@/data/posts";

type Item = {
  id: string;
  group: "Go to" | "Services" | "Work" | "Writing" | "Sites" | "Actions";
  label: string;
  hint?: string;
  keywords?: string;
  run: () => void;
};

/** Opens the palette from anywhere: window.dispatchEvent(new Event(OPEN_PALETTE)). */
export const OPEN_PALETTE = "atreya:open-palette";

// Element to refocus when the palette closes. Module-level (one palette per page)
// so the item callbacks don't capture a ref during render.
let lastFocus: HTMLElement | null = null;

export function CommandPalette() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const [toast, setToast] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const close = useCallback(() => {
    setOpen(false);
    setQuery("");
    setActive(0);
    lastFocus?.focus();
  }, []);

  const go = useCallback(
    (href: string) => {
      close();
      if (href.startsWith("http")) window.open(href, "_blank", "noopener,noreferrer");
      else router.push(href);
    },
    [close, router],
  );

  const items: Item[] = useMemo(() => {
    const wa = whatsappLink("Hi Atreya, I found you on atreyakamat.dev. I need help with: ");
    return [
      { id: "home", group: "Go to", label: "Home", run: () => go("/") },
      { id: "services", group: "Go to", label: "Services", run: () => go("/#services") },
      { id: "system", group: "Go to", label: "How a project runs", keywords: "process system stages", run: () => go("/#system") },
      { id: "proof", group: "Go to", label: "Proof of work", keywords: "live sites portfolio", run: () => go("/#proof") },
      { id: "about", group: "Go to", label: "About Atreya", run: () => go("/#about") },
      { id: "faq", group: "Go to", label: "FAQ", run: () => go("/#faq") },
      { id: "contact", group: "Go to", label: "Start a project", keywords: "contact enquiry hire quote", run: () => go("/#contact") },
      { id: "blog", group: "Go to", label: "Blog", keywords: "articles writing", run: () => go("/blog/") },
      ...services.map((s) => ({
        id: `svc-${s.slug}`,
        group: "Services" as const,
        label: s.name,
        hint: "Goa",
        keywords: s.seoTitle,
        run: () => go(`/services/${s.slug}/`),
      })),
      ...allProjects.map((p) => ({
        id: `prj-${p.slug}`,
        group: "Work" as const,
        label: p.title,
        hint: p.category,
        run: () => go(`/projects/${p.slug}/`),
      })),
      ...posts.map((p) => ({
        id: `post-${p.slug}`,
        group: "Writing" as const,
        label: p.title,
        keywords: p.description,
        run: () => go(`/blog/${p.slug}/`),
      })),
      ...SITES.filter((s) => s.id !== "dev").map((s) => ({
        id: `site-${s.id}`,
        group: "Sites" as const,
        label: `${s.label}.atreyakamat.dev`,
        hint: s.blurb,
        run: () => go(s.href),
      })),
      {
        id: "copy-email",
        group: "Actions",
        label: "Copy email address",
        hint: CONTACT_EMAIL,
        run: () => {
          navigator.clipboard
            ?.writeText(CONTACT_EMAIL)
            .then(() => setToast("Email copied"))
            .catch(() => setToast(CONTACT_EMAIL));
          close();
        },
      },
      ...(wa ? [{ id: "wa", group: "Actions" as const, label: "Message on WhatsApp", run: () => go(wa) }] : []),
      { id: "resume", group: "Actions", label: "Download résumé", keywords: "cv resume pdf", run: () => go(personalInfo.resumeUrl) },
      { id: "github", group: "Actions", label: "GitHub", run: () => go(personalInfo.githubUrl) },
      { id: "linkedin", group: "Actions", label: "LinkedIn", run: () => go(personalInfo.linkedinUrl) },
    ];
  }, [go, close]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return items;
    return items.filter((i) => `${i.label} ${i.hint ?? ""} ${i.keywords ?? ""} ${i.group}`.toLowerCase().includes(q));
  }, [items, query]);

  // Global shortcut + custom open event
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        lastFocus = document.activeElement as HTMLElement | null;
        setOpen((o) => !o);
      }
    };
    const onOpen = () => {
      lastFocus = document.activeElement as HTMLElement | null;
      setOpen(true);
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener(OPEN_PALETTE, onOpen);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener(OPEN_PALETTE, onOpen);
    };
  }, []);

  useEffect(() => {
    if (open) requestAnimationFrame(() => inputRef.current?.focus());
  }, [open]);

  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(null), 1800);
    return () => clearTimeout(t);
  }, [toast]);

  const onListKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((a) => Math.min(a + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((a) => Math.max(a - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      results[active]?.run();
    } else if (e.key === "Escape") {
      e.preventDefault();
      close();
    } else if (e.key === "Tab") {
      // Keep focus inside the dialog: the input is the only tabbable element.
      e.preventDefault();
    }
  };

  let lastGroup = "";

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[90] flex items-start justify-center bg-navy-950/70 px-4 pt-[12vh] backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onMouseDown={(e) => e.target === e.currentTarget && close()}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label="Command menu"
              initial={{ opacity: 0, y: 16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.98 }}
              transition={{ duration: 0.35, ease: EASE_OUT_EXPO }}
              className="w-full max-w-xl overflow-hidden rounded-2xl border border-white/15 bg-navy-900 shadow-[0_40px_120px_-30px_rgba(0,0,0,0.8)]"
              onKeyDown={onListKey}
            >
              <div className="flex items-center gap-3 border-b border-white/10 px-4">
                <span aria-hidden className="font-mono text-sm text-lemon-400">
                  ⌘K
                </span>
                <input
                  ref={inputRef}
                  value={query}
                  onChange={(e) => {
                    setQuery(e.target.value);
                    setActive(0);
                  }}
                  placeholder="Jump to a service, project, article…"
                  aria-label="Search"
                  aria-controls="palette-list"
                  aria-activedescendant={results[active] ? `pal-${results[active].id}` : undefined}
                  role="combobox"
                  aria-expanded="true"
                  className="h-14 flex-1 bg-transparent text-paper placeholder:text-navy-300 focus:outline-none focus-visible:outline-none"
                />
                <kbd className="rounded border border-white/15 px-1.5 py-0.5 font-mono text-[10px] text-navy-300">esc</kbd>
              </div>
              <ul id="palette-list" role="listbox" data-lenis-prevent className="max-h-[52vh] overflow-y-auto overscroll-contain p-2">
                {results.length === 0 && <li className="px-3 py-6 text-center text-sm text-navy-300">Nothing matches “{query}”.</li>}
                {results.map((item, i) => {
                  const header = item.group !== lastGroup;
                  lastGroup = item.group;
                  return (
                    <li key={item.id} role="presentation">
                      {header && (
                        <p className="px-3 pb-1 pt-3 font-mono text-[10px] uppercase tracking-[0.2em] text-navy-300">{item.group}</p>
                      )}
                      <button
                        id={`pal-${item.id}`}
                        role="option"
                        aria-selected={i === active}
                        tabIndex={-1}
                        onMouseEnter={() => setActive(i)}
                        onClick={() => item.run()}
                        className={clsx(
                          "flex w-full items-center justify-between gap-4 rounded-lg px-3 py-2.5 text-left text-[15px] transition-colors",
                          i === active ? "bg-lemon-400 text-navy-950" : "text-paper",
                        )}
                      >
                        <span className="truncate">{item.label}</span>
                        {item.hint && (
                          <span className={clsx("shrink-0 truncate font-mono text-[10px] uppercase tracking-[0.14em]", i === active ? "text-navy-800" : "text-navy-300")}>
                            {item.hint}
                          </span>
                        )}
                      </button>
                    </li>
                  );
                })}
              </ul>
              <div className="flex items-center justify-between border-t border-white/10 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.16em] text-navy-300">
                <span>↑↓ to move · ↵ to open</span>
                <span>{results.length} results</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {toast && (
          <motion.p
            role="status"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="fixed bottom-6 left-1/2 z-[95] -translate-x-1/2 rounded-full bg-lemon-400 px-4 py-2 font-mono text-xs uppercase tracking-[0.16em] text-navy-950"
          >
            {toast}
          </motion.p>
        )}
      </AnimatePresence>
    </>
  );
}

/** Small button that opens the palette (for the header). */
export function CommandPaletteTrigger({ className }: { className?: string }) {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event(OPEN_PALETTE))}
      aria-label="Open command menu (Ctrl or Command + K)"
      className={clsx(
        "items-center gap-2 rounded-full border border-white/15 px-3 py-1.5 font-mono text-[10.5px] uppercase tracking-[0.16em] text-navy-300 transition-colors hover:border-lemon-400 hover:text-lemon-400",
        className,
      )}
    >
      <span aria-hidden>⌘K</span>
      <span className="hidden xl:inline">Search</span>
    </button>
  );
}
