// src/components/HeroSection.js

import React from 'react';

const HeroSection = () => (
  <div
    className="text-white bg-cover bg-center"
    style={{
      backgroundImage: `url('https://github.com/kizwiz6/portfolio/blob/master/my-portfolio/public/Mollie-bg.jpg?raw=true')`,
    }}
  >
    <div className="max-w-6xl mx-auto px-4 py-16 text-center bg-black bg-opacity-50">
      <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
        Kieran Emery
      </h1>
      <p className="text-xl md:text-2xl text-blue-100 mb-8">
        British software developer building innovative solutions with modern technologies
      </p>
      <div className="flex justify-center space-x-4">
        <a href="mailto:kizwiz@hotmail.co.uk" className="bg-white text-blue-800 px-6 py-2 rounded-full hover:bg-blue-50 transition duration-300">
          Contact Me
        </a>
        <a
          href="https://www.dropbox.com/scl/fi/lhobteip40zlhp6r25fpe/KieranEmery_CV_2024.pdf?rlkey=t18j3jpmfsco2py96wn32nyp8&st=3nhxivnx&dl=0"
          className="border border-white text-white px-6 py-2 rounded-full hover:bg-white hover:text-blue-800 transition duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          View CV
        </a>
      </div>
    </div>
  </div>
);

export default HeroSection;