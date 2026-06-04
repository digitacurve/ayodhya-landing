import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ayodhya Tour Package with Hotel & Darshan | Varanasi Prayagraj Circuits | Starting ₹22,000 for Couple",
  description:
    "Looking for the best Ayodhya tour package? We include Ram Mandir darshan pass, 3★/4★ hotel, airport pickup, AC transport and an expert guide — all starting at ₹22,000 for a couple. Choose from Ayodhya Varanasi, Ayodhya Prayagraj Varanasi, same-day tours, or the full Ramayana Circuit. Trusted by 50,000+ pilgrims. Book on WhatsApp in 2 minutes.",
  keywords: [
    "Ayodhya tour packages",
    "Ayodhya trip package",
    "Ayodhya tour with Varanasi",
    "Ayodhya Prayagraj Varanasi package",
    "Ayodhya temple tour",
    "Ayodhya travel package",
    "Ayodhya Prayagraj tour package",
    "Ayodhya darshan tour",
    "Ayodhya Varanasi tour package 3 days",
    "Ayodhya tour package with hotel",
    "Ayodhya trip package with transport",
    "Ayodhya same day tour",
    "Ayodhya same day tour package",
    "Ayodhya one day tour package",
    "Ram Mandir darshan package",
    "Ayodhya pilgrimage tour",
    "Ayodhya tour package 2025",
    "Lucknow Ayodhya tour package",
    "spiritual tour packages India",
    "family pilgrimage tour Ayodhya",
  ].join(", "),
  applicationName: "Ayodhya Dharshan",
  authors: [{ name: "Ayodhya Dharshan" }],
  creator: "Ayodhya Dharshan",
  publisher: "Ayodhya Dharshan",
  category: "Travel & Tourism",
  classification: "Pilgrimage Tours",
  formatDetection: { telephone: true, email: true, address: true },
  openGraph: {
    title: "Ayodhya Tour Package with Hotel & Ram Mandir Darshan — Starting ₹22,000 for Couple",
    description:
      "Complete Ayodhya pilgrimage packages: hotel stay, Ram Mandir darshan pass, AC transport, expert guide. Ayodhya Varanasi, Prayagraj circuits & same-day tours. 50,000+ pilgrims served since 2009.",
    type: "website",
    locale: "en_IN",
    siteName: "Ayodhya Dharshan",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ayodhya Tour Package with Hotel & Darshan — Starting ₹22,000 for Couple",
    description:
      "Ram Mandir darshan + hotel + AC transport + expert guide. Ayodhya–Varanasi, Prayagraj circuits. Book on WhatsApp in 2 minutes.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://ayodhyadharshan.com",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="theme-color" content="#FF6B00" />
        <meta name="geo.region" content="IN-UP" />
        <meta name="geo.placename" content="Ayodhya" />
        <meta name="geo.position" content="26.7922;82.1998" />
        <meta name="ICBM" content="26.7922, 82.1998" />
      </head>
      <body className="font-inter bg-sacred-cream overflow-x-hidden">
        {/* GTM noscript fallback — first element in <body> per Google specification */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5PVR84PC"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        {children}

        {/* GTM head script — afterInteractive loads post-hydration, preserving LCP & FID */}
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5PVR84PC');`,
          }}
        />
      </body>
    </html>
  );
}
