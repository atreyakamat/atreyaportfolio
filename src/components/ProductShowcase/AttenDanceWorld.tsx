import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, AlertTriangle, CheckCircle2, Layers, Compass, Code2, Stamp } from 'lucide-react';
import { soundFx } from '../OsShell/AudioSystem';

export const AttenDanceWorld: React.FC = () => {
  const [isDigitalFlowActive, setIsDigitalFlowActive] = useState<boolean>(false);
  const [showDepth, setShowDepth] = useState<boolean>(false);
  const [stampedCount, setStampedCount] = useState<number>(0);

  const handleTransform = () => {
    soundFx.playSuccess();
    setIsDigitalFlowActive(!isDigitalFlowActive);
  };

  const handleStampSignature = () => {
    soundFx.playBeep(220, 'square', 0.08, 0.08);
    setStampedCount((prev) => prev + 1);
  };

  return (
    <section id="project-attendance" className="py-24 px-6 max-w-6xl mx-auto select-none font-sans">
      
      {/* Art-Direction Banner: Institutional Paper Register -> Zero-Trust Digital Subnet */}
      <div className="bg-gradient-to-r from-amber-100/60 via-slate-100 to-transparent p-4 rounded-t-xl border-t border-x border-black/10 font-mono text-xs flex justify-between items-center text-[#1a1a1e]">
        <span className="font-bold uppercase tracking-wider flex items-center gap-1.5 text-[#1a1a1e]">
          <ShieldCheck className="w-4 h-4 text-[#00c2ff]" /> WORLD 02 // ATTENDANCE (SECURITY INVARIANT)
        </span>
        <span className="bg-[#ffffff] px-2.5 py-1 rounded border border-black/10 font-bold shadow-xs">
          Institutional Register → Subnet Invariant
        </span>
      </div>

      <div className="bg-[#ffffff] border border-black/10 rounded-b-xl p-8 sm:p-12 shadow-2xl relative">
        
        {/* First Layer: Hook & Experience */}
        <div className="max-w-3xl mb-10">
          <span className="text-xs font-mono text-[#00c2ff] font-bold tracking-widest block uppercase mb-2">
            FIRST LAYER // EXPERIENCE & OUTCOME
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold font-display text-[#1a1a1e] tracking-tight mb-4">
            What if attendance couldn't be faked?
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Paper registers and static QR codes suffer from proxy attendance where students screenshot codes for friends outside campus. We replaced invasive camera biometrics with campus network CIDR perimeters.
          </p>
        </div>

        {/* Physical Paper Register vs Digital Subnet Canvas */}
        <div className="bg-[#f0eeeb] border border-black/10 rounded-xl p-8 mb-8 relative shadow-inner">
          
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 font-mono text-xs mb-6 border-b border-black/10 pb-4">
            <span className="font-bold text-[#1a1a1e]">
              {isDigitalFlowActive ? 'STATE 02: DIGITAL CIDR SUBNET PERIMETER' : 'STATE 01: INSTITUTIONAL PAPER REGISTER (FLAWED)'}
            </span>
            <button
              onClick={handleTransform}
              className={`px-4 py-2 rounded font-bold cursor-pointer transition-all ${
                isDigitalFlowActive
                  ? 'bg-[#1a1a1e] text-white shadow-md'
                  : 'bg-[#ff5a36] text-white shadow-lg'
              }`}
            >
              {isDigitalFlowActive ? '← View Flawed Paper Register' : 'Transform to Digital Subnet Flow →'}
            </button>
          </div>

          {!isDigitalFlowActive ? (
            /* FLAWED PHYSICAL PAPER REGISTER VIEW */
            <div className="bg-[#fffdf7] border-2 border-amber-900/20 p-8 rounded-lg font-mono text-xs text-slate-800 shadow-md relative overflow-hidden">
              <div className="border-b-2 border-amber-900/30 pb-3 mb-6 flex justify-between font-bold text-amber-950">
                <span>AGNEL INSTITUTE PHYSICAL REGISTER // DEPT OF ACCESS</span>
                <span>DATE: 2026-07-29</span>
              </div>

              <div className="space-y-4 font-sans">
                <div
                  onClick={handleStampSignature}
                  className="flex justify-between items-center p-3 bg-white rounded border border-amber-900/15 cursor-pointer hover:border-amber-900/40 transition-colors"
                >
                  <div>
                    <span className="font-bold text-[#1a1a1e]">Student #102 — Rohan Sharma</span>
                    <span className="text-slate-500 text-xs block font-mono">Ink Signature Registered @ 09:02 AM</span>
                  </div>
                  <span className="text-emerald-700 font-bold font-mono bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200">
                    PRESENT ✓
                  </span>
                </div>

                <div className="flex justify-between items-center p-3 bg-red-50 rounded border border-red-200 text-red-800">
                  <div>
                    <span className="font-bold">Student #104 — Remote Proxy Attempt</span>
                    <span className="text-red-600 text-xs block font-mono">Checked in from off-campus via WhatsApp QR image</span>
                  </div>
                  <span className="text-red-600 font-bold font-mono flex items-center gap-1 bg-red-100 px-2.5 py-1 rounded border border-red-300">
                    <AlertTriangle className="w-3.5 h-3.5" /> PROXY FRAUD
                  </span>
                </div>
              </div>

              {/* Undocumented Stamp Counter Effect */}
              {stampedCount > 0 && (
                <div className="mt-4 inline-flex items-center gap-1.5 text-[10px] font-mono text-amber-900 bg-amber-100 px-3 py-1 rounded border border-amber-300">
                  <Stamp className="w-3 h-3 text-amber-700" /> Physical Ink Stamps Applied: {stampedCount}
                </div>
              )}

              <div className="mt-6 p-4 bg-red-100/80 border border-red-300 rounded-lg text-red-900 text-xs font-sans">
                ⚠️ <strong>Flaw Identified:</strong> Static paper registers and QR images allow off-campus proxy check-ins. Facial biometrics triggered student privacy opposition.
              </div>
            </div>
          ) : (
            /* DIGITAL SUBNET FLOW VIEW */
            <div className="bg-[#1a1a1e] text-white p-8 rounded-lg font-mono text-xs shadow-2xl space-y-6">
              <div className="flex justify-between items-center border-b border-white/10 pb-3 text-[#00c2ff]">
                <span className="font-bold tracking-widest flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4" /> ZERO-TRUST SUBNET CHECK (172.16.4.0/22)
                </span>
                <span className="bg-[#00c2ff]/20 px-2.5 py-1 rounded text-[10px] text-[#00c2ff] font-bold">90s TOKEN DECAY</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center font-sans">
                <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                  <div className="text-[#00c2ff] font-bold text-lg mb-1 font-display">172.16.4.120</div>
                  <div className="text-slate-400 text-[10px] font-mono">Client IP Address</div>
                </div>

                <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                  <div className="text-[#00c2ff] font-bold text-lg mb-1 font-display">MATCHED</div>
                  <div className="text-slate-400 text-[10px] font-mono">Campus Subnet Range</div>
                </div>

                <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                  <div className="text-[#00c2ff] font-bold text-lg mb-1 font-display">&lt;45ms</div>
                  <div className="text-slate-400 text-[10px] font-mono">Validation Time</div>
                </div>
              </div>

              <div className="p-4 bg-emerald-950/40 border border-emerald-500/40 rounded-lg text-emerald-300 text-xs font-sans flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>
                  <strong>Verified Outcome: 99.4% Proxy Fraud Blocked.</strong> Zero mobile app downloads needed. Students check in securely through native phone browser.
                </span>
              </div>
            </div>
          )}

        </div>

        {/* Outcome Metric */}
        <div className="bg-[#f9f8f6] p-6 rounded-xl border border-black/10 flex flex-wrap items-center justify-between gap-4 font-mono text-xs mb-8">
          <div>
            <span className="text-slate-500 uppercase block text-[10px]">VERIFIED OUTCOME</span>
            <span className="text-3xl font-bold font-display text-[#00c2ff]">99.4% Proxy Fraud Blocked</span>
          </div>
          <div className="text-slate-600 font-sans max-w-md text-xs">
            Over 6,000+ attendance records validated with zero proxy complaints or app store maintenance overhead.
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
                <div className="flex items-center gap-2 text-[#00c2ff] font-bold">
                  <Compass className="w-4 h-4" /> SECOND LAYER // DESIGN DECISIONS & REJECTED APPROACHES
                </div>
                <p className="text-slate-700 font-sans leading-relaxed text-xs">
                  • <strong>Rejected Approach 1:</strong> Facial biometrics camera kiosks. Rejected due to student privacy concerns and slow queue throughput during class rush.<br />
                  • <strong>Rejected Approach 2:</strong> Native iOS/Android app. Students refused to install tracking software.<br />
                  • <strong>Chosen Solution:</strong> Browser-native HTTP request bound to campus CIDR subnet. Zero app installation, sub-second response.
                </p>
              </div>

              {/* THIRD LAYER: Engineering & Security Invariant */}
              <div className="bg-[#1a1a1e] text-white p-6 rounded-xl space-y-3">
                <div className="flex items-center gap-2 text-[#00c2ff] font-bold">
                  <Code2 className="w-4 h-4" /> THIRD LAYER // CIDR SUBNET VALIDATION INVARIANT
                </div>
                <pre className="text-xs text-slate-300 overflow-x-auto leading-relaxed">
{`export function validateAttendanceAttempt(payload: AttendancePayload): boolean {
  if (Date.now() > payload.sessionExpiresAt) return false;
  return ipRangeCheck(payload.clientIp, payload.allowedCidrs);
}`}
                </pre>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};

