import { useEffect } from 'react';
import { Download, ExternalLink } from 'lucide-react';
import { profile, archiveItems } from '../content/profile';
import { updateSeo } from '../lib/seo';
import { PageShell } from './PageShell';
import { ParallaxFloating } from '../components/ui/ParallaxFloating';
import { InteractiveButton } from '../components/ui/InteractiveButton';

export function ResumePage() {
  useEffect(() => {
    updateSeo({
      title: 'Resume',
      description: 'Formal single-page PDF resume and professional summary for Atreya Kamat.',
      path: '/resume',
    });
  }, []);

  const floatingItems = archiveItems.map((item, idx) => {
    const offsets = [
      { xOffset: 12, yOffset: 18, depth: 1.2, size: 'w-48 sm:w-56' },
      { xOffset: 82, yOffset: 22, depth: 1.8, size: 'w-44 sm:w-52' },
      { xOffset: 8, yOffset: 72, depth: 1.4, size: 'w-48 sm:w-56' },
      { xOffset: 85, yOffset: 68, depth: 2.1, size: 'w-44 sm:w-52' },
      { xOffset: 50, yOffset: 12, depth: 1.0, size: 'w-40 sm:w-48' },
    ];
    const pos = offsets[idx % offsets.length];

    return {
      id: `floating-${idx}`,
      image: item.image,
      label: item.category,
      alt: item.alt,
      xOffset: pos.xOffset,
      yOffset: pos.yOffset,
      depth: pos.depth,
      size: pos.size,
    };
  });

  return (
    <PageShell className="px-6 py-8 overflow-hidden bg-[#F7F5EF]">
      <ParallaxFloating items={floatingItems}>
        {/* Central Focal Resume Card */}
        <div className="relative z-10 rounded-[2.5rem] border border-black/10 bg-white p-8 sm:p-12 shadow-[0_30px_90px_rgba(21,21,21,0.08)] space-y-8">
          <div className="space-y-3">
            <span className="block text-xs font-mono font-semibold uppercase tracking-[0.35em] text-[#087f78]">
              RESUME // FORMAL CURRICULUM VITAE
            </span>
            <h1 className="font-serif text-4xl font-bold tracking-tight text-[#151515] sm:text-5xl">
              Atreya Kamat
            </h1>
            <p className="text-base leading-relaxed text-slate-700 max-w-2xl">
              Software Engineer & Product Builder based in Goa, India. Specializing in web products, full-stack systems, automation, and AI workflows.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 border-t border-black/10 pt-8">
            <div className="space-y-3 rounded-2xl border border-black/5 bg-[#F7F5EF] p-6">
              <h3 className="font-serif text-xl font-bold text-[#151515]">Direct Resume Access</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Download or view the official single-page PDF document in browser.
              </p>
              <div className="pt-2">
                <InteractiveButton
                  href={`/${profile.resumeFileName}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  icon={<Download className="h-4 w-4" />}
                >
                  Download PDF
                </InteractiveButton>
              </div>
            </div>

            <div className="space-y-3 rounded-2xl border border-black/5 bg-[#F7F5EF] p-6">
              <h3 className="font-serif text-xl font-bold text-[#151515]">Profiles & Evidence</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Verify open-source contributions, code commits, and professional endorsements.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <InteractiveButton href={profile.github} target="_blank" rel="noopener noreferrer" variant="secondary">
                  GitHub Profile
                  <ExternalLink className="h-3.5 w-3.5" />
                </InteractiveButton>
                <InteractiveButton href={profile.linkedin} target="_blank" rel="noopener noreferrer" variant="secondary">
                  LinkedIn
                  <ExternalLink className="h-3.5 w-3.5" />
                </InteractiveButton>
              </div>
            </div>
          </div>
        </div>
      </ParallaxFloating>
    </PageShell>
  );
}
