import { useEffect } from 'react';
import { updateSeo } from '../lib/seo';
import { PageShell } from './PageShell';
import { RouteLink } from '../app/router';
import { experience } from '../content/experience';
import { getProject } from '../content/projects';
import { InteractiveButton } from '../components/ui/InteractiveButton';
import {
  Section,
  PageTitle,
  BodyText,
  Eyebrow,
  Divider,
} from '../components/layout/primitives';

export function ExperiencePage() {
  useEffect(() => {
    updateSeo({
      title: 'Experience',
      description: 'Professional experience timeline, related project work, and product leadership highlights.',
      path: '/experience',
    });
  }, []);

  return (
    <PageShell>
      <article className="page-shell__content space-y-16 px-6 py-20 lg:px-8">
        <Section>
          <div className="max-w-3xl space-y-4">
            <Eyebrow>EXPERIENCE // CAREER TIMELINE</Eyebrow>
            <PageTitle>Professional work, leadership and product craft.</PageTitle>
            <BodyText>
              Canonical experience entries grounded in functional outcomes, team context, and related project evidence.
            </BodyText>
          </div>

          <div className="mt-12 space-y-10">
            {experience.map((entry) => {
              const relatedProjects = entry.relatedProjectSlugs
                ?.map((slug) => getProject(slug))
                .filter((project): project is NonNullable<typeof project> => Boolean(project));

              return (
                <div key={entry.id} className="grid gap-6 rounded-[2rem] border border-black/10 bg-white p-8 shadow-sm lg:grid-cols-[0.95fr_0.45fr]">
                  <div className="space-y-4">
                    <div className="flex items-center flex-wrap gap-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-[#0d9488]">
                      <span>{entry.organization}</span>
                      <span className="text-slate-400">•</span>
                      <span>{entry.period}</span>
                      {entry.type ? <span className="text-slate-400">•</span> : null}
                      {entry.type ? <span>{entry.type}</span> : null}
                    </div>

                    <h2 className="text-2xl font-serif font-semibold tracking-[-0.03em] text-[#151515] sm:text-3xl">
                      {entry.role}
                    </h2>

                    <p className="max-w-2xl text-sm leading-7 text-slate-700">{entry.summary}</p>

                    <div className="grid gap-3 sm:grid-cols-2">
                      {entry.contributions.map((contribution) => (
                        <div key={contribution} className="rounded-3xl border border-black/10 bg-[#F7F5EF] p-5 text-sm text-slate-700">
                          {contribution}
                        </div>
                      ))}
                    </div>
                  </div>

                  <aside className="space-y-6 rounded-[1.75rem] border border-black/10 bg-[#f7f5ef] p-6">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.35em] text-slate-500">Location</p>
                      <p className="mt-3 text-sm font-semibold text-[#151515]">{entry.location}</p>
                    </div>

                    {relatedProjects?.length ? (
                      <div>
                        <p className="text-[10px] uppercase tracking-[0.35em] text-slate-500">Related projects</p>
                        <div className="mt-4 space-y-3">
                          {relatedProjects.map((project) => (
                            <RouteLink
                              key={project.slug}
                              to={`/projects/${project.slug}`}
                              className="block rounded-3xl border border-black/10 bg-white px-4 py-3 text-sm font-semibold text-[#151515] transition hover:border-[#0d9488]"
                            >
                              {project.title}
                            </RouteLink>
                          ))}
                        </div>
                      </div>
                    ) : null}
                  </aside>
                </div>
              );
            })}
          </div>
        </Section>

        <Divider className="border-black/10" />

        <Section>
          <div className="grid gap-6 lg:grid-cols-[1fr_0.75fr]">
            <div className="space-y-4">
              <Eyebrow>RESUME</Eyebrow>
              <PageTitle>Full resume access</PageTitle>
              <BodyText>
                Download the complete resume for detailed accomplishments, academic summary and product experience.
              </BodyText>
            </div>
            <div className="flex items-center justify-start lg:justify-end">
              <InteractiveButton href="/Atreya_Kamat_Resume.pdf" target="_blank" rel="noopener noreferrer" variant="primary">
                View Resume
              </InteractiveButton>
            </div>
          </div>
        </Section>
      </article>
    </PageShell>
  );
}
