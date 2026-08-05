import { Suspense, lazy } from 'react';
import { useRouter } from './app/router';
import { ErrorBoundary } from './pages/ErrorBoundary';
import { LoadingPage } from './pages/LoadingPage';
import { NotFoundPage } from './pages/NotFoundPage';

const HomePage = lazy(() => import('./pages/HomePage').then((module) => ({ default: module.HomePage })));
const AboutPage = lazy(() => import('./pages/AboutPage').then((module) => ({ default: module.AboutPage })));
const ContactPage = lazy(() => import('./pages/ContactPage').then((module) => ({ default: module.ContactPage })));
const ExperiencePage = lazy(() => import('./pages/ExperiencePage').then((module) => ({ default: module.ExperiencePage })));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage').then((module) => ({ default: module.ProjectsPage })));
const ProjectDetailPage = lazy(() => import('./pages/ProjectDetailPage').then((module) => ({ default: module.ProjectDetailPage })));
const ResumePage = lazy(() => import('./pages/ResumePage').then((module) => ({ default: module.ResumePage })));
const SkillsPage = lazy(() => import('./pages/SkillsPage').then((module) => ({ default: module.SkillsPage })));

export function App() {
  const { path } = useRouter();

  const renderRoute = () => {
    if (path.startsWith('/projects/')) {
      const slug = path.replace('/projects/', '');
      return <ProjectDetailPage slug={slug} />;
    }

    switch (path) {
      case '/projects':
        return <ProjectsPage />;
      case '/experience':
        return <ExperiencePage />;
      case '/skills':
        return <SkillsPage />;
      case '/about':
        return <AboutPage />;
      case '/resume':
        return <ResumePage />;
      case '/contact':
        return <ContactPage />;
      case '/':
        return <HomePage />;
      default:
        return <NotFoundPage />;
    }
  };

  return (
    <ErrorBoundary>
      <Suspense fallback={<LoadingPage />}>
        {renderRoute()}
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
