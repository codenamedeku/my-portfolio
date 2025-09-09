import { useNavigate } from 'react-router-dom';
import { FiArrowUpRight } from 'react-icons/fi';
import { tools } from '../../data/tools';

const ProjectCard = ({ title, description, image, tech, id }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    const route = `/projects/${id}`;
    navigate(route);
  };

  return (
    <div
      className="relative flex h-full flex-col rounded-lg bg-white dark:bg-gray-800 transition-transform group border border-gray-200 dark:border-gray-800 cursor-pointer animate-fade-up"
      onClick={handleCardClick}
    >
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="h-full w-full rounded-t-lg object-cover"
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
        <p className="flex-1 text-sm text-gray-600 dark:text-gray-300 line-clamp-2">{description}</p>
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

export default ProjectCard;