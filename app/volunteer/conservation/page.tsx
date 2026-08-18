import Link from "next/link";
import Image from "next/image";
import { Droplets, TreesIcon as Tree, ShieldCheck, Globe } from "lucide-react";
import { CONSERVATION_PHOTOS, FARMING_PHOTOS } from "@/lib/photos";

export const metadata = {
  title: "Conservation Volunteering",
  description: "Volunteer for biodiversity conservation in Nepal — protect freshwater ecosystems, forests, and soils.",
};

const HERO_BG = CONSERVATION_PHOTOS[5];
const inlinePhotos = [CONSERVATION_PHOTOS[9], FARMING_PHOTOS[12], CONSERVATION_PHOTOS[11]];

export default function ConservationVolunteerPage() {
  return (
    <>
      <section className="relative min-h-[50vh] overflow-hidden bg-brand-bg">
        <div className="max-w-[1280px] mx-auto px-6 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 min-h-[50vh] items-center">
            <div className="py-16 md:py-24">
              <span className="inline-block bg-brand-primary text-primary-foreground text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded mb-6">VOLUNTEER</span>
              <h1 className="text-4xl md:text-6xl font-black text-brand-primary mb-6">
                Biodiversity<br />Conservation<span className="text-brand-blushed-brick">.</span>
              </h1>
              <p className="text-xl md:text-2xl text-brand-on-surface-variant max-w-lg mb-8 leading-relaxed">
                Nepal&apos;s landscapes — from snowcapped high Himalayas to wide fertile valleys — are home to extraordinary biodiversity. Help us protect forests, wetlands, freshwater systems, and soils.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="#get-involved"
                  className="bg-brand-primary text-white px-8 py-3.5 rounded-full text-sm font-bold shadow-sm hover:bg-brand-primary/90 transition-all duration-200 text-center"
                >
                  Get Involved
                </a>
                <Link
                  href="/volunteer"
                  className="border-2 border-brand-primary text-brand-primary px-8 py-3.5 rounded-full text-sm font-bold hover:bg-brand-primary hover:text-white transition-all duration-200 text-center"
                >
                  All Volunteer Programs
                </Link>
              </div>
            </div>
            <div className="relative h-[300px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={HERO_BG}
                alt="Conservation volunteering in Nepal"
                className="w-full h-full object-cover scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-28">
        <div className="px-6 md:px-16 max-w-[1280px] mx-auto">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <p className="text-xl md:text-2xl text-brand-on-surface leading-relaxed">
              As a volunteer, you&apos;ll help Nepal and the local communities in protecting forests and wetlands, freshwater systems, and soils, all of which are directly linked to global challenges like ocean health, carbon emissions, global warming, and food security. By joining, you become part of a global solution. Local actions — conserving forests, rivers, and soils — ripple outward to protect oceans, stabilize the climate, and secure organic food supplies for humanity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-brand-surface-container rounded-2xl p-8 md:p-10 border border-brand-outline-variant">
              <div className="w-12 h-12 bg-brand-primary rounded-xl flex items-center justify-center mb-4">
                <Droplets className="size-6 text-brand-yellow-green" />
              </div>
              <h2 className="text-2xl font-bold text-brand-primary mb-4">Freshwater Conservation</h2>
              <ul className="space-y-3 text-brand-on-surface-variant">
                <li>Freshwater ecosystems sustain communities, agriculture, environment, and countless species.</li>
                <li>Conserving rivers and lakes reduce pollution and sediment runoff, which flows into the oceans, safeguarding marine life.</li>
                <li>Healthy freshwater river systems ensure reliable irrigation and strengthen food security.</li>
              </ul>
            </div>
            <div className="bg-brand-surface-container rounded-2xl p-8 md:p-10 border border-brand-outline-variant">
              <div className="w-12 h-12 bg-brand-primary rounded-xl flex items-center justify-center mb-4">
                <Tree className="size-6 text-brand-yellow-green" />
              </div>
              <h2 className="text-2xl font-bold text-brand-primary mb-4">Forest &amp; Biodiversity Conservation</h2>
              <ul className="space-y-3 text-brand-on-surface-variant">
                <li>Forests act as massive carbon sinks, absorbing CO₂ and slowing global warming.</li>
                <li>They provide habitats for endangered species and keystone species of the region, maintaining ecological balance.</li>
                <li>Forests regulate rainfall patterns, influencing agriculture and climate stability globally.</li>
                <li>Preventing deforestation reduces carbon emissions and supports resilient and sustainable food systems.</li>
              </ul>
            </div>
            <div className="bg-brand-surface-container rounded-2xl p-8 md:p-10 border border-brand-outline-variant">
              <div className="w-12 h-12 bg-brand-primary rounded-xl flex items-center justify-center mb-4">
                <ShieldCheck className="size-6 text-brand-yellow-green" />
              </div>
              <h2 className="text-2xl font-bold text-brand-primary mb-4">Soil Conservation</h2>
              <ul className="space-y-3 text-brand-on-surface-variant">
                <li>Soil conservation prevents erosion, maintains fertility, and ensures sustainable farming.</li>
                <li>Healthy soils store carbon, lowering greenhouse gases.</li>
                <li>Soil protection reduces sedimentation in rivers, protecting aquatic life and ocean ecosystems.</li>
                <li>Sustainable soil management is vital for long-term food security.</li>
              </ul>
            </div>
            <div className="bg-brand-surface-container rounded-2xl p-8 md:p-10 border border-brand-outline-variant">
              <div className="w-12 h-12 bg-brand-primary rounded-xl flex items-center justify-center mb-4">
                <Globe className="size-6 text-brand-yellow-green" />
              </div>
              <h2 className="text-2xl font-bold text-brand-primary mb-4">Global Connections</h2>
              <ul className="space-y-3 text-brand-on-surface-variant">
                <li><strong>Ocean health:</strong> Cleaner rivers mean healthier oceans — our planet can only exist if all parts of it are healthy.</li>
                <li><strong>Carbon emissions:</strong> Forests and soils absorb carbon, reducing emissions. Carbon in the atmosphere doesn&apos;t require permission to cross borders.</li>
                <li><strong>Global warming:</strong> Conservation efforts stabilize climate systems. Heat waves in Europe have a direct link to melting glaciers in the Himalayas.</li>
                <li><strong>Food security:</strong> Healthy ecosystems ensure sustainable agriculture for future generations.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-28 bg-brand-primary">
        <div className="max-w-[1280px] mx-auto px-6 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {inlinePhotos.map((photo, i) => (
              <div key={i} className="rounded-2xl overflow-hidden aspect-[4/3] relative">
                <Image src={photo} alt="Conservation in Nepal" fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="get-involved" className="py-28 px-6 md:px-16">
        <div className="bg-brand-yellow-green rounded-xl p-12 md:p-24 text-center max-w-[1280px] mx-auto relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-5xl font-black text-brand-primary mb-8">Join Our Conservation Efforts<span className="text-brand-blushed-brick">.</span></h2>
            <p className="text-xl text-brand-on-surface-variant max-w-2xl mx-auto mb-8">
              Whether you&apos;re passionate about freshwater, forests, or soil health, there&apos;s a place for you in our conservation programs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link href="/volunteer" className="bg-white text-brand-primary px-8 py-3.5 text-sm font-bold rounded-full shadow-sm hover:bg-white/90 transition-all duration-200">
                Apply to Volunteer
              </Link>
              <Link href="/donate" className="border-2 border-brand-primary text-brand-primary px-8 py-3.5 text-sm font-bold rounded-full hover:bg-brand-primary hover:text-white transition-all duration-200">
                Support Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
