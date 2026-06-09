import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Code2 } from 'lucide-react';
import heroImage from '../assets/hero.png';

const Hero: React.FC = () => {
  return (
    <section className="relative flex items-center justify-center min-h-screen overflow-hidden">
      {/* Background Video Layer - Full Screen */}
      <div className="absolute inset-0 z-0">
        <video 
          src="/pugc_Pixverse_V3_5_8939.mp4" 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover opacity-30 dark:opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-primary)] via-transparent to-[var(--bg-primary)] opacity-60" />
      </div>

      <div className="max-w-7xl mx-auto w-full px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-left"
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-cursive text-3xl md:text-4xl text-indigo-500 mb-2"
          >
            Hello, I'm Atreya
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-6 text-4xl font-normal leading-tight md:text-6xl tracking-tight text-[var(--text-primary)] font-cursive"
          >
            Building products <br /> 
            <span className="text-gradient">that actually ship.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-xl mb-8 text-lg font-medium md:text-xl text-[var(--text-secondary)]"
          >
            Engineer · Developer · Founder. <br />
            <span className="text-[var(--text-primary)]">Based in Goa, India.</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="max-w-lg mb-10 text-base md:text-lg text-[var(--text-secondary)]/80"
          >
            <p>
              I build full-stack platforms, AI tools, and high-impact tech ecosystems. 
              Passionate about architecting robust solutions that solve real-world problems.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col gap-4 sm:flex-row"
          >
            <a
              href="#work"
              className="group relative flex items-center justify-center gap-2 px-8 py-4 font-bold text-white transition-all rounded-full bg-indigo-600 hover:bg-indigo-500 overflow-hidden shadow-lg shadow-indigo-500/20"
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              View My Work
              <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
            </a>
            
            <a
              href="#contact"
              className="flex items-center justify-center gap-2 px-8 py-4 font-bold text-[var(--text-primary)] transition-all border rounded-full bg-[var(--glass-bg)] border-[var(--glass-border)] hover:bg-indigo-500/5 hover:border-indigo-500/30 backdrop-blur-md"
            >
              Get In Touch
            </a>
          </motion.div>
        </motion.div>

        {/* Right Content - Profile Image with Glass Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96 group">
            {/* Ambient Glow */}
            <div className="absolute inset-0 bg-indigo-500/20 blur-[100px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

            {/* Glass Frame for Image */}
            <div className="relative w-full h-full rounded-[3rem] overflow-hidden glass-morphism border-2 border-[var(--glass-border)] p-3 shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]">
              <div className="relative w-full h-full rounded-[2.2rem] overflow-hidden bg-slate-900/50">
                <img 
                  src={heroImage} 
                  alt="Atreya Kamat" 
                  className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-1000"
                />
              </div>
            </div>

            {/* Decorative Floating Elements */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 p-5 rounded-2xl glass-card border border-[var(--glass-border)] shadow-xl z-20"
            >
              <Sparkles className="text-amber-400" size={28} />
            </motion.div>

            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-6 -left-6 p-5 rounded-2xl glass-card border border-[var(--glass-border)] shadow-xl z-20"
            >
              <Code2 className="text-indigo-400" size={28} />
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      {/* Background Blobs Overlay (Subtle) */}
      <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-indigo-500/10 blur-[150px] rounded-full -z-10" />
      <div className="absolute bottom-0 left-0 w-[30%] h-[30%] bg-cyan-500/10 blur-[150px] rounded-full -z-10" />
    </section>
  );
};

export default Hero;
