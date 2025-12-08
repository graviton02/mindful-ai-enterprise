import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import RealityCheck from './components/RealityCheck';
import VisionCloud from './components/VisionCloud';
import Journey from './components/Journey';
import EnterpriseOutcomes from './components/EnterpriseOutcomes';
import Offerings from './components/Offerings';
import Placeholders from './components/Placeholders';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white relative">
      <Navbar />
      <main>
        <Hero />
        <RealityCheck />
        <VisionCloud />
        <Journey />
        <EnterpriseOutcomes />
        <Offerings />
        <Placeholders />
      </main>
      <Footer />
      
      {/* Floating Action Button (Side) */}
      <div className="fixed top-1/2 right-0 transform -translate-y-1/2 z-50">
        <button className="bg-brand-green text-white font-bold py-6 px-3 rounded-l-md shadow-lg hover:bg-brand-darkGreen transition-colors vertical-text tracking-wider uppercase text-sm flex items-center gap-2">
           Get in Touch
        </button>
      </div>
    </div>
  );
}

export default App;