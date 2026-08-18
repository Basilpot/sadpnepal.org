import Link from "next/link";
import Image from "next/image";
import { School, Heart, Home, Warehouse } from "lucide-react";
import { CONSTRUCTION_PHOTOS } from "@/lib/photos";

export const metadata = {
  title: "Construction Volunteering",
  description: "Volunteer in sustainable construction projects across Nepal using local natural materials.",
};

const HERO_BG = CONSTRUCTION_PHOTOS[0];
const inlinePhotos = CONSTRUCTION_PHOTOS.slice(1, 4);

export default function ConstructionVolunteerPage() {
  return (
    <>
      <section className="relative min-h-[50vh] overflow-hidden bg-brand-bg">
        <div className="max-w-[1280px] mx-auto px-6 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 min-h-[50vh] items-center">
            <div className="py-16 md:py-24">
              <span className="inline-block bg-brand-primary text-primary-foreground text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded mb-6">VOLUNTEER</span>
              <h1 className="text-4xl md:text-6xl font-black text-brand-primary mb-6">
                Construction<br />Volunteering<span className="text-brand-blushed-brick">.</span>
              </h1>
              <p className="text-xl md:text-2xl text-brand-on-surface-variant max-w-lg mb-8 leading-relaxed">
                Nepal is a beautiful country. However, because of lengthy political instability, harsh geographical topography, and scarcity of human resources, communities do not have enough environment friendly homes. Volunteering in construction projects across Nepal using locally available natural materials such as stone, bamboo, mud, and timber is deeply impactful.
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
                alt="Construction volunteering in Nepal"
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
            <h2 className="text-5xl font-black text-brand-primary mb-8">
              Purpose of These Projects<span className="text-brand-blushed-brick">.</span>
            </h2>
            <p className="text-xl text-brand-on-surface-variant leading-relaxed mb-8">
              These methods not only reduce costs but also preserve traditional craftsmanship and ensure resilience in rural communities. Playing with natural materials with fellow volunteers and making an impact is a fun and soul-pleasing activity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {[
              { icon: School, title: "School Buildings", desc: "Constructing safe, durable classrooms with local natural materials to support education in the communities." },
              { icon: Heart, title: "Small Health Posts", desc: "Creating a basic medical facility that provides essential healthcare access to remote areas." },
              { icon: Home, title: "Homes for Underprivileged", desc: "Building affordable, eco-friendly housing for families in need using local and environmentally friendly materials." },
              { icon: Warehouse, title: "iSME Agricultural Buildings", desc: "Supporting small-scale enterprises by building storage units, processing centers, and training halls for farmers." },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="bg-brand-surface-container rounded-2xl p-8 border border-brand-outline-variant">
                  <div className="w-12 h-12 bg-brand-primary rounded-xl flex items-center justify-center mb-4">
                    <Icon className="size-6 text-brand-yellow-green" />
                  </div>
                  <h3 className="text-xl font-bold text-brand-primary mb-3">{item.title}</h3>
                  <p className="text-xl text-brand-on-surface-variant">{item.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {inlinePhotos.map((photo, i) => (
              <div key={i} className="rounded-2xl overflow-hidden aspect-[4/3] relative">
                <Image src={photo} alt="Construction in Nepal" fill className="object-cover" />
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 border border-brand-outline-variant">
              <h3 className="text-xl font-bold text-brand-primary mb-4">Construction Approach</h3>
              <ul className="space-y-3 text-brand-on-surface-variant">
                <li><strong>Local materials:</strong> Bamboo for scaffolding and roofing, stone for foundations, mud bricks for walls, and timber for structural support.</li>
                <li><strong>Traditional techniques:</strong> Combining indigenous knowledge with modern safety standards.</li>
                <li><strong>Community participation:</strong> Villagers often join volunteers, ensuring ownership and sustainability.</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-brand-outline-variant">
              <h3 className="text-xl font-bold text-brand-primary mb-4">Rural Impact</h3>
              <ul className="space-y-3 text-brand-on-surface-variant">
                <li><strong>Education access:</strong> Children benefit from safe, weather-resistant schools.</li>
                <li><strong>Healthcare reach:</strong> Health posts reduce travel time for medical care.</li>
                <li><strong>Housing dignity:</strong> Families gain secure homes, improving living standards.</li>
                <li><strong>Agricultural empowerment:</strong> Farmers store produce safely and expand small businesses.</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-brand-outline-variant">
              <h3 className="text-xl font-bold text-brand-primary mb-4">Volunteer Experience</h3>
              <ul className="space-y-3 text-brand-on-surface-variant">
                <li><strong>Hands-on learning:</strong> Gain skills in eco-construction and teamwork.</li>
                <li><strong>Cultural immersion:</strong> Work alongside locals, share meals, and learn about traditions.</li>
                <li><strong>Sustainable impact:</strong> Contribute to projects that last for generations.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="get-involved" className="py-28 px-6 md:px-16">
        <div className="bg-brand-yellow-green rounded-xl p-12 md:p-24 text-center max-w-[1280px] mx-auto relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-5xl font-black text-brand-primary mb-8">Build a Sustainable Future<span className="text-brand-blushed-brick">.</span></h2>
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
