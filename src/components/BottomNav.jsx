import React from 'react';
import { Home, BarChart2, User, MessageCircle } from 'lucide-react';

const NavItem = ({ icon: Icon, label, active }) => (
  <button
    className={`flex flex-col items-center justify-center gap-1 px-3 py-2 text-xs ${
      active ? 'text-[#D7FA00]' : 'text-white/60 hover:text-white'
    }`}
    aria-pressed={active}
  >
    <Icon size={20} />
    <span className="leading-none">{label}</span>
  </button>
);

const BottomNav = () => {
  return (
    <nav className="fixed inset-x-0 bottom-4 z-20 mx-auto w-[92%] max-w-3xl rounded-2xl border border-white/10 bg-black/60 px-2 py-2 backdrop-blur-xl">
      <div className="grid grid-cols-5">
        <NavItem icon={Home} label="Home" active />
        <NavItem icon={BarChart2} label="Performance" />
        <button className="-mt-8 mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#D7FA00] text-black shadow-[0_10px_40px_rgba(215,250,0,0.5)]">
          <span className="text-xl font-semibold">+</span>
        </button>
        <NavItem icon={User} label="Body" />
        <NavItem icon={MessageCircle} label="Coach" />
      </div>
    </nav>
  );
};

export default BottomNav;
