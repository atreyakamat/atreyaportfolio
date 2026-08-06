import React, { useEffect, useState } from 'react';
import { Play, X } from 'lucide-react';
import { RouteLink } from '../../app/router';
import { featuredProjects } from '../../content/projects';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { Backlight } from '../ui/Backlight';
import { InteractiveButton } from '../ui/InteractiveButton';

export const StackedProjectsSection: React.FC = () => {
  const reducedMotion = useReducedMotion();
  const [activeVideoUrl, setActiveVideoUrl] = useState<string | null>(null);

  useEffect(() => {
    if (!activeVideoUrl) {
      document.body.style.overflow = '';
      return;
    }

    const handleKeydown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveVideoUrl(null);
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeydown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeydown);
    };
  }, [activeVideoUrl]);

  return (
    <section id="work" className="section-shell px-6 lg:px-8 py-20 bg-[#F7F5EF]">
      <div className="container-shell space-y-12">
        {/* Editorial Section Header */}
        <div className="max-w-3xl space-y-4">
          <span className="block text-xs font-semibold uppercase tracking-[0.35em] text-[#0d9488]">
            SELECTED PROJECTS // FEATURED WORK
          </span>
          <h2 className="font-serif text-4xl font-semibold leading-[0.95] tracking-[-0.03em] text-[#151515] sm:text-5xl lg:text-6xl">
            Products & systems built for real operations.
          </h2>
          <p className="max-w-2xl text-base leading-8 text-slate-700 sm:text-lg">
            Each project is selected for its operational problem-solving, structural clarity and production impact.
          </p>
        </div>

        {/* Desktop Stacking Cards Container */}
        <div className="relative space-y-12 lg:space-y-0">
          {featuredProjects.map((project, index) => {
            const stickyTopOffset = 110 + index * 24; // Sticky stacking offset
            const hasVideo = !!project.demo?.url || !!project.demo?.videoSrc;

            return (
              <div
                key={project.slug}
                className="lg:sticky lg:top-[110px] pb-8 lg:pb-16"
                style={{
                  top: reducedMotion ? undefined : `${stickyTopOffset}px`,
                  zIndex: index + 1,
                }}
              >
                <article className="group relative overflow-hidden rounded-[2.2rem] border border-black/10 bg-white p-6 shadow-[0_20px_70px_rgba(21,21,21,0.07)] transition-all duration-300 sm:p-8 lg:p-10">
                  <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                    {/* Media Poster Container with Poster-First Loading */}
                    <div className="relative overflow-hidden rounded-2xl border border-black/10 bg-[#F7F5EF]">
                      <Backlight color="rgba(50, 214, 197, 0.25)">
                        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-slate-900">
                          {project.cover.src ? (
                            <img
                              src={project.cover.src}
                              alt={project.cover.alt}
                              className="h-full w-full object-cover object-center transition duration-500 group-hover:scale-[1.02]"
                            />
                          ) : (
                            <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-slate-900 to-[#151515] p-6 text-center text-white">
                              <span className="text-xs font-mono uppercase tracking-widest text-[#32d6c5]">
                                {project.category}
                              </span>
                              <h4 className="mt-2 font-serif text-2xl font-bold tracking-tight text-white">
                                {project.title}
                              </h4>
                              <p className="mt-2 text-xs text-white/70 max-w-md">
                                {project.shortDescription}
                              </p>
                            </div>
                          )}

                          {/* Video Demo Launcher Badge if Demo exists */}
                          {hasVideo && (
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                setActiveVideoUrl(project.demo?.url || project.demo?.videoSrc || null);
                              }}
                              className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100 backdrop-blur-[2px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#32d6c5]"
                              aria-label={`Open demo for ${project.title}`}
                            >
                              <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#151515] shadow-lg">
                                <Play className="h-4 w-4 fill-current text-[#0d9488]" />
                                Launch Demo
                              </span>
                            </button>
                          )}
                        </div>
                      </Backlight>
                    </div>

                    {/* Content Column */}
                    <div className="flex flex-col justify-between space-y-6">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
                          <span className="text-[#0d9488]">{project.category}</span>
                          <span>{project.year}</span>
                        </div>

                        <h3 className="font-serif text-3xl font-semibold tracking-[-0.02em] text-[#151515] sm:text-4xl">
                          {project.title}
                        </h3>

                        <p className="text-base leading-7 text-slate-700">
                          {project.shortDescription}
                        </p>
                      </div>

                      {/* Action Bar */}
                      <div className="flex items-center justify-between border-t border-black/10 pt-6">
                        <div className="flex items-center gap-2">
                          <span className="inline-block h-2 w-2 rounded-full bg-[#0d9488]" />
                          <span className="text-xs font-medium uppercase tracking-wider text-slate-600">
                            {project.status}
                          </span>
                        </div>

                        <RouteLink to={`/projects/${project.slug}`}>
                          <InteractiveButton variant="primary">
                            View Project
                          </InteractiveButton>
                        </RouteLink>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            );
          })}
        </div>
      </div>

      {/* Video Modal Lightbox */}
      {activeVideoUrl && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          aria-label="Project demo viewer"
        >
          <div className="relative w-full max-w-4xl overflow-hidden rounded-2xl border border-white/20 bg-[#151515] p-2 shadow-2xl">
            <button
              type="button"
              onClick={() => setActiveVideoUrl(null)}
              className="absolute right-4 top-4 z-10 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#32d6c5]"
              aria-label="Close demo"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="aspect-video w-full overflow-hidden rounded-xl bg-black">
              <iframe
                src={activeVideoUrl}
                title="Project Demo"
                className="h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
