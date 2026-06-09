import Navbar from './components/Navbar';
import LiquidBackground from './components/LiquidBackground';
import Hero from './components/Hero';
import Work from './components/Work';
import Projects from './components/Projects';
import Skills from './components/Skills';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative min-h-screen">
      <LiquidBackground />
      <Navbar />
      
      <main className="relative z-10">
        <Hero />
        <Work />
        <Projects />
        <Skills />
        <About />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
