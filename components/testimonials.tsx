"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";

const TESTIMONIALS = [
  {
    quote: "For my first time volunteering, I went to Nepal and had the pleasure of working with SADP Nepal. The hardest part of the trip for me was trying to give back half as much knowledge and know how that I was receiving. Travel is more than the seeing of sights; it is the change that goes on, deep and permanent, in the ideas of living.",
    name: "Jon Gebbia",
    location: "Volunteer, USA",
  },
  {
    quote: "I had the pleasure of working with SADP Nepal and Ramesh for a month. The trip had a timeline, but the memories and lessons will last forever. By our fifth day with the family we were bound by the Festival of Lights and made the brother of Mrs. Baniya, and I the sister of Mr. Ramesh. It was the most wonderful day of my life.",
    name: "Hillary & Bob",
    location: "Volunteers, Canada",
  },
  {
    quote: "I had my own idea of what to expect before leaving for Nepal to volunteer with SADP. I quickly found that the experience was not nearly as beautiful, rich or memorable as what I had come to encounter. I will always be filled with such positive memories from that trip and time in my life.",
    name: "Brian Whitmire",
    location: "Volunteer, USA",
  },
  {
    quote: "One of my greatest experiences was spending a time with the SADP family. They became my family too. I am a proud volunteer of your organization, looking forward to repeat it in the near future. Everybody should experience the authentic Nepali way of living.",
    name: "Marcela Reyes",
    location: "Volunteer",
  },
  {
    quote: "The past month went by so quickly, I can hardly believe it. In my heart a seed has been planted, dreams of organic school gardens in Holland, of my own organic farm\u2026one day! I hope to come back as soon as possible.",
    name: "Renetta Hofstede (Sita Kumal)",
    location: "Volunteer, Netherlands",
  },
  {
    quote: "Staying at this farm has been such a wonderful experience. I can hardly believe how beautiful and peaceful it is and how lovely all of the Nepali people are. SADP\u2019s vision for Nepal is truly inspiring. Thank you SO much Ramesh, Govinda and Ajay! I will definitely be back!",
    name: "Rhianna More (Radha Darai)",
    location: "Volunteer, Canada",
  },
];

function TestimonialSection() {
  const [active, setActive] = useState(0);

  const prev = () => setActive((a) => (a === 0 ? TESTIMONIALS.length - 1 : a - 1));
  const next = () => setActive((a) => (a === TESTIMONIALS.length - 1 ? 0 : a + 1));

  const t = TESTIMONIALS[active];

  return (
    <section className="py-20 overflow-hidden bg-brand-yellow-green/15">
      <div className="px-6 md:px-16 max-w-[1280px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-brand-primary mb-4">
            Stories from the Field<span className="text-brand-blushed-brick">.</span>
          </h2>
          <p className="text-xl text-brand-outline max-w-2xl mx-auto">
            Real experiences from volunteers who have been part of our journey.
          </p>
        </div>
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl border-2 border-dashed border-brand-primary/30 relative">
            <div className="absolute -left-3 top-1/2 -translate-y-1/2 size-6 rounded-full bg-brand-yellow-green/15" />
            <div className="absolute -right-3 top-1/2 -translate-y-1/2 size-6 rounded-full bg-brand-yellow-green/15" />
            <div className="p-8 md:p-10">
              <Quote className="size-8 text-brand-primary/20 mb-4" />
              <blockquote className="text-xl md:text-2xl text-brand-on-surface leading-relaxed mb-6">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div className="flex items-center gap-4">
                <div
                  className="w-10 h-10 rounded-full bg-cover bg-center shrink-0 border border-brand-primary/30 bg-brand-primary/10 flex items-center justify-center"
                >
                  <span className="text-brand-primary font-bold text-sm">{t.name.charAt(0)}</span>
                </div>
                <div>
                  <cite className="not-italic text-sm font-bold text-brand-primary block">{t.name}</cite>
                  <span className="text-xs text-brand-outline">{t.location}</span>
                </div>
              </div>
            </div>
            <div className="border-t-2 border-dashed border-brand-primary/30 mx-8" />
            <div className="p-4 flex items-center justify-between">
              <button
                onClick={prev}
                className="size-9 rounded-lg border border-brand-primary/30 text-brand-primary hover:bg-brand-primary hover:text-primary-foreground transition-colors flex items-center justify-center"
                aria-label="Previous testimonial"
              >
                <ArrowLeft className="size-4" />
              </button>
              <div className="flex gap-1.5">
                {TESTIMONIALS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className={`size-2 rounded-full transition-colors ${
                      i === active ? "bg-brand-primary" : "bg-brand-primary/20"
                    }`}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={next}
                className="size-9 rounded-lg border border-brand-primary/30 text-brand-primary hover:bg-brand-primary hover:text-primary-foreground transition-colors flex items-center justify-center"
                aria-label="Next testimonial"
              >
                <ArrowRight className="size-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialSection;
