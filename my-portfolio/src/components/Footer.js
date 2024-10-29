// src/components/Footer.js

import React from 'react';
import { Link } from 'react-router-dom';
import SocialMediaLinks from './SocialMediaLinks.js';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-4 mt-6">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center mb-4">
          <div className="flex space-x-8">
            <Link to="/about" className="text-gray-600 hover:text-blue-500">About</Link>
            <Link to="/projects" className="text-gray-600 hover:text-blue-500">Projects</Link>
            <Link to="/education" className="text-gray-600 hover:text-blue-500">Education</Link>
            <Link to="/experience" className="text-gray-600 hover:text-blue-500">Experience</Link>
          </div>
          {/* Social Media Links */}
          <SocialMediaLinks />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
