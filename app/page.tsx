import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LeadCapture from "@/components/LeadCapture";
import TrustStrip from "@/components/TrustStrip";
import YatraPhotoMarquee from "@/components/YatraPhotoMarquee";
import TrustMetrics from "@/components/TrustMetrics";
import Packages from "@/components/Packages";
import WhyChooseUs from "@/components/WhyChooseUs";
import Itinerary from "@/components/Itinerary";
import HotelShowcase from "@/components/HotelShowcase";
import LuxuryPartnersStrip from "@/components/LuxuryPartnersStrip";
import Testimonials from "@/components/Testimonials";
import Gallery from "@/components/Gallery";
import GoogleReviews from "@/components/GoogleReviews";
import SemanticContent from "@/components/SemanticContent";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import StickyWhatsApp from "@/components/StickyWhatsApp";
import { faqData } from "@/lib/faqData";

// ─── JSON-LD Schemas ──────────────────────────────────────────────────────────

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["TourOperator", "LocalBusiness"],
  name: "Ayodhya Dharshan",
  alternateName: ["Ayodhya Darshan Tours", "Ayodhya Dharshan Tours & Travels"],
  url: "https://ayodhyadharshan.com",
  logo: "https://ayodhyadharshan.com/logo.png",
  image: "https://ayodhyadharshan.com/logo.png",
  description:
    "Ayodhya Dharshan is a specialist pilgrimage tour operator based in Ayodhya, Uttar Pradesh. We offer complete Ayodhya tour packages including Ram Mandir darshan pass, 3-star and 4-star hotel stays, AC transport, and expert guides. Our circuits cover Ayodhya, Varanasi, Prayagraj, Chitrakoot, and Lucknow. Packages start at ₹22,000 for a couple. We have served over 50,000 pilgrims since 2009.",
  telephone: "+919235222399",
  email: "contact@ayodhyadharsha.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Second Floor, Plot No 12, Transport Nagar",
    addressLocality: "Ayodhya",
    addressRegion: "Uttar Pradesh",
    postalCode: "224001",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "26.7922",
    longitude: "82.1998",
  },
  areaServed: [
    { "@type": "City", name: "Ayodhya" },
    { "@type": "City", name: "Varanasi" },
    { "@type": "City", name: "Prayagraj" },
    { "@type": "City", name: "Lucknow" },
    { "@type": "City", name: "Chitrakoot" },
    { "@type": "Country", name: "India" },
  ],
  touristType: ["Religious pilgrims", "Family pilgrims", "Senior citizens", "Hindu devotees"],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "2847",
    bestRating: "5",
    worstRating: "1",
  },
  review: [
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Ramesh Gupta" },
      reviewRating: { "@type": "Rating", ratingValue: "5" },
      reviewBody:
        "Ram Mandir darshan was arranged perfectly — no queue, calm atmosphere. Hotels were spotlessly clean. Would highly recommend to all devotees.",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Sunita Sharma" },
      reviewRating: { "@type": "Rating", ratingValue: "5" },
      reviewBody:
        "Travelled as a family of 8 including elderly parents. The team made special arrangements — wheelchair access, early darshan slot, ground floor rooms. Our parents were brought to tears at Ram Lalla's feet.",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Ayodhya Tour Packages",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Trip",
          name: "Ayodhya Darshan Package",
          description: "2 Nights 3 Days Ayodhya tour with Ram Mandir darshan, hotel and transport",
          tripOrigin: { "@type": "TouristAttraction", name: "Ayodhya" },
        },
        price: "22000",
        priceCurrency: "INR",
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Trip",
          name: "Ayodhya Varanasi Tour Package",
          description: "3 Nights 4 Days Ayodhya and Varanasi tour package with Ram Mandir darshan and Ganga Aarti",
        },
        price: "32000",
        priceCurrency: "INR",
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Trip",
          name: "Ayodhya Prayagraj Varanasi Tour Package",
          description: "4 Nights 5 Days complete tirthdham circuit covering Ayodhya, Prayagraj and Varanasi",
        },
        price: "40000",
        priceCurrency: "INR",
      },
    ],
  },
  priceRange: "₹₹",
  currenciesAccepted: "INR",
  paymentAccepted: "Cash, UPI, Bank Transfer, Credit Card",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
    opens: "07:00",
    closes: "22:00",
  },
  sameAs: [
    "https://www.instagram.com/ayodhyadharshan/",
    "https://www.facebook.com/Ayodhhyadharsha/",
    "https://www.youtube.com/@AyodhyaDharshan_official",
  ],
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: ["#packages", "#why-us", "#faq"],
  },
};

// Ayodhya as a tourist destination — helps AI understand topical context
const destinationSchema = {
  "@context": "https://schema.org",
  "@type": "TouristDestination",
  name: "Ayodhya",
  description:
    "Ayodhya is one of the seven sacred cities of Hinduism and the birthplace of Lord Ram. It is home to the newly built Ram Mandir (Shri Ram Janmabhoomi Temple), Hanuman Garhi, Kanak Bhawan, and the sacred Saryu River ghats. Ayodhya attracts millions of pilgrims from across India every year.",
  url: "https://ayodhyadharshan.com",
  geo: {
    "@type": "GeoCoordinates",
    latitude: "26.7922",
    longitude: "82.1998",
  },
  includesAttraction: [
    {
      "@type": "TouristAttraction",
      name: "Ram Mandir — Shri Ram Janmabhoomi",
      description:
        "The Ram Mandir is a grand Hindu temple built on the birthplace of Lord Ram in Ayodhya, Uttar Pradesh. It was consecrated in January 2024 and is one of the largest temple complexes in India.",
    },
    {
      "@type": "TouristAttraction",
      name: "Hanuman Garhi",
      description:
        "Hanuman Garhi is a 10th-century temple dedicated to Lord Hanuman, located in the heart of Ayodhya. It is a must-visit before proceeding to Ram Mandir darshan.",
    },
    {
      "@type": "TouristAttraction",
      name: "Kanak Bhawan",
      description:
        "Kanak Bhawan is a magnificent palace-temple dedicated to Sita-Ram, gifted to Goddess Sita by Queen Kaikeyi. The golden idol of Ram-Sita inside is considered among the most beautiful in Ayodhya.",
    },
    {
      "@type": "TouristAttraction",
      name: "Saryu River Ghat",
      description:
        "The sacred Saryu River flows through Ayodhya. Evening aartis at Ram Ki Paidi ghat are a deeply moving spiritual experience for all pilgrims.",
    },
  ],
};

// HowTo schema for booking process — voice search and AI Overview optimized
const bookingHowToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Book an Ayodhya Tour Package",
  description:
    "Follow these steps to book a complete Ayodhya pilgrimage package with Ram Mandir darshan, hotel and transport in under 15 minutes.",
  totalTime: "PT15M",
  step: [
    {
      "@type": "HowToStep",
      position: "1",
      name: "Share your travel details",
      text: "WhatsApp us your preferred travel dates, number of travellers, and the tour you are interested in. Our team responds within 2 minutes.",
    },
    {
      "@type": "HowToStep",
      position: "2",
      name: "Receive personalised itinerary and quote",
      text: "We send you a detailed day-wise itinerary, hotel options and a transparent invoice with no hidden charges.",
    },
    {
      "@type": "HowToStep",
      position: "3",
      name: "Confirm with 20% advance",
      text: "Pay 20% of the package amount to confirm your booking and secure your darshan pass and hotel rooms.",
    },
    {
      "@type": "HowToStep",
      position: "4",
      name: "Receive booking confirmation and guide contact",
      text: "You receive a written confirmation with hotel details, pickup timings, and your guide's contact number.",
    },
    {
      "@type": "HowToStep",
      position: "5",
      name: "Travel and pay balance on arrival",
      text: "Arrive at the airport or railway station. Our representative receives you. Pay the remaining balance on the first day of the tour.",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqData.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

const tourSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Ayodhya Tour Packages",
  description:
    "Premium Ayodhya pilgrimage packages with Ram Mandir darshan, hotel and transport included",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "Product",
        name: "Ayodhya Darshan Package — 2 Nights / 3 Days",
        description:
          "Ayodhya tour package with Ram Mandir darshan, 3★/4★ hotel, airport pickup & drop, and professional guide.",
        image: [
          "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Ram_Mandir%2C_Ayodhya.png/960px-Ram_Mandir%2C_Ayodhya.png"
        ],
        sku: "ayodhya-darshan-2n3d",
        brand: {
          "@type": "Brand",
          name: "Ayodhya Dharshan"
        },
        offers: {
          "@type": "Offer",
          price: "22000",
          priceCurrency: "INR",
          priceValidUntil: "2027-12-31",
          url: "https://book.ayodhyadharshan.com/#get-quote",
          availability: "https://schema.org/InStock",
        },
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "Product",
        name: "Ayodhya Varanasi Tour Package — 3 Nights / 4 Days",
        description:
          "Ayodhya and Varanasi tour package with Ram Mandir darshan, Kashi Vishwanath visit, 3★/4★ hotels and AC transfers.",
        image: [
          "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Evening_Ganga_Aarti_at_Dashashwamedh_Ghat.JPG/960px-Evening_Ganga_Aarti_at_Dashashwamedh_Ghat.JPG"
        ],
        sku: "ayodhya-varanasi-3n4d",
        brand: {
          "@type": "Brand",
          name: "Ayodhya Dharshan"
        },
        offers: {
          "@type": "Offer",
          price: "32000",
          priceCurrency: "INR",
          priceValidUntil: "2027-12-31",
          url: "https://book.ayodhyadharshan.com/#get-quote",
          availability: "https://schema.org/InStock",
        },
      },
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "Product",
        name: "Ayodhya Prayagraj Varanasi Package — 4 Nights / 5 Days",
        description:
          "Complete tirthdham circuit covering Ayodhya, Prayagraj and Varanasi with darshan pass, hotels and guide.",
        image: [
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Sangam_Allahabad.jpg/960px-Sangam_Allahabad.jpg"
        ],
        sku: "ayodhya-prayagraj-varanasi-4n5d",
        brand: {
          "@type": "Brand",
          name: "Ayodhya Dharshan"
        },
        offers: {
          "@type": "Offer",
          price: "40000",
          priceCurrency: "INR",
          priceValidUntil: "2027-12-31",
          url: "https://book.ayodhyadharshan.com/#get-quote",
          availability: "https://schema.org/InStock",
        },
      },
    },
    {
      "@type": "ListItem",
      position: 4,
      item: {
        "@type": "Product",
        name: "Lucknow Ayodhya Tour Package — 3 Nights / 4 Days",
        description:
          "Heritage and pilgrimage tour covering Lucknow and Ayodhya with Ram Mandir darshan and hotel stay.",
        image: [
          "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Bara_Imambara_Lucknow.jpg/960px-Bara_Imambara_Lucknow.jpg"
        ],
        sku: "lucknow-ayodhya-3n4d",
        brand: {
          "@type": "Brand",
          name: "Ayodhya Dharshan"
        },
        offers: {
          "@type": "Offer",
          price: "30000",
          priceCurrency: "INR",
          priceValidUntil: "2027-12-31",
          url: "https://book.ayodhyadharshan.com/#get-quote",
          availability: "https://schema.org/InStock",
        },
      },
    },
    {
      "@type": "ListItem",
      position: 5,
      item: {
        "@type": "Product",
        name: "Ayodhya Varanasi Chitrakoot Package — 4 Nights / 5 Days",
        description:
          "Ramayana pilgrimage circuit tracing Lord Ram's journey from Ayodhya through Chitrakoot to Varanasi.",
        image: [
          "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Mandakini_River.jpg/960px-Mandakini_River.jpg"
        ],
        sku: "ayodhya-varanasi-chitrakoot-4n5d",
        brand: {
          "@type": "Brand",
          name: "Ayodhya Dharshan"
        },
        offers: {
          "@type": "Offer",
          price: "40000",
          priceCurrency: "INR",
          priceValidUntil: "2027-12-31",
          url: "https://book.ayodhyadharshan.com/#get-quote",
          availability: "https://schema.org/InStock",
        },
      },
    },
    {
      "@type": "ListItem",
      position: 6,
      item: {
        "@type": "Product",
        name: "Ayodhya Prayagraj Varanasi Chitrakoot Package — 5 Nights / 6 Days",
        description:
          "The ultimate Ramayana pilgrimage covering all four sacred destinations with premium hotels and guided darshan.",
        image: [
          "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Ram_Mandir%2C_Ayodhya.png/960px-Ram_Mandir%2C_Ayodhya.png"
        ],
        sku: "ayodhya-prayagraj-varanasi-chitrakoot-5n6d",
        brand: {
          "@type": "Brand",
          name: "Ayodhya Dharshan"
        },
        offers: {
          "@type": "Offer",
          price: "50000",
          priceCurrency: "INR",
          priceValidUntil: "2027-12-31",
          url: "https://book.ayodhyadharshan.com/#get-quote",
          availability: "https://schema.org/InStock",
        },
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://ayodhyadharshan.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Ayodhya Tour Packages",
      item: "https://ayodhyadharshan.com/packages",
    },
  ],
};

export default function Home() {
  return (
    <>
      {/* JSON-LD Schema Markup — TourOperator + LocalBusiness */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      {/* FAQPage — 20 Q&As for AI Overview and voice search */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {/* ItemList — 6 tour packages with pricing */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(tourSchema) }} />
      {/* BreadcrumbList */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {/* TouristDestination — Ayodhya with key attractions */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(destinationSchema) }} />
      {/* HowTo — booking process for voice search */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(bookingHowToSchema) }} />

      <AnnouncementBar />
      <Navbar />

      <main>
        {/* 1. Hero — above-the-fold conversion section */}
        <Hero />

        {/* 2. Lead Capture — form immediately after hero for Google Ads conversion */}
        <LeadCapture />

        {/* 3. Trust Strip — immediate social proof */}
        <TrustStrip />

        {/* 3b. Yatra Photo Marquee — sliding track of real devotee group photos */}
        <YatraPhotoMarquee />

        {/* 3c. Trust Metrics — animated numbers */}
        <TrustMetrics />

        {/* 4. Luxury Partners Strip — luxury 5-star brand trust strip */}
        <LuxuryPartnersStrip />

        {/* 5. Packages — 6 destination packages */}
        <Packages />

        {/* 6. Why Choose Us — USP grid */}
        <WhyChooseUs />

        {/* 7. Itinerary — day-wise expandable plans */}
        <Itinerary />

        {/* 8. Hotel Showcase — trust signal for hotel searches */}
        <HotelShowcase />

        {/* 9. Testimonials — social proof carousel */}
        <Testimonials />

        {/* 9b. Gallery — real pilgrim memories to build devotee trust */}
        <Gallery />

        {/* 10. Google Reviews — verified third-party trust signal */}
        <GoogleReviews />

        {/* 10. Semantic Content — conversational Q&A + package matrix for AI/voice SEO */}
        <SemanticContent />

        {/* 11. FAQ — 20 Q&As for featured snippets and Google AI Overview */}
        <FAQ />

        {/* 12. Final CTA — conversion push */}
        <FinalCTA />
      </main>

      <Footer />
      <StickyWhatsApp />
    </>
  );
}
