// src/App.js
import React, { useState } from 'react';
import { HashRouter as Router } from 'react-router-dom';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import AppRoutes from './components/AppRoutes';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-gray-50">
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