import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const reviews = [
    { name: "Alex M.", role: "E-com Owner", text: "Generated $40k in my first week. The targeting is scary accurate." },
    { name: "Sarah K.", role: "Affiliate Marketer", text: "I used to spend 6 hours a day messaging. Now I spend 2 minutes setting up the bot." },
    { name: "James R.", role: "SaaS Founder", text: "The ROI is insane. If you aren't using this, you're losing money." }
  ];

  return (
    <section className="py-24 bg-zinc-950 border-y border-white/10 overflow-hidden">
      <div className="container mx-auto px-6">
        <h2 className="text-center text-3xl font-serif font-bold text-white mb-16">THE <span className="text-gold-500">HIGH ROLLERS</span> CLUB</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.2 }}
              className="relative p-10 bg-black border border-zinc-800 hover:border-gold-500 transition-all duration-500 group shadow-xl flex flex-col items-center text-center"
            >
              <div className="flex gap-1 mb-6 text-gold-500">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="#b48811" />)}
              </div>
              <p className="text-gray-200 italic mb-8 text-lg font-light leading-relaxed">"{review.text}"</p>
              <div className="mt-auto">
                <div className="font-serif font-bold text-white text-xl mb-1">{review.name}</div>
                <div className="text-xs text-gold-500 uppercase tracking-widest">{review.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};