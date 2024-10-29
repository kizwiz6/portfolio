// src/components/Navigation.js

import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import SocialMediaLinks from './SocialMediaLinks';

const Navigation = ({ activeTab, setActiveTab, setIsMenuOpen, isMenuOpen }) => (
    <nav className="bg-white shadow-sm mb-0">
        <div className="max-w-6xl mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
                <div className="text-xl font-bold">Portfolio</div>

                {/* Navigation Links for pages */}
                <div className="hidden md:flex space-x-8">
                    {['about', 'projects', 'education', 'experience'].map(tab => (
                        <Link
                            key={tab}
                            to={`/${tab}`}
                            onClick={() => setActiveTab(tab)} // Set active tab on click
                            className={`${activeTab === tab ? 'text-blue-600' : 'text-gray-600'} hover:text-blue-500`}
                        >
                            {tab.charAt(0).toUpperCase() + tab.slice(1)}
                        </Link>
                    ))}
                </div>

                {/* Social Media Links */}
                <SocialMediaLinks />

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
                    {['about', 'projects', 'education', 'experience'].map((tab) => (
                        <Link
                            key={tab}
                            to={`/${tab}`}
                            onClick={() => {
                                setIsMenuOpen(false); // Close mobile menu on link click
                                setActiveTab(tab); // Set active tab on click
                            }}
                            className={`${activeTab === tab ? 'text-blue-600' : 'text-gray-600'} block w-full px-3 py-2 text-base font-medium hover:text-gray-900 hover:bg-gray-50`}
                        >
                            {tab.charAt(0).toUpperCase() + tab.slice(1)}
                        </Link>
                    ))}
                </div>
            </div>
        )}
    </nav>
);

export default Navigation;
