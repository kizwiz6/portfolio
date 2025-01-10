import React, { Suspense, memo } from 'react';
import { Calendar } from 'lucide-react';
import ErrorBoundary from './ErrorBoundary';
import OptimizedImage from './OptimizedImage';
import LoadingSpinner from './LoadingSpinner';
import SuspenseBoundary from './SuspenseBoundary';

const ProjectCard = memo(({ project }) => {
  return (
    <ErrorBoundary>
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        {/* Title and Status */}
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-semibold">{project.title}</h3>
          {project.status && (
            <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
              {project.status}
            </span>
          )}
        </div>

        {/* Period */}
        {project.period && (
          <div className="flex items-center text-gray-600 text-sm mb-2">
            <Calendar size={16} className="mr-2" />
            {project.period}
          </div>
        )}

        {/* Thumbnail */}
        {project.thumbnail && (
          <OptimizedImage
            src={project.thumbnail}
            alt={`${project.title} thumbnail`}
            className="mb-4 rounded w-full h-48 object-cover"
          />
        )}

        {/* Video */}
        {project.videoSource && (
          <SuspenseBoundary fallback={<LoadingSpinner size="medium" />}>
            <div className="relative mb-4">
              <video
                controls
                className="w-full rounded"
              >
                <source src={`${process.env.PUBLIC_URL}/${project.videoSource}`} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </SuspenseBoundary>
        )}

        {/* YouTube Video */}
        {project.youtubeVideo && (
          <div className="relative mb-4 pt-[56.25%]">
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded"
              src={project.youtubeVideo.replace("watch?v=", "embed/").split("&")[0]}
              title={`${project.title} video`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        )}

        {/* Category Badge */}
        {project.category && (
          <span className="inline-block bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded mb-3">
            {project.category}
          </span>
        )}

        {/* Description */}
        <div className="text-gray-600 mb-4">{project.description}</div>

        {/* Responsibilities */}
        {project.responsibilities && (
          <div className="mt-4">
            <h4 className="font-medium">Key Responsibilities:</h4>
            <ul className="list-disc list-inside space-y-2">
              {project.responsibilities.map((task, index) => (
                <li key={index}>
                  <strong>{task.title}:</strong> {task.description}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Grade Badge */}
        {project.grade && (
          <span className="inline-block bg-green-100 text-green-800 text-sm px-2 py-1 rounded mb-3">
            Grade: {project.grade}
          </span>
        )}

        {/* Project Link */}
        {project.link && (
          <a
            href={project.link}
            className="text-blue-500 hover:underline mt-4 block"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Project
          </a>
        )}

        {/* Tags */}
        {project.tags && project.tags.length > 0 && (
          <div className="mt-4">
            <h4 className="font-medium">Technologies & Tools:</h4>
            <div className="flex flex-wrap gap-2 mt-2">
              {project.tags.map((tag, index) => (
                <span key={index} className="bg-gray-100 text-gray-800 text-sm px-2 py-1 rounded">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </ErrorBoundary>
  );
});

ProjectCard.displayName = 'ProjectCard';

export default ProjectCard;