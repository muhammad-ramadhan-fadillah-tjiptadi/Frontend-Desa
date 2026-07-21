import React from 'react';
import { Agentation } from 'agentation';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-slate-800 flex flex-col font-sans antialiased">
      {/* Main Navbar */}
      <Navbar />

      {/* Main Content: Hero Section */}
      <main className="flex-grow">
        <HeroSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Visual Feedback Tool for AI Agents */}
      {import.meta.env.DEV && <Agentation />}
    </div>
  );
};

export default App;