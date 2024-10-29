import React, { useState } from 'react';
import HeroSection from '../components/HeroSection';
import Navigation from '../components/Navigation';
import { Github, Linkedin, Facebook, Instagram, Mail, Menu, X } from 'lucide-react';
import About from '../pages/About';
import Projects from '../pages/Projects';
import Experience from '../pages/Experience';
import { educationData } from '../data/educationData'; // Corrected the import to use the named export
import Education from '../pages/Education'; // Adjusted to import from pages instead of components
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
        {activeTabState === 'about' && <About />}
        {activeTabState === 'projects' && <Projects />}
        {activeTabState === 'experience' && <Experience experience={experiences} />}
        {activeTabState === 'education' && <Education activeTab={activeTabState} setActiveTab={setActiveTab} setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />}
      </main>
    </div>
  );
};

// Exporting the Portfolio (default export) component so it can be imported in other files easily.
export default Portfolio;
