// src/App.jsx
import { useLayoutEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Resume from './components/Resume';
import { ThemeProvider } from './components/ThemeContext';
import Project1 from './components/projects/Project1';
import Project2 from './components/projects/Project2';
import Project3 from './components/projects/Project3';
import Project4 from './components/projects/Project4';
import { projects } from './data/projects';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    window.scrollTo({ top: 0 });
  }, [pathname]);

  return null;
};

const App = () => {
  // Map id proyek ke komponen
  const projectComponents = {
    project1: Project1,
    project2: Project2,
    project3: Project3,
    project4: Project4,
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