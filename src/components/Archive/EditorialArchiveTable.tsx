import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ARCHIVE_TABLE_ARTIFACTS } from '../../data/productExperienceData';
import type { ArchiveArtifact } from '../../data/productExperienceData';
import { RotateCw, Compass } from 'lucide-react';
import { soundFx } from '../OsShell/AudioSystem';

export const EditorialArchiveTable: React.FC = () => {
  const [flippedIds, setFlippedIds] = useState<Record<string, boolean>>({});

  const handleFlip = (id: string) => {
    soundFx.playClick();
    setFlippedIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section id="section-archive" className="py-28 px-6 max-w-7xl mx-auto select-none font-sans">
      
      {/* Header */}
      <div className="max-w-3xl mb-12">
        <span className="text-xs font-mono text-[#ff5a36] font-bold tracking-widest block uppercase mb-2">
          EDITORIAL WORKBENCH
        </span>
        <h2 className="text-4xl sm:text-6xl font-bold font-display text-[#1a1a1e] tracking-tight mb-4">
          Objects on the Editorial Table
        </h2>
        <p className="text-slate-600 text-sm font-sans leading-relaxed">
          Artifacts, physical sketches, photos, custom stickers, and community leadership notes. Tap any item to inspect the story behind it.
        </p>
      </div>

      {/* Editorial Workbench Canvas */}
      <div className="bg-[#f0eeeb] border border-black/10 rounded-2xl p-8 sm:p-12 shadow-inner min-h-[500px] relative overflow-hidden">
        <div className="text-[10px] font-mono text-slate-400 absolute top-4 left-6 uppercase tracking-widest flex items-center gap-1.5">
          <Compass className="w-3.5 h-3.5 text-[#ff5a36]" /> WORKBENCH ARTIFACTS // TAP OBJECT TO FLIP & INSPECT STORY
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-8">
          {ARCHIVE_TABLE_ARTIFACTS.map((art: ArchiveArtifact) => {
            const isFlipped = flippedIds[art.id];
            return (
              <motion.div
                key={art.id}
                onClick={() => handleFlip(art.id)}
                whileHover={{ scale: 1.04, zIndex: 10 }}
                transition={{ type: 'spring', stiffness: 280, damping: 22 }}
                style={{ transform: `rotate(${art.rotation}deg)` }}
                className="bg-[#ffffff] border border-black/10 p-6 rounded-xl shadow-xl cursor-pointer relative min-h-[240px] flex flex-col justify-between"
              >
                <AnimatePresence mode="wait">
                  {!isFlipped ? (
                    /* FRONT VIEW */
                    <motion.div
                      key="front"
                      initial={{ opacity: 0, rotateY: -90 }}
                      animate={{ opacity: 1, rotateY: 0 }}
                      exit={{ opacity: 0, rotateY: 90 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="flex justify-between items-center text-xs font-mono text-slate-400 mb-3">
                        <span className="uppercase font-bold text-[#ff5a36]">{art.type}</span>
                        <RotateCw className="w-3.5 h-3.5 hover:rotate-180 transition-transform duration-300" />
                      </div>

                      <h3 className="font-bold text-[#1a1a1e] text-lg font-display mb-2">{art.title}</h3>
                      <p className="text-slate-600 text-xs font-mono bg-[#f9f8f6] p-3 rounded border border-black/5 leading-relaxed">
                        {art.imageOrNote}
                      </p>
                    </motion.div>
                  ) : (
                    /* BACK VIEW */
                    <motion.div
                      key="back"
                      initial={{ opacity: 0, rotateY: 90 }}
                      animate={{ opacity: 1, rotateY: 0 }}
                      exit={{ opacity: 0, rotateY: -90 }}
                      transition={{ duration: 0.25 }}
                      className="bg-[#1a1a1e] text-white p-4 rounded-lg font-mono text-xs h-full flex flex-col justify-between"
                    >
                      <div>
                        <span className="text-[#00c2ff] font-bold block mb-2 uppercase text-[10px]">// STORY BEHIND ARTIFACT:</span>
                        <p className="text-slate-200 text-xs leading-relaxed font-sans">{art.backText}</p>
                      </div>
                      <span className="text-[9px] text-slate-400 font-mono mt-4 block">Tap to flip back</span>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="text-[9px] font-mono text-slate-400 border-t border-black/5 pt-2 mt-4 flex justify-between">
                  <span>ATREYA ARTIFACT #{art.id.replace('art-', '')}</span>
                  <span>TAP TO FLIP ↻</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

    </section>
  );
};

