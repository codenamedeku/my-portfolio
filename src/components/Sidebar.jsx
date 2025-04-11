import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {
    RiHome2Line,
    RiMailLine,
    RiUser3Line,
    RiGithubFill,
    RiInstagramLine,
    RiLinkedinBoxFill,
} from 'react-icons/ri';
import { LuCoffee } from 'react-icons/lu';
import { MdVerified } from 'react-icons/md';
import { GoDotFill } from 'react-icons/go';
import avatar from '../assets/avatar.png';
import NavItem from './NavItem';
import SocialLink from './SocialLink';
import ThemeToggle from './ThemeToggle';

const navigation = [
    { to: '/', icon: RiHome2Line, label: 'Home' },
    { to: '/projects', icon: LuCoffee, label: 'Projects' },
    { to: '/contact', icon: RiMailLine, label: 'Contact' },
    { to: '/resume', icon: RiUser3Line, label: 'Resume' },
];

const socialLinks = [
    { href: 'https://github.com/codenamedeku', icon: RiGithubFill, label: 'GitHub' },
    { href: 'https://instagram.com/devaraja_', icon: RiInstagramLine, label: 'Instagram' },
    { href: 'https://linkedin.com/in/deva-raja', icon: RiLinkedinBoxFill, label: 'LinkedIn' },
];

const Sidebar = ({ closeSidebar, disableAvatarScroll = false }) => {
    const { pathname } = useLocation();
    const [isAvatarVisible, setIsAvatarVisible] = useState(true);

    useEffect(() => {
        if (disableAvatarScroll) {
            setIsAvatarVisible(true);
            return;
        }

        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setIsAvatarVisible(scrollPosition < 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [disableAvatarScroll]);

    return (
        <aside className="h-full w-56 flex flex-col overflow-hidden bg-white dark:bg-[#121212] text-gray-800 dark:text-white">
            {/* Profile Section */}
            <div className="flex flex-col items-start">
                <div
                    className={`transition-all duration-500 ease-in-out overflow-hidden ${isAvatarVisible ? 'max-h-24 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                    <img
                        src={avatar}
                        alt="Profile"
                        className="w-20 h-20 rounded-full object-cover mb-3"
                    />
                </div>
                <h2 className="text-lg font-semibold flex items-center gap-2 text-gray-800 dark:text-gray-100">
                    Deva Raja
                    <MdVerified className="text-blue-600 dark:text-blue-500 w-5 h-5" />
                </h2>
                <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1.5 mt-1">
                    <GoDotFill className="text-green-500 w-4 h-4" />
                    Working Remotely
                </p>
            </div>

            <hr className="border-gray-200 dark:border-gray-900 my-4" />

            {/* Navigation */}
            <nav className="space-y-1.5">
                {navigation.map((item) => (
                    <NavItem
                        key={item.to}
                        to={item.to}
                        icon={item.icon}
                        label={item.label}
                        currentPath={pathname}
                        closeSidebar={closeSidebar}
                    />
                ))}
            </nav>

            <hr className="border-gray-200 dark:border-gray-900 my-4" />

            {/* Social Links */}
            <div>
                <h3 className="text-sm text-gray-300 dark:text-gray-300 font-medium mb-3">
                    Find Me
                </h3>
                <div className="space-y-2">
                    {socialLinks.map((link) => (
                        <SocialLink
                            key={link.href}
                            href={link.href}
                            icon={link.icon}
                            label={link.label}
                        />
                    ))}
                </div>
            </div>

            {/* Theme Toggle */}
            <div className="mt-4">
                <ThemeToggle />
            </div>
        </aside>
    );
};

export default Sidebar;