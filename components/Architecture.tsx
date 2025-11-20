import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Database, Globe, Lock } from 'lucide-react';

export const Architecture: React.FC = () => {
  const stack = [
    { icon: <Cpu />, title: "Core Engine", val: "Node.js / Rust", desc: "Low-level memory management for blazing speed." },
    { icon: <Globe />, title: "Proxy Network", val: "Residential 4G", desc: "10M+ IP pool rotating every request." },
    { icon: <Database />, title: "Lead Scraper", val: "Chromium Headless", desc: "Undetectable browser fingerprinting." },
    { icon: <Lock />, title: "Encryption", val: "TLS 1.3", desc: "End-to-end protection for your data." },
  ];

  return (
    <section className="py-24 bg-black border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="mb-16 flex items-center gap-4">
          <div className="h-px w-12 bg-gold-500"></div>
          <h2 className="text-sm font-mono text-gold-500 uppercase tracking-widest">SYSTEM_ARCHITECTURE</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stack.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="group p-8 border border-zinc-800 bg-zinc-950 hover:border-gold-500 transition-all duration-300 hover:shadow-neon-gold"
            >
              <div className="text-white mb-6 group-hover:text-gold-500 transition-colors">
                {React.cloneElement(item.icon as React.ReactElement<any>, { size: 40 })}
              </div>
              <h3 className="text-gray-500 text-xs uppercase tracking-widest mb-2">{item.title}</h3>
              <div className="text-2xl font-serif font-bold text-white mb-4">{item.val}</div>
              <p className="text-gray-400 text-sm border-t border-white/10 pt-4 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};