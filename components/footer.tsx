import Link from "next/link";
import Image from "next/image";
import { Logo } from "@/components/logo";
import { FooterNewsletter } from "@/components/footer-newsletter";

const SOCIAL_LINKS = [
  { href: "https://www.facebook.com/organicag/", label: "Facebook", icon: "/icons/facebook.png" },
  { href: "https://www.linkedin.com/in/sadp-nepal-4b890418/", label: "LinkedIn", icon: "/icons/linkedin.png" },
  { href: "https://share.google/hcIt2737RTlDm495k", label: "Google Maps", icon: "/icons/google-maps.png" },
  { href: "mailto:info@sadpnepal.org", label: "Email", icon: "/icons/email.png" },
];

export function Footer() {
  return (
    <footer className="bg-brand-primary text-white">
      <div className="px-6 md:px-16 max-w-[1280px] mx-auto border-b border-white/10">
        <div className="py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-white">Stay Connected</h3>
            <p className="text-xl text-white/70 mt-1">Get updates on our programs and impact.</p>
          </div>
          <FooterNewsletter />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 px-6 md:px-16 py-16 max-w-[1280px] mx-auto">
        <div>
          <div className="flex items-center gap-3 mb-6">
            <Logo className="h-12 w-auto" />
            <span className="text-white font-bold text-lg leading-tight">
              SADP<br />Nepal
            </span>
          </div>
          <p className="text-base text-white/70 leading-relaxed max-w-xs mb-6">
            Pioneering sustainable agriculture and rural empowerment in the heart of the Himalayas since 2002.
          </p>
          <div className="flex gap-4">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-brand-yellow-green hover:border-brand-yellow-green transition-all duration-200 overflow-hidden"
              >
                <Image src={link.icon} alt={link.label} width={20} height={20} className="object-contain" />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-brand-yellow-green text-sm font-bold uppercase tracking-widest mb-6">Navigation</h4>
          <ul className="space-y-3">
            {[
              { href: "/", label: "Home" },
              { href: "/about", label: "About Us" },
              { href: "/our-work", label: "Our Work" },
              { href: "/volunteer", label: "Volunteer" },
              { href: "/internship", label: "Internships" },
              { href: "/projects/kgecp", label: "KGECP" },
              { href: "/gallery", label: "Gallery" },
              { href: "/news", label: "News" },
            ].map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-base text-white/80 hover:text-brand-yellow-green transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-brand-yellow-green text-sm font-bold uppercase tracking-widest mb-6">Support</h4>
          <ul className="space-y-3">
            <li><Link href="/donate" className="text-base text-white/80 hover:text-brand-yellow-green transition-colors">Donate</Link></li>
            <li><Link href="/volunteer" className="text-base text-white/80 hover:text-brand-yellow-green transition-colors">Volunteer</Link></li>
            <li><Link href="/news" className="text-base text-white/80 hover:text-brand-yellow-green transition-colors">News</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-brand-yellow-green text-sm font-bold uppercase tracking-widest mb-6">Contact</h4>
          <div className="space-y-4">
            <p className="text-base text-white/80">
              106 Nityananda Marg, Batulechour, Pokhara-16, Nepal
            </p>
            <p className="text-base text-white/80">
              info@sadpnepal.org<br />  061444422
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-[1280px] mx-auto px-6 md:px-16 py-6 border-t border-white/10 text-center text-sm text-white/50">
        &copy; {new Date().getFullYear()} Sustainable Agriculture Development Program (SADP) Nepal. All rights reserved.
      </div>
    </footer>
  );
}
