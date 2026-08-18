import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Check, Sprout, Users, Tent, Sun, Clock, UtensilsCrossed, GraduationCap, DollarSign } from "lucide-react";
import { FARMING_PHOTOS } from "@/lib/photos";
import { InternshipForm } from "@/components/internship-form";

export const metadata: Metadata = {
  title: "Internship & Training Programs",
  description:
    "Hands-on training and a 6-week internship in organic agriculture at GOARC, Pokhara. Learn composting, seed saving, and regenerative farming with SADP Nepal.",
};

const HERO_IMAGE = FARMING_PHOTOS[12];

export default function InternshipPage() {
  return (
    <>
      <section className="relative min-h-[50vh] overflow-hidden bg-brand-bg">
        <div className="max-w-[1280px] mx-auto px-6 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 min-h-[50vh] items-center">
            <div className="py-16 md:py-24">
              <span className="inline-block bg-brand-primary text-primary-foreground text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded mb-6">INTERNSHIP & TRAINING</span>
              <h1 className="text-4xl md:text-6xl font-black text-brand-primary mb-6">
                Internship &<br />Training Programs<span className="text-brand-blushed-brick">.</span>
              </h1>
              <p className="text-xl md:text-2xl text-brand-on-surface-variant max-w-lg mb-8 leading-relaxed">
                SADP Nepal offers hands-on training and a 6-week internship program in organic agriculture
                at Govardhan Organic Agriculture Resource Center (GOARC) and other farms.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="#apply"
                  className="bg-brand-primary text-white px-8 py-3.5 rounded-full text-sm font-bold shadow-sm hover:bg-brand-primary/90 transition-all duration-200 text-center"
                >
                  Apply Now
                </a>
                <Link
                  href="/volunteer"
                  className="border-2 border-brand-primary text-brand-primary px-8 py-3.5 rounded-full text-sm font-bold hover:bg-brand-primary hover:text-white transition-all duration-200 text-center"
                >
                  View Volunteer Program
                </Link>
              </div>
            </div>
            <div className="relative h-[300px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src={HERO_IMAGE}
                alt="Internship program at organic farm in Pokhara"
                fill
                className="object-cover scale-110"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-[1280px] mx-auto px-6 md:px-16 -mt-16 relative z-20">
        <div className="bg-white rounded-xl shadow-xl grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-100">
          {[
            { value: "4/7/15 Days", label: "Training Programs" },
            { value: "6 Weeks", label: "Internship Duration" },
            { value: "US$1,500", label: "Internship Fee" },
            { value: "Pokhara", label: "Location" },
          ].map((item) => (
            <div key={item.label} className="p-8 text-center">
              <div className="text-3xl font-black text-brand-primary">
                {item.value}
              </div>
              <div className="text-sm font-bold uppercase tracking-widest text-brand-on-surface-variant mt-1">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-28">
        <div className="max-w-[1280px] mx-auto px-6 md:px-16">
          <div className="max-w-4xl mx-auto">
            <span className="text-sm font-bold uppercase tracking-widest text-brand-blushed-brick block mb-2">Training Programs</span>
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
              Please send us an email about your interest in the training program and we will contact you for further procedure.
            </p>
          </div>
        </div>
      </section>

      <section className="py-28 bg-brand-surface-container-low">
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
                For SADP Internship Participation, please fill up the Internship form and send by email to <a href="mailto:info@sadpnepal.org" className="text-brand-yellow-green font-bold underline">info@sadpnepal.org</a>.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="apply" className="py-28">
        <div className="max-w-[1280px] mx-auto px-6 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <span className="text-sm font-bold uppercase tracking-widest text-brand-blushed-brick block mb-2">Apply</span>
              <h2 className="text-5xl font-black text-brand-primary mb-6">
                Apply for Training or Internship<span className="text-brand-blushed-brick">.</span>
              </h2>
              <p className="text-xl text-brand-on-surface-variant mb-6">
                Register for our training programs or internship. Registration form is open all year round.
                Send us an email about your interest and we will contact you for further procedure.
              </p>
              <div className="bg-brand-surface-container rounded-xl p-6">
                <h3 className="text-xl font-bold text-brand-primary mb-3">Contact</h3>
                <p className="text-xl text-brand-on-surface-variant">
                  Email: <a href="mailto:info@sadpnepal.org" className="text-brand-primary font-bold underline">info@sadpnepal.org</a>
                </p>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-brand-outline-variant">
              <h3 className="text-2xl font-bold text-brand-primary mb-6">
                Send Your Application
              </h3>
              <InternshipForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
