// src/pages/Education.js

import React, { lazy, Suspense } from 'react';
import Layout from '../components/Layout';
import { educationData } from '../data/educationData';

// Lazy load the ImageGallery component
const ImageGallery = lazy(() => import('../components/ImageGallery'));

const Education = () => {
  const renderEducationEntry = (edu, index) => (
    <article key={edu.institution} className="education-card">
      <div className="education-head">
        <div>
          <p className="education-period">{edu.period}</p>
          <h3>{edu.institution}</h3>
          <p className="education-degree">{edu.degree}</p>
        </div>
        {edu.grade && <span className="education-grade">{edu.grade}</span>}
      </div>

      <p className="education-description">
        {edu.institution === 'Coventry University' && "At Coventry University, I honed my skills in software development and project management through hands-on projects and collaborative teamwork. I specialised in agile methodologies and developed a strong foundation in both front-end and back-end technologies."}
        {edu.institution === 'Bedford College' && "During my time at Bedford College, I dedicated myself to an intensive course focused solely on Information Technology. This immersive experience allowed me to delve deeply into web technologies, design principles, and essential ICT skills. The curriculum emphasised practical, hands-on learning, providing numerous opportunities to engage in real-world projects. This focused approach not only honed my technical abilities but also fostered critical problem-solving skills and a strong understanding of the industry's best practices."}
        {edu.institution === 'Longsands Academy' && "At Longsands Academy, I completed my GCSEs and A-Levels, which ultimately sparked my interest in computing and technology."}
      </p>

      {edu.activities && (
        <p className="education-description"><strong>Activities:</strong> {edu.activities}</p>
      )}

      {edu.coursework && edu.coursework.length > 0 && (
        <details className="coursework-disclosure">
          <summary>View coursework across {edu.coursework.length} years</summary>
          <div className="coursework-years">
            {edu.coursework.map((course) => (
              <section key={course.year}>
                <h4>{course.year}</h4>
                <ul className="education-course-list">
                  {course.subjects.map((subject) => <li key={subject}>{subject}</li>)}
                </ul>
              </section>
            ))}
          </div>
        </details>
      )}

      {edu.youtubeVideo && (
        <iframe
          src={edu.youtubeVideo.replace("watch?v=", "embed/").split("&")[0]}
          title={`${edu.institution} video`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
          className="education-video"
        />
      )}

      {edu.galleryImages && edu.galleryImages.length > 0 && (
        <Suspense fallback={<div>Loading images...</div>}>
          <ImageGallery images={edu.galleryImages} title={edu.institution} />
        </Suspense>
      )}
    </article>
  );

  return (
    <Layout>
      <div className="education-page">
        <header className="page-heading">
          <p className="eyebrow">Foundations / 04</p>
          <h2>Education</h2>
          <p className="page-lede">A practical foundation in computing, software development, and the habits that support a career of continuous learning.</p>
        </header>
        <div className="education-list">
        {educationData.map(renderEducationEntry)}
        </div>
      </div>
    </Layout>
  );
};

export default Education;
