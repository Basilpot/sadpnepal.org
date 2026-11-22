import Link from "next/link";
import Image from "next/image";
import { HandHeart, MessageCircle, CalendarHeart, Home } from "lucide-react";
import { PEOPLE_PHOTOS } from "@/lib/photos";

export const metadata = {
  title: "Senior Citizens Care Volunteering",
  description:
    "Volunteer with SADP Nepal in senior citizens care — companionship, daily support and community events for elderly people in rural Nepal.",
};

const HERO_BG = PEOPLE_PHOTOS[3];

const activities = [
  { icon: HandHeart, title: "Daily Support", body: "Assist elderly people with everyday needs such as household tasks, meals and getting around." },
  { icon: MessageCircle, title: "Companionship", body: "Spend time listening, sharing stories and learning from the life experience of elders in the community." },
  { icon: CalendarHeart, title: "Community Events", body: "Help organize gatherings and activities that bring elders together and reduce isolation." },
  { icon: Home, title: "Village Life", body: "Live and eat with local families, and see how older generations hold farming and cultural knowledge." },
];

export default function SeniorCitizensCarePage() {
  return (
    <>
      <section className="relative min-h-[50vh] overflow-hidden bg-brand-bg">
        <div className="max-w-[1280px] mx-auto px-6 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 min-h-[50vh] items-center">
            <div className="py-16 md:py-24">
              <span className="inline-block bg-brand-primary text-primary-foreground text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded mb-6">VOLUNTEER</span>
              <h1 className="text-4xl md:text-6xl font-black text-brand-primary mb-6">
                Senior Citizens<br />Care<span className="text-brand-blushed-brick">.</span>
              </h1>
              <p className="text-xl md:text-2xl text-brand-on-surface-variant max-w-lg mb-8 leading-relaxed">
                Support elderly people in rural Nepal with daily needs, companionship and community events — and strengthen the bonds between generations.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/volunteer#apply"
                  className="bg-brand-primary text-white px-8 py-3.5 rounded-full text-sm font-bold shadow-sm hover:bg-brand-primary/90 transition-all duration-200 text-center"
                >
                  Apply Now
                </Link>
                <Link
                  href="/volunteer"
                  className="border-2 border-brand-primary text-brand-primary px-8 py-3.5 rounded-full text-sm font-bold hover:bg-brand-primary hover:text-white transition-all duration-200 text-center"
                >
                  All Volunteer Programs
                </Link>
              </div>
            </div>
            <div className="relative h-[300px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <Image src={HERO_BG} alt="Elderly woman smiling in a Nepali village" fill priority className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-28">
        <div className="px-6 md:px-16 max-w-[1280px] mx-auto">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <p className="text-sm font-bold uppercase tracking-widest text-brand-blushed-brick mb-4">What You Will Do</p>
            <h2 className="text-5xl font-black text-brand-primary mb-6">
              Care and Companionship<span className="text-brand-blushed-brick">.</span>
            </h2>
            <p className="text-xl text-brand-on-surface-variant leading-relaxed">
              Many elderly people in rural Nepal live far from health services and, as younger family members move away, with less company. Volunteers help ensure older community members feel valued and supported.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {activities.map(({ icon: Icon, title, body }) => (
              <div key={title} className="bg-brand-surface-container rounded-2xl p-8 md:p-10 border border-brand-outline-variant">
                <div className="w-12 h-12 bg-brand-primary rounded-xl flex items-center justify-center mb-4">
                  <Icon className="size-6 text-brand-yellow-green" />
                </div>
                <h3 className="text-2xl font-bold text-brand-primary mb-3">{title}</h3>
                <p className="text-xl text-brand-on-surface-variant">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 px-6 md:px-16">
        <div className="bg-brand-yellow-green rounded-xl p-12 md:p-24 text-center max-w-[1280px] mx-auto relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-5xl font-black text-brand-primary mb-8">Volunteer in Senior Care<span className="text-brand-blushed-brick">.</span></h2>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link href="/volunteer#apply" className="bg-white text-brand-primary px-8 py-3.5 text-sm font-bold rounded-full shadow-sm hover:bg-white/90 transition-all duration-200">
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
