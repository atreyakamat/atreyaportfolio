import { useEffect } from 'react';
import { ArrowLeft, ArrowUpRight, ExternalLink } from 'lucide-react';
import { RouteLink } from '../app/router';
import { getAdjacentProjects, getProject } from '../content/projects';
import { updateSeo } from '../lib/seo';
import { PageShell } from './PageShell';
import { Backlight } from '../components/ui/Backlight';
import { TextHighlighter } from '../components/ui/TextHighlighter';
import { InteractiveButton } from '../components/ui/InteractiveButton';

interface ProjectDetailPageProps {
  slug: string;
}

export function ProjectDetailPage({ slug }: ProjectDetailPageProps) {
  const project = getProject(slug);
  const adjacent = project ? getAdjacentProjects(slug) : { previous: undefined, next: undefined };

  useEffect(() => {
    if (!project) {
      updateSeo({
        title: 'Project not found',
        description: 'The requested project could not be found in the portfolio archive.',
        path: `/projects/${slug}`,
      });
      return;
    }

    updateSeo({
      title: project.title,
      description: project.shortDescription,
      path: `/projects/${project.slug}`,
    });
  }, [project, slug]);

  if (!project) {
    return (
      <PageShell className="px-6">
        <section className="mx-auto max-w-4xl py-20 text-center">
          <p className="text-xs font-mono font-semibold uppercase tracking-[0.35em] text-[#087f78]">Project not found</p>
          <h1 className="mt-4 font-serif text-4xl font-bold tracking-tight text-[#151515]">The requested project is not available yet.</h1>
          <p className="mt-4 text-base text-slate-600">Return to the project archive and choose a different case study to explore.</p>
          <div className="mt-8 flex justify-center">
            <RouteLink to="/projects">
              <InteractiveButton variant="secondary">
                <ArrowLeft className="h-4 w-4" />
                Back to projects
              </InteractiveButton>
            </RouteLink>
          </div>
        </section>
      </PageShell>
    );
  }

  return (
    <PageShell className="px-6 py-12">
      <article className="mx-auto max-w-5xl space-y-16">
        {/* Navigation back */}
        <RouteLink to="/projects" className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-slate-500 hover:text-[#087f78]">
          <ArrowLeft className="h-4 w-4" />
          Back to all projects
        </RouteLink>

        {/* Hero Section */}
        <header className="space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4 text-xs font-mono uppercase tracking-widest text-[#087f78]">
            <span>{project.category} // {project.year}</span>
            <span className="rounded-full border border-black/10 bg-white px-3 py-1 text-slate-700 font-semibold">{project.status}</span>
          </div>

          <h1 className="font-serif text-5xl font-bold tracking-[ -0.03em] text-[#151515] sm:text-6xl lg:text-7xl">
            {project.title}
          </h1>

          <p className="max-w-3xl text-xl leading-relaxed text-slate-700">
            <TextHighlighter color="rgba(50, 214, 197, 0.25)">
              {project.shortDescription}
            </TextHighlighter>
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            {project.links?.live && (
              <InteractiveButton href={project.links.live} target="_blank" rel="noopener noreferrer">
                Open Live Product
                <ExternalLink className="h-4 w-4" />
              </InteractiveButton>
            )}
            {project.links?.github && (
              <InteractiveButton href={project.links.github} target="_blank" rel="noopener noreferrer" variant="secondary">
                Inspect Source Code
              </InteractiveButton>
            )}
          </div>
        </header>

        {/* Prominent Media Section */}
        {project.cover && (
          <section className="relative">
            <Backlight color="rgba(50, 214, 197, 0.25)" intensity={45}>
              <div className="overflow-hidden rounded-3xl border border-black/10 bg-[#151515] shadow-2xl">
                {project.cover.src ? (
                  <img src={project.cover.src} alt={project.cover.alt} className="aspect-[16/9] w-full object-cover" />
                ) : (
                  <div className="flex aspect-[16/9] w-full flex-col items-center justify-center p-8 text-center text-white bg-gradient-to-br from-slate-900 via-[#151515] to-[#087f78]/30">
                    <span className="text-xs font-mono uppercase tracking-widest text-[#32d6c5]">{project.category}</span>
                    <h3 className="mt-3 font-serif text-3xl font-bold">{project.title}</h3>
                    <p className="mt-2 text-sm text-white/70 max-w-lg">{project.fullDescription}</p>
                  </div>
                )}
              </div>
            </Backlight>
          </section>
        )}

        {/* Editorial Body: Problem & Contribution */}
        <section className="grid gap-12 lg:grid-cols-[1fr_1.5fr] border-t border-black/10 pt-12">
          <div className="space-y-4">
            <h2 className="font-serif text-2xl font-bold text-[#151515]">Operational Problem</h2>
            <p className="text-base leading-8 text-slate-700">{project.problem}</p>
          </div>

          <div className="space-y-4">
            <h2 className="font-serif text-2xl font-bold text-[#151515]">Key Contributions & Scope</h2>
            <ul className="space-y-4 text-base leading-7 text-slate-700">
              {project.contribution.map((point) => (
                <li key={point} className="flex gap-3">
                  <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-[#32d6c5]" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Key Decisions */}
        {project.decisions.length > 0 && (
          <section className="border-t border-black/10 pt-12 space-y-6">
            <h2 className="font-serif text-3xl font-bold text-[#151515]">Key Architectural Decisions</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {project.decisions.map((d) => (
                <div key={d.decision} className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm space-y-3">
                  <h3 className="font-bold text-base text-[#151515]">{d.decision}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{d.why}</p>
                  {d.tradeoff && (
                    <p className="text-xs text-slate-500 italic border-t border-black/5 pt-2">
                      Tradeoff: {d.tradeoff}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Tech Stack & Outcomes */}
        <section className="grid gap-8 md:grid-cols-2 border-t border-black/10 pt-12">
          <div className="space-y-4">
            <h2 className="font-serif text-2xl font-bold text-[#151515]">Technology Stack</h2>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((g) => (
                <div key={g.label} className="rounded-xl border border-black/10 bg-white p-4 w-full">
                  <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#087f78]">{g.label}</span>
                  <p className="mt-1 text-sm font-medium text-slate-800">{g.items.join(' · ')}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="font-serif text-2xl font-bold text-[#151515]">Outcomes & Verification</h2>
            <div className="space-y-3 text-sm text-slate-700 leading-relaxed">
              {project.outcomes.map((o) => (
                <div key={o} className="rounded-xl border border-black/10 bg-[#F7F5EF] p-4 font-medium text-slate-800">
                  {o}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Next / Previous Project Footer */}
        <footer className="flex items-center justify-between border-t border-black/10 pt-12">
          {adjacent.previous ? (
            <RouteLink to={`/projects/${adjacent.previous.slug}`} className="inline-flex items-center gap-2 text-sm font-semibold text-[#151515] hover:text-[#087f78]">
              <ArrowLeft className="h-4 w-4" />
              {adjacent.previous.title}
            </RouteLink>
          ) : <div />}

          {adjacent.next ? (
            <RouteLink to={`/projects/${adjacent.next.slug}`} className="inline-flex items-center gap-2 text-sm font-semibold text-[#151515] hover:text-[#087f78]">
              {adjacent.next.title}
              <ArrowUpRight className="h-4 w-4" />
            </RouteLink>
          ) : <div />}
        </footer>
      </article>
    </PageShell>
  );
}
