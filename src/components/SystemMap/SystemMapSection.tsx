import React, { useState } from 'react';
import { SYSTEM_MAP_NODES } from '../../data/portfolioData';
import { Network, Info, Zap } from 'lucide-react';
import { soundFx } from '../OsShell/AudioSystem';

export const SystemMapSection: React.FC = () => {
  const [selectedNodeId, setSelectedNodeId] = useState<string>('node-atreya');

  const selectedNode = SYSTEM_MAP_NODES.find((n) => n.id === selectedNodeId) || SYSTEM_MAP_NODES[0];

  // Coordinates layout for interactive cosmos node graph
  const nodePositions: Record<string, { x: number; y: number; color: string }> = {
    'node-atreya': { x: 300, y: 200, color: '#00ff66' },
    'node-p1': { x: 120, y: 100, color: '#00f0ff' },
    'node-p2': { x: 480, y: 90, color: '#00f0ff' },
    'node-p3': { x: 140, y: 300, color: '#00f0ff' },
    'node-p4': { x: 460, y: 310, color: '#00f0ff' },
    'node-p5': { x: 260, y: 350, color: '#00f0ff' },
    'node-m1': { x: 450, y: 200, color: '#ffb000' },
    'node-m2': { x: 550, y: 150, color: '#ffb000' },
    'node-m3': { x: 150, y: 200, color: '#ffb000' },
    'node-v1': { x: 60, y: 140, color: '#ff2e54' },
    'node-infra': { x: 320, y: 60, color: '#a855f7' }
  };

  return (
    <section id="system-map" className="py-24 px-4 max-w-7xl mx-auto border-t border-white/10 relative">
      {/* Header */}
      <div className="mb-12">
        <div className="inline-flex items-center space-x-2 bg-[#00f0ff]/10 border border-[#00f0ff]/30 px-3 py-1 rounded text-xs font-mono text-[#00f0ff] mb-4">
          <Network className="w-3.5 h-3.5" />
          <span>SECTION 05 // INTERCONNECTED COSMOS GRAPH</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold font-display text-white tracking-tight mb-4">
          System Map & Matrix
        </h2>
        <p className="text-slate-400 font-sans max-w-2xl text-base">
          Rather than browsing isolated pages, explore how Atreya's engineering projects, mental models, infrastructure, and business ventures interlock.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Interactive SVG Node Cosmos Graph */}
        <div className="lg:col-span-8 bg-[#0d0f15] border border-white/15 rounded-lg p-6 font-mono text-xs shadow-2xl relative overflow-hidden flex flex-col justify-between">
          <div className="flex items-center justify-between text-slate-400 border-b border-white/10 pb-3 mb-4">
            <span className="text-[#00ff66] font-bold">NODE GRAPH INTERACTION MATRIX</span>
            <span className="text-[10px]">CLICK NODE TO REVEAL DEPENDENCIES</span>
          </div>

          <div className="relative w-full h-[400px] bg-[#07080b] rounded border border-white/10 overflow-hidden flex items-center justify-center">
            <svg className="w-full h-full" viewBox="0 0 600 400">
              {/* Draw Connection Lines */}
              {SYSTEM_MAP_NODES.map((node) => {
                const pos1 = nodePositions[node.id];
                if (!pos1) return null;

                return node.connections.map((targetId) => {
                  const pos2 = nodePositions[targetId];
                  if (!pos2) return null;
                  const isConnectedToSelected = node.id === selectedNodeId || targetId === selectedNodeId;

                  return (
                    <line
                      key={`${node.id}-${targetId}`}
                      x1={pos1.x}
                      y1={pos1.y}
                      x2={pos2.x}
                      y2={pos2.y}
                      stroke={isConnectedToSelected ? '#00ff66' : 'rgba(255,255,255,0.1)'}
                      strokeWidth={isConnectedToSelected ? 2 : 1}
                      strokeDasharray={isConnectedToSelected ? '4 2' : 'none'}
                    />
                  );
                });
              })}

              {/* Render Node Points */}
              {SYSTEM_MAP_NODES.map((node) => {
                const pos = nodePositions[node.id];
                if (!pos) return null;
                const isSelected = node.id === selectedNodeId;

                return (
                  <g
                    key={node.id}
                    onClick={() => {
                      soundFx.playClick();
                      setSelectedNodeId(node.id);
                    }}
                    className="cursor-pointer group"
                  >
                    <circle
                      cx={pos.x}
                      cy={pos.y}
                      r={isSelected ? 14 : 9}
                      fill={pos.color}
                      opacity={isSelected ? 1 : 0.7}
                      className="transition-all duration-300 group-hover:scale-125"
                    />
                    <circle
                      cx={pos.x}
                      cy={pos.y}
                      r={isSelected ? 20 : 12}
                      fill="none"
                      stroke={pos.color}
                      strokeWidth={1}
                      opacity={isSelected ? 0.6 : 0.2}
                    />
                    <text
                      x={pos.x}
                      y={pos.y + 24}
                      textAnchor="middle"
                      fill={isSelected ? '#ffffff' : '#94a3b8'}
                      fontSize={isSelected ? '10' : '9'}
                      fontFamily="monospace"
                      fontWeight={isSelected ? 'bold' : 'normal'}
                    >
                      {node.label}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>

          <div className="mt-4 flex flex-wrap gap-4 text-[10px] text-slate-400">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-[#00ff66]" /> Core</span>
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-[#00f0ff]" /> Projects</span>
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-[#ffb000]" /> Principles</span>
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-[#ff2e54]" /> Ventures</span>
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-[#a855f7]" /> Infrastructure</span>
          </div>
        </div>

        {/* Selected Node Details Card */}
        <div className="lg:col-span-4 bg-[#0d0f15] border border-white/15 rounded-lg p-6 font-mono text-xs shadow-xl flex flex-col justify-between">
          <div>
            <div className="flex items-center space-x-2 text-[#00ff66] font-bold mb-2">
              <Zap className="w-4 h-4" />
              <span>NODE INSPECTOR // {selectedNode.type.toUpperCase()}</span>
            </div>

            <h3 className="text-2xl font-sans font-bold text-white mb-2">{selectedNode.label}</h3>
            <span className="inline-block bg-white/10 px-2 py-0.5 rounded text-[10px] text-[#00f0ff] mb-4">
              CLUSTER: {selectedNode.cluster.toUpperCase()}
            </span>

            <p className="font-sans text-slate-300 text-sm leading-relaxed mb-6">
              {selectedNode.details}
            </p>

            <div className="border-t border-white/10 pt-4">
              <span className="text-slate-400 block mb-2 font-bold text-[10px]">CONNECTED DEPENDENCIES ({selectedNode.connections.length}):</span>
              <div className="space-y-1">
                {selectedNode.connections.map((connId) => {
                  const target = SYSTEM_MAP_NODES.find((n) => n.id === connId);
                  if (!target) return null;
                  return (
                    <div
                      key={connId}
                      onClick={() => {
                        soundFx.playClick();
                        setSelectedNodeId(connId);
                      }}
                      className="p-2 rounded bg-[#07080b] hover:bg-[#131722] text-slate-300 hover:text-[#00ff66] cursor-pointer flex items-center justify-between border border-white/5"
                    >
                      <span>{target.label}</span>
                      <span className="text-[10px] text-slate-500">{target.type}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="mt-6 pt-3 border-t border-white/10 text-[10px] text-slate-500 flex items-center gap-1">
            <Info className="w-3 h-3 text-[#00f0ff]" /> Click connected nodes to navigate matrix graph
          </div>
        </div>
      </div>
    </section>
  );
};
