import React from "react";
import { Link } from "react-scroll";

function MobileNav({ isOpen, toggleMenu, toggleClose }) {
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
      <div
        className={`fixed inset-0 z-40 bg-slate-950/70 backdrop-blur-md transition-opacity md:hidden ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleMenu}
      >
        <div
          className={`absolute right-0 top-0 h-full w-4/5 max-w-xs bg-slate-950 border-l border-slate-800 p-5 transition-transform ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="mb-6 flex items-center gap-3">
            <img
              src="./assets/images/z.png"
              alt="logo"
              className="h-9 w-9 rounded-full border border-slate-700"
            />
            <div className="flex flex-col">
              <span className="text-sm font-medium text-slate-100">
                Zekarias Kobota
              </span>
              <span className="text-[11px] text-slate-400">
                Full Stack Developer
              </span>
            </div>
          </div>

          <ul className="space-y-4 text-sm font-medium text-slate-200">
            <li>
              <Link
                className="block cursor-pointer hover:text-accent"
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                onClick={toggleClose}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="block cursor-pointer hover:text-accent"
                activeClass="active"
                to="skills"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                onClick={toggleClose}
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                className="block cursor-pointer hover:text-accent"
                activeClass="active"
                to="experience"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                onClick={toggleClose}
              >
                Work Experience
              </Link>
            </li>
            <li>
              <Link
                className="block cursor-pointer hover:text-accent"
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                onClick={toggleClose}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                className="block cursor-pointer hover:text-accent"
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                onClick={toggleClose}
              >
                Contact me
              </Link>
            </li>
          </ul>

          <button
            className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-accent px-4 py-2.5 text-xs font-semibold text-slate-950 shadow-soft-card transition hover:bg-white hover:text-slate-900"
            onClick={handleDownload}
          >
            Download CV
          </button>
        </div>
      </div>
    </>
  );
}

export default MobileNav
