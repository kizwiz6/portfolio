// src/pages/Education.js

import React, { lazy, Suspense } from 'react';
import { Calendar } from 'lucide-react';
import AnimatedComponent from '../components/AnimatedComponent';
import Layout from '../components/Layout';
import { educationData } from '../data/educationData';

// Lazy load the ImageGallery component
const ImageGallery = lazy(() => import('../components/ImageGallery'));

const Education = ({ activeTab, setActiveTab, setIsMenuOpen, isMenuOpen }) => {
  const renderEducationEntry = (edu, index) => (
    <div key={index} className="bg-white shadow-md rounded-lg p-6 mb-6">
      <div className="flex items-center mb-2">
        <span className="text-gray-600 flex-shrink-0">
          <Calendar size={16} className="mr-2" />
          {edu.period}
        </span>
        <h3 className="text-xl font-semibold flex-grow text-center">{edu.institution}</h3>
        <span className="font-medium text-gray-600 flex-shrink-0 ml-4">
          Grade: {edu.grade}
        </span>
      </div>

      {/* Description for each education entry */}
      <p className="text-gray-600 mb-4">
        {edu.institution === 'Coventry University' && "At Coventry University, I honed my skills in software development and project management through hands-on projects and collaborative teamwork. I specialised in agile methodologies and developed a strong foundation in both front-end and back-end technologies."}
        {edu.institution === 'Bedford College' && "During my time at Bedford College, I dedicated myself to an intensive course focused solely on Information Technology. This immersive experience allowed me to delve deeply into web technologies, design principles, and essential ICT skills. The curriculum emphasised practical, hands-on learning, providing numerous opportunities to engage in real-world projects. This focused approach not only honed my technical abilities but also fostered critical problem-solving skills and a strong understanding of the industry's best practices."}
        {edu.institution === 'Longsands Academy' && "At Longsands Academy, I completed my GCSEs and A-Levels, which ultimately sparked my interest in computing and technology."}
      </p>

      <p className="font-medium mb-4">{edu.degree}</p>

      {/* Extracurricular activities */}
      {edu.activities && (
        <>
          <h4 className="font-medium mb-2">Extracurricular activities:</h4>
          <p className="text-gray-600">
            {edu.activities.split(',').map((activity, index) => (
              <span key={index}>
                {activity.trim()}
                {index < edu.activities.split(',').length - 1 && ', '}
              </span>
            ))}
          </p>
        </>
      )}

      {/* Courses */}
      {edu.coursework && edu.coursework.length > 0 && (
        <>
          <h4 className="font-medium mb-4">Courses:</h4>
          <table className="w-full table-auto border-collapse text-left">
            <thead>
              <tr>
                <th className="border-b-2 py-2 text-gray-700">Year</th>
                <th className="border-b-2 py-2 text-gray-700">Subjects</th>
              </tr>
            </thead>
            <tbody>
              {edu.coursework.map((course, courseIndex) => (
                <tr key={courseIndex} className="border-b">
                  <td className="py-2 font-medium text-gray-700">{course.year}</td>
                  <td className="py-2">
                    <ul className="list-disc list-inside">
                      {course.subjects.map((subject, subjectIndex) => (
                        <li key={subjectIndex} className="text-gray-600">{subject}</li>
                      ))}
                    </ul>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}

      {/* YouTube Video Embed */}
      {edu.youtubeVideo && (
        <iframe
          width="100%"
          height="315"
          src={edu.youtubeVideo.replace("watch?v=", "embed/").split("&")[0]}
          title={`${edu.institution} video`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="mb-4"
        ></iframe>
      )}

      {/* Image Gallery Section */}
      {edu.galleryImages && edu.galleryImages.length > 0 && (
        <Suspense fallback={<div>Loading images...</div>}>
          <ImageGallery images={edu.galleryImages} title={edu.institution} />
        </Suspense>
      )}
    </div>
  );

  return (
    <Layout activeTab={activeTab} setActiveTab={setActiveTab} setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen}>
      <div className="py-4"> {/* Added padding for better spacing */}
        <AnimatedComponent style={{ marginBottom: '24px' }}>
          <h2 className="text-4xl font-bold">Education</h2>
        </AnimatedComponent>

        {/* Brief introductory text about your education background */}
        <p className="text-lg text-gray-700 mb-6">
          My academic journey has provided a strong foundation in software development and computer science.
          From Longsands Academy to Bedford College, and ultimately to Coventry University, each institution has played a crucial role in shaping my skills and passion for technology.
          Below, you'll find details of my qualifications, showcasing my commitment to learning and growth in the field.
        </p>

        {/* Loop through each education entry */}
        {educationData.map(renderEducationEntry)}
      </div>
    </Layout>
  );
};

export default Education;
