import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FiArrowLeft, FiCode, FiExternalLink } from 'react-icons/fi';
import { tools } from '../../data/tools';
import TechItem from '../shared/TechItem';
import ProjectImage from '../../assets/projects/project.jpg';

export const projectData = {
  id: 'project3',
  title: 'Project Radio FM',
  description: 'A web application for streaming radio services.',
  image: ProjectImage,
  tech: ['React.js', 'Tailwind CSS'],
  sourceCodeLink: '',
  liveDemoLink: '',
};

const Project3 = () => {
  const navigate = useNavigate();
  const { sourceCodeLink, liveDemoLink, title } = projectData;

  const techStack = projectData.tech
    .map((techName) => tools.find((tool) => tool.name === techName))
    .filter((tech) => tech);

  const isLinkValid = (link) => link && link.trim() !== '';

  return (
    <main className="min-h-screen flex-1 text-gray-800 dark:text-gray-100 overflow-hidden">
      <section className="mb-6 animate-fade-up">
        <button
          onClick={() => navigate(-1)}
          className="text-gray-500 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100 text-sm font-medium flex items-center gap-2 hover:gap-3 transition-all duration-300"
        >
          <FiArrowLeft className="w-4 h-4" /> Back
        </button>
        <h1 className="mt-4 text-2xl font-bold flex items-center text-gray-800 dark:text-gray-50">
          {title}
        </h1>
        <p className="mt-4 text-gray-600 dark:text-gray-300">{projectData.description}</p>
      </section>
      <hr className="mb-6 border-gray-200 dark:border-gray-900 animate-fade-up" />

      <section className="flex flex-col md:flex-row gap-4 animate-fade-up">
        <div className="flex-[2] animate-fade-up">
          <div className="relative rounded-lg overflow-hidden border border-gray-200 dark:border-gray-800/30">
            <img
              src={projectData.image}
              alt={title}
              className="w-full h-auto object-cover rounded-lg"
              style={{ maxHeight: '400px' }}
              onError={(e) => (e.target.src = '/assets/projects/fallback.jpg')}
            />
          </div>
        </div>

        <div className="flex-1 flex flex-col animate-fade-up">
          <div className="flex justify-center gap-2 mb-4 md:justify-start animate-fade-up">
            <a
              href={isLinkValid(sourceCodeLink) ? sourceCodeLink : undefined}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-center gap-2 px-4 py-2 rounded-md text-xs font-medium transition-colors md:flex-1 select-none animate-fade-up ${
                isLinkValid(sourceCodeLink)
                  ? 'bg-purple-800 text-gray-100 hover:bg-purple-800/90'
                  : 'bg-purple-800 text-gray-300 dark:text-gray-400 opacity-60'
              }`}
              onClick={(e) => !isLinkValid(sourceCodeLink) && e.preventDefault()}
            >
              <FiCode className="w-3 h-3" />
              Source Code
            </a>
            <a
              href={isLinkValid(liveDemoLink) ? liveDemoLink : undefined}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-center gap-2 px-4 py-2 rounded-md text-xs font-medium transition-colors md:flex-1 select-none animate-fade-up ${
                isLinkValid(liveDemoLink)
                  ? 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600/80'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-400 dark:text-gray-400 opacity-60'
              }`}
              onClick={(e) => !isLinkValid(liveDemoLink) && e.preventDefault()}
            >
              <FiExternalLink className="w-3 h-3" />
              Live Demo
            </a>
          </div>

          <hr className="mb-4 border-gray-200 dark:border-gray-900 animate-fade-up" />

          <div className="animate-fade-up">
            <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-300 mb-4 text-center md:text-left">
              Tech Stack:
            </h3>
            <div className="flex flex-wrap justify-center gap-2 md:justify-start">
              {techStack.map((tech, index) => (
                <TechItem
                  key={`${tech.name}-${index}`}
                  name={tech.name}
                  icon={tech.icon}
                  color={tech.color}
                  variant="project"
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Project3;