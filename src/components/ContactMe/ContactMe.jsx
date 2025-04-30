import React from "react";
import "./ContactMe.css";
import ContactForm from "./ContactForm/contactForm";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

function ContactMe() {
  return (
    <section className="contact-container" id="contact">
      <h5 className="tagged-title">
        <span className="code-tag">
          &lt;&gt; <span className="tag-text">Contact</span> &lt;/&gt;
        </span>
      </h5>
      <div className="contact-content">
        <div className="contact-left-content">
        <h4 style={{ color: "orangered" }}>CONTACT</h4>
          <h1>Let’s Build Something Great Together</h1>
          <p>Whether you have a project in mind, a question, or just want to say hello — feel free to reach out. I’m always open to new opportunities, collaborations, or a good tech chat!</p>
          <div className="left-cont">
            <FaEnvelope size={24}/>
            <p>gagurekobe@gmail.com</p>

          </div>
          <div className="left-cont">
            <FaPhoneAlt size={24}/>
            <p>+251-993676861</p>
          </div>
          <div className="left-cont">
            <FaMapMarkerAlt size={24}/>
            <p>Addis Ababa, Ethiopia</p>
          </div>
        </div>

        <div className="contact-form-container" style={{ flex: 1 }}>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

export default ContactMe;
