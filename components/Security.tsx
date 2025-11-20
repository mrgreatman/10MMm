import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Lock, Fingerprint, EyeOff } from 'lucide-react';

export const Security: React.FC = () => {
  return (
    <section id="security" className="py-32 bg-black relative border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-8">
              UNTOUCHABLE <span className="text-gold-500 text-glow">SECURITY</span>
            </h2>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed font-light">
              In the world of mass marketing, staying alive is half the battle. Our "Ghost Protocol" wraps every request in military-grade encryption and rotates your digital fingerprint every 0.5 seconds.
            </p>
            
            <ul className="space-y-4">
              {[
                "AES-256 Encryption",
                "Residential Proxy Rotation",
                "Human Behavior Emulation",
                "Canvas Fingerprint Spoofing"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-white font-mono text-sm bg-zinc-900 border border-white/10 p-3">
                  <div className="w-1.5 h-1.5 bg-gold-500 rounded-full shadow-[0_0_5px_#B8860B]" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="relative"
          >
            <div className="absolute inset-0 bg-gold-500/5 blur-3xl rounded-full" />
            <div className="relative grid grid-cols-2 gap-4">
              {[
                 { icon: <ShieldCheck />, label: "Anti-Ban" },
                 { icon: <Fingerprint />, label: "No Trace" },
                 { icon: <Lock />, label: "Encrypted" },
                 { icon: <EyeOff />, label: "Stealth Mode" }
              ].map((item, idx) => (
                <div key={idx} className="aspect-square bg-zinc-950 border border-zinc-800 flex flex-col items-center justify-center text-gold-500 hover:border-gold-500 hover:shadow-neon-gold transition-all cursor-default group">
                   {React.cloneElement(item.icon, { size: 48, className: "mb-4 group-hover:scale-110 transition-transform" })}
                   <span className="text-xs font-bold uppercase tracking-wider text-white">{item.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};