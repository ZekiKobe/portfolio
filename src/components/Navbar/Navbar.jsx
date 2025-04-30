import React, { useState } from "react";
import "./Navbar.css";
import MobileNav from "./MobileNav/mobileNav";
import { Link } from "react-scroll";
import { FaFacebook, FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';
import ThemeToggle from "../ThemeToggle";

function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };
  const toggleClose = () => {
    setOpenMenu(!openMenu);
  };
  const handleDownload = () => {
    const url = "./assets/PDF/CV-Zekarias Kobota.pdf";
    const link = document.createElement("a");
    link.href = url;
    link.download = "CV-Zekarias Kobota.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <MobileNav
        isOpen={openMenu}
        toggleMenu={toggleMenu}
        toggleClose={toggleClose}
      />
      <nav className="nav-wrapper">
        <div className="nav-content">
          <img src="./assets/images/z.png" alt="" className="logo" />
          <ul>
            <li>
              <Link
                className="menu-item"
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={-70} // Adjust the offset as needed
                duration={500}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="menu-item"
                activeClass="active"
                to="skills"
                spy={true}
                smooth={true}
                offset={-70} // Adjust the offset as needed
                duration={500}
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                className="menu-item"
                activeClass="active"
                to="experience"
                spy={true}
                smooth={true}
                offset={-70} // Adjust the offset as needed
                duration={500}
              >
                Work Experience
              </Link>
            </li>
            <li>
              <Link
                className="menu-item"
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                offset={-70} // Adjust the offset as needed
                duration={500}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                className="menu-item"
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-70} // Adjust the offset as needed
                duration={500}
              >
                Contact me
              </Link>
            </li>
            <button className="contact-btn" onClick={handleDownload}>
              Download CV
            </button>
          </ul>

          <div className="social-media-icons" style={{ textAlign: "center",marginTop:"auto",marginBottom:"auto",gap:"12px" }}>
            <a href="https://www.linkedin.com/in/zekarias-kobota-1695a0246?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
              <FaLinkedin size={24} />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61556368776937">
              <FaFacebook size={24} />
            </a>

            <a href="https://www.instagram.com/kobezeki?igsh=aGl6OXVnZHhmemVv">
              <FaInstagram size={24} />
            </a>
            <a href="https://github.com/ZekiKobe">
              <FaGithub size={24} />
            </a>
          </div>
          <div className="menu-btn-and-theme-container">
          <button className="menu-btn" onClick={toggleMenu}>
            <img
              src="/assets/images/menu.png"
              width={"30px"}
              height={"35x"}
              alt=""
            />
          </button>
          <ThemeToggle/>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
