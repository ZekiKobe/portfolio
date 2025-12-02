import React from "react";

function ProjectCard({ details, iconUrl, links, aosType = "fade-up", delay = 100 }) {
  return (
    <a
      href={links.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/70 shadow-sm transition-transform transition-shadow duration-300 hover:shadow-soft-card hover:-translate-y-1 hover:-rotate-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
      data-aos={aosType}
      data-aos-delay={delay}
      title={details.title}
    >
      <div className="relative w-full overflow-hidden bg-slate-800/70">
        <img
          className="w-full h-auto object-contain transform transition-transform duration-300 group-hover:scale-105"
          src={iconUrl}
          alt={details.title}
        />
      </div>
      <div className="flex flex-1 flex-col gap-2 p-4 text-xs text-slate-300">
        <div className="flex flex-col gap-1">
          <h6 className="text-sm font-semibold text-slate-100">
            {details.title}
          </h6>
          {details.linkLabel && (
            <span className="text-[11px] font-medium text-accent-soft underline-offset-2 group-hover:underline">
              {details.linkLabel}
            </span>
          )}
        </div>
        <ul className="mt-1 space-y-1.5">
          {details.resposibilities.map((item) => (
            <li key={item} className="text-[11px] leading-relaxed text-slate-400">
              • {item}
            </li>
          ))}
        </ul>
      </div>
    </a>
  );
}

export default ProjectCard;
