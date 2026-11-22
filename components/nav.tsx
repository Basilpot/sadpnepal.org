"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Heart, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Logo } from "@/components/logo";

const links = [
  { href: "/about", label: "About Us" },
  { href: "/our-work", label: "Our Work" },
  {
    href: "/volunteer",
    label: "Volunteer",
    children: [
      { href: "/volunteer", label: "Volunteer & Internship" },
      { href: "/volunteer/regenerative-farming", label: "Regenerative Farming" },
      { href: "/volunteer/conservation", label: "Conservation" },
      { href: "/volunteer/construction", label: "Construction" },
      { href: "/volunteer/spiritual", label: "Spiritual" },
      { href: "/volunteer/student-groups", label: "Student Groups" },
      { href: "/volunteer/senior-citizens-care", label: "Senior Citizens Care" },
    ],
  },
  {
    href: "/horrc",
    label: "Projects",
    children: [
      { href: "/horrc", label: "HORRC" },
      { href: "/cultural-farmstays", label: "Cultural Farmstays" },
      { href: "/projects/kgecp", label: "KGECP" },
    ],
  },
  { href: "/gallery", label: "Gallery" },
  { href: "/blog", label: "Blog" },
];

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const isActive = (l: { href: string; children?: { href: string }[] }) =>
    l.children
      ? l.children.some((c) => pathname.startsWith(c.href) && c.href !== "/volunteer") ||
        (l.href === "/volunteer" && pathname.startsWith("/volunteer"))
      : pathname.startsWith(l.href);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-brand-bg/95 backdrop-blur-md">
      <nav className="flex justify-between items-center w-full px-6 md:px-16 py-4 gap-10 max-w-[1280px] mx-auto">
        <Link href="/" aria-label="SADP Nepal — Home" className="shrink-0 flex items-center gap-3">
          <Logo className="h-10 w-auto" />
          <span className="text-brand-primary font-bold text-sm leading-tight">
            SADP<br />Nepal
          </span>
        </Link>
        <div className="hidden lg:flex items-center gap-8 xl:gap-10">
          {links.map((l) => {
            if (l.children) {
              return (
                <div
                  key={l.href}
                  className="relative"
                  onMouseEnter={() => setOpenMenu(l.href)}
                  onMouseLeave={() => setOpenMenu(null)}
                >
                  <button
                    className={`text-sm font-bold uppercase tracking-wider transition-colors flex items-center gap-1.5 ${
                      isActive(l)
                        ? "text-brand-primary border-b-2 border-brand-blushed-brick pb-1"
                        : "text-brand-on-surface hover:text-brand-blushed-brick"
                    }`}
                    aria-expanded={openMenu === l.href}
                    aria-haspopup="true"
                    onKeyDown={(e) => {
                      if (e.key === "Escape") setOpenMenu(null);
                    }}
                  >
                    {l.label}
                    <ChevronDown className={`size-3 transition-transform ${openMenu === l.href ? "rotate-180" : ""}`} />
                  </button>
                  {openMenu === l.href && (
                    <div className="absolute top-full left-0 pt-2 min-w-[200px] z-50">
                      <div className="bg-white rounded-xl shadow-xl border border-brand-outline-variant py-2">
                        {l.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className={`block px-4 py-2 text-sm transition-colors ${
                              pathname === child.href
                                ? "text-brand-primary bg-brand-yellow-green/10 font-bold"
                                : "text-brand-on-surface-variant hover:bg-brand-surface-container-low"
                            }`}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            }
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`text-sm font-bold uppercase tracking-wider transition-colors ${
                  isActive(l)
                    ? "text-brand-primary border-b-2 border-brand-blushed-brick pb-1"
                    : "text-brand-on-surface hover:text-brand-blushed-brick"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </div>
        <Link
          href="/donate"
          className="hidden lg:inline-flex items-center gap-2 bg-brand-primary text-white px-8 py-3.5 rounded-full text-sm font-bold shadow-sm hover:bg-brand-primary/90 transition-all duration-200"
        >
          <Heart className="size-4 fill-current" />
          Donate
        </Link>
        <button
          className="lg:hidden text-brand-primary"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </nav>
      {open && (
        <div className="lg:hidden bg-brand-bg border-t border-brand-outline-variant px-6 py-6 pb-8">
          <div className="flex flex-col gap-4">
            {links.map((l) => {
              if (l.children) {
                return (
                  <div key={l.href}>
                    <Link
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className={`text-sm font-bold uppercase tracking-wider ${
                        isActive(l) ? "text-brand-primary" : "text-brand-on-surface"
                      }`}
                    >
                      {l.label}
                    </Link>
                    <div className="ml-4 mt-2 flex flex-col gap-2">
                      {l.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setOpen(false)}
                          className={`text-xs ${
                            pathname === child.href ? "text-brand-primary font-bold" : "text-brand-on-surface-variant"
                          }`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={`text-sm font-bold uppercase tracking-wider ${
                    isActive(l) ? "text-brand-primary" : "text-brand-on-surface"
                  }`}
                >
                  {l.label}
                </Link>
              );
            })}
            <Link
              href="/donate"
              onClick={() => setOpen(false)}
              className="bg-primary text-primary-foreground px-8 py-3.5 rounded-full text-sm font-bold shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 text-center mt-2"
            >
              Donate Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
