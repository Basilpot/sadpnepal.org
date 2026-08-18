import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Target, Eye, Leaf, Sprout, Apple, Store, FlaskConical, Scale, Globe, TreePine, Users, Heart } from "lucide-react";
import { COMMUNITY_PHOTOS, PEOPLE_PHOTOS, FARMING_PHOTOS } from "@/lib/photos";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "SADP Nepal — empowering marginalized farmers through sustainable agriculture since 2004.",
};

const HERO_BG = COMMUNITY_PHOTOS[0];
const inlinePhotos = [PEOPLE_PHOTOS[0], FARMING_PHOTOS[0], COMMUNITY_PHOTOS[1]];

export default function About() {
  return (
    <>
      <section className="relative min-h-[50vh] overflow-hidden bg-brand-bg">
        <div className="max-w-[1280px] mx-auto px-6 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 min-h-[50vh] items-center">
            <div className="py-16 md:py-24">
              <span className="inline-block bg-brand-primary text-primary-foreground text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded mb-6">ABOUT US</span>
              <h1 className="text-4xl md:text-6xl font-black text-brand-primary mb-6">
                SADP Nepal<span className="text-brand-blushed-brick">.</span>
              </h1>
              <p className="text-xl md:text-2xl text-brand-on-surface-variant max-w-lg mb-8 leading-relaxed">
                A non-profit, non-governmental organization established in 2004 with the mission of improving the livelihoods of underprivileged and resource-poor farmers through sustainable agricultural development.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/volunteer"
                  className="bg-brand-primary text-white px-8 py-3.5 rounded-full text-sm font-bold shadow-sm hover:bg-brand-primary/90 transition-all duration-200 text-center"
                >
                  Join Our Mission
                </Link>
                <Link
                  href="/our-work"
                  className="border-2 border-brand-primary text-brand-primary px-8 py-3.5 rounded-full text-sm font-bold hover:bg-brand-primary hover:text-white transition-all duration-200 text-center"
                >
                  See What We Do
                </Link>
              </div>
            </div>
            <div className="relative h-[300px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src={HERO_BG}
                alt="SADP Nepal community farming"
                fill
                className="object-cover scale-110"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-28">
        <div className="px-6 md:px-16 max-w-[1280px] mx-auto">
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <div className="w-12 h-12 bg-brand-primary rounded-xl flex items-center justify-center mb-4">
                <Eye className="size-6 text-brand-yellow-green" />
              </div>
              <h2 className="text-2xl font-bold text-brand-primary mb-4">Vision</h2>
              <p className="text-xl text-brand-on-surface-variant leading-relaxed">
                To create the chain of prosperous, purposeful, and environment friendly farming communities across Nepal based on regenerative, sustainable and organic agricultural practices that enhance livelihoods and agro-based industries, protect natural resources, and ensure food security for future generations.
              </p>
            </div>
            <div>
              <div className="w-12 h-12 bg-brand-primary rounded-xl flex items-center justify-center mb-4">
                <Target className="size-6 text-brand-yellow-green" />
              </div>
              <h2 className="text-2xl font-bold text-brand-primary mb-4">Mission</h2>
              <p className="text-xl text-brand-on-surface-variant leading-relaxed">
                To empower marginalized farmers and women in the rural communities through research, capacity building, innovation, partnerships, and the promotion of sustainable agriculture, enabling improved livelihoods, environmental conservation, and inclusive rural development.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-28 bg-brand-surface-container-low">
        <div className="px-6 md:px-16 max-w-[1280px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-brand-primary mb-6">
              Strategic Objectives<span className="text-brand-blushed-brick">.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
            {[
              { icon: Leaf, text: "Promote organic, regenerative, and climate-resilient agricultural practices." },
              { icon: Sprout, text: "Improve farmers' knowledge, skills, productivity, and income opportunities." },
              { icon: TreePine, text: "Conserve soil health, water resources, biodiversity, and indigenous seeds." },
              { icon: Apple, text: "Strengthen food and nutrition security through sustainable farming systems." },
              { icon: Store, text: "Enhance market access, value addition, and fair-trade opportunities for farmers." },
              { icon: Users, text: "Empower women, youth, and marginalized rural communities through agricultural entrepreneurship." },
              { icon: FlaskConical, text: "Support research, innovation, demonstration farms, and knowledge sharing." },
              { icon: Scale, text: "Advocate for policies that advance sustainable and organic agriculture in Nepal." },
              { icon: Globe, text: "Foster national and international partnerships for agricultural development." },
              { icon: Heart, text: "Promote agro-tourism and eco-tourism as complementary sources of rural income." },
            ].map((obj, i) => {
              const Icon = obj.icon;
              return (
                <div key={i} className="flex gap-4 items-start bg-white rounded-xl p-6 border border-brand-outline-variant">
                  <div className="w-10 h-10 bg-brand-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <Icon className="size-5 text-brand-primary" />
                  </div>
                  <p className="text-xl text-brand-on-surface-variant leading-relaxed">{obj.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-28">
        <div className="px-6 md:px-16 max-w-[1280px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-brand-primary mb-6">
              Core Values<span className="text-brand-blushed-brick">.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {[
              { label: "Sustainability", desc: "Protecting natural resources while improving livelihoods." },
              { label: "Farmer-Centered Development", desc: "Placing farmers and communities at the heart of all initiatives." },
              { label: "Environmental Stewardship", desc: "Conserving biodiversity, soil, water, and ecosystems." },
              { label: "Innovation and Learning", desc: "Encouraging research, experimentation, and knowledge exchange." },
              { label: "Community Empowerment", desc: "Building local capacity, leadership, and self-reliance." },
              { label: "Partnership and Collaboration", desc: "Working with farmers, academia, government, and development partners." },
              { label: "Integrity and Accountability", desc: "Operating transparently and responsibly." },
              { label: "Inclusiveness and Equity", desc: "Ensuring opportunities for women, youth, and disadvantaged groups." },
              { label: "Resilience", desc: "Supporting adaptation to climate and economic challenges." },
              { label: "Respect for Indigenous Knowledge", desc: "Valuing traditional farming wisdom and local resources." },
            ].map((val, i) => (
              <div key={i} className="bg-brand-surface-container rounded-xl p-6 border border-brand-outline-variant">
                <h3 className="text-xl font-bold text-brand-primary mb-1">{val.label}</h3>
                <p className="text-xl text-brand-on-surface-variant">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 bg-brand-primary">
        <div className="max-w-[1280px] mx-auto px-6 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {inlinePhotos.map((photo, i) => (
              <div key={i} className="rounded-2xl overflow-hidden aspect-[4/3] relative">
                <Image src={photo} alt="SADP Nepal history" fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28">
        <div className="px-6 md:px-16 max-w-[1280px] mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-black text-brand-primary mb-8 text-center">
              History of SADP Nepal<span className="text-brand-blushed-brick">.</span>
            </h2>
            <div className="space-y-6 text-xl text-brand-on-surface-variant leading-relaxed">
              <p>
                The Sustainable Agriculture Development Program Nepal (SADP-Nepal) is a non-profit, non-governmental organization established in 2004 with the mission of improving the livelihoods of underprivileged and resource-poor farmers through sustainable agricultural development. Since its inception, the organization has focused on research, training, demonstration, and promotion of environmentally friendly farming systems, particularly organic agriculture.
              </p>
              <p>
                Recognizing the challenges faced by Nepalese farmers — including low productivity, environmental degradation, limited market access, and dependence on chemical-based agriculture — SADP-Nepal was founded to promote sustainable alternatives that enhance food security, conserve natural resources, and improve rural livelihoods.
              </p>
              <p>
                From the beginning, the organization adopted a collaborative approach, working closely with farmers, community groups, academic institutions, government agencies, and national and international partners. Through these partnerships, SADP-Nepal has implemented numerous projects involving organic farming, farmer training, soil fertility improvement, food security, women&apos;s economic empowerment, post-harvest management, and rural livelihood enhancement.
              </p>
              <p>
                A significant milestone in the organization&apos;s growth was its membership in the International Federation of Organic Agriculture Movements (IFOAM) in 2007, strengthening its connection with the global organic agriculture movement and enhancing its advocacy and networking capacity.
              </p>
              <p>
                Over the years, SADP-Nepal has expanded its activities beyond organic farming promotion to include agro-ecotourism, biodiversity conservation, indigenous seed preservation, climate-resilient agriculture, research and demonstration farms, and farmer capacity-building programs. The organization has worked with several international partners and donors to implement projects benefiting farming communities across Nepal.
              </p>
              <p>
                Today, SADP-Nepal continues to serve as a leading advocate for sustainable and regenerative agriculture in Nepal, striving to create resilient farming communities, improve food security, and promote environmentally responsible rural development.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-28 px-6 md:px-16">
        <div className="bg-brand-yellow-green rounded-xl p-12 md:p-24 text-center max-w-[1280px] mx-auto relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-5xl font-black text-brand-primary mb-8">Join Our Growing Community<span className="text-brand-blushed-brick">.</span></h2>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link href="/volunteer" className="bg-white text-brand-primary px-8 py-3.5 text-sm font-bold rounded-full shadow-sm hover:bg-white/90 transition-all duration-200">
                Become a Volunteer
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
