import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-zinc-900 py-8">
      <div className="container mx-auto px-6 text-center">
        <p className="text-gray-600 text-sm">
          &copy; {new Date().getFullYear()} Marketing God. All rights reserved. 
          <span className="mx-2 text-zinc-800">|</span>
          <span className="text-gold-500/50">The House Always Wins.</span>
        </p>
      </div>
    </footer>
  );
};