import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const TerminalDemo: React.FC = () => {
  const [lines, setLines] = useState<string[]>([]);
  
  useEffect(() => {
    const codeLines = [
      "> INITIALIZING SESSION...",
      "> CONNECTING TO PROXY SERVER [192.168.X.X]... SUCCESS",
      "> TARGET: UNITED STATES / E-COMMERCE",
      "> FETCHING LEADS DATABASE... 14,020 FOUND",
      "> BYPASSING FIREWALL... DONE",
      "> STARTING MESSAGE SEQUENCE [THREAD 1-32]",
      "> SENT: 140",
      "> SENT: 520",
      "> SENT: 1,402... [CONTINUING]",
      "> AUTO-REPLY DETECTED. AI RESPONDING...",
    ];

    let currentLine = 0;
    const interval = setInterval(() => {
      if (currentLine < codeLines.length) {
        setLines(prev => [...prev, codeLines[currentLine]]);
        currentLine++;
      } else {
        setLines([]);
        currentLine = 0;
      }
    }, 800);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="terminal" className="py-32 bg-casino-charcoal overflow-hidden">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
        
        <div className="lg:w-1/2">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-white">
            THE ENGINE <br />
            <span className="text-gold-500">NEVER SLEEPS</span>
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-8">
            Under the hood lies a complex matrix of rotating proxies, human-behavior mimicry algorithms, and AI-driven response handlers.
          </p>
          <div className="flex gap-4">
            <div className="px-6 py-3 border border-white/10 rounded-sm">
              <div className="text-2xl font-bold text-white mb-1">0.02s</div>
              <div className="text-xs text-gray-500 uppercase">Latency</div>
            </div>
            <div className="px-6 py-3 border border-white/10 rounded-sm">
              <div className="text-2xl font-bold text-gold-500 mb-1">AES-256</div>
              <div className="text-xs text-gray-500 uppercase">Encryption</div>
            </div>
          </div>
        </div>

        <div className="lg:w-1/2 w-full">
          <div className="w-full bg-[#0c0c0c] rounded-lg border border-white/10 shadow-2xl overflow-hidden relative">
            {/* Mac Window Controls */}
            <div className="bg-[#1a1a1a] px-4 py-2 flex items-center gap-2 border-b border-white/5">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
              <div className="ml-auto text-xs text-gray-600 font-mono">bot_instance_01.exe</div>
            </div>
            
            {/* Terminal Content */}
            <div className="p-6 font-mono text-xs md:text-sm h-[300px] flex flex-col justify-end">
              {lines.map((line, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-green-500 mb-1"
                >
                  <span className="text-gray-600 mr-2">{(new Date()).toLocaleTimeString()}</span>
                  {line}
                </motion.div>
              ))}
              <motion.div 
                animate={{ opacity: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="w-2 h-4 bg-green-500 mt-1"
              />
            </div>
            
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#0c0c0c] via-transparent to-transparent h-20 bottom-0" />
          </div>
        </div>

      </div>
    </section>
  );
};