import React from "react";
import ContactForm from "./ContactForm/contactForm";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

function ContactMe() {
  return (
    <section className="space-y-8" id="contact">
      <h5 className="inline-flex items-center rounded-full border border-slate-800 bg-slate-900/60 px-4 py-1 text-xs font-medium text-slate-300">
        <span className="mr-1 text-accent">&lt;/&gt;</span>
        <span>Contact</span>
      </h5>
      <div className="grid gap-8 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] items-start">
        <div className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-semibold text-slate-50">
            Let&apos;s build something great together
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            Whether you have a full stack project in mind, need help improving an
            existing application, or just want to chat about opportunities, I&apos;m
            always happy to connect.
          </p>
          <div className="space-y-3 text-sm text-slate-300">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-slate-900/70 border border-slate-800 text-accent">
                <FaEnvelope size={16} />
              </span>
              <p className="font-medium">zekariaskobota@gmail.com</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-slate-900/70 border border-slate-800 text-accent">
                <FaPhoneAlt size={16} />
              </span>
              <p className="font-medium">+251-993676861</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-slate-900/70 border border-slate-800 text-accent">
                <FaMapMarkerAlt size={16} />
              </span>
              <p className="font-medium">Addis Ababa, Ethiopia</p>
            </div>
          </div>
        </div>

        <div className="w-full max-w-md md:ml-auto">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

export default ContactMe;
