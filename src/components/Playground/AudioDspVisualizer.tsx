import React, { useState, useEffect, useRef } from 'react';
import { Activity, Play, Square, Sliders } from 'lucide-react';
import { soundFx } from '../OsShell/AudioSystem';

export const AudioDspVisualizer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [waveformType, setWaveformType] = useState<OscillatorType>('sine');
  const [frequency, setFrequency] = useState<number>(220);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animFrameIdRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let phase = 0;

    const render = () => {
      const width = canvas.width;
      const height = canvas.height;

      ctx.fillStyle = '#07080b';
      ctx.fillRect(0, 0, width, height);

      // Grid lines
      ctx.strokeStyle = 'rgba(0, 240, 255, 0.1)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(0, height / 2);
      ctx.lineTo(width, height / 2);
      ctx.stroke();

      // Waveform generator
      ctx.strokeStyle = isPlaying ? '#00ff66' : '#00f0ff';
      ctx.lineWidth = 2;
      ctx.beginPath();

      const sliceWidth = width / 100;
      let x = 0;

      for (let i = 0; i < 100; i++) {
        const t = (i / 100) * Math.PI * 2 * (frequency / 100) + phase;
        let yVal = 0;

        if (waveformType === 'sine') {
          yVal = Math.sin(t);
        } else if (waveformType === 'square') {
          yVal = Math.sin(t) >= 0 ? 0.8 : -0.8;
        } else if (waveformType === 'sawtooth') {
          yVal = ((t % (Math.PI * 2)) / Math.PI) - 1;
        } else if (waveformType === 'triangle') {
          yVal = Math.abs((t % (Math.PI * 2)) / Math.PI - 1) * 2 - 1;
        }

        const y = (height / 2) + yVal * (height / 3);
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);

        x += sliceWidth;
      }

      ctx.stroke();

      if (isPlaying) {
        phase += 0.08;
      }

      animFrameIdRef.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      if (animFrameIdRef.current) cancelAnimationFrame(animFrameIdRef.current);
    };
  }, [isPlaying, waveformType, frequency]);

  const toggleTone = () => {
    const nextState = !isPlaying;
    setIsPlaying(nextState);
    if (nextState) {
      soundFx.playBeep(frequency, waveformType, 0.4, 0.05);
    }
  };

  return (
    <div className="bg-[#07080b] border border-white/10 rounded-lg p-5 font-mono text-xs">
      <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4 text-[#00f0ff]">
        <span className="font-bold tracking-wider flex items-center gap-2">
          <Activity className="w-4 h-4" /> LIVE TOOL // WASAPI DSP OSCILLOSCOPE SIMULATOR
        </span>
        <span className="text-[10px] bg-[#00f0ff]/10 px-2 py-0.5 rounded">ECHOBRIDGE_DSP_ENGINE</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        {/* Canvas Visualizer Display */}
        <div className="lg:col-span-8 bg-[#090b10] border border-white/10 rounded overflow-hidden relative flex flex-col justify-center items-center">
          <canvas ref={canvasRef} width={500} height={180} className="w-full h-full" />
          <div className="absolute top-2 left-2 text-[10px] text-slate-500 font-mono">
            FREQ: {frequency}Hz | WAVE: {waveformType.toUpperCase()} | LATENCY: 11.4ms
          </div>
        </div>

        {/* DSP Controls */}
        <div className="lg:col-span-4 bg-[#0d0f15] p-4 rounded border border-white/10 space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-slate-400">DSP Audio Feed:</span>
            <button
              onClick={() => {
                soundFx.playClick();
                toggleTone();
              }}
              className={`px-3 py-1.5 rounded font-mono font-bold text-xs flex items-center gap-1.5 cursor-pointer ${
                isPlaying
                  ? 'bg-[#ff2e54] text-white'
                  : 'bg-[#00ff66] text-[#07080b]'
              }`}
            >
              {isPlaying ? <Square className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              <span>{isPlaying ? 'Stop Audio' : 'Play Tone'}</span>
            </button>
          </div>

          <div>
            <label className="text-slate-400 block mb-1">Waveform Type:</label>
            <div className="grid grid-cols-2 gap-1.5 text-[10px]">
              {(['sine', 'square', 'sawtooth', 'triangle'] as OscillatorType[]).map((w) => (
                <button
                  key={w}
                  onClick={() => {
                    soundFx.playClick();
                    setWaveformType(w);
                  }}
                  className={`px-2 py-1 rounded capitalize font-mono cursor-pointer transition-all ${
                    waveformType === w
                      ? 'bg-[#00f0ff]/20 text-[#00f0ff] border border-[#00f0ff]/40 font-bold'
                      : 'bg-white/5 text-slate-400 hover:text-white'
                  }`}
                >
                  {w}
                </button>
              ))}
            </div>
          </div>

          <div>
            <div className="flex justify-between text-slate-400 mb-1">
              <span className="flex items-center gap-1"><Sliders className="w-3 h-3 text-[#00ff66]" /> Frequency:</span>
              <span className="text-[#00ff66] font-bold">{frequency} Hz</span>
            </div>
            <input
              type="range"
              min="100"
              max="880"
              value={frequency}
              onChange={(e) => setFrequency(Number(e.target.value))}
              className="w-full accent-[#00ff66]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
