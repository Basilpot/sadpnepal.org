"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Leaf, Heart, ArrowRight } from "lucide-react";
import { getAllPhotoUrls } from "@/lib/photos";

const GALLERY_HERO =
  "/photos/" + encodeURIComponent("PICT0057-group-of-villagers-and-travelers-sitting-around-table-drinking-tea-outdoors.webp");

const allPhotos = getAllPhotoUrls();

export default function GalleryClient() {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  return (
    <main className="bg-brand-bg">
      <section className="relative min-h-[50vh] overflow-hidden bg-brand-bg">
        <div className="max-w-[1280px] mx-auto px-6 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 min-h-[50vh] items-center">
            <div className="py-16 md:py-24">
              <span className="inline-flex items-center gap-2 bg-brand-primary text-primary-foreground text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded mb-6">
                <Leaf className="size-4" />
                Gallery
              </span>
              <h1 className="text-4xl md:text-6xl font-black text-brand-primary mb-6">
                Visual Journey<br />of Sustainable<br />Change<span className="text-brand-blushed-brick">.</span>
              </h1>
              <p className="text-xl md:text-2xl text-brand-on-surface-variant max-w-lg mb-8 leading-relaxed">
                Explore moments captured across our programs — from terraced fields
                to community gatherings, each image tells a story of resilience and
                hope in rural Nepal.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/volunteer"
                  className="bg-brand-primary text-white px-8 py-3.5 rounded-full text-sm font-bold shadow-sm hover:bg-brand-primary/90 transition-all duration-200 text-center"
                >
                  Join the Mission
                </Link>
                <Link
                  href="/donate"
                  className="border-2 border-brand-primary text-brand-primary px-8 py-3.5 rounded-full text-sm font-bold hover:bg-brand-primary hover:text-white transition-all duration-200 text-center"
                >
                  Support Us
                </Link>
              </div>
            </div>
            <div className="relative h-[300px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src={GALLERY_HERO}
                alt="Gallery"
                fill
                className="object-cover scale-110"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16 px-6 md:px-16">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {allPhotos.map((photo, i) => (
              <button
                key={i}
                onClick={() => setSelectedPhoto(photo)}
                className="relative overflow-hidden rounded-lg group cursor-pointer aspect-square"
              >
                <Image
                  src={photo}
                  alt={`SADP Nepal photo ${i + 1}`}
                  fill
                  loading="lazy"
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-brand-primary/0 group-hover:bg-brand-primary/20 transition-colors duration-300" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {selectedPhoto && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Full size photo"
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setSelectedPhoto(null)}
          onKeyDown={(e) => {
            if (e.key === "Escape") setSelectedPhoto(null);
          }}
          tabIndex={-1}
          ref={(el) => el?.focus()}
        >
          <Image
            src={selectedPhoto}
            alt="Full size photo"
            width={1200}
            height={800}
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
          />
          <button
            className="absolute top-6 right-6 text-white text-3xl font-bold w-10 h-10 flex items-center justify-center"
            aria-label="Close photo"
            onClick={() => setSelectedPhoto(null)}
          >
            &times;
          </button>
        </div>
      )}

      <section className="bg-brand-primary-container py-28 px-6 md:px-16">
        <div className="max-w-[1280px] mx-auto text-center">
          <h2 className="text-5xl font-black text-white mb-4">
            Be Part of the Story
          </h2>
          <p className="text-white/80 text-xl max-w-2xl mx-auto mb-10">
            Your support helps us capture more moments like these and create
            lasting change in rural Nepal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/volunteer"
              className="inline-flex items-center gap-2 bg-white text-brand-primary px-8 py-3.5 rounded-full text-sm font-bold shadow-sm hover:bg-white/90 transition-all duration-200"
            >
              <Heart size={20} />
              Become a Volunteer
            </a>
            <a
              href="/donate"
              className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-3.5 rounded-full text-sm font-bold shadow-sm hover:bg-white hover:text-brand-primary transition-all duration-200"
            >
              Support Our Mission
              <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
