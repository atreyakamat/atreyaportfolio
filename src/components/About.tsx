import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Globe2, Award } from 'lucide-react';

const certifications = [
  { name: "Google Cybersecurity", issuer: "Google", date: "2024" },
  { name: "Google Business Intelligence", issuer: "Google", date: "2024" },
  { name: "Google Project Management", issuer: "Google", date: "2023" },
  { name: "SPARK+ React Advanced", issuer: "SparkPlus", date: "2024" },
  { name: "SPARK+ AI Tools", issuer: "SparkPlus", date: "2024" },
];

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-6xl text-white mb-8 font-cursive">Beyond the Code</h2>
          <div className="space-y-6 text-slate-400 leading-relaxed">
            <p className="text-lg">
              I'm <span className="text-white font-bold">Atreya</span> — a final-year Computer Engineering student at 
              Agnel Institute of Technology and Design, graduating July 2026 with a 
              <span className="text-indigo-400 font-bold ml-1">CGPA of 8.92</span>.
            </p>
            <p>
              My approach to technology is rooted in community and leadership. As Chairperson of the 
              <span className="text-slate-200"> ACCESS Student Council</span>, I've had the privilege of 
              orchestrating the <span className="text-slate-200">Techyothon Hackathon</span>, bringing together 
              innovative minds to solve real-world problems.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/10">
                <Globe2 className="text-indigo-400" size={24} />
                <div>
                  <p className="text-xs text-slate-500 uppercase font-bold tracking-wider">Languages</p>
                  <p className="text-sm text-slate-200 font-medium">English, Hindi, Konkani, Marathi</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/10">
                <GraduationCap className="text-cyan-400" size={24} />
                <div>
                  <p className="text-xs text-slate-500 uppercase font-bold tracking-wider">Education</p>
                  <p className="text-sm text-slate-200 font-medium">B.E. Computer Engineering</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-indigo-500 mb-6 flex items-center gap-2">
              <Award size={18} />
              Micro-Credentials
            </h3>
            <div className="flex flex-col gap-4">
              {certifications.map((cert) => (
                <motion.div
                  key={cert.name}
                  whileHover={{ x: 10, backgroundColor: "rgba(255, 255, 255, 0.05)" }}
                  className="p-5 rounded-2xl glass-morphism flex items-center justify-between group cursor-default transition-all"
                >
                  <div className="flex flex-col">
                    <span className="text-white font-bold group-hover:text-indigo-400 transition-colors">{cert.name}</span>
                    <span className="text-xs text-slate-500 font-medium">{cert.issuer}</span>
                  </div>
                  <span className="text-xs font-bold text-slate-400 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                    {cert.date}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Abstract background element */}
          <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-indigo-600/5 blur-[100px] rounded-full pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
