// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'; // Import Navigate
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Education from './pages/Education';
import NotFound from './pages/NotFound'; // Import NotFound component
import ScrollToTop from './components/ScrollToTop'; // Scroll to top on route change
import './App.css';

function App() {
  return (
    <Router basename="/portfolio">
      <div className="App">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Navigate to="/about" />} /> {/* Redirect base path to /about */}
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/education" element={<Education />} />
          <Route path="*" element={<NotFound />} /> {/* Catch all unmatched routes */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
