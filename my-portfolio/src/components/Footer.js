// src/components/Footer.js

import React from 'react';
import { Link } from 'react-router-dom';
import SocialMediaLinks from './SocialMediaLinks.js';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-4 mt-6">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center mb-4 flex-wrap">
          <div className="flex space-x-8">
            <Link to="/about" className="text-gray-600 hover:text-blue-500" aria-label="About Me">About</Link>
            <Link to="/projects" className="text-gray-600 hover:text-blue-500" aria-label="Projects">Projects</Link>
            <Link to="/education" className="text-gray-600 hover:text-blue-500" aria-label="Education">Education</Link>
            <Link to="/experience" className="text-gray-600 hover:text-blue-500" aria-label="Experience">Experience</Link>
          </div>
          {/* Social Media Links */}
          <div className="flex mt-4 md:mt-0">
            <SocialMediaLinks />
          </div>
        </div>
        {/* Optional Copyright Info */}
        <div className="text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Kieran Emery. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
