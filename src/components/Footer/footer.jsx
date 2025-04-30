import React from "react";
import "./footer.css";
import { FaFacebook, FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';

function Footer() {
  return (
    <div className="footer">
      <span>&copy;opyright 2025 reserved to Zekarias Kobota</span>
      <div className="social-media-icons">
        <a href="https://www.linkedin.com/in/zekarias-kobota-1695a0246?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
        <FaLinkedin size={24}/>
        </a>
        <a href="https://www.facebook.com/profile.php?id=61556368776937">
        <FaFacebook size={24}/>
        </a>

        <a href="https://www.instagram.com/kobezeki?igsh=aGl6OXVnZHhmemVv">
          <FaInstagram size={24}/>
        </a>
        <a href="https://github.com/ZekiKobe">
        <FaGithub size={24}/>
        </a>
      </div>
    </div>
  );
}

export default Footer;
