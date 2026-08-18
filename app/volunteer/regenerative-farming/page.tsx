import Link from "next/link";
import Image from "next/image";
import { TrendingUp, Globe } from "lucide-react";
import { FARMING_PHOTOS } from "@/lib/photos";

export const metadata = {
  title: "Regenerative Organic Farming",
  description: "Volunteer in regenerative organic farming in Nepal — hands-on experience with eco-friendly agriculture supporting rural communities.",
};

const HERO_BG = FARMING_PHOTOS[0];
const inlinePhotos = FARMING_PHOTOS.slice(1, 4);

export default function RegenerativeFarmingPage() {
  return (
    <>
      <section className="relative min-h-[50vh] overflow-hidden bg-brand-bg">
        <div className="max-w-[1280px] mx-auto px-6 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 min-h-[50vh] items-center">
            <div className="py-16 md:py-24">
              <span className="inline-block bg-brand-primary text-primary-foreground text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded mb-6">VOLUNTEER</span>
              <h1 className="text-4xl md:text-6xl font-black text-brand-primary mb-6">
                Regenerative<br />Organic Farming<span className="text-brand-blushed-brick">.</span>
              </h1>
              <p className="text-xl md:text-2xl text-brand-on-surface-variant max-w-lg mb-8 leading-relaxed">
                More than Nepal&apos;s 65% population depends on agriculture, yet many farmers lack access to advanced organic strategies. Farming volunteers here not only support local farmers but also contribute to global movements for sustainable food systems that assure global food security.
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
                alt="Regenerative farming in Nepal"
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
              Volunteering in regenerative organic farming in Nepal offers hands-on experience with eco-friendly agriculture while directly supporting rural communities. It strengthens food security, restores degraded soils, and empowers farmers to adopt sustainable practices that benefit both local livelihoods and the global environment.
            </p>
          </div>

          <div className="max-w-4xl mx-auto mb-20">
            <h2 className="text-5xl font-black text-brand-primary mb-8 text-center">
              Takeaways from Volunteering<span className="text-brand-blushed-brick">.</span>
            </h2>
            <div className="bg-brand-surface-container rounded-2xl p-8 md:p-10 border border-brand-outline-variant">
              <ul className="space-y-4 text-brand-on-surface-variant text-xl">
                <li>Volunteer programs connect international participants with smallholder farmers across Nepal&apos;s hills and valleys.</li>
                <li>Daily tasks include composting, seed saving, crop rotation, natural pest control, and weeding.</li>
                <li>Volunteers live within farming communities, gaining cultural immersion while sharing skills and knowledge.</li>
                <li>Programs offered by Sustainable Agriculture Development Program (SADP-Nepal) combine practical farm work with farmer training and education.</li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {inlinePhotos.map((photo, i) => (
              <div key={i} className="rounded-2xl overflow-hidden aspect-[4/3] relative">
                <Image src={photo} alt="Organic farming in Nepal" fill className="object-cover" />
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 border border-brand-outline-variant">
              <div className="w-12 h-12 bg-brand-primary rounded-xl flex items-center justify-center mb-4">
                <TrendingUp className="size-6 text-brand-yellow-green" />
              </div>
              <h2 className="text-2xl font-bold text-brand-primary mb-4">Importance for Local Communities</h2>
              <ul className="space-y-3 text-brand-on-surface-variant">
                <li><strong>Economic resilience:</strong> Farmers reduce reliance on costly chemical fertilizers and pesticides, lowering expenses and increasing profits.</li>
                <li><strong>Food security:</strong> Regenerative methods improve yields sustainably, ensuring families have reliable access to nutritious food.</li>
                <li><strong>Community empowerment:</strong> Training campaigns equip farmers with knowledge of soil health, water conservation, and organic techniques, fostering independence and innovation.</li>
                <li><strong>Market opportunities:</strong> Demand for ethically grown produce creates new income streams for rural households.</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-brand-outline-variant">
              <div className="w-12 h-12 bg-brand-primary rounded-xl flex items-center justify-center mb-4">
                <Globe className="size-6 text-brand-yellow-green" />
              </div>
              <h2 className="text-2xl font-bold text-brand-primary mb-4">Importance for the Planet</h2>
              <ul className="space-y-3 text-brand-on-surface-variant">
                <li><strong>Soil regeneration:</strong> Practices like composting and crop rotation restore soil fertility, reversing decades of degradation.</li>
                <li><strong>Climate resilience:</strong> Organic farming reduces greenhouse gas emissions and enhances carbon sequestration in soils.</li>
                <li><strong>Biodiversity protection:</strong> Avoiding chemical inputs safeguards pollinators, local wildlife, and water systems.</li>
                <li><strong>Global sustainability:</strong> Aligns with the UN Sustainable Development Goals (SDGs), particularly those on sustainable agriculture, climate action, and responsible consumption.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="get-involved" className="py-28 px-6 md:px-16">
        <div className="bg-brand-yellow-green rounded-xl p-12 md:p-24 text-center max-w-[1280px] mx-auto relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-5xl font-black text-brand-primary mb-8">Farm for the Future<span className="text-brand-blushed-brick">.</span></h2>
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
