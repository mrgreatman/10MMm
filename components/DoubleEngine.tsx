import React from 'react';
import { Scan, ShieldCheck, Cpu } from 'lucide-react';

export const DoubleEngine: React.FC = () => {
  return (
    <section id="engine" className="py-32 bg-black relative overflow-hidden border-t border-white/10">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-4">
            DUAL <span className="text-neon-blue text-glow">ENGINE</span> CORE
          </h2>
          <p className="text-gray-400 uppercase tracking-widest max-w-2xl mx-auto">
            Two systems working in parallel. One hunts, the other protects.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          
          {/* Engine 1: Deep Search */}
          <div className="relative bg-zinc-950 border border-neon-blue/50 p-12 shadow-neon-blue group overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-neon-blue shadow-[0_0_15px_#00F0FF]"></div>
            
            <div className="flex items-start justify-between mb-8">
              <div className="p-4 bg-black border border-neon-blue text-neon-blue rounded-lg shadow-[0_0_15px_#00F0FF]">
                <Scan size={32} />
              </div>
              <div className="text-right">
                 <h3 className="text-2xl font-bold text-white uppercase tracking-wider">Deep Search</h3>
                 <div className="text-neon-blue text-xs font-mono mt-1">ENGINE_A :: ACTIVE</div>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed border-l-2 border-neon-blue/20 pl-4 font-light">
              Our proprietary scanning algorithm digs deeper than standard scrapers. It identifies leads based on behavioral patterns, not just keywords.
            </p>

            <ul className="space-y-4">
              {['Metadata Analysis', 'Sentiment Scanning', 'Activity Validation'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-white text-sm font-mono">
                  <div className="w-2 h-2 bg-neon-blue shadow-[0_0_5px_#00F0FF]"></div> {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Engine 2: Safety */}
          <div className="relative bg-zinc-950 border border-gold-500/50 p-12 shadow-neon-gold group overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gold-500 shadow-[0_0_15px_#B8860B]"></div>

            <div className="flex items-start justify-between mb-8">
              <div className="p-4 bg-black border border-gold-500 text-gold-500 rounded-lg shadow-[0_0_15px_#B8860B]">
                <ShieldCheck size={32} />
              </div>
               <div className="text-right">
                 <h3 className="text-2xl font-bold text-white uppercase tracking-wider">Safe Guard</h3>
                 <div className="text-gold-500 text-xs font-mono mt-1">ENGINE_B :: ACTIVE</div>
              </div>
            </div>

            <p className="text-gray-300 mb-6 leading-relaxed border-l-2 border-gold-500/20 pl-4 font-light">
              While Engine A hunts, Engine B mimics human latency and encrypts your footprint. The Double Engine architecture ensures 0% ban rate.
            </p>

            <ul className="space-y-4">
              {['Human Latency Emulation', 'Fingerprint Masking', 'Session Isolation'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-white text-sm font-mono">
                  <div className="w-2 h-2 bg-gold-500 shadow-[0_0_5px_#B8860B]"></div> {item}
                </li>
              ))}
            </ul>
          </div>

        </div>
        
        {/* Connection Line */}
        <div className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
           <div className="p-4 bg-black border border-white/20 rounded-full animate-pulse shadow-2xl">
             <Cpu size={24} className="text-white" />
           </div>
        </div>

      </div>
    </section>
  );
};