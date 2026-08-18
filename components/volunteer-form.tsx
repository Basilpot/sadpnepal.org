"use client";

import { useState } from "react";
import { Turnstile } from "@/components/turnstile";
import { submitForm } from "@/lib/submit-form";

export function VolunteerForm() {
  const [token, setToken] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!token) return;

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("fullName") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      subject: (form.elements.namedItem("subject") as HTMLInputElement).value || "Volunteer Application",
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    setStatus("submitting");
    const result = await submitForm("volunteer", token, data);
    setStatus(result.success ? "success" : "error");
  }

  if (status === "success") {
    return (
      <div className="text-center py-12">
        <p className="text-2xl font-bold text-brand-primary mb-2">Thank you!</p>
        <p className="text-xl text-brand-on-surface-variant">Your application has been submitted. We will get back to you soon.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="fullName" className="block text-sm font-bold uppercase tracking-widest text-brand-on-surface-variant mb-2">
            Your Name <span className="text-brand-blushed-brick">*</span>
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            required
            className="w-full px-4 py-3 rounded-lg bg-brand-surface-container-low border border-brand-outline-variant text-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-bold uppercase tracking-widest text-brand-on-surface-variant mb-2">
            Your Email <span className="text-brand-blushed-brick">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-3 rounded-lg bg-brand-surface-container-low border border-brand-outline-variant text-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary"
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-bold uppercase tracking-widest text-brand-on-surface-variant mb-2">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          className="w-full px-4 py-3 rounded-lg bg-brand-surface-container-low border border-brand-outline-variant text-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary"
          placeholder="Volunteer Application"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-bold uppercase tracking-widest text-brand-on-surface-variant mb-2">
          Your Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full px-4 py-3 rounded-lg bg-brand-surface-container-low border border-brand-outline-variant text-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary"
          placeholder="Tell us about yourself and why you want to volunteer..."
        />
      </div>

      <Turnstile onVerify={setToken} />

      {status === "error" && (
        <p className="text-red-600 text-sm">Something went wrong. Please try again.</p>
      )}

      <div>
        <button
          type="submit"
          disabled={!token || status === "submitting"}
          className="w-full bg-brand-primary text-white text-sm font-bold px-8 py-3.5 rounded-full shadow-sm hover:bg-brand-primary/90 transition-all duration-200 disabled:opacity-50"
        >
          {status === "submitting" ? "Submitting..." : "Submit Application"}
        </button>
      </div>
    </form>
  );
}
