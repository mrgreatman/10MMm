import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { ProblemSolution } from './components/ProblemSolution';
import { DoubleEngine } from './components/DoubleEngine';
import { Features } from './components/Features';
import { TerminalDemo } from './components/TerminalDemo';
import { GlobalNetwork } from './components/GlobalNetwork';
import { Architecture } from './components/Architecture';
import { RevenueCalc } from './components/RevenueCalc';
import { Security } from './components/Security';
import { Testimonials } from './components/Testimonials';
import { Pricing } from './components/Pricing';
import { Warning } from './components/Warning';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black font-sans text-white selection:bg-gold-500 selection:text-black">
      {/* Fixed Background Grid - Subtle */}
      <div className="fixed inset-0 bg-grid-pattern bg-[size:50px_50px] opacity-[0.1] pointer-events-none z-0"></div>
      
      <div className="relative z-10 flex flex-col gap-0">
        <Header scrollY={scrollY} />
        <Hero />
        <Stats />
        <ProblemSolution />
        <DoubleEngine />
        <RevenueCalc />
        <Features />
        <TerminalDemo />
        <GlobalNetwork />
        <Architecture />
        <Security />
        <Pricing />
        <Testimonials />
        <Warning />
        <FAQ />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;