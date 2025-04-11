import { useState, useEffect } from "react";
import { MdVerified } from "react-icons/md";
import { HiOutlineMenu } from "react-icons/hi";
import Sidebar from "./Sidebar";
import ThemeToggle from "./ThemeToggle";
import avatar from "../assets/avatar.png";

const Navbar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const closeSidebar = () => setIsSidebarOpen(false);

    useEffect(() => {
        if (isSidebarOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isSidebarOpen]);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                document.body.style.overflow = "";
                setIsSidebarOpen(false);
            }
        };

        window.addEventListener("resize", handleResize);
        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <header className="fixed top-0 w-full bg-white dark:bg-[#121212] text-gray-800 dark:text-white p-4 flex justify-between items-center z-50 border-b border-gray-200 dark:border-gray-900">
            {/* Left Side */}
            <div className="flex items-center gap-3">
                <img src={avatar} alt="Avatar" className="w-8 h-8 rounded-full object-cover" />
                <h1 className="text-base font-semibold flex items-center gap-2">
                    Deva Raja
                    <MdVerified className="text-blue-600 dark:text-blue-500 w-5 h-5" />
                </h1>
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-3">
                {/* Theme Toggle */}
                <ThemeToggle />
                {/* Hamburger Menu */}
                <button
                    className="text-gray-800 dark:text-white text-2xl"
                    onClick={() => setIsSidebarOpen(true)}
                >
                    <HiOutlineMenu />
                </button>
            </div>

            {/* Sidebar Overlay */}
            {isSidebarOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={() => setIsSidebarOpen(false)}></div>
            )}

            {/* Sidebar */}
            <div className={`fixed top-0 right-0 h-full p-6 bg-white dark:bg-[#121212] text-gray-800 dark:text-white border-l border-gray-200 dark:border-gray-900 transform ${isSidebarOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 ease-in-out z-50`}>
                <Sidebar closeSidebar={closeSidebar} disableAvatarScroll={true} />
            </div>
        </header>
    );
};

export default Navbar;