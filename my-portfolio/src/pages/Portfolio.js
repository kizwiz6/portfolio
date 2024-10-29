// src/pages/Portfolio.js

import React, { useState, Suspense, lazy } from 'react';
import { useLocation } from 'react-router-dom'; // Import useLocation
import Layout from '../components/Layout';

// Lazy load components for performance optimization
const About = lazy(() => import('./About'));
const Projects = lazy(() => import('./Projects'));
const Experience = lazy(() => import('./Experience'));
const Education = lazy(() => import('./Education'));
const NotFound = lazy(() => import('./NotFound')); // Assuming you create a NotFound component

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Get the current path
  const location = useLocation();
  const activeTabState = location.pathname.split('/').pop(); // Get the last part of the path

  // Map for section components
  const sections = {
    about: <About />,
    projects: <Projects />,
    experience: <Experience />,
    education: <Education />
  };

  return (
    <Layout activeTab={activeTabState} setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen}>
      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        <Suspense fallback={<div>Loading...</div>}>
          {sections[activeTabState] || <NotFound />} {/* Render corresponding section or NotFound */}
        </Suspense>
      </main>
    </Layout>
  );
};

export default Portfolio;