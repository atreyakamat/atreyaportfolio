import { useEffect } from 'react';
import { ArrowLeft, ArrowRight, Image } from 'lucide-react';
import { RouteLink } from '../app/router';
import { getAdjacentProjects, getProject } from '../content/projects';
import { updateSeo } from '../lib/seo';
import { PageShell } from './PageShell';
import {
  Section,
  PageTitle,
  BodyText,
  Eyebrow,
  Divider,
} from '../components/layout/primitives';
import { InteractiveButton } from '../components/ui/InteractiveButton';
import { Backlight } from '../components/ui/Backlight';
import { TextHighlighter } from '../components/ui/TextHighlighter';
import type { Project } from '../content/types';

interface ProjectDetailPageProps {
  slug: string;
}

function renderMediaAsset(asset: Project['cover'] | Project['gallery'][number], index: number) {
  if (asset.type === 'image') {
    return (
      <div key={`${asset.alt}-${index}`} className="overflow-hidden rounded-3xl border border-black/10 bg-[#F7F5EF] shadow-sm">
        <img src={asset.src} alt={asset.alt} className="h-full w-full object-cover" />
      </div>
    );
  }

  if (asset.type === 'video') {
    return (
      <div key={`${asset.alt}-${index}`} className="overflow-hidden rounded-3xl border border-black/10 bg-[#000] shadow-sm">
        <video controls poster={asset.poster} className="h-full w-full object-cover">
          <source src={asset.src} type="video/mp4" />
          Sorry, your browser does not support embedded videos.
        </video>
      </div>
    );
  }

  return (
    <div key={`${asset.alt}-${index}`} className="flex min-h-[260px] items-center justify-center rounded-3xl border border-black/10 bg-[#f2efe8] p-8 text-center text-sm text-slate-600">
      {asset.alt}
    </div>
  );
}

export function ProjectDetailPage({ slug }: ProjectDetailPageProps) {
  const project = getProject(slug);

  useEffect(() => {
    if (project) {
      updateSeo({
        title: project.title,
        description: project.shortDescription,
        path: `/projects/${project.slug}`,
      });
    } else {
      updateSeo({
        title: 'Project not found',
        description: 'This project could not be found in the portfolio archive.',
        path: `/projects/${slug}`,
      });
    }
  }, [project, slug]);

  if (!project) {
    return (
      <PageShell>
        <section className="page-shell__content px-6 py-20 text-center">
          <PageTitle>Project not found</PageTitle>
          <BodyText>The project you are looking for does not exist or may have been moved. Please return to the curated archive.</BodyText>
          <RouteLink to="/projects">
            <InteractiveButton variant="secondary" className="mt-8">
              Back to Projects
            </InteractiveButton>
          </RouteLink>
        </section>
      </PageShell>
    );
  }

  const { previous, next } = getAdjacentProjects(project.slug);
  const mediaAssets = [project.cover, ...project.gallery];

  return (
    <PageShell>
      <article className="page-shell__content space-y-16 px-6 py-20 lg:px-8">
        <section className="space-y-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="space-y-3">
              <Eyebrow>PROJECT // CASE STUDY</Eyebrow>
              <PageTitle>{project.title}</PageTitle>
              <BodyText>{project.fullDescription ?? project.shortDescription}</BodyText>
            </div>

            <div className="grid gap-2 rounded-[2rem] border border-black/10 bg-[#F7F5EF] p-4 text-xs text-slate-600 sm:text-right">
              <span className="font-medium text-[#0d9488]">{project.category}</span>
              <span>{project.year}</span>
              <span>{project.role.join(' · ')}</span>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr]">
            <div className="space-y-4">
              <div className="rounded-[2rem] border border-black/10 bg-white p-5 shadow-sm">
                <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.35em] text-[#0d9488]">
                  <span>{project.status.toUpperCase()}</span>
                  <span className="h-1.5 w-1.5 rounded-full bg-[#0d9488]" aria-hidden="true" />
                  <span>{project.tags.slice(0, 4).join(' · ')}</span>
                </div>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {project.stack.map((stack) => (
                    <div key={stack.label} className="rounded-3xl bg-[#f7f5ef] p-4">
                      <p className="text-[10px] uppercase tracking-[0.35em] text-slate-500">{stack.label}</p>
                      <div className="mt-2 space-y-1 text-sm font-medium text-[#151515]">
                        {stack.items.map((item) => (
                          <p key={item}>{item}</p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <Backlight className="rounded-[2rem] p-6 bg-white">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.35em] text-slate-500">Outcomes</p>
                    <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-700">
                      {project.outcomes.map((outcome) => (
                        <li key={outcome}>{outcome}</li>
                      ))}
                    </ul>
                  </div>
                </Backlight>
                <Backlight className="rounded-[2rem] p-6 bg-white">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.35em] text-slate-500">Learnings</p>
                    <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-700">
                      {project.learnings.map((learning) => (
                        <li key={learning}>{learning}</li>
                      ))}
                    </ul>
                  </div>
                </Backlight>
              </div>
            </div>

            <div className="space-y-6">
              <div className="overflow-hidden rounded-[2rem] border border-black/10 bg-[#F7F5EF] p-4 shadow-sm">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.35em] text-slate-500">Experience snapshot</p>
                    <p className="mt-2 text-sm leading-7 text-slate-700">Clear problem framing, defined decisions, and outcome-focused direction.</p>
                  </div>
                  <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#0d9488]">
                    <Image className="h-3.5 w-3.5" />
                    Media first
                  </span>
                </div>
              </div>

              <div className="grid gap-4">
                {mediaAssets.map((asset, index) => renderMediaAsset(asset, index))}
              </div>
            </div>
          </div>
        </section>

        <Section>
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-10">
              <div className="space-y-4">
                <Eyebrow>PROBLEM</Eyebrow>
                <BodyText>{project.problem}</BodyText>
              </div>

              <div className="space-y-4">
                <Eyebrow>APPROACH</Eyebrow>
                <div className="space-y-4 text-sm leading-7 text-slate-700">
                  {project.contribution.map((item) => (
                    <p key={item}>{item}</p>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <Eyebrow>KEY DECISIONS</Eyebrow>
                <div className="space-y-4">
                  {project.decisions.map((decision) => (
                    <div key={decision.decision} className="rounded-3xl border border-black/10 bg-[#F7F5EF] p-6">
                      <p className="text-sm font-semibold text-[#151515]">{decision.decision}</p>
                      <p className="mt-2 text-sm text-slate-700">{decision.why}</p>
                      {decision.tradeoff ? <p className="mt-2 text-xs text-slate-500">Tradeoff: {decision.tradeoff}</p> : null}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-10 rounded-[2rem] border border-black/10 bg-white p-8 shadow-sm">
              <div className="space-y-4">
                <p className="text-[10px] uppercase tracking-[0.35em] text-slate-500">Project summary</p>
                <div className="rounded-3xl bg-[#F7F5EF] p-6">
                  <TextHighlighter color="rgba(50, 214, 197, 0.25)"> {project.shortDescription}</TextHighlighter>
                </div>
              </div>

              <div className="space-y-3">
                <p className="text-[10px] uppercase tracking-[0.35em] text-slate-500">Links</p>
                <div className="space-y-3">
                  {project.links?.live ? (
                    <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-[#0d9488] hover:text-[#087f78]">
                      Live product
                    </a>
                  ) : null}
                  {project.links?.github ? (
                    <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-[#0d9488] hover:text-[#087f78]">
                      Repository
                    </a>
                  ) : null}
                  {project.links?.documentation ? (
                    <a href={project.links.documentation} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-[#0d9488] hover:text-[#087f78]">
                      Documentation
                    </a>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </Section>

        <Divider className="border-black/10" />

        <div className="grid gap-4 sm:grid-cols-2">
          {previous ? (
            <RouteLink to={`/projects/${previous.slug}`} className="group rounded-[2rem] border border-black/10 bg-white p-6 transition hover:border-[#0d9488]">
              <p className="text-[10px] uppercase tracking-[0.35em] text-slate-500">Previous project</p>
              <p className="mt-3 text-lg font-semibold text-[#151515]">{previous.title}</p>
              <p className="mt-3 text-sm text-slate-600">{previous.shortDescription}</p>
              <div className="mt-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#0d9488]">
                <ArrowLeft className="h-4 w-4" />
                View case study
              </div>
            </RouteLink>
          ) : (
            <div className="rounded-[2rem] border border-black/10 bg-[#F7F5EF] p-6 text-slate-600">No previous project in archive.</div>
          )}

          {next ? (
            <RouteLink to={`/projects/${next.slug}`} className="group rounded-[2rem] border border-black/10 bg-white p-6 transition hover:border-[#0d9488]">
              <p className="text-[10px] uppercase tracking-[0.35em] text-slate-500">Next project</p>
              <p className="mt-3 text-lg font-semibold text-[#151515]">{next.title}</p>
              <p className="mt-3 text-sm text-slate-600">{next.shortDescription}</p>
              <div className="mt-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#0d9488]">
                View case study
                <ArrowRight className="h-4 w-4" />
              </div>
            </RouteLink>
          ) : (
            <div className="rounded-[2rem] border border-black/10 bg-[#F7F5EF] p-6 text-slate-600">No next project in archive.</div>
          )}
        </div>
      </article>
    </PageShell>
  );
}
