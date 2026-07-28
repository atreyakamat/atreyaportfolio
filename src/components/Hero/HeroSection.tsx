import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Terminal, Shield, ArrowDown, ChevronRight, Activity } from 'lucide-react';
import { soundFx } from '../OsShell/AudioSystem';

interface HeroSectionProps {
  onNavigate: (sectionId: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 500], [1, 0.2]);
  const scale = useTransform(scrollY, [0, 500], [1, 0.96]);
  const y = useTransform(scrollY, [0, 500], [0, 60]);

  const [bootLogs, setBootLogs] = useState<string[]>([]);
  const [bootStep, setBootStep] = useState<number>(0);

  useEffect(() => {
    const steps = [
      '[SYSTEM_INIT] Loading core parameters...',
      '[CHECK_PERIMETER] Subnet validation matrix: ACTIVE',
      '[HEARTBEAT] Telemetry node: ONLINE (12ms latency)',
      '[IDENT_RESOLVED] Atreya Kamat — Product Engineer & Systems Architect',
      '[STATUS] System ready. Scroll to initialize experience.'
    ];

    const timer = setInterval(() => {
      setBootStep((prev) => {
        if (prev < steps.length) {
          setBootLogs((logs) => [...logs, steps[prev]]);
          soundFx.playBeep(600 + prev * 100, 'sine', 0.04, 0.03);
          return prev + 1;
        }
        clearInterval(timer);
        return prev;
      });
    }, 400);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen pt-24 pb-16 flex flex-col justify-between overflow-hidden px-4">
      {/* Background Industrial Accent Markings */}
      <div className="absolute top-20 left-6 text-[10px] font-mono text-slate-600 select-none hidden md:block">
        SYS_REF // 172.16.4.0_CIDR
        <br />
        LATITUDE // 15.5901° N, GOA
      </div>
      
      <div className="absolute top-20 right-6 text-[10px] font-mono text-slate-600 select-none text-right hidden md:block">
        CGPA // 8.92_COMPUTER_ENG
        <br />
        ARCH // MULTI-TENANT_DISTRIBUTED
      </div>

      <motion.div
        style={{ opacity, scale, y }}
        className="max-w-6xl mx-auto w-full flex-1 flex flex-col justify-center py-12"
      >
        {/* Top Tagline Badge */}
        <div className="inline-flex items-center space-x-2 bg-[#0d0f15] border border-white/10 px-3 py-1.5 rounded-full text-xs font-mono text-[#00ff66] w-max mb-8">
          <Activity className="w-3.5 h-3.5 animate-phosphor-pulse" />
          <span>SYSTEM PHILOSOPHY // THINKING BEFORE SYNTAX</span>
        </div>

        {/* Evolving Scroll kinetic Philosophy Statement */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.08] font-display max-w-5xl mb-8">
          I don't build software.
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ff66] via-[#00f0ff] to-[#ffb000]">
            I design systems that create impact.
          </span>
        </h1>

        {/* Sub-Manifesto */}
        <p className="text-lg md:text-xl text-slate-300 font-sans max-w-3xl leading-relaxed mb-12">
          Technology is replaceable. Thinking is not. Welcome to the mind of an engineer, product designer, systems thinker, entrepreneur, and builder.
        </p>

        {/* Terminal System Boot Initialization Box */}
        <div className="bg-[#0d0f15] border border-white/15 rounded-lg p-4 font-mono text-xs max-w-2xl mb-10 shadow-2xl relative">
          <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-3 text-slate-400">
            <div className="flex items-center space-x-2">
              <Terminal className="w-3.5 h-3.5 text-[#00ff66]" />
              <span>ATREYA_DIAGNOSTICS_BOOT.SH</span>
            </div>
            <span className="text-[10px] text-[#00f0ff]">{bootStep < 5 ? 'INITIALIZING...' : 'SYSTEM READY'}</span>
          </div>

          <div className="space-y-1.5 min-h-[110px] text-slate-300">
            {bootLogs.map((log, idx) => (
              <div key={idx} className="flex items-center space-x-2">
                <ChevronRight className="w-3 h-3 text-[#00ff66] shrink-0" />
                <span className={idx === bootLogs.length - 1 ? 'text-[#00ff66] font-bold' : ''}>{log}</span>
              </div>
            ))}
          </div>

          <div className="mt-3 pt-2 border-t border-white/10 flex items-center justify-between text-[10px] text-slate-500">
            <span>EXECUTABLE: NODE_CRON / POSTGRES / REDIS / WASAPI</span>
            <span className="text-[#ffb000]">TAP ⌘K FOR COMMAND SHELL</span>
          </div>
        </div>

        {/* Action Button Row */}
        <div className="flex flex-wrap gap-4 items-center">
          <button
            onClick={() => {
              soundFx.playClick();
              onNavigate('thinking');
            }}
            className="px-6 py-3.5 rounded bg-[#00ff66] text-[#07080b] font-mono font-bold text-xs uppercase tracking-wider hover:bg-[#00ff66]/90 transition-all flex items-center space-x-2 cursor-pointer shadow-[0_0_20px_rgba(0,255,102,0.3)]"
          >
            <span>Explore How I Think</span>
            <ChevronRight className="w-4 h-4" />
          </button>

          <button
            onClick={() => {
              soundFx.playClick();
              onNavigate('impact');
            }}
            className="px-6 py-3.5 rounded bg-[#0d0f15] border border-white/20 text-white font-mono text-xs uppercase tracking-wider hover:border-[#00f0ff] hover:text-[#00f0ff] transition-all flex items-center space-x-2 cursor-pointer"
          >
            <Shield className="w-4 h-4 text-[#00f0ff]" />
            <span>View System Impact</span>
          </button>
        </div>
      </motion.div>

      {/* Scroll Down Indicator */}
      <div className="flex items-center justify-between max-w-6xl mx-auto w-full pt-6 border-t border-white/10 text-xs font-mono text-slate-500">
        <div className="flex items-center space-x-2">
          <span className="w-2 h-2 rounded-full bg-[#00ff66]" />
          <span>SCROLL TO DECONSTRUCT SYSTEM ARCHITECTURE</span>
        </div>
        <div className="flex items-center space-x-1 text-slate-400 animate-bounce">
          <span>SCROLL</span>
          <ArrowDown className="w-3.5 h-3.5 text-[#00ff66]" />
        </div>
      </div>
    </section>
  );
};
