import { Mail, MapPin, Phone } from 'lucide-react';
import { profile } from '../content/profile';
import { PageShell } from './PageShell';

export function ContactPage() {
  return (
    <PageShell className="px-6">
      <section className="mx-auto flex max-w-5xl flex-col gap-8 rounded-3xl border border-black/10 bg-white p-8 shadow-sm sm:p-10">
        <div className="space-y-4">
          <span className="block text-xs font-mono font-semibold uppercase tracking-[0.35em] text-[#0d9488]">
            CONTACT // OPEN FOR PROJECTS
          </span>
          <h1 className="text-4xl font-bold tracking-tight text-[#111113] sm:text-5xl">Let’s talk about product work, systems and thoughtful collaboration.</h1>
          <p className="max-w-2xl text-base leading-8 text-slate-600">If you’re building something that needs good product judgment and solid engineering, I’d be glad to hear about it.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <a href={`mailto:${profile.email}`} className="rounded-2xl border border-black/10 bg-[#fafaf8] p-6 transition-colors hover:border-[#0d9488]/40">
            <div className="flex items-center gap-3 text-[#111113]">
              <Mail className="h-5 w-5 text-[#0d9488]" />
              <span className="font-medium">Email</span>
            </div>
            <p className="mt-4 text-sm text-slate-600">{profile.email}</p>
          </a>
          <a href={`tel:${profile.phone}`} className="rounded-2xl border border-black/10 bg-[#fafaf8] p-6 transition-colors hover:border-[#0d9488]/40">
            <div className="flex items-center gap-3 text-[#111113]">
              <Phone className="h-5 w-5 text-[#0d9488]" />
              <span className="font-medium">Phone</span>
            </div>
            <p className="mt-4 text-sm text-slate-600">{profile.phone}</p>
          </a>
          <div className="rounded-2xl border border-black/10 bg-[#fafaf8] p-6 md:col-span-2">
            <div className="flex items-center gap-3 text-[#111113]">
              <MapPin className="h-5 w-5 text-[#0d9488]" />
              <span className="font-medium">Location</span>
            </div>
            <p className="mt-4 text-sm text-slate-600">{profile.location}</p>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
