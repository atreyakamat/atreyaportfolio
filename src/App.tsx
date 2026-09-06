import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Approach from './components/Approach';
import Projects from './components/Projects';
import Capabilities from './components/Capabilities';
import Experience from './components/Experience';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#F7F5EF] text-[#151515] font-sans antialiased selection:bg-[#32D6C5] selection:text-[#151515]">
      {/* Accessible skip link for keyboard navigation */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-[#F7F5EF] focus:font-mono focus:text-xs focus:ring-2 focus:ring-[#32D6C5]"
      >
        Skip to main content
      </a>

      <Navbar />

      <main id="main-content" className="w-full pt-20 bg-[#F7F5EF] flex-grow">
        <div className="flex flex-col w-full">
          <Hero />
          <Approach />
          <Projects />
          <Capabilities />
          <Experience />
          <About />
          <Contact />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;
