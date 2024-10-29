import React, { useState } from 'react';
import HeroSection from '../components/HeroSection';
import Navigation from '../components/Navigation';
import { Github, Linkedin, Facebook, Instagram, Mail, Menu, X } from 'lucide-react';
import AboutMe from '../components/AboutMe';
import ImageGallery from '../components/ImageGallery';
import ProjectList from '../components/ProjectList';
import Projects from '../pages/Projects';
import Experience from '../components/Experience';
import { education } from '../data/education';
import Education from '../components/Education';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

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
        {activeTabState === 'experience' && <Experience experience={experiences} />}
        {activeTabState === 'education' && <Education education={education} />}
      </main>
    </div>
  );
};

// Exporting the Portfolio (default export) component so it can be imported in other files easily.
export default Portfolio;
