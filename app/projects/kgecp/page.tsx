import Link from "next/link";
import Image from "next/image";
import { Leaf, Fish, TreePine, Mountain, Utensils, Rocket, Building, Target, Globe, Lightbulb } from "lucide-react";
import { CONSERVATION_PHOTOS } from "@/lib/photos";

export const metadata = {
  title: "Kalikhola Green Economic Corridor Project",
  description: "A community-led visionary blueprint to transform Kalikhola into an exemplary hub of resilient, self-sustaining eco-corridor in Pokhara.",
};

const HERO_BG = CONSERVATION_PHOTOS[0];
const inlinePhotos = [CONSERVATION_PHOTOS[5], CONSERVATION_PHOTOS[8], CONSERVATION_PHOTOS[9], CONSERVATION_PHOTOS[11]];

export default function KGECPPage() {
  return (
    <>
      <section className="relative min-h-[50vh] overflow-hidden bg-brand-bg">
        <div className="max-w-[1280px] mx-auto px-6 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 min-h-[50vh] items-center">
            <div className="py-16 md:py-24">
              <span className="inline-block bg-brand-primary text-primary-foreground text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded mb-6">PROJECT</span>
              <h1 className="text-4xl md:text-6xl font-black text-brand-primary mb-6">
                Kalikhola Green<br />Economic Corridor<span className="text-brand-blushed-brick">.</span>
              </h1>
              <p className="text-xl md:text-2xl text-brand-on-surface-variant max-w-lg mb-8 leading-relaxed">
                A community-led visionary blueprint to transform and enhance one of Pokhara&apos;s most ecologically resourceful yet fragile zones into an exemplary hub of resilient, self-sustaining, thriving and vibrant eco-corridor.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="#volunteer"
                  className="bg-brand-primary text-white px-8 py-3.5 rounded-full text-sm font-bold shadow-sm hover:bg-brand-primary/90 transition-all duration-200 text-center"
                >
                  Volunteer
                </a>
                <Link
                  href="/donate"
                  className="border-2 border-brand-primary text-brand-primary px-8 py-3.5 rounded-full text-sm font-bold hover:bg-brand-primary hover:text-white transition-all duration-200 text-center"
                >
                  Donate
                </Link>
              </div>
            </div>
            <div className="relative h-[300px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src={HERO_BG}
                alt="Kalikhola Green Economic Corridor"
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
          <div className="max-w-4xl mx-auto mb-20">
            <p className="text-xl md:text-2xl text-brand-on-surface leading-relaxed mb-6">
              Kalikhola originates at Kali Lek Ward No-16 in Pokhara and is a northern tributary of the glacier fed Seti Gandaki River. It forms the natural and administrative boundary between Ward No. 16 (Batulechaur/Lamachaur) and Ward No. 20 (Bhalam) of Pokhara Metropolitan City. Kalikhola carves the landscapes of these two wards of Pokhara. Gharmi Khola, a river that flows into Kalikhola, runs through the adjacent Ward No-19 and hence KGECP includes the whole of Ward Nos 16 and 20 and a tiny part of Ward No 19 of Pokhara City. The total area the project comprises is between 65-70 sq.km.
            </p>
            <p className="text-xl text-brand-on-surface-variant leading-relaxed mb-6">
              With almost 7 km stretch from Kali Lek to Bhalam, a perennial river, Kalikhola runs between the hills fed by several other tiny rivers amassing significant river basin area and impacting the lives of every species within expanded surroundings. Kalikhola in the region is the principal actor for its centuries old cultural and natural opulence.
            </p>
            <p className="text-xl text-brand-on-surface-variant leading-relaxed">
              The diverse landscapes, comprised of slopy hills, rivers and their catchment areas, terraced fields, wide plains, lush forestland, stony high cliffs, cavernous caves and hilltop viewpoints offer a unique opportunity to integrate agriculture, tourism, fisheries, agroforestry, and hospitality into a multi-stream revenue model that uplifts local communities while preserving ecological balance.
            </p>
          </div>

          <div className="max-w-4xl mx-auto mb-20 bg-brand-surface-container rounded-2xl p-8 md:p-12 border border-brand-outline-variant">
            <p className="text-xl text-brand-on-surface-variant leading-relaxed">
              The watershed or the river basin area of Kalikhola is a lifeline for the region — a source of water, biodiversity, and livelihoods — yet it faces mounting threats from climate vulnerability, rapid urbanization, and unsustainable land use or simply put absolute misuse. Seasonal flash floods, soil erosion, and sedimentation have become recurring challenges, while local communities remain economically vulnerable despite their proximity to major tourist attractions like Mahendra Cave and Bat Cave. The project aims to restore ecological balance, revitalize local economies, and build climate resilience through regenerative ecology, sustainable infrastructure, and green livelihood innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
            {inlinePhotos.slice(0, 3).map((photo, i) => (
              <div key={i} className="rounded-2xl overflow-hidden aspect-[4/3] relative">
                <Image src={photo} alt="Kalikhola project area" fill className="object-cover" />
              </div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto mb-20">
            <div className="bg-brand-surface-container rounded-2xl p-8 md:p-12 border border-brand-outline-variant mb-8">
              <h2 className="text-4xl font-black text-brand-primary mb-4">Vision</h2>
              <p className="text-xl text-brand-on-surface-variant leading-relaxed">
                To establish Wards 16, 20 and the part of Ward 19 as a nationally recognized model of integrated green economic development, where sustainable agriculture, agroforestry, river basin conservation, eco-tourism, fisheries, waste management and entrepreneurship coexist harmoniously.
              </p>
            </div>
            <div className="bg-brand-surface-container rounded-2xl p-8 md:p-12 border border-brand-outline-variant">
              <h2 className="text-4xl font-black text-brand-primary mb-4">Goal</h2>
              <p className="text-xl text-brand-on-surface-variant leading-relaxed">
                To promote sustainable economic growth and improve the quality of life for local communities through integrated management of agriculture, tourism, forests, and river ecosystems.
              </p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto mb-20">
            <h2 className="text-5xl font-black text-brand-primary mb-8 text-center">
              Objectives<span className="text-brand-blushed-brick">.</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Increase income and employment opportunities for local households.",
                "Promote climate-smart and regenerative agriculture.",
                "Develop eco-tourism and community-based tourism destinations.",
                "Strengthen river basin conservation and watershed management.",
                "Enhance sustainable utilization of forests and biodiversity.",
                "Support local entrepreneurship and value-added enterprises.",
                "Application of eco-friendly technologies to recycle and upcycle waste.",
                "Encourage public-private-community partnerships for long-term development.",
              ].map((obj, i) => (
                <div key={i} className="flex gap-3 items-start bg-white rounded-xl p-5 border border-brand-outline-variant">
                  <Target className="size-5 text-brand-primary shrink-0 mt-1" />
                  <p className="text-xl text-brand-on-surface-variant">{obj}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="max-w-4xl mx-auto mb-20">
            <h2 className="text-5xl font-black text-brand-primary mb-8 text-center">
              Strategic Components<span className="text-brand-blushed-brick">.</span>
            </h2>
            <div className="space-y-6">
              {[
                { icon: Leaf, title: "Sustainable Agriculture & Agribusiness", desc: "The project promotes organic farming clusters. Backed by research, the project encourages plantation of high value plants that best suit the soil type of every small arable land. It envisions agro-processing industries, branding of local products, and cold storage facilities to enhance market access and reduce post-harvest losses." },
                { icon: Fish, title: "Fisheries & Aquaculture", desc: "Plans include indigenous fish conservation, community-managed ponds, fish hatcheries, and recreational fishing zones. Riverside restaurants and eco-friendly aquaculture will create new income streams while preserving aquatic biodiversity." },
                { icon: TreePine, title: "Agroforestry, Forest Economy & Carbon Credit", desc: "The initiative integrates bamboo plantations, fruit trees, medicinal and aromatic plants, beekeeping, and non-timber forest products. Community forestry enterprises will contribute to carbon sequestration, ecosystem restoration, and forest-based livelihoods. Hence, the project ensures negative carbon credit." },
                { icon: Mountain, title: "River Basin Development & Eco-Tourism", desc: "The Seti River, Kalikhola, Gharmi Khola and Bhalam Khola corridors will be developed as eco-tourism destinations featuring nature trails, bird-watching zones, eco-parks, camping sites, adventure sports like rock-climbing and cultural tourism hubs. River conservation education centers will promote awareness and stewardship among visitors and locals alike." },
                { icon: Utensils, title: "Hospitality & Tourism Development", desc: "The project encourages farm stays, community homestays, boutique eco-lodges, and farm-to-table restaurants. Cultural performances, wellness tourism, yoga, and meditation centers will strengthen Pokhara's reputation as a holistic tourism destination." },
                { icon: Rocket, title: "Entrepreneurship & Green Enterprises", desc: "Support will be extended to women's cooperatives, youth startups, agri-tech innovators, and digital marketing platforms. Business incubation centers will nurture local talent and innovation, fostering a new generation of green entrepreneurs." },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="bg-white rounded-2xl p-8 border border-brand-outline-variant flex gap-6 items-start">
                    <div className="w-12 h-12 bg-brand-primary rounded-xl flex items-center justify-center shrink-0">
                      <Icon className="size-6 text-brand-yellow-green" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-brand-primary mb-2">{item.title}</h3>
                      <p className="text-xl text-brand-on-surface-variant">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
            {inlinePhotos.slice(3, 5).map((photo, i) => (
              <div key={i} className="rounded-2xl overflow-hidden aspect-[16/9] relative">
                <Image src={photo} alt="Kalikhola project" fill className="object-cover" />
              </div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto mb-20">
            <h2 className="text-5xl font-black text-brand-primary mb-8 text-center">
              Implementation Strategy<span className="text-brand-blushed-brick">.</span>
            </h2>
            <div className="space-y-6">
              <div className="bg-brand-surface-container rounded-xl p-6 border border-brand-outline-variant">
                <h3 className="text-xl font-bold text-brand-primary mb-2">Community Participation</h3>
                <p className="text-xl text-brand-on-surface-variant">Local stakeholders — farmers, cooperatives, community forest user groups, women&apos;s groups, youth clubs, and entrepreneurs — will be actively engaged in planning and implementation.</p>
              </div>
              <div className="bg-brand-surface-container rounded-xl p-6 border border-brand-outline-variant">
                <h3 className="text-xl font-bold text-brand-primary mb-2">Public-Private Partnerships (PPP)</h3>
                <p className="text-xl text-brand-on-surface-variant">Investments will be mobilized for eco-lodges, agro-processing industries, renewable energy systems, and commercial agriculture ventures.</p>
              </div>
              <div className="bg-brand-surface-container rounded-xl p-6 border border-brand-outline-variant">
                <h3 className="text-xl font-bold text-brand-primary mb-2">Capacity Building</h3>
                <p className="text-xl text-brand-on-surface-variant">Regular training will be conducted on regenerative agriculture, entrepreneurship, hospitality, eco-tourism, business management, and digital marketing.</p>
              </div>
              <div className="bg-brand-surface-container rounded-xl p-6 border border-brand-outline-variant">
                <h3 className="text-xl font-bold text-brand-primary mb-2">Infrastructure Development</h3>
                <p className="text-xl text-brand-on-surface-variant">Key infrastructure will include rural roads, irrigation systems, collection centers, cold storage, market facilities, eco-trails, and renewable energy systems.</p>
              </div>
              <div className="bg-brand-surface-container rounded-xl p-6 border border-brand-outline-variant">
                <h3 className="text-xl font-bold text-brand-primary mb-2">Environmental Safeguards</h3>
                <p className="text-xl text-brand-on-surface-variant">The project emphasizes watershed management, biodiversity conservation, waste management, climate adaptation, and green infrastructure to ensure ecological integrity.</p>
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto mb-20">
            <h2 className="text-5xl font-black text-brand-primary mb-8 text-center">
              Expected Outcomes<span className="text-brand-blushed-brick">.</span>
            </h2>
            <p className="text-xl text-brand-on-surface-variant leading-relaxed mb-6 text-center">
              By integrating agriculture, tourism, and conservation, the project aims to:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Improve livelihoods for over 5,000 households.",
                "Generate significant employment for youth and women.",
                "Increase agricultural productivity and farm income.",
                "Expand eco-tourism and hospitality businesses.",
                "Enhance forest conservation and biodiversity protection.",
                "Improve watershed health and river conservation.",
                "Strengthen local entrepreneurship and cooperatives.",
                "Attract investment in green enterprises.",
                "Position Wards 16, 20 and a part of 19 as a national model of sustainable rural urban development.",
              ].map((outcome, i) => (
                <div key={i} className="flex gap-3 items-start bg-white rounded-xl p-5 border border-brand-outline-variant">
                  <Globe className="size-5 text-brand-primary shrink-0 mt-1" />
                  <p className="text-xl text-brand-on-surface-variant">{outcome}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="max-w-4xl mx-auto mb-20">
            <h2 className="text-5xl font-black text-brand-primary mb-8 text-center">
              Partnerships &amp; Leadership<span className="text-brand-blushed-brick">.</span>
            </h2>
            <p className="text-xl text-brand-on-surface-variant leading-relaxed mb-6">
              The project will be implemented through collaboration among:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Pokhara Metropolitan City",
                "Ward Offices No. 16, 20 and 19",
                "Provincial and Federal Governments",
                "Community Forest User Groups",
                "Farmers and Cooperatives",
                "Educational and Research Institutions",
                "Tourism Entrepreneurs",
                "Financial Institutions",
                "NGOs, INGOs, and Development Partners",
                "Corporate Sector (CSR)",
                "Universities and Technical Experts",
              ].map((partner, i) => (
                <div key={i} className="flex gap-2 items-center bg-white rounded-lg px-4 py-3 border border-brand-outline-variant">
                  <Building className="size-4 text-brand-primary shrink-0" />
                  <span className="text-sm text-brand-on-surface-variant">{partner}</span>
                </div>
              ))}
            </div>
            <p className="text-xl text-brand-on-surface-variant leading-relaxed mt-6">
              The Sustainable Agriculture Development Program Nepal (SADP-Nepal) will serve as the lead facilitating organization, coordinating stakeholders, mobilizing technical expertise, and developing partnerships for sustainable, inclusive, and environmentally responsible development.
            </p>
          </div>

          <div className="max-w-4xl mx-auto mb-20">
            <h2 className="text-5xl font-black text-brand-primary mb-8 text-center">
              Sustainability Framework<span className="text-brand-blushed-brick">.</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Community ownership and cooperative-led enterprises.",
                "Public-private partnerships and green investments.",
                "Capacity development and climate-resilient infrastructure.",
                "Environmental conservation and local government participation.",
                "Revenue-generating enterprises that reinvest in community development.",
              ].map((item, i) => (
                <div key={i} className="flex gap-3 items-start bg-white rounded-xl p-5 border border-brand-outline-variant">
                  <Lightbulb className="size-5 text-brand-primary shrink-0 mt-1" />
                  <p className="text-xl text-brand-on-surface-variant">{item}</p>
                </div>
              ))}
            </div>
            <p className="text-xl text-brand-on-surface-variant leading-relaxed mt-6 text-center italic">
              This approach ensures that the project remains economically viable and ecologically sound for generations to come.
            </p>
          </div>

          <div id="volunteer" className="max-w-4xl mx-auto mb-20">
            <h2 className="text-5xl font-black text-brand-primary mb-8 text-center">
              Volunteer Engagement Opportunities<span className="text-brand-blushed-brick">.</span>
            </h2>
            <p className="text-xl text-brand-on-surface-variant leading-relaxed mb-8">
              Volunteers will play a crucial role in supporting the community-based and ecological initiatives of the Kalikhola Watershed Management Project. Their involvement will span across diverse areas, each offering meaningful contributions to both the environment and local livelihoods.
            </p>
            <div className="space-y-4">
              {[
                { title: "Watershed Restoration", desc: "Plant riparian buffers, bamboo, and native species, while helping with erosion control and the construction of silt traps — tasks that require practical skills in environmental science, forestry, and physical labor." },
                { title: "Community Agriculture", desc: "Support organic farming clusters, seed nurseries, and demonstration plots, applying knowledge of agriculture, permaculture, and irrigation management to strengthen food security and regenerative practices." },
                { title: "Eco-Tourism Development", desc: "Help design and maintain nature trails, eco-parks, and signage, as well as assist in visitor management and cultural documentation. Benefits greatly from skills in tourism, design, photography, and communication." },
                { title: "Hospitality Training", desc: "Conduct workshops for youth and women, focusing on hygiene, customer service, and hospitality management, thereby enhancing local capacity to host tourists and generate income." },
                { title: "Entrepreneurship Support", desc: "Mentor local startups, cooperatives, and women's enterprises, while assisting with digital marketing and branding. Particularly impactful for those with expertise in business development and marketing." },
                { title: "Environmental Education", desc: "Facilitate awareness campaigns, school programs, and river conservation workshops, drawing on teaching, communication, and environmental education skills to inspire stewardship among communities." },
                { title: "Research & Documentation", desc: "Collect data on biodiversity, water quality, and socio-economic impacts, preparing reports and visuals that inform project monitoring and evaluation. Skills in GIS, data analysis, and research writing are especially valuable." },
                { title: "Cultural & Creative Engagement", desc: "Document local traditions, crafts, and stories for tourism promotion, using talents in art, media, and storytelling to preserve and showcase the rich cultural heritage of the watershed." },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-xl p-6 border border-brand-outline-variant">
                  <h3 className="text-xl font-bold text-brand-primary mb-2">{item.title}</h3>
                  <p className="text-xl text-brand-on-surface-variant">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl font-black text-brand-primary mb-8">
              Synopsis<span className="text-brand-blushed-brick">.</span>
            </h2>
            <p className="text-xl text-brand-on-surface-variant leading-relaxed mb-6">
              The Kalikhola Watershed Management Project represents a bold step toward integrated green economic development in Pokhara. By uniting agriculture, tourism, forestry, and entrepreneurship under a single framework, it seeks to create a living corridor of sustainability — where nature and livelihoods thrive together.
            </p>
            <p className="text-xl text-brand-on-surface-variant leading-relaxed">
              Through collaboration among local communities, government bodies, private enterprises, and volunteers, the project will serve as a flagship model for Nepal&apos;s green transition, demonstrating how regenerative ecology and inclusive growth can coexist to build a resilient future for all.
            </p>
          </div>
        </div>
      </section>

      <section className="py-28 px-6 md:px-16">
        <div className="bg-brand-yellow-green rounded-xl p-12 md:p-24 text-center max-w-[1280px] mx-auto relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-5xl font-black text-brand-primary mb-8">Support the KGECP<span className="text-brand-blushed-brick">.</span></h2>
            <p className="text-xl text-brand-on-surface-variant max-w-2xl mx-auto mb-8">
              Join as a volunteer or donate to support the pilot mission of bringing back the identity of this almost lost river system.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link href="/volunteer" className="bg-white text-brand-primary px-8 py-3.5 text-sm font-bold rounded-full shadow-sm hover:bg-white/90 transition-all duration-200">
                Become a Volunteer
              </Link>
              <Link href="/donate" className="border-2 border-brand-primary text-brand-primary px-8 py-3.5 text-sm font-bold rounded-full hover:bg-brand-primary hover:text-white transition-all duration-200">
                Donate Now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
