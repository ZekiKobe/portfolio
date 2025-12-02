import React, { useState } from "react";
import MobileNav from "./MobileNav/mobileNav";
import { Link } from "react-scroll";
import { FaFacebook, FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';
// import ThemeToggle from "../ThemeToggle";

function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };
  const toggleClose = () => {
    setOpenMenu(!openMenu);
  };
  const handleDownload = () => {
    const url = "./assets/PDF/Zekarias Kobota CV-DEV.pdf";
    const link = document.createElement("a");
    link.href = url;
    link.download = "Zekarias Kobota CV-DEV.pdf";
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
      <nav className="fixed top-0 inset-x-0 z-30 backdrop-blur-2xl bg-slate-950/60 border-b border-slate-800/60">
        <div className="w-full max-w-6xl mx-auto px-4 flex items-center justify-between py-3 md:py-4">
          <div className="flex items-center gap-3">
            <img
              src="./assets/images/z.png"
              alt="Zekarias logo"
              className="h-10 w-10 rounded-full border border-slate-700/70 shadow-md"
            />
            <div className="hidden sm:flex flex-col leading-tight">
              <span className="text-sm font-medium text-slate-200">
                Zekarias Kobota
              </span>
              <span className="text-xs text-slate-400">
                Full Stack Developer
              </span>
            </div>
          </div>

          <ul className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium text-slate-200">
            <li className="relative">
              <Link
                className="cursor-pointer transition-colors hover:text-accent"
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
              >
                Home
              </Link>
            </li>
            <li className="relative">
              <Link
                className="cursor-pointer transition-colors hover:text-accent"
                activeClass="active"
                to="skills"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
              >
                Skills
              </Link>
            </li>
            <li className="relative">
              <Link
                className="cursor-pointer transition-colors hover:text-accent"
                activeClass="active"
                to="experience"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
              >
                Work Experience
              </Link>
            </li>
            <li className="relative">
              <Link
                className="cursor-pointer transition-colors hover:text-accent"
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
              >
                Projects
              </Link>
            </li>
            <li className="relative">
              <Link
                className="cursor-pointer transition-colors hover:text-accent"
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
              >
                Contact me
              </Link>
            </li>
            <button
              className="inline-flex items-center justify-center rounded-full bg-accent px-4 py-2 text-xs font-semibold text-slate-950 shadow-soft-card transition hover:bg-white hover:text-slate-900"
              onClick={handleDownload}
            >
              Download CV
            </button>
          </ul>

          <div className="flex items-center gap-4">
            <div className="hidden lg:flex items-center gap-3 text-slate-400">
              <a
                href="https://www.linkedin.com/in/zekarias-kobota-1695a0246?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                className="hover:text-accent transition"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="https://github.com/ZekiKobe"
                className="hover:text-accent transition"
              >
                <FaGithub size={20} />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61556368776937"
                className="hover:text-accent transition"
              >
                <FaFacebook size={20} />
              </a>
              <a
                href="https://www.instagram.com/kobezeki?igsh=aGl6OXVnZHhmemVv"
                className="hover:text-accent transition"
              >
                <FaInstagram size={20} />
              </a>
            </div>

            <div className="flex items-center gap-2">
              {/* Theme toggle temporarily disabled */}
              {/* <ThemeToggle /> */}
              <button
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-700/70 bg-slate-900/60 text-slate-200 shadow-sm transition hover:border-accent hover:bg-slate-900 md:hidden"
                onClick={toggleMenu}
              >
            <img
              src="/assets/images/menu.png"
              width={"22px"}
              height={"22px"}
              alt=""
            />
          </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
