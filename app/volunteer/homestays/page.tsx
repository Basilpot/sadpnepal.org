import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Homestays",
  description: "Stay at SADP Nepal partner homestays in Pokhara — authentic Nepali culture, organic food, and eco-friendly hospitality in the hills of Kaski.",
};

const homestays = [
  {
    title: "Armala Kot",
    image: "/photos/armalakot.webp",
    alt: "View of Armala Kot village in the hills of Pokhara",
    body: [
      "Perched gracefully in the serene hills of Pokhara Metropolis 16, Armalakot is a charming village in Kaski, Gandaki Pradesh, rising to an elevation of 1,477 metres (4,846 feet). Surrounded by peaceful neighborhoods such as Rahul Danda and Bisauna, and enriched by nearby natural wonders like the Bat Cave home to Horseshoe bats just 3.5 km west, Armalakot embodies the harmony of nature and community. Its location offers a rare blend of tranquility and adventure, with easy access to Sarangkot's world-famous sunrise views over the Annapurna range and the vibrant cultural life of Pokhara city with its iconic Fewa Lake.",
      "This idyllic setting mirrors SADP Nepal's mission of sustainable development where rural beauty is preserved, eco-tourism flourishes, and local livelihoods thrive. By showcasing destinations like Armalakot, SADP Nepal invites visitors and residents alike to celebrate natural heritage, strengthen cultural bonds, and build a future rooted in environmental balance, resilience, and prosperity.",
    ],
  },
  {
    title: "Mountain View Eco Farm (MVEF)",
    image: "/photos/mvef.webp",
    alt: "Mountain View Eco Farm overlooking the Himalayas and Begnas Lake",
    body: [
      "High above the valleys of Pokhara, where the Himalayas rise in dazzling relief and Begnas Lake shimmers in the distance, the Mountain View Eco Farm embodies the spirit of sustainable living in Nepal. Life here flows with the rhythm of nature: early mornings filled with birdsong, days spent tending organic fields, crafting with bamboo, and sharing meals that celebrate local harvests. More than a farm, it is a community where volunteers and families work side by side, blending traditional wisdom with modern eco-practices. This harmony of landscape, livelihood, and learning reflects SADP Nepal's vision: to nurture environments that are not only productive but deeply connected to culture, resilience, and the joy of living close to nature.",
    ],
  },
  {
    title: "Dada Gau Cottage",
    image: "/photos/dadagau1.webp",
    alt: "Dada Gau Cottage hilltop restaurant with Himalayan views",
    body: [
      "Tucked away in Bhalam-20, Pokhara, Dada Gau Cottage is a scenic retreat and restaurant that offers sweeping views of the Himalayan range and the Pokhara valley. Guests can enjoy a peaceful hill-top atmosphere, cozy seating, and a family-friendly environment ideal for hangouts, small gatherings, or quiet getaways. The cottage is known for its organic, traditional Nepali dishes, complemented by a variety of Indian and Chinese cuisines, making it a delightful culinary stop. With its tranquil setting and panoramic vistas, Dada Gau Cottage reflects SADP Nepal's vision of promoting eco-friendly tourism, local culture, and sustainable hospitality in the heart of nature.",
    ],
  },
  {
    title: "Rinje Homestay",
    image: "/photos/rinje5.webp",
    alt: "Traditional Gurung houses of Rinje Homestay overlooking Pokhara City",
    body: [
      "Rinje Nasa is a beautifully located Gurung Village rural in Pokhara Valley. It lies on the foot of Machhapuchhre Mountain atop of Hill overlooking stunning Pokhara City. Yet so close to Pokhara and it has remained pure and unexplored. The cluster of traditional Nepalese houses, Rinje Homestays can cater services to up to 50 travelers at a time. The homestay offers organic food, authentic Nepalese drinks and real Gurung culture at its best. It offers the opportunities to participate in traditional Nepali farming as well as brief and easy adventurous activities like hiking.",
    ],
  },
];

export default function HomestaysPage() {
  return (
    <>
      <section className="relative min-h-[50vh] overflow-hidden bg-brand-bg">
        <div className="max-w-[1280px] mx-auto px-6 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 min-h-[50vh] items-center">
            <div className="py-16 md:py-24">
              <span className="inline-block bg-brand-primary text-primary-foreground text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded mb-6">VOLUNTEER</span>
              <h1 className="text-4xl md:text-6xl font-black text-brand-primary mb-6">
                Home<br />stays<span className="text-brand-blushed-brick">.</span>
              </h1>
              <p className="text-xl md:text-2xl text-brand-on-surface-variant max-w-lg mb-8 leading-relaxed">
                Stay with SADP Nepal partner homestays around Pokhara — authentic Nepali and Gurung culture, organic food, and eco-friendly hospitality set against the hills, valleys, and Himalayan views of Kaski.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="#homestays"
                  className="bg-brand-primary text-white px-8 py-3.5 rounded-full text-sm font-bold shadow-sm hover:bg-brand-primary/90 transition-all duration-200 text-center"
                >
                  Explore Homestays
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
                src="/photos/horrc.webp"
                alt="Homestay hospitality in rural Pokhara"
                className="w-full h-full object-cover scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      <section id="homestays" className="py-28">
        <div className="px-6 md:px-16 max-w-[1280px] mx-auto">
          <p className="text-sm font-bold uppercase tracking-widest text-brand-blushed-brick mb-4">Where to Stay</p>
          <h2 className="text-5xl font-black text-brand-primary mb-6">
            Our Destinations<span className="text-brand-blushed-brick">.</span>
          </h2>
          <p className="text-xl text-brand-on-surface-variant leading-relaxed max-w-3xl mb-16">
            Each homestay is a base for cultural exchange and eco-tourism — volunteers and visitors live alongside local families, eat organic food grown on site, and experience the landscape, tradition, and hospitality that define sustainable development in the Pokhara region.
          </p>

          <div className="space-y-24">
            {homestays.map((h, i) => (
              <article key={h.title}>
                <h3 className="text-3xl md:text-4xl font-black text-brand-primary mb-10">
                  {i + 1}. {h.title}
                </h3>
                <div className="relative h-[45vh] md:h-[60vh] rounded-3xl overflow-hidden shadow-xl mb-10">
                  <Image src={h.image} alt={h.alt} fill className="object-cover" />
                </div>
                <div className="space-y-4">
                  {h.body.map((p, j) => (
                    <p key={j} className="text-lg md:text-xl text-brand-on-surface-variant leading-relaxed md:text-justify">
                      {p}
                    </p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 px-6 md:px-16">
        <div className="bg-brand-yellow-green rounded-xl p-12 md:p-24 text-center max-w-[1280px] mx-auto relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-5xl font-black text-brand-primary mb-8">Stay With Us in Nepal<span className="text-brand-blushed-brick">.</span></h2>
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
