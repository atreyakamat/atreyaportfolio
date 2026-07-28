import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, Layers, Compass, Code2, AlertCircle, ShieldCheck } from 'lucide-react';
import { soundFx } from '../OsShell/AudioSystem';

export const PulseWatchWorld: React.FC = () => {
  const [isSiteFailing, setIsSiteFailing] = useState<boolean>(false);
  const [showDepth, setShowDepth] = useState<boolean>(false);
  const [hoverLatency, setHoverLatency] = useState<boolean>(false);

  const handleSimulateFailure = () => {
    soundFx.playBeep(isSiteFailing ? 520 : 180, isSiteFailing ? 'sine' : 'sawtooth', 0.15, 0.08);
    setIsSiteFailing(!isSiteFailing);
  };

  const handleLatencyHover = () => {
    soundFx.playBeep( hoverLatency ? 400 : 700, 'sine', 0.03, 0.02);
    setHoverLatency(!hoverLatency);
  };

  return (
    <section id="project-pulsewatch" className="py-24 px-6 max-w-6xl mx-auto select-none font-sans">
      
      {/* Art-Direction Banner */}
      <div className="bg-gradient-to-r from-emerald-100/70 via-slate-100 to-transparent p-4 rounded-t-xl border-t border-x border-black/10 font-mono text-xs flex justify-between items-center text-[#1a1a1e]">
        <span className="font-bold uppercase tracking-wider flex items-center gap-1.5 text-emerald-600">
          <Activity className="w-4 h-4" /> WORLD 03 // PULSEWATCH (RELIABILITY TELEMETRY)
        </span>
        <span className="bg-[#ffffff] px-2.5 py-1 rounded border border-black/10 font-bold shadow-xs">
          Quiet Monitoring → Instant Interruption
        </span>
      </div>

      <div className="bg-[#ffffff] border border-black/10 rounded-b-xl p-8 sm:p-12 shadow-2xl relative">
        
        {/* First Layer: Hook & Experience */}
        <div className="max-w-3xl mb-10">
          <span className="text-xs font-mono text-emerald-600 font-bold tracking-widest block uppercase mb-2">
            FIRST LAYER // EXPERIENCE & OUTCOME
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold font-display text-[#1a1a1e] tracking-tight mb-4">
            What if a failing server alerted you before users noticed?
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Websites fail quietly until users tweet or leave. PulseWatch monitors endpoint latency every 100ms and triggers 3-strike alert worker queues immediately.
          </p>
        </div>

        {/* Interactive Environment Canvas: Calm vs Outage Interruption */}
        <div className={`p-8 rounded-xl border transition-all duration-500 font-mono text-xs mb-8 ${
          isSiteFailing
            ? 'bg-red-950 text-white border-red-500/50 shadow-[0_0_35px_rgba(239,68,68,0.25)]'
            : 'bg-[#f9f8f6] text-[#1a1a1e] border-black/10'
        }`}>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-current/10 pb-4 mb-6">
            <span className="font-bold tracking-widest flex items-center gap-2">
              <Activity className={`w-4 h-4 ${isSiteFailing ? 'text-red-400 animate-pulse' : 'text-emerald-500'}`} />
              SYSTEM TELEMETRY: {isSiteFailing ? 'CRITICAL OUTAGE DETECTED' : 'OPERATIONAL (99.98%)'}
            </span>

            <button
              onClick={handleSimulateFailure}
              className={`px-4 py-2 rounded font-bold cursor-pointer transition-all ${
                isSiteFailing
                  ? 'bg-red-500 text-white shadow-lg animate-bounce'
                  : 'bg-[#1a1a1e] text-white hover:bg-[#2d2d34]'
              }`}
            >
              {isSiteFailing ? 'Recover Environment System' : 'Simulate Silent Endpoint Failure →'}
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center font-sans">
            <div className="p-4 rounded-lg border border-current/10 bg-black/5">
              <div className="text-2xl font-bold font-display mb-1">{isSiteFailing ? '502 Bad Gateway' : '200 OK'}</div>
              <div className="text-[10px] opacity-70 font-mono">HTTP Target Status</div>
            </div>

            <div
              onMouseEnter={handleLatencyHover}
              className="p-4 rounded-lg border border-current/10 bg-black/5 cursor-pointer hover:border-current/30 transition-colors"
            >
              <div className="text-2xl font-bold font-display mb-1">{isSiteFailing ? '3,450ms' : '42ms'}</div>
              <div className="text-[10px] opacity-70 font-mono">Response Latency (Hover)</div>
            </div>

            <div className="p-4 rounded-lg border border-current/10 bg-black/5">
              <div className="text-2xl font-bold font-display mb-1">{isSiteFailing ? 'DISPATCHED' : '100ms Active'}</div>
              <div className="text-[10px] opacity-70 font-mono">BullMQ Worker Pool</div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-current/10 flex items-center gap-2 font-sans text-xs">
            {isSiteFailing ? (
              <span className="text-red-300 flex items-center gap-1.5 font-mono">
                <AlertCircle className="w-4 h-4 text-red-400" />
                Alert dispatched via Telegram & Webhook in 110ms.
              </span>
            ) : (
              <span className="text-emerald-700 flex items-center gap-1.5 font-mono">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                Quiet state. Telemetry active. Zero false-alarm noise.
              </span>
            )}
          </div>
        </div>

        {/* Outcome Metric */}
        <div className="bg-[#f9f8f6] p-6 rounded-xl border border-black/10 flex flex-wrap items-center justify-between gap-4 font-mono text-xs mb-8">
          <div>
            <span className="text-slate-500 uppercase block text-[10px]">POLLING PRECISION</span>
            <span className="text-3xl font-bold font-display text-emerald-600">100ms Worker Heartbeat</span>
          </div>
          <div className="text-slate-600 font-sans max-w-md text-xs">
            BullMQ Redis queues processing keep-alive sockets for zero-latency degradation alerts.
          </div>
        </div>

        {/* Progressive Disclosure Toggle */}
        <button
          onClick={() => {
            soundFx.playClick();
            setShowDepth(!showDepth);
          }}
          className="text-xs font-mono text-slate-500 hover:text-[#1a1a1e] transition-colors flex items-center gap-1.5 cursor-pointer"
        >
          <Layers className="w-3.5 h-3.5 text-[#00c2ff]" />
          <span>{showDepth ? 'Hide Progressive Disclosure Layers' : 'Inspect Design & Technical Layers'}</span>
        </button>

        {/* Progressive Disclosure Layers */}
        <AnimatePresence>
          {showDepth && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="mt-4 space-y-4 font-mono text-xs"
            >
              {/* SECOND LAYER: Design Decisions */}
              <div className="bg-[#f9f8f6] border border-black/10 p-6 rounded-xl space-y-2">
                <div className="flex items-center gap-2 text-emerald-600 font-bold">
                  <Compass className="w-4 h-4" /> SECOND LAYER // DESIGN DECISIONS & REJECTED APPROACHES
                </div>
                <p className="text-slate-700 font-sans leading-relaxed text-xs">
                  • <strong>Rejected Approach:</strong> Persistent visual dashboards with flashing charts. Engineers suffered alert fatigue.<br />
                  • <strong>Chosen Design:</strong> Quiet-until-interrupted interface. Clean, silent green state that turns high-contrast red only when actionable.
                </p>
              </div>

              {/* THIRD LAYER: Engineering & Implementation */}
              <div className="bg-[#1a1a1e] text-white p-6 rounded-xl space-y-3">
                <div className="flex items-center gap-2 text-[#00c2ff] font-bold">
                  <Code2 className="w-4 h-4" /> THIRD LAYER // BULLMQ REDIS TELEMETRY WORKER POOL
                </div>
                <pre className="text-xs text-slate-300 overflow-x-auto leading-relaxed">
{`const worker = new Worker('telemetry', async (job) => {
  const ping = await fetchEndpoint(job.data.url, { timeout: 100 });
  if (ping.status !== 200) await triggerAlertQueue(job.data);
}, { connection: redisConfig });`}
                </pre>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};

