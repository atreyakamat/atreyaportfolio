import React, { useState } from 'react';
import { HUMAN_CONTACT_DATA } from '../../data/productExperienceData';
import { Mail, Phone, Globe, Send, CheckCircle2 } from 'lucide-react';
import { soundFx } from '../OsShell/AudioSystem';

export const HumanContact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    soundFx.playSuccess();
    setSubmitted(true);
  };

  return (
    <section id="section-contact" className="py-28 px-6 max-w-5xl mx-auto select-none font-sans">
      
      <div className="bg-[#ffffff] border border-black/10 rounded-2xl p-8 sm:p-14 shadow-2xl relative overflow-hidden">
        
        {/* Main Invitation Copy */}
        <div className="max-w-2xl mb-10">
          <h2 className="text-4xl sm:text-6xl font-bold font-display text-[#1a1a1e] tracking-tight leading-none mb-3">
            {HUMAN_CONTACT_DATA.headline}
          </h2>
          <p className="text-2xl sm:text-3xl font-sans text-[#ff5a36] font-bold">
            {HUMAN_CONTACT_DATA.subhead}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 font-mono text-xs">
          {/* Left Direct Links */}
          <div className="md:col-span-5 space-y-4">
            <div className="bg-[#f9f8f6] p-4 rounded-xl border border-black/5">
              <span className="text-slate-400 text-[10px] uppercase font-bold block mb-1">DIRECT EMAIL</span>
              <a href={`mailto:${HUMAN_CONTACT_DATA.email}`} className="text-base font-sans font-bold text-[#ff5a36] hover:underline flex items-center gap-2">
                <Mail className="w-4 h-4" /> {HUMAN_CONTACT_DATA.email}
              </a>
            </div>

            <div className="bg-[#f9f8f6] p-4 rounded-xl border border-black/5">
              <span className="text-slate-400 text-[10px] uppercase font-bold block mb-1">DIRECT PHONE / WHATSAPP</span>
              <a href={`tel:${HUMAN_CONTACT_DATA.phone}`} className="text-base font-sans font-bold text-[#1a1a1e] hover:underline flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#00c2ff]" /> {HUMAN_CONTACT_DATA.phone}
              </a>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-2 font-sans">
              <a
                href={HUMAN_CONTACT_DATA.linkedin}
                target="_blank"
                rel="noreferrer"
                className="bg-[#f9f8f6] border border-black/5 p-3 rounded-lg text-center text-[#1a1a1e] font-bold hover:bg-[#e2e0db] transition-all flex items-center justify-center gap-1.5"
              >
                <Globe className="w-3.5 h-3.5 text-[#00c2ff]" /> LinkedIn
              </a>

              <a
                href={HUMAN_CONTACT_DATA.github}
                target="_blank"
                rel="noreferrer"
                className="bg-[#f9f8f6] border border-black/5 p-3 rounded-lg text-center text-[#1a1a1e] font-bold hover:bg-[#e2e0db] transition-all flex items-center justify-center gap-1.5"
              >
                <Globe className="w-3.5 h-3.5 text-[#ff5a36]" /> GitHub
              </a>
            </div>
          </div>

          {/* Right Message Box */}
          <div className="md:col-span-7 bg-[#f9f8f6] border border-black/10 p-6 rounded-xl">
            {submitted ? (
              <div className="bg-[#ffffff] p-8 rounded-lg text-center space-y-3 font-sans">
                <CheckCircle2 className="w-10 h-10 text-[#ff5a36] mx-auto" />
                <h3 className="text-xl font-bold text-[#1a1a1e]">Message Received</h3>
                <p className="text-slate-600 text-xs">
                  Thank you. Atreya will get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-sans">
                  <div>
                    <label className="text-slate-600 block mb-1 text-xs">Your Name:</label>
                    <input
                      required
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Sarah Connor"
                      className="w-full bg-[#ffffff] border border-black/15 rounded p-2.5 text-[#1a1a1e] text-xs outline-none focus:border-[#ff5a36]"
                    />
                  </div>

                  <div>
                    <label className="text-slate-600 block mb-1 text-xs">Your Email:</label>
                    <input
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. sarah@company.com"
                      className="w-full bg-[#ffffff] border border-black/15 rounded p-2.5 text-[#1a1a1e] text-xs outline-none focus:border-[#ff5a36]"
                    />
                  </div>
                </div>

                <div className="font-sans">
                  <label className="text-slate-600 block mb-1 text-xs">Project / Product Challenge:</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me what you want to build..."
                    className="w-full bg-[#ffffff] border border-black/15 rounded p-2.5 text-[#1a1a1e] text-xs outline-none focus:border-[#ff5a36]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-[#1a1a1e] text-white font-sans font-bold text-xs uppercase tracking-wider rounded hover:bg-[#2d2d34] transition-all flex items-center justify-center space-x-2 cursor-pointer shadow-md"
                >
                  <Send className="w-4 h-4 text-[#00c2ff]" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Signature Finish */}
        <div className="mt-12 pt-6 border-t border-black/10 flex justify-between items-center font-display text-xl text-[#1a1a1e] font-bold">
          <span>— Atreya</span>
          <span className="text-xs font-mono text-slate-400 font-normal">GOA, INDIA</span>
        </div>

      </div>

    </section>
  );
};
