import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Rocket, Clock } from 'lucide-react';

const categories = ['All', 'Shipped', 'In Development'];

const projects = [
  {
    title: "TrackNow",
    tag: "Shipped",
    description: "PWA with 100+ active users. Full-stack cross-platform ecosystem for real-time tracking.",
    stack: ["React Native", "Quasar", "Node.js", "PostgreSQL"],
    icon: <Rocket className="text-emerald-400" size={20} />
  },
  {
    title: "PulseWatch",
    tag: "Shipped",
    description: "Full-stack uptime monitoring platform with configurable per-site checks and automated alerts.",
    stack: ["React", "Express", "Drizzle ORM", "Node-cron"],
    icon: <Rocket className="text-emerald-400" size={20} />
  },
  {
    title: "EchoBridge",
    tag: "Shipped",
    description: "Low-latency Windows audio routing & FX mixer with independent real-time DSP effect chains.",
    stack: [".NET 8", "WPF", "WASAPI", "NAudio"],
    icon: <Rocket className="text-emerald-400" size={20} />
  },
  {
    title: "AttenDance",
    tag: "Shipped",
    description: "Proxy-proof college attendance validation engine utilizing Wi-Fi subnet verification.",
    stack: ["PostgreSQL", "JWT", "Node.js", "Bcrypt"],
    icon: <Rocket className="text-emerald-400" size={20} />
  },
  {
    title: "ClinicOS",
    tag: "In Development",
    description: "Advanced CRM + automated patient communication workflows and AI-driven follow-ups.",
    stack: ["React", "Node.js", "PostgreSQL", "LLMs"],
    icon: <Clock className="text-amber-400" size={20} />
  },
  {
    title: "Vistara BI",
    tag: "In Development",
    description: "AI-powered Business Intelligence platform designed for SMEs, abstracting the data analyst layer.",
    stack: ["React", "Python", "FastAPI", "Vector DB"],
    icon: <Clock className="text-amber-400" size={20} />
  },
  {
    title: "TimeFlex",
    tag: "In Development",
    description: "Enterprise-grade school management ERP covering intelligent timetabling and fee administration.",
    stack: ["React", "Node.js", "PostgreSQL", "Redis"],
    icon: <Clock className="text-amber-400" size={20} />
  },
  {
    title: "TeamCord",
    tag: "In Development",
    description: "Real-time Discord alternative tailored for small agencies featuring instant voice channels.",
    stack: ["React", "WebSockets", "WebRTC", "Node.js"],
    icon: <Clock className="text-amber-400" size={20} />
  }
];

const Projects: React.FC = () => {
  const [activeTab, setActiveTab] = useState('All');

  const filteredProjects = projects.filter(project => 
    activeTab === 'All' ? true : project.tag === activeTab
  );

  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl"
        >
          <h2 className="text-5xl md:text-6xl text-white mb-4 font-cursive">Featured Projects</h2>
          <p className="text-slate-400">A collection of systems I've architected and built, from concept to production.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex p-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`relative px-6 py-2 text-sm font-bold transition-all rounded-full ${
                activeTab === cat ? "text-white" : "text-slate-500 hover:text-slate-300"
              }`}
            >
              {activeTab === cat && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-indigo-600 rounded-full -z-10"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              {cat}
            </button>
          ))}
        </motion.div>
      </div>

      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence mode='popLayout'>
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group relative flex flex-col glass-card rounded-3xl overflow-hidden hover:border-white/20 transition-all duration-500"
            >
              <div className="p-8 flex flex-col h-full">
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 rounded-2xl bg-white/5 border border-white/10 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                    {project.icon}
                  </div>
                  <div className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border ${
                    project.tag === 'Shipped' ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-500' : 'bg-amber-500/10 border-amber-500/20 text-amber-500'
                  }`}>
                    {project.tag}
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-indigo-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.stack.map(tech => (
                    <span key={tech} className="px-2 py-1 rounded-md bg-white/5 border border-white/10 text-[10px] font-medium text-slate-500 uppercase">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Card Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default Projects;
