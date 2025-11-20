import React from 'react';
import { motion } from 'framer-motion';
import { Check, Crown, Zap, Shield } from 'lucide-react';

const plans = [
  {
    name: 'SOLDIER',
    price: 19.90,
    oldPrice: 29.90,
    sessions: '8',
    icon: <Shield className="w-6 h-6" />,
    features: [
      '8 Parallel Sessions',
      '10M Daily Cap',
      'Basic Anti-Ban',
      'Email Support',
      'Single Device'
    ],
    highlight: false
  },
  {
    name: 'BOSS',
    price: 49.90,
    oldPrice: 79.90,
    sessions: '32',
    icon: <Crown className="w-6 h-6" />,
    features: [
      '32 Parallel Sessions',
      'Uncapped Speed',
      'Ghost Protocol V2',
      'Priority Telegram Support',
      '3 Devices',
      'Analytics Dashboard'
    ],
    highlight: true
  },
  {
    name: 'GODFATHER',
    price: 99.90,
    oldPrice: 169.90,
    sessions: '∞',
    icon: <Zap className="w-6 h-6" />,
    features: [
      'Unlimited Sessions',
      'Private Server Node',
      'Manager On-Call',
      'White Label Rights',
      'Source Code Access',
      'Custom API Integrations'
    ],
    highlight: false
  }
];

export const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-32 bg-black border-t border-white/10 relative overflow-hidden">
      {/* Background sheen */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(184,134,11,0.15),transparent_70%)] pointer-events-none"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-7xl font-serif font-black text-white mb-6">
            THE <span className="text-gold-500 text-glow">BUY-IN</span>
          </h2>
          <p className="text-gray-400 text-lg uppercase tracking-[0.3em] font-bold">Select Your Power Level</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center max-w-7xl mx-auto">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className={`relative group ${plan.highlight ? 'lg:-mt-8 lg:mb-8 z-20' : 'z-10'}`}
            >
              {/* Card Container */}
              <div className={`
                relative overflow-hidden h-full flex flex-col
                ${plan.highlight 
                  ? 'bg-zinc-950 border-2 border-gold-500 shadow-[0_0_40px_rgba(184,134,11,0.2)]' 
                  : 'bg-zinc-950 border border-zinc-800 hover:border-white/30'}
              `}>
                
                {/* Header Section */}
                <div className={`p-8 border-b ${plan.highlight ? 'bg-gold-500/10 border-gold-500/50' : 'bg-white/5 border-white/10'}`}>
                  <div className="flex justify-between items-center mb-4">
                    <div className={`p-3 border ${plan.highlight ? 'bg-black border-gold-500 text-gold-500' : 'bg-black border-zinc-700 text-gray-400'}`}>
                      {plan.icon}
                    </div>
                    <h3 className={`font-serif font-bold text-2xl tracking-widest ${plan.highlight ? 'text-gold-400' : 'text-white'}`}>
                      {plan.name}
                    </h3>
                  </div>
                  
                  <div className="flex items-end gap-2 mt-6">
                     <span className="text-3xl text-gray-500 font-serif">$</span>
                     <span className="text-6xl font-black text-white leading-none">{Math.floor(plan.price)}</span>
                     <div className="flex flex-col mb-1">
                        <span className="text-xl text-white font-bold">.90</span>
                        <span className="text-[10px] uppercase tracking-widest text-gray-500">/ Month</span>
                     </div>
                  </div>
                  <div className="mt-2 text-sm text-gray-500 line-through decoration-red-500">
                    Was ${plan.oldPrice}
                  </div>
                </div>

                {/* Stats Strip */}
                <div className={`py-4 px-8 flex justify-between items-center border-b ${plan.highlight ? 'bg-gold-500 text-black border-gold-500' : 'bg-black border-white/10'}`}>
                   <span className={`text-xs uppercase tracking-widest font-bold ${plan.highlight ? 'text-black' : 'text-gray-500'}`}>Throughput</span>
                   <span className={`font-bold ${plan.highlight ? 'text-black' : 'text-white'}`}>{plan.sessions} SESSIONS</span>
                </div>

                {/* Features */}
                <div className="p-8 flex-grow bg-black/20">
                  <ul className="space-y-5">
                    {plan.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-4">
                        <div className={`mt-1 w-4 h-4 rounded-sm flex items-center justify-center border ${plan.highlight ? 'border-gold-500 bg-gold-500/20 text-gold-500' : 'border-zinc-700 bg-zinc-800 text-gray-400'}`}>
                          <Check size={10} />
                        </div>
                        <span className={`text-sm font-medium ${plan.highlight ? 'text-white' : 'text-gray-400'}`}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Button */}
                <div className="p-8 pt-0">
                  <button className={`w-full py-5 font-bold tracking-[0.25em] uppercase text-xs transition-all duration-300
                    ${plan.highlight 
                      ? 'bg-gradient-to-r from-gold-400 to-gold-600 text-black hover:shadow-[0_0_20px_#FFD700]' 
                      : 'bg-zinc-800 text-white border border-zinc-700 hover:bg-white hover:text-black'}
                  `}>
                    Acquire License
                  </button>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};