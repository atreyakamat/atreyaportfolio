import React from 'react';
import { motion } from 'framer-motion';
import { 
  Terminal, Database, Cpu, Globe 
} from 'lucide-react';

const skillGroups = [
  {
    title: "Languages",
    icon: <Terminal size={20} className="text-indigo-400" />,
    skills: ["TypeScript", "JavaScript", "Python", "Java", "C/C++", "SQL", "PHP"]
  },
  {
    title: "Frontend",
    icon: <Globe size={20} className="text-cyan-400" />,
    skills: ["React.js", "Next.js", "React Native", "Quasar", "Astro.js", "Vue.js", "Angular", "Tailwind CSS"]
  },
  {
    title: "Backend & AI",
    icon: <Cpu size={20} className="text-violet-400" />,
    skills: ["Node.js", "Express.js", "NestJS", "FastAPI", "Hono", "GPT-4/5", "Gemini", "Vercel AI SDK", "RAG", "Vector Search"]
  },
  {
    title: "Infra & Databases",
    icon: <Database size={20} className="text-rose-400" />,
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Cassandra", "AWS", "Docker", "Kubernetes", "GitHub Actions", "Prometheus"]
  }
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 text-center"
      >
        <h2 className="text-5xl md:text-6xl text-white mb-4 font-cursive">Technical Arsenal</h2>
        <p className="text-slate-400 max-w-2xl mx-auto">A comprehensive overview of the technologies and tools I leverage to build scalable solutions.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillGroups.map((group, groupIndex) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
            className="glass-card p-8 rounded-3xl relative overflow-hidden group"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 rounded-2xl bg-white/5 border border-white/10 group-hover:rotate-12 transition-transform">
                {group.icon}
              </div>
              <h3 className="text-2xl font-bold text-white">{group.title}</h3>
            </div>

            <div className="flex flex-wrap gap-3">
              {group.skills.map((skill, skillIndex) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: (groupIndex * 0.1) + (skillIndex * 0.05) }}
                  className="px-4 py-2 text-sm font-medium rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:border-indigo-500/50 hover:text-white transition-all cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
            
            {/* Background Glow */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-indigo-500/5 blur-[80px] rounded-full group-hover:bg-indigo-500/10 transition-colors" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
