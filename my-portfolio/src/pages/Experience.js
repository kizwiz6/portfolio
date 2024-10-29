// src/pages/Experience.js

import React, { useState, Suspense, lazy } from 'react';
import { Calendar } from 'lucide-react';
import { experiences } from '../data/experiences';
import Layout from '../components/Layout';
import AnimatedComponent from '../components/AnimatedComponent';

// Lazy load the ImageGallery component
const ImageGallery = lazy(() => import('../components/ImageGallery'));

const Experience = () => {
  const [activeTab, setActiveTab] = useState('experience');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Layout
      activeTab={activeTab}
      setActiveTab={setActiveTab}
      setIsMenuOpen={setIsMenuOpen}
      isMenuOpen={isMenuOpen}
    >
      <AnimatedComponent style={{ marginBottom: '24px' }}>
        <h2 className="text-4xl font-bold">Work Experience</h2>
      </AnimatedComponent>
      <p className="text-gray-600 mb-6">
        Below is a summary of the work I've completed at various companies, showcasing my contributions to significant projects, technologies utilized, and the skills I've developed throughout my career.
      </p>

      {experiences.length === 0 ? (
        <p className="text-gray-600">No experience listed.</p>
      ) : (
        experiences.map((exp, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-6 mb-6">
            <div className="flex items-center mb-2">
              <span className="text-gray-600 flex-shrink-0">
                <Calendar size={16} className="mr-2" />
                {exp.period}
              </span>
              <h3 className="text-xl font-semibold flex-grow text-center">
                <a
                  href={exp.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${exp.company} website`}
                >
                  {exp.company}
                </a>
              </h3>
              <span className="font-medium text-gray-600 flex-shrink-0 ml-4">
                {exp.role}
              </span>
            </div>
            <ul className="list-disc list-inside text-gray-600 mb-4">
              {exp.description.map((point, pointIndex) => (
                <li key={pointIndex}>{point}</li>
              ))}
            </ul>

            {/* Image Gallery Section */}
            {exp.images && exp.images.length > 0 && (
              <Suspense fallback={<div>Loading images...</div>}>
                <ImageGallery images={exp.images} title={exp.company} />
              </Suspense>
            )}
          </div>
        ))
      )}
    </Layout>
  );
};

export default Experience;
