import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Terminal, Cpu, Grid, Eye } from 'lucide-react';
import { soundFx } from '../OsShell/AudioSystem';

interface TopExhibitionBarProps {
  onOpenCommandPalette: () => void;
  isCrtEnabled: boolean;
  onToggleCrt: () => void;
  isBlueprintEnabled: boolean;
  onToggleBlueprint: () => void;
}

export const TopExhibitionBar: React.FC<TopExhibitionBarProps> = ({
  onOpenCommandPalette,
  isCrtEnabled,
  onToggleCrt,
  isBlueprintEnabled,
  onToggleBlueprint
}) => {
  const [time, setTime] = useState<string>('');
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [fps, setFps] = useState<number>(60);

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' }) + ' IST');
    };
    updateClock();
    const interval = setInterval(updateClock, 1000);

    const fpsInterval = setInterval(() => {
      setFps(Math.floor(58 + Math.random() * 3));
    }, 3000);

    return () => {
      clearInterval(interval);
      clearInterval(fpsInterval);
    };
  }, []);

  const handleToggleMute = () => {
    const muted = soundFx.toggleMute();
    setIsMuted(muted);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#08080a]/90 backdrop-blur-md border-b border-white/10 text-xs font-mono select-none">
      <div className="max-w-7xl mx-auto px-4 h-10 flex items-center justify-between">
        
        {/* Left: Branding & Status */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 text-[#00f0ff]">
            <span className="w-2 h-2 rounded-full bg-[#00f0ff] animate-cyan-pulse" />
            <span className="font-bold tracking-wider text-white uppercase">ATREYA KAMAT // EXHIBITION OS v4.2.0</span>
          </div>

          <div className="hidden md:flex items-center space-x-3 text-slate-400 border-l border-white/10 pl-4">
            <span className="flex items-center gap-1">
              <Cpu className="w-3.5 h-3.5 text-[#00f0ff]" />
              <span>FPS: {fps}</span>
            </span>
          </div>
        </div>

        {/* Center: Command Palette Button */}
        <button
          onClick={() => {
            soundFx.playClick();
            onOpenCommandPalette();
          }}
          className="flex items-center space-x-2 bg-[#121318] hover:bg-[#1c1e26] border border-white/10 px-3 py-1 rounded text-slate-300 hover:text-white transition-all cursor-pointer group"
          title="Open Exhibition Terminal Shell (Cmd+K)"
        >
          <Terminal className="w-3.5 h-3.5 text-[#00f0ff] group-hover:rotate-12 transition-transform" />
          <span className="hidden sm:inline font-sans text-xs">Exhibition Terminal...</span>
          <kbd className="bg-white/10 px-1.5 py-0.5 rounded text-[10px] text-slate-400 group-hover:text-[#00f0ff]">
            ⌘K
          </kbd>
        </button>

        {/* Right: Controls & Time */}
        <div className="flex items-center space-x-3">
          {/* Blueprint Grid Toggle */}
          <button
            onClick={() => {
              soundFx.playClick();
              onToggleBlueprint();
            }}
            className={`p-1.5 rounded transition-all cursor-pointer ${
              isBlueprintEnabled
                ? 'bg-[#00f0ff]/20 text-[#00f0ff] border border-[#00f0ff]/40'
                : 'text-slate-400 hover:text-white border border-transparent'
            }`}
            title="Toggle CAD Blueprint Grid"
          >
            <Grid className="w-3.5 h-3.5" />
          </button>

          {/* CRT Overlay Toggle */}
          <button
            onClick={() => {
              soundFx.playClick();
              onToggleCrt();
            }}
            className={`p-1.5 rounded transition-all cursor-pointer ${
              isCrtEnabled
                ? 'bg-[#00f0ff]/20 text-[#00f0ff] border border-[#00f0ff]/40'
                : 'text-slate-400 hover:text-white border border-transparent'
            }`}
            title="Toggle CRT Scanline Overlay"
          >
            <Eye className="w-3.5 h-3.5" />
          </button>

          {/* Audio Synthesizer Toggle */}
          <button
            onClick={handleToggleMute}
            className={`p-1.5 rounded transition-all cursor-pointer ${
              isMuted
                ? 'text-slate-500 hover:text-slate-300'
                : 'text-[#00f0ff] bg-[#00f0ff]/10 border border-[#00f0ff]/30'
            }`}
            title={isMuted ? 'Unmute Tactile Sound FX' : 'Mute Tactile Sound FX'}
          >
            {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
          </button>

          {/* Local System Time */}
          <div className="hidden sm:block text-[#00f0ff] border-l border-white/10 pl-3 font-bold tracking-widest">
            {time}
          </div>
        </div>

      </div>
    </header>
  );
};
