import React from 'react';
import { XCircle, CheckCircle2, Skull, Zap } from 'lucide-react';

export const ProblemSolution: React.FC = () => {
  return (
    <section className="py-32 bg-black border-t border-white/10">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-serif font-black text-white mb-6">
            THE <span className="text-neon-red">OLD WAY</span> VS <span className="text-gold-500">GOD MODE</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-7xl mx-auto">
          
          {/* The Loser Card */}
          <div className="group relative bg-zinc-950 border border-neon-red/30 p-10 flex flex-col shadow-neon-red transition-all hover:border-neon-red/60">
            <div className="absolute inset-0 bg-neon-red/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            
            <div className="relative z-10 flex items-center gap-4 mb-10 border-b border-neon-red/30 pb-6">
              <div className="p-3 bg-black border border-neon-red text-neon-red rounded">
                <Skull size={32} />
              </div>
              <h3 className="text-2xl font-serif font-bold text-neon-red tracking-wider">MANUAL LABOR</h3>
            </div>
            
            <div className="space-y-8 flex-grow relative z-10">
              {[
                "Account bans every 48 hours",
                "Manual copy-pasting nightmare",
                "Generic messages ignored by leads",
                "Zero data tracking or analytics"
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-4 opacity-60 group-hover:opacity-100 transition-opacity">
                  <XCircle className="text-neon-red shrink-0" size={24} />
                  <span className="text-gray-300 font-mono text-lg line-through decoration-neon-red">{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* The Winner Card */}
          <div className="group relative bg-zinc-950 border border-gold-500 p-10 flex flex-col shadow-neon-gold scale-105 z-10">
            <div className="absolute top-0 left-0 w-full h-2 bg-gold-500"></div>
            <div className="absolute inset-0 bg-gold-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            
            <div className="relative z-10 flex items-center gap-4 mb-10 border-b border-gold-500/30 pb-6">
              <div className="p-3 bg-black border border-gold-500 text-gold-500 rounded shadow-[0_0_15px_#FFD700]">
                <Zap size={32} />
              </div>
              <h3 className="text-2xl font-serif font-bold text-gold-500 tracking-wider">AUTOMATION GOD</h3>
            </div>

            <div className="space-y-8 flex-grow relative z-10">
               {[
                "Zero bans (Double Engine Safety)",
                "10M+ Messages / Day automated",
                "Hyper-personalized variables",
                "Live Ledger Real-time Analytics"
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-4">
                  <CheckCircle2 className="text-gold-500 shrink-0 drop-shadow-[0_0_8px_#FFD700]" size={24} />
                  <span className="text-white font-bold text-lg tracking-wide">{text}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-12 pt-6 border-t border-gold-500/30 text-center relative z-10">
               <div className="text-gold-500 font-black text-6xl tracking-tighter drop-shadow-[0_0_15px_rgba(184,134,11,0.5)]">
                 10,000%
               </div>
               <span className="text-white text-xs uppercase tracking-[0.5em] font-bold">Efficiency Increase</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};