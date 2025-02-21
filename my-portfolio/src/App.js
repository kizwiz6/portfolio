// App.js
import React, { Suspense, lazy, useState } from 'react';
import { HashRouter as Router } from 'react-router-dom';
import LoadingSpinner from './components/LoadingSpinner';
import ScrollToTop from './components/ScrollToTop';
import './App.css';

// Lazy load components
const HeroSection = lazy(() => import('./components/HeroSection'));
const Footer = lazy(() => import('./components/Footer'));
const AppRoutes = lazy(() => import('./components/AppRoutes'));

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Router>
      <ScrollToTop />
      <Suspense fallback={<LoadingSpinner />}>
        <div className="min-h-screen">
          <HeroSection />
          <AppRoutes
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen}
          />
          <Footer />
        </div>
      </Suspense>
    </Router>
  );
}

export default App;