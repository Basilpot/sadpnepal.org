"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Leaf, Heart, ArrowRight } from "lucide-react";
import {
  CONSERVATION_PHOTOS,
  CONSTRUCTION_PHOTOS,
  SPIRITUAL_PHOTOS,
  FARMING_PHOTOS,
  COMMUNITY_PHOTOS,
  LANDSCAPE_PHOTOS,
  PEOPLE_PHOTOS,
} from "@/lib/photos";

const GALLERY_HERO =
  "/photos/" + encodeURIComponent("PICT0057-group-of-villagers-and-travelers-sitting-around-table-drinking-tea-outdoors.webp");

type Category = "all" | "farming" | "community" | "people" | "conservation" | "construction" | "spiritual" | "landscape";

const CATEGORIES: { key: Category; label: string }[] = [
  { key: "all", label: "All Photos" },
  { key: "farming", label: "Farming" },
  { key: "community", label: "Community" },
  { key: "people", label: "People" },
  { key: "conservation", label: "Conservation" },
  { key: "construction", label: "Construction" },
  { key: "spiritual", label: "Spiritual" },
  { key: "landscape", label: "Landscape" },
];

const CATEGORY_DESCRIPTIONS: Record<string, string> = {
  farming: "Organic farming, terraced fields, and crop cultivation",
  community: "Community meetings, gatherings, and group activities",
  people: "Portraits and daily life of rural Nepali communities",
  conservation: "River cleanup, environmental restoration, and ecology",
  construction: "Traditional housing, infrastructure, and building projects",
  spiritual: "Cultural ceremonies, blessings, and spiritual traditions",
  landscape: "Natural beauty, mountains, and scenic views of Nepal",
};

interface PhotoItem {
  src: string;
  category: string;
  label: string;
}

function buildPhotos(): PhotoItem[] {
  const items: PhotoItem[] = [];
  const add = (arr: string[], cat: string) => {
    for (const src of arr) {
      // Extract readable label from filename
      const base = src.replace(/\.webp$/, "").split("/").pop() ?? "";
      const slug = base.replace(/-[a-z0-9-]+\.webp$/, "").replace(/^.*?-/, "");
      const label = (CATEGORY_DESCRIPTIONS[cat] ?? cat);
      items.push({ src, category: cat, label });
    }
  };
  add(FARMING_PHOTOS, "farming");
  add(COMMUNITY_PHOTOS, "community");
  add(PEOPLE_PHOTOS, "people");
  add(CONSERVATION_PHOTOS, "conservation");
  add(CONSTRUCTION_PHOTOS, "construction");
  add(SPIRITUAL_PHOTOS, "spiritual");
  add(LANDSCAPE_PHOTOS, "landscape");
  return items;
}

const allPhotos = buildPhotos();

export default function GalleryClient() {
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoItem | null>(null);
  const [activeCategory, setActiveCategory] = useState<Category>("all");

  const filtered = activeCategory === "all" ? allPhotos : allPhotos.filter((p) => p.category === activeCategory);

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

      <section className="py-12 px-6 md:px-16">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex flex-wrap gap-2 mb-8">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`px-4 py-2 rounded-full text-sm font-bold transition-all duration-200 ${
                  activeCategory === cat.key
                    ? "bg-brand-primary text-white shadow-sm"
                    : "bg-brand-surface-container text-brand-on-surface-variant hover:bg-brand-primary/10"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
          <p className="text-sm text-brand-outline mb-6">
            {filtered.length} photo{filtered.length !== 1 ? "s" : ""}
            {activeCategory !== "all" && ` in ${activeCategory}`}
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {filtered.map((photo, i) => (
              <button
                key={i}
                onClick={() => setSelectedPhoto(photo)}
                className="relative overflow-hidden rounded-lg group cursor-pointer aspect-square bg-brand-surface-container"
              >
                <Image
                  src={photo.src}
                  alt={photo.label}
                  fill
                  loading="lazy"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-2 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-xs font-bold text-white bg-brand-primary/80 px-2 py-1 rounded">
                    {photo.category.charAt(0).toUpperCase() + photo.category.slice(1)}
                  </span>
                </div>
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
          className="fixed inset-0 z-50 bg-black/80 flex flex-col items-center justify-center p-4"
          onClick={() => setSelectedPhoto(null)}
          onKeyDown={(e) => {
            if (e.key === "Escape") setSelectedPhoto(null);
          }}
          tabIndex={-1}
          ref={(el) => el?.focus()}
        >
          <Image
            src={selectedPhoto.src}
            alt={selectedPhoto.label}
            width={1200}
            height={800}
            className="max-w-full max-h-[80vh] object-contain rounded-lg"
          />
          <p className="text-white/80 text-sm mt-3">{selectedPhoto.label}</p>
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
            <Link
              href="/volunteer"
              className="inline-flex items-center gap-2 bg-white text-brand-primary px-8 py-3.5 rounded-full text-sm font-bold shadow-sm hover:bg-white/90 transition-all duration-200"
            >
              <Heart size={20} />
              Become a Volunteer
            </Link>
            <Link
              href="/donate"
              className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-3.5 rounded-full text-sm font-bold shadow-sm hover:bg-white hover:text-brand-primary transition-all duration-200"
            >
              Support Our Mission
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
