import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Leaf, Sprout, Sun, TreePine, BookOpen, FlaskConical, Store, Apple } from "lucide-react";
import { FARMING_PHOTOS, CONSERVATION_PHOTOS, CONSTRUCTION_PHOTOS } from "@/lib/photos";

export const metadata: Metadata = {
  title: "What We Do",
  description: "SADP Nepal — organic farming, regenerative agriculture, climate-smart farming, permaculture, agroforestry, training, research, and value addition.",
};

const HERO_BG = FARMING_PHOTOS[0];
const inlinePhotos = [FARMING_PHOTOS[1], CONSERVATION_PHOTOS[0], CONSTRUCTION_PHOTOS[0]];

export default function OurWork() {
  return (
    <>
      <section className="relative min-h-[50vh] overflow-hidden bg-brand-bg">
        <div className="max-w-[1280px] mx-auto px-6 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 min-h-[50vh] items-center">
            <div className="py-16 md:py-24">
              <span className="inline-block bg-brand-primary text-primary-foreground text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded mb-6">WHAT WE DO</span>
              <h1 className="text-4xl md:text-6xl font-black text-brand-primary mb-6">
                Our Work<span className="text-brand-blushed-brick">.</span>
              </h1>
              <p className="text-xl md:text-2xl text-brand-on-surface-variant max-w-lg mb-8 leading-relaxed">
                From organic farming to value addition, SADP Nepal works across every phase of sustainable agriculture to empower farmers and protect the environment.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/volunteer"
                  className="bg-brand-primary text-white px-8 py-3.5 rounded-full text-sm font-bold shadow-sm hover:bg-brand-primary/90 transition-all duration-200 text-center"
                >
                  Volunteer With Us
                </Link>
                <Link
                  href="/projects/kgecp"
                  className="border-2 border-brand-primary text-brand-primary px-8 py-3.5 rounded-full text-sm font-bold hover:bg-brand-primary hover:text-white transition-all duration-200 text-center"
                >
                  Our Flagship Project
                </Link>
              </div>
            </div>
            <div className="relative h-[300px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={HERO_BG}
                alt="Our work in Nepal"
                className="w-full h-full object-cover scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-28">
        <div className="px-6 md:px-16 max-w-[1280px] mx-auto">
          <div className="space-y-12">
            {[
              {
                icon: Leaf,
                title: "Organic Farming",
                body: "Organic farming is an agricultural practice that depends on the inputs of natural materials which undergo ecological processes rather than synthetic fertilizers, pesticides, and genetically modified organisms. Globally, the practice of organic farming dates to the time unknown where farmers used locally available resources such as farmyard manure, compost, vermicompost, bio-fertilizers, botanical pesticides, and traditional farming knowledge — Nepal is not an exception here. With time everything changed, and to yield more artificial fertilizers were introduced. The continuous use of artificial fertilizers has degraded the soil to the degree now we are on the brink of losing food growing soil in many parts of the world. Now it's high time we go back to organic farming. It helps maintain soil fertility, conserve biodiversity, improve food quality, and reduce environmental pollution. Organic farming is particularly suitable for Nepal's diverse agroecological regions, where smallholder farmers can produce high-value crops for domestic and export markets. It contributes to sustainable livelihoods, food security, and the conservation of natural resources for future generations.",
              },
              {
                icon: Sprout,
                title: "Regenerative Farming",
                body: "Regenerative farming is a holistic agricultural approach that aims to restore and enhance soil health, biodiversity, water cycles, and ecosystem resilience. In Nepal, regenerative farming practices include crop rotation, cover cropping, reduced tillage, compost application, agroforestry, mulching, and integrated livestock management. These practices help rebuild soil organic matter, increase carbon sequestration, improve water retention, and reduce dependence on external inputs. Regenerative farming not only sustains agricultural productivity but also reverses environmental degradation caused by intensive farming. It is increasingly recognized as an effective strategy for improving farm resilience, combating climate change, and ensuring long-term agricultural sustainability in Nepal.",
              },
              {
                icon: Sun,
                title: "Climate-Smart Farming",
                body: "Climate-smart farming refers to agricultural practices that increase productivity, enhance resilience to climate change, and reduce greenhouse gas emissions wherever possible. In Nepal, where farmers face challenges such as erratic rainfall, droughts, floods, and changing weather patterns, climate-smart agriculture promotes techniques such as drought-tolerant crop varieties, efficient irrigation systems, rainwater harvesting, conservation agriculture, integrated pest management, and weather-based advisory services. These approaches help farmers adapt to climate variability while maintaining food production and protecting natural resources. Climate-smart farming supports sustainable development by strengthening food security, reducing vulnerability, and improving the adaptive capacity of rural communities.",
              },
              {
                icon: TreePine,
                title: "Permaculture",
                body: "Permaculture is a design-based approach to sustainable agriculture that mimics natural ecosystems to create productive, self-sustaining, and environmentally friendly farming systems. In Nepal, permaculture integrates crops, trees, livestock, water management, and human settlements in ways that maximize resource efficiency and minimize waste. Practices such as mulching, companion planting, rainwater harvesting, composting, and agroforestry are commonly applied. Permaculture emphasizes working with nature rather than against it, helping farmers improve soil fertility, conserve water, and enhance biodiversity. It is particularly valuable for smallholder farmers seeking resilient and low-input farming systems that support both livelihoods and environmental conservation.",
              },
              {
                icon: Apple,
                title: "Agroforestry",
                body: "Agroforestry is a land-use system that combines trees, crops, and sometimes livestock on the same piece of land to create productive and sustainable farming systems. In Nepal, agroforestry practices include planting fruit trees, fodder trees, timber species, and medicinal plants alongside agricultural crops. This approach improves soil fertility, prevents erosion, enhances biodiversity, provides shade, and diversifies farm income sources. Agroforestry is especially beneficial in Nepal's hilly and mountainous regions, where it helps stabilize slopes and conserve watersheds. By integrating agriculture and forestry, farmers can increase resilience to climate change while improving food security and environmental sustainability.",
              },
              {
                icon: BookOpen,
                title: "Farmer Training & Capacity Building",
                body: "Farmer training and capacity building involve strengthening the knowledge, skills, and abilities of farmers to adopt improved agricultural practices and manage their farms more effectively. In Nepal, training programs often focus on organic farming, climate-smart agriculture, pest management, post-harvest handling, entrepreneurship, financial literacy, and market access. Through workshops, field demonstrations, farmer field schools, and exposure visits, farmers gain practical skills that improve productivity, income, and resilience. Capacity building empowers rural communities to make informed decisions, adopt innovations, and become self-reliant. It plays a vital role in promoting sustainable agricultural development and enhancing livelihoods.",
              },
              {
                icon: FlaskConical,
                title: "Research & Demonstration Farm",
                body: "A research and demonstration farm serves as a practical learning center where innovative agricultural technologies, farming methods, and crop varieties are tested, validated, and showcased. In Nepal, these farms help bridge the gap between scientific research and field-level application by providing farmers with hands-on learning opportunities. Demonstration plots allow farmers to observe the benefits of sustainable practices such as organic farming, integrated pest management, agroforestry, and climate-smart agriculture under local conditions. Research and demonstration farms contribute to knowledge generation, technology transfer, and farmer education, supporting the adoption of effective and sustainable agricultural solutions.",
              },
              {
                icon: Store,
                title: "Value Addition to Farm Products",
                body: "Value addition refers to the process of increasing the economic value of agricultural products through processing, packaging, branding, quality improvement, and market development. In Nepal, value addition includes activities such as producing fruit jams, pickles, dried fruits, herbal teas, essential oils, honey products, spices, and processed grains. These activities reduce post-harvest losses, extend shelf life, create employment opportunities, and increase farmers' income. By transforming raw agricultural products into higher-value goods, farmers and rural enterprises can access new markets and improve profitability. Value addition plays a crucial role in strengthening agricultural value chains and rural economies.",
              },
              {
                icon: Leaf,
                title: "Agro-Industry",
                body: "Agro-industry encompasses businesses and enterprises that process, package, store, transport, and market agricultural products and inputs. In Nepal, agro-industries include dairy processing, food processing, herbal product manufacturing, seed production, essential oil extraction, spice processing, tea and coffee industries, and fruit and vegetable processing enterprises. Agro-industries create employment, stimulate rural economic growth, and provide market opportunities for farmers. They help reduce post-harvest losses and increase the value of agricultural products. By linking agriculture with industry and markets, agro-industries contribute significantly to rural development, income generation, food security, and national economic growth.",
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <article key={i} className="grid grid-cols-1 md:grid-cols-5 gap-8 items-start bg-white rounded-2xl p-8 md:p-12 border border-brand-outline-variant">
                  <div className="md:col-span-1">
                    <div className="w-14 h-14 bg-brand-yellow-green rounded-xl flex items-center justify-center">
                      <Icon className="size-7 text-brand-primary" />
                    </div>
                  </div>
                  <div className="md:col-span-4">
                    <h2 className="text-2xl font-bold text-brand-primary mb-4">{item.title}</h2>
                    <p className="text-xl text-brand-on-surface-variant leading-relaxed">{item.body}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-28 bg-brand-primary">
        <div className="max-w-[1280px] mx-auto px-6 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {inlinePhotos.map((photo, i) => (
              <div key={i} className="rounded-2xl overflow-hidden aspect-[4/3] relative">
                <Image src={photo} alt="SADP Nepal work" fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 px-6 md:px-16">
        <div className="bg-brand-yellow-green rounded-xl p-12 md:p-24 text-center max-w-[1280px] mx-auto relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-5xl font-black text-brand-primary mb-8">Support Our Mission<span className="text-brand-blushed-brick">.</span></h2>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link href="/donate" className="bg-white text-brand-primary px-8 py-3.5 text-sm font-bold rounded-full shadow-sm hover:bg-white/90 transition-all duration-200">
                Donate Now
              </Link>
              <Link href="/volunteer" className="border-2 border-brand-primary text-brand-primary px-8 py-3.5 text-sm font-bold rounded-full hover:bg-brand-primary hover:text-white transition-all duration-200">
                Join Our Mission
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
