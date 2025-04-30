import React, { useState, useEffect } from "react";
import { TESTIMONIALS } from "../../Utils/data";
import "./TestimonialCarousel.css";

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === TESTIMONIALS.length - 1 ? 0 : prev + 1
      );
    }, 4000); // 4 seconds
    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? TESTIMONIALS.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prev) =>
      prev === TESTIMONIALS.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="testimonial-wrapper">
      <h5 className="tagged-title" style={{ marginLeft: "40px" }}>
        <span className="code-tag">
          &lt;&gt; <span className="tag-text">Testimonials</span> &lt;/&gt;
        </span>
      </h5>
      {TESTIMONIALS.map((item, index) => (
        <div
          key={index}
          className={`testimonial-slide ${
            index === currentIndex ? "active" : ""
          }`}
        >
          <div className="testimonial-slide-left">
            <h3 className="testimonial-title">{item.title}</h3>
            <p className="testimonial-description">"{item.description}"</p>
            <div className="small-image-and-name">
              <img
                src={item.photo}
                alt={item.name}
                className="testimonial-photo"
              />
              <div className="name-and-profession">
                <p
                  className="testimonial-name"
                  style={{ display: "inline", margin: 0, padding: 0 }}
                >
                  {item.name}
                </p>
                <br />
                <span
                  style={{
                    fontSize: "12px",
                    padding: 0,
                    margin: 0,
                    display: "inline",
                  }}
                >
                  {item.profession}
                </span>
              </div>
            </div>
          </div>
          <div className="testimonial-slide-right">
            <img src={item.photo} alt={item.name} />
          </div>
        </div>
      ))}
      <div className="testimonial-navigation">
        <button className="nav-button" onClick={goToPrevious}>
          &lt;
        </button>
        <button className="nav-button" onClick={goToNext}>
          &gt;
        </button>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
