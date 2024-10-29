// src/pages/Portfolio.js

import React, { useState } from 'react';
import { useLocation } from 'react-router-dom'; // Import useLocation
import Layout from '../components/Layout';
import About from './About';
import Projects from './Projects';
import Experience from './Experience';
import Education from './Education';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Get the current path
  const location = useLocation();
  const activeTabState = location.pathname.split('/').pop(); // Get the last part of the path

  return (
    <Layout activeTab={activeTabState} setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen}>
      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        {activeTabState === 'about' && <About />}
        {activeTabState === 'projects' && <Projects />}
        {activeTabState === 'experience' && <Experience />}
        {activeTabState === 'education' && <Education />}
      </main>
    </Layout>
  );
};

export default Portfolio;
