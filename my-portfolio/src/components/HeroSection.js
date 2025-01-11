import React from 'react';

const HeroSection = () => (
  <div className="relative text-white min-h-[350px]" role="banner">
    {/* Background Image */}
    <div 
      className="absolute inset-0 bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('https://i.imgur.com/7H0stgf.png')`,
        backgroundPosition: 'center 35%'
      }}
      aria-hidden="true"
    />
    
    {/* Content Overlay */}
    <div className="relative z-10 max-w-6xl mx-auto px-4 py-16">
      <div className="text-center rounded-lg p-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-3 text-white">
          Kieran Emery
        </h1>
        
        <p className="text-lg md:text-xl text-blue-100 mb-6">
          British software developer building innovative solutions with modern technologies
        </p>
        
        {/* Call to Action Buttons */}
        <div className="flex justify-center space-x-4">
          <a
            href="mailto:kizwiz@hotmail.co.uk"
            className="bg-white text-blue-800 px-5 py-2 rounded-full hover:bg-blue-50 transition duration-300"
            aria-label="Contact Kieran Emery"
          >
            Contact Me
          </a>
          
          <a
            href="https://www.dropbox.com/scl/fi/lhobteip40zlhp6r25fpe/KieranEmery_CV_2024.pdf?rlkey=t18j3jpmfsco2py96wn32nyp8&st=3nhxivnx&dl=0"
            className="border border-white text-white px-5 py-2 rounded-full hover:bg-white hover:text-blue-800 transition duration-300"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View Kieran Emery's CV"
          >
            View CV
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default React.memo(HeroSection);