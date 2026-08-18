import Link from "next/link";
import Image from "next/image";
import { Sprout, BookOpen, Brain, Users } from "lucide-react";
import { SPIRITUAL_PHOTOS } from "@/lib/photos";

export const metadata = {
  title: "Spiritual Volunteering",
  description: "Spiritual volunteering in Nepal — engage with monasteries, yoga retreats, meditation programs, and community service.",
};

const HERO_BG = SPIRITUAL_PHOTOS[7];
const inlinePhotos = SPIRITUAL_PHOTOS.slice(1, 4);

export default function SpiritualVolunteerPage() {
  return (
    <>
      <section className="relative min-h-[50vh] overflow-hidden bg-brand-bg">
        <div className="max-w-[1280px] mx-auto px-6 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 min-h-[50vh] items-center">
            <div className="py-16 md:py-24">
              <span className="inline-block bg-brand-primary text-primary-foreground text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded mb-6">VOLUNTEER</span>
              <h1 className="text-4xl md:text-6xl font-black text-brand-primary mb-6">
                Spiritual<br />Volunteering<span className="text-brand-blushed-brick">.</span>
              </h1>
              <p className="text-xl md:text-2xl text-brand-on-surface-variant max-w-lg mb-8 leading-relaxed">
                Nepal is the land of the mystically sacred Himalayas, unexplored and untouched. It is not only a destination for trekkers and adventure seekers but also a sacred realm for seekers of inner peace. Spiritual volunteering in Nepal is a lifetime opportunity as it is the melting pot of Hinduism and Buddhism.
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
                alt="Spiritual volunteering in Nepal"
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
              Both the ancient principles that define spiritual lifestyle rather than religions, modern Nepal being an integral hub to these highly revered divine ideologies caters eye-opening spiritual trips. Our Spiritual Volunteering Programs allow travelers opportunities for self-discovery, while contributing to local communities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-brand-surface-container rounded-2xl p-8 border border-brand-outline-variant">
              <div className="w-12 h-12 bg-brand-primary rounded-xl flex items-center justify-center mb-4">
                <BookOpen className="size-6 text-brand-yellow-green" />
              </div>
              <h3 className="text-xl font-bold text-brand-primary mb-3">Sacred Heritage</h3>
              <p className="text-xl text-brand-on-surface-variant">Home to Lumbini, the birthplace of Lord Buddha as well as esteemed Pashupatinath Temple and countless monasteries and temples.</p>
            </div>
            <div className="bg-brand-surface-container rounded-2xl p-8 border border-brand-outline-variant">
              <div className="w-12 h-12 bg-brand-primary rounded-xl flex items-center justify-center mb-4">
                <Users className="size-6 text-brand-yellow-green" />
              </div>
              <h3 className="text-xl font-bold text-brand-primary mb-3">Authentic Experiences</h3>
              <p className="text-xl text-brand-on-surface-variant">Engage with monks in monasteries and sadhus in the temples, spiritual teachers, and local communities in daily practices.</p>
            </div>
            <div className="bg-brand-surface-container rounded-2xl p-8 border border-brand-outline-variant">
              <div className="w-12 h-12 bg-brand-primary rounded-xl flex items-center justify-center mb-4">
                <Sprout className="size-6 text-brand-yellow-green" />
              </div>
              <h3 className="text-xl font-bold text-brand-primary mb-3">Natural Serenity</h3>
              <p className="text-xl text-brand-on-surface-variant">The Himalayas offer a peaceful backdrop for meditation, yoga, and reflection.</p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-black text-brand-primary mb-8 text-center">
              Types of Spiritual Volunteering<span className="text-brand-blushed-brick">.</span>
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 border border-brand-outline-variant">
                <h3 className="text-xl font-bold text-brand-primary mb-2">Monastery/Temple Volunteering</h3>
                <p className="text-xl text-brand-on-surface-variant">Teach English to young monks, participate in chanting, and learn Buddhist philosophy. Experience Hindu rites and culture firsthand and meet sadhus and saints to listen to their spiritual journeys and preachings.</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-brand-outline-variant">
                <h3 className="text-xl font-bold text-brand-primary mb-2">Yoga Retreats</h3>
                <p className="text-xl text-brand-on-surface-variant">Support yoga centers by assisting with classes, organizing events, or helping with community outreach.</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-brand-outline-variant">
                <h3 className="text-xl font-bold text-brand-primary mb-2">Meditation Programs</h3>
                <p className="text-xl text-brand-on-surface-variant">Volunteer at meditation centers, guiding participants or helping with daily operations.</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-brand-outline-variant">
                <h3 className="text-xl font-bold text-brand-primary mb-2">Community Service</h3>
                <p className="text-xl text-brand-on-surface-variant">Work with local NGOs that integrate spiritual practices into social development.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-28 bg-brand-primary">
        <div className="max-w-[1280px] mx-auto px-6 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {inlinePhotos.map((photo, i) => (
              <div key={i} className="rounded-2xl overflow-hidden aspect-[4/3] relative">
                <Image src={photo} alt="Spiritual Nepal" fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28">
        <div className="px-6 md:px-16 max-w-[1280px] mx-auto">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-5xl font-black text-brand-primary mb-8">
              Benefits of Spiritual Volunteering<span className="text-brand-blushed-brick">.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-14 h-14 bg-brand-primary/10 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Brain className="size-7 text-brand-primary" />
              </div>
              <h3 className="text-xl font-bold text-brand-primary mb-3">Personal Growth</h3>
              <p className="text-xl text-brand-on-surface-variant">Deepen your mindfulness and self-awareness.</p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 bg-brand-primary/10 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Users className="size-7 text-brand-primary" />
              </div>
              <h3 className="text-xl font-bold text-brand-primary mb-3">Cultural Immersion</h3>
              <p className="text-xl text-brand-on-surface-variant">Experience Nepalese traditions, festivals, and rituals firsthand.</p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 bg-brand-primary/10 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Sprout className="size-7 text-brand-primary" />
              </div>
              <h3 className="text-xl font-bold text-brand-primary mb-3">Meaningful Impact</h3>
              <p className="text-xl text-brand-on-surface-variant">Support education, community development, and preservation of spiritual heritage.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-28 bg-brand-surface-container-low">
        <div className="px-6 md:px-16 max-w-[1280px] mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xl text-brand-on-surface leading-relaxed italic">
              &ldquo;Spiritual volunteering in Nepal is more than just a journey — it&apos;s a transformation. By serving others in sacred spaces, you nurture both the community and your own soul. Whether teaching monks, assisting at yoga retreats, or supporting meditation centers, Nepal offers a profound path to balance service and spirituality.&rdquo;
            </p>
          </div>
        </div>
      </section>

      <section id="get-involved" className="py-28 px-6 md:px-16">
        <div className="bg-brand-yellow-green rounded-xl p-12 md:p-24 text-center max-w-[1280px] mx-auto relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-5xl font-black text-brand-primary mb-8">Begin Your Spiritual Journey<span className="text-brand-blushed-brick">.</span></h2>
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
