import React from 'react';
import { INFRASTRUCTURE_NODES } from '../../data/portfolioData';
import { Server, Activity, Terminal } from 'lucide-react';

export const InfrastructureSection: React.FC = () => {
  return (
    <section id="infrastructure" className="py-24 px-4 max-w-7xl mx-auto border-t border-white/10 relative">
      {/* Header */}
      <div className="mb-12">
        <div className="inline-flex items-center space-x-2 bg-[#00ff66]/10 border border-[#00ff66]/30 px-3 py-1 rounded text-xs font-mono text-[#00ff66] mb-4">
          <Server className="w-3.5 h-3.5" />
          <span>SECTION 08 // REVEAL THE INVISIBLE INFRASTRUCTURE</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold font-display text-white tracking-tight mb-4">
          Production Infrastructure & Homelab
        </h2>
        <p className="text-slate-400 font-sans max-w-2xl text-base">
          Software is only as resilient as the infrastructure supporting it. Deconstruct the bare-metal homelab, Kubernetes mesh, Prometheus metrics, and AI stack below.
        </p>
      </div>

      {/* Live Infrastructure Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {INFRASTRUCTURE_NODES.map((node) => (
          <div
            key={node.id}
            className="bg-[#0d0f15] border border-white/15 rounded-lg p-5 font-mono text-xs shadow-xl flex flex-col justify-between hover:border-[#00ff66]/50 transition-all"
          >
            <div>
              <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-3">
                <span className="text-[#00ff66] font-bold tracking-wider">{node.layer.toUpperCase()}</span>
                <span className="bg-[#00ff66]/10 text-[#00ff66] px-2 py-0.5 rounded text-[10px] font-bold">
                  {node.status}
                </span>
              </div>

              <h3 className="text-lg font-sans font-bold text-white mb-1">{node.name}</h3>
              <p className="text-[#00f0ff] text-[11px] mb-3">{node.tech}</p>
              <p className="text-slate-300 font-sans text-xs leading-relaxed mb-4">{node.description}</p>
            </div>

            <div className="bg-[#07080b] p-2.5 rounded border border-white/10 flex items-center justify-between text-xs">
              <span className="text-slate-400 flex items-center gap-1.5">
                <Activity className="w-3.5 h-3.5 text-[#00ff66]" /> Telemetry Metric:
              </span>
              <span className="text-[#00ff66] font-bold">{node.telemetry.value}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Grafana-style Observability Live Monitor Preview */}
      <div className="bg-[#07080b] border border-white/15 rounded-lg p-6 font-mono text-xs shadow-2xl">
        <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4 text-[#00f0ff]">
          <span className="font-bold tracking-wider flex items-center gap-2">
            <Terminal className="w-4 h-4" /> GRAFANA / PROMETHEUS TIME-SERIES METRICS HUD
          </span>
          <span className="text-[10px] bg-[#00f0ff]/10 px-2 py-0.5 rounded">CLUSTER_HEALTH_100%</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-[#0d0f15] p-4 rounded border border-white/10">
            <span className="text-slate-400 block text-[10px] mb-1">PROXMOX CPU LOAD</span>
            <div className="text-2xl font-bold text-[#00ff66]">14.2%</div>
            <div className="h-1 bg-white/10 mt-2 rounded overflow-hidden">
              <div className="w-[14%] h-full bg-[#00ff66]" />
            </div>
          </div>

          <div className="bg-[#0d0f15] p-4 rounded border border-white/10">
            <span className="text-slate-400 block text-[10px] mb-1">MEMORY ALLOCATION</span>
            <div className="text-2xl font-bold text-[#00f0ff]">22.4 GB / 64 GB</div>
            <div className="h-1 bg-white/10 mt-2 rounded overflow-hidden">
              <div className="w-[35%] h-full bg-[#00f0ff]" />
            </div>
          </div>

          <div className="bg-[#0d0f15] p-4 rounded border border-white/10">
            <span className="text-slate-400 block text-[10px] mb-1">POSTGRES DB LATENCY</span>
            <div className="text-2xl font-bold text-[#ffb000]">1.4 ms</div>
            <div className="h-1 bg-white/10 mt-2 rounded overflow-hidden">
              <div className="w-[10%] h-full bg-[#ffb000]" />
            </div>
          </div>

          <div className="bg-[#0d0f15] p-4 rounded border border-white/10">
            <span className="text-slate-400 block text-[10px] mb-1">K3S ACTIVE PODS</span>
            <div className="text-2xl font-bold text-white">28 Pods</div>
            <div className="h-1 bg-white/10 mt-2 rounded overflow-hidden">
              <div className="w-[85%] h-full bg-[#00ff66]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
