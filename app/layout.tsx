import type { Metadata } from "next";
import { Livvic, Montserrat } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

// Livvic has no variable axis on Google Fonts, so weights are listed explicitly.
// This is the exact set the site uses: 400 base, 500 medium, 700 bold, 900 black.
const livvic = Livvic({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-livvic",
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

// Google Tag Manager container. The GTM tag inside the container is what
// loads Google Analytics, so no GA measurement ID belongs here.
const GTM_ID = "GTM-TB4JLVNZ";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${livvic.variable} ${montserrat.variable}`}>
      <head>
        <script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());`,
          }}
        />
        <script async src={`https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`} />
      </head>
      <body className="min-h-screen flex flex-col">
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            title="Google Tag Manager"
          />
        </noscript>
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
