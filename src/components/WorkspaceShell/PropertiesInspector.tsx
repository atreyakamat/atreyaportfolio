import React from 'react';
import { Sliders, X, Cpu, ShieldCheck } from 'lucide-react';
import { soundFx } from '../OsShell/AudioSystem';

interface PropertiesInspectorProps {
  isOpen: boolean;
  onClose: () => void;
  selectedNodeId: string;
}

export const PropertiesInspector: React.FC<PropertiesInspectorProps> = ({
  isOpen,
  onClose,
  selectedNodeId
}) => {
  if (!isOpen) return null;

  const inspectorData: Record<string, { title: string; type: string; constraints: string; metric: string; rationale: string }> = {
    'node-hero': {
      title: 'Hero Canvas Node',
      type: 'Primary Statement',
      constraints: 'Auto Layout // Hug Contents',
      metric: 'Impact First',
      rationale: 'Sub-10ms spring damped headline animation asserting system philosophy over syntax.'
    }
  };

  const nodeInfo = inspectorData[selectedNodeId] || inspectorData['node-hero'];

  return (
    <aside className="fixed top-14 right-4 z-40 w-72 software-panel rounded-lg overflow-hidden font-mono text-xs select-none shadow-2xl">
      <div className="bg-[#f0eeeb] px-3 py-2.5 border-b border-black/10 flex items-center justify-between font-sans">
        <span className="font-bold text-[#1a1a1e] text-xs flex items-center gap-1.5">
          <Sliders className="w-3.5 h-3.5 text-[#00c2ff]" /> Properties Inspector
        </span>
        <button
          onClick={() => {
            soundFx.playClick();
            onClose();
          }}
          className="text-slate-400 hover:text-[#1a1a1e] cursor-pointer"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>

      <div className="p-4 space-y-4 font-sans text-xs">
        <div>
          <h3 className="font-bold text-[#1a1a1e] text-base">{nodeInfo.title}</h3>
        </div>

        <div className="bg-[#f0eeeb] p-3 rounded border border-black/5">
          <span className="text-[#00c2ff] font-mono font-bold text-[10px] uppercase block mb-1 flex items-center gap-1">
            <Cpu className="w-3 h-3" /> PRODUCT RATIONALE:
          </span>
          <p className="text-slate-700 text-xs leading-relaxed">{nodeInfo.rationale}</p>
        </div>

        <div className="border-t border-black/10 pt-3 font-mono text-[10px] text-slate-400 flex items-center gap-1">
          <ShieldCheck className="w-3.5 h-3.5 text-[#00c2ff]" /> DESIGN TOKENS VERIFIED
        </div>
      </div>
    </aside>
  );
};
