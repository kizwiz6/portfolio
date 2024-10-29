// src/components/Experience.js
import React from 'react';
import ImageGallery from '../components/ImageGallery';
import { Calendar } from 'lucide-react';

const Experience = ({ experience = [] }) => {
    console.log("Experience Data:", experience); // Check what data is being received
  
    return (
      <div>
        <h2 className="text-3xl font-bold mb-8">Experience</h2>
        {experience.length === 0 ? (
          <p className="text-gray-600">No experience listed.</p>
        ) : (
          experience.map((exp, index) => (
            <div key={index} className="mb-6">
              <div className="flex items-center mb-2">
                <span className="text-gray-600 flex-shrink-0">
                  <Calendar size={16} className="mr-2" />
                  {exp.period}
                </span>
                <h3 className="text-xl font-semibold flex-grow text-center">{exp.company}</h3>
              </div>

              <p className="text-gray-600 mb-4">{exp.description.join(' ')}</p> {/* Display descriptions properly */}

              {/* Image Gallery Section */}
              {exp.images && exp.images.length > 0 && (
                  <ImageGallery images={exp.images} title={exp.company} />
              )}
            </div>
          ))
        )}
      </div>
    );
};

export default Experience;
