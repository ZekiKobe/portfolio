import React from "react";

function WorkExperienceCard({ details }) {
  return (
    <article className="grid gap-4 rounded-2xl border border-slate-800 bg-slate-900/70 p-5 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.6fr)]">
      <div className="space-y-1">
        <h3 className="text-sm font-semibold text-slate-100">
          {details.company}
        </h3>
        <p className="text-[11px] font-medium text-accent-soft">
          {details.date}
        </p>
      </div>
      <div className="space-y-2">
        <h6 className="text-xs font-semibold uppercase tracking-wide text-slate-300">
          {details.title}
        </h6>
        <ul className="space-y-1.5 text-[11px] text-slate-400 leading-relaxed">
          {details.resposibilities.map((item) => (
            <li key={item}>• {item}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default WorkExperienceCard;
