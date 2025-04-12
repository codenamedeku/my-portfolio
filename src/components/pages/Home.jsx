import { useNavigate } from 'react-router-dom';
import { GoDotFill, GoRocket } from 'react-icons/go';
import { projects } from '../../data/projects';
import { tools } from '../../data/tools';
import ProjectCard from '../shared/ProjectCard';
import TechItem from '../shared/TechItem';

const Home = () => {
  const navigate = useNavigate();

  return (
    <main className="max-w-full flex-1 text-gray-800 dark:text-gray-100 overflow-hidden">
      {/* Introduction */}
      <section className="mb-6 animate-fade-up">
        <h1 className="flex items-center text-3xl font-bold text-gray-800 dark:text-gray-50 gap-1">
          Hello, I'm Deva <span className="transition-transform duration-200 hover:rotate-12">👋</span>
        </h1>
        <p className="mt-4 flex items-center text-sm text-gray-400 dark:text-gray-400">
          <GoDotFill className="mr-2 w-4 h-4 text-gray-400 dark:text-gray-400" />
          Based in Cikarang, West Java, Indonesia
        </p>
        <p className="mt-4 text-gray-500 dark:text-gray-300">
          Specialist in front-end web development with expertise in React.js and
          Tailwind CSS. Skilled in crafting responsive, user-friendly, and
          high-performance websites with a focus on clean, maintainable code and
          modern design principles.
        </p>
      </section>

      <hr className="mb-6 border-gray-200 dark:border-gray-900 animate-fade-up" />

      {/* Tools Section */}
      <section className="mb-6 relative animate-fade-up">
        <h2 className="mb-6 text-xl font-bold text-gray-800 dark:text-gray-50">Tools I've Used</h2>
        <div className="relative w-full overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap">
            {tools.concat(tools).map((tool, index) => (
              <TechItem
                key={`${tool.name}-${index}`}
                name={tool.name}
                icon={tool.icon}
                color={tool.color}
                variant="home"
              />
            ))}
          </div>
        </div>
      </section>

      <hr className="mb-6 border-gray-200 dark:border-gray-900 animate-fade-up" />

      {/* Projects Section */}
      <section className="mb-6 animate-fade-up">
        <div className="mb-6 flex items-center justify-between animate-fade-up">
          <h2 className="text-xl font-bold text-gray-800 dark:text-gray-50">
            Projects I've Worked On
          </h2>
          <button
            onClick={() => navigate('/projects')}
            className="text-sm font-medium text-gray-500 dark:text-gray-300 transition-colors hover:text-gray-800 dark:hover:text-gray-100"
          >
            View More
          </button>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-3">
          {projects.slice(0, 3).map((project) => (
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

      <hr className="mb-6 border-gray-200 dark:border-gray-900 animate-fade-up" />

      {/* Current Work Section */}
      <section className="mb-6 animate-fade-up">
        <h2 className="mb-4 text-xl font-bold text-gray-800 dark:text-gray-50">
          What I’m Working On
        </h2>
        <p className="mb-6 text-gray-500 dark:text-gray-300">
          I’ve been building projects to hone my skills in React.js and Tailwind
          CSS.
        </p>
        <div className="p-5 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-800/30 animate-fade-up">
          <h3 className="flex items-center text-lg font-semibold text-gray-800 dark:text-gray-50 mb-4 gap-2">
            <GoRocket className="mr-2 w-6 h-6 text-gray-800 dark:text-gray-50" />
            Let's work together!
          </h3>
          <p className="text-gray-700 dark:text-gray-200 mb-4">
            I'm open for freelance projects, feel free to email me to see how can
            we collaborate.
          </p>
          <button
            onClick={() => navigate('/contact')}
            className="font-semibold text-gray-700 dark:text-gray-200 px-4 py-2 rounded-md transition-colors bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600/80 animate-fade-up"
          >
            Contact me
          </button>
        </div>
      </section>
    </main>
  );
};

export default Home;