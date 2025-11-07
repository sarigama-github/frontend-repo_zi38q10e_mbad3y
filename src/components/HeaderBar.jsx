import React from 'react';
import { User } from 'lucide-react';

const HeaderBar = () => {
  return (
    <header className="w-full px-6 pt-5 pb-3 flex items-center justify-between bg-gradient-to-b from-black to-transparent">
      <div>
        <h2 className="text-white text-xl font-semibold tracking-tight">Your Digital Twin</h2>
        <p className="text-white/60 text-xs">Track your health in real time</p>
      </div>
      <button aria-label="Profile" className="relative inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white hover:border-[#D7FA00]/40 transition-colors">
        <User size={18} />
        <span className="pointer-events-none absolute inset-0 rounded-full" style={{ boxShadow: '0 0 26px 2px rgba(215,250,0,0.25)', opacity: 0 }} />
      </button>
    </header>
  );
};

export default HeaderBar;
