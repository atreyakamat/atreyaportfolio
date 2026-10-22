"use client";

import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { motion, useTransform, type MotionValue } from "framer-motion";
import type { ProjectItem } from "@/data/portfolio";

/**
 * One sticky card in the stacking scroll. Odd cards flip to lemon so the
 * dual-tone palette is part of the scroll itself.
 */
export function ProjectCard({
  project,
  index,
  total,
  progress,
}: {
  project: ProjectItem;
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const lemon = index % 2 === 1;
  const target = 1 - (total - 1 - index) * 0.045;
  const scale = useTransform(progress, [index / total, 1], [1, target]);

  const muted = lemon ? "text-navy-800" : "text-navy-300";
  const rule = lemon ? "border-navy-950/20" : "border-white/10";

  return (
    <div className="sticky" style={{ top: `calc(5.5rem + ${index * 1.25}rem)` }}>
      <motion.article
        style={{ scale, transformOrigin: "top center" }}
        className={clsx(
          "grid gap-8 overflow-hidden rounded-3xl p-6 md:min-h-[64vh] md:grid-cols-12 md:gap-10 md:p-10",
          lemon ? "bg-lemon-400 text-navy-950" : "bg-navy-800 text-paper ring-1 ring-white/10",
        )}
      >
        <div className="flex flex-col md:col-span-7">
          <div className={clsx("flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.2em]", muted)}>
            <span>{project.number}</span>
            <span>{project.category}</span>
          </div>

          <h3 className="mt-6 font-display text-4xl font-extrabold leading-[0.95] tracking-tight md:text-6xl">
            {project.title}
          </h3>

          <dl className="mt-8 space-y-5 text-[15px] leading-relaxed">
            {(
              [
                ["Problem", project.triad.problem],
                ["Built", project.triad.build],
                ["Outcome", project.triad.outcome],
              ] as const
            ).map(([label, text]) => (
              <div key={label} className={clsx("grid gap-1 border-t pt-4 md:grid-cols-[6rem_1fr] md:gap-6", rule)}>
                <dt className={clsx("font-mono text-[11px] uppercase tracking-[0.2em]", muted)}>{label}</dt>
                <dd>{text}</dd>
              </div>
            ))}
          </dl>

          <p className={clsx("mt-auto pt-8 font-mono text-xs leading-relaxed", muted)}>{project.stack}</p>

          <div className="mt-5 flex flex-wrap items-center gap-3 font-mono text-xs uppercase tracking-[0.16em]">
            <Link
              href={`/projects/${project.slug}/`}
              className={clsx(
                "rounded-full px-5 py-2.5 font-semibold transition-colors",
                lemon ? "bg-navy-950 text-lemon-400 hover:bg-navy-800" : "bg-lemon-400 text-navy-950 hover:bg-lemon-300",
              )}
            >
              Case study →
            </Link>
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="underline-offset-4 hover:underline">
                Live ↗
              </a>
            )}
            {project.repoUrl && (
              <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="underline-offset-4 hover:underline">
                Code ↗
              </a>
            )}
          </div>
        </div>

        <div className="relative min-h-64 overflow-hidden rounded-2xl md:col-span-5 md:min-h-0">
          {project.image ? (
            <Image
              src={project.image}
              alt={project.imageAlt}
              fill
              sizes="(min-width: 768px) 40vw, 90vw"
              className="object-cover transition-transform duration-700 ease-out hover:scale-105"
            />
          ) : null}
          {project.tag && (
            <span
              className={clsx(
                "absolute left-3 top-3 rounded-full px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em]",
                lemon ? "bg-navy-950 text-lemon-400" : "bg-lemon-400 text-navy-950",
              )}
            >
              {project.tag}
            </span>
          )}
        </div>
      </motion.article>
    </div>
  );
}
