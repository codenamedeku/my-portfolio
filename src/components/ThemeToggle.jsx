import React from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from './ThemeContext';

const ThemeToggle = () => {
    const { darkMode, setDarkMode } = useTheme();

    return (
        <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-md hover:bg-gray-100 hover:dark:bg-gray-900 text-xl"
            aria-label="Toggle Dark Mode"
        >
            {darkMode ? (
                <FaSun className="text-yellow-400" />
            ) : (
                <FaMoon className="text-yellow-400" />
            )}
        </button>
    );
};

export default ThemeToggle;