import React from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import EscrowCTA from './components/EscrowCTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      <Hero />
      <Services />
      <EscrowCTA />
      <Footer />
    </div>
  );
}

export default App;
