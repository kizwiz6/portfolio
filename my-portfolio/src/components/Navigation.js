// src/components/Navigation.js
import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import SocialMediaLinks from './SocialMediaLinks';

const Navigation = ({ activeTab, setActiveTab, setIsMenuOpen, isMenuOpen }) => {
    const navigate = useNavigate();

    const handleNavigation = useCallback((path, tab) => {
        navigate(path);
        setActiveTab(tab);
        setIsMenuOpen(false);
    }, [navigate, setActiveTab, setIsMenuOpen]);

    return (
        <nav className="bg-white shadow-sm mb-0" role="navigation" aria-label="Main Navigation">
            <div className="max-w-6xl mx-auto px-4 py-4">
                <div className="flex justify-between items-center">
                    <div className="text-xl font-bold">Portfolio</div>

                    {/* Navigation Links and Social Media Links in the same line */}
                    <div className="flex items-center space-x-8">
                        <div className="hidden md:flex space-x-8">
                            <button
                                onClick={() => handleNavigation('/about', 'about')}
                                className={`${activeTab === 'about' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'} hover:text-blue-500`}
                            >
                                About
                            </button>
                            <button
                                onClick={() => handleNavigation('/projects', 'projects')}
                                className={`${activeTab === 'projects' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'} hover:text-blue-500`}
                            >
                                Projects
                            </button>
                            <button
                                onClick={() => handleNavigation('/education', 'education')}
                                className={`${activeTab === 'education' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'} hover:text-blue-500`}
                            >
                                Education
                            </button>
                            <button
                                onClick={() => handleNavigation('/experience', 'experience')}
                                className={`${activeTab === 'experience' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'} hover:text-blue-500`}
                            >
                                Experience
                            </button>
                        </div>

                        {/* Social Media Links */}
                        <div className="hidden md:flex space-x-4">
                            <SocialMediaLinks />
                        </div>
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
                <div className="md:hidden bg-white shadow-md rounded-lg transition-all duration-300 ease-in-out" role="menu">
                    <div className="px-4 py-2">
                        <button
                            onClick={() => handleNavigation('/about', 'about')}
                            className="block text-left w-full text-gray-600 hover:bg-blue-100 hover:text-blue-500 rounded-lg py-2 transition duration-200"
                        >
                            About
                        </button>
                        <button
                            onClick={() => handleNavigation('/projects', 'projects')}
                            className="block text-left w-full text-gray-600 hover:bg-blue-100 hover:text-blue-500 rounded-lg py-2 transition duration-200"
                        >
                            Projects
                        </button>
                        <button
                            onClick={() => handleNavigation('/education', 'education')}
                            className="block text-left w-full text-gray-600 hover:bg-blue-100 hover:text-blue-500 rounded-lg py-2 transition duration-200"
                        >
                            Education
                        </button>
                        <button
                            onClick={() => handleNavigation('/experience', 'experience')}
                            className="block text-left w-full text-gray-600 hover:bg-blue-100 hover:text-blue-500 rounded-lg py-2 transition duration-200"
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