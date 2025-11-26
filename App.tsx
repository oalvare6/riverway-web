import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { StatsStrip } from './components/StatsStrip';
import { Features } from './components/Features';
import { Contact } from './components/Contact';

function App() {
  return (
    <div className="font-sans antialiased text-slate-900 bg-white selection:bg-river-orange/20 selection:text-river-orange">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <StatsStrip />
        <Features />
        <Contact />
      </main>
    </div>
  );
}

export default App;