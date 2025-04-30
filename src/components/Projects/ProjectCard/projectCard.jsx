import React from 'react';
import { FaGithub } from 'react-icons/fa';
import './projectCard.css';

function ProjectCard({ details, iconUrl, links, aosType = 'fade-up', delay = 100 }) {
    return (
        <div className="project-card" data-aos={aosType} data-aos-delay={delay}>
            <div className="project-image-container">
                <img className='project-images' src={iconUrl} alt="" />
            </div>
            <div className="project-details-content">
                <h6>{details.title}</h6>
                <ul>
                    {details.resposibilities.map((item) => (
                        <li key={item}>{item}</li>
                    ))}
                </ul>
                <a
                    href={links.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="github-link"
                    title="View on GitHub"
                >
                    <FaGithub size={24} />
                </a>
            </div>
        </div>
    );
}

export default ProjectCard;
