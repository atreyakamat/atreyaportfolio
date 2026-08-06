import { useEffect } from 'react';
import { RouteLink } from '../app/router';
import { updateSeo } from '../lib/seo';
import { PageShell } from './PageShell';
import { skillGroups } from '../content/skills';
import { experience } from '../content/experience';
import { getProject } from '../content/projects';
import { InteractiveButton } from '../components/ui/InteractiveButton';
import {
  Section,
  PageTitle,
  BodyText,
  Eyebrow,
} from '../components/layout/primitives';

export function SkillsPage() {
  useEffect(() => {
    updateSeo({
      title: 'Skills',
      description: 'Capability-first skills architecture with project and experience evidence.',
      path: '/skills',
    });
  }, []);

  return (
    <PageShell>
      <article className="page-shell__content space-y-16 px-6 py-20 lg:px-8">
        <Section>
          <div className="max-w-3xl space-y-4">
            <Eyebrow>SKILLS // CAPABILITIES</Eyebrow>
            <PageTitle>Skills with evidence, not scores.</PageTitle>
            <BodyText>
              Each capability is framed by product, systems and community work. Evidence is sourced from related projects and documented experience.
            </BodyText>
          </div>
        </Section>

        <div className="space-y-10">
          {skillGroups.map((group) => (
            <section key={group.id} className="rounded-[2rem] border border-black/10 bg-white p-8 shadow-sm">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-[#0d9488]">{group.title}</p>
                  <p className="mt-3 text-base leading-7 text-slate-700">{group.summary}</p>
                </div>
                <InteractiveButton href="/projects" variant="secondary" className="whitespace-nowrap">
                  View Related Work
                </InteractiveButton>
              </div>

              <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {group.skills.map((skill) => {
                  const projectLinks = skill.projectSlugs
                    ?.map(getProject)
                    .filter((project): project is NonNullable<typeof project> => Boolean(project));
                  const experienceLinks = skill.experienceIds
                    ?.map((id) => experience.find((item) => item.id === id))
                    .filter((entry): entry is NonNullable<typeof entry> => Boolean(entry));

                  return (
                    <div key={skill.name} className="rounded-[1.75rem] border border-black/10 bg-[#f7f5ef] p-6">
                      <h3 className="text-lg font-semibold text-[#151515]">{skill.name}</h3>
                      <p className="mt-2 text-sm leading-7 text-slate-700">
                        {skill.level === 'strong' ? 'Core capability with repeated product use.' : 'Working capability currently applied to operating systems and tools.'}
                      </p>
                      <div className="mt-5 space-y-3 text-sm">
                        {projectLinks?.length ? (
                          <div>
                            <p className="text-[10px] uppercase tracking-[0.35em] text-slate-500">Projects</p>
                            <div className="mt-2 space-y-2">
                              {projectLinks.map((project) => (
                                <RouteLink
                                  key={project.slug}
                                  to={`/projects/${project.slug}`}
                                  className="block rounded-3xl border border-black/10 bg-white px-3 py-2 text-sm text-[#151515] transition hover:border-[#0d9488]"
                                >
                                  {project.title}
                                </RouteLink>
                              ))}
                            </div>
                          </div>
                        ) : null}

                        {experienceLinks?.length ? (
                          <div>
                            <p className="text-[10px] uppercase tracking-[0.35em] text-slate-500">Experience</p>
                            <div className="mt-2 space-y-2">
                              {experienceLinks.map((entry) => (
                                <div key={entry.id} className="rounded-3xl border border-black/10 bg-white px-3 py-2 text-sm text-slate-700">
                                  {entry.organization}
                                </div>
                              ))}
                            </div>
                          </div>
                        ) : null}
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          ))}
        </div>
      </article>
    </PageShell>
  );
}
