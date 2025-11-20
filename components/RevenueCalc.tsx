import React, { useState } from 'react';

export const RevenueCalc: React.FC = () => {
  const [messages, setMessages] = useState(5000);
  const conversionRate = 0.02; // 2%
  const productPrice = 49;

  return (
    <section className="py-24 bg-zinc-950 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto bg-black border border-gold-500/30 p-8 md:p-12 rounded-2xl shadow-[0_0_50px_rgba(184,134,11,0.1)]">
          <h2 className="text-3xl font-serif font-bold text-center mb-12 text-white">
            PROFIT <span className="text-gold-500">SIMULATOR</span>
          </h2>

          <div className="space-y-12">
            <div>
              <div className="flex justify-between text-gray-400 mb-4 text-sm uppercase tracking-widest">
                <span>Daily Messages</span>
                <span className="text-white font-bold">{messages.toLocaleString()}</span>
              </div>
              <input 
                type="range" 
                min="1000" 
                max="100000" 
                step="1000" 
                value={messages}
                onChange={(e) => setMessages(parseInt(e.target.value))}
                className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-gold-500"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="p-4 bg-zinc-900 rounded-lg">
                <div className="text-gray-500 text-xs uppercase mb-2">Daily Traffic</div>
                <div className="text-2xl font-bold text-white">{messages.toLocaleString()}</div>
              </div>
              <div className="p-4 bg-zinc-900 rounded-lg">
                <div className="text-gray-500 text-xs uppercase mb-2">Est. Conversions (2%)</div>
                <div className="text-2xl font-bold text-tech-cyan">{~~(messages * conversionRate)}</div>
              </div>
              <div className="p-4 bg-gold-900/20 border border-gold-500/30 rounded-lg">
                <div className="text-gold-500 text-xs uppercase mb-2">Monthly Revenue</div>
                <div className="text-3xl font-serif font-bold text-white">
                  ${(messages * conversionRate * productPrice * 30).toLocaleString()}
                </div>
              </div>
            </div>
            
            <p className="text-center text-gray-600 text-xs italic">
              *Based on average user data. Results may vary depending on your offer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};