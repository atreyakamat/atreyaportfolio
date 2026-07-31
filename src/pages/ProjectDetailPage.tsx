import { useEffect } from 'react';
import { ArrowLeft, ArrowUpRight, ExternalLink } from 'lucide-react';
import { RouteLink } from '../app/router';
import { getAdjacentProjects, getProject } from '../content/projects';
import { updateSeo } from '../lib/seo';
import { PageShell } from './PageShell';

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
        <section className="mx-auto max-w-4xl rounded-[2rem] border border-black/10 bg-white p-10 shadow-sm">
          <p className="text-sm font-mono uppercase tracking-[0.35em] text-[#0d9488]">Project not found</p>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-[#111113]">The requested project is not available yet.</h1>
          <p className="mt-4 text-base leading-7 text-slate-600">Return to the project archive and choose a different case study to explore.</p>
          <RouteLink to="/projects" className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-[#111113] hover:text-[#0d9488]">
            <ArrowLeft className="h-4 w-4" />
            Back to projects
          </RouteLink>
        </section>
      </PageShell>
    );
  }

  return (
    <PageShell className="px-6">
      <section className="mx-auto flex max-w-6xl flex-col gap-10">
        <RouteLink to="/projects" className="inline-flex w-fit items-center gap-2 text-sm font-medium text-slate-600 transition-colors hover:text-[#0d9488]">
          <ArrowLeft className="h-4 w-4" />
          Back to projects
        </RouteLink>

        <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr]">
          <div className="space-y-6 rounded-[2rem] border border-black/10 bg-white p-8 shadow-[0_20px_70px_rgba(21,21,21,0.05)]">
            <div className="space-y-3">
              <p className="text-sm font-mono uppercase tracking-[0.35em] text-[#0d9488]">{project.category}</p>
              <h1 className="text-4xl font-semibold tracking-tight text-[#111113] sm:text-5xl">{project.title}</h1>
              <p className="max-w-2xl text-base leading-8 text-slate-600">{project.fullDescription}</p>
            </div>

            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="rounded-full border border-black/10 bg-[#fafaf8] px-3 py-1 text-[11px] font-mono uppercase tracking-[0.24em] text-slate-500">{tag}</span>
              ))}
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.25rem] border border-black/10 bg-[#fafaf8] p-5">
                <p className="text-[11px] font-mono uppercase tracking-[0.24em] text-slate-500">Role</p>
                <p className="mt-2 text-sm text-[#111113]">{project.role.join(' · ')}</p>
              </div>
              <div className="rounded-[1.25rem] border border-black/10 bg-[#fafaf8] p-5">
                <p className="text-[11px] font-mono uppercase tracking-[0.24em] text-slate-500">Year</p>
                <p className="mt-2 text-sm text-[#111113]">{project.year}</p>
              </div>
            </div>
          </div>

          <aside className="space-y-5 rounded-[2rem] border border-black/10 bg-[#f7f5ef] p-8 shadow-sm">
            <div>
              <p className="text-[11px] font-mono uppercase tracking-[0.24em] text-slate-500">Status</p>
              <p className="mt-2 text-lg font-semibold text-[#111113]">{project.status}</p>
            </div>
            <div>
              <p className="text-[11px] font-mono uppercase tracking-[0.24em] text-slate-500">Problem</p>
              <p className="mt-2 text-sm leading-7 text-slate-600">{project.problem}</p>
            </div>
            {project.links?.live && (
              <a href={project.links.live} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-[#111113] hover:text-[#0d9488]">
                Open live project
                <ExternalLink className="h-4 w-4" />
              </a>
            )}
          </aside>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-black/10 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold tracking-tight text-[#111113]">What I built</h2>
            <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-600">
              {project.contribution.map((point) => (
                <li key={point} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#0d9488]" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[2rem] border border-black/10 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold tracking-tight text-[#111113]">Key decisions</h2>
            <div className="mt-5 space-y-4">
              {project.decisions.map((decision) => (
                <div key={decision.decision} className="rounded-[1.25rem] border border-black/10 bg-[#fafaf8] p-4">
                  <p className="text-sm font-semibold text-[#111113]">{decision.decision}</p>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{decision.why}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          <div className="rounded-[2rem] border border-black/10 bg-[#f7f5ef] p-8">
            <h2 className="text-xl font-semibold text-[#111113]">Approach</h2>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
              {project.walkthrough.map((step) => (
                <li key={step.title}>
                  <p className="font-semibold text-[#111113]">{step.title}</p>
                  <p className="mt-1">{step.body}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-[2rem] border border-black/10 bg-[#f7f5ef] p-8">
            <h2 className="text-xl font-semibold text-[#111113]">Technology</h2>
            <div className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
              {project.stack.map((group) => (
                <div key={group.label}>
                  <p className="font-semibold text-[#111113]">{group.label}</p>
                  <p>{group.items.join(' · ')}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[2rem] border border-black/10 bg-[#f7f5ef] p-8">
            <h2 className="text-xl font-semibold text-[#111113]">Outcome</h2>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
              {project.outcomes.map((outcome) => (
                <li key={outcome}>{outcome}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-4 rounded-[2rem] border border-black/10 bg-[#f7f5ef] p-8 shadow-sm sm:flex-row sm:items-center sm:justify-between">
          {adjacent.previous ? (
            <RouteLink to={`/projects/${adjacent.previous.slug}`} className="inline-flex items-center gap-2 text-sm font-medium text-[#111113] hover:text-[#0d9488]">
              <ArrowLeft className="h-4 w-4" />
              {adjacent.previous.title}
            </RouteLink>
          ) : (
            <div />
          )}

          {adjacent.next ? (
            <RouteLink to={`/projects/${adjacent.next.slug}`} className="inline-flex items-center gap-2 text-sm font-medium text-[#111113] hover:text-[#0d9488]">
              {adjacent.next.title}
              <ArrowUpRight className="h-4 w-4" />
            </RouteLink>
          ) : (
            <div />
          )}
        </div>
      </section>
    </PageShell>
  );
}
