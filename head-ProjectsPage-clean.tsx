import { useEffect } from 'react';
import { Sparkles } from 'lucide-react';
import { RouteLink } from '../app/router';
import { projects, statusLabels } from '../content/projects';
import { updateSeo } from '../lib/seo';
import { PageShell } from './PageShell';
import { InteractiveButton } from '../components/ui/InteractiveButton';
import { Backlight } from '../components/ui/Backlight';

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
    <PageShell className="px-6 py-12">
      <section className="mx-auto flex max-w-6xl flex-col gap-12">
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <span className="block text-xs font-mono font-semibold uppercase tracking-[0.35em] text-[#087f78]">
            PROJECTS // CURATED ARCHIVE
          </span>
          <h1 className="font-serif text-4xl font-bold tracking-tight text-[#151515] sm:text-5xl lg:text-6xl leading-[0.95]">
            Products, systems and software craft.
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-slate-700">
            A comprehensive index of product builds, infrastructure tools, AI applications and open-source software.
          </p>
        </div>

        {/* Featured Projects Grid */}
        <div className="space-y-12">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featured.map((project) => (
              <Backlight key={project.slug} color="rgba(50, 214, 197, 0.2)" className="h-full">
                <RouteLink
                  to={`/projects/${project.slug}`}
                  className="group flex h-full flex-col justify-between rounded-3xl border border-black/10 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#087f78]"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-xs font-mono uppercase tracking-wider text-slate-500">
                      <span className="text-[#087f78]">{project.category}</span>
                      <span>{project.year}</span>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center gap-1.5 text-xs font-medium text-[#087f78]">
                        <Sparkles className="h-3.5 w-3.5" />
                        Featured work
                      </div>
                      <h2 className="font-serif text-2xl font-bold text-[#151515] group-hover:text-[#087f78]">
                        {project.title}
                      </h2>
                      <p className="text-xs leading-relaxed text-slate-600">
                        {project.shortDescription}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 space-y-4 border-t border-black/5 pt-4">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-black/10 bg-[#F7F5EF] px-2.5 py-0.5 text-[10px] font-mono uppercase tracking-wider text-slate-600"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-medium text-slate-500">{statusLabels[project.status]}</span>
                      <InteractiveButton variant="secondary" className="px-3 py-1.5 text-xs">
                        Explore
                      </InteractiveButton>
                    </div>
                  </div>
                </RouteLink>
              </Backlight>
            ))}
          </div>

          {/* Additional Archive */}
          {archive.length > 0 && (
            <div className="rounded-3xl border border-black/10 bg-[#F7F5EF] p-8 space-y-6">
              <div className="flex items-center justify-between text-xs font-mono uppercase tracking-widest text-[#087f78]">
                <span>Full Archive</span>
                <span>{archive.length} additional projects</span>
              </div>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {archive.map((project) => (
                  <RouteLink
                    key={project.slug}
                    to={`/projects/${project.slug}`}
                    className="rounded-2xl border border-black/10 bg-white p-5 transition-colors hover:border-[#087f78]"
                  >
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500">{project.category}</span>
                    <h3 className="mt-1 font-serif text-lg font-bold text-[#151515]">{project.title}</h3>
                    <p className="mt-2 text-xs text-slate-600">{project.shortDescription}</p>
                  </RouteLink>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </PageShell>
  );
}
