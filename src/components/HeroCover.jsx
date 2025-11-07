import React from 'react';
import Spline from '@splinetool/react-spline';

const HeroCover = () => {
  return (
    <section className="relative w-full h-[65vh] md:h-[70vh] overflow-hidden bg-black">
      {/* 3D Spline Cover */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/D17NpA0ni2BTjUzp/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Ambient gradient glow overlay (non-blocking) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/80" />

      {/* Heading overlay */}
      <div className="relative z-10 h-full flex flex-col items-center justify-end text-center px-6 pb-8">
        <div className="inline-flex items-center gap-2 rounded-full border border-[#D7FA00]/40 bg-black/30 px-4 py-1.5 backdrop-blur-md">
          <span className="h-2 w-2 rounded-full bg-[#D7FA00] shadow-[0_0_30px_4px_rgba(215,250,0,0.6)]" />
          <span className="text-xs tracking-widest text-[#D7FA00] uppercase">Neon Bio‑Performance</span>
        </div>
        <h1 className="mt-4 text-3xl md:text-5xl font-semibold tracking-tight text-white">
          Human Digital Twin for Performance & Progress
        </h1>
        <p className="mt-3 max-w-2xl text-sm md:text-base text-white/70">
          See your body’s story in motion. Breathe, pulse, and progress—beautifully visualized.
        </p>
      </div>
    </section>
  );
};

export default HeroCover;
