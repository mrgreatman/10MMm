import React, { useState, useEffect } from 'react';
import { Menu, X, Diamond } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface HeaderProps {
  scrollY: number;
}

export const Header: React.FC<HeaderProps> = ({ scrollY }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset';
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'Double Engine', href: '#engine' },
    { name: 'Live Demo', href: '#terminal' },
    { name: 'Pricing', href: '#pricing' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrollY > 50 
          ? 'bg-black/90 backdrop-blur-xl border-b border-gold-500/50 shadow-neon-gold py-4' 
          : 'bg-black/50 backdrop-blur-sm border-b border-white/10 py-6'
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center gap-4 group">
          <div className="relative w-10 h-10 flex items-center justify-center bg-gold-500 rounded-sm shadow-[0_0_15px_#B8860B]">
            <Diamond size={24} className="text-black fill-current" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-serif font-black text-white tracking-[0.2em] leading-none group-hover:text-gold-400 transition-colors">
              MARKETING
            </span>
            <span className="text-sm font-serif font-bold text-gold-500 tracking-[0.5em] leading-none">
              GOD
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-bold tracking-[0.15em] uppercase text-gray-300 hover:text-gold-400 transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-gold-500 group-hover:w-full transition-all duration-300 shadow-[0_0_8px_#FFD700]" />
            </a>
          ))}
          
          <a
            href="#pricing"
            className="px-8 py-2.5 bg-gold-500 hover:bg-white text-black font-bold tracking-widest uppercase text-xs transition-all duration-300 shadow-[0_0_20px_rgba(184,134,11,0.4)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]"
          >
             Start Bot
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-gold-500 p-2 border border-gold-500/30 rounded bg-black/80"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween' }}
            className="fixed inset-0 bg-black z-40 flex flex-col items-center justify-center border-l-2 border-gold-500"
          >
             <div className="flex flex-col gap-8 text-center w-full px-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-serif font-bold text-white hover:text-gold-500 transition-colors uppercase tracking-widest border-b border-white/10 pb-4"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#contact" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-4 w-full py-4 bg-gold-500 text-black font-bold uppercase tracking-widest"
              >
                Get Access
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};