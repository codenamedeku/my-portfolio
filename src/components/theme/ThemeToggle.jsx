import React from 'react';
import { LuMoonStar, LuSun } from "react-icons/lu";
import { useTheme } from './ThemeContext';

const ThemeToggle = () => {
    const { darkMode, setDarkMode } = useTheme();

    return (
        <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-md hover:bg-gray-100 hover:dark:bg-gray-700 text-xl"
            aria-label="Toggle Dark Mode"
        >
            {darkMode ? (
                <LuSun className="text-white" />
            ) : (
                <LuMoonStar className="text-gray-800" />
            )}
        </button>
    );
};

export default ThemeToggle;