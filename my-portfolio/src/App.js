// src/App.js

import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import AppRoutes from './components/AppRoutes'; // Import the new AppRoutes component
import './App.css';

function App() {
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu

    return (
        <Router>
            <ScrollToTop />
            <div className="min-h-screen">
                <HeroSection />
                <AppRoutes 
                    isMenuOpen={isMenuOpen} 
                    setIsMenuOpen={setIsMenuOpen} 
                />
                <Footer /> {/* Footer is rendered once here */}
            </div>
        </Router>
    );
}

export default App;
