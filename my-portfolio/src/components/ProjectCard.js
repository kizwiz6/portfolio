import React from 'react';
import { Calendar } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from 'react-spring';

const ProjectCard = ({ project }) => {
    const [ref, inView] = useInView({
        threshold: 0.1,
        triggerOnce: true
    });

    const animation = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(50px)',
        config: { mass: 1, tension: 280, friction: 20 }
    });

    return (
        <animated.div ref={ref} style={animation}>
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
                    <img
                        src={project.thumbnail}
                        alt={`${project.title} thumbnail`}
                        className="mb-4 rounded w-full h-auto object-cover"
                        loading="lazy"
                    />
                )}

                {/* Video Section */}
                {project.videoSource && (
                    <div className="video-container mb-4">
                        <video controls className="w-full">
                            <source src={`${process.env.PUBLIC_URL}/${project.videoSource}`} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                )}

                {/* YouTube Video Embed */}
                {project.youtubeVideo && (
                    <iframe
                        width="100%"
                        height="315"
                        src={project.youtubeVideo.replace("watch?v=", "embed/").split("&")[0]}
                        title={`${project.title} video`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="mb-4"
                        loading="lazy"
                    ></iframe>
                )}

                {/* Category Badge */}
                {project.category && (
                    <span className="inline-block bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded mb-3">
                        {project.category}
                    </span>
                )}

                {/* Description */}
                <p className="text-gray-600 mb-4">{project.description}</p>

                {/* Responsibilities */}
                {project.responsibilities && (
                    <>
                        <h4 className="font-medium mt-4">Key Responsibilities:</h4>
                        <ul className="list-disc list-inside space-y-2">
                            {project.responsibilities.map((task, taskIndex) => (
                                <li key={taskIndex}>
                                    <strong>{task.title}:</strong> {task.description}
                                </li>
                            ))}
                        </ul>
                    </>
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
                    <>
                        <h4 className="font-medium mt-4">Technologies & Tools:</h4>
                        <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag, tagIndex) => (
                                <span key={tagIndex} className="bg-gray-100 text-gray-800 text-sm px-2 py-1 rounded">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </>
                )}
            </div>
        </animated.div>
    );
};

export default ProjectCard;