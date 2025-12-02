import React, { useState, useEffect } from "react";
import { TESTIMONIALS } from "../../Utils/data";

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === TESTIMONIALS.length - 1 ? 0 : prev + 1
      );
    }, 2500); // faster slide interval
    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? TESTIMONIALS.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prev) =>
      prev === TESTIMONIALS.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section className="space-y-6">
      <h5 className="inline-flex items-center rounded-full border border-slate-800 bg-slate-900/60 px-4 py-1 text-xs font-medium text-slate-300">
        <span className="mr-1 text-accent">&lt;/&gt;</span>
        <span>Testimonials</span>
      </h5>
      <div className="relative rounded-3xl border border-slate-800 bg-slate-900/70 p-6 md:p-8 overflow-hidden">
        {TESTIMONIALS.map((item, index) => (
          <div
            key={index}
            className={`grid gap-6 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] items-center transition-all duration-500 ease-out ${
              index === currentIndex
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-6 pointer-events-none absolute inset-6"
            }`}
          >
            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-slate-100">
                {item.title}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                “{item.description}”
              </p>
              <div className="mt-3 flex items-center gap-3">
                <img
                  src={item.photo}
                  alt={item.name}
                className="h-10 w-10 rounded-full border border-slate-700 object-cover"
                />
                <div className="text-xs text-slate-300">
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-slate-400">{item.profession}</p>
                </div>
              </div>
            </div>
            <div className="hidden md:flex items-center justify-center">
              <img
                src={item.photo}
                alt={item.name}
                className="h-28 w-28 rounded-full border border-slate-700 object-cover mx-auto"
              />
            </div>
          </div>
        ))}
        <div className="mt-4 flex items-center justify-between text-xs text-slate-400">
          <div className="flex gap-1">
            {TESTIMONIALS.map((_, index) => (
              <span
                key={index}
                className={`h-1.5 w-5 rounded-full transition ${
                  index === currentIndex
                    ? "bg-accent"
                    : "bg-slate-700"
                }`}
              />
            ))}
          </div>
          <div className="flex gap-2">
            <button
              className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 bg-slate-900/80 text-slate-200 hover:border-accent hover:text-accent transition"
              onClick={goToPrevious}
            >
              &lt;
            </button>
            <button
              className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 bg-slate-900/80 text-slate-200 hover:border-accent hover:text-accent transition"
              onClick={goToNext}
            >
              &gt;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
