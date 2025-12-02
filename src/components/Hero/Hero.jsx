import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { SiNextdotjs, SiFlutter } from "react-icons/si";

function Hero() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
    });
  }, []);

  return (
    <section
      className="pt-6 md:pt-10 lg:pt-14"
      id="home"
    >
      <div className="grid gap-10 md:grid-cols-2 items-center">
        <div className="space-y-6" data-aos="fade-right">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/60 px-3 py-1 text-xs font-medium text-slate-300 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Open to Full Stack / Application Developer roles</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-50">
            Hello{" "}
            <span role="img" aria-label="waving hand">
              👋
            </span>
            , I&apos;m{" "}
            <span className="text-accent">
              Zekarias Kobota
            </span>
          </h1>

          <h2 className="text-xl sm:text-2xl font-medium text-slate-200">
            Full Stack Developer crafting modern web applications from{" "}
            <span className="text-accent-soft">
              front-end experiences
            </span>{" "}
            to{" "}
            <span className="text-accent-soft">
              scalable back-end systems
            </span>
            .
          </h2>

          <p className="max-w-xl text-sm sm:text-base text-slate-400 leading-relaxed">
            I specialize in building end-to-end solutions using modern
            JavaScript, React, Next.js, Node.js, Flutter, and relational databases. I love
            turning complex requirements into clean, performant, and
            user-friendly products that ship to production.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-soft-card transition hover:bg-white hover:text-slate-900"
            >
              View Full Stack Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-slate-700/70 bg-slate-900/60 px-5 py-2.5 text-sm font-medium text-slate-200 shadow-sm transition hover:border-accent hover:text-accent"
            >
              Let&apos;s work together
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-4 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-8 rounded-full bg-emerald-400/80" />
              <span>End-to-end web app development</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-8 rounded-full bg-sky-400/80" />
              <span>REST APIs & data-driven features</span>
            </div>
          </div>
        </div>

        <div
          className="relative mx-auto flex w-full items-center justify-center"
          data-aos="fade-left"
        >
          <div className="absolute -inset-10 rounded-[2.5rem] bg-gradient-to-tr from-accent/30 via-sky-500/10 to-violet-500/30 blur-3xl opacity-70" />

          <div className="relative rounded-[2rem] bg-gradient-to-b from-slate-900 to-slate-950 p-4 shadow-soft-card border border-slate-800/80">
            <div className="relative rounded-[1.5rem] bg-slate-900/80 p-4">
              <div className="absolute inset-x-6 -top-6 flex justify-between text-[10px] text-slate-300">
                <span className="inline-flex items-center rounded-full bg-slate-900/90 px-3 py-1 border border-slate-700/80 shadow-sm">
                  Stack
                </span>
                <span className="inline-flex items-center rounded-full bg-slate-900/90 px-3 py-1 border border-slate-700/80 shadow-sm">
                  Full Stack
                </span>
              </div>
              <img
                src="./assets/images/zack.png"
                alt="Zekarias portrait"
                className="mx-auto w-full max-w-xs md:max-w-md lg:max-w-[32rem] h-auto rounded-2xl bg-slate-900 border border-slate-700/80 shadow-lg"
              />
              <div className="mt-4 space-y-2 text-xs text-slate-300">
                <div className="flex items-center justify-between">
                  <span className="font-medium">Core Stack</span>
                  <span className="text-[10px] text-emerald-400">
                    React • Next.js • Node.js • Flutter • SQL
                  </span>
                </div>
                <div className="grid grid-cols-5 gap-2 text-[10px]">
                  <div className="rounded-lg border border-slate-700/70 bg-slate-900/70 px-2 py-1 text-center">
                    <img src="./assets/images/react.png" alt="React" className="mx-auto mb-1 h-5 w-5" />
                    <span>React</span>
                  </div>
                  <div className="rounded-lg border border-slate-700/70 bg-slate-900/70 px-2 py-1 text-center flex flex-col items-center justify-center gap-1">
                    <SiNextdotjs className="h-5 w-5 mx-auto" />
                    <span>Next.js</span>
                  </div>
                  <div className="rounded-lg border border-slate-700/70 bg-slate-900/70 px-2 py-1 text-center">
                    <img src="./assets/images/node.png" alt="Node.js" className="mx-auto mb-1 h-5 w-5" />
                    <span>Node.js</span>
                  </div>
                  <div className="rounded-lg border border-slate-700/70 bg-slate-900/70 px-2 py-1 text-center">
                    <img src="./assets/images/python.png" alt="Python" className="mx-auto mb-1 h-5 w-5" />
                    <span>Python</span>
                  </div>
                  <div className="rounded-lg border border-slate-700/70 bg-slate-900/70 px-2 py-1 text-center flex flex-col items-center justify-center gap-1">
                    <SiFlutter className="h-5 w-5 mx-auto" />
                    <span>Flutter</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
