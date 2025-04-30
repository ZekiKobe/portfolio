import React from 'react'
import './workExperienceCard.css'

function WorkExperienceCard({details}) {
    return (
        <div className="work-experience-card" >
            <div className="title-and-date-container">
            
            <h3>{details.company}</h3>
            <div className="work-duration">{details.date}</div>
            </div>

            <div className="timeline-container">
            <div className="timeline-line">
              <span className="dot" style={{ top: "0" }}></span>
              <span className="dot" style={{ top: "50%" }}></span>
            </div>
          </div>
            <div className="description-container">
            <h6>{details.title}</h6>
            <ul >
                {details.resposibilities.map((item) => (
                    <li key={item} >{item}</li>
                ))}
            </ul>
            </div>
        </div>
    )
}

export default WorkExperienceCard
