"use client";

import Image from "next/image";
import { Heart, Building2, ArrowRight } from "lucide-react";
import { useState } from "react";
import { COMMUNITY_PHOTOS } from "@/lib/photos";
import { Turnstile } from "@/components/turnstile";
import { submitForm } from "@/lib/submit-form";

const HERO_IMAGE = COMMUNITY_PHOTOS[0];

export default function DonateClient() {
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState("");
  const [donorStatus, setDonorStatus] = useState<"idle" | "success" | "error">("idle");
  const [newsletterStatus, setNewsletterStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [newsletterEmail, setNewsletterEmail] = useState("");

  const handleDonorSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!token) return;

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("donor-name") as HTMLInputElement).value,
      email: (form.elements.namedItem("donor-email") as HTMLInputElement).value,
      amount: (form.elements.namedItem("amount") as HTMLInputElement).value || "Not specified",
      message: (form.elements.namedItem("donor-message") as HTMLTextAreaElement).value || "No message",
    };

    setLoading(true);
    const result = await submitForm("donate", token, data);
    setDonorStatus(result.success ? "success" : "error");
    setLoading(false);
  };

  const handleNewsletter = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;

    setNewsletterStatus("submitting");
    const result = await submitForm("newsletter", "newsletter-no-turnstile", { email: newsletterEmail });
    setNewsletterStatus(result.success ? "success" : "error");
  };

  return (
    <div className="bg-brand-bg text-brand-primary">
      <section className="max-w-[1280px] mx-auto px-6 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 min-h-[50vh] items-center">
          <div className="py-16 md:py-28">
            <span className="inline-block bg-brand-yellow-green/10 text-brand-yellow-green text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded mb-6">
              Support Our Mission
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-brand-primary mb-6">
              Support<br />Nepal&apos;s Farmers<span className="text-brand-blushed-brick">.</span>
            </h1>
            <p className="text-xl md:text-2xl text-brand-on-surface-variant max-w-lg mb-8 leading-relaxed">
              Your small contribution will help uplift the livelihood of Nepalese grassroots farmers
              by equipping them with knowledge and resources for organic farming and offering
              markets to sell their products at reasonable prices.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#bank"
                className="bg-brand-primary text-white px-8 py-3.5 rounded-full text-sm font-bold shadow-sm hover:bg-brand-primary/90 transition-all duration-200 text-center"
              >
                View Bank Details
              </a>
              <a
                href="#form"
                className="border-2 border-brand-primary text-brand-primary px-8 py-3.5 rounded-full text-sm font-bold hover:bg-brand-primary hover:text-white transition-all duration-200 text-center"
              >
                Donor Form
              </a>
            </div>
          </div>
          <div className="relative h-[300px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src={HERO_IMAGE}
              alt="Supporting Nepali farmers through organic agriculture"
              fill
              className="object-cover scale-110"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
          </div>
        </div>
      </section>

      <section id="bank" className="py-28">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-sm font-bold uppercase tracking-widest text-brand-blushed-brick mb-4 block">
              Bank Transfer
            </span>
            <h2 className="text-5xl font-black text-brand-primary mb-4">
              Make a Donation
            </h2>
            <p className="text-xl text-brand-on-surface-variant max-w-2xl mx-auto">
              SADP Nepal is a non-profit organization. Your contribution, big or small,
              helps us equip farmers with knowledge and resources for organic farming.
            </p>
          </div>

          <div className="bg-brand-surface-container rounded-2xl p-8 md:p-12 border border-brand-outline-variant max-w-xl mx-auto">
            <div className="w-14 h-14 bg-brand-primary rounded-xl flex items-center justify-center mb-6 mx-auto">
              <Building2 className="size-7 text-brand-yellow-green" />
            </div>
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-brand-primary mb-2">
                Digo Krishi Bikash Karyakram
              </h3>
              <p className="text-xl text-brand-on-surface-variant">
                (Sustainable Agriculture Development Program in Nepali)
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between py-3 border-b border-brand-outline-variant">
                <span className="text-brand-on-surface-variant">Account Name</span>
                <span className="font-bold text-brand-primary">Digo Agriculchar Vikash</span>
              </div>
              <div className="flex justify-between py-3 border-b border-brand-outline-variant">
                <span className="text-brand-on-surface-variant">Bank Name</span>
                <span className="font-bold text-brand-primary">Nepal Bank Limited</span>
              </div>

              <div className="flex justify-between py-3 border-b border-brand-outline-variant">
                <span className="text-brand-on-surface-variant">Account Number</span>
                <span className="font-bold text-brand-primary">19200100579869000001</span>
              </div>
              <div className="flex justify-between py-3 border-b border-brand-outline-variant">
                <span className="text-brand-on-surface-variant">Swift Code</span>
                <span className="font-bold text-brand-primary">NEBLNPKA</span>
              </div>
              <div className="flex justify-between py-3 border-b border-brand-outline-variant">
                <span className="text-brand-on-surface-variant">Branch</span>
                <span className="font-bold text-brand-primary">Prithvichowk, Pokhara, Kaski, Nepal (Gandaki Province)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="form" className="py-28 bg-brand-surface-container-low">
        <div className="max-w-2xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-sm font-bold uppercase tracking-widest text-brand-blushed-brick mb-4 block">
              Donor Form
            </span>
            <h2 className="text-5xl font-black text-brand-primary mb-4">
              Leave Your Details
            </h2>
            <p className="text-xl text-brand-on-surface-variant">
              Please fill your details below completely. Columns marked with * are compulsory.
            </p>
          </div>
          <form onSubmit={handleDonorSubmit} className="space-y-6">
            <div>
              <label htmlFor="donor-name" className="block text-sm font-bold uppercase tracking-widest text-brand-on-surface-variant mb-2">
                Donor&apos;s Name <span className="text-brand-blushed-brick">*</span>
              </label>
              <input
                id="donor-name"
                name="donor-name"
                type="text"
                required
                className="w-full px-4 py-4 rounded-xl border border-brand-outline-variant bg-white text-brand-primary focus:outline-none focus:border-brand-primary"
                placeholder="Your full name"
              />
            </div>
            <div>
              <label htmlFor="donor-email" className="block text-sm font-bold uppercase tracking-widest text-brand-on-surface-variant mb-2">
                Donor&apos;s Email <span className="text-brand-blushed-brick">*</span>
              </label>
              <input
                id="donor-email"
                name="donor-email"
                type="email"
                required
                className="w-full px-4 py-4 rounded-xl border border-brand-outline-variant bg-white text-brand-primary focus:outline-none focus:border-brand-primary"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label htmlFor="amount" className="block text-sm font-bold uppercase tracking-widest text-brand-on-surface-variant mb-2">
                Amount (USD)
              </label>
              <input
                id="amount"
                name="amount"
                type="number"
                min={1}
                className="w-full px-4 py-4 rounded-xl border border-brand-outline-variant bg-white text-brand-primary focus:outline-none focus:border-brand-primary"
                placeholder="Enter amount"
              />
            </div>
            <div>
              <label htmlFor="donor-message" className="block text-sm font-bold uppercase tracking-widest text-brand-on-surface-variant mb-2">
                Your Message
              </label>
              <textarea
                id="donor-message"
                name="donor-message"
                rows={4}
                className="w-full px-4 py-4 rounded-xl border border-brand-outline-variant bg-white text-brand-primary focus:outline-none focus:border-brand-primary resize-none"
                placeholder="Leave a message..."
              />
            </div>

            <Turnstile onVerify={setToken} />

            {donorStatus === "success" && (
              <p className="text-green-600 text-sm text-center">Thank you! Your details have been submitted.</p>
            )}
            {donorStatus === "error" && (
              <p className="text-red-600 text-sm text-center">Something went wrong. Please try again.</p>
            )}

            <div className="text-center">
              <button
                type="submit"
                disabled={!token || loading}
                className="inline-flex items-center gap-3 px-8 py-3.5 bg-brand-primary text-white rounded-full text-sm font-bold shadow-sm hover:bg-brand-primary/90 transition-all duration-200 disabled:opacity-50"
              >
                <Heart size={20} />
                {loading ? "Sending..." : "Send Details"}
                {!loading && <ArrowRight size={20} />}
              </button>
            </div>
          </form>
        </div>
      </section>

      <section className="bg-brand-primary py-28">
        <div className="max-w-2xl mx-auto text-center px-6">
          <h2 className="text-5xl font-black text-white">
            Stay Connected
          </h2>
          <p className="mt-4 text-white/80 text-xl">
            Get monthly updates on our projects, impact stories, and community events.
          </p>
          <form onSubmit={handleNewsletter} className="flex gap-3 mt-10 max-w-md mx-auto">
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-5 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white/40"
            />
            <button
              type="submit"
              disabled={newsletterStatus === "submitting"}
              className="px-8 py-3.5 bg-brand-yellow-green text-brand-primary text-sm font-bold rounded-full shadow-sm hover:bg-brand-yellow-green/90 transition-all duration-200 disabled:opacity-50"
            >
              {newsletterStatus === "submitting" ? "..." : newsletterStatus === "success" ? "Subscribed!" : "Subscribe"}
            </button>
          </form>
          {newsletterStatus === "error" && (
            <p className="text-white/60 text-sm mt-2">Something went wrong. Please try again.</p>
          )}
        </div>
      </section>

      <div className="bg-brand-primary py-4 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-center gap-2 text-white/60 text-sm">
          <Heart size={14} />
          <span>
            SADP Nepal is a registered non-profit organization.
          </span>
        </div>
      </div>
    </div>
  );
}
