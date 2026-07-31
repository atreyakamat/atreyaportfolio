import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { RouteLink } from '../../app/router';
import { featuredProjects } from '../../content/projects';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export const StackedProjectsSection: React.FC = () => {
  const reducedMotion = useReducedMotion();

  return (
    <section id="work" className="section-shell px-6 lg:px-8">
      <div className="container-shell space-y-8">
        <div className="max-w-3xl space-y-4">
          <span className="block text-[11px] font-semibold uppercase tracking-[0.35em] text-[#0d9488]">
            SELECTED PROJECTS // FEATURED WORK
          </span>
          <h2 className="text-3xl font-semibold leading-[1.02] tracking-[-0.02em] text-[#111113] sm:text-4xl lg:text-5xl">
            Product work that balances craft, systems and lived context.
          </h2>
          <p className="max-w-2xl text-lg leading-8 text-slate-700">
            Each project here is chosen for the way it solves a real operational or product problem rather than for novelty alone.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {featuredProjects.map((project, index) => {
            const offset = index % 2 === 0 ? 'lg:translate-y-6' : 'lg:-translate-y-2';
            const card = (
              <motion.article
                initial={reducedMotion ? false : { opacity: 0, y: 16 }}
                whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                whileHover={reducedMotion ? undefined : { y: -6, scale: 1.01 }}
                transition={{ duration: 0.28 }}
                className={`group flex min-h-[320px] flex-col justify-between rounded-[2rem] border border-black/10 bg-white p-7 shadow-[0_24px_80px_rgba(21,21,21,0.06)] ${offset}`}
              >
                <div className="space-y-6">
                  <div className="flex items-center justify-between text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-500">
                    <span className="text-[#0d9488]">{project.category}</span>
                    <span>{project.year}</span>
                  </div>

                  <div className="rounded-[1.5rem] border border-black/10 bg-[#f7f5ef] p-5">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-slate-500">
                      {project.status}
                    </p>
                    <h3 className="mt-3 text-2xl font-semibold tracking-[-0.02em] text-[#111113] transition-colors group-hover:text-[#0d9488]">
                      {project.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">{project.shortDescription}</p>
                  </div>
                </div>

                <div className="mt-8 space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="rounded-full border border-black/10 bg-[#fafaf8] px-3 py-1 text-[11px] font-mono uppercase tracking-[0.2em] text-slate-500">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between border-t border-black/10 pt-5 text-sm text-slate-500">
                    <span>View project</span>
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                </div>
              </motion.article>
            );

            return (
              <RouteLink key={project.slug} to={`/projects/${project.slug}`}>
                {card}
              </RouteLink>
            );
          })}
        </div>
      </div>
    </section>
  );
};
