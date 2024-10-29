// src/pages/Portfolio.js

import React, { useState } from 'react';
import Layout from '../components/Layout';
import About from '../pages/About';
import Projects from '../pages/Projects';
import Experience from '../pages/Experience';
import Education from '../pages/Education';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTabState, setActiveTab] = useState('projects'); // Default to 'projects'

  return (
    <Layout activeTab={activeTabState} setActiveTab={setActiveTab} setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen}>
      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        {activeTabState === 'about' && <About activeTab={activeTabState} setActiveTab={setActiveTab} setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />}
        {activeTabState === 'projects' && <Projects activeTab={activeTabState} setActiveTab={setActiveTab} setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />}
        {activeTabState === 'experience' && <Experience activeTab={activeTabState} setActiveTab={setActiveTab} setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />}
        {activeTabState === 'education' && <Education activeTab={activeTabState} setActiveTab={setActiveTab} setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />}
      </main>
    </Layout>
  );
};

// Exporting the Portfolio (default export) component
export default Portfolio;
