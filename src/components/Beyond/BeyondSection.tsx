import React from 'react';
import { BEYOND_DATA } from '../../data/portfolioData';
import { ShoppingBag, Users, Briefcase, GraduationCap, CheckCircle2 } from 'lucide-react';

export const BeyondSection: React.FC = () => {
  return (
    <section id="beyond" className="py-24 px-4 max-w-7xl mx-auto border-t border-white/10 relative">
      {/* Header */}
      <div className="mb-12">
        <div className="inline-flex items-center space-x-2 bg-[#00f0ff]/10 border border-[#00f0ff]/30 px-3 py-1 rounded text-xs font-mono text-[#00f0ff] mb-4">
          <Briefcase className="w-3.5 h-3.5" />
          <span>SECTION 11 // BEYOND ENGINEERING</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold font-display text-white tracking-tight mb-4">
          Entrepreneurship & Ecosystem Leadership
        </h2>
        <p className="text-slate-400 font-sans max-w-2xl text-base">
          Engineering is only one dimension. High-impact builders lead communities, found businesses, design brands, and curate developer ecosystems.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left: Stix 'N' Vibes Entrepreneurship Venture */}
        <div className="lg:col-span-6 bg-[#0a0c10] border border-[#00f0ff]/40 rounded-lg p-6 font-mono text-xs shadow-2xl relative overflow-hidden flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
              <span className="text-[#00f0ff] font-bold text-sm tracking-wider flex items-center gap-2">
                <ShoppingBag className="w-4 h-4" /> ENTREPRENEURIAL VENTURE
              </span>
              <span className="bg-[#00f0ff]/20 text-[#00f0ff] px-2 py-0.5 rounded text-[10px] font-bold">FOUNDER</span>
            </div>

            <h3 className="text-2xl font-sans font-bold text-white mb-1">{BEYOND_DATA.entrepreneurship.title}</h3>
            <div className="text-slate-400 text-xs mb-4">{BEYOND_DATA.entrepreneurship.period}</div>
            <p className="text-slate-300 font-sans text-sm leading-relaxed mb-6">
              {BEYOND_DATA.entrepreneurship.description}
            </p>

            <div className="space-y-2 mb-6">
              {BEYOND_DATA.entrepreneurship.achievements.map((ach: string, idx: number) => (
                <div key={idx} className="flex items-start space-x-2 text-slate-200 font-sans text-xs">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#00f0ff] shrink-0 mt-0.5" />
                  <span>{ach}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#050608] p-3 rounded border border-white/10 text-[10px] text-slate-400">
            BUSINESS STACK: React, PostgreSQL, Node.js, Material Cart Matrix, WhatsApp API
          </div>
        </div>

        {/* Right: Community Leadership & Academic Excellence */}
        <div className="lg:col-span-6 space-y-6">
          {/* Community Leadership */}
          <div className="bg-[#0a0c10] border border-white/15 rounded-lg p-6 font-mono text-xs shadow-xl">
            <div className="text-[#00f0ff] font-bold text-xs tracking-wider uppercase mb-4 flex items-center gap-2">
              <Users className="w-4 h-4" /> COMMUNITY & BRAND LEADERSHIP
            </div>

            <div className="space-y-4">
              {BEYOND_DATA.community.map((comm: { title: string; period: string; organization: string; description: string; impact: string }, idx: number) => (
                <div key={idx} className="bg-[#050608] p-4 rounded border border-white/10">
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="font-sans font-bold text-white text-base">{comm.title}</h4>
                    <span className="text-[10px] text-[#00f0ff]">{comm.period}</span>
                  </div>
                  <div className="text-[#00f0ff] text-xs mb-2">{comm.organization}</div>
                  <p className="text-slate-300 font-sans text-xs mb-2 leading-relaxed">{comm.description}</p>
                  <div className="text-[11px] text-slate-400 font-mono">Impact: {comm.impact}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Achievements */}
          <div className="bg-[#0a0c10] border border-white/15 rounded-lg p-6 font-mono text-xs shadow-xl">
            <div className="text-[#00f0ff] font-bold text-xs tracking-wider uppercase mb-3 flex items-center gap-2">
              <GraduationCap className="w-4 h-4" /> EDUCATION & CERTIFICATIONS
            </div>

            <div className="bg-[#050608] p-4 rounded border border-white/10 mb-3">
              <div className="flex justify-between text-white font-sans font-bold text-base">
                <span>{BEYOND_DATA.education.degree}</span>
                <span className="text-[#00f0ff]">CGPA: {BEYOND_DATA.education.cgpa}</span>
              </div>
              <div className="text-slate-400 text-xs mb-2">{BEYOND_DATA.education.institution} ({BEYOND_DATA.education.period})</div>
              <div className="space-y-1 text-slate-300 font-sans text-xs">
                {BEYOND_DATA.education.highlights.map((h: string, i: number) => (
                  <div key={i}>• {h}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
