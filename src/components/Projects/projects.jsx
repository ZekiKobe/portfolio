import React from 'react'
import './projects.css'
import {PROJECTS} from '../../Utils/data'
import ProjectCard from './ProjectCard/projectCard'

function Projects() {
    return (
        <section className="project-container" id='projects'>
              <h5 className="tagged-title">
        <span className="code-tag">
          &lt;&gt; <span className="tag-text">Projects</span> &lt;/&gt;
        </span>
      </h5>
        <div className="project-content">
            {PROJECTS.map((item) =>(
                <ProjectCard key={item.title}
                iconUrl={item.icon}
                details={item}
                links={item} />
            ))}
        </div>
    </section>
    )
}

export default Projects
