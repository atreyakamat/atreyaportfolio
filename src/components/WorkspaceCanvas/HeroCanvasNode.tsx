import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Sliders } from 'lucide-react';
import { soundFx } from '../OsShell/AudioSystem';

interface HeroCanvasNodeProps {
  onSelectNode: (nodeId: string) => void;
}

export const HeroCanvasNode: React.FC<HeroCanvasNodeProps> = ({ onSelectNode }) => {
  return (
    <div id="node-hero" className="w-full py-16 px-4 max-w-6xl mx-auto">
      {/* Figma Frame Container */}
      <div className="bg-[#ffffff] border border-black/10 rounded-xl p-8 sm:p-12 shadow-2xl relative overflow-hidden group hover:border-[#1a1a1e]/30 transition-all">
        {/* Frame Label Header */}
        <div className="flex items-center justify-between border-b border-black/10 pb-4 mb-8 font-mono text-xs text-slate-500">
          <div className="flex items-center space-x-2">
            <span className="w-2.5 h-2.5 rounded-sm bg-[#ff5a36]" />
            <span className="font-bold text-[#1a1a1e] font-sans text-sm">CANVAS 01 // HERO STATEMENT</span>
          </div>
          <span className="bg-[#f0eeeb] px-2.5 py-1 rounded text-[#1a1a1e] font-bold">1200 x 640 px</span>
        </div>

        {/* Hero Visual Statement */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
        >
          <div className="inline-flex items-center space-x-2 bg-[#ff5a36]/10 border border-[#ff5a36]/20 px-3 py-1 rounded-full text-xs font-mono text-[#ff5a36] mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>PRODUCT EXPERIENCE // THINKING BEFORE TECHNOLOGY</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold font-display text-[#1a1a1e] tracking-tight leading-[1.05] max-w-4xl mb-8">
            I build products that create real-world impact.
          </h1>

          <p className="text-lg md:text-xl font-sans text-slate-600 max-w-2xl leading-relaxed mb-10">
            Technology is never the hero. Craft, systems architecture, and human friction elimination are. Welcome to my living product workspace.
          </p>
        </motion.div>

        {/* Action Button Row */}
        <div className="flex flex-wrap gap-4 items-center pt-4 border-t border-black/10 font-mono text-xs">
          <button
            onClick={() => {
              soundFx.playClick();
              onSelectNode('node-projects');
            }}
            className="px-6 py-3.5 rounded bg-[#1a1a1e] text-white font-sans font-bold text-xs uppercase tracking-wider hover:bg-[#2d2d34] transition-all flex items-center space-x-2 cursor-pointer shadow-md"
          >
            <span>Open Living Design Files</span>
            <ArrowRight className="w-4 h-4 text-[#00c2ff]" />
          </button>

          <button
            onClick={() => {
              soundFx.playClick();
              onSelectNode('node-uxlab');
            }}
            className="px-6 py-3.5 rounded bg-[#f0eeeb] border border-black/10 text-[#1a1a1e] font-sans font-bold text-xs uppercase tracking-wider hover:bg-[#e2e0db] transition-all flex items-center space-x-2 cursor-pointer"
          >
            <Sliders className="w-4 h-4 text-[#ff5a36]" />
            <span>Test UX Decision Workbench</span>
          </button>
        </div>
      </div>
    </div>
  );
};
