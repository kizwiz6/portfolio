// src/App.js

import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import AppRoutes from './components/AppRoutes';
import './App.css';

function App() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <Router>
            <ScrollToTop />
            <div className="min-h-screen">
                <HeroSection />
                <AppRoutes
                    isMenuOpen={isMenuOpen}
                    setIsMenuOpen={setIsMenuOpen}
                />
                <Footer />
            </div>
        </Router>
    );
}

export default App;
