import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sliders, Radio, Layers, Compass, Code2, Zap } from 'lucide-react';
import { soundFx } from '../OsShell/AudioSystem';

export const EchoBridgeWorld: React.FC = () => {
  const [knobVolume, setKnobVolume] = useState<number>(75);
  const [showDepth, setShowDepth] = useState<boolean>(false);
  const [isOverdrive, setIsOverdrive] = useState<boolean>(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // 60 FPS Waveform Oscilloscope Animation with Overdrive distortion physics
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let phase = 0;

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.beginPath();
      ctx.lineWidth = isOverdrive ? 3 : 2;
      ctx.strokeStyle = isOverdrive ? '#ff5a36' : '#00c2ff';

      const width = canvas.width;
      const height = canvas.height;
      const amp = (knobVolume / 100) * 32;

      for (let x = 0; x < width; x++) {
        let y = height / 2 + Math.sin(x * 0.05 + phase) * amp * Math.cos(x * 0.02);
        if (isOverdrive) {
          // Hard clipping tube overdrive distortion math
          y = Math.max(height / 2 - 24, Math.min(height / 2 + 24, y));
        }
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }

      ctx.stroke();
      phase += isOverdrive ? 0.14 : 0.08;
      animationFrameId = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animationFrameId);
  }, [knobVolume, isOverdrive]);

  const handleKnobChange = (val: number) => {
    setKnobVolume(val);
    if (val > 90 && !isOverdrive) {
      soundFx.playBeep(880, 'sawtooth', 0.12, 0.08);
      setIsOverdrive(true);
    } else if (val <= 90 && isOverdrive) {
      setIsOverdrive(false);
    } else {
      soundFx.playKeypress();
    }
  };

  return (
    <section id="project-echobridge" className="py-24 px-6 max-w-6xl mx-auto select-none font-sans">
      
      {/* Art-Direction Banner: Industrial Aluminium Audio Mixer */}
      <div className="bg-gradient-to-r from-[#00c2ff]/15 via-slate-200 to-transparent p-4 rounded-t-xl border-t border-x border-black/10 font-mono text-xs flex justify-between items-center text-[#1a1a1e]">
        <span className="font-bold uppercase tracking-wider flex items-center gap-1.5 text-[#00c2ff]">
          <Radio className="w-4 h-4" /> WORLD 04 // ECHOBRIDGE (REAL-TIME AUDIO DSP)
        </span>
        <span className="bg-[#ffffff] px-2.5 py-1 rounded border border-black/10 font-bold shadow-xs">
          Aluminium Controls & 60 FPS Oscilloscope
        </span>
      </div>

      <div className="bg-[#ffffff] border border-black/10 rounded-b-xl p-8 sm:p-12 shadow-2xl relative">
        
        {/* First Layer: Hook & Experience */}
        <div className="max-w-3xl mb-10">
          <span className="text-xs font-mono text-[#00c2ff] font-bold tracking-widest block uppercase mb-2">
            FIRST LAYER // EXPERIENCE & OUTCOME
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold font-display text-[#1a1a1e] tracking-tight mb-4">
            One computer. Two people. Two completely different listening experiences.
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Windows lacks native low-latency routing between audio devices. EchoBridge routes audio loops directly at the WASAPI driver layer under sub-12ms roundtrip latency.
          </p>
        </div>

        {/* Physical Audio Hardware Mixer Canvas */}
        <div className={`p-8 rounded-xl border shadow-2xl font-mono text-xs space-y-6 mb-8 transition-colors duration-300 ${
          isOverdrive ? 'bg-[#1a1312] border-[#ff5a36]/40 text-white' : 'bg-[#1a1a1e] border-black/20 text-white'
        }`}>
          
          <div className="flex justify-between items-center border-b border-white/10 pb-4 text-[#00c2ff]">
            <span className="font-bold tracking-widest flex items-center gap-2">
              <Sliders className="w-4 h-4" /> WASAPI LOOPBACK DSP MIXER
            </span>
            <span className="text-slate-400 font-mono">48kHz // STEREO // IN-PLACE</span>
          </div>

          {/* 60 FPS Canvas Oscilloscope */}
          <div className="bg-black/70 p-4 rounded-lg border border-white/10 flex flex-col items-center relative overflow-hidden">
            <div className="text-[10px] text-slate-400 self-start mb-2 flex justify-between w-full">
              <span>LIVE DSP WAVEFORM BUFFER (60 FPS)</span>
              {isOverdrive && (
                <span className="text-[#ff5a36] font-bold flex items-center gap-1 animate-pulse">
                  <Zap className="w-3 h-3" /> OVERDRIVE HARMONICS ACTIVE
                </span>
              )}
            </div>
            <canvas ref={canvasRef} width={600} height={80} className="w-full h-20" />
          </div>

          {/* Physical Aluminium Control Interface */}
          <div className="bg-white/5 p-6 rounded-lg border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <span className="text-[#00c2ff] font-bold block text-sm">GAIN & BUFFER ATTENUATION</span>
              <span className="text-slate-400 text-xs font-sans">Slide knob to test WASAPI sample scaling. Push past 90% for overdrive.</span>
            </div>

            <div className="flex items-center space-x-4">
              <input
                type="range"
                min="0"
                max="100"
                value={knobVolume}
                onChange={(e) => handleKnobChange(Number(e.target.value))}
                className="w-48 accent-[#00c2ff] cursor-pointer"
              />
              <span className={`text-lg font-bold w-12 text-right ${isOverdrive ? 'text-[#ff5a36]' : 'text-[#00c2ff]'}`}>
                {knobVolume}%
              </span>
            </div>
          </div>
        </div>

        {/* Outcome Metric */}
        <div className="bg-[#f9f8f6] p-6 rounded-xl border border-black/10 flex flex-wrap items-center justify-between gap-4 font-mono text-xs mb-8">
          <div>
            <span className="text-slate-500 uppercase block text-[10px]">ROUNDTRIP LATENCY</span>
            <span className="text-3xl font-bold font-display text-[#00c2ff]">&lt;12ms WASAPI Loopback</span>
          </div>
          <div className="text-slate-600 font-sans max-w-md text-xs">
            In-place byte array manipulation in C# .NET 8 without garbage collection pauses or audio stuttering.
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
                  • <strong>Rejected Approach:</strong> Virtual Audio Cable kernel drivers. Installation required disabling Windows driver signature enforcement.<br />
                  • <strong>Chosen Design:</strong> User-mode WASAPI Loopback capture using NAudio in C# .NET 8. Zero driver installation required.
                </p>
              </div>

              {/* THIRD LAYER: Engineering & WASAPI Buffer */}
              <div className="bg-[#1a1a1e] text-white p-6 rounded-xl space-y-3">
                <div className="flex items-center gap-2 text-[#00c2ff] font-bold">
                  <Code2 className="w-4 h-4" /> THIRD LAYER // IN-PLACE WASAPI SAMPLE ATTENUATION (C#)
                </div>
                <pre className="text-xs text-slate-300 overflow-x-auto leading-relaxed">
{`_capture.DataAvailable += (s, e) => {
  byte[] buffer = e.Buffer;
  for (int i = 0; i < e.BytesRecorded; i += 2) {
    short sample = (short)(buffer[i] | (buffer[i + 1] << 8));
    sample = (short)(sample * gainFactor);
    buffer[i] = (byte)(sample & 0xFF);
    buffer[i + 1] = (byte)((sample >> 8) & 0xFF);
  }
};`}
                </pre>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};

