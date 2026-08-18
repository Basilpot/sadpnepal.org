import Link from "next/link";
import Image from "next/image";
import { Sprout, TreePine, Building, HandHeart } from "lucide-react";
import { COMMUNITY_PHOTOS, FARMING_PHOTOS, PEOPLE_PHOTOS } from "@/lib/photos";

export const metadata = {
  title: "Student Group Volunteering",
  description: "Student group volunteer trips to Nepal — organic farming, conservation, construction, and humanitarian service.",
};

const HERO_BG = COMMUNITY_PHOTOS[14];
const inlinePhotos = [FARMING_PHOTOS[0], PEOPLE_PHOTOS[5], COMMUNITY_PHOTOS[0]];

export default function StudentGroupsPage() {
  return (
    <>
      <section className="relative min-h-[50vh] overflow-hidden bg-brand-bg">
        <div className="max-w-[1280px] mx-auto px-6 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 min-h-[50vh] items-center">
            <div className="py-16 md:py-24">
              <span className="inline-block bg-brand-primary text-primary-foreground text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded mb-6">VOLUNTEER</span>
              <h1 className="text-4xl md:text-6xl font-black text-brand-primary mb-6">
                Student Group<br />Volunteering<span className="text-brand-blushed-brick">.</span>
              </h1>
              <p className="text-xl md:text-2xl text-brand-on-surface-variant max-w-lg mb-8 leading-relaxed">
                Student group volunteer trips to Nepal offer traveling students to choose activities from a pool of noble choices. A student volunteer trip in Nepal is more than service — it&apos;s an educational journey. Participants return with practical skills, cultural awareness, and a deeper understanding of sustainability and social responsibility.
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
                alt="Student group volunteering in Nepal"
                className="w-full h-full object-cover scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-28">
        <div className="px-6 md:px-16 max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-brand-surface-container rounded-2xl p-8 md:p-10 border border-brand-outline-variant">
              <div className="w-12 h-12 bg-brand-primary rounded-xl flex items-center justify-center mb-4">
                <Sprout className="size-6 text-brand-yellow-green" />
              </div>
              <h2 className="text-2xl font-bold text-brand-primary mb-4">Organic Farming</h2>
              <ul className="space-y-3 text-brand-on-surface-variant">
                <li><strong>Regenerative farming:</strong> Students help local farmers adopt organic practices such as composting, crop rotation, and natural pest control as well as learn about the importance of regenerating soil.</li>
                <li><strong>Benefits:</strong> Improves soil fertility, reduces reliance on chemicals, and strengthens food security for rural families as well as the urban population in present and for the future.</li>
                <li><strong>Learning:</strong> Students gain hands-on agricultural skills and understand the link between farming and climate resilience.</li>
              </ul>
            </div>
            <div className="bg-brand-surface-container rounded-2xl p-8 md:p-10 border border-brand-outline-variant">
              <div className="w-12 h-12 bg-brand-primary rounded-xl flex items-center justify-center mb-4">
                <TreePine className="size-6 text-brand-yellow-green" />
              </div>
              <h2 className="text-2xl font-bold text-brand-primary mb-4">River &amp; Forest Conservation</h2>
              <ul className="space-y-3 text-brand-on-surface-variant">
                <li><strong>River conservation:</strong> Activities include cleaning riverbanks and riverbeds, planting vegetation to prevent erosion, and raising awareness about pollution.</li>
                <li><strong>Forest conservation:</strong> Students participate in reforestation projects, biodiversity monitoring, and community-led forest management.</li>
                <li><strong>Impact:</strong> Protects water sources, preserves wildlife habitats, and supports Nepal&apos;s fight against deforestation.</li>
              </ul>
            </div>
            <div className="bg-brand-surface-container rounded-2xl p-8 md:p-10 border border-brand-outline-variant">
              <div className="w-12 h-12 bg-brand-primary rounded-xl flex items-center justify-center mb-4">
                <Building className="size-6 text-brand-yellow-green" />
              </div>
              <h2 className="text-2xl font-bold text-brand-primary mb-4">Small Buildings Construction</h2>
              <ul className="space-y-3 text-brand-on-surface-variant">
                <li><strong>Eco-construction:</strong> Using local raw materials like bamboo, stone, and clay, students help build small community structures such as classrooms, health posts, or shelters.</li>
                <li><strong>Skills:</strong> Learn traditional Nepali building techniques combined with sustainable design principles.</li>
                <li><strong>Outcome:</strong> Provides durable, low-cost infrastructure that directly benefits villages.</li>
              </ul>
            </div>
            <div className="bg-brand-surface-container rounded-2xl p-8 md:p-10 border border-brand-outline-variant">
              <div className="w-12 h-12 bg-brand-primary rounded-xl flex items-center justify-center mb-4">
                <HandHeart className="size-6 text-brand-yellow-green" />
              </div>
              <h2 className="text-2xl font-bold text-brand-primary mb-4">Humanitarian Service</h2>
              <ul className="space-y-3 text-brand-on-surface-variant">
                <li><strong>Support for orphans:</strong> Students engage in teaching, mentoring, and recreational activities, offering emotional support and educational enrichment.</li>
                <li><strong>Care for the elderly:</strong> Assisting with daily needs, companionship, and community events to reduce isolation.</li>
                <li><strong>Broader impact:</strong> Strengthens intergenerational bonds and ensures vulnerable groups feel valued and supported.</li>
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
                <Image src={photo} alt="Student volunteering in Nepal" fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="get-involved" className="py-28 px-6 md:px-16">
        <div className="bg-brand-yellow-green rounded-xl p-12 md:p-24 text-center max-w-[1280px] mx-auto relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-5xl font-black text-brand-primary mb-8">Organize a Student Trip<span className="text-brand-blushed-brick">.</span></h2>
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
