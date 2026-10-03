"use client";

import { useState } from "react";
import { submitForm } from "@/lib/submit-form";

export function FooterNewsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;

    setStatus("submitting");
    const result = await submitForm("newsletter", "newsletter-no-turnstile", { email });
    setStatus(result.success ? "success" : "error");
  }

  if (status === "success") {
    return <p className="text-sm text-brand-yellow-green font-bold">Subscribed!</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="flex w-full md:w-auto gap-3">
      <label htmlFor="footer-newsletter" className="sr-only">
        Email address
      </label>
      <input
        id="footer-newsletter"
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your email address"
        className="flex-1 md:w-72 px-5 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 text-sm focus:outline-none focus:border-white/40 focus:ring-2 focus:ring-white/60"
      />
      <button
        type="submit"
        disabled={status === "submitting"}
        className="px-8 py-3.5 bg-brand-yellow-green text-brand-primary text-sm font-bold rounded-full shadow-sm hover:bg-brand-yellow-green/90 transition-all duration-200 shrink-0 disabled:opacity-50"
      >
        {status === "submitting" ? "..." : "Subscribe"}
      </button>
    </form>
  );
}
