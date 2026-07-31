import { useEffect } from 'react';
import { ArrowUpRight, Globe, Mail, MapPin, Phone } from 'lucide-react';
import { profile } from '../content/profile';
import { updateSeo } from '../lib/seo';
import { PageShell } from './PageShell';

export function ContactPage() {
  useEffect(() => {
    updateSeo({
      title: 'Contact',
      description: 'Get in touch with Atreya Kamat for product work, software engineering and collaborative building.',
      path: '/contact',
    });
  }, []);
  return (
    <PageShell className="px-6">
      <section className="mx-auto flex max-w-5xl flex-col gap-8 rounded-[2rem] border border-black/10 bg-white p-8 shadow-[0_20px_70px_rgba(21,21,21,0.05)] sm:p-10">
        <div className="space-y-4">
          <span className="block text-xs font-mono font-semibold uppercase tracking-[0.35em] text-[#0d9488]">
            CONTACT // OPEN FOR PROJECTS
          </span>
          <h1 className="text-4xl font-bold tracking-tight text-[#111113] sm:text-5xl">Let’s talk about product work, systems and thoughtful collaboration.</h1>
          <p className="max-w-2xl text-base leading-8 text-slate-600">If you’re building something that needs grounded product judgment, strong engineering and careful iteration, I’d be glad to hear about it.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <a href={`mailto:${profile.email}`} className="rounded-[1.5rem] border border-black/10 bg-[#fafaf8] p-6 transition-colors hover:border-[#0d9488]/40">
            <div className="flex items-center gap-3 text-[#111113]">
              <Mail className="h-5 w-5 text-[#0d9488]" />
              <span className="font-medium">Email</span>
            </div>
            <p className="mt-4 text-sm text-slate-600">{profile.email}</p>
          </a>
          <a href={`tel:${profile.phone}`} className="rounded-[1.5rem] border border-black/10 bg-[#fafaf8] p-6 transition-colors hover:border-[#0d9488]/40">
            <div className="flex items-center gap-3 text-[#111113]">
              <Phone className="h-5 w-5 text-[#0d9488]" />
              <span className="font-medium">Phone</span>
            </div>
            <p className="mt-4 text-sm text-slate-600">{profile.phone}</p>
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="rounded-[1.5rem] border border-black/10 bg-[#fafaf8] p-6 transition-colors hover:border-[#0d9488]/40">
            <div className="flex items-center gap-3 text-[#111113]">
              <Globe className="h-5 w-5 text-[#0d9488]" />
              <span className="font-medium">LinkedIn</span>
            </div>
            <p className="mt-4 text-sm text-slate-600">Professional work and ongoing product thinking</p>
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer" className="rounded-[1.5rem] border border-black/10 bg-[#fafaf8] p-6 transition-colors hover:border-[#0d9488]/40">
            <div className="flex items-center gap-3 text-[#111113]">
              <Globe className="h-5 w-5 text-[#0d9488]" />
              <span className="font-medium">GitHub</span>
            </div>
            <p className="mt-4 text-sm text-slate-600">Code, prototypes and technical experiments</p>
          </a>
          <div className="rounded-[1.5rem] border border-black/10 bg-[#fafaf8] p-6 md:col-span-2">
            <div className="flex items-center gap-3 text-[#111113]">
              <MapPin className="h-5 w-5 text-[#0d9488]" />
              <span className="font-medium">Location</span>
            </div>
            <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-slate-600">
              <span>{profile.location}</span>
              <span className="inline-flex items-center gap-2 font-medium text-[#111113]">
                Available for remote and in-person collaboration
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
