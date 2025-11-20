import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Target, Shield, Cpu, BarChart3, Zap } from 'lucide-react';

const features = [
  {
    icon: <Globe />,
    title: 'Global Domination',
    desc: 'Select any country. The bot adapts to local protocols instantly.'
  },
  {
    icon: <Zap />,
    title: '10M+ Daily Throughput',
    desc: 'Uncapped speed. Send millions of messages while you sleep.'
  },
  {
    icon: <Target />,
    title: 'Sniper Targeting',
    desc: 'Input a keyword. We scrape, verify, and engage the exact audience.'
  },
  {
    icon: <Cpu />,
    title: 'Autonomous AI',
    desc: 'Self-healing sessions that recover automatically from interruptions.'
  },
  {
    icon: <Shield />,
    title: 'Ghost Protocol',
    desc: 'Advanced anti-fingerprinting makes your sessions undetectable.'
  },
  {
    icon: <BarChart3 />,
    title: 'Live Ledger',
    desc: 'Watch your success rate in real-time with casino-grade analytics.'
  }
];

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-32 bg-black relative">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="mb-20 flex items-end gap-6 border-b border-white/10 pb-8">
          <h2 className="text-5xl md:text-7xl font-serif font-bold text-white leading-none">
            THE <span className="text-stroke-gold text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">ARSENAL</span>
          </h2>
          <p className="hidden md:block text-gold-500 font-mono text-sm pb-2">/// WEAPONS_OF_MASS_DISTRIBUTION</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="group relative bg-zinc-950 border border-zinc-800 p-8 hover:border-gold-500 transition-all duration-300 hover:shadow-neon-gold overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                 {React.cloneElement(feature.icon as React.ReactElement<any>, { size: 100 })}
              </div>
              
              <div className="relative z-10">
                <div className="w-14 h-14 bg-black border border-gold-500/30 rounded-lg flex items-center justify-center text-gold-500 mb-6 group-hover:bg-gold-500 group-hover:text-black transition-all duration-300">
                  {React.cloneElement(feature.icon as React.ReactElement<any>, { size: 28 })}
                </div>
                
                <h3 className="text-xl font-serif font-bold text-white mb-4 group-hover:text-gold-400 transition-colors uppercase tracking-wider">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm font-medium">
                  {feature.desc}
                </p>
              </div>
              
              {/* Corner Accents */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-zinc-900 group-hover:bg-gold-500 transition-colors duration-300"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};