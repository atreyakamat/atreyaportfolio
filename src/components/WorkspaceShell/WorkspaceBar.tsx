import React, { useState, useEffect } from 'react';
import { MousePointer, Hand, ZoomIn, Sidebar, PanelRight, Volume2, VolumeX, Terminal } from 'lucide-react';
import { soundFx } from '../OsShell/AudioSystem';

interface WorkspaceBarProps {
  activeTool: 'select' | 'hand';
  onSelectTool: (tool: 'select' | 'hand') => void;
  isLayersOpen: boolean;
  onToggleLayers: () => void;
  isInspectorOpen: boolean;
  onToggleInspector: () => void;
  onOpenCommandPalette: () => void;
  selectedNodeName: string;
}

export const WorkspaceBar: React.FC<WorkspaceBarProps> = ({
  activeTool,
  onSelectTool,
  isLayersOpen,
  onToggleLayers,
  isInspectorOpen,
  onToggleInspector,
  onOpenCommandPalette,
  selectedNodeName
}) => {
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [zoomLevel] = useState<number>(100);
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-US', { hour12: true, hour: '2-digit', minute: '2-digit' }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleToggleMute = () => {
    const muted = soundFx.toggleMute();
    setIsMuted(muted);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#ffffff]/90 backdrop-blur-md border-b border-black/10 text-xs font-mono text-[#1a1a1e] select-none shadow-xs">
      <div className="max-w-7xl mx-auto px-4 h-11 flex items-center justify-between">
        
        {/* Left: Product Title & Active Selection */}
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-2">
            <span className="w-2.5 h-2.5 rounded-sm bg-[#1a1a1e]" />
            <span className="font-bold tracking-tight text-[#1a1a1e] font-sans text-sm">
              Atreya // Workspace Studio
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-2 border-l border-black/10 pl-3 text-slate-500">
            <span className="text-[10px] bg-[#f0eeeb] px-2 py-0.5 rounded text-[#1a1a1e] font-bold">
              {selectedNodeName || 'Hero Canvas'}
            </span>
          </div>
        </div>

        {/* Center: Figma-style Interactive Tool Selector */}
        <div className="flex items-center space-x-1 bg-[#f0eeeb] p-1 rounded-md border border-black/5">
          <button
            onClick={() => {
              soundFx.playClick();
              onSelectTool('select');
            }}
            className={`p-1.5 rounded transition-all cursor-pointer flex items-center gap-1 ${
              activeTool === 'select'
                ? 'bg-[#ffffff] text-[#1a1a1e] shadow-xs font-bold'
                : 'text-slate-500 hover:text-[#1a1a1e]'
            }`}
            title="Move / Select Tool (V)"
          >
            <MousePointer className="w-3.5 h-3.5" />
            <span className="hidden sm:inline text-[10px]">Select (V)</span>
          </button>

          <button
            onClick={() => {
              soundFx.playClick();
              onSelectTool('hand');
            }}
            className={`p-1.5 rounded transition-all cursor-pointer flex items-center gap-1 ${
              activeTool === 'hand'
                ? 'bg-[#ffffff] text-[#1a1a1e] shadow-xs font-bold'
                : 'text-slate-500 hover:text-[#1a1a1e]'
            }`}
            title="Pan / Hand Tool (H)"
          >
            <Hand className="w-3.5 h-3.5" />
            <span className="hidden sm:inline text-[10px]">Hand (H)</span>
          </button>

          <div className="w-[1px] h-4 bg-black/10 mx-1" />

          {/* Command Palette Launcher */}
          <button
            onClick={() => {
              soundFx.playClick();
              onOpenCommandPalette();
            }}
            className="p-1.5 text-slate-600 hover:text-[#1a1a1e] flex items-center gap-1.5 cursor-pointer font-sans"
            title="Command Center (Cmd+K)"
          >
            <Terminal className="w-3.5 h-3.5 text-[#ff5a36]" />
            <kbd className="bg-black/5 px-1.5 py-0.5 rounded text-[10px]">⌘K</kbd>
          </button>
        </div>

        {/* Right: Panel Toggles & System Time */}
        <div className="flex items-center space-x-2">
          {/* Zoom Level Indicator */}
          <div className="hidden lg:flex items-center space-x-1 text-slate-500 px-2 py-1 rounded bg-[#f0eeeb]">
            <ZoomIn className="w-3 h-3 text-[#1a1a1e]" />
            <span className="text-[10px] font-mono">{zoomLevel}%</span>
          </div>

          {/* Toggle Layers Sidebar */}
          <button
            onClick={() => {
              soundFx.playClick();
              onToggleLayers();
            }}
            className={`p-1.5 rounded transition-all cursor-pointer ${
              isLayersOpen
                ? 'bg-[#1a1a1e] text-white'
                : 'text-slate-500 hover:text-[#1a1a1e] bg-[#f0eeeb]'
            }`}
            title="Toggle Left Layers Panel"
          >
            <Sidebar className="w-3.5 h-3.5" />
          </button>

          {/* Toggle Properties Inspector */}
          <button
            onClick={() => {
              soundFx.playClick();
              onToggleInspector();
            }}
            className={`p-1.5 rounded transition-all cursor-pointer ${
              isInspectorOpen
                ? 'bg-[#1a1a1e] text-white'
                : 'text-slate-500 hover:text-[#1a1a1e] bg-[#f0eeeb]'
            }`}
            title="Toggle Right Inspector Panel"
          >
            <PanelRight className="w-3.5 h-3.5" />
          </button>

          {/* Audio Synthesizer Mute Toggle */}
          <button
            onClick={handleToggleMute}
            className={`p-1.5 rounded transition-all cursor-pointer ${
              isMuted
                ? 'text-slate-400 hover:text-slate-600 bg-[#f0eeeb]'
                : 'text-[#ff5a36] bg-[#ff5a36]/10 border border-[#ff5a36]/20'
            }`}
            title={isMuted ? 'Unmute Sound Engine' : 'Mute Sound Engine'}
          >
            {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
          </button>

          {/* System Time */}
          <div className="hidden sm:block text-slate-600 border-l border-black/10 pl-3 font-mono font-bold text-[11px]">
            {time}
          </div>
        </div>

      </div>
    </header>
  );
};
