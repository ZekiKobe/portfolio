import React from "react";
import { EDUCATION } from "../../Utils/data";
import { FaGraduationCap } from "react-icons/fa";

function Education() {
  return (
    <section className="space-y-8" id="education">
      <h5
        className="inline-flex items-center rounded-full border border-slate-800 bg-slate-900/60 px-4 py-1 text-xs font-medium text-slate-300"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <span className="mr-1 text-accent">&lt;/&gt;</span>
        <span>Education</span>
      </h5>

      <div className="grid gap-8 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.4fr)] items-start">
        {/* Left side: icon + summary */}
        <div
          className="flex flex-col gap-4 rounded-2xl border border-slate-800 bg-slate-900/70 p-5"
          data-aos="fade-right"
        >
          <div className="inline-flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-800 text-accent">
              <FaGraduationCap size={18} />
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-wide text-slate-400">
                Academic Background
              </p>
              <h3 className="text-sm font-semibold text-slate-100">
                Bachelor&apos;s in Software Engineering
              </h3>
            </div>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            Strong foundations in software engineering, from algorithms and data
            structures to web and mobile development, supported by real
            projects, teamwork, and research work.
          </p>
        </div>

        {/* Right side: timeline-style cards */}
        <div className="space-y-5">
          {EDUCATION.map((item, index) => (
            <div
              key={index}
              className="relative rounded-2xl border border-slate-800 bg-slate-900/70 p-5 pl-6 md:pl-8"
              data-aos="fade-up"
              data-aos-delay={index * 100}
              data-aos-duration="1000"
            >
              {/* vertical accent line */}
              <span className="absolute left-3 top-4 bottom-4 w-0.5 rounded-full bg-gradient-to-b from-accent to-emerald-400 md:left-4" />

              <div className="space-y-2 pl-4 md:pl-6">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-base font-semibold text-slate-100">
                    {item.organization}
                  </h3>
                  <span className="text-[11px] font-medium text-slate-400">
                    {item.date}
                  </span>
                </div>
                <p className="text-xs font-medium text-slate-300">
                  {item.field}
                </p>
                <h4 className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
