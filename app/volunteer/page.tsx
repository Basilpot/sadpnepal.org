import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle, MapPin, Globe, Users, Tent, GraduationCap } from "lucide-react";
import { COMMUNITY_PHOTOS } from "@/lib/photos";
import { VolunteerForm } from "@/components/volunteer-form";

export const metadata: Metadata = {
  title: "Volunteer in Nepal",
  description:
    "Join SADP Nepal as a volunteer — experience Nepali culture while supporting organic farming, community development, and conservation across rural Nepal.",
};

const HERO_IMAGE = COMMUNITY_PHOTOS[10];

const costTable = [
  { duration: "2 weeks", cost: "US$340" },
  { duration: "4 weeks", cost: "US$650" },
  { duration: "6 weeks", cost: "US$975" },
  { duration: "2 months", cost: "US$1,300" },
  { duration: "10 weeks", cost: "US$1,600" },
  { duration: "3 months", cost: "US$1,850" },
  { duration: "4 months", cost: "US$2,400" },
  { duration: "6 months", cost: "US$3,000" },
];

export default function VolunteerPage() {
  return (
    <>
      <section className="relative min-h-[50vh] overflow-hidden bg-brand-bg">
        <div className="max-w-[1280px] mx-auto px-6 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 min-h-[50vh] items-center">
            <div className="py-16 md:py-24">
              <span className="inline-block bg-brand-primary text-primary-foreground text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded mb-6">VOLUNTEER</span>
              <h1 className="text-4xl md:text-6xl font-black text-brand-primary mb-6">
                Volunteer in<br />Nepal<span className="text-brand-blushed-brick">.</span>
              </h1>
              <p className="text-xl md:text-2xl text-brand-on-surface-variant max-w-lg mb-8 leading-relaxed">
                Nepal, the &ldquo;Land of Paradise&rdquo;, is a country of breathtaking beauty, abundant wildlife, and fascinating traditional cultures. Join us to make a positive difference in the lives of deprived communities.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="#apply"
                  className="bg-brand-primary text-white px-8 py-3.5 rounded-full text-sm font-bold shadow-sm hover:bg-brand-primary/90 transition-all duration-200 text-center"
                >
                  Apply Now
                </a>
                <a
                  href="#cost"
                  className="border-2 border-brand-primary text-brand-primary px-8 py-3.5 rounded-full text-sm font-bold hover:bg-brand-primary hover:text-white transition-all duration-200 text-center"
                >
                  View Program Costs
                </a>
              </div>
            </div>
            <div className="relative h-[300px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src={HERO_IMAGE}
                alt="Volunteer in Nepal"
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
        <div className="max-w-[1280px] mx-auto px-6 md:px-16">
          <div className="max-w-4xl mx-auto">
            <p className="text-sm font-bold uppercase tracking-widest text-brand-blushed-brick mb-4">About the Program</p>
            <h2 className="text-5xl font-black text-brand-primary mb-8">
              Make a Difference in Nepal<span className="text-brand-blushed-brick">.</span>
            </h2>
            <p className="text-xl text-brand-on-surface-variant leading-relaxed mb-6">
              SADP Nepal is a non-governmental organization registered with the Nepal government and affiliated with the Social Welfare Council of Nepal, working in the field of Agriculture emphasizing sustainable agriculture development. Our program makes a positive difference in the lives of deprived communities by providing volunteering opportunities to international volunteers.
            </p>
            <p className="text-xl text-brand-on-surface-variant leading-relaxed mb-6">
              We provide Nepali culture and training for foreign volunteers who wish to render their services to Nepal in the field of organic agriculture at our organic agriculture resource center and farms. Volunteers can also work in other areas including Education, Health, Community Development, Orphanage, Disability, Agro-Forestry, Environment and Ecology, and Poverty Alleviation.
            </p>
          </div>
        </div>
      </section>

      <section className="py-28 bg-brand-surface-container-low">
        <div className="max-w-[1280px] mx-auto px-6 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Globe, title: "Cultural Exchange", desc: "Visit surrounding villages and experience diverse Nepali culture. Enjoy traditional rural villages in Gurung, Magar, Darai, Kumal, Bote, and Tamang communities." },
              { icon: Tent, title: "Adventure Awaits", desc: "White water rafting, Annapurna trekking, visits to Royal Chitwan National Park and elephant safari, and the birthplace of Lord Buddha in Lumbini." },
              { icon: Users, title: "Individuals & Groups", desc: "Program available for individuals or groups of up to 10 people, from one week to five months. School groups, university students, and professionals welcome." },
              { icon: GraduationCap, title: "Training & Support", desc: "Receive advice and support throughout your preparations. Get instruction about culture, food, behavior of villages, and local language." },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="bg-white rounded-xl p-8 border border-brand-outline-variant">
                  <div className="w-12 h-12 bg-brand-primary rounded-xl flex items-center justify-center mb-4">
                    <Icon className="size-6 text-brand-yellow-green" />
                  </div>
                  <h3 className="text-xl font-bold text-brand-primary mb-3">{item.title}</h3>
                  <p className="text-xl text-brand-on-surface-variant">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-28">
        <div className="max-w-[1280px] mx-auto px-6 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-brand-blushed-brick mb-4">Requirements</p>
              <h2 className="text-5xl font-black text-brand-primary mb-6">
                Program Requirements<span className="text-brand-blushed-brick">.</span>
              </h2>
              <div className="space-y-4">
                {[
                  "Have no major health problems",
                  "Have a positive and outgoing personality",
                ].map((req, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="size-6 text-brand-primary shrink-0 mt-0.5" />
                    <span className="text-xl text-brand-on-surface-variant">{req}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-brand-surface-container rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-brand-primary mb-4">Volunteers & Visitors Welcome</h3>
              <p className="text-xl text-brand-on-surface-variant mb-4">
                Volunteers, visitors, researchers, students, interns, and others are heartily welcome to join the program with their children, partners, or group of friends.
              </p>
              <div className="flex items-start gap-3">
                <MapPin className="size-5 text-brand-blushed-brick shrink-0 mt-1" />
                <p className="text-xl text-brand-on-surface-variant">
                  With our extensive local network, experienced staff, and comprehensive information about all aspects of Nepal, we are able to develop extraordinary opportunities in any corner of Nepal.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="cost" className="py-28 bg-brand-primary">
        <div className="max-w-[1280px] mx-auto px-6 md:px-16">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-white mb-6">
              Program Cost<span className="text-brand-blushed-brick">.</span>
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              A US$150 application fee (non-refundable) secures your place. Pay only once and access any SADP volunteer program over the next 2 years.
            </p>
          </div>
          <div className="max-w-2xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20 mb-8">
              <table className="w-full text-white">
                <thead>
                  <tr className="border-b border-white/20">
                    <th className="text-left p-4 text-sm font-bold uppercase tracking-widest">Duration</th>
                    <th className="text-right p-4 text-sm font-bold uppercase tracking-widest">Cost</th>
                  </tr>
                </thead>
                <tbody>
                  {costTable.map((row, i) => (
                    <tr key={i} className="border-b border-white/10">
                      <td className="p-4 text-white/90">{row.duration}</td>
                      <td className="p-4 text-right font-bold">{row.cost}</td>
                    </tr>
                  ))}
                  <tr>
                    <td className="p-4 text-white/70 italic">Beyond six months</td>
                    <td className="p-4 text-right text-white/70 italic">Negotiable</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-xl font-bold text-white mb-4">What Your In-Country Fee Covers</h3>
              <ul className="space-y-2">
                {[
                  "Administrative charge",
                  "Project donation",
                  "Airport pick up",
                  "Transport to the project",
                  "Meals and accommodation during placement",
                  "Supervision",
                  "24hr Emergency line",
                  "Membership to host organization and SADP",
                  "All safe travel alert service",
                  "Letter of completion",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/80">
                    <CheckCircle className="size-5 text-brand-yellow-green shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-white/60 text-xl mt-6">
                Note: Nepal Travel Guide published by Lonely Planet has mentioned about our volunteer program and about our organic outlet at Pokhara in their guide book.
              </p>
              <p className="text-white/60 text-xl mt-2">
                You will need a weekly budget of approximately US$30 for personal expenses like bottled water, beverages, and entertainment.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="apply" className="py-28 bg-brand-surface-container">
        <div className="max-w-4xl mx-auto px-6 md:px-16">
          <p className="text-sm font-bold uppercase tracking-widest text-brand-blushed-brick mb-4 text-center">Get Involved</p>
          <h2 className="text-5xl font-black text-brand-primary mb-6 text-center">
            Apply Now
          </h2>
          <p className="text-center text-xl text-brand-on-surface-variant mb-12">
            Apply via email at <a href="mailto:info@sadpnepal.org" className="text-brand-primary font-bold underline">info@sadpnepal.org</a> or fill the form below and we will get back to you.
          </p>
          <VolunteerForm />
        </div>
      </section>
    </>
  );
}
