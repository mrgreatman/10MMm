import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-24">
      {/* Neon Grid Floor */}
      <div className="absolute bottom-0 left-0 w-full h-[60vh] bg-[linear-gradient(to_top,rgba(184,134,11,0.15)_1px,transparent_1px),linear-gradient(to_right,rgba(184,134,11,0.15)_1px,transparent_1px)] bg-[size:3rem_3rem] [transform:perspective(1000px)_rotateX(60deg)] opacity-40 pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-3 px-6 py-2 bg-black border border-gold-500 shadow-neon-gold rounded-full mb-10"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>
          <span className="text-gold-400 text-sm font-bold tracking-[0.3em] uppercase">System Online v3.0</span>
        </motion.div>

        <h1 className="font-serif font-black text-6xl md:text-8xl lg:text-[9rem] leading-[0.9] text-white mb-8 tracking-tighter drop-shadow-2xl">
          MARKETING <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-gold-300 via-gold-500 to-gold-800 drop-shadow-[0_0_30px_rgba(184,134,11,0.3)]">
            GOD
          </span>
        </h1>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="max-w-3xl mx-auto bg-zinc-950/90 border border-white/10 p-8 rounded-xl mb-12 shadow-2xl relative"
        >
          {/* Corner Accents */}
          <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-gold-500"></div>
          <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-gold-500"></div>
          <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-gold-500"></div>
          <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-gold-500"></div>

          <p className="text-gray-200 text-xl md:text-2xl font-light leading-relaxed">
            The world's first <span className="text-gold-400 font-bold">"Double Engine"</span> automation tool. 
            Deep scan millions of leads while our safety core keeps your accounts invincible.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col md:flex-row gap-6 justify-center items-center"
        >
          <a href="#pricing" className="w-full md:w-auto px-12 py-6 bg-gold-500 hover:bg-white text-black font-black text-sm tracking-[0.2em] uppercase transition-all shadow-[0_0_40px_rgba(184,134,11,0.5)] hover:shadow-[0_0_60px_rgba(255,255,255,0.5)] clip-path-button border-2 border-transparent">
            Initialize Bot
          </a>
          
          <a href="#terminal" className="w-full md:w-auto flex items-center justify-center gap-3 px-12 py-6 border border-white/30 bg-black/50 hover:bg-white/10 hover:border-gold-500 text-white uppercase tracking-[0.2em] text-sm font-bold transition-all backdrop-blur-sm">
            <Play size={16} className="fill-white" />
            Live Demo
          </a>
        </motion.div>
      </div>
    </section>
  );
};