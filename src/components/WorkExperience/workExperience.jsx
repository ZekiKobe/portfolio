import React from "react";
import { WORK_EXPERIENCE } from "../../Utils/data";
import WorkExperienceCard from "./WorkExperienceCard/workExperienceCard";
import "@fontsource-variable/material-symbols-outlined";

function WorkExperience() {
  return (
    <section className="space-y-8" id="experience">
      <h5 className="inline-flex items-center rounded-full border border-slate-800 bg-slate-900/60 px-4 py-1 text-xs font-medium text-slate-300">
        <span className="mr-1 text-accent">&lt;/&gt;</span>
        <span>Work experience</span>
      </h5>
      <div className="space-y-4">
        {WORK_EXPERIENCE.map((item, index) => (
          <WorkExperienceCard
            key={item.title}
            details={item}
            data-aos="fade-up"
            data-aos-delay={index * 100}
            data-aos-duration="1000"
          />
        ))}
      </div>
    </section>
  );
}

export default WorkExperience;
