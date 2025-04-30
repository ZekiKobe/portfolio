import React, { useEffect } from "react";
import "./Hero.css";
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS styles

function Hero() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section className="hero-container" id="home">
      <div className="hero-content" data-aos="fade-up">
        <h2>
          Hello{" "}
          <img
            src="./assets/images/hand_icon.png"
            width={"80px"}
            height={"80px"}
            alt=""
            data-aos="zoom-in" // Adding animation to image
          />
          , My name is{" "}
          <span style={{ color: "orangered" }} data-aos="fade-up">
            Zekarias Kobota
          </span>
        </h2>
        <p data-aos="fade-up" data-aos-delay="200">
          I am a Passionate Full Stack Developer | Transforming Ideas Into
          Seamless and visually Stunning Solutions.
        </p>
      </div>

      <div className="hero-img">
        <div data-aos="fade-left" data-aos-delay="400">
          <div className="tech-icon">
            <img src="./assets/images/node.png" alt="" data-aos="zoom-in" />
          </div>
          <img
            src="./assets/images/zack.png"
            alt=""
            data-aos="zoom-in-up"
            data-aos-delay="600"
          />
        </div>
        <div data-aos="fade-right" data-aos-delay="800">
          <div className="tech-icon" data-aos="fade-right" data-aos-delay="800">
            <img src="./assets/images/html.png" alt="" />
          </div>
          <div className="tech-icon" data-aos="fade-right" data-aos-delay="800">
            <img src="./assets/images/python.png" alt="" />
          </div>
          <div className="tech-icon" data-aos="fade-right" data-aos-delay="800">
            <img src="./assets/images/react.png" alt="" />
          </div>
          <div className="tech-icon" data-aos="fade-right" data-aos-delay="800">
            <img src="./assets/images/flutter.png" alt="" />
          </div>
          <div className="tech-icon" data-aos="fade-right" data-aos-delay="800">
            <img src="./assets/images/php.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
