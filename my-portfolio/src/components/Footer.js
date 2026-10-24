// src/components/Footer.js

import React from 'react';
import { Link } from 'react-router-dom';
import SocialMediaLinks from './SocialMediaLinks.js';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <Link to="/about" className="footer-brand">Kieran Emery<span>.</span></Link>
        <div className="footer-links">
          <Link to="/projects">Projects</Link>
          <Link to="/experience">Experience</Link>
          <a href="mailto:kizwiz@hotmail.co.uk">Contact</a>
        </div>
        <SocialMediaLinks />
        <p>© {new Date().getFullYear()} Kieran Emery</p>
      </div>
    </footer>
  );
};

export default Footer;
