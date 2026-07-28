import React from 'react';
import { LAYERS_TREE } from '../../data/workspaceData';
import type { LayerNode } from '../../data/workspaceData';
import { Layout, Sliders, FileText, CheckSquare, Activity, Send, X } from 'lucide-react';
import { soundFx } from '../OsShell/AudioSystem';

interface LayersSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  selectedNodeId: string;
  onSelectNode: (nodeId: string) => void;
}

export const LayersSidebar: React.FC<LayersSidebarProps> = ({
  isOpen,
  onClose,
  selectedNodeId,
  onSelectNode
}) => {
  if (!isOpen) return null;

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layout': return <Layout className="w-3.5 h-3.5" />;
      case 'Sliders': return <Sliders className="w-3.5 h-3.5" />;
      case 'FileText': return <FileText className="w-3.5 h-3.5" />;
      case 'CheckSquare': return <CheckSquare className="w-3.5 h-3.5" />;
      case 'Activity': return <Activity className="w-3.5 h-3.5" />;
      case 'Send': return <Send className="w-3.5 h-3.5" />;
      default: return <Layout className="w-3.5 h-3.5" />;
    }
  };

  return (
    <aside className="fixed top-14 left-4 z-40 w-64 software-panel rounded-lg overflow-hidden font-mono text-xs select-none">
      <div className="bg-[#f0eeeb] px-3 py-2.5 border-b border-black/10 flex items-center justify-between font-sans">
        <span className="font-bold text-[#1a1a1e] text-xs flex items-center gap-1.5">
          <Layout className="w-3.5 h-3.5 text-[#ff5a36]" /> Layers Tree
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

      <div className="p-2 space-y-1 max-h-[70vh] overflow-y-auto">
        {LAYERS_TREE.map((layer: LayerNode) => {
          const isSelected = layer.id === selectedNodeId;
          return (
            <div
              key={layer.id}
              onClick={() => {
                soundFx.playClick();
                onSelectNode(layer.id);
              }}
              className={`p-2 rounded flex items-center justify-between cursor-pointer transition-all ${
                isSelected
                  ? 'bg-[#1a1a1e] text-white font-bold'
                  : 'hover:bg-[#f0eeeb] text-slate-700'
              }`}
            >
              <div className="flex items-center space-x-2">
                <span className={isSelected ? 'text-[#00c2ff]' : 'text-slate-400'}>
                  {getIcon(layer.icon)}
                </span>
                <span className="font-sans text-xs">{layer.name}</span>
              </div>
            </div>
          );
        })}
      </div>
    </aside>
  );
};
