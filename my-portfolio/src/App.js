import React, { useState } from 'react';
import { HashRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Education from './pages/Education';
import NotFound from './pages/NotFound';
import ScrollToTop from './components/ScrollToTop';
import './App.css';

function App() {
  // State management for active tab and menu
  const [activeTab, setActiveTab] = useState('about'); // Default tab
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Router basename="/portfolio">
      <div className="App">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Navigate to="/about" />} />
          <Route 
            path="/about" 
            element={
              <About 
                activeTab={activeTab} 
                setActiveTab={setActiveTab} 
                setIsMenuOpen={setIsMenuOpen} 
                isMenuOpen={isMenuOpen} 
              />
            } 
          />
          <Route 
            path="/projects" 
            element={
              <Projects 
                activeTab={activeTab} 
                setActiveTab={setActiveTab} 
                setIsMenuOpen={setIsMenuOpen} 
                isMenuOpen={isMenuOpen} 
              />
            } 
          />
          <Route 
            path="/experience" 
            element={
              <Experience 
                activeTab={activeTab} 
                setActiveTab={setActiveTab} 
                setIsMenuOpen={setIsMenuOpen} 
                isMenuOpen={isMenuOpen} 
              />
            } 
          />
          <Route
            path="/education"
            element={
              <Education
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                setIsMenuOpen={setIsMenuOpen}
                isMenuOpen={isMenuOpen}
              />
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
