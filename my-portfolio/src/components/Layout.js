// src/components/Layout.js

import React from 'react';
import HeroSection from './HeroSection';
import Navigation from './Navigation';
import Footer from './Footer';

const Layout = ({ activeTab, setActiveTab, setIsMenuOpen, isMenuOpen, children }) => {
    return (
        <div className="min-h-screen bg-gray-50">
            <HeroSection />
            <Navigation
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                setIsMenuOpen={setIsMenuOpen}
                isMenuOpen={isMenuOpen}
            />
            <main className="max-w-6xl mx-auto px-4 py-8">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;