import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/variables.css';
import './styles/globals.css';
import './styles/typography.css';
import './styles/layout.css';
import './styles/ui.css';
import './styles/animations.css';
import App from './App';
import { RouterProvider } from './app/router';
import { ThemeProvider } from './app/providers/ThemeProvider';
import { ScrollRestoration } from './app/providers/ScrollRestoration';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider>
      <ThemeProvider>
        <ScrollRestoration />
        <App />
      </ThemeProvider>
    </RouterProvider>
  </StrictMode>,
);
