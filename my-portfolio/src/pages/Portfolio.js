import React, { useState } from 'react';
import { Github, Linkedin, Facebook, Instagram, Mail, Menu, X } from 'lucide-react';
import AboutMe from '../components/AboutMe';
import ImageGallery from '../components/ImageGallery';
import ProjectList from '../components/ProjectList';
import Projects from '../pages/Projects';
import Experience from '../components/Experience';
import { education } from '../data/education';
import Education from '../components/Education';

// Hero Section Component
const HeroSection = () => (
  <div
    className="text-white bg-cover bg-center"
    style={{
      backgroundImage: `url('https://github.com/kizwiz6/portfolio/blob/master/my-portfolio/public/Mollie-bg.jpg?raw=true')`,
    }}
  >
    <div className="max-w-6xl mx-auto px-4 py-16 text-center bg-black bg-opacity-50">
      <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
        Kieran Emery
      </h1>
      <p className="text-xl md:text-2xl text-blue-100 mb-8">
        British software developer building innovative solutions with modern technologies
      </p>
      <div className="flex justify-center space-x-4">
        <a href="mailto:kizwiz@hotmail.co.uk" className="bg-white text-blue-800 px-6 py-2 rounded-full hover:bg-blue-50 transition duration-300">
          Contact Me
        </a>
        <a
          href="https://www.dropbox.com/scl/fi/lhobteip40zlhp6r25fpe/KieranEmery_CV_2024.pdf?rlkey=t18j3jpmfsco2py96wn32nyp8&st=3nhxivnx&dl=0"
          className="border border-white text-white px-6 py-2 rounded-full hover:bg-white hover:text-blue-800 transition duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          View CV
        </a>
      </div>
    </div>
  </div>
);

// Navigation Component
const Navigation = ({ activeTab, setActiveTab, setIsMenuOpen, isMenuOpen }) => (
  <nav className="bg-white shadow-sm">
    <div className="max-w-6xl mx-auto px-4 py-4">
      <div className="flex justify-between items-center">
        <div className="text-xl font-bold">Portfolio</div>
        <div className="hidden md:flex space-x-8">
          {['about', 'projects', 'experience', 'education'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`${activeTab === tab ? 'text-blue-600' : 'text-gray-600'} hover:text-blue-500`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
        <div className="hidden md:flex space-x-4">
          <a href="https://github.com/kizwiz6" className="text-gray-600 hover:text-gray-900" target="_blank" rel="noopener noreferrer">
            <Github size={20} />
          </a>
          <a href="https://www.linkedin.com/in/kizwiz/" className="text-gray-600 hover:text-gray-900" target="_blank" rel="noopener noreferrer">
            <Linkedin size={20} />
          </a>
          <a href="mailto:kizwiz@hotmail.co.uk" className="text-gray-600 hover:text-gray-900">
            <Mail size={20} />
          </a>
          <a href="https://www.facebook.com/kizwiz6" className="text-gray-600 hover:text-gray-900" target="_blank" rel="noopener noreferrer">
            <Facebook size={20} />
          </a>
          <a href="https://www.instagram.com/kizwiz6" className="text-gray-600 hover:text-gray-900" target="_blank" rel="noopener noreferrer">
            <Instagram size={20} />
          </a>
        </div>
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </div>
    {isMenuOpen && (
      <div className="md:hidden">
        <div className="px-2 pt-2 pb-3 space-y-1">
          {['about', 'projects', 'experience', 'education'].map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab);
                setIsMenuOpen(false);
              }}
              className="block w-full px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
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
