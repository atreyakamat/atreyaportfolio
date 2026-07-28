import React, { useState } from 'react';
import { Send, Mail, Phone, Globe, CheckCircle2, StickyNote } from 'lucide-react';
import { soundFx } from '../OsShell/AudioSystem';

export const DirectMessageNode: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    soundFx.playSuccess();
    setSubmitted(true);
  };

  return (
    <div id="node-contact" className="w-full py-12 px-4 max-w-6xl mx-auto">
      <div className="bg-[#ffffff] border border-black/10 rounded-xl p-8 sm:p-10 shadow-xl relative overflow-hidden font-sans">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-black/10 pb-4 mb-6 font-mono text-xs text-slate-500">
          <div className="flex items-center space-x-2 text-[#ff5a36]">
            <StickyNote className="w-4 h-4" />
            <span className="font-bold tracking-tight text-[#1a1a1e]">FRAME 06 // DIRECT COLLABORATION STICKY NOTE</span>
          </div>
          <span className="bg-[#f0eeeb] px-2.5 py-1 rounded text-[#1a1a1e] font-bold">Interactive Transmission</span>
        </div>

        <h2 className="text-3xl sm:text-4xl font-bold font-display text-[#1a1a1e] mb-3">
          Initiate Direct Collaboration
        </h2>
        <p className="text-slate-600 text-sm font-sans max-w-2xl mb-8">
          Reach out directly to partner on product engineering, systems architecture, or venture building.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 font-mono text-xs">
          {/* Quick Contact Links */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-[#f0eeeb] p-4 rounded border border-black/5">
              <div className="text-slate-500 text-[10px] uppercase mb-1 font-bold">DIRECT EMAIL</div>
              <a href="mailto:atkamat1204@gmail.com" className="text-base font-sans font-bold text-[#ff5a36] hover:underline flex items-center gap-2">
                <Mail className="w-4 h-4" /> atkamat1204@gmail.com
              </a>
            </div>

            <div className="bg-[#f0eeeb] p-4 rounded border border-black/5">
              <div className="text-slate-500 text-[10px] uppercase mb-1 font-bold">DIRECT MOBILE / WHATSAPP</div>
              <a href="tel:+917744020601" className="text-base font-sans font-bold text-[#1a1a1e] hover:underline flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#00c2ff]" /> +91 77440 20601
              </a>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <a
                href="https://linkedin.com/in/atreyakamat"
                target="_blank"
                rel="noreferrer"
                className="bg-[#f0eeeb] border border-black/5 p-3 rounded text-center text-[#1a1a1e] font-bold hover:bg-[#e2e0db] transition-all flex items-center justify-center gap-1.5"
              >
                <Globe className="w-3.5 h-3.5 text-[#00c2ff]" /> LinkedIn
              </a>

              <a
                href="https://github.com/atreyakamat"
                target="_blank"
                rel="noreferrer"
                className="bg-[#f0eeeb] border border-black/5 p-3 rounded text-center text-[#1a1a1e] font-bold hover:bg-[#e2e0db] transition-all flex items-center justify-center gap-1.5"
              >
                <Globe className="w-3.5 h-3.5 text-[#ff5a36]" /> GitHub
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7 bg-[#f0eeeb] border border-black/10 p-6 rounded-lg">
            {submitted ? (
              <div className="bg-[#ffffff] p-6 rounded text-center space-y-3 font-sans">
                <CheckCircle2 className="w-10 h-10 text-[#ff5a36] mx-auto" />
                <h3 className="text-xl font-bold text-[#1a1a1e]">Transmission Received</h3>
                <p className="text-slate-600 text-xs">
                  Thank you. Atreya will respond to your transmission within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-slate-600 block mb-1">Your Name / Organization:</label>
                    <input
                      required
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Sarah Connor / Stripe"
                      className="w-full bg-[#ffffff] border border-black/15 rounded p-2.5 text-[#1a1a1e] font-sans text-xs outline-none focus:border-[#ff5a36]"
                    />
                  </div>

                  <div>
                    <label className="text-slate-600 block mb-1">Your Direct Email:</label>
                    <input
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. sarah@company.com"
                      className="w-full bg-[#ffffff] border border-black/15 rounded p-2.5 text-[#1a1a1e] font-sans text-xs outline-none focus:border-[#ff5a36]"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-slate-600 block mb-1">Product Challenge / Collaboration Details:</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your product engineering or systems architecture requirements..."
                    className="w-full bg-[#ffffff] border border-black/15 rounded p-2.5 text-[#1a1a1e] font-sans text-xs outline-none focus:border-[#ff5a36]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-[#1a1a1e] text-white font-sans font-bold uppercase tracking-wider rounded hover:bg-[#2d2d34] transition-all flex items-center justify-center space-x-2 cursor-pointer shadow-md"
                >
                  <Send className="w-4 h-4 text-[#00c2ff]" />
                  <span>Transmit Sticky Note Payload</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
