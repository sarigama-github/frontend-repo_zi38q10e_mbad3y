import React from 'react';

const InsightCard = ({ emoji, title, description }) => (
  <button className="min-w-[180px] select-none rounded-2xl border border-white/10 bg-white/5 p-4 text-left backdrop-blur-md hover:border-[#D7FA00]/40 transition-colors">
    <div className="text-lg">{emoji}</div>
    <p className="mt-1 text-white font-medium">{title}</p>
    <p className="text-xs text-white/60">{description}</p>
  </button>
);

const InsightsScroller = () => {
  return (
    <section className="mt-5 px-6">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-white font-semibold">Insights</h3>
        <p className="text-xs text-white/60">Swipe for more</p>
      </div>
      <div className="flex gap-3 overflow-x-auto no-scrollbar py-1 pr-6" style={{scrollSnapType:'x mandatory'}}>
        <div style={{scrollSnapAlign:'start'}}>
          <InsightCard emoji="🧠" title="Mind Recovery" description="Focus + calm improving" />
        </div>
        <div style={{scrollSnapAlign:'start'}}>
          <InsightCard emoji="💪" title="Muscle Growth" description="Hypertrophy on track" />
        </div>
        <div style={{scrollSnapAlign:'start'}}>
          <InsightCard emoji="❤️" title="Heart Health" description="HRV trending up" />
        </div>
        <div style={{scrollSnapAlign:'start'}}>
          <InsightCard emoji="🔮" title="Predictions" description="7‑day readiness forecast" />
        </div>
      </div>
    </section>
  );
};

export default InsightsScroller;
