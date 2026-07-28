import React, { useState, useEffect, useRef } from 'react';
import { Search, Terminal, CornerDownLeft, X, Play, Info } from 'lucide-react';
import { soundFx } from './AudioSystem';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (sectionId: string) => void;
  onToggleCrt: () => void;
  onToggleBlueprint: () => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  onNavigate,
  onToggleCrt,
  onToggleBlueprint
}) => {
  const [query, setQuery] = useState('');
  const [logs, setLogs] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setLogs(['[SYSTEM] Command Terminal v4.2 Initialized.', 'Type a section name or command: "thinking", "impact", "matrix", "sudo hire", "help"']);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        isOpen ? onClose() : null;
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleCommand = (cmdStr: string) => {
    soundFx.playKeypress();
    const cmd = cmdStr.trim().toLowerCase();
    
    if (!cmd) return;

    if (cmd === 'thinking' || cmd === 'philosophy') {
      onNavigate('thinking');
      onClose();
    } else if (cmd === 'impact' || cmd === 'projects' || cmd === 'case studies') {
      onNavigate('impact');
      onClose();
    } else if (cmd === 'build log' || cmd === 'journal' || cmd === 'deploys') {
      onNavigate('build-log');
      onClose();
    } else if (cmd === 'mission' || cmd === 'reading' || cmd === 'roadmap') {
      onNavigate('current-mission');
      onClose();
    } else if (cmd === 'system map' || cmd === 'nodes' || cmd === 'graph') {
      onNavigate('system-map');
      onClose();
    } else if (cmd === 'playground' || cmd === 'tools' || cmd === 'demo') {
      onNavigate('playground');
      onClose();
    } else if (cmd === 'ideas' || cmd === 'thoughts') {
      onNavigate('ideas');
      onClose();
    } else if (cmd === 'infrastructure' || cmd === 'homelab' || cmd === 'stack') {
      onNavigate('infrastructure');
      onClose();
    } else if (cmd === 'beyond' || cmd === 'business' || cmd === 'leadership') {
      onNavigate('beyond');
      onClose();
    } else if (cmd === 'contact' || cmd === 'hire' || cmd === 'email') {
      onNavigate('contact');
      onClose();
    } else if (cmd === 'crt') {
      onToggleCrt();
      setLogs((prev) => [...prev, '> Executed: Toggle CRT Scanlines']);
    } else if (cmd === 'blueprint' || cmd === 'grid') {
      onToggleBlueprint();
      setLogs((prev) => [...prev, '> Executed: Toggle Blueprint Grid']);
    } else if (cmd === 'sudo hire' || cmd === 'hire atreya') {
      soundFx.playSuccess();
      setLogs((prev) => [
        ...prev,
        '> [ACCESS GRANTED] Initiating contact sequence...',
        'Email: atkamat1204@gmail.com | Mobile: +91 77440 20601',
        'Jumping to contact interface...'
      ]);
      setTimeout(() => {
        onNavigate('contact');
        onClose();
      }, 1500);
    } else if (cmd === 'matrix') {
      soundFx.playSuccess();
      setLogs((prev) => [...prev, '> Wake up, Neo... The system matrix is active. Entering Playground...']);
      setTimeout(() => {
        onNavigate('playground');
        onClose();
      }, 1000);
    } else if (cmd === 'ping') {
      soundFx.playBeep(900, 'square', 0.1, 0.08);
      setLogs((prev) => [...prev, '> PONG! Latency: 12ms. Server Region: Goa / Cloud Edge']);
    } else if (cmd === 'clear') {
      setLogs([]);
    } else if (cmd === 'help') {
      setLogs((prev) => [
        ...prev,
        'Available Commands:',
        '  - Jump to section: thinking, impact, build-log, mission, system-map, playground, ideas, infra, beyond, contact',
        '  - Display Toggles: crt, blueprint',
        '  - Utilities: ping, matrix, sudo hire, clear'
      ]);
    } else {
      setLogs((prev) => [...prev, `> Command not recognized: "${cmd}". Type "help" for command list.`]);
    }
    setQuery('');
  };

  return (
    <div className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-[#0d0f15] border border-white/15 rounded-lg shadow-2xl overflow-hidden font-mono text-xs">
        
        {/* Terminal Header */}
        <div className="bg-[#131722] px-4 py-3 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center space-x-2 text-[#00ff66]">
            <Terminal className="w-4 h-4" />
            <span className="font-bold tracking-wider">ATREYA_OS_SHELL // COMMAND_CENTER</span>
          </div>
          <button
            onClick={() => {
              soundFx.playClick();
              onClose();
            }}
            className="text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Input Bar */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleCommand(query);
          }}
          className="p-3 bg-[#07080b] border-b border-white/10 flex items-center space-x-3"
        >
          <Search className="w-4 h-4 text-[#00f0ff]" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type command or search (e.g. 'impact', 'sudo hire', 'help')..."
            className="w-full bg-transparent text-white outline-none placeholder-slate-500 font-mono text-sm"
          />
          <button type="submit" className="text-slate-400 hover:text-[#00ff66]">
            <CornerDownLeft className="w-4 h-4" />
          </button>
        </form>

        {/* Quick Nav Suggestions */}
        <div className="p-3 bg-[#0d0f15] border-b border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-2">
          {[
            { label: '01. Thinking', cmd: 'thinking' },
            { label: '02. Impact', cmd: 'impact' },
            { label: '03. Build Log', cmd: 'build log' },
            { label: '04. Mission', cmd: 'mission' },
            { label: '05. System Map', cmd: 'system map' },
            { label: '06. Playground', cmd: 'playground' },
            { label: '07. Infrastructure', cmd: 'infrastructure' },
            { label: '08. Contact', cmd: 'sudo hire' }
          ].map((item) => (
            <button
              key={item.cmd}
              onClick={() => handleCommand(item.cmd)}
              className="text-left px-2.5 py-1.5 rounded bg-white/5 hover:bg-[#00ff66]/10 hover:border-[#00ff66]/30 border border-white/5 text-slate-300 hover:text-[#00ff66] transition-all flex items-center justify-between cursor-pointer"
            >
              <span>{item.label}</span>
              <Play className="w-2.5 h-2.5 opacity-50" />
            </button>
          ))}
        </div>

        {/* Output Console Log */}
        <div className="p-4 max-h-48 overflow-y-auto space-y-1 bg-[#050608] text-slate-400 text-[11px] font-mono">
          {logs.map((log, idx) => (
            <div
              key={idx}
              className={
                log.includes('GRANTED') || log.includes('SUCCESS') || log.includes('PONG')
                  ? 'text-[#00ff66] font-bold'
                  : log.includes('Command not recognized')
                  ? 'text-[#ff2e54]'
                  : 'text-slate-300'
              }
            >
              {log}
            </div>
          ))}
        </div>

        {/* Footer info */}
        <div className="px-4 py-2 bg-[#131722] border-t border-white/10 text-[10px] text-slate-500 flex items-center justify-between">
          <span className="flex items-center gap-1">
            <Info className="w-3 h-3 text-[#00f0ff]" /> Press ESC or click outside to dismiss
          </span>
          <span>SYSTEM CHASSIS OK</span>
        </div>

      </div>
    </div>
  );
};
