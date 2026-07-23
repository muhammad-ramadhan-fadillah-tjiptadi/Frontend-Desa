import React from 'react';
import { Agentation } from 'agentation';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ProfileSection } from './components/ProfileSection';
import { OfficialsSection } from './components/OfficialsSection';
import { DemographicsSection } from './components/DemographicsSection';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-slate-800 flex flex-col font-sans antialiased">
      {/* Main Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-grow pt-4 pb-16 bg-white font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <HeroSection />
          <ProfileSection />
          <OfficialsSection />
          <DemographicsSection />
        </div>
      </main>

      {/* Footer */}
      <Footer />

      {/* Visual Feedback Tool for AI Agents */}
      {import.meta.env.DEV && <Agentation />}
    </div>
  );
};

export default App;