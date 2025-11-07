import React from 'react';

const metrics = [
  { key: 'hr', label: 'Heart Rate', value: '76 bpm' },
  { key: 'cal', label: 'Calories', value: '532 kcal' },
  { key: 'rec', label: 'Recovery', value: '82%' },
  { key: 'str', label: 'Stress', value: 'Low' },
  { key: 'sleep', label: 'Sleep', value: '88' },
];

const MetricChip = ({ label, value }) => (
  <div className="group relative rounded-xl border border-white/10 bg-white/5 px-3 py-2 backdrop-blur-md transition-colors hover:border-[#D7FA00]/40">
    <p className="text-[10px] uppercase tracking-widest text-white/50">{label}</p>
    <p className="text-sm font-semibold text-white">
      {value}
    </p>
    <span className="pointer-events-none absolute inset-0 -z-0 rounded-xl opacity-0 transition-opacity group-hover:opacity-100" style={{
      boxShadow: '0 0 30px 4px rgba(215,250,0,0.25)'
    }} />
  </div>
);

const MetricOrbit = () => {
  return (
    <section className="relative mx-auto -mt-12 max-w-5xl px-6">
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
        {metrics.map((m) => (
          <MetricChip key={m.key} label={m.label} value={m.value} />
        ))}
      </div>
    </section>
  );
};

export default MetricOrbit;
