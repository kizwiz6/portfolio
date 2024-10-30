// src/components/Navigation.js

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import SocialMediaLinks from './SocialMediaLinks';

const Navigation = ({ activeTab, setIsMenuOpen, isMenuOpen }) => {
    const navigate = useNavigate();

    const handleNavigation = (tab, path) => {
        navigate(path); // Navigate to the desired path
        setIsMenuOpen(false); // Close mobile menu if open
    };

    return (
        <nav className="bg-white shadow-sm mb-0" role="navigation" aria-label="Main Navigation">
            <div className="max-w-6xl mx-auto px-4 py-4">
                <div className="flex justify-between items-center">
                    <div className="text-xl font-bold">Portfolio</div>

                    {/* Navigation Links */}
                    <div className="hidden md:flex space-x-8">
                        <button
                            onClick={() => handleNavigation('about', '/about')}
                            className={`${activeTab === 'about' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'} hover:text-blue-500`}
                        >
                            About
                        </button>
                        <button
                            onClick={() => handleNavigation('projects', '/projects')}
                            className={`${activeTab === 'projects' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'} hover:text-blue-500`}
                        >
                            Projects
                        </button>
                        <button
                            onClick={() => handleNavigation('education', '/education')}
                            className={`${activeTab === 'education' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'} hover:text-blue-500`}
                        >
                            Education
                        </button>
                        <button
                            onClick={() => handleNavigation('experience', '/experience')}
                            className={`${activeTab === 'experience' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'} hover:text-blue-500`}
                        >
                            Experience
                        </button>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label={isMenuOpen ? 'Close mobile menu' : 'Open mobile menu'}
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Links */}
            {isMenuOpen && (
                <div className="md:hidden" role="menu">
                    <div className="px-4 pt-4 pb-3 bg-gray-100">
                        <button
                            onClick={() => handleNavigation('about', '/about')}
                            className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-200"
                        >
                            About
                        </button>
                        <button
                            onClick={() => handleNavigation('projects', '/projects')}
                            className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-200"
                        >
                            Projects
                        </button>
                        <button
                            onClick={() => handleNavigation('education', '/education')}
                            className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-200"
                        >
                            Education
                        </button>
                        <button
                            onClick={() => handleNavigation('experience', '/experience')}
                            className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-200"
                        >
                            Experience
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navigation;
