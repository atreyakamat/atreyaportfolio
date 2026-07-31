import { useEffect } from 'react';
import { Mail, MapPin, Phone, ExternalLink } from 'lucide-react';
import { profile } from '../content/profile';
import { updateSeo } from '../lib/seo';
import { PageShell } from './PageShell';
import { TextAlongPath } from '../components/ui/TextAlongPath';
import { InteractiveButton } from '../components/ui/InteractiveButton';
import { GithubIcon, LinkedinIcon } from '../components/ui/Icons';

export function ContactPage() {
  useEffect(() => {
    updateSeo({
      title: 'Contact',
      description: 'Get in touch with Atreya Kamat for product work, software engineering and collaborative building.',
      path: '/contact',
    });
  }, []);

  return (
    <PageShell className="px-6 py-8">
      <section className="mx-auto max-w-5xl space-y-12">
        {/* Expressive Fancy Components Text Along Path Header */}
        <div className="space-y-4 text-center">
          <span className="block text-xs font-mono font-semibold uppercase tracking-[0.35em] text-[#087f78]">
            GET IN TOUCH // OPEN FOR PROJECTS
          </span>
          <TextAlongPath text="LET'S BUILD SOMETHING USEFUL TOGETHER • GET IN TOUCH • ATREYA KAMAT • " />
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-slate-700">
            Have a product, project, or engineering role in mind? Reach out directly via email, phone, or connect on LinkedIn and GitHub.
          </p>
        </div>

        {/* Clear Actionable Contact Cards */}
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-black/10 bg-white p-8 shadow-sm space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#32d6c5]/20 text-[#087f78]">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-[#151515]">Direct Email</h3>
                <p className="text-xs text-slate-500 font-mono">{profile.email}</p>
              </div>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Best route for project inquiries, engineering opportunities, or detailed collaboration proposals.
            </p>
            <div className="pt-2">
              <InteractiveButton href={`mailto:${profile.email}`} variant="primary">
                Send Email
              </InteractiveButton>
            </div>
          </div>

          <div className="rounded-3xl border border-black/10 bg-white p-8 shadow-sm space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#32d6c5]/20 text-[#087f78]">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-[#151515]">Phone & WhatsApp</h3>
                <p className="text-xs text-slate-500 font-mono">{profile.phone}</p>
              </div>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Available for direct calls and WhatsApp messaging for urgent product discussions.
            </p>
            <div className="pt-2">
              <InteractiveButton href={`tel:${profile.phone}`} variant="secondary">
                Call / Message
              </InteractiveButton>
            </div>
          </div>

          <div className="rounded-3xl border border-black/10 bg-white p-8 shadow-sm space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-[#151515]">
                <LinkedinIcon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-[#151515]">LinkedIn</h3>
                <p className="text-xs text-slate-500">atreyakamat</p>
              </div>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Professional history, endorsements, and network connections.
            </p>
            <div className="pt-2">
              <InteractiveButton href={profile.linkedin} target="_blank" rel="noopener noreferrer" variant="secondary">
                Connect on LinkedIn
                <ExternalLink className="h-3.5 w-3.5" />
              </InteractiveButton>
            </div>
          </div>

          <div className="rounded-3xl border border-black/10 bg-white p-8 shadow-sm space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-[#151515]">
                <GithubIcon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-[#151515]">GitHub</h3>
                <p className="text-xs text-slate-500">atreyakamat</p>
              </div>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Inspect open-source repositories, activity logs, and technical codebases.
            </p>
            <div className="pt-2">
              <InteractiveButton href={profile.github} target="_blank" rel="noopener noreferrer" variant="secondary">
                View Repositories
                <ExternalLink className="h-3.5 w-3.5" />
              </InteractiveButton>
            </div>
          </div>
        </div>

        {/* Location Banner */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl border border-black/10 bg-[#F7F5EF] p-6">
          <div className="flex items-center gap-3">
            <MapPin className="h-5 w-5 text-[#087f78]" />
            <span className="text-sm font-semibold text-[#151515]">Based in {profile.location}</span>
          </div>
          <span className="text-xs font-mono text-slate-600">Available for remote & hybrid roles worldwide</span>
        </div>
      </section>
    </PageShell>
  );
}
