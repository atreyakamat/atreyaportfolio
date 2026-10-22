import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollManager from './components/ScrollManager';

import HomePage from './pages/HomePage';

const ProjectsPage = lazy(() => import('./pages/ProjectsPage'));
const ProjectDetailPage = lazy(() => import('./pages/ProjectDetailPage'));
const ExperiencePage = lazy(() => import('./pages/ExperiencePage'));
const SkillsPage = lazy(() => import('./pages/SkillsPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const ResumeRedirect = lazy(() => import('./pages/ResumeRedirect'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

const PageFallback: React.FC = () => (
  <div className="min-h-[50vh] flex items-center justify-center font-label-mono text-label-mono text-on-surface-variant uppercase tracking-widest">
    LOADING...
  </div>
);

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollManager />
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
          <Suspense fallback={<PageFallback />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/projects/:slug" element={<ProjectDetailPage />} />
              <Route path="/experience" element={<ExperiencePage />} />
              <Route path="/skills" element={<SkillsPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/resume" element={<ResumeRedirect />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
