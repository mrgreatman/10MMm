import React from 'react';
import { motion } from 'framer-motion';

export const GlobalNetwork: React.FC = () => {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
       <div className="container mx-auto px-6 lg:px-12 relative z-10">
         {/* Main Container - Solid Background */}
         <div className="bg-zinc-950 border border-neon-blue/30 p-8 lg:p-16 flex flex-col lg:flex-row items-center gap-16 shadow-neon-blue relative overflow-hidden">
           
           {/* Background Grid inside card */}
           <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>

           <div className="lg:w-1/2 relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="relative">
                  <div className="w-3 h-3 bg-neon-blue rounded-full animate-ping absolute opacity-75"></div>
                  <div className="w-3 h-3 bg-neon-blue rounded-full relative"></div>
                </div>
                <span className="text-neon-blue text-sm font-mono tracking-widest">LIVE SERVER STATUS</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
                GLOBAL <span className="text-neon-blue text-glow">DOMINANCE</span>
              </h2>
              <p className="text-gray-300 mb-8 text-lg leading-relaxed font-light">
                Our server nodes are distributed across 4 continents. The bot automatically routes traffic through the path of least resistance, ensuring 99.9% uptime and bypass capabilities.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {['North America', 'Europe', 'Asia Pacific', 'Middle East'].map((region, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 bg-black border border-zinc-800 hover:border-neon-blue/50 transition-colors">
                    <div className="w-1.5 h-1.5 bg-neon-blue rounded-full"></div>
                    <span className="text-white font-mono text-sm uppercase">{region}</span>
                  </div>
                ))}
              </div>
           </div>

           {/* Radar Visual */}
           <div className="lg:w-1/2 relative flex justify-center items-center h-[400px] w-full bg-black rounded-full border border-neon-blue/20 shadow-[inset_0_0_50px_rgba(0,240,255,0.1)]">
              <div className="absolute w-[300px] h-[300px] md:w-[400px] md:h-[400px] border border-neon-blue/10 rounded-full"></div>
              <div className="absolute w-[200px] h-[200px] md:w-[250px] md:h-[250px] border border-neon-blue/10 rounded-full"></div>
              <div className="absolute w-[100px] h-[100px] border border-neon-blue/10 rounded-full"></div>
              <div className="absolute w-full h-[1px] bg-neon-blue/10 top-1/2 left-0"></div>
              <div className="absolute w-[1px] h-full bg-neon-blue/10 left-1/2 top-0"></div>
              
              <div className="absolute w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full animate-radar bg-[conic-gradient(from_0deg,transparent_0_300deg,rgba(0,240,255,0.2)_360deg)]"></div>
              
              {/* Blips */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-neon-blue rounded-full shadow-[0_0_10px_#00F0FF]"
                  animate={{ opacity: [0, 1, 0], scale: [1, 1.5, 1] }}
                  transition={{ duration: 3, delay: i * 0.7, repeat: Infinity }}
                  style={{
                    top: `${20 + Math.random() * 60}%`,
                    left: `${20 + Math.random() * 60}%`
                  }}
                />
              ))}

              <div className="absolute text-neon-blue font-mono text-xs bg-black px-3 py-1 border border-neon-blue/50 shadow-neon-blue bottom-10 right-10">
                SCANNING_NODES...
              </div>
           </div>

         </div>
       </div>
    </section>
  );
};