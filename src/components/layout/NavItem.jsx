import { useNavigate } from 'react-router-dom';

const NavItem = ({ to, icon: Icon, label, currentPath, closeSidebar }) => {
  const navigate = useNavigate();
  const isActive = currentPath === to;

  const handleClick = (e) => {
    e.preventDefault();
    navigate(to);
    closeSidebar();
  };

  return (
    <a
      href={to}
      onClick={handleClick}
      className={`group flex items-center gap-2.5 px-3 py-2.5 text-sm font-semibold rounded-md transition duration-200 ${
        isActive
          ? 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white'
          : 'text-gray-500 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-gray-800 dark:hover:text-white'
      }`}
    >
      <Icon
        className="w-4 h-4 transition-transform duration-200 group-hover:rotate-12"
      />
      <span>{label}</span>
    </a>
  );
};

export default NavItem;