const TechItem = ({ name, icon: Icon, color, variant = 'project' }) => {
    const isProjectVariant = variant === 'project';
    const iconSize = isProjectVariant ? 'text-sm' : 'w-4 h-4';
    const textSize = isProjectVariant ? 'text-xs' : 'text-sm';
    const marginX = isProjectVariant ? '' : 'mx-1.5';
  
    return (
      <div
        className={`flex flex-shrink-0 items-center rounded-full bg-white dark:bg-gray-800 ${
          isProjectVariant ? 'px-3 py-2' : 'px-4 py-2'
        } font-medium text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-gray-800/30 ${
          isProjectVariant ? 'animate-fade-up' : ''
        } ${marginX} ${textSize}`}
      >
        {Icon && <Icon className={`mr-2 ${iconSize} ${color}`} />}
        <span>{name}</span>
      </div>
    );
  };
  
  export default TechItem;