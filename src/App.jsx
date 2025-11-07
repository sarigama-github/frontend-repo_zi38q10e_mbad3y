import React from 'react';
import HeaderBar from './components/HeaderBar';
import DigitalTwin from './components/DigitalTwin';
import InsightsScroller from './components/InsightsScroller';
import FloatingCoach from './components/FloatingCoach';
import BottomNav from './components/BottomNav';

const App = () => {
  return (
    <div className="min-h-screen w-full bg-black text-white font-inter">
      <HeaderBar />
      <DigitalTwin />
      <InsightsScroller />

      {/* Spacing for bottom elements */}
      <div className="h-28" />

      <FloatingCoach />
      <BottomNav />
    </div>
  );
};

export default App;
