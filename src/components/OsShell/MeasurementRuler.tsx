import React from 'react';

export const MeasurementRuler: React.FC = () => {
  return (
    <div className="pointer-events-none select-none font-mono text-[9px] text-[#00f0ff]/40">
      {/* Top Ruler Line */}
      <div className="fixed top-10 left-0 right-0 h-4 flex items-center justify-between px-4 z-40 border-b border-white/5 bg-[#050608]/40">
        <span>+---| 000px |---+</span>
        <span className="hidden sm:inline">+---| 380px |---+</span>
        <span className="hidden md:inline">+---| 760px |---+</span>
        <span className="hidden lg:inline">+---| 1140px |---+</span>
        <span>+---| MAX |---+</span>
      </div>

      {/* Left Measurement Ticks */}
      <div className="fixed top-16 bottom-0 left-1 w-4 hidden xl:flex flex-col justify-between py-8 z-40">
        <span>+</span>
        <span>|</span>
        <span>|</span>
        <span>+</span>
        <span>|</span>
        <span>|</span>
        <span>+</span>
      </div>

      {/* Right Measurement Ticks */}
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
