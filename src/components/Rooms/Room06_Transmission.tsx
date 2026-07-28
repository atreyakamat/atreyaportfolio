import React, { useState } from 'react';
import { Terminal, Send, Mail, Phone, Globe, CheckCircle2 } from 'lucide-react';
import { soundFx } from '../OsShell/AudioSystem';

export const Room06_Transmission: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    soundFx.playSuccess();
    setSubmitted(true);
  };

  return (
    <section id="room-06" className="py-24 px-4 max-w-7xl mx-auto relative">
      {/* Room Marker */}
      <div className="flex items-center justify-between text-xs font-mono text-slate-500 pb-4 border-b border-white/10 mb-8">
        <div className="flex items-center space-x-2 text-[#00f0ff]">
          <Terminal className="w-4 h-4" />
          <span className="font-bold tracking-widest uppercase">EXHIBITION ROOM 06 // DIRECT TRANSMISSION PERIMETER</span>
        </div>
        <div>INITIATE DIRECT COLLABORATION</div>
      </div>

      <h2 className="text-4xl md:text-6xl font-bold font-display text-white tracking-tight mb-8">
        Initiate Transmission
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 font-mono text-xs">
        {/* Contact info cards */}
        <div className="lg:col-span-5 space-y-4">
          <div className="bg-[#0a0c10] border border-white/15 rounded-lg p-5 shadow-xl">
            <div className="text-slate-500 text-[10px] uppercase mb-1">DIRECT EMAIL</div>
            <a href="mailto:atkamat1204@gmail.com" className="text-lg font-sans font-bold text-[#00f0ff] hover:underline flex items-center gap-2">
              <Mail className="w-4 h-4" /> atkamat1204@gmail.com
            </a>
          </div>

          <div className="bg-[#0a0c10] border border-white/15 rounded-lg p-5 shadow-xl">
            <div className="text-slate-500 text-[10px] uppercase mb-1">DIRECT MOBILE / WHATSAPP</div>
            <a href="tel:+917744020601" className="text-lg font-sans font-bold text-white hover:underline flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#00f0ff]" /> +91 77440 20601
            </a>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <a
              href="https://linkedin.com/in/atreyakamat"
              target="_blank"
              rel="noreferrer"
              className="bg-[#0a0c10] border border-white/15 p-4 rounded-lg flex items-center justify-center space-x-2 text-white hover:border-[#00f0ff] transition-all"
            >
              <Globe className="w-4 h-4 text-[#00f0ff]" />
              <span className="font-bold">LinkedIn</span>
            </a>

            <a
              href="https://github.com/atreyakamat"
              target="_blank"
              rel="noreferrer"
              className="bg-[#0a0c10] border border-white/15 p-4 rounded-lg flex items-center justify-center space-x-2 text-white hover:border-[#00f0ff] transition-all"
            >
              <Globe className="w-4 h-4 text-[#00f0ff]" />
              <span className="font-bold">GitHub</span>
            </a>
          </div>
        </div>

        {/* CAD Transmission Form */}
        <div className="lg:col-span-7 bg-[#0a0c10] border border-white/15 rounded-lg p-6 shadow-2xl">
          <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4 text-[#00f0ff]">
            <span className="font-bold tracking-widest">DIRECT CAD TRANSMISSION CONSOLE</span>
            <span className="text-[10px] text-slate-500">ENCRYPTION: ACTIVE</span>
          </div>

          {submitted ? (
            <div className="bg-[#00f0ff]/10 border border-[#00f0ff]/40 p-6 rounded text-center space-y-3">
              <CheckCircle2 className="w-10 h-10 text-[#00f0ff] mx-auto" />
              <h3 className="text-xl font-sans font-bold text-white">Transmission Received</h3>
              <p className="text-slate-300 font-sans text-xs">
                Thank you for visiting the exhibition. Atreya will respond to your inquiry within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-slate-400 block mb-1">Your Name / Organization:</label>
                  <input
                    required
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Sarah Connor / Stripe"
                    className="w-full bg-[#050608] border border-white/15 rounded p-2.5 text-white font-mono text-xs outline-none focus:border-[#00f0ff]"
                  />
                </div>

                <div>
                  <label className="text-slate-400 block mb-1">Your Direct Email:</label>
                  <input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. sarah@company.com"
                    className="w-full bg-[#050608] border border-white/15 rounded p-2.5 text-white font-mono text-xs outline-none focus:border-[#00f0ff]"
                  />
                </div>
              </div>

              <div>
                <label className="text-slate-400 block mb-1">Project Challenge / Transmission Details:</label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Describe your product challenge or systems engineering inquiry..."
                  className="w-full bg-[#050608] border border-white/15 rounded p-2.5 text-white font-mono text-xs outline-none focus:border-[#00f0ff]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-[#00f0ff] text-[#08080a] font-mono font-bold uppercase tracking-wider rounded hover:bg-[#00f0ff]/90 transition-all flex items-center justify-center space-x-2 cursor-pointer shadow-[0_0_20px_rgba(0,240,255,0.3)]"
              >
                <Send className="w-4 h-4" />
                <span>Transmit Payload to Atreya</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
