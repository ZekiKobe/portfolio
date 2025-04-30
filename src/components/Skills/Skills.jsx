import React from "react";
import "./Skills.css";
import { SKILLS } from "../../Utils/data";

function Skills() {
  return (
    <div
      className="skills-top-container"
      id="skills"
    >
      <h5
        className="tagged-title"
        style={{ paddingTop: "40px", marginLeft: "30px" }}
        data-aos="fade-up"
      >
        <span className="code-tag">
          &lt;&gt; <span className="tag-text">Skills</span> &lt;/&gt;
        </span>
      </h5>
      <div className="skills-container">
        {SKILLS.map((skill, index) => (
          <div
            className="skill-card"
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 50} // optional stagger animation
          >
            <h3 className="skill-title">{skill.skill}</h3>
            <p className="skill-desc">{skill.description}</p>
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: skill.percentage }}
              >
                <span className="progress-text">{skill.percentage}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
