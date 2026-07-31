import { ArrowUpRight, Sparkles } from 'lucide-react';
import { RouteLink } from '../app/router';
import { projects, statusLabels } from '../content/projects';
import { PageShell } from './PageShell';

export function ProjectsPage() {
  return (
    <PageShell className="px-6">
      <section className="mx-auto flex max-w-7xl flex-col gap-10">
        <div className="max-w-3xl space-y-4">
          <span className="block text-xs font-mono font-semibold uppercase tracking-[0.35em] text-[#0d9488]">
            SELECTED WORK // PRODUCT PROOF
          </span>
          <h1 className="text-4xl font-bold tracking-tight text-[#111113] sm:text-5xl">
            A living set of product work, systems thinking and shipped experiments.
          </h1>
          <p className="max-w-2xl text-base leading-7 text-slate-600">
            These projects reflect different modes of building: product surfaces, backend systems, AI-assisted workflows and practical tools that solve real coordination problems.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <RouteLink
              key={project.slug}
              to={`/projects/${project.slug}`}
              className="group flex h-full flex-col justify-between rounded-3xl border border-black/10 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#0d9488]/40 hover:shadow-xl"
            >
              <div className="space-y-5">
                <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-[0.24em] text-slate-500">
                  <span className="text-[#0d9488]">{project.category}</span>
                  <span>{project.year}</span>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm font-medium text-[#0d9488]">
                    <Sparkles className="h-4 w-4" />
                    {project.featured ? 'Featured work' : 'Portfolio project'}
                  </div>
                  <h2 className="text-2xl font-semibold tracking-tight text-[#111113] group-hover:text-[#0d9488]">
                    {project.title}
                  </h2>
                  <p className="text-sm leading-7 text-slate-600">{project.shortDescription}</p>
                </div>
              </div>

              <div className="mt-8 space-y-4 border-t border-black/5 pt-5">
                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="rounded-full border border-black/10 bg-[#fafaf8] px-3 py-1 text-[11px] font-mono uppercase tracking-[0.22em] text-slate-500">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between text-sm text-slate-500">
                  <span className="font-medium">{statusLabels[project.status]}</span>
                  <span className="inline-flex items-center gap-2 font-medium text-[#111113] transition-colors group-hover:text-[#0d9488]">
                    View detail
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </RouteLink>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
