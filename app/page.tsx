import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check, Droplets, TreesIcon as Tree, Sprout, FlaskConical, GraduationCap, Search, Package } from "lucide-react";
import LatestNews from "@/components/latest-news";
import Testimonials from "@/components/testimonials";
import { FARMING_PHOTOS, COMMUNITY_PHOTOS, CONSERVATION_PHOTOS, PEOPLE_PHOTOS } from "@/lib/photos";

const HERO_BG = FARMING_PHOTOS[37];
const homePhotos = [FARMING_PHOTOS[0], COMMUNITY_PHOTOS[0], CONSERVATION_PHOTOS[5], PEOPLE_PHOTOS[0]];

function HeroSection() {
  return (
    <section className="relative min-h-[50vh] overflow-hidden bg-brand-bg">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[220px] md:text-[400px] font-black text-brand-yellow-green/15 select-none pointer-events-none whitespace-nowrap leading-none">
        GROW
      </div>
      <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 min-h-[50vh] items-center">
          <div className="py-16 md:py-24">
            <h1 className="text-4xl md:text-6xl font-black text-brand-primary mb-6">
              Cultivate<br />Change in Nepal<span className="text-brand-blushed-brick">.</span>
            </h1>
            <p className="text-xl md:text-2xl text-brand-on-surface-variant max-w-lg mb-8 leading-relaxed">
              Join us to help our farmers, Nepal&apos;s hardworking backbone, build a future of sustainable, regenerative agriculture.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/about"
                className="bg-brand-primary text-white px-8 py-3.5 rounded-full text-sm font-bold shadow-sm hover:bg-brand-primary/90 transition-all duration-200 text-center"
              >
                Story of SADP-Nepal
              </Link>
              <Link
                href="/volunteer"
                className="border-2 border-brand-primary text-brand-primary px-8 py-3.5 rounded-full text-sm font-bold hover:bg-brand-primary hover:text-white transition-all duration-200 text-center"
              >
                See Programs
              </Link>
            </div>
            <p className="text-xl text-brand-outline mt-4">
              Let&apos;s join hands to support our farmers. Your small help can be life-changing.
            </p>
          </div>
            <div className="relative h-[300px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src={HERO_BG}
                alt="Nepal sustainable agriculture"
                fill
                className="object-cover scale-110"
                priority
              />
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-8">
          {homePhotos.map((photo, i) => (
            <div key={i} className="rounded-xl overflow-hidden aspect-[4/3] relative hover:shadow-xl transition-all duration-300">
              <Image src={photo} alt="SADP Nepal" fill className="object-cover hover:scale-105 transition-transform duration-500" />
            </div>
          ))}
        </div>
        <div className="py-4">
          <div className="flex items-center justify-center gap-6 md:gap-16 flex-wrap">
            {[
              { value: "500+", label: "Farmers Trained" },
              { value: "20+", label: "Communities Supported" },
              { value: "15k", label: "Trees Planted" },
            ].map((s, i) => (
              <div key={i} className="flex items-center gap-2">
                <Check className="size-4 text-brand-primary shrink-0" />
                <div>
                  <span className="text-lg font-bold text-brand-primary">{s.value}</span>
                  <span className="text-xs text-brand-outline ml-1">{s.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function MissionSection() {
  return (
    <section className="py-28">
      <div className="px-6 md:px-16 max-w-[1280px] mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-brand-primary text-primary-foreground text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded mb-6">OUR MISSION</span>
          <p className="text-xl md:text-2xl text-brand-on-surface leading-relaxed mb-6">
            Nepal, the land of the braves, home to supreme natural wonders, birthplace of Gautam Buddha, and a nation heavily dependent on agriculture, deserves better for its farmers.
          </p>
          <p className="text-xl text-brand-on-surface-variant leading-relaxed mb-8">
            SADP Nepal aims to provide hardworking farmers every possible assistance including research-backed knowledge, ideal markets for their products, introduction of simple agro-technologies to add value and shelf life to their crops, and encouragement to practice organic farming and conservation of the surrounding environment.
          </p>
          <p className="text-xl font-bold text-brand-primary">
            Let&apos;s join hands to support our farmers to increase income generation activity in 2026<span className="text-brand-blushed-brick">.</span>
          </p>
        </div>
      </div>
    </section>
  );
}

function VolunteerCallSection() {
  return (
    <section className="py-28 bg-brand-surface-container-low">
      <div className="px-6 md:px-16 max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-sm font-bold uppercase tracking-widest text-brand-blushed-brick mb-4 block">Volunteer</span>
            <h2 className="text-5xl font-black text-brand-primary mb-6">
              Volunteer for the Better Future<span className="text-brand-blushed-brick">.</span>
            </h2>
            <p className="text-xl text-brand-on-surface-variant leading-relaxed mb-6">
              SADP Nepal caters opportunities to volunteers from around the world in multiple areas, all aimed at boosting environmentally sustainable regenerative organic farming in Nepal and uplifting the lives of underprivileged farmers.
            </p>
            <p className="text-xl text-brand-on-surface-variant leading-relaxed mb-8">
              Prior to plantation, the timeline between planting and harvesting, post-harvesting activities like facilitating markets, and researching ideas to add value to farm products to enhance shelf life are areas where our volunteers are welcomed.
            </p>
            <Link
              href="/volunteer"
              className="inline-flex bg-brand-primary text-white px-8 py-3.5 rounded-full text-sm font-bold shadow-sm hover:bg-brand-primary/90 transition-all duration-200"
            >
              Join as a Volunteer
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { icon: Sprout, label: "Regenerative Farming" },
              { icon: GraduationCap, label: "Research & Training" },
              { icon: Droplets, label: "Water Conservation" },
              { icon: Tree, label: "Forest Restoration" },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="bg-white rounded-xl p-6 border border-brand-outline-variant hover:border-brand-primary/30 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="w-10 h-10 bg-brand-yellow-green/20 rounded-lg flex items-center justify-center mb-3">
                    <Icon className="size-5 text-brand-primary" />
                  </div>
                  <p className="text-sm font-bold text-brand-primary">{item.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function TrainingSection() {
  return (
    <section className="py-28">
      <div className="px-6 md:px-16 max-w-[1280px] mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-bold uppercase tracking-widest text-brand-blushed-brick mb-4 block">Research & Training</span>
          <h2 className="text-5xl font-black text-brand-primary mb-6">
            Research & Training Programs<span className="text-brand-blushed-brick">.</span>
          </h2>
          <p className="text-xl text-brand-on-surface-variant max-w-3xl mx-auto">
            Agriculture in Nepal is very much disorganized in every phase despite being the profession of almost two-thirds of its population. The most important reason is the lack of education. SADP Nepal makes an impact by offering the right education through research-backed training campaigns.
          </p>
        </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-brand-surface-container rounded-2xl p-8 md:p-12 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 bg-brand-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Search className="size-6 text-brand-primary" />
              </div>
              <h3 className="text-2xl font-bold text-brand-primary mb-4">First Phase Training</h3>
              <p className="text-xl text-brand-on-surface-variant leading-relaxed">
                We with our volunteers research the availability of four components for successful regenerative organic farming: soil, water, sunlight, and natural fertilizers. Based on findings we organize training campaigns across Nepal to offer farmers the opportunity to produce the right product out of their farms so their income gets higher. This phase also includes techniques to nurture the plant organically for more and healthier food.
              </p>
            </div>
            <div className="bg-brand-surface-container rounded-2xl p-8 md:p-12 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 bg-brand-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Package className="size-6 text-brand-primary" />
              </div>
              <h3 className="text-2xl font-bold text-brand-primary mb-4">Second Phase Training</h3>
              <p className="text-xl text-brand-on-surface-variant leading-relaxed">
                The second phase happens before and during harvesting. Training includes innovative ways to make more out of what our farmers have. It brings scattered farmers together for the uniformity of the value they deserve by facilitating the right market. Training also induces traditional ways blended with modern innovation to value-add products for year-round income.
              </p>
            </div>
          </div>
      </div>
    </section>
  );
}

function RegenerativeFarmingSection() {
  return (
    <section className="py-28 bg-brand-primary">
      <div className="px-6 md:px-16 max-w-[1280px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-white mb-6">
            Regenerative Organic Farming<span className="text-brand-blushed-brick">.</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Regenerative organic farming together with our farmers is the need of today&apos;s world for healthy food security in the future. SADP Nepal works every day to educate our farmers about this method. Soil health is necessary, but because of human greed we have been using chemical fertilizers for ages. If this continues, the soil becomes lifeless.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-10 border border-white/20 hover:bg-white/20 hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 bg-brand-yellow-green rounded-xl flex items-center justify-center mb-4">
              <Droplets className="size-6 text-brand-primary" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Conservation of Water Bodies & Forestlands</h3>
            <p className="text-xl text-white/80 leading-relaxed">
              SADP Nepal conserves the ecology in the vicinity of farmlands. We work with local farmers and volunteers on cleaning rivers, lakes and ponds, constructing water bodies and reservoirs, planting high carbon-sinking plants like bamboo, removing invasive alien plants, and planting high-value indigenous herbal plants in forest areas.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-10 border border-white/20 hover:bg-white/20 hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 bg-brand-yellow-green rounded-xl flex items-center justify-center mb-4">
              <Sprout className="size-6 text-brand-primary" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Working in Organic Farms with Farmers</h3>
            <p className="text-xl text-white/80 leading-relaxed">
              SADP Nepal has a network of organic farms with food and accommodation in various parts of Nepal. Our volunteers can work in these farms, learn about indigenous plant species, experience traditional farming ways, and enjoy the authentic lifestyle of Nepali farmers. Volunteers also learn techniques of producing vermicompost and gain knowledge of Nepalese culinary arts.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ExpertiseSection() {
  return (
    <section className="py-28 bg-brand-surface-container-low">
      <div className="px-6 md:px-16 max-w-[1280px] mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-bold uppercase tracking-widest text-brand-blushed-brick mb-4 block">Knowledge & Innovation</span>
          <h2 className="text-5xl font-black text-brand-primary mb-6">
            Expertise & Technology<span className="text-brand-blushed-brick">.</span>
          </h2>
          <p className="text-xl text-brand-on-surface-variant max-w-3xl mx-auto">
            No industry can sustain without expert knowledge and necessary technology. SADP Nepal collaborates with experts in regenerative organic farming and innovative technical minds to develop a road map for achieving food security in a sustainable way.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-8 md:p-10 border border-brand-outline-variant hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="w-12 h-12 bg-brand-primary rounded-xl flex items-center justify-center mb-4">
              <GraduationCap className="size-6 text-brand-yellow-green" />
            </div>
            <h3 className="text-2xl font-bold text-brand-primary mb-4">Expertise</h3>
            <p className="text-xl text-brand-on-surface-variant leading-relaxed">
              Expertise in regenerative farming refers not only to agricultural scholars with university degrees, but also to those who have worked in this area for a very long time and learned how nature works. SADP Nepal provides opportunities to work with both kinds of experts.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-8 md:p-10 border border-brand-outline-variant hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="w-12 h-12 bg-brand-primary rounded-xl flex items-center justify-center mb-4">
              <FlaskConical className="size-6 text-brand-yellow-green" />
            </div>
            <h3 className="text-2xl font-bold text-brand-primary mb-4">Tradition & Technology</h3>
            <p className="text-xl text-brand-on-surface-variant leading-relaxed">
              SADP Nepal considers technology in organic farming should be free from equipment and processes that degrade the environment and nutritional value. We are keen on finding ways to add value to farm products for longer use without contamination. We work with farmers and mentors to produce value-added products blending traditional Nepalese ways with technology.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-28 bg-brand-primary relative overflow-hidden">
      <div className="relative z-10 px-6 md:px-16 max-w-[1280px] mx-auto text-center">
        <h2 className="text-5xl md:text-7xl font-black text-white mb-6">Make a Difference Today</h2>
        <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
          Your support directly funds agricultural training and ecological restoration in Nepal&apos;s most vulnerable regions.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <Link
            href="/donate"
            className="bg-white text-brand-primary px-8 py-3.5 rounded-full text-sm font-bold shadow-sm hover:bg-white/90 transition-all duration-200"
          >
            Donate Now
          </Link>
          <Link
            href="/volunteer"
            className="border-2 border-white text-white px-8 py-3.5 rounded-full text-sm font-bold hover:bg-white hover:text-brand-primary transition-all duration-200"
          >
            Join Our Mission
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <HeroSection />
      <MissionSection />
      <VolunteerCallSection />
      <TrainingSection />
      <RegenerativeFarmingSection />
      <ExpertiseSection />
      <Testimonials />
      <LatestNews />
      <CTASection />
    </>
  );
}
