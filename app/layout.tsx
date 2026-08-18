import type { Metadata } from "next";
import { Gabarito, Montserrat } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

const gabarito = Gabarito({
  subsets: ["latin"],
  variable: "--font-gabarito",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "SADP Nepal | Sustainable Agriculture Development Program",
    template: "%s | SADP Nepal",
  },
  description:
    "Empowering rural communities through ecological farming, climate resilience, and food sovereignty in Nepal since 2002.",
  openGraph: {
    title: "SADP Nepal | Sustainable Agriculture Development Program",
    description:
      "Empowering rural communities through ecological farming, climate resilience, and food sovereignty in Nepal.",
    type: "website",
    locale: "en_US",
    siteName: "SADP Nepal",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${gabarito.variable} ${montserrat.variable}`}>
      <head>
        <script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer />
      </head>
      <body className="min-h-screen flex flex-col">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:bg-white focus:px-4 focus:py-2 focus:text-brand-primary focus:font-bold"
        >
          Skip to content
        </a>
        <Nav />
        <main id="main-content" className="flex-1 pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
