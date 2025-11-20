import React from 'react';
import { motion } from 'framer-motion';

export const Stats: React.FC = () => {
  const stats = [
    { value: "10,420,193", label: "Messages Sent Today" },
    { value: "99.8%", label: "Delivery Rate" },
    { value: "195", label: "Countries Active" },
    { value: "$0.00", label: "Cost Per Lead" }
  ];

  return (
    <section className="py-12 bg-zinc-950 border-y border-gold-500/30 relative z-20 shadow-neon-gold">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center relative group">
               {idx !== 3 && <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-12 bg-white/10" />}
               
               <motion.div
                 initial={{ opacity: 0, scale: 0.5 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 transition={{ delay: idx * 0.1, type: "spring" }}
                 viewport={{ once: true }}
                 className="font-serif font-black text-2xl md:text-4xl text-white mb-2 group-hover:text-gold-400 transition-colors"
               >
                 {stat.value}
               </motion.div>
               <div className="text-gold-500/80 text-xs font-bold uppercase tracking-[0.15em]">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};