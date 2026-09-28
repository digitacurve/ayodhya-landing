// ─── Single Source of Truth (SSOT) Site Configuration ───────────────────────

export const siteConfig = {
  name: "Ayodhya Dharshan",
  alternateNames: ["Ayodhya Darshan Tours", "Ayodhya Dharshan Tours & Travels"],
  domain: "www.ayodhyadarshantourpackages.com",
  baseUrl: "https://www.ayodhyadarshantourpackages.com",
  logoUrl: "https://www.ayodhyadarshantourpackages.com/logo.png",
  ogImageUrl: "https://www.ayodhyadarshantourpackages.com/logo.png",
  
  // Contact Information
  telephone: "+919235222399",
  phoneDisplay: "+91 9235222399",
  whatsappNumber: "919235222399",
  email: "contact@ayodhyadarshantourpackages.com",
  gstin: "09CJPPJ6346G1ZR",
  gtmId: "GTM-WM5MZTCH",

  // Physical Location & Geo Data
  address: {
    streetAddress: "Second Floor, Plot No 12, Transport Nagar",
    addressLocality: "Ayodhya",
    addressRegion: "Uttar Pradesh",
    postalCode: "224001",
    addressCountry: "IN",
  },
  geo: {
    latitude: "26.7922",
    longitude: "82.1998",
  },

  // Trust & Rating Metrics
  rating: {
    ratingValue: "4.9",
    reviewCount: "312",
    bestRating: "5",
    worstRating: "1",
  },
  stats: {
    pilgrimsServed: "50,000+",
    googleRating: "4.9/5",
    verifiedReviews: "312",
    yearsExperience: "15+",
  },

  // Covered Destinations
  destinations: ["Ayodhya", "Varanasi", "Prayagraj", "Lucknow", "Chitrakoot"],
};

// ─── Schema Builders (SSOT) ──────────────────────────────────────────────────

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["TravelAgency", "TourOperator", "LocalBusiness"],
    name: siteConfig.name,
    alternateName: siteConfig.alternateNames,
    url: siteConfig.baseUrl,
    logo: siteConfig.logoUrl,
    image: siteConfig.logoUrl,
    description:
      "Ayodhya Dharshan is a Govt. Registered pilgrimage tour operator based in Ayodhya, Uttar Pradesh. Specializing in Ram Mandir darshan, Ayodhya Varanasi Prayagraj circuits, comfortable 3-star hotel stays, and AC transport. Over 50,000 pilgrims served since 2009.",
    telephone: siteConfig.telephone,
    email: siteConfig.email,
    priceRange: "₹₹",
    taxID: siteConfig.gstin,
    address: {
      "@type": "PostalAddress",
      ...siteConfig.address,
    },
    geo: {
      "@type": "GeoCoordinates",
      ...siteConfig.geo,
    },
    areaServed: siteConfig.destinations.map((city) => ({
      "@type": "City",
      name: city,
    })),
    touristType: ["Religious pilgrims", "Family pilgrims", "Senior citizens", "Hindu devotees"],
    aggregateRating: {
      "@type": "AggregateRating",
      ...siteConfig.rating,
    },
  };
}

export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${siteConfig.baseUrl}${item.url}`,
    })),
  };
}
