import React from 'react';
import Hero from '../components/Hero';
import Approach from '../components/Approach';
import Projects from '../components/Projects';
import Capabilities from '../components/Capabilities';
import Experience from '../components/Experience';
import About from '../components/About';
import Contact from '../components/Contact';

export const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <Approach />
      <Projects />
      <Capabilities />
      <Experience />
      <About />
      <Contact />
    </div>
  );
};

export default HomePage;
