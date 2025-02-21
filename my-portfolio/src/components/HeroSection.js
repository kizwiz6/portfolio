// src/components/HeroSection.js
import React, { useEffect, useState } from 'react';

const HERO_IMAGE_URL = 'https://github.com/kizwiz6/portfolio/blob/master/my-portfolio/public/Mollie-bg.jpg?raw=true';

const HeroSection = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    // Preload the image
    const img = new Image();
    img.src = HERO_IMAGE_URL;
    img.onload = () => setImageLoaded(true);
  }, []);

  return (
    <div
      className={`
        text-white bg-cover bg-center h-[500px] relative transition-opacity duration-300
        ${imageLoaded ? 'opacity-100' : 'opacity-0'}
      `}
      style={{
        backgroundImage: `url(${HERO_IMAGE_URL})`,
        // Add a base background color that matches your image's overall tone
        backgroundColor: '#4a5568' // This will show while the image loads
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center px-4">
        <div className="max-w-6xl w-full text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
            Kieran Emery
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8">
            British software developer building innovative solutions with modern technologies
          </p>
          <div className="flex justify-center space-x-4">
            <button
              onClick={() => window.location.href = 'mailto:kizwiz@hotmail.co.uk'}
              className="bg-white text-blue-800 px-6 py-2 rounded-full hover:bg-blue-50 transition duration-300"
            >
              Contact Me
            </button>
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
    </div>
  );
};

export default HeroSection;