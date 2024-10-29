import React from 'react';
import HeroSection from './HeroSection'; // Ensure the path is correct

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection />
      <main className="max-w-6xl mx-auto px-4 py-8">
        {children}
      </main>
    </div>
  );
};

export default Layout;
