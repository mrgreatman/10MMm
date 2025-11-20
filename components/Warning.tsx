import React from 'react';
import { AlertTriangle } from 'lucide-react';

export const Warning: React.FC = () => {
  return (
    <section className="bg-danger-red/10 border-y border-danger-red/30 py-12">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-center gap-6 text-center md:text-left">
        <div className="p-4 bg-danger-red/20 rounded-full text-danger-red animate-pulse-slow">
          <AlertTriangle size={32} />
        </div>
        <div>
          <h3 className="text-danger-red font-bold text-xl uppercase tracking-widest mb-2">Warning: High Power Tool</h3>
          <p className="text-gray-400 text-sm max-w-2xl">
            Marketing God provides industrial-grade automation. Abusing this power to spam irrelevant audiences may violate local regulations. We are not responsible for the massive influx of leads you are about to receive. Use responsibly.
          </p>
        </div>
      </div>
    </section>
  );
};