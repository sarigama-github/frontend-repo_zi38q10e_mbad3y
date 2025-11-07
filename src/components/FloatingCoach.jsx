import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

const FloatingCoach = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      {/* Coach Orb Button */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-24 right-5 z-30 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#D7FA00] text-black shadow-[0_10px_40px_rgba(215,250,0,0.65)]"
        aria-label="Open AI Coach"
      >
        <MessageCircle />
      </button>

      {open && (
        <div className="fixed inset-0 z-40 flex items-end sm:items-center justify-center bg-black/60">
          <div className="w-full sm:max-w-md rounded-t-2xl sm:rounded-2xl border border-white/10 bg-black p-4">
            <div className="flex items-center justify-between">
              <div className="inline-flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-[#D7FA00] shadow-[0_0_20px_6px_rgba(215,250,0,0.7)]" />
                <p className="text-white font-medium">AI Coach</p>
              </div>
              <button onClick={() => setOpen(false)} className="text-white/70 hover:text-white" aria-label="Close">
                <X />
              </button>
            </div>
            <div className="mt-3 rounded-xl border border-white/10 bg-white/5 p-3 text-sm text-white/80">
              Hey, your hydration is down 12%. Want a recovery plan?
            </div>
            <div className="mt-3 flex gap-2">
              <button className="flex-1 rounded-full bg-white text-black px-4 py-2 text-sm font-medium">Yes, show plan</button>
              <button className="flex-1 rounded-full border border-white/20 px-4 py-2 text-sm text-white/80">Maybe later</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FloatingCoach;
