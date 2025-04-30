import React from "react";
import "./workExperience.css";
import { WORK_EXPERIENCE } from "../../Utils/data";
import WorkExperienceCard from "./WorkExperienceCard/workExperienceCard";
import "@fontsource-variable/material-symbols-outlined";


function WorkExperience() {

  return (
    <section className="experience-container" id="experience">
      <h5 className="tagged-title" style={{ marginBottom: "40px" }}>
        <span className="code-tag">
          &lt;&gt; <span className="tag-text">Work experience</span> &lt;/&gt;
        </span>
      </h5>
      <div className="experience-content">
        {WORK_EXPERIENCE.map((item, index) => (
          <WorkExperienceCard
            key={item.title}
            details={item}
            data-aos="fade-up" // Animation trigger
            data-aos-delay={index * 100} // Stagger animation for each item
            data-aos-duration="1000"
          />
        ))}
      </div>
    </section>
  );
}

export default WorkExperience;
