import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Sprout, FlaskConical, GraduationCap, Handshake, Recycle, Leaf, Users, Check, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "HORRC — Himalayan Organic Research and Resource Centre",
  description:
    "HORRC is SADP-Nepal's demonstration organic farm and research and resource centre in Pokhara-16 for soil regeneration, organic agriculture and sustainable rural development.",
};


const researchAreas = [
  "Soil health and soil biology",
  "Organic and regenerative agriculture",
  "Vermicompost and composting",
  "Biochar",
  "Biological fertilizers",
  "Botanical crop protection",
  "Climate-resilient agriculture",
  "Protected cultivation",
  "Hydroponics and microgreens",
  "Farm biodiversity",
  "Circular bioeconomy",
  "Sustainable resource management",
];

const collaboration = [
  "Research",
  "Training",
  "Technology Demonstration",
  "Farmer Capacity Building",
  "Knowledge Exchange",
  "Equipment and Infrastructure",
  "Pilot Projects",
  "Resource Mobilization",
];

const loop = ["Organic Resources", "Processing", "Healthy Soil", "Crops", "Food", "Organic Residues", "Reuse"];

function SectionHeading({ kicker, children }: { kicker?: string; children: React.ReactNode }) {
  return (
    <>
      {kicker && (
        <p className="text-sm font-bold uppercase tracking-widest text-brand-blushed-brick mb-4">{kicker}</p>
      )}
      <h2 className="text-4xl md:text-5xl font-black text-brand-primary mb-8">
        {children}
        <span className="text-brand-blushed-brick">.</span>
      </h2>
    </>
  );
}

const P = ({ children }: { children: React.ReactNode }) => (
  <p className="text-xl text-brand-on-surface-variant leading-relaxed mb-6">{children}</p>
);

export default function HorrcPage() {
  return (
    <>
      <section className="relative min-h-[50vh] overflow-hidden bg-brand-bg">
        <div className="max-w-[1280px] mx-auto px-6 md:px-16">
          <div className="grid grid-cols-1 min-h-[50vh] items-center">
            <div className="py-16 md:py-24 max-w-3xl">
              <span className="inline-block bg-brand-primary text-primary-foreground text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded mb-6">AN INITIATIVE OF SADP-NEPAL</span>
              <h1 className="text-4xl md:text-6xl font-black text-brand-primary mb-6">
                Himalayan Organic Research &amp; Resource Centre<span className="text-brand-blushed-brick">.</span>
              </h1>
              <p className="text-xl md:text-2xl text-brand-on-surface-variant max-w-2xl mb-8 leading-relaxed">
                Soil regeneration, organic agriculture and sustainable rural development, from a demonstration farm in Pokhara-16, Gandaki Province.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="#collaborate"
                  className="bg-brand-primary text-white px-8 py-3.5 rounded-full text-sm font-bold shadow-sm hover:bg-brand-primary/90 transition-all duration-200 text-center"
                >
                  Collaborate With HORRC
                </a>
                <Link
                  href="/volunteer"
                  className="border-2 border-brand-primary text-brand-primary px-8 py-3.5 rounded-full text-sm font-bold hover:bg-brand-primary hover:text-white transition-all duration-200 text-center"
                >
                  Volunteer &amp; Intern
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="px-6 md:px-16 max-w-[1280px] mx-auto">
          <div className="relative aspect-[3/2] md:aspect-[16/8] overflow-hidden rounded-3xl shadow-2xl">
            <Image
              src="/photos/horrc-house-machhapuchhre.webp"
              alt="Traditional Nepali house with Machhapuchhre rising behind it"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 1280px"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="py-28">
        <div className="px-6 md:px-16 max-w-[1280px] mx-auto">
          <div className="max-w-4xl mx-auto">
            <P>
              As part of its continuing commitment to sustainable development, agriculture, environmental protection and community resilience, SADP-Nepal has initiated the Himalayan Organic Research and Resource Centre (HORRC) in Pokhara-16, Gandaki Province, Nepal.
            </P>
            <P>
              HORRC has been established with the vision of creating a practical platform for promoting soil regeneration, organic and regenerative agriculture, sustainable resource management, agricultural research, training and knowledge sharing.
            </P>
            <P>
              Initially developed on approximately half an acre of land, HORRC is being established as a demonstration organic farm and research and resource centre where farmers, students, researchers, agricultural professionals, volunteers, development practitioners and visitors can learn, experiment and exchange knowledge.
            </P>
          </div>
        </div>
      </section>

      <section className="py-28 bg-brand-surface-container-low">
        <div className="px-6 md:px-16 max-w-[1280px] mx-auto">
          <div className="max-w-4xl mx-auto">
            <SectionHeading kicker="Our Reason">Why HORRC?</SectionHeading>
            <P>
              Agriculture is closely connected with the health of soil, water, biodiversity, communities and the wider environment. Increasing pressure on agricultural land, declining soil quality, changing climatic conditions, rising production costs and inefficient use of natural resources are creating new challenges for farmers.
            </P>
            <P>
              SADP-Nepal recognizes that sustainable agricultural development must go beyond increasing production alone. It must also consider the long-term health of the soil and the ecological systems that sustain agriculture.
            </P>
            <p className="text-2xl font-bold text-brand-primary mb-6">
              For this reason, HORRC places soil regeneration at the heart of its work.
            </p>
            <P>
              The centre promotes the understanding that healthy soil is a living ecosystem and that maintaining soil organic matter, biological activity, biodiversity and ecological balance is fundamental to sustainable food production.
            </P>
            <P>
              Through practical demonstration and learning, HORRC seeks to explore how farmers can produce food while simultaneously improving the health and resilience of their land.
            </P>
          </div>
        </div>
      </section>

      <section className="py-28">
        <div className="px-6 md:px-16 max-w-[1280px] mx-auto">
          <div className="max-w-4xl mx-auto">
            <SectionHeading kicker="The Farm">From Demonstration Farm to Learning Centre</SectionHeading>
            <P>
              HORRC is being developed as a demonstration farm of SADP-Nepal, bringing together different elements of organic and regenerative agriculture within one practical setting.
            </P>
            <P>
              The farm is being developed to demonstrate activities including organic crop and vegetable production, protected cultivation, plastic tunnels, hydroponics, microgreens, vermicomposting, vermiwash, composting, biochar, biological agricultural inputs, botanical crop protection and other appropriate farming practices.
            </P>
            <P>
              The purpose is not simply to demonstrate individual technologies, but to show how different components can work together as an integrated farming system.
            </P>
            <P>
              Organic residues can become compost or vermicompost. Suitable biomass can be converted into biochar. Farm resources can be recycled back into the soil. Livestock and crop production can be connected. Diverse crops can support greater biological and ecological resilience.
            </P>
            <P>In this way, HORRC seeks to demonstrate a more circular and regenerative approach to farming.</P>
          </div>
        </div>
      </section>

      <section className="py-28">
        <div className="px-6 md:px-16 max-w-[1280px] mx-auto">
          <div className="max-w-4xl mx-auto mb-16">
            <SectionHeading kicker="Core Practice">Soil Regeneration</SectionHeading>
            <P>Soil regeneration is one of the central themes of HORRC.</P>
            <P>
              Healthy agricultural soil contains organic matter, microorganisms, fungi, plant roots, minerals, insects and many other living components that interact with one another.
            </P>
            <P>HORRC therefore encourages farming practices that support the biological and physical functions of soil.</P>
            <P>
              These include composting, vermicomposting, organic matter recycling, biochar, appropriate biological inputs, crop diversity, mulching, soil cover, responsible soil management and other locally appropriate regenerative practices.
            </P>
            <P>
              The centre&apos;s approach is based on the understanding that feeding the soil and supporting its biological processes is an important foundation for sustainable plant production.
            </P>
            <P>
              HORRC will continue to explore, test and demonstrate practical approaches that can help farmers improve soil health under Nepalese farming conditions.
            </P>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Sprout,
                title: "Vermicompost and Vermiwash",
                body: [
                  "Vermicomposting provides an opportunity to transform suitable organic materials into valuable agricultural resources through the activity of earthworms and microorganisms.",
                  "For farmers, this can provide a practical way to recycle organic materials while producing a useful soil amendment.",
                  "HORRC is developing vermicomposting systems not only for production but also for demonstration, training and knowledge sharing, helping farmers understand the principles, appropriate raw materials, production methods, quality considerations and responsible application.",
                ],
              },
              {
                icon: Recycle,
                title: "Biochar and Resource Recycling",
                body: [
                  "Biochar is a carbon-rich material produced from suitable biomass through controlled thermal conversion under oxygen-limited conditions. Its characteristics and effects can vary depending on the feedstock, production process and soil environment.",
                  "HORRC therefore intends to approach biochar through research, demonstration and practical learning, rather than treating it as a universal solution.",
                  "The centre will explore appropriate methods for production, preparation and application and will share knowledge as experience develops.",
                ],
              },
              {
                icon: Leaf,
                title: "Biological and Organic Inputs",
                body: [
                  "HORRC is exploring locally appropriate inputs including vermicompost, vermiwash, bio-fertilizers, fish emulsion, plant-based preparations, botanical crop protection products and fermented inputs.",
                  "The objective is an integrated approach in which biological inputs are considered alongside healthy soil management, crop diversity, good agricultural practices and efficient resource use.",
                  "HORRC will emphasize practical observation and learning so farmers can make informed decisions.",
                ],
              },
            ].map(({ icon: Icon, title, body }) => (
              <div key={title} className="bg-brand-surface-container rounded-2xl p-8 border border-brand-outline-variant">
                <div className="w-12 h-12 bg-brand-primary rounded-xl flex items-center justify-center mb-4">
                  <Icon className="size-6 text-brand-yellow-green" />
                </div>
                <h3 className="text-2xl font-bold text-brand-primary mb-4">{title}</h3>
                <div className="space-y-4 text-brand-on-surface-variant">
                  {body.map((t, i) => <p key={i}>{t}</p>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 bg-brand-surface-container-low">
        <div className="px-6 md:px-16 max-w-[1280px] mx-auto">
          <div className="max-w-4xl mx-auto">
            <SectionHeading kicker="Closing the Loop">Circular Bioeconomy</SectionHeading>
            <P>Another important concept promoted through HORRC is the circular bioeconomy.</P>
            <P>
              Agricultural residues and organic materials are often treated as waste. However, many of these materials can become valuable resources when appropriately processed.
            </P>
            <P>
              Crop residues, livestock manure, plant biomass and other biodegradable materials can potentially be transformed into compost, vermicompost, biochar and other useful agricultural resources.
            </P>
            <P>HORRC seeks to demonstrate a circular approach:</P>
          </div>
          <ol className="max-w-5xl mx-auto flex flex-wrap justify-center items-center gap-x-2 gap-y-3 mb-8" aria-label="Circular bioeconomy loop">
            {loop.map((step, i) => (
              <li key={step} className="flex items-center gap-2">
                <span className="bg-white border border-brand-outline-variant rounded-full px-5 py-2.5 text-sm font-bold text-brand-primary">{step}</span>
                {i < loop.length - 1 && <ArrowRight aria-hidden className="size-4 text-brand-blushed-brick" />}
              </li>
            ))}
          </ol>
          <div className="max-w-4xl mx-auto">
            <P>
              Such an approach can help reduce waste, improve resource efficiency and strengthen the connection between different components of a farming system.
            </P>
          </div>
        </div>
      </section>

      <section className="py-28">
        <div className="px-6 md:px-16 max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <SectionHeading kicker="Research">Research and Knowledge Generation</SectionHeading>
              <P>
                HORRC is intended to serve as a practical link between research, farming experience and innovation. SADP-Nepal recognizes the importance of developing agricultural solutions that are appropriate to local conditions and relevant to farmers.
              </P>
              <P>
                HORRC provides an opportunity for researchers, universities, students and agricultural institutions to collaborate in areas such as:
              </P>
              <P>
                The centre aims to document practical experiences and make useful knowledge available to farmers, practitioners, students and other stakeholders.
              </P>
            </div>
            <div className="bg-brand-surface-container rounded-2xl p-8 md:p-10 border border-brand-outline-variant">
              <div className="flex items-center gap-3 mb-6">
                <FlaskConical className="size-6 text-brand-primary" />
                <h3 className="text-2xl font-bold text-brand-primary">Research Areas</h3>
              </div>
              <ul className="space-y-3">
                {researchAreas.map((area) => (
                  <li key={area} className="flex items-start gap-3">
                    <Check className="size-5 text-brand-primary shrink-0 mt-0.5" />
                    <span className="text-brand-on-surface-variant">{area}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-28 bg-brand-surface-container-low">
        <div className="px-6 md:px-16 max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 md:p-12 border border-brand-outline-variant">
              <div className="w-12 h-12 bg-brand-primary rounded-xl flex items-center justify-center mb-4">
                <GraduationCap className="size-6 text-brand-yellow-green" />
              </div>
              <h2 className="text-3xl font-black text-brand-primary mb-4">Training and Capacity Building</h2>
              <div className="space-y-4 text-xl text-brand-on-surface-variant">
                <p>HORRC is also being developed as a training and learning centre. SADP-Nepal sees practical agricultural education as an important part of building sustainable rural communities.</p>
                <p>Training programmes and learning activities can be developed for farmers, students, researchers, agricultural professionals, development organizations and visitors.</p>
                <p>Potential areas include soil regeneration, organic agriculture, vermicompost production, composting, biochar, biological inputs, botanical crop protection, Bokashi, protected cultivation, hydroponics, microgreens and circular agriculture.</p>
                <p>The emphasis will be on learning through practical demonstration and participation.</p>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 md:p-12 border border-brand-outline-variant">
              <div className="w-12 h-12 bg-brand-primary rounded-xl flex items-center justify-center mb-4">
                <Users className="size-6 text-brand-yellow-green" />
              </div>
              <h2 className="text-3xl font-black text-brand-primary mb-4">Students, Researchers and Volunteers</h2>
              <div className="space-y-4 text-xl text-brand-on-surface-variant">
                <p>HORRC provides an opportunity for people who want to gain practical experience in sustainable agriculture.</p>
                <p>The centre is developing facilities and programmes that can accommodate students, researchers, volunteers and visitors interested in agriculture, environment, rural development and related fields.</p>
                <p>Farm-stay and experiential learning opportunities are intended to allow participants to experience agricultural activities directly while learning from the local farming environment.</p>
                <p>SADP-Nepal hopes that such opportunities will encourage young people and professionals to develop a deeper understanding of sustainable agriculture and rural resource management.</p>
              </div>
              <Link href="/volunteer" className="inline-flex items-center gap-2 mt-6 text-brand-primary font-bold hover:underline">
                Volunteer &amp; internship programs <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="collaborate" className="py-28">
        <div className="px-6 md:px-16 max-w-[1280px] mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <Handshake className="size-10 text-brand-primary mx-auto mb-4" />
            <SectionHeading kicker="Partnership">Collaboration and Partnership</SectionHeading>
            <p className="text-xl text-brand-on-surface-variant leading-relaxed mb-6">
              SADP-Nepal and HORRC welcome opportunities for national and international collaboration. We are interested in working with government agencies, universities, research institutions, farmer organizations, cooperatives, NGOs, development partners, private-sector organizations, organic agriculture networks and individual experts.
            </p>
            <p className="text-xl font-bold text-brand-primary mb-4">Potential areas of collaboration include:</p>
            <ul className="flex flex-wrap justify-center gap-3 mb-8">
              {collaboration.map((c) => (
                <li key={c} className="bg-brand-yellow-green/30 text-brand-primary text-sm font-bold px-4 py-2 rounded-full">{c}</li>
              ))}
            </ul>
            <p className="text-xl text-brand-on-surface-variant leading-relaxed">
              HORRC is particularly interested in partnerships that can help translate knowledge and innovation into practical benefits for farmers and communities.
            </p>
          </div>
        </div>
      </section>

      <section className="py-28 bg-brand-surface-container-low">
        <div className="px-6 md:px-16 max-w-[1280px] mx-auto">
          <div className="max-w-4xl mx-auto">
            <SectionHeading kicker="The Road Ahead">Looking Ahead</SectionHeading>
            <P>HORRC is currently at an early stage of development, but SADP-Nepal has a long-term vision for the centre.</P>
            <P>
              Our goal is to progressively develop HORRC into a research, demonstration, training and resource centre for organic and regenerative agriculture in Nepal. The centre will continue to grow through practical experience, research, partnerships and engagement with farmers and other stakeholders.
            </P>
            <P>
              We recognize that there is no single solution to the challenges facing agriculture. Sustainable agriculture requires continuous learning, adaptation and cooperation.
            </P>
            <P>
              Through HORRC, SADP-Nepal aims to contribute to this process by creating a place where people can learn, research, demonstrate, innovate and collaborate.
            </P>
          </div>
        </div>
      </section>

      <section className="py-28 px-6 md:px-16">
        <div className="bg-brand-yellow-green rounded-xl p-12 md:p-24 text-center max-w-[1280px] mx-auto relative overflow-hidden">
          <div className="relative z-10 max-w-3xl mx-auto">
            <p className="text-sm font-bold uppercase tracking-widest text-brand-primary mb-4">Our Commitment</p>
            <p className="text-xl text-brand-primary leading-relaxed mb-6">
              Through HORRC, SADP-Nepal is taking a practical step towards connecting sustainable agriculture, soil regeneration, environmental stewardship, research and community development. We believe that regenerating soil is not simply an agricultural activity. It is an investment in food security, environmental health, rural livelihoods and future generations.
            </p>
            <h2 className="text-3xl md:text-5xl font-black text-brand-primary mb-6">
              Healthy Soil. Sustainable Agriculture. Resilient Communities<span className="text-brand-blushed-brick">.</span>
            </h2>
            <p className="text-brand-primary font-bold">Himalayan Organic Research and Resource Centre (HORRC)</p>
            <p className="text-brand-primary mb-8">An initiative of SADP-Nepal · Pokhara-16, Gandaki Province, Nepal</p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link href="/volunteer" className="inline-flex items-center justify-center gap-2 bg-white text-brand-primary px-8 py-3.5 text-sm font-bold rounded-full shadow-sm hover:bg-white/90 transition-all duration-200">
                Volunteer at HORRC <ArrowRight className="size-4" />
              </Link>
              <a href="mailto:info@sadpnepal.org" className="inline-flex items-center justify-center gap-2 border-2 border-brand-primary text-brand-primary px-8 py-3.5 text-sm font-bold rounded-full hover:bg-brand-primary hover:text-white transition-all duration-200">
                Contact SADP-Nepal <ArrowRight className="size-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
