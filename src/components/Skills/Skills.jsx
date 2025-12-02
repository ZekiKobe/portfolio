import React, { useEffect, useState } from "react";
import { SKILLS } from "../../Utils/data";

function Skills() {
  const [animateBars, setAnimateBars] = useState(false);

  useEffect(() => {
    // Trigger progress animation shortly after mount
    const timer = setTimeout(() => setAnimateBars(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="skills" className="space-y-8">
      <h5
        className="inline-flex items-center rounded-full border border-slate-800 bg-slate-900/60 px-4 py-1 text-xs font-medium text-slate-300"
        data-aos="fade-up"
      >
        <span className="mr-1 text-accent">&lt;/&gt;</span>
        <span>Skills</span>
      </h5>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {SKILLS.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col rounded-2xl border border-slate-800 bg-slate-900/70 p-4 shadow-sm hover:shadow-soft-card transition-shadow"
            data-aos="fade-up"
            data-aos-delay={index * 50}
          >
            <div className="flex items-center justify-between gap-2 mb-2">
              <h3 className="text-sm font-semibold text-slate-100">
                {skill.skill}
              </h3>
              <span className="text-xs font-medium text-accent-soft">
                {skill.percentage}
              </span>
            </div>
            <p className="mb-3 text-xs text-slate-400 leading-relaxed">
              {skill.description}
            </p>
            <div className="mt-auto h-1.5 w-full overflow-hidden rounded-full bg-slate-800">
              <div
                className="h-full rounded-full bg-gradient-to-r from-accent via-amber-400 to-emerald-400 transition-[width] duration-700 ease-out"
                style={{ width: animateBars ? skill.percentage : "0%" }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
