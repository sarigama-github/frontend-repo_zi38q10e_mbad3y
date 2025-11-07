import React, { useState } from 'react';
import Spline from '@splinetool/react-spline';

// The Spline scene provides a premium neon biotech feel as a holographic backdrop.
// We layer floating stat cards over it with glassmorphism and glow accents.

const StatCard = ({ label, value, icon, glow }) => (
  <div
    className={`select-none backdrop-blur-md rounded-2xl border px-3 py-2 min-w-[120px] shadow-lg transition-transform active:scale-[0.98] ${
      glow ? 'border-[#D7FA00]/50 bg-black/30' : 'border-white/10 bg-white/5'
    }`}
    style={glow ? { boxShadow: '0 0 30px 6px rgba(215,250,0,0.35)' } : {}}
  >
    <div className="flex items-center gap-2 text-xs text-white/70">
      <span className="text-base">{icon}</span>
      <span className="uppercase tracking-widest">{label}</span>
    </div>
    <p className="mt-1 text-white text-lg font-semibold">{value}</p>
  </div>
);

const TimeToggle = ({ mode, setMode }) => {
  const Button = ({ value, children }) => {
    const active = mode === value;
    return (
      <button
        onClick={() => setMode(value)}
        className={`px-4 py-2 rounded-full text-sm transition-all border ${
          active
            ? 'border-[#D7FA00] text-black bg-[#D7FA00] shadow-[0_10px_30px_rgba(215,250,0,0.45)]'
            : 'border-white/10 text-white bg-white/5 hover:border-[#D7FA00]/40'
        }`}
      >
        {children}
      </button>
    );
  };
  return (
    <div className="mx-auto mt-4 flex items-center justify-center gap-2">
      <Button value="past">⟲ Past</Button>
      <Button value="current">⧉ Current</Button>
      <Button value="predicted">⇢ Predicted</Button>
    </div>
  );
};

const DigitalTwin = () => {
  const [mode, setMode] = useState('current');

  const predicted = mode === 'predicted';
  const past = mode === 'past';

  return (
    <section className="relative w-full">
      {/* 3D Spline Backdrop */}
      <div className="relative h-[56vh] md:h-[60vh] overflow-hidden">
        <Spline
          scene="https://prod.spline.design/D17NpA0ni2BTjUzp/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />

        {/* Ambient overlay to improve legibility without blocking interaction */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/80" />

        {/* Body state tints */}
        {predicted && (
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_40%,rgba(0,245,255,0.18),transparent_60%)]" />
        )}
        {past && (
          <div className="pointer-events-none absolute inset-0 backdrop-grayscale-[0.3]" />
        )}

        {/* Floating stats around the twin */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-full max-w-md px-6">
            <div className="pointer-events-none absolute inset-0 -z-0 rounded-full opacity-60" style={{
              boxShadow: '0 0 120px 30px rgba(215,250,0,0.15)'
            }} />

            <div className="grid grid-cols-2 gap-3">
              <div className="justify-self-start translate-y-4">
                <StatCard label={predicted ? 'Heart Rate (Pred.)' : 'Heart Rate'} value={predicted ? '74 bpm' : '76 bpm'} icon="🩺" glow={mode==='current'} />
              </div>
              <div className="justify-self-end -translate-y-1">
                <StatCard label={predicted ? 'Muscle Activity (Pred.)' : 'Muscle Activity'} value={predicted ? 'Moderate' : 'High'} icon="💪" glow={predicted} />
              </div>
              <div className="justify-self-start -translate-y-1">
                <StatCard label={predicted ? 'Hydration (Pred.)' : 'Hydration'} value={predicted ? 'Good' : 'Optimal'} icon="💧" glow={mode==='current'} />
              </div>
              <div className="justify-self-end translate-y-3">
                <StatCard label={predicted ? 'Energy (Pred.)' : 'Energy Level'} value={predicted ? 'Rising' : 'Stable'} icon="🔥" glow={past} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <TimeToggle mode={mode} setMode={setMode} />
    </section>
  );
};

export default DigitalTwin;
