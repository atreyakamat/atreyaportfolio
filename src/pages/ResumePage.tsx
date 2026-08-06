import { useEffect } from 'react';
import { updateSeo } from '../lib/seo';
import { PageShell } from './PageShell';
import { PageTitle, BodyText, Section, Eyebrow } from '../components/layout/primitives';
import { InteractiveButton } from '../components/ui/InteractiveButton';
import { profile, resumeAssetNeeds } from '../content/profile';
import { experience } from '../content/experience';
import { getProject } from '../content/projects';

export function ResumePage() {
  useEffect(() => {
    updateSeo({
      title: 'Resume',
      description: 'Formal resume access with summary, highlights, and portfolio evidence.',
      path: '/resume',
    });
  }, []);

  const resumeProjects = profile.resumeFeaturedProjects?.map(getProject).filter((project): project is NonNullable<typeof project> => Boolean(project));

  return (
    <PageShell>
      <article className="page-shell__content space-y-16 px-6 py-20 lg:px-8">
        <Section>
          <div className="max-w-3xl space-y-6">
            <Eyebrow>RESUME</Eyebrow>
            <PageTitle>Formal resume access and professional highlights.</PageTitle>
            <BodyText>
              Download the current resume PDF for verified experience, academic credentials, and outcomes from product, systems and community work.
            </BodyText>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <InteractiveButton
                href={`/${profile.resumeFileName}`}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
              >
                Download Resume
              </InteractiveButton>
              <InteractiveButton href="/contact" variant="secondary">
                Connect for opportunities
              </InteractiveButton>
            </div>
          </div>
        </Section>

        <Section>
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-6 rounded-[2rem] border border-black/10 bg-white p-8 shadow-sm">
              <Eyebrow>PROFILE</Eyebrow>
              <PageTitle>At a glance</PageTitle>
              <BodyText>
                {profile.headline} {profile.intro}
              </BodyText>
              <div className="grid gap-3 sm:grid-cols-2">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">Location</p>
                  <p className="mt-2 text-base text-slate-700">{profile.location}</p>
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">Contact</p>
                  <p className="mt-2 text-base text-slate-700">{profile.email}</p>
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">Education</p>
                  <p className="mt-2 text-base text-slate-700">{profile.credibility[1]}</p>
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">Current role</p>
                  <p className="mt-2 text-base text-slate-700">{experience.find((item) => item.current)?.role ?? 'Engineering contributor'}</p>
                </div>
              </div>
            </div>

            <div className="space-y-6 rounded-[2rem] border border-black/10 bg-[#f7f5ef] p-8 shadow-sm">
              <Eyebrow>HIGHLIGHTS</Eyebrow>
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">Resume earnings</p>
                  <p className="mt-2 text-base text-slate-700">{resumeAssetNeeds[0]}</p>
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">Current focus</p>
                  <p className="mt-2 text-base text-slate-700">Shipping product systems, automation and community programs with measurable impact.</p>
                </div>
              </div>
            </div>
          </div>
        </Section>

        <Section>
          <div className="rounded-[2rem] border border-black/10 bg-white p-8 shadow-sm">
            <Eyebrow>PORTFOLIO EVIDENCE</Eyebrow>
            <PageTitle>Projects and experience cited in the resume</PageTitle>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {resumeProjects?.map((project) => (
                <a
                  key={project.slug}
                  href={`/projects/${project.slug}`}
                  className="rounded-3xl border border-black/10 bg-[#f7f5ef] p-5 text-sm font-semibold text-[#151515] transition hover:border-[#0d9488]"
                >
                  {project.title}
                </a>
              ))}
            </div>
          </div>
        </Section>

        <Section>
          <div className="rounded-[2rem] border border-black/10 bg-[#f7f5ef] p-8 shadow-sm">
            <Eyebrow>CHECKLIST</Eyebrow>
            <PageTitle>Resume asset readiness</PageTitle>
            <div className="mt-6 grid gap-3">
              {resumeAssetNeeds.map((item) => (
                <div key={item} className="rounded-3xl border border-black/10 bg-white px-4 py-3 text-sm text-slate-700">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </Section>
      </article>
    </PageShell>
  );
}
