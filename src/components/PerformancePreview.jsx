import React from 'react';

const Spark = () => (
  <span className="inline-block h-2 w-2 rounded-full bg-[#D7FA00] shadow-[0_0_20px_6px_rgba(215,250,0,0.6)]" />
);

const PerformancePreview = () => {
  return (
    <section className="mx-auto mt-8 max-w-5xl px-6">
      <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-5">
        <div className="flex items-center justify-between">
          <h3 className="text-white text-lg font-semibold">Performance</h3>
          <div className="flex items-center gap-2 text-xs text-white/60">
            <Spark />
            <span>Predictive 7‑day trend</span>
          </div>
        </div>

        {/* Simple inline chart placeholder using CSS gradient to avoid extra deps */}
        <div className="mt-4 h-28 w-full rounded-lg bg-[linear-gradient(180deg,rgba(215,250,0,0.25),rgba(215,250,0,0)_60%),radial-gradient(100%_120%_at_0%_100%,rgba(215,250,0,0.3),rgba(215,250,0,0)_60%),radial-gradient(120%_100%_at_100%_100%,rgba(255,255,255,0.12),rgba(255,255,255,0)_60%)]" />

        <div className="mt-4 grid grid-cols-3 gap-3 text-center">
          <div className="rounded-xl border border-white/10 p-3">
            <p className="text-[10px] uppercase tracking-widest text-white/50">Weekly Load</p>
            <p className="text-white text-lg font-semibold">+12%</p>
          </div>
          <div className="rounded-xl border border-white/10 p-3">
            <p className="text-[10px] uppercase tracking-widest text-white/50">Recovery</p>
            <p className="text-white text-lg font-semibold">High</p>
          </div>
          <div className="rounded-xl border border-white/10 p-3">
            <p className="text-[10px] uppercase tracking-widest text-white/50">Sleep Score</p>
            <p className="text-white text-lg font-semibold">88</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PerformancePreview;
