import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_pskqh9h",
        "template_bgj6vlx",
        form.current,
        "pR5pzsPyt0x5VFPCp"
      )
      .then(
        (result) => {
          console.log("Message sent successfully:", result.text);
          Swal.fire({
            icon: "success",
            title: "Message Sent!",
            text: "Thank you for reaching out. I will contact you soon.",
          });
          form.current.reset();
        },
        (error) => {
          console.error("Failed to send message:", error.text);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Failed to send message. Please try again.",
          });
        }
      );
  };

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5 shadow-soft-card">
      <h5 className="text-xs font-semibold tracking-wide text-slate-400">
        LET&apos;S GET IN TOUCH
      </h5>
      <h3 className="mt-1 text-lg font-semibold text-slate-50">
        Send me a message
      </h3>
      <form ref={form} onSubmit={sendEmail} className="mt-5 space-y-4 text-sm">
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="space-y-1.5">
            <label className="block text-xs font-medium text-slate-300">
              First name
            </label>
            <input
              type="text"
              name="firstname"
              placeholder="First Name"
              required
              className="w-full rounded-lg border border-slate-800 bg-slate-950/60 px-3 py-2 text-sm text-slate-100 outline-none ring-0 transition focus:border-accent focus:ring-1 focus:ring-accent"
            />
          </div>
          <div className="space-y-1.5">
            <label className="block text-xs font-medium text-slate-300">
              Last name
            </label>
            <input
              type="text"
              name="lastname"
              placeholder="Last Name"
              required
              className="w-full rounded-lg border border-slate-800 bg-slate-950/60 px-3 py-2 text-sm text-slate-100 outline-none ring-0 transition focus:border-accent focus:ring-1 focus:ring-accent"
            />
          </div>
        </div>
        <div className="space-y-1.5">
          <label className="block text-xs font-medium text-slate-300">
            Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="you@example.com"
            required
            className="w-full rounded-lg border border-slate-800 bg-slate-950/60 px-3 py-2 text-sm text-slate-100 outline-none ring-0 transition focus:border-accent focus:ring-1 focus:ring-accent"
          />
        </div>
        <div className="space-y-1.5">
          <label className="block text-xs font-medium text-slate-300">
            Message
          </label>
          <textarea
            name="message"
            rows={4}
            placeholder="Tell me a bit about your project or question..."
            required
            className="w-full rounded-lg border border-slate-800 bg-slate-950/60 px-3 py-2 text-sm text-slate-100 outline-none ring-0 transition focus:border-accent focus:ring-1 focus:ring-accent resize-none"
          />
        </div>

        <button
          type="submit"
          className="mt-2 inline-flex w-full items-center justify-center rounded-full bg-accent px-4 py-2.5 text-sm font-semibold text-slate-950 shadow-soft-card transition hover:bg-white hover:text-slate-900"
        >
          Send message
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
