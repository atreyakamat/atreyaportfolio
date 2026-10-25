"use client";

import { useRef } from "react";
import Link from "next/link";
import { useScroll } from "framer-motion";
import { ProjectCard } from "@/components/ProjectCard";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/system/SectionHeader";
import { archiveProjectsList, gridProjects, lawyerCrmProject, trackNowProject } from "@/data/portfolio";

const featured = [trackNowProject, ...gridProjects, lawyerCrmProject];

export function SelectedWork() {
  const stackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: stackRef, offset: ["start start", "end end"] });

  return (
    <section id="work" aria-labelledby="work-title" className="px-5 py-28 md:px-10 md:py-40">
      <div className="mx-auto max-w-[96rem]">
        <SectionHeader
          index="04"
          label="Selected work"
          meta="Problem → Build → Outcome"
          id="work-title"
          title={
            <>
              Systems I&rsquo;ve <span className="font-serif font-normal italic text-lemon-400">built and shipped</span>.
            </>
          }
          intro="Each project starts from a real problem. Here is what it was, what I built, and what changed."
        />

        <div ref={stackRef} className="mt-20 flex flex-col gap-[18vh]">
          {featured.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} total={featured.length} progress={scrollYProgress} />
          ))}
        </div>

        <div className="mt-40">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-navy-300">Additional codebases &amp; systems</p>
          </Reveal>
          <ul className="mt-8 border-t border-white/10">
            {archiveProjectsList.map((p) => (
              <li key={p.id} className="border-b border-white/10">
                <Link
                  href={`/projects/${p.slug}/`}
                  className="group grid items-baseline gap-2 px-2 py-6 transition-colors hover:bg-lemon-400 hover:text-navy-950 md:grid-cols-[6rem_1.4fr_1fr_auto] md:gap-8"
                >
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-navy-300 group-hover:text-navy-800">
                    {p.number.replace("ARCHIVE ", "A")}
                  </span>
                  <span className="font-display text-2xl font-bold tracking-tight text-paper group-hover:text-navy-950 md:text-3xl">
                    {p.title}
                  </span>
                  <span className="font-mono text-xs leading-relaxed text-navy-300 group-hover:text-navy-800">{p.category}</span>
                  <span aria-hidden className="hidden text-2xl md:block">
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
