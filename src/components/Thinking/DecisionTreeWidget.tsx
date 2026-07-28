import React, { useState } from 'react';
import { GitCommit, ArrowRight, CheckCircle2, AlertTriangle, Cpu } from 'lucide-react';
import { soundFx } from '../OsShell/AudioSystem';

interface DecisionNode {
  id: string;
  scenario: string;
  options: {
    title: string;
    tech: string;
    tradeoffGain: string;
    tradeoffSacrifice: string;
    verdict: 'RECOMMENDED' | 'CONDITIONAL' | 'ANTI_PATTERN';
    atreyaReasoning: string;
  }[];
}

const DECISION_SCENARIOS: DecisionNode[] = [
  {
    id: 'scen-1',
    scenario: 'Scenario 01: Low-Latency Attendance Validation & Anti-Proxy Security',
    options: [
      {
        title: 'Option A: Face Biometrics via Native App Camera',
        tech: 'Python OpenCV / Native Mobile SDK',
        tradeoffGain: 'High visual verification',
        tradeoffSacrifice: 'High friction, student privacy pushback, requires native app installation on 500+ phones',
        verdict: 'ANTI_PATTERN',
        atreyaReasoning: 'Over-engineered for classroom environment. Asking 500 students to download a custom native app causes severe friction.'
      },
      {
        title: 'Option B: Wi-Fi Subnet (CIDR) + 90s Ephemeral Hash (AttenDance model)',
        tech: 'Node.js + ip-range-check + JWT',
        tradeoffGain: '99.4% proxy elimination, zero app installation, works in web browser',
        tradeoffSacrifice: 'Requires students to connect to campus Wi-Fi (no cellular backup)',
        verdict: 'RECOMMENDED',
        atreyaReasoning: 'Mathematical invariants beat invasive biometrics. Combining network perimeter with time decay guarantees physical attendance.'
      }
    ]
  },
  {
    id: 'scen-2',
    scenario: 'Scenario 02: High-Scale E-Commerce Pricing Matrix for Custom Merchandise',
    options: [
      {
        title: 'Option A: Full Server-Side Re-render on every slider tweak',
        tech: 'Traditional SSR / Form Post',
        tradeoffGain: 'Simple backend control',
        tradeoffSacrifice: '250ms HTTP latency per finish change, high network traffic on mobile 3G',
        verdict: 'CONDITIONAL',
        atreyaReasoning: 'Slows down cart interaction and hurts user conversion.'
      },
      {
        title: 'Option B: Client-Side Zustand Matrix Reducer + Deep-Linked WhatsApp Payload',
        tech: 'React + Zustand + LocalStorage',
        tradeoffGain: 'Sub-10ms instantaneous price update, 34% higher cart conversion',
        tradeoffSacrifice: 'Manual WhatsApp order verification step required',
        verdict: 'RECOMMENDED',
        atreyaReasoning: 'In micro-commerce, sub-10ms UI responsiveness drives customer conversion far more than multi-step payment gateways.'
      }
    ]
  }
];

export const DecisionTreeWidget: React.FC = () => {
  const [activeScenarioIdx, setActiveScenarioIdx] = useState<number>(0);
  const [selectedOptionIdx, setSelectedOptionIdx] = useState<number>(1);

  const scenario = DECISION_SCENARIOS[activeScenarioIdx];
  const selectedOption = scenario.options[selectedOptionIdx];

  return (
    <div className="bg-[#0d0f15] border border-white/15 rounded-lg p-6 font-mono text-xs shadow-2xl">
      {/* Widget Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4 mb-6">
        <div className="flex items-center space-x-2 text-[#00f0ff]">
          <GitCommit className="w-4 h-4" />
          <span className="font-bold tracking-wider uppercase">INTERACTIVE ARCHITECTURE DECISION TREE</span>
        </div>
        <div className="flex gap-2">
          {DECISION_SCENARIOS.map((sc, idx) => (
            <button
              key={sc.id}
              onClick={() => {
                soundFx.playClick();
                setActiveScenarioIdx(idx);
                setSelectedOptionIdx(1);
              }}
              className={`px-3 py-1 rounded transition-all cursor-pointer ${
                activeScenarioIdx === idx
                  ? 'bg-[#00f0ff]/20 text-[#00f0ff] border border-[#00f0ff]/40'
                  : 'bg-white/5 text-slate-400 hover:text-white'
              }`}
            >
              Scenario 0{idx + 1}
            </button>
          ))}
        </div>
      </div>

      {/* Scenario Title */}
      <div className="text-sm font-sans font-bold text-white mb-6 bg-white/5 p-3 rounded border border-white/5 flex items-center gap-2">
        <Cpu className="w-4 h-4 text-[#00ff66]" />
        <span>{scenario.scenario}</span>
      </div>

      {/* Options Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {scenario.options.map((opt, idx) => (
          <div
            key={idx}
            onClick={() => {
              soundFx.playClick();
              setSelectedOptionIdx(idx);
            }}
            className={`p-4 rounded-lg border transition-all cursor-pointer ${
              selectedOptionIdx === idx
                ? 'bg-[#131722] border-[#00ff66] shadow-[0_0_15px_rgba(0,255,102,0.15)]'
                : 'bg-[#07080b] border-white/10 opacity-70 hover:opacity-100 hover:border-white/20'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="font-bold text-white font-sans">{opt.title}</span>
              <span
                className={`text-[10px] px-2 py-0.5 rounded font-bold ${
                  opt.verdict === 'RECOMMENDED'
                    ? 'bg-[#00ff66]/20 text-[#00ff66]'
                    : opt.verdict === 'ANTI_PATTERN'
                    ? 'bg-[#ff2e54]/20 text-[#ff2e54]'
                    : 'bg-[#ffb000]/20 text-[#ffb000]'
                }`}
              >
                {opt.verdict}
              </span>
            </div>
            <p className="text-[#00f0ff] text-[11px] mb-3">{opt.tech}</p>
            <div className="space-y-1 text-[11px]">
              <div className="flex items-start gap-1 text-[#00ff66]">
                <CheckCircle2 className="w-3 h-3 shrink-0 mt-0.5" />
                <span>Gain: {opt.tradeoffGain}</span>
              </div>
              <div className="flex items-start gap-1 text-[#ff2e54]">
                <AlertTriangle className="w-3 h-3 shrink-0 mt-0.5" />
                <span>Sacrifice: {opt.tradeoffSacrifice}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Atreya's Decision Rationale Box */}
      <div className="bg-[#07080b] border-l-4 border-[#00ff66] p-4 rounded-r text-xs">
        <div className="text-[#00ff66] font-bold tracking-wider uppercase mb-1 flex items-center gap-2">
          <span>ATREYA'S ARCHITECTURAL RATIONALE</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </div>
        <p className="text-slate-300 font-sans leading-relaxed text-sm">
          {selectedOption.atreyaReasoning}
        </p>
      </div>
    </div>
  );
};
