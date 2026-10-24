// src/pages/Experience.js

import React, { Suspense, lazy } from 'react';
import { ArrowUpRight, Briefcase, CalendarDays, MapPin } from 'lucide-react';
import { experiences } from '../data/experiences';
import Layout from '../components/Layout';

const ImageGallery = lazy(() => import('../components/ImageGallery'));

const Experience = () => (
  <Layout>
    <div className="experience-page">
      <header className="page-heading">
        <p className="eyebrow">Career / 01</p>
        <h2>Work experience</h2>
        <p className="page-lede">
          A timeline of the teams, products, and problems I have worked on.
        </p>
      </header>

      <ol className="experience-timeline">
        {experiences.map((experience, index) => (
          <li className={`experience-item${index === 0 ? ' is-current' : ''}`} key={experience.company}>
            <div className="timeline-index" aria-hidden="true">{String(index + 1).padStart(2, '0')}</div>
            <article className="experience-card">
              <div className="experience-meta">
                <span><CalendarDays size={15} aria-hidden="true" />{experience.period}</span>
                {experience.location && <span><MapPin size={15} aria-hidden="true" />{experience.location}</span>}
                {index === 0 && <span className="current-badge"><span />Current role</span>}
              </div>

              <div className="experience-title-row">
                <div>
                  <h3>{experience.role}</h3>
                  {experience.website ? (
                    <a className="company-link" href={experience.website} target="_blank" rel="noopener noreferrer">
                      {experience.company}<ArrowUpRight size={15} aria-hidden="true" />
                    </a>
                  ) : (
                    <p className="company-name">{experience.company}</p>
                  )}
                </div>
                <Briefcase className="experience-icon" size={24} aria-hidden="true" />
              </div>

              <ul className="experience-points">
                {experience.description.map((point) => <li key={point}>{point}</li>)}
              </ul>

              {experience.technologies?.length > 0 && (
                <div className="tag-list" aria-label="Technologies">
                  {experience.technologies.map((technology) => <span className="tag" key={technology}>{technology}</span>)}
                </div>
              )}

              {experience.images?.length > 0 && (
                <Suspense fallback={<p className="loading-note">Loading gallery…</p>}>
                  <ImageGallery images={experience.images} title={experience.company} />
                </Suspense>
              )}
            </article>
          </li>
        ))}
      </ol>
    </div>
  </Layout>
);

export default Experience;
