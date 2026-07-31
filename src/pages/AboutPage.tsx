import { useEffect } from 'react';
import { profile } from '../content/profile';
import { updateSeo } from '../lib/seo';
import { PageShell } from './PageShell';
import { Backlight } from '../components/ui/Backlight';
import { InteractiveButton } from '../components/ui/InteractiveButton';
import { Mail } from 'lucide-react';

export function AboutPage() {
  useEffect(() => {
    updateSeo({
      title: 'About Atreya Kamat',
      description: 'Background, human context, engineering philosophy, and community involvement of Atreya Kamat.',
      path: '/about',
    });
  }, []);

  return (
    <PageShell className="px-6 py-12">
      <section className="mx-auto max-w-5xl space-y-16">
        {/* Editorial Header */}
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-6">
            <span className="block text-xs font-mono font-semibold uppercase tracking-[0.35em] text-[#087f78]">
              ABOUT // HUMAN CONTEXT
            </span>
            <h1 className="font-serif text-4xl font-bold tracking-tight text-[#151515] sm:text-5xl lg:text-6xl leading-[0.95]">
              Useful software, systems rigor & digital craft.
            </h1>
            <p className="text-base leading-relaxed text-slate-700">
              {profile.intro}
            </p>
            <div className="pt-2">
              <InteractiveButton href="/contact" icon={<Mail className="h-4 w-4" />}>
                Get In Touch
              </InteractiveButton>
            </div>
          </div>

          {/* Portrait Image with Backlight */}
          <Backlight color="rgba(50, 214, 197, 0.3)" intensity={35}>
            <div className="overflow-hidden rounded-3xl border border-black/10 bg-white shadow-xl">
              <img
                src={profile.candid || profile.portrait}
                alt="Atreya Kamat"
                className="aspect-[4/5] w-full object-cover object-center"
              />
              <div className="p-4 border-t border-black/5 bg-[#F7F5EF] text-xs font-mono uppercase tracking-wider text-slate-600 flex justify-between">
                <span>Atreya Kamat</span>
                <span>Goa, India</span>
              </div>
            </div>
          </Backlight>
        </div>

        {/* Credibility & Philosophy */}
        <div className="grid gap-8 md:grid-cols-2 border-t border-black/10 pt-12">
          <div className="space-y-4 rounded-3xl border border-black/10 bg-white p-8 shadow-sm">
            <h2 className="font-serif text-2xl font-bold text-[#151515]">Key Background</h2>
            <ul className="space-y-3 text-sm text-slate-700">
              {profile.credibility.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#087f78]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4 rounded-3xl border border-black/10 bg-[#F7F5EF] p-8">
            <h2 className="font-serif text-2xl font-bold text-[#151515]">Engineering Philosophy</h2>
            <p className="text-sm leading-relaxed text-slate-700">
              Software is best when it solves real operational bottlenecks calmly. I prioritize proof over claims, clean system design, and thoughtful user workflows.
            </p>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
