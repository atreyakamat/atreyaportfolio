import React, { useState } from 'react';
import { Mail, Phone, Send, Terminal, CheckCircle2, Globe } from 'lucide-react';
import { soundFx } from '../OsShell/AudioSystem';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '', role: 'Product / System Engineering' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    soundFx.playSuccess();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 px-4 max-w-7xl mx-auto border-t border-white/10 relative">
      <div className="mb-12">
        <div className="inline-flex items-center space-x-2 bg-[#00ff66]/10 border border-[#00ff66]/30 px-3 py-1 rounded text-xs font-mono text-[#00ff66] mb-4">
          <Terminal className="w-3.5 h-3.5" />
          <span>SECTION 10 // DIRECT CONTACT PERIMETER</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold font-display text-white tracking-tight mb-4">
          Initiate Direct Collaboration
        </h2>
        <p className="text-slate-400 font-sans max-w-2xl text-base">
          "I don't just want to hire him. I want him designing our product." Reach out directly via the terminal protocol below.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Contact Information Cards */}
        <div className="lg:col-span-5 space-y-4 font-mono text-xs">
          <div className="bg-[#0d0f15] border border-white/15 rounded-lg p-5 shadow-xl">
            <div className="text-slate-400 block mb-1">DIRECT EMAIL</div>
            <a href="mailto:atkamat1204@gmail.com" className="text-lg font-sans font-bold text-[#00ff66] hover:underline flex items-center gap-2">
              <Mail className="w-4 h-4" /> atkamat1204@gmail.com
            </a>
          </div>

          <div className="bg-[#0d0f15] border border-white/15 rounded-lg p-5 shadow-xl">
            <div className="text-slate-400 block mb-1">DIRECT MOBILE / WHATSAPP</div>
            <a href="tel:+917744020601" className="text-lg font-sans font-bold text-[#00f0ff] hover:underline flex items-center gap-2">
              <Phone className="w-4 h-4" /> +91 77440 20601
            </a>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <a
              href="https://linkedin.com/in/atreyakamat"
              target="_blank"
              rel="noreferrer"
              className="bg-[#0d0f15] border border-white/15 p-4 rounded-lg flex items-center justify-center space-x-2 text-white hover:border-[#00f0ff] hover:text-[#00f0ff] transition-all"
            >
              <Globe className="w-4 h-4 text-[#00f0ff]" />
              <span className="font-bold">LinkedIn</span>
            </a>

            <a
              href="https://github.com/atreyakamat"
              target="_blank"
              rel="noreferrer"
              className="bg-[#0d0f15] border border-white/15 p-4 rounded-lg flex items-center justify-center space-x-2 text-white hover:border-[#00ff66] hover:text-[#00ff66] transition-all"
            >
              <Globe className="w-4 h-4 text-[#00ff66]" />
              <span className="font-bold">GitHub</span>
            </a>
          </div>
        </div>

        {/* Contact Form Terminal */}
        <div className="lg:col-span-7 bg-[#0d0f15] border border-white/15 rounded-lg p-6 font-mono text-xs shadow-2xl">
          <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4 text-[#00ff66]">
            <span className="font-bold tracking-wider">TERMINAL TRANSMISSION PROTOCOL</span>
            <span className="text-[10px] text-slate-400">ENCRYPTION: ACTIVE</span>
          </div>

          {submitted ? (
            <div className="bg-[#00ff66]/10 border border-[#00ff66]/40 p-6 rounded text-center space-y-3">
              <CheckCircle2 className="w-10 h-10 text-[#00ff66] mx-auto" />
              <h3 className="text-xl font-sans font-bold text-white">Transmission Received</h3>
              <p className="text-slate-300 font-sans text-sm">
                Thank you for reaching out. Atreya will respond to your transmission within 24 hours.
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
                    className="w-full bg-[#07080b] border border-white/15 rounded p-2.5 text-white font-mono text-xs outline-none focus:border-[#00ff66]"
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
                    className="w-full bg-[#07080b] border border-white/15 rounded p-2.5 text-white font-mono text-xs outline-none focus:border-[#00ff66]"
                  />
                </div>
              </div>

              <div>
                <label className="text-slate-400 block mb-1">Collaboration Objective:</label>
                <select
                  value={formData.role}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                  className="w-full bg-[#07080b] border border-white/15 rounded p-2.5 text-white font-mono text-xs outline-none focus:border-[#00f0ff]"
                >
                  <option value="Product / System Engineering">Product Engineering / Design</option>
                  <option value="System Architecture Consultation">Systems Architecture Consultation</option>
                  <option value="Venture / Startup Partnership">Startup Partnership</option>
                  <option value="Speaking / Community Event">Speaking / Developer Event</option>
                </select>
              </div>

              <div>
                <label className="text-slate-400 block mb-1">Project Payload / Challenge Details:</label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Describe your product challenge or engineering requirements..."
                  className="w-full bg-[#07080b] border border-white/15 rounded p-2.5 text-white font-mono text-xs outline-none focus:border-[#00ff66]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-[#00ff66] text-[#07080b] font-mono font-bold uppercase tracking-wider rounded hover:bg-[#00ff66]/90 transition-all flex items-center justify-center space-x-2 cursor-pointer shadow-[0_0_20px_rgba(0,255,102,0.3)]"
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
