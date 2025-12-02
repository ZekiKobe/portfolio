import React from "react";
import { PROJECTS } from "../../Utils/data";
import ProjectCard from "./ProjectCard/projectCard";

function Projects() {
  return (
    <section className="space-y-8" id="projects">
      <div className="flex items-center justify-between gap-4">
        <h5 className="inline-flex items-center rounded-full border border-slate-800 bg-slate-900/60 px-4 py-1 text-xs font-medium text-slate-300">
          <span className="mr-1 text-accent">&lt;/&gt;</span>
          <span>Full Stack Projects</span>
        </h5>
        <p className="hidden text-xs text-slate-400 sm:block">
          Production-like projects spanning front-end, back-end, and data layers.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((item) => (
          <ProjectCard
            key={item.title}
            iconUrl={item.icon}
            details={item}
            links={item}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
