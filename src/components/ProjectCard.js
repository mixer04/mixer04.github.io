import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ project }) => {
    return (
        <div className="project">
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p className='tech'>{project.technology}</p>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
    );
}

export default ProjectCard;