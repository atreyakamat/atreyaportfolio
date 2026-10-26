"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { SectionHeader } from "@atreya/ui/SectionHeader";
import { instagram, topReels } from "@/data/create";

declare global {
  interface Window {
    instgrm?: { Embeds: { process: () => void } };
  }
}

const EMBED_SRC = "https://www.instagram.com/embed.js";
const COUNT_WORDS = ["No", "One", "Two", "Three", "Four", "Five", "Six"];

/**
 * Top reels from @atreya.mp4 as official Instagram embeds. Instagram's script is
 * heavy, so it only loads when the section scrolls near the viewport.
 * Hidden entirely while data/create.ts → topReels is empty.
 */
export function TopReels() {
  const ref = useRef<HTMLElement>(null);
  const near = useInView(ref, { once: true, margin: "600px 0px" });
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!near || topReels.length === 0) return;
    if (window.instgrm) {
      window.instgrm.Embeds.process();
      return;
    }
    const s = document.createElement("script");
    s.src = EMBED_SRC;
    s.async = true;
    s.onload = () => {
      window.instgrm?.Embeds.process();
      setLoaded(true);
    };
    document.body.appendChild(s);
  }, [near]);

  if (topReels.length === 0) return null;

  return (
    <section ref={ref} id="top-reels" aria-labelledby="top-reels-title" className="bg-ink px-5 py-28 md:px-10 md:py-36">
      <div className="mx-auto max-w-[96rem]">
        <SectionHeader
          index="R"
          label="Top reels"
          meta={`@${instagram.handle}`}
          id="top-reels-title"
          title={
            <>
              {COUNT_WORDS[Math.min(topReels.length, 6)]} cuts from <span className="font-serif font-normal italic text-acid">@{instagram.handle}</span>.
            </>
          }
        />
        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {topReels.slice(0, 6).map((url) => (
            <li key={url} className="min-w-0 overflow-hidden border-2 border-acid/40 bg-ink">
              <blockquote
                className="instagram-media"
                data-instgrm-permalink={url}
                data-instgrm-version="14"
                style={{ margin: 0, width: "100%", minWidth: 0, background: "#0a0a0a", border: 0 }}
              >
                <a href={url} target="_blank" rel="noopener noreferrer" className="block p-6 font-mono text-xs uppercase tracking-[0.18em] text-acid">
                  {loaded ? "Open on Instagram ↗" : "Loading reel…"}
                </a>
              </blockquote>
            </li>
          ))}
        </ul>
        <a
          href={instagram.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex items-center gap-2 bg-acid px-6 py-3 font-mono text-xs font-bold uppercase tracking-[0.18em] text-ink"
        >
          Follow @{instagram.handle} ↗
        </a>
      </div>
    </section>
  );
}
