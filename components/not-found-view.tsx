import Link from "next/link";
import Image from "next/image";
import { FARMING_PHOTOS } from "@/lib/photos";

const HERO_BG = FARMING_PHOTOS[37];

export function NotFoundView() {
  return (
    <section className="relative min-h-[80vh] overflow-hidden bg-brand-bg">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[220px] md:text-[400px] font-black text-brand-yellow-green/15 select-none pointer-events-none whitespace-nowrap leading-none">
        404
      </div>
      <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-16 min-h-[80vh] flex flex-col justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="py-16 md:py-24">
            <h1 className="text-4xl md:text-6xl font-black text-brand-primary mb-6">
              Page Not<br />Found<span className="text-brand-blushed-brick">.</span>
            </h1>
            <p className="text-xl md:text-2xl text-brand-on-surface-variant max-w-lg mb-8 leading-relaxed">
              Looks like this path hasn&apos;t been cultivated yet. Let&apos;s get you back on track.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/"
                className="bg-brand-primary text-brand-on-primary px-8 py-3.5 rounded-full text-sm font-bold shadow-sm transition-colors duration-150 hover:bg-brand-primary/90 text-center"
              >
                Back to Home
              </Link>
              <Link
                href="/volunteer"
                className="border-2 border-brand-primary text-brand-primary px-8 py-3.5 rounded-full text-sm font-bold transition-colors duration-150 hover:bg-brand-primary hover:text-brand-on-primary text-center"
              >
                See Programs
              </Link>
            </div>
            <p className="text-xl text-brand-outline mt-4">
              The page you&apos;re looking for doesn&apos;t exist or has been moved.
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
      </div>
    </section>
  );
}