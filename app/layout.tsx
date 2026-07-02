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
  title: "Ayodhya Tour Package with Hotel & Darshan | Varanasi Prayagraj Circuits | Starting ₹20,000 for Couple",
  description:
    "Looking for the best Ayodhya tour package? We include Ram Mandir darshan pass, 3★/4★ hotel, airport pickup, AC transport and an expert guide — all starting at ₹20,000 for a couple. Choose from Ayodhya Varanasi, Ayodhya Prayagraj Varanasi, same-day tours, or the full Ramayana Circuit. Trusted by 50,000+ pilgrims. Book on WhatsApp in 2 minutes.",
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
    title: "Ayodhya Tour Package with Hotel & Ram Mandir Darshan — Starting ₹20,000 for Couple",
    description:
      "Complete Ayodhya pilgrimage packages: hotel stay, Ram Mandir darshan pass, AC transport, expert guide. Ayodhya Varanasi, Prayagraj circuits & same-day tours. 50,000+ pilgrims served since 2009.",
    type: "website",
    locale: "en_IN",
    siteName: "Ayodhya Dharshan",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ayodhya Tour Package with Hotel & Darshan — Starting ₹20,000 for Couple",
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
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/logo.png", sizes: "32x32", type: "image/png" },
      { url: "/logo.png", sizes: "96x96", type: "image/png" },
      { url: "/logo.png", sizes: "192x192", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/logo.png", sizes: "180x180", type: "image/png" },
    ],
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
        {/* PostHog - Script Injection */}
        <Script
          id="posthog-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(t,e){var o,n,p,r;e.__SV||(window.posthog && window.posthog.__loaded)||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.crossOrigin="anonymous",p.async=!0,p.src=s.api_host.replace(".i.posthog.com","-assets.i.posthog.com")+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="Rn Ln init Gn Jn Si Zn Yn Vn capture calculateEventProperties ns register register_once register_for_session unregister unregister_for_session ls getFeatureFlag getFeatureFlagPayload getFeatureFlagResult isFeatureEnabled reloadFeatureFlags updateFlags updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures on onFeatureFlags onSurveysLoaded onSessionId getSurveys getActiveMatchingSurveys renderSurvey displaySurvey cancelPendingSurvey canRenderSurvey canRenderSurveyAsync us identify setPersonProperties unsetPersonProperties group resetGroups setPersonPropertiesForFlags resetPersonPropertiesForFlags setGroupPropertiesForFlags resetGroupPropertiesForFlags reset setIdentity clearIdentity get_distinct_id getGroups get_session_id get_session_replay_url alias set_config startSessionRecording stopSessionRecording sessionRecordingStarted captureException addExceptionStep captureLog startExceptionAutocapture stopExceptionAutocapture loadToolbar get_property getSessionProperty ss ts createPersonProfile setInternalOrTestUser os Un ds opt_in_capturing opt_out_capturing has_opted_in_capturing has_opted_out_capturing get_explicit_consent_status is_capturing clear_opt_in_out_capturing Xn debug Ii mr getPageViewId captureTraceFeedback captureTraceMetric jn".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);
              posthog.init('phc_tJbbMaK8xrHjW7TzoAE3chVGK28vuJ25vfMt9UbS6ex4', {
                  api_host: 'https://us.i.posthog.com',
                  defaults: '2026-05-30',
                  person_profiles: 'identified_only'
              })
            `,
          }}
        />
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
