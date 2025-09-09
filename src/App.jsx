import { useLayoutEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Sidebar from './components/layout/Sidebar';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import Dashboard from './components/pages/Dashboard';
import Projects from './components/pages/Projects';
import Contact from './components/pages/Contact';
import Resume from './components/pages/Resume';
import { ThemeProvider } from './components/theme/ThemeContext';
import DkampusProject from './components/projects/DkampusProject';
import PlantiqueProject from './components/projects/PlantiqueProject';
import BoomburstProject from './components/projects/BoomburstProject';
import OpteraProject from './components/projects/OpteraProject';
import { projects } from './data/projects';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    window.scrollTo({ top: 0 });
  }, [pathname]);

  return null;
};

const App = () => {
  const projectComponents = {
    'dkampus-project': DkampusProject,
    'plantique-project': PlantiqueProject,
    'boomburst-project': BoomburstProject,
    'optera-project': OpteraProject,
  };

  return (
    <div className="flex min-h-screen bg-white dark:bg-[#121212] text-gray-800 dark:text-white">
      <ScrollToTop />

      {/* Navbar for mobile */}
      <div className="lg:hidden fixed top-0 w-full z-50">
        <Navbar />
      </div>

      {/* Main container */}
      <div className="container mx-auto px-6 md:px-8 xl:px-24 py-6 md:py-24 xl:py-12 max-w-7xl pt-24 lg:pt-12 flex w-full">
        <div className="flex flex-1 gap-2 w-full">
          {/* Sidebar for desktop */}
          <aside className="hidden lg:block fixed h-screen">
            <Sidebar />
          </aside>

          {/* Spacer for sidebar */}
          <div className="hidden lg:block w-64" />

          {/* Main content */}
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/resume" element={<Resume />} />
              {projects.map((project) => {
                const Component = projectComponents[project.id];
                return Component ? (
                  <Route
                    key={project.id}
                    path={`/projects/${project.id}`}
                    element={<Component />}
                  />
                ) : null;
              })}
            </Routes>
          </main>
        </div>
      </div>
    </div>
  );
};

const WrappedApp = () => (
  <Router>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </Router>
);

export default WrappedApp;