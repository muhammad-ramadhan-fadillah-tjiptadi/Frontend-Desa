import React, { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import { Agentation } from 'agentation';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { router } from './routes/router';

const App: React.FC = () => {
  useEffect(() => {
    // Clean hash from URL and scroll to top on initial page load / refresh
    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname);
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-800 flex flex-col font-sans antialiased">
      {/* Main Navbar */}
      <Navbar />

      {/* Main Content Router Outlet Container */}
      <main className="flex-grow pt-4 pb-16 bg-white font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RouterProvider router={router} />
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