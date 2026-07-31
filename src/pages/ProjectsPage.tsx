import { useEffect } from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { RouteLink } from '../app/router';
import { projects, statusLabels } from '../content/projects';
import { updateSeo } from '../lib/seo';
import { PageShell } from './PageShell';

export function ProjectsPage() {
  useEffect(() => {
    updateSeo({
      title: 'Projects',
      description: 'Curated archive of featured product work, systems, AI experiments and software projects.',
      path: '/projects',
    });
  }, []);
  const featured = projects.filter((project) => project.featured);
  const archive = projects.filter((project) => !project.featured);

  return (
    <PageShell className="px-6">
      <section className="mx-auto flex max-w-7xl flex-col gap-10">
        <div className="max-w-3xl space-y-4">
          <span className="block text-xs font-mono font-semibold uppercase tracking-[0.35em] text-[#0d9488]">
            PROJECTS // CURATED ARCHIVE
          </span>
          <h1 className="text-4xl font-bold tracking-tight text-[#111113] sm:text-5xl">
            A curated archive of product work, systems thinking and carefully scoped experiments.
          </h1>
          <p className="max-w-2xl text-base leading-7 text-slate-600">
            The archive foregrounds the more complete, product-facing work first, while still preserving the wider set of explorations and tools that shaped the practice.
          </p>
        </div>

        <div className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {featured.map((project) => (
              <RouteLink key={project.slug} to={`/projects/${project.slug}`} className="group flex h-full flex-col justify-between rounded-[2rem] border border-black/10 bg-white p-7 shadow-[0_20px_70px_rgba(21,21,21,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-[#0d9488]/40 hover:shadow-xl">
                <div className="space-y-5">
                  <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-[0.24em] text-slate-500">
                    <span className="text-[#0d9488]">{project.category}</span>
                    <span>{project.year}</span>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm font-medium text-[#0d9488]">
                      <Sparkles className="h-4 w-4" />
                      Featured work
                    </div>
                    <h2 className="text-2xl font-semibold tracking-tight text-[#111113] group-hover:text-[#0d9488]">{project.title}</h2>
                    <p className="text-sm leading-7 text-slate-600">{project.shortDescription}</p>
                  </div>
                </div>

                <div className="mt-8 space-y-4 border-t border-black/5 pt-5">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="rounded-full border border-black/10 bg-[#fafaf8] px-3 py-1 text-[11px] font-mono uppercase tracking-[0.22em] text-slate-500">{tag}</span>
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

          <div className="rounded-[2rem] border border-black/10 bg-[#f7f5ef] p-8">
            <div className="flex items-center justify-between text-[11px] font-semibold uppercase tracking-[0.35em] text-[#0d9488]">
              <span>Archive</span>
              <span>{archive.length} additional projects</span>
            </div>
            <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {archive.map((project) => (
                <RouteLink key={project.slug} to={`/projects/${project.slug}`} className="rounded-[1.25rem] border border-black/10 bg-white p-5 transition-colors hover:border-[#0d9488]/40">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-slate-500">{project.category}</p>
                  <h3 className="mt-2 text-lg font-semibold text-[#111113]">{project.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{project.shortDescription}</p>
                </RouteLink>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
