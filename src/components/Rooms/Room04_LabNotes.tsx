import React, { useState } from 'react';
import { SPECIMEN_ARCHIVE } from '../../data/exhibitionData';
import type { SpecimenSlide } from '../../data/exhibitionData';
import { MessageSquareCode, Calendar, ArrowRight } from 'lucide-react';
import { soundFx } from '../OsShell/AudioSystem';

export const Room04_LabNotes: React.FC = () => {
  const [selectedSlideId, setSelectedSlideId] = useState<string>(SPECIMEN_ARCHIVE[0].id);

  const slide: SpecimenSlide = SPECIMEN_ARCHIVE.find((s) => s.id === selectedSlideId) || SPECIMEN_ARCHIVE[0];

  return (
    <section id="room-04" className="py-24 px-4 max-w-7xl mx-auto border-b border-white/10 relative">
      {/* Room Marker */}
      <div className="flex items-center justify-between text-xs font-mono text-slate-500 pb-4 border-b border-white/10 mb-8">
        <div className="flex items-center space-x-2 text-[#00f0ff]">
          <MessageSquareCode className="w-4 h-4" />
          <span className="font-bold tracking-widest uppercase">EXHIBITION ROOM 04 // SPECIMEN ARCHIVE</span>
        </div>
        <div>ENGINEERING LAB NOTES</div>
      </div>

      <h2 className="text-4xl md:text-6xl font-bold font-display text-white tracking-tight mb-8">
        Specimen Lab Notes
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Slide Selector */}
        <div className="lg:col-span-5 space-y-3 font-mono text-xs">
          {SPECIMEN_ARCHIVE.map((item) => {
            const isSelected = item.id === selectedSlideId;
            return (
              <div
                key={item.id}
                onClick={() => {
                  soundFx.playClick();
                  setSelectedSlideId(item.id);
                }}
                className={`p-4 rounded-lg border transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-[#0a0c10] border-[#00f0ff] text-white shadow-[0_0_15px_rgba(0,240,255,0.2)]'
                    : 'bg-[#08080a] border-white/10 text-slate-400 hover:text-white'
                }`}
              >
                <div className="flex justify-between text-[10px] text-slate-500 mb-1">
                  <span>{item.number}</span>
                  <span className="text-[#00f0ff]">{item.category}</span>
                </div>
                <h3 className="font-sans font-bold text-base text-white">{item.title}</h3>
              </div>
            );
          })}
        </div>

        {/* Specimen Slide Display (Strict <=25 Words!) */}
        <div className="lg:col-span-7 bg-[#0a0c10] border border-white/15 rounded-lg p-8 font-mono text-xs shadow-2xl flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-6 text-[#00f0ff]">
              <span className="font-bold tracking-widest uppercase">{slide.number} SPECIMEN INSPECTOR</span>
              <span className="flex items-center gap-1 text-slate-400"><Calendar className="w-3 h-3" /> {slide.date}</span>
            </div>

            <h3 className="text-2xl font-sans font-bold text-white mb-4">{slide.title}</h3>

            <div className="bg-[#050608] p-6 rounded border border-white/10 mb-6">
              <span className="text-[#00f0ff] font-bold block mb-2">HYPOTHESIS STATEMENT:</span>
              <p className="font-sans text-xl text-white font-bold leading-relaxed">
                "{slide.statement}"
              </p>
            </div>
          </div>

          <div className="pt-3 border-t border-white/10 text-[10px] text-slate-500 flex justify-between">
            <span>CATEGORY: {slide.category.toUpperCase()}</span>
            <span className="text-[#00f0ff] flex items-center gap-1">INSPECTION ACTIVE <ArrowRight className="w-3 h-3" /></span>
          </div>
        </div>
      </div>
    </section>
  );
};
