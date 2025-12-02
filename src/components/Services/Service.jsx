import React from "react";
import { servicesData } from "../../Utils/data";

const Services = () => {
  return (
    <section className="space-y-8">
      <h5
        className="inline-flex items-center rounded-full border border-slate-800 bg-slate-900/60 px-4 py-1 text-xs font-medium text-slate-300"
        data-aos="fade-up"
      >
        <span className="mr-1 text-accent">&lt;/&gt;</span>
        <span>Services</span>
      </h5>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {servicesData.map((service, index) => (
          <div
            key={index}
            className="flex flex-col gap-2 rounded-2xl border border-slate-800 bg-slate-900/70 p-4 text-sm text-slate-200 shadow-sm hover:shadow-soft-card transition-shadow"
          >
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-slate-800/80 text-accent">
              {service.icon}
            </div>
            <h3 className="text-sm font-semibold text-slate-100">
              {service.title}
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
