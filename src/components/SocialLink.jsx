const SocialLink = ({ href, icon: Icon, label }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2.5 px-3 py-2.5 text-sm font-semibold text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-800 dark:hover:text-white rounded-md border border-gray-200 dark:border-gray-800 transition duration-200"
    >
        <Icon className="w-4 h-4 transition-transform duration-200 group-hover:rotate-6" />
        <span>{label}</span>
    </a>
);

export default SocialLink;