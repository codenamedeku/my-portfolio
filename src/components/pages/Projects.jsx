import { projects } from '../../data/projects';
import ProjectCard from '../shared/ProjectCard';

const Projects = () => {
  return (
    <main className="flex-1 text-gray-800 dark:text-gray-50 min-h-screen overflow-hidden">
      {/* Introduction Section */}
      <section className="mb-6 animate-fade-up">
        <h1 className="text-2xl font-bold flex items-center text-gray-800 dark:text-gray-50">Projects</h1>
        <p className="mt-4 text-gray-500 dark:text-gray-300">
          Several projects that I have worked on, both private and open source.
        </p>
      </section>
      {/* Divider */}
      <hr className="mb-6 border-gray-200 dark:border-gray-800 animate-fade-up" />
      {/* Projects Grid */}
      <section className="mb-6 animate-fade-up">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              id={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              tech={project.tech}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Projects;