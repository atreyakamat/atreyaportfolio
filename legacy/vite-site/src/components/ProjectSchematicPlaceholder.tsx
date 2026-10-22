import React from 'react';
import type { ProjectItem } from '../data/portfolioData';

interface ProjectSchematicPlaceholderProps {
  project: ProjectItem;
}

export const ProjectSchematicPlaceholder: React.FC<ProjectSchematicPlaceholderProps> = ({ project }) => {
  return (
    <div className="border border-primary/20 bg-[#ffffff] overflow-hidden mb-unit-2xl group">
      {/* Top Technical Kicker Bar */}
      <div className="px-4 py-2 bg-[#FAF9F5] border-b border-primary/10 font-label-mono text-[11px] text-on-surface-variant flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#006a61]" aria-hidden="true" />
          <span className="font-semibold text-primary uppercase">SCHEMATIC PREVIEW // SYSTEM TOPOLOGY</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-primary/70">{project.number}</span>
          <span className="text-outline-variant select-none" aria-hidden="true">/</span>
          <span className="text-[#F05A3C] font-semibold uppercase">SCREENSHOT PENDING ASSET RELEASE</span>
        </div>
      </div>

      {/* Schematic Graphic Canvas */}
      <div className="relative p-6 sm:p-10 min-h-[320px] sm:min-h-[380px] bg-[#FDFCF7] flex flex-col justify-between overflow-hidden">
        {/* Subtle Blueprint Grid Pattern */}
        <svg
          className="absolute inset-0 w-full h-full stroke-primary/[0.04] pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="schematic-grid" width="24" height="24" patternUnits="userSpaceOnUse">
              <path d="M 24 0 L 0 0 0 24" fill="none" strokeWidth="0.75" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#schematic-grid)" />
        </svg>

        {/* Blueprint Coordinate Marks */}
        <div className="relative z-10 flex items-center justify-between font-label-mono text-[10px] text-on-surface-variant/70 uppercase select-none">
          <span>SPEC // REV 01</span>
          <span>GRID // 24×24 DP</span>
          <span>SYS // {project.slug.toUpperCase()}</span>
        </div>

        {/* Core Architecture Block Diagram */}
        <div className="relative z-10 my-6 grid grid-cols-1 md:grid-cols-3 gap-3">
          {project.architecture.map((layer, idx) => {
            const [layerTitle, ...layerDesc] = layer.split(':');
            return (
              <div 
                key={idx} 
                className="p-4 bg-[#ffffff] border border-primary/15 shadow-[0_1px_3px_rgba(21,21,21,0.03)] flex flex-col justify-between"
              >
                <div>
                  <div className="font-label-mono text-[10px] text-[#F05A3C] font-bold uppercase mb-1">
                    LAYER 0{idx + 1} //
                  </div>
                  <h4 className="font-label-mono text-xs font-bold text-primary uppercase mb-1">
                    {layerTitle.trim()}
                  </h4>
                  <p className="font-body-sm text-[12px] text-on-surface-variant leading-relaxed">
                    {layerDesc.join(':').trim() || layerTitle}
                  </p>
                </div>
                <div className="mt-3 pt-2 border-t border-primary/5 font-label-mono text-[9px] text-on-surface-variant/60 uppercase">
                  VERIFIED SUBSYSTEM
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Schematic Metadata Bar */}
        <div className="relative z-10 pt-3 border-t border-primary/10 flex flex-wrap items-center justify-between gap-2 font-label-mono text-[10px] text-on-surface-variant">
          <div className="flex items-center gap-2">
            <span className="font-bold text-primary uppercase">PRIMARY RUNTIME:</span>
            <span className="text-[#006a61]">{project.stack}</span>
          </div>
          <div className="text-primary/70 uppercase">
            ARCHITECTURAL SPECIFICATION
          </div>
        </div>
      </div>

      {/* Figure Caption Footer */}
      <div className="p-unit-sm bg-[#ffffff] border-t border-primary/10 font-label-mono text-[11px] text-on-surface-variant flex items-center justify-between">
        <span>FIG 01 // ARCHITECTURAL SCHEMATIC (PRODUCTION UI SCREENSHOT PENDING ASSET RELEASE)</span>
        <span className="uppercase font-semibold text-primary">{project.title}</span>
      </div>
    </div>
  );
};

export default ProjectSchematicPlaceholder;
