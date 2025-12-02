import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiNextdotjs, SiFlutter, SiMongodb } from "react-icons/si";
import { MdOutlineArrowBack, MdOutlineHome, MdOutlineCropSquare } from "react-icons/md";

const AboutMe = () => {
    useEffect(() => {
      AOS.init({
        duration: 900,
        once: true,
      });
    }, []);
  return (
    <section className="space-y-8 py-12 min-h-screen">
      <h5
        className="inline-flex items-center rounded-full border border-slate-800 bg-slate-900/60 px-4 py-1 text-xs font-medium text-slate-300"
        data-aos="fade-up"
      >
        <span className="mr-1 text-accent">&lt;/&gt;</span>
        <span>About</span>
      </h5>
      <div className="grid gap-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] items-center">
        <div className="space-y-4" data-aos="fade-up">
          <h2 className="text-2xl sm:text-3xl font-semibold text-slate-50">
            Full Stack Developer with a product mindset
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            I&apos;m a full stack developer with a strong foundation in modern
            web technologies. I enjoy taking products from idea to deployment:
            designing responsive interfaces, building robust APIs, and working
            with data to deliver features that actually solve problems.
          </p>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            I have experience working as an Application Developer in the
            banking sector and on real-world projects such as CV analysis
            platforms, ecommerce systems, and clearance management tools. I
            write clean, maintainable code and I care a lot about usability,
            performance, and long-term reliability.
          </p>
          <div className="grid gap-4 pt-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 text-xs text-slate-300">
              <span className="text-[11px] uppercase tracking-wide text-slate-500">
                Name
              </span>
              <p className="mt-1 text-sm font-semibold text-slate-100">
                Zekarias Kobota
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 text-xs text-slate-300">
              <span className="text-[11px] uppercase tracking-wide text-slate-500">
                Role
              </span>
              <p className="mt-1 text-sm font-semibold text-slate-100">
                Full Stack / Application Developer
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 text-xs text-slate-300">
              <span className="text-[11px] uppercase tracking-wide text-slate-500">
                Location
              </span>
              <p className="mt-1 text-sm font-semibold text-slate-100">
                Addis Ababa, Ethiopia
              </p>
            </div>
          </div>
        </div>

        <div
          className="relative mx-auto w-full max-w-xs md:max-w-[320px]"
          data-aos="zoom-in"
        >
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-accent/40 via-sky-500/20 to-violet-500/30 blur-2xl opacity-80" />
          <div className="relative flex flex-col items-center rounded-[2.2rem] border border-neutral-700 bg-neutral-900 p-3 shadow-soft-card">
            {/* Phone body */}
            <div className="relative w-full aspect-[9/16] rounded-[1.8rem] border border-neutral-700 bg-neutral-900 overflow-hidden flex flex-col">
              {/* Top notch / status area */}
              <div className="flex justify-center pt-2 pb-1">
                <div className="h-4 w-24 rounded-full bg-neutral-800" />
              </div>
              {/* App icons row */}
              <div className="flex justify-center gap-2 pb-2 text-[10px] text-slate-300">
                <div className="flex h-7 w-7 items-center justify-center rounded-xl bg-neutral-800">
                  <FaReact className="text-sky-400" size={14} />
                </div>
                <div className="flex h-7 w-7 items-center justify-center rounded-xl bg-neutral-800">
                  <SiNextdotjs className="text-slate-100" size={14} />
                </div>
                <div className="flex h-7 w-7 items-center justify-center rounded-xl bg-neutral-800">
                  <FaNodeJs className="text-emerald-400" size={14} />
                </div>
                <div className="flex h-7 w-7 items-center justify-center rounded-xl bg-neutral-800">
                  <SiFlutter className="text-sky-300" size={14} />
                </div>
                <div className="flex h-7 w-7 items-center justify-center rounded-xl bg-neutral-800">
                  <SiMongodb className="text-emerald-500" size={14} />
                </div>
              </div>
              {/* Screen */}
              <div className="flex-1 px-2 pb-2 flex items-center justify-center bg-neutral-950">
                <img
                  src="/assets/images/chocho.png"
                  alt="Zekarias portrait"
                  className="w-full h-auto rounded-2xl object-contain"
                />
              </div>
              {/* Bottom navigation bar */}
              <div className="flex items-center justify-around px-8 py-2 text-gray-200 text-lg bg-neutral-900/95">
                <MdOutlineArrowBack />
                <MdOutlineHome />
                <MdOutlineCropSquare />
              </div>
            </div>

            <div className="mt-4 space-y-2 text-xs text-neutral-200">
              <div className="flex items-center justify-between">
                <span className="font-medium text-neutral-50">
                  Tech focus
                </span>
                <span className="text-[10px] text-emerald-300">
                  React • Node.js • SQL • Python
                </span>
              </div>
              <p className="text-[11px] leading-relaxed text-neutral-300">
                Comfortable across the stack: building UIs with React and
                developing APIs with Node.js/Express to power modern web
                applications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
