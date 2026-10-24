import React from 'react';
import { ArrowUpRight, CalendarDays } from 'lucide-react';

const ProjectCard = ({ project }) => {
    const hasLongDescription = typeof project.description === 'string' && project.description.length > 420;
    const descriptionPreview = hasLongDescription
        ? `${project.description.slice(0, 380).trimEnd()}...`
        : project.description;

    return (
        <article className="project-card">
            <div className="project-card-topline">
                <span className="project-category">{project.category || project.university || 'Selected work'}</span>
                {project.status && <span className="project-status">{project.status}</span>}
            </div>
            <h3>{project.title}</h3>
            {project.period && <p className="project-period"><CalendarDays size={14} aria-hidden="true" /> {project.period}</p>}

            {project.thumbnail && (
                <img className="project-media" src={project.thumbnail} alt={`${project.title} preview`} loading="lazy" />
            )}
            {project.videoSource && (
                <video className="project-video" controls preload="metadata" poster={project.thumbnail}>
                    <source src={`${process.env.PUBLIC_URL}/${project.videoSource}`} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            )}
            {project.youtubeVideo && (
                <iframe
                    className="project-video"
                    src={project.youtubeVideo.replace('watch?v=', 'embed/').split('&')[0]}
                    title={`${project.title} video`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                />
            )}

            {project.description && <div className="project-description">{descriptionPreview}</div>}
            {hasLongDescription && (
                <details className="project-details">
                    <summary>Read full description</summary>
                    <p className="project-description">{project.description}</p>
                </details>
            )}

            {project.responsibilities?.length > 0 && (
                <details className="project-details">
                    <summary>Key responsibilities</summary>
                    <ul className="experience-points">
                        {project.responsibilities.map((task) => <li key={task.title}><strong>{task.title}:</strong> {task.description}</li>)}
                    </ul>
                </details>
            )}

            {project.tags?.length > 0 && (
                <div className="project-tags" aria-label="Technologies and tools">
                    {project.tags.map((tag, index) => <span className="tag" key={`${tag}-${index}`}>{tag}</span>)}
                </div>
            )}

            <div className="project-actions">
                {project.link && (
                    <a className="project-action" href={project.link} target="_blank" rel="noopener noreferrer">
                        View project <ArrowUpRight size={15} aria-hidden="true" />
                    </a>
                )}
                {project.grade && <span className="project-period">Grade: {project.grade}</span>}
            </div>
        </article>
    );
};

export default ProjectCard;