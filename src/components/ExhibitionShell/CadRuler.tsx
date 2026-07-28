import React from 'react';

export const CadRuler: React.FC = () => {
  return (
    <div className="pointer-events-none select-none font-mono text-[9px] text-[#00f0ff]/40">
      {/* Top Architectural Ruler */}
      <div className="fixed top-10 left-0 right-0 h-4 flex items-center justify-between px-6 z-40 border-b border-white/5 bg-[#08080a]/60 backdrop-blur-xs">
        <span>+---| 000mm |---+</span>
        <span className="hidden sm:inline">+---| 380mm |---+</span>
        <span className="hidden md:inline">+---| 760mm |---+</span>
        <span className="hidden lg:inline">+---| 1140mm |---+</span>
        <span>+---| EXHIBITION_MAX |---+</span>
      </div>

      {/* Left Measurement Markers */}
      <div className="fixed top-16 bottom-0 left-1 w-4 hidden xl:flex flex-col justify-between py-8 z-40">
        <span>+</span>
        <span>|</span>
        <span>|</span>
        <span>+</span>
        <span>|</span>
        <span>|</span>
        <span>+</span>
      </div>

      {/* Right Measurement Markers */}
      <div className="fixed top-16 bottom-0 right-1 w-4 hidden xl:flex flex-col justify-between py-8 text-right z-40">
        <span>+</span>
        <span>|</span>
        <span>|</span>
        <span>+</span>
        <span>|</span>
        <span>|</span>
        <span>+</span>
      </div>
    </div>
  );
};
