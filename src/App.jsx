import React from 'react';
import HeroCover from './components/HeroCover';
import MetricOrbit from './components/MetricOrbit';
import PerformancePreview from './components/PerformancePreview';
import BottomNav from './components/BottomNav';

const App = () => {
  return (
    <div className="min-h-screen w-full bg-black text-white font-inter">
      <HeroCover />
      <MetricOrbit />
      <PerformancePreview />

      {/* Spacer for bottom nav */}
      <div className="h-24" />
      <BottomNav />
    </div>
  );
};

export default App;
