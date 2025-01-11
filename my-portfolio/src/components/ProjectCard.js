import React, { Suspense, memo, useState } from 'react';
import { Calendar, X } from 'lucide-react';
import ErrorBoundary from './ErrorBoundary';
import OptimizedImage from './OptimizedImage';
import LoadingSpinner from './LoadingSpinner';

const ProjectCard = memo(({ project }) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  return (
    <ErrorBoundary>
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        {/* Header Section - Same as before */}
        <div className="mb-4">
          <div className="flex justify-between items-start mb-3">
            <h3 className="text-xl font-semibold">{project.title}</h3>
            {project.status && (
              <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded ml-2">
                {project.status}
              </span>
            )}
          </div>

          {project.period && (
            <div className="flex items-center text-gray-600 text-sm mb-3">
              <Calendar size={16} className="mr-2" />
              {project.period}
            </div>
          )}

          {project.category && (
            <div className="mb-3">
              <span className="inline-block bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded">
                {project.category}
              </span>
            </div>
          )}
        </div>

        {/* Description */}
        <div className="text-gray-600 mb-6">
          {project.description}
        </div>

        {/* Media Section */}
        {(project.thumbnail || project.videoSource) && (
          <div className="mb-8 flex justify-center"> {/* Added flex and justify-center */}
            {project.thumbnail && (
              <div className="relative max-w-2xl cursor-pointer" onClick={() => setLightboxOpen(true)}>
                <OptimizedImage
                  src={project.thumbnail}
                  alt={`${project.title} thumbnail`}
                  className="rounded w-full h-auto max-h-[400px] object-contain hover:opacity-95 transition-opacity"
                />
              </div>
            )}

            {project.videoSource && (
              <Suspense fallback={<LoadingSpinner size="medium" />}>
                <div className="max-w-2xl">
                  <video controls className="w-full rounded">
                    <source src={`${process.env.PUBLIC_URL}/${project.videoSource}`} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </Suspense>
            )}
          </div>
        )}

        {/* Rest of the content - Same as before */}
        {project.responsibilities && (
          <div className="mb-6">
            <h4 className="font-medium mb-2">Key Responsibilities:</h4>
            <ul className="list-disc list-inside space-y-2">
              {project.responsibilities.map((task, index) => (
                <li key={index} className="text-gray-600">
                  <strong>{task.title}:</strong> {task.description}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="pt-4">
          {project.grade && (
            <div className="mb-4">
              <span className="inline-block bg-green-100 text-green-800 text-sm px-2 py-1 rounded">
                Grade: {project.grade}
              </span>
            </div>
          )}

          {project.link && (
            <div className="mb-4">
              <a
                href={project.link}
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </div>
          )}

          {project.tags && project.tags.length > 0 && (
            <div>
              <h4 className="font-medium mb-2">Technologies & Tools:</h4>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <span key={index} className="bg-gray-100 text-gray-800 text-sm px-2 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Lightbox */}
        {lightboxOpen && project.thumbnail && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
            onClick={() => setLightboxOpen(false)}
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
              onClick={() => setLightboxOpen(false)}
            >
              <X size={24} />
            </button>
            <div 
              className="max-w-[90vw] max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={project.thumbnail}
                alt={`${project.title} (enlarged view)`}
                className="max-w-full max-h-[90vh] object-contain rounded shadow-lg"
              />
            </div>
          </div>
        )}
      </div>
    </ErrorBoundary>
  );
});

ProjectCard.displayName = 'ProjectCard';

export default ProjectCard;