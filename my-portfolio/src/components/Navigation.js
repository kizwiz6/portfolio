// src/components/Navigation.js

import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import SocialMediaLinks from './SocialMediaLinks';


const Navigation = ({ activeTab, setActiveTab, setIsMenuOpen, isMenuOpen }) => (
    <nav className="bg-white shadow-sm mb-0"> {/* Ensure there's no margin bottom here */}
        <div className="max-w-6xl mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
                <div className="text-xl font-bold">Portfolio</div>

                {/* Navigation Links for pages */}
                <div className="hidden md:flex space-x-8">
                    {['about', 'projects', 'education'].map(tab => (
                        <Link
                            key={tab}
                            to={`/${tab}`}
                            className={`${activeTab === tab ? 'text-blue-600' : 'text-gray-600'} hover:text-blue-500`}
                        >
                            {tab.charAt(0).toUpperCase() + tab.slice(1)}
                        </Link>
                    ))}
                    <Link
                        to="/experience"
                        className={`${activeTab === 'experience' ? 'text-blue-600' : 'text-gray-600'} hover:text-blue-500`}
                    >
                        Experience
                    </Link>
                </div>

                {/* Social Media Links */}
                <SocialMediaLinks /> {/* Use SocialMediaLinks component here */}

                {/* Mobile Menu Toggle */}
                <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>
        </div>

        {/* Mobile Navigation Links */}
        {isMenuOpen && (
            <div className="md:hidden">
                <div className="px-2 pt-2 pb-3 space-y-1">
                    {['about', 'projects', 'education'].map((tab) => (
                        <Link
                            key={tab}
                            to={`/${tab}`}
                            onClick={() => setIsMenuOpen(false)}
                            className="block w-full px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                        >
                            {tab.charAt(0).toUpperCase() + tab.slice(1)}
                        </Link>
                    ))}
                    <Link
                        to="/experience"
                        onClick={() => setIsMenuOpen(false)}
                        className="block w-full px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                    >
                        Experience
                    </Link>
                </div>
            </div>
        )}
    </nav>
);

export default Navigation;
