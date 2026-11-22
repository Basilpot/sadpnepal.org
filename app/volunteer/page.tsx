import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle, Check, MapPin, Globe, Users, Tent, GraduationCap, ArrowRight, Sprout, Sun, Clock, UtensilsCrossed, DollarSign } from "lucide-react";
import { COMMUNITY_PHOTOS } from "@/lib/photos";
import { VOLUNTEER_OPTIONS } from "@/lib/volunteer-options";
import { VolunteerForm } from "@/components/volunteer-form";

export const metadata: Metadata = {
  title: "Volunteer & Internship in Nepal",
  description:
    "Volunteer or intern with SADP Nepal — organic farming, conservation, construction, senior citizens care, community development and a 6-week internship in Pokhara.",
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
              <span className="inline-block bg-brand-primary text-primary-foreground text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded mb-6">VOLUNTEER & INTERNSHIP</span>
              <h1 className="text-4xl md:text-6xl font-black text-brand-primary mb-6">
                Volunteer &<br />Internship<span className="text-brand-blushed-brick">.</span>
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
                  href="#options"
                  className="border-2 border-brand-primary text-brand-primary px-8 py-3.5 rounded-full text-sm font-bold hover:bg-brand-primary hover:text-white transition-all duration-200 text-center"
                >
                  Volunteering Options
                </a>
              </div>
            </div>
            <div className="relative h-[300px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src={HERO_IMAGE}
                alt="Volunteers working with villagers in Nepal"
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

      <section id="options" className="py-28">
        <div className="max-w-[1280px] mx-auto px-6 md:px-16">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <p className="text-sm font-bold uppercase tracking-widest text-brand-blushed-brick mb-4">Where You Can Help</p>
            <h2 className="text-5xl font-black text-brand-primary mb-6">
              Volunteering Options<span className="text-brand-blushed-brick">.</span>
            </h2>
            <p className="text-xl text-brand-on-surface-variant leading-relaxed">
              Pick one area or combine several. Tell us your choices in the application form and we will help shape your placement.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {VOLUNTEER_OPTIONS.map((opt) => {
              const body = (
                <>
                  <h3 className="text-xl font-bold text-brand-primary mb-2">{opt.label}</h3>
                  <p className="text-brand-on-surface-variant">{opt.desc}</p>
                </>
              );
              const cls = "block bg-white rounded-xl p-6 border border-brand-outline-variant";
              return opt.href ? (
                <Link key={opt.value} href={opt.href} className={`${cls} transition-colors duration-150 hover:border-brand-primary`}>
                  {body}
                  <span className="inline-flex items-center gap-1.5 mt-3 text-sm font-bold text-brand-primary">Learn more <ArrowRight className="size-4" /></span>
                </Link>
              ) : (
                <div key={opt.value} className={cls}>{body}</div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-28 bg-brand-surface-container-low">
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

      <section id="internship" className="py-28">
        <div className="max-w-[1280px] mx-auto px-6 md:px-16">
          <div className="max-w-4xl mx-auto mb-16">
            <span className="text-sm font-bold uppercase tracking-widest text-brand-blushed-brick block mb-2">Internship &amp; Training Programs</span>
            <p className="text-xl md:text-2xl text-brand-on-surface leading-relaxed">
              SADP Nepal offers hands-on training and a 6-week internship program in organic agriculture at Govardhan Organic Agriculture Resource Center (GOARC) and other farms.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-xl grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-100 mb-20">
            {[
              { value: "4/7/15 Days", label: "Training Programs" },
              { value: "6 Weeks", label: "Internship Duration" },
              { value: "US$1,500", label: "Internship Fee" },
              { value: "Pokhara", label: "Location" },
            ].map((item) => (
              <div key={item.label} className="p-8 text-center">
                <div className="text-3xl font-black text-brand-primary">{item.value}</div>
                <div className="text-sm font-bold uppercase tracking-widest text-brand-on-surface-variant mt-1">{item.label}</div>
              </div>
            ))}
          </div>
          <div className="max-w-4xl mx-auto">
            <span className="text-sm font-bold uppercase tracking-widest text-brand-blushed-brick block mb-2">Internship & Training</span>
            <h2 className="text-5xl font-black text-brand-primary mb-8">
              Training Programs<span className="text-brand-blushed-brick">.</span>
            </h2>
            <p className="text-xl text-brand-on-surface-variant leading-relaxed mb-6">
              SADP Nepal offers different levels of training programs in organic agriculture as per the interest groups.
              We organize 4 days, 7 days, and 15 days training programs at our training centre in Kaski district.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              {[
                { days: "4 Days", level: "Basic Training", desc: "All year round registration is open for our 4-day basic training program at our training centre." },
                { days: "7 Days", level: "Advanced Training", desc: "Deepen your knowledge with our advanced 7-day program covering complex organic farming techniques." },
                { days: "15 Days", level: "Training of Trainers (TOT)", desc: "Comprehensive TOT program for those who want to train others in organic agriculture practices." },
              ].map((p, i) => (
                <div key={i} className="bg-brand-surface-container rounded-2xl p-8 border border-brand-outline-variant">
                  <div className="text-3xl font-black text-brand-primary mb-2">{p.days}</div>
                  <h3 className="text-xl font-bold text-brand-primary mb-3">{p.level}</h3>
                  <p className="text-xl text-brand-on-surface-variant">{p.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-xl text-brand-on-surface-variant">
              Choose “Training” in the application form below, or email us, and we will contact you for further procedure.
            </p>
          </div>
        </div>
      </section>

      <section id="internship-program" className="py-28 bg-brand-surface-container-low">
        <div className="max-w-[1280px] mx-auto px-6 md:px-16">
          <div className="max-w-4xl mx-auto">
            <span className="text-sm font-bold uppercase tracking-widest text-brand-blushed-brick block mb-2">Internship</span>
            <h2 className="text-5xl font-black text-brand-primary mb-8">
              6-Week Organic Agriculture Internship<span className="text-brand-blushed-brick">.</span>
            </h2>
            <p className="text-xl text-brand-on-surface-variant leading-relaxed mb-8">
              SADP Nepal offers a 6-week internship program to individuals interested in getting hands-on experience
              in organic gardening including seed saving, and community living at Govardhan Organic Agriculture Resource
              Center (GOARC) and other farms around Pokhara.
            </p>
            <p className="text-xl text-brand-on-surface-variant leading-relaxed mb-12">
              The internship is a combination of organic gardening techniques such as composting and appropriate technology.
              Interns learn organic gardening techniques through hands-on projects, making compost, cultivating micro-organisms,
              and preparing liquid organic fertilizers (Panchagavya, Panchapatra, Fish extract, EM-2, etc.), vermicompost,
              and pile compost.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <div className="bg-brand-surface-container rounded-2xl p-6">
              <div className="w-10 h-10 bg-brand-primary/10 rounded-lg flex items-center justify-center mb-3"><Sprout className="size-5 text-brand-primary" /></div>
              <h3 className="text-xl font-bold text-brand-primary mb-2">Gardening Skills</h3>
              <p className="text-xl text-brand-on-surface-variant">Nursery seedlings, garden bed making, composting, liquid fertilizers, companion planting, pest management, seed saving.</p>
            </div>
            <div className="bg-brand-surface-container rounded-2xl p-6">
              <div className="w-10 h-10 bg-brand-primary/10 rounded-lg flex items-center justify-center mb-3"><Users className="size-5 text-brand-primary" /></div>
              <h3 className="text-xl font-bold text-brand-primary mb-2">Community Living</h3>
              <p className="text-xl text-brand-on-surface-variant">Experience community living in the Nepali context with weekly group check-ins and evening activities.</p>
            </div>
            <div className="bg-brand-surface-container rounded-2xl p-6">
              <div className="w-10 h-10 bg-brand-primary/10 rounded-lg flex items-center justify-center mb-3"><Tent className="size-5 text-brand-primary" /></div>
              <h3 className="text-xl font-bold text-brand-primary mb-2">Other Activities</h3>
              <p className="text-xl text-brand-on-surface-variant">Meditation, local wine making, hiking, Nepali food cooking, and cultural exchanges.</p>
            </div>
            <div className="bg-brand-surface-container rounded-2xl p-6">
              <div className="w-10 h-10 bg-brand-primary/10 rounded-lg flex items-center justify-center mb-3"><Sun className="size-5 text-brand-primary" /></div>
              <h3 className="text-xl font-bold text-brand-primary mb-2">General Schedule</h3>
              <p className="text-xl text-brand-on-surface-variant">Morning and afternoon sessions with extended break after lunch. Saturdays are for rest and town visits.</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 md:p-10 border border-brand-outline-variant">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-brand-primary mb-4">
                  Gardening Skills
                </h3>
                <ul className="space-y-3">
                  {[
                    "Introduction of Organic agriculture in Nepal",
                    "Making nursery seedlings and discussion of what plants need to start as seedlings",
                    "Garden bed making techniques for different seasons and situations",
                    "Double digging method",
                    "Composting including different uses of animal manure",
                    "Cultivating micro-organisms for making liquid fertilizers",
                    "Companion planting",
                    "Garden care including plant observation and problem solving",
                    "Integrated pest management",
                    "Making natural pesticides",
                    "Harvesting for consumption",
                    "Discussions on seed saving and seed biodiversity",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="size-5 text-brand-primary shrink-0 mt-0.5" />
                      <span className="text-brand-on-surface-variant">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold text-brand-primary mb-3 flex items-center gap-2">
                    <Users className="size-5" /> Community Living
                  </h3>
                  <p className="text-xl text-brand-on-surface-variant">
                    Evening activities and exchanges are included. A large aspect of the internship also includes the experience of community living in the Nepali context as interns become community members for the duration of their internship. Weekly group check-ins focus on this relationship.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brand-primary mb-3 flex items-center gap-2">
                    <Clock className="size-5" /> General Schedule
                  </h3>
                  <p className="text-xl text-brand-on-surface-variant">
                    Morning and afternoon sessions are held with an extended break after lunch. Evening and early afternoon discussion sessions are held periodically depending on interns&apos; interest. Every Saturday is break time to rest or explore the town.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brand-primary mb-3 flex items-center gap-2">
                    <GraduationCap className="size-5" /> Teaching Team
                  </h3>
                  <p className="text-xl text-brand-on-surface-variant">
                    Experienced and expert instructors will be involved in teaching.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brand-primary mb-3 flex items-center gap-2">
                    <UtensilsCrossed className="size-5" /> Food & Accommodation
                  </h3>
                  <p className="text-xl text-brand-on-surface-variant">
                    A thin cotton mat, blanket, sheet, pillow, and mosquito net are provided. Generally Nepali food is served using organic vegetables from the farm. Bathing options include an indoor cool shower.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-28 bg-brand-primary">
        <div className="max-w-[1280px] mx-auto px-6 md:px-16">
          <div className="max-w-2xl mx-auto text-center">
            <DollarSign className="size-10 text-brand-yellow-green mx-auto mb-4" />
            <h2 className="text-5xl font-black text-white mb-6">
              Fee & Registration
            </h2>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 mb-8">
              <div className="text-5xl font-black text-brand-yellow-green mb-2">US$1,500</div>
              <p className="text-xl text-white/80">per person for the 6-week internship program</p>
            </div>
            <div className="text-left space-y-4 bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <p className="text-xl text-white/90">
                Once you have sent your participant survey and have been confirmed, a <strong>US$150 non-refundable deposit</strong> is due to secure your spot.
              </p>
              <p className="text-xl text-white/90">
                The remainder of your contribution will be expected on the first day of the internship at SADP either in Nepali currency or US dollars.
              </p>
              <p className="text-xl text-white/90">
                For SADP Internship Participation, please fill in the application form below or send it by email to <a href="mailto:info@sadpnepal.org" className="text-brand-yellow-green font-bold underline">info@sadpnepal.org</a>.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="apply" className="py-28 bg-brand-surface-container">
        <div className="max-w-4xl mx-auto px-6 md:px-16">
          <p className="text-sm font-bold uppercase tracking-widest text-brand-blushed-brick mb-4 text-center">Get Involved</p>
          <h2 className="text-5xl font-black text-brand-primary mb-6 text-center">
            Apply for Volunteering or Internship
          </h2>
          <p className="text-center text-xl text-brand-on-surface-variant mb-12">
            One form for volunteers, interns and trainees. Apply via email at <a href="mailto:info@sadpnepal.org" className="text-brand-primary font-bold underline">info@sadpnepal.org</a> or fill the form below and we will get back to you.
          </p>
          <VolunteerForm />
        </div>
      </section>
    </>
  );
}
