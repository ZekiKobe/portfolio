// Services.jsx
import React from "react";
import "./Services.css";
import {servicesData} from '../../Utils/data';

const Services = () => {
  return (
    <section className="services">
      <div className="container">
      <h5
        className="tagged-title"
        style={{ paddingTop: "40px", marginLeft: "30px",marginBottom:"30px" }}
        data-aos="fade-up"
      >
        <span className="code-tag">
          &lt;&gt; <span className="tag-text">Services</span> &lt;/&gt;
        </span>
      </h5>
        <div className="services-grid" >
          {servicesData.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
