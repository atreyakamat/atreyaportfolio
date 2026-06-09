import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin } from 'lucide-react';

const experiences = [
  {
    company: "SparkPlus Technologies",
    role: "Junior Developer Intern (Part-Time)",
    location: "Remote",
    period: "Jul 2025 – Present",
    description: [
      "Maintained and enhanced core production platforms for high availability.",
      "Built automated internal uptime/health monitoring systems.",
      "Optimized live CI/CD deployment pipelines."
    ],
    color: "from-indigo-500/20 to-indigo-600/20",
    border: "border-indigo-500/30"
  },
  {
    company: "SOLO by SPARK+",
    role: "Community Manager",
    location: "Remote",
    period: "Nov 2025 – Present",
    description: [
      "Led branding, positioning, and strategy for a product-based SaaS platform.",
      "Scaled regional tech communities via structured onboarding and high-value technical events."
    ],
    color: "from-cyan-500/20 to-cyan-600/20",
    border: "border-cyan-500/30"
  },
  {
    company: "Maple",
    role: "Founder & Full-Stack Developer",
    location: "Goa, India",
    period: "2019 – Present",
    description: [
      "Founded a freelance digital solution venture providing end-to-end web and software services.",
      "Architected and delivered 20+ custom platforms for diverse clients globally.",
      "Specialized in high-performance web ecosystems and custom automation tools."
    ],
    color: "from-emerald-500/20 to-emerald-600/20",
    border: "border-emerald-500/30"
  },
  {
    company: "Stix 'N' Vibes",
    role: "Founder",
    location: "Goa, India",
    period: "Feb 2024 – Present",
    description: [
      "Founded an independent sticker-design venture handling end-to-end operations.",
      "Engineered a custom modular e-commerce platform featuring a material-aware cart, dynamic pricing matrix, and automated WhatsApp checkout pipeline."
    ],
    color: "from-violet-500/20 to-violet-600/20",
    border: "border-violet-500/30"
  }
];

const Work: React.FC = () => {
  return (
    <section id="work" className="py-24 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16 text-center"
      >
        <h2 className="text-5xl md:text-6xl text-white mb-4 font-cursive">Work Experience</h2>
        <p className="text-slate-400 max-w-2xl mx-auto">My professional journey and the impact I've made across different roles and ventures.</p>
      </motion.div>

      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-indigo-500/50 via-cyan-500/50 to-transparent -translate-x-1/2 hidden md:block" />

        <div className="flex flex-col gap-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} items-center`}
            >
              {/* Timeline Point */}
              <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-white border-4 border-indigo-600 -translate-x-1/2 z-10 hidden md:block" />

              <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pl-16' : 'md:pr-16'}`}>
                <div className={`glass-card p-8 rounded-3xl border ${exp.border} bg-gradient-to-br ${exp.color} hover:bg-white/[0.04] transition-all duration-300 group`}>
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                    <h3 className="text-2xl font-bold text-white group-hover:text-gradient transition-all">{exp.company}</h3>
                    <span className="text-sm font-semibold px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300">
                      {exp.period}
                    </span>
                  </div>
                  
                  <div className="flex flex-col gap-2 mb-6">
                    <div className="flex items-center gap-2 text-indigo-400 font-medium">
                      <Briefcase size={16} />
                      <span>{exp.role}</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-500 text-sm">
                      <MapPin size={16} />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex gap-3 text-slate-400 text-sm leading-relaxed">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="hidden md:block md:w-1/2" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
