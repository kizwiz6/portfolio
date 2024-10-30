// src/pages/Portfolio.js

import React, { useState, Suspense, lazy } from 'react';
import Layout from '../components/Layout';
import AnimatedComponent from '../components/AnimatedComponent';
import AnimatedText from '../components/AnimatedText'; // Import the AnimatedText component

// Lazy load components for performance optimization
const About = lazy(() => import('./About'));
const Projects = lazy(() => import('./Projects'));
const Experience = lazy(() => import('./Experience'));
const Education = lazy(() => import('./Education'));
const NotFound = lazy(() => import('./NotFound'));

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('about'); // Default to About tab
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Map for section components
  const sections = {
    about: <About />,
    projects: <Projects />,
    experience: <Experience />,
    education: <Education />
  };

  return (
    <Layout 
      activeTab={activeTab} 
      setActiveTab={setActiveTab} 
      setIsMenuOpen={setIsMenuOpen} 
      isMenuOpen={isMenuOpen}
    >
      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        <Suspense fallback={<div>Loading...</div>}>
          <AnimatedComponent>
            <AnimatedText text={`Welcome to My Portfolio!`} /> {/* Animated text inside AnimatedComponent */}
            {sections[activeTab] || <NotFound />} {/* Render corresponding section or NotFound */}
          </AnimatedComponent>
        </Suspense>
      </main>
    </Layout>
  );
};

export default Portfolio;
