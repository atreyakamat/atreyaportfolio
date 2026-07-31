import { useRouter } from './app/router';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { ExperiencePage } from './pages/ExperiencePage';
import { HomePage } from './pages/HomePage';
import { ProjectDetailPage } from './pages/ProjectDetailPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ResumePage } from './pages/ResumePage';
import { SkillsPage } from './pages/SkillsPage';

export function App() {
  const { path } = useRouter();

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
    default:
      return <HomePage />;
  }
}

export default App;
