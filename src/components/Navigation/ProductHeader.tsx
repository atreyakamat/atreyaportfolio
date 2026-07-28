import React, { useState } from 'react';
import { Volume2, VolumeX, ArrowUpRight } from 'lucide-react';
import { soundFx } from '../OsShell/AudioSystem';

export const ProductHeader: React.FC = () => {
  const [isMuted, setIsMuted] = useState<boolean>(false);

  const handleToggleMute = () => {
    const muted = soundFx.toggleMute();
    setIsMuted(muted);
  };

  const handleScrollToContact = () => {
    soundFx.playClick();
    const element = document.getElementById('section-contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#f9f8f6]/80 backdrop-blur-md text-[#1a1a1e] border-b border-black/5 font-sans select-none">
      <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
        
        {/* Brand Title */}
        <a href="#" className="font-bold text-sm tracking-tight hover:opacity-80 transition-opacity">
          ATREYA KAMAT
        </a>

        {/* Right Action Links */}
        <div className="flex items-center space-x-6 text-xs font-mono">
          <button
            onClick={handleToggleMute}
            className={`p-1.5 rounded transition-all cursor-pointer flex items-center gap-1.5 ${
              isMuted
                ? 'text-slate-400 hover:text-slate-600'
                : 'text-[#ff5a36] bg-[#ff5a36]/10 px-2 py-1'
            }`}
            title={isMuted ? 'Unmute Sound' : 'Mute Sound'}
          >
            {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
            <span className="hidden sm:inline text-[10px] font-sans font-bold">{isMuted ? 'SOUND OFF' : 'SOUND ON'}</span>
          </button>

          <button
            onClick={handleScrollToContact}
            className="flex items-center space-x-1 text-[#1a1a1e] font-bold hover:text-[#ff5a36] transition-colors cursor-pointer"
          >
            <span>Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </header>
  );
};
