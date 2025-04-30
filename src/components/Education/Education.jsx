import React from "react";
import { EDUCATION } from "../../Utils/data";
import "./Education.css";

function Education() {
  return (
    <section className="education-container" id="education">
      <h5
        className="tagged-title"
        data-aos="fade-up" // Trigger fade-up animation on scroll
        data-aos-duration="1000"
      >
        <span className="code-tag">
          &lt;&gt; <span className="tag-text">Education</span> &lt;/&gt;
        </span>
      </h5>

      {EDUCATION.map((item, index) => (
        <div
          className="education-content"
          key={index}
          data-aos="fade-up" // Animation trigger
          data-aos-delay={index * 100} // Stagger animation for each item
          data-aos-duration="1000" // Duration for the fade-up animation
        >
          <div className="education-left" data-aos="fade-left"> {/* Animation when it comes from left */}
            <ul>
              <li>
                <h3>{item.organization}</h3>
              </li>
              <li className="date-field">{item.date}</li>
              <li>{item.field}</li>
            </ul>
          </div>

          <div className="timeline-container" data-aos="fade-right"> {/* Animation when it comes from right */}
            <div className="timeline-line">
              <span className="dot" style={{ top: "0" }}></span>
              <span className="dot" style={{ top: "50%" }}></span>
            </div>
          </div>

          <div className="education-right" data-aos="fade-up"> {/* Animation when it fades up */}
            <h4>{item.title}</h4>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Education;
