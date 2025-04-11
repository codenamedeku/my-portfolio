import { useNavigate } from 'react-router-dom';
import {
  SiHtml5,
  SiCss3,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiJavascript,
  SiTypescript,
  SiMongodb,
  SiTailwindcss,
} from 'react-icons/si';
import { GrMysql } from 'react-icons/gr';
import { FiArrowUpRight } from 'react-icons/fi';
import Project from '../assets/projects/project.jpg';

const tools = [
  { name: 'HTML5', icon: SiHtml5, color: 'text-orange-400' },
  { name: 'CSS3', icon: SiCss3, color: 'text-blue-400' },
  { name: 'React.js', icon: SiReact, color: 'text-cyan-300' },
  { name: 'Next.js', icon: SiNextdotjs, color: 'text-gray-600 dark:text-gray-100' },
  { name: 'Node.js', icon: SiNodedotjs, color: 'text-green-400' },
  { name: 'Express.js', icon: SiExpress, color: 'text-gray-600 dark:text-gray-400' },
  { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-300' },
  { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-500' },
  { name: 'MySQL', icon: GrMysql, color: 'text-blue-300' },
  { name: 'MongoDB', icon: SiMongodb, color: 'text-green-300' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-teal-300' },
];

const projects = [
  {
    title: 'Project 1',
    description: 'Description for Project 1',
    image: Project,
    tech: ['React.js', 'Tailwind CSS'],
  },
  {
    title: 'Project 2',
    description: 'Description for Project 2',
    image: Project,
    tech: ['React.js', 'Tailwind CSS'],
  },
  {
    title: 'Project 3',
    description: 'Description for Project 3',
    image: Project,
    tech: ['React.js', 'Tailwind CSS'],
  },
  {
    title: 'Project 4',
    description: 'Description for Project 4',
    image: Project,
    tech: ['React.js', 'Tailwind CSS'],
  },
];

const ProjectCard = ({ title, description, image, tech }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    const route = `/projects/${title.toLowerCase().replace(' ', '')}`;
    navigate(route);
  };

  return (
    <div
      className="relative flex h-full flex-col rounded-lg bg-white dark:bg-gray-900 transition-transform group border border-gray-200 dark:border-gray-700/30 cursor-pointer animate-fade-up"
      onClick={handleCardClick}
    >
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="h-48 w-full rounded-t-lg object-cover"
          onError={(e) => (e.target.src = '/assets/projects/fallback.jpg')}
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-t-lg">
          <span className="text-gray-100 text-sm font-medium flex items-center gap-4 group-hover:gap-2 transition-all duration-300">
            View Project <FiArrowUpRight className="w-4 h-4" />
          </span>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-4">
        <h3 className="mb-2 text-base font-semibold text-gray-800 dark:text-gray-50">{title}</h3>
        <p className="flex-1 text-sm text-gray-600 dark:text-gray-300">{description}</p>
        <hr className="border-gray-200 dark:border-gray-700 my-4" />
        <div className="flex flex-wrap gap-2">
          {tech.map((techName) => {
            const tool = tools.find((t) => t.name === techName);
            return (
              tool && (
                <tool.icon
                  key={techName}
                  className={`w-4 h-4 ${tool.color}`}
                  title={techName}
                />
              )
            );
          })}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <main className="flex-1 text-gray-800 dark:text-gray-50 min-h-screen overflow-hidden">
      {/* Introduction Section */}
      <section className="mb-6 animate-fade-up">
        <h1 className="text-2xl font-bold flex items-center text-gray-800 dark:text-gray-50">Projects</h1>
        <p className="mt-4 text-gray-500 dark:text-gray-400">
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
              key={project.title}
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