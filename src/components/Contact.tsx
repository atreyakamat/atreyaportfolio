import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => setIsSubmitting(false), 2000);
  };

  return (
    <section id="contact" className="py-32 px-6 max-w-[100rem] mx-auto">
      <div className="glass-card rounded-[60px] overflow-hidden relative border border-[var(--glass-border)] shadow-2xl min-h-[850px] flex items-stretch">
        {/* Background Video Layer for Contact Section */}
        <div className="absolute inset-0 -z-10 opacity-40 dark:opacity-50">
          <video 
            src="/contact.mp4" 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover"
          />
          {/* Subtle gradient to ensure text readability without black masks */}
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--bg-primary)]/20 via-transparent to-[var(--bg-primary)]/20" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 relative z-10 w-full">
          {/* Info Column - Removed Black Background */}
          <div className="p-16 lg:p-28 border-r border-[var(--glass-border)] backdrop-blur-md flex flex-col justify-center relative overflow-hidden">
            {/* Soft glow behind text for legibility */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none" />
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-7xl md:text-8xl text-white mb-10 font-cursive leading-tight relative z-10"
            >
              Let's build <br /> something <span className="text-gradient font-normal italic">epic.</span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-white mb-16 text-2xl max-w-lg leading-relaxed font-medium relative z-10"
            >
              Have a vision? I have the tools. Reach out for collaborations, 
              opportunities, or just to say hi.
            </motion.p>

            <div className="space-y-10 relative z-10">
              <div className="flex items-center gap-8 text-white group">
                <div className="p-5 rounded-3xl bg-indigo-600 border border-indigo-400 shadow-[0_0_30px_rgba(79,70,229,0.5)] transition-all group-hover:scale-110">
                  <Mail size={32} />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm uppercase tracking-[0.3em] text-indigo-400 font-bold mb-1">Email Me</span>
                  <span className="text-2xl font-semibold tracking-tight">atkamat1204@gmail.com</span>
                </div>
              </div>
              
              <div className="flex items-center gap-8 text-white group">
                <div className="p-5 rounded-3xl bg-cyan-600 border border-cyan-400 shadow-[0_0_300px_rgba(8,145,178,0.5)] transition-all group-hover:scale-110">
                  <Phone size={32} />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm uppercase tracking-[0.3em] text-cyan-400 font-bold mb-1">Call Me</span>
                  <span className="text-2xl font-semibold tracking-tight">+91 77440 20601</span>
                </div>
              </div>
            </div>
          </div>

          {/* Form Column - Pure Glass */}
          <div className="p-16 lg:p-28 relative backdrop-blur-2xl bg-white/[0.01] flex flex-col justify-center">
            <form onSubmit={handleSubmit} className="space-y-10 relative z-10 w-full max-w-2xl mx-auto lg:mx-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-4">
                  <label className="text-sm font-bold uppercase tracking-widest text-white ml-2">Name</label>
                  <input 
                    type="text" 
                    required
                    className="w-full px-8 py-6 rounded-[2rem] bg-white/10 border border-white/20 focus:border-indigo-500 focus:bg-white/20 outline-none transition-all text-white text-lg placeholder:text-slate-400 shadow-inner"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-4">
                  <label className="text-sm font-bold uppercase tracking-widest text-white ml-2">Email</label>
                  <input 
                    type="email" 
                    required
                    className="w-full px-8 py-6 rounded-[2rem] bg-white/10 border border-white/20 focus:border-indigo-500 focus:bg-white/20 outline-none transition-all text-white text-lg placeholder:text-slate-400 shadow-inner"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="space-y-4">
                <label className="text-sm font-bold uppercase tracking-widest text-white ml-2">Message</label>
                <textarea 
                  required
                  rows={6}
                  className="w-full px-8 py-6 rounded-[2rem] bg-white/10 border border-white/20 focus:border-indigo-500 focus:bg-white/20 outline-none transition-all text-white text-lg resize-none placeholder:text-slate-400 shadow-inner"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full relative group overflow-hidden px-12 py-7 rounded-[2rem] bg-indigo-600 text-white text-xl font-bold transition-all hover:bg-indigo-500 disabled:opacity-50 shadow-[0_20px_50px_rgba(79,70,229,0.5)] active:scale-[0.98]"
              >
                <div className={`absolute inset-0 bg-white/20 transition-transform duration-500 -translate-x-full group-hover:translate-x-full ${isSubmitting ? 'animate-shimmer' : ''}`} />
                <span className="relative flex items-center justify-center gap-4">
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  {!isSubmitting && <Send size={26} />}
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
