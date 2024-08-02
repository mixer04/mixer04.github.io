import React, { useEffect, useState } from 'react';
import './Projects.css';
import projectsData from '../data/projects.json';
import ProjectCard from './ProjectCard';

const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        // Ensure that the projects data is set only once
        if (projects.length === 0) {
            setProjects(projectsData);
        }
    }, [projects]);

    return (
        <div className='Projects'>
            <h2>Projects</h2>
            <div className="project-container">
                {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </div>
    );
}

export default Projects;