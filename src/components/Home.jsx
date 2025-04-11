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
import { GoDotFill, GoRocket } from 'react-icons/go';
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
    id: 'project1',
    title: 'Project Title',
    description: 'Description of the project.',
    image: Project,
    tech: ['React.js', 'Tailwind CSS'],
  },
  {
    id: 'project2',
    title: 'Project Title',
    description: 'Description of the project.',
    image: Project,
    tech: ['React.js', 'Tailwind CSS'],
  },
  {
    id: 'project3',
    title: 'Project Title',
    description: 'Description of the project.',
    image: Project,
    tech: ['React.js', 'Tailwind CSS'],
  },
];

const ToolItem = ({ name, icon: Icon, color }) => (
  <div className="mx-1.5 flex flex-shrink-0 items-center rounded-full bg-white dark:bg-gray-800 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-gray-800/30">
    <Icon className={`mr-2 w-4 h-4 ${color}`} />
    <span>{name}</span>
  </div>
);

const ProjectCard = ({ title, description, image, tech, id }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    const route = `/projects/${id}`;
    navigate(route);
  };

  return (
    <div
      className="relative flex h-full flex-col rounded-lg bg-white dark:bg-gray-800 transition-transform group border border-gray-200 dark:border-gray-800/30 cursor-pointer animate-fade-up"
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
        <hr className="border-gray-200 dark:border-gray-900 my-4" />
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
              <ToolItem
                key={`${tool.name}-${index}`}
                name={tool.name}
                icon={tool.icon}
                color={tool.color}
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