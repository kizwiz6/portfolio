// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Portfolio from './pages/Portfolio';
import Projects from './pages/Projects';
import ScrollToTop from './components/ScrollToTop'; // Scroll to top on route change
import { experiences } from './data/experiences'; // Import experience data
import './App.css';

function App() {
  return (
    <Router basename="/portfolio">
      <div className="App">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Portfolio experiences={experiences} />} />
          <Route path="/about" element={<Portfolio activeTab="about" experiences={experiences} />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Portfolio activeTab="experience" experiences={experiences} />} />
          <Route path="/education" element={<Portfolio activeTab="education" experiences={experiences} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
