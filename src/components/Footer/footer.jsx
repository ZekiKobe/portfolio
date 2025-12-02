import React from "react";
import { FaFacebook, FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-800 bg-slate-950/80">
      <div className="container px-4 sm:px-6 flex flex-col gap-4 py-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <span>
          &copy; {new Date().getFullYear()} Zekarias Kobota. All rights reserved.
        </span>
        <div className="flex items-center gap-3 text-slate-400">
          <a
            href="https://www.linkedin.com/in/zekarias-kobota-1695a0246?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            className="hover:text-accent transition"
          >
            <FaLinkedin size={18} />
          </a>
          <a
            href="https://github.com/ZekiKobe"
            className="hover:text-accent transition"
          >
            <FaGithub size={18} />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61556368776937"
            className="hover:text-accent transition"
          >
            <FaFacebook size={18} />
          </a>
          <a
            href="https://www.instagram.com/kobezeki?igsh=aGl6OXVnZHhmemVv"
            className="hover:text-accent transition"
          >
            <FaInstagram size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
