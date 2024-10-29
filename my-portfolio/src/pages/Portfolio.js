import React, { useState } from 'react';
import HeroSection from '../components/HeroSection';
import { Github, Linkedin, Facebook, Instagram, Mail, Menu, X } from 'lucide-react';
import AboutMe from '../components/AboutMe';
import ImageGallery from '../components/ImageGallery';
import ProjectList from '../components/ProjectList';
import Projects from '../pages/Projects';
import Experience from '../components/Experience';
import { education } from '../data/education';
import Education from '../components/Education';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

// Navigation Component
const Navigation = ({ activeTab, setActiveTab, setIsMenuOpen, isMenuOpen }) => (
  <nav className="bg-white shadow-sm">
    <div className="max-w-6xl mx-auto px-4 py-4">
      <div className="flex justify-between items-center">
        <div className="text-xl font-bold">Portfolio</div>
        <div className="hidden md:flex space-x-8">
          {['about', 'projects', 'education'].map(tab => ( // Removed 'experience' from here
            <Link
              key={tab}
              to={`/${tab}`} // Link to the corresponding pages
              className={`${activeTab === tab ? 'text-blue-600' : 'text-gray-600'} hover:text-blue-500`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </Link>
          ))}
          <Link
            to="/experience" // Link to the Experience page
            className={`${activeTab === 'experience' ? 'text-blue-600' : 'text-gray-600'} hover:text-blue-500`}
          >
            Experience
          </Link>
        </div>
        {/* Social Media Links */}
        <div className="hidden md:flex space-x-4">
          {/* Add your social media links here */}
        </div>
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </div>
    {isMenuOpen && (
      <div className="md:hidden">
        <div className="px-2 pt-2 pb-3 space-y-1">
          {['about', 'projects', 'education'].map((tab) => (
            <Link
              key={tab}
              to={`/${tab}`} // Link to the corresponding pages
              onClick={() => setIsMenuOpen(false)}
              className="block w-full px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </Link>
          ))}
          <Link
            to="/experience" // Link to the Experience page
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

// Functional component for the Portfolio page
const Portfolio = ({ activeTab, experiences }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTabState, setActiveTab] = useState(activeTab || 'projects');

  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection />
      <Navigation activeTab={activeTabState} setActiveTab={setActiveTab} setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        {activeTabState === 'about' && <AboutMe />}
        {activeTabState === 'projects' && <Projects />}
        {activeTabState === 'experience' && <Experience experience={experiences} />} {/* Pass experiences here */}
        {activeTabState === 'education' && <Education education={education} />}
      </main>
    </div>
  );
};

// Exporting the Portfolio (default export) component so it can be imported in other files easily.
export default Portfolio;
