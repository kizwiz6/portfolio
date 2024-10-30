// src/App.js

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Education from './pages/Education';
import Layout from './components/Layout';
import HeroSection from './components/HeroSection';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import './App.css';

function App() {
    const [activeTab, setActiveTab] = useState('about');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <Router>
          <ScrollToTop /> 
            <div className="min-h-screen">
                <HeroSection />
                <Navigation 
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                    isMenuOpen={isMenuOpen}
                    setIsMenuOpen={setIsMenuOpen}
                />
                <Layout>
                    <Routes>
                        <Route path="/about" element={<About />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/experience" element={<Experience />} />
                        <Route path="/education" element={<Education />} />
                    </Routes>
                </Layout>
                <Footer /> {/* Moved Footer here so it's rendered once */}
            </div>
        </Router>
    );
}

export default App;
