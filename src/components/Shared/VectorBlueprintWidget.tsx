import React, { useState } from 'react';
import { Cpu, Database, ShieldCheck, ArrowRight, Activity } from 'lucide-react';
import { soundFx } from '../OsShell/AudioSystem';

export const VectorBlueprintWidget: React.FC = () => {
  const [activeStage, setActiveStage] = useState<number>(1);

  const stages = [
    { id: 1, name: 'Client Perimeter', detail: 'Browser / App Request (Subnet Check)', latency: '<5ms' },
    { id: 2, name: 'Edge Gateway', detail: 'CIDR Match + 90s Ephemeral Decoupling', latency: '12ms' },
    { id: 3, name: 'BullMQ Queue', detail: 'Async Job Buffer & Circuit Breaker', latency: '2ms' },
    { id: 4, name: 'PostgreSQL Cluster', detail: 'Relational Persistence & Audit Logs', latency: '1.4ms' }
  ];

  return (
    <div className="bg-[#08080a] border border-white/10 rounded-lg p-6 font-mono text-xs shadow-2xl">
      <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-6 text-[#00f0ff]">
        <span className="font-bold tracking-wider flex items-center gap-2">
          <Activity className="w-4 h-4" /> INTERACTIVE CAD VECTOR TOPOLOGY MAP
        </span>
        <span className="text-[10px] text-slate-500">HOVER / TAP STAGE TO DECONSTRUCT PIPELINE</span>
      </div>

      {/* Vector Pipeline Stage Nodes */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 mb-6">
        {stages.map((stg) => {
          const isActive = activeStage === stg.id;
          return (
            <div
              key={stg.id}
              onMouseEnter={() => {
                soundFx.playKeypress();
                setActiveStage(stg.id);
              }}
              onClick={() => {
                soundFx.playClick();
                setActiveStage(stg.id);
              }}
              className={`p-3.5 rounded border transition-all cursor-pointer ${
                isActive
                  ? 'bg-[#121318] border-[#00f0ff] text-white shadow-[0_0_15px_rgba(0,240,255,0.25)]'
                  : 'bg-[#050608] border-white/10 text-slate-400 hover:text-white'
              }`}
            >
              <div className="flex items-center justify-between text-[10px] mb-1">
                <span className={isActive ? 'text-[#00f0ff] font-bold' : 'text-slate-500'}>
                  STAGE 0{stg.id}
                </span>
                <span className="text-[9px] text-[#00f0ff]">{stg.latency}</span>
              </div>
              <div className="font-sans font-bold text-sm text-white mb-1">{stg.name}</div>
              <div className="text-[10px] text-slate-400 font-sans line-clamp-2">{stg.detail}</div>
            </div>
          );
        })}
      </div>

      {/* Deconstructed Topology Inspector */}
      <div className="bg-[#050608] p-4 rounded border border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="flex items-center space-x-3">
          {activeStage === 1 && <ShieldCheck className="w-6 h-6 text-[#00f0ff]" />}
          {activeStage === 2 && <Cpu className="w-6 h-6 text-[#00f0ff]" />}
          {activeStage === 3 && <Activity className="w-6 h-6 text-[#00f0ff]" />}
          {activeStage === 4 && <Database className="w-6 h-6 text-[#00f0ff]" />}

          <div>
            <div className="text-[#00f0ff] font-bold uppercase">
              ACTIVE INSPECTION: {stages[activeStage - 1].name}
            </div>
            <div className="text-slate-300 font-sans text-xs">
              {stages[activeStage - 1].detail}
            </div>
          </div>
        </div>

        <div className="text-[10px] bg-white/5 border border-white/10 px-3 py-1.5 rounded text-slate-400 flex items-center gap-1 font-mono">
          <span>LATENCY BUDGET: {stages[activeStage - 1].latency}</span>
          <ArrowRight className="w-3 h-3 text-[#00f0ff]" />
        </div>
      </div>
    </div>
  );
};
