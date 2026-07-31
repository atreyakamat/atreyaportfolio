import React from 'react';
import { SELECTED_WORKS } from '../../data/personalData';
import type { ProjectItem } from '../../data/personalData';
import { ArrowUpRight } from 'lucide-react';
import { RouteLink } from '../../app/router';

export const SelectedWorkGrid: React.FC = () => {
  return (
    <section id="work" className="section-shell px-6 lg:px-8">
      <div className="container-shell space-y-10">
        <div className="max-w-3xl space-y-4">
          <span className="block text-[11px] font-semibold uppercase tracking-[0.35em] text-[#0d9488]">
            SELECTED WORK // PROOF OF CRAFT
          </span>
          <h2 className="text-3xl font-semibold leading-[1.02] tracking-[-0.02em] text-[#111113] sm:text-4xl lg:text-5xl">
            Products, systems and carefully considered digital work.
          </h2>
          <p className="max-w-2xl text-lg leading-8 text-slate-700">
            A curated view into the work that best demonstrates how I build, operate and think through real product problems.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {SELECTED_WORKS.map((project: ProjectItem) => (
            <RouteLink
              key={project.id}
              to="/projects"
              className="group flex min-h-[280px] flex-col justify-between rounded-[2rem] border border-black/10 bg-white p-7 shadow-[0_20px_70px_rgba(21,21,21,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-[#32d6c5]"
            >
              <div className="space-y-5">
                <div className="flex items-center justify-between text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-500">
                  <span className="text-[#0d9488]">{project.category}</span>
                  <span>{project.year}</span>
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-semibold tracking-[-0.02em] text-[#111113] transition-colors group-hover:text-[#0d9488]">
                    {project.name}
                  </h3>
                  {project.outcome && <p className="text-sm leading-7 text-slate-600">{project.outcome}</p>}
                </div>
              </div>

              <div className="flex items-center justify-between border-t border-black/10 pt-5 text-sm text-slate-500">
                <span>View project</span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
            </RouteLink>
          ))}
        </div>
      </div>
    </section>
  );
};
