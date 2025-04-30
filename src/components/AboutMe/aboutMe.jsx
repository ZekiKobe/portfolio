import React, { useEffect } from "react";
import "./aboutMe.css";
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS styles

const AboutMe = () => {
    useEffect(() => {
      AOS.init({
        duration: 1000,
        once: true,
      });
    }, []);
  return (
    <div className="about-mr-container">
      <h5
        className="tagged-title" data-aos="fade-up"
        style={{ marginLeft: "25px", marginBottom: "20px" }}
      >
        <span className="code-tag">
          &lt;&gt; <span className="tag-text">About</span> &lt;/&gt;
        </span>
      </h5>
      <div className="about-me-contents">
        <div className="about-me-left">
          <img src="/assets/images/chocho.png" alt="" data-aos="zoom-in"/>
        </div>
        <div className="about-me-right">
          <h4 style={{ color: "orangered" }} data-aos="fade-up">About me</h4>
          <h1 data-aos="fade-up">Software Developer</h1>
          <p data-aos="fade-up" data-aos-delay="200">
            I'm a passionate software developer with a strong foundation in
            full-stack development, turning complex problems into elegant,
            user-friendly applications. Whether it's building responsive
            interfaces, designing robust backend systems, or diving into new
            tech, I thrive on learning and creating solutions that make a
            difference.!
          </p>
          <h5 data-aos="fade-up">Crafting Clean Code & Creative Solutions</h5>
          <div className="about-me-details-card">
            <div className="about-me-card-left" data-aos="fade-right" data-aos-delay="800">
              <div className="content-details">
                <span>Name</span>
                <p>
                  <strong>Zekarias Kobota</strong>
                </p>
              </div>
              <div className="content-details">
                <span>Age</span>
                <p>
                  <strong>25</strong>
                </p>
              </div>
              <div className="content-details">
                <span>Occupation</span>
                <p>
                  <strong>Software Engineer</strong>
                </p>
              </div>
            </div>
            <div className="about-me-card-right" data-aos="fade-left" data-aos-delay="400">
              <div className="content-details">
                <span>Phone</span>
                <p>
                  <strong>+251-993676861</strong>
                </p>
              </div>
              <div className="content-details">
                <span>Email</span>
                <p>
                  <strong>gagurekobe@gmail.com</strong>
                </p>
              </div>
              <div className="content-details">
                <span>Nationality</span>
                <p>
                  <strong>Ethiopian</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
