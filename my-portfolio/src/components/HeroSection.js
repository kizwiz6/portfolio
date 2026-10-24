// src/components/HeroSection.js
import React from 'react';
import { ArrowDownRight, ArrowUpRight, Mail } from 'lucide-react';

const HERO_IMAGE_URL = `${process.env.PUBLIC_URL}/Mollie-bg.jpg`;

const HeroSection = () => {
  return (
    <header className="site-hero">
      <img className="hero-image" src={HERO_IMAGE_URL} alt="" aria-hidden="true" />
      <div className="hero-shade" aria-hidden="true" />
      <div className="hero-content">
        <div className="hero-topline">
          <span>Portfolio / {new Date().getFullYear()}</span>
          <span>Cambridgeshire, UK</span>
        </div>
        <div className="hero-main">
          <div>
            <p className="hero-kicker">Full-stack software developer</p>
            <h1>Kieran Emery<span>.</span></h1>
            <p className="hero-summary">I build useful products across the stack, from the first requirement to the production release.</p>
            <div className="hero-actions">
              <a className="hero-button hero-button-primary" href="mailto:kizwiz@hotmail.co.uk">
                <Mail size={17} aria-hidden="true" /> Get in touch
              </a>
              <a
                className="hero-button hero-button-outline"
                href="https://www.dropbox.com/scl/fi/lhobteip40zlhp6r25fpe/KieranEmery_CV_2024.pdf?rlkey=t18j3jpmfsco2py96wn32nyp8&st=3nhxivnx&dl=0"
                target="_blank"
                rel="noopener noreferrer"
              >
                View CV <ArrowUpRight size={17} aria-hidden="true" />
              </a>
            </div>
          </div>
          <div className="hero-aside" aria-hidden="true">
            <span>Product-minded</span>
            <span>Performance curious</span>
            <ArrowDownRight size={34} strokeWidth={1.25} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;