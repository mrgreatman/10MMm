import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, ArrowRight } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-black relative border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-serif font-bold text-white mb-6">
              READY TO <br />
              <span className="text-gold-500">CASH OUT?</span>
            </h2>
            <p className="text-gray-400 text-lg mb-10 font-light leading-relaxed">
              Access is limited. We maintain a strict ratio of users to ensure server integrity. Secure your license before the doors close.
            </p>
            <div className="flex items-center gap-2 text-gold-500 font-mono text-sm bg-zinc-950 border border-gold-500/30 p-3 w-fit">
               <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
               OPERATORS ONLINE NOW
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <a href="mailto:support@marketinggod.com" className="group block p-8 bg-zinc-950 border border-zinc-800 hover:border-gold-500 transition-colors duration-500 relative overflow-hidden shadow-lg">
               <div className="absolute inset-0 bg-gold-500/5 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
               <div className="relative z-10 flex items-center justify-between">
                 <div className="flex items-center gap-4">
                   <div className="w-12 h-12 bg-black border border-zinc-700 rounded-full flex items-center justify-center text-gold-500 group-hover:shadow-neon-gold transition-all">
                     <Mail size={20} />
                   </div>
                   <div>
                     <div className="text-gray-500 text-xs uppercase tracking-wider mb-1">Email Support</div>
                     <div className="text-xl font-serif text-white">support@marketinggod.com</div>
                   </div>
                 </div>
                 <ArrowRight className="text-zinc-700 group-hover:text-gold-500 transition-colors" />
               </div>
            </a>

            <a href="https://t.me/marketinggod" className="group block p-8 bg-zinc-950 border border-zinc-800 hover:border-[#0088cc] transition-colors duration-500 relative overflow-hidden shadow-lg">
               <div className="absolute inset-0 bg-[#0088cc]/5 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
               <div className="relative z-10 flex items-center justify-between">
                 <div className="flex items-center gap-4">
                   <div className="w-12 h-12 bg-black border border-zinc-700 rounded-full flex items-center justify-center text-[#0088cc] group-hover:shadow-neon-blue transition-all">
                     <Send size={20} />
                   </div>
                   <div>
                     <div className="text-gray-500 text-xs uppercase tracking-wider mb-1">Direct Message</div>
                     <div className="text-xl font-serif text-white">@marketinggod_bot</div>
                   </div>
                 </div>
                 <ArrowRight className="text-zinc-700 group-hover:text-[#0088cc] transition-colors" />
               </div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};