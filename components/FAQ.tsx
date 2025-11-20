import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    { q: "Is this legal?", a: "We provide a tool for automation. How you use it depends on the laws of your jurisdiction. We adhere to standard rate limits to ensure platform safety." },
    { q: "Will my account get banned?", a: "Our 'Ghost Protocol' technology is specifically designed to prevent bans by mimicking human behavior and rotating digital fingerprints." },
    { q: "Can I run this on a Mac?", a: "Yes, the 'Marketing God' bot is cloud-based. You can access the dashboard from any device, including Mac, Windows, or Mobile." },
    { q: "What happens after I pay?", a: "You will receive an instant email with your license key and access to the members portal where you can download the software." }
  ];

  return (
    <section id="faq" className="py-24 bg-black border-t border-white/10">
      <div className="container mx-auto px-6 max-w-3xl">
        <h2 className="text-3xl font-serif font-bold text-center text-white mb-12">HOUSE <span className="text-gold-500">RULES</span></h2>
        
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border border-white/10 bg-zinc-950 transition-colors">
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full p-6 flex justify-between items-center text-left hover:bg-white/5 transition-colors"
              >
                <span className="font-serif font-bold text-white text-lg">{faq.q}</span>
                {openIndex === idx ? <Minus size={20} className="text-gold-500" /> : <Plus size={20} className="text-gold-500" />}
              </button>
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-gray-400 text-base leading-relaxed border-t border-white/5">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};