"use client";

import { useState } from "react";
import { Turnstile } from "@/components/turnstile";
import { submitForm } from "@/lib/submit-form";

export function InternshipForm() {
  const [token, setToken] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!token) return;

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("fullName") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      program: (form.elements.namedItem("program") as HTMLSelectElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    setStatus("submitting");
    const result = await submitForm("internship", token, data);
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
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-brand-on-surface-variant mb-1">
            Full Name
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            required
            className="w-full border border-brand-outline-variant rounded-lg px-4 py-3 text-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary"
            placeholder="Your full name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-brand-on-surface-variant mb-1">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full border border-brand-outline-variant rounded-lg px-4 py-3 text-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary"
            placeholder="your@email.com"
          />
        </div>
      </div>
      <div>
        <label htmlFor="program" className="block text-sm font-medium text-brand-on-surface-variant mb-1">
          Program of Interest
        </label>
        <select
          id="program"
          name="program"
          required
          className="w-full border border-brand-outline-variant rounded-lg px-4 py-3 text-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary"
        >
          <option value="">Select a program</option>
          <option value="4-days">4 Days Basic Training</option>
          <option value="7-days">7 Days Advanced Training</option>
          <option value="15-days">15 Days TOT Program</option>
          <option value="internship">6-Week Internship</option>
        </select>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-brand-on-surface-variant mb-1">
          Your Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="w-full border border-brand-outline-variant rounded-lg px-4 py-3 text-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary resize-none"
          placeholder="Tell us about yourself and your interest..."
        />
      </div>

      <Turnstile onVerify={setToken} />

      {status === "error" && (
        <p className="text-red-600 text-sm">Something went wrong. Please try again.</p>
      )}

      <button
        type="submit"
        disabled={!token || status === "submitting"}
        className="w-full bg-brand-primary text-white text-sm font-bold px-8 py-3.5 rounded-full shadow-sm hover:bg-brand-primary/90 transition-all duration-200 disabled:opacity-50"
      >
        {status === "submitting" ? "Submitting..." : "Submit Application"}
      </button>
    </form>
  );
}
