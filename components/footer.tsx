import Link from "next/link";
import { Globe, Mail, Share2 } from "lucide-react";
import { Logo } from "@/components/logo";
import { FooterNewsletter } from "@/components/footer-newsletter";

const SOCIAL_LINKS = [
  { href: "https://www.facebook.com/organicag/", label: "Facebook", icon: Globe },
  { href: "https://www.linkedin.com/in/sadp-nepal-4b890418/", label: "LinkedIn", icon: Share2 },
  { href: "https://share.google/hcIt2737RTlDm495k", label: "Google", icon: Globe },
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
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-6 md:px-16 py-20 max-w-[1280px] mx-auto">
        <div>
          <div className="flex items-center gap-3 mb-6">
            <Logo className="h-12 w-auto" />
            <span className="text-white font-bold text-lg leading-tight">
              SADP<br />Nepal
            </span>
          </div>
          <p className="text-xl text-white/70 leading-relaxed max-w-xs">
            Pioneering sustainable agriculture and rural empowerment in the heart of the Himalayas since 2002.
          </p>
          <div className="flex gap-4 mt-6">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-brand-yellow-green hover:text-brand-primary transition-colors"
              >
                <link.icon className="size-4" />
              </a>
            ))}
            <a
              href="mailto:info@sadpnepal.org"
              aria-label="Email us"
              className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-brand-yellow-green hover:text-brand-primary transition-colors"
            >
              <Mail className="size-4" />
            </a>
          </div>
        </div>
        <div>
          <h4 className="text-brand-yellow-green text-sm font-bold uppercase tracking-widest mb-6">Navigation</h4>
          <ul className="space-y-3 text-sm text-white/80">
            <li><Link href="/" className="hover:text-brand-yellow-green transition-colors">Home</Link></li>
            <li><Link href="/about" className="hover:text-brand-yellow-green transition-colors">About Us</Link></li>
            <li><Link href="/our-work" className="hover:text-brand-yellow-green transition-colors">Our Work</Link></li>
            <li><Link href="/volunteer" className="hover:text-brand-yellow-green transition-colors">Volunteer</Link></li>
            <li><Link href="/internship" className="hover:text-brand-yellow-green transition-colors">Internships</Link></li>
            <li><Link href="/projects/kgecp" className="hover:text-brand-yellow-green transition-colors">KGECP</Link></li>
            <li><Link href="/gallery" className="hover:text-brand-yellow-green transition-colors">Gallery</Link></li>
            <li><Link href="/news" className="hover:text-brand-yellow-green transition-colors">News</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-brand-yellow-green text-sm font-bold uppercase tracking-widest mb-6">Support</h4>
          <ul className="space-y-3 text-sm text-white/80">
            <li><Link href="/donate" className="hover:text-brand-yellow-green transition-colors">Donate</Link></li>
            <li><a href="#" className="hover:text-brand-yellow-green transition-colors">Partnerships</a></li>
            <li><Link href="/news" className="hover:text-brand-yellow-green transition-colors">News</Link></li>
            <li><a href="#" className="hover:text-brand-yellow-green transition-colors">Privacy Policy</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-brand-yellow-green text-sm font-bold uppercase tracking-widest mb-6">Contact</h4>
          <p className="text-xl text-white/80 mb-4">
            Pokhara-15, Nayagau,<br />Kaski, Nepal
          </p>
          <p className="text-xl text-white/80">
            info@sadpnepal.org<br />+977-61-432243
          </p>
        </div>
      </div>
      <div className="max-w-[1280px] mx-auto px-6 md:px-16 py-6 border-t border-white/10 text-center text-sm text-white/50">
        &copy; {new Date().getFullYear()} Sustainable Agriculture Development Program (SADP) Nepal. All rights reserved.
      </div>
    </footer>
  );
}
