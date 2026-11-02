"use client";

import { useState } from "react";

const btn =
  "inline-flex items-center gap-2 rounded-full border border-rule px-4 py-2 font-mono text-[10.5px] uppercase tracking-[0.14em] text-muted transition-colors hover:border-link hover:text-link";

/** Copy the link or send it on; no tracking scripts, just URLs. */
export function ShareRow({ url, title }: { url: string; title: string }) {
  const [copied, setCopied] = useState(false);
  const enc = encodeURIComponent;

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.prompt("Copy this link", url);
    }
  };

  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="mr-1 font-mono text-[10.5px] uppercase tracking-[0.2em] text-muted">Share</span>
      <button type="button" onClick={copy} className={btn}>
        {copied ? "Copied ✓" : "Copy link"}
      </button>
      <a href={`https://wa.me/?text=${enc(`${title} — ${url}`)}`} target="_blank" rel="noopener noreferrer" className={btn}>
        WhatsApp
      </a>
      <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${enc(url)}`} target="_blank" rel="noopener noreferrer" className={btn}>
        LinkedIn
      </a>
      <a href={`https://x.com/intent/post?text=${enc(title)}&url=${enc(url)}`} target="_blank" rel="noopener noreferrer" className={btn}>
        X
      </a>
    </div>
  );
}
