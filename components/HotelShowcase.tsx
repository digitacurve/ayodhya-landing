"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Check, Wifi, Utensils, Car, Wind, Shield, Coffee } from "lucide-react";

const hotels = [
  {
    id: "comfort",
    tier: "3 Star",
    label: "Comfort Stay",
    tagline: "Clean, devotee-friendly & conveniently located",
    description:
      "Comfortable, well-maintained hotels within 10–20 minutes of Ram Mandir. Perfect for budget-conscious pilgrims who want a clean, peaceful stay without compromising on essentials.",
    accentColor: "#FF6B00",
    badgeColor: "bg-orange-500 text-white",
    image: "/places/comfort-stay-v2.jpg",
    amenities: [
      { icon: Wind, label: "AC Rooms" },
      { icon: Wifi, label: "Free Wi-Fi" },
      { icon: Utensils, label: "Pure Veg Dining" },
      { icon: Car, label: "Parking" },
      { icon: Coffee, label: "Morning Chai" },
      { icon: Shield, label: "24/7 Security" },
    ],
    features: [
      "AC rooms with attached bathroom",
      "Pure vegetarian sattvic meals",
      "Temple proximity (10–20 min)",
      "Daily housekeeping & locker facility",
    ],
    usedIn: ["Ayodhya Darshan Package", "Lucknow Ayodhya Package"],
    priceNote: "Included in packages starting ₹7,499 / person",
  },
  {
    id: "premium",
    tier: "4 Star",
    label: "Premium Stay",
    tagline: "Spacious, elegant & spiritually serene",
    description:
      "Premium 4-star properties combining modern comfort with traditional hospitality. Spacious rooms, superior amenities and a peaceful atmosphere — ideal for families and senior citizens.",
    accentColor: "#D4AF37",
    badgeColor: "bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold",
    image: "/places/radisson-ayodhya-v2.jpg",
    amenities: [
      { icon: Wind, label: "Deluxe AC Rooms" },
      { icon: Wifi, label: "High-Speed Wi-Fi" },
      { icon: Utensils, label: "Multi-Cuisine" },
      { icon: Car, label: "Valet Parking" },
      { icon: Coffee, label: "Room Service" },
      { icon: Shield, label: "24/7 Concierge" },
    ],
    features: [
      "Spacious deluxe & suite rooms",
      "All meals included (B+L+D)",
      "Temple proximity (5–15 min)",
      "Airport / station pickup arranged",
    ],
    usedIn: ["Ayodhya Varanasi Package", "Ayodhya Prayagraj Varanasi Package"],
    priceNote: "Included in packages starting ₹12,999 / person",
  },
  {
    id: "boutique",
    tier: "Heritage / Boutique",
    label: "Heritage Boutique",
    tagline: "Curated luxury with a spiritual soul",
    description:
      "Handpicked heritage properties and boutique hotels that combine architectural grandeur with intimate spiritual ambience. An experience in itself — not just accommodation.",
    accentColor: "#8B0000",
    badgeColor: "bg-gradient-to-r from-orange-600 to-red-500 text-white font-bold",
    image: "https://images.unsplash.com/photo-1590001155093-a3c66ab0c3ff?auto=format&fit=crop&w=800&q=80",
    amenities: [
      { icon: Wind, label: "Heritage Suites" },
      { icon: Wifi, label: "Premium Wi-Fi" },
      { icon: Utensils, label: "Private Dining" },
      { icon: Car, label: "Chauffeur Cab" },
      { icon: Coffee, label: "Butler Service" },
      { icon: Shield, label: "Dedicated Host" },
    ],
    features: [
      "Themed heritage rooms & suites",
      "Chef-curated sattvic menu",
      "Personal puja arrangement",
      "Exclusive darshan slot coordination",
    ],
    usedIn: ["Full Circuit Package (5N/6D)"],
    priceNote: "Included in packages starting ₹18,499 / person",
  },
];

export default function HotelShowcase() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const carouselRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    if (!carouselRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
    const maxScroll = scrollWidth - clientWidth;
    if (maxScroll > 0) {
      setScrollProgress((scrollLeft / maxScroll) * 100);
    }
  };

  return (
    <section ref={ref} id="hotels" className="py-14 sm:py-24 bg-divine-dark relative overflow-hidden">
      {/* Background ambient glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] pointer-events-none opacity-20"
        style={{
          background: "radial-gradient(ellipse at top, rgba(255,140,0,0.2) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-14"
        >
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-gold-500/40 bg-gold-500/10 text-gold-400 text-xs font-bold uppercase tracking-wider mb-3">
            ✨ HANDPICKED STAYS
          </div>
          <h2 className="font-playfair font-bold text-3xl sm:text-5xl text-white mb-3 leading-tight">
            Handpicked <span className="text-saffron-400">Pilgrimage Hotels</span>
          </h2>
          <p className="text-white/70 text-xs sm:text-base max-w-xl mx-auto leading-relaxed">
            Every hotel we partner with is personally inspected for cleanliness, comfort and proximity to the Ram Mandir — so you can focus on your devotion, not logistics.
          </p>
        </motion.div>

        {/* Swipable Carousel for Mobile | 3-Column Grid for Desktop */}
        <div className="relative">
          <div
            ref={carouselRef}
            onScroll={handleScroll}
            className="flex lg:grid lg:grid-cols-3 gap-4 sm:gap-6 overflow-x-auto lg:overflow-x-visible snap-x snap-mandatory scrollbar-none pb-4 -mx-4 px-4 sm:mx-0 sm:px-0 items-stretch"
          >
            {hotels.map((hotel, i) => (
              <motion.div
                key={hotel.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                className="bg-white rounded-3xl shadow-xl border border-gray-100/90 overflow-hidden flex flex-col justify-between h-full w-[84vw] max-w-[340px] sm:w-[380px] lg:w-full flex-shrink-0 snap-center text-left"
              >
                <div>
                  {/* Hotel Image Header */}
                  <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-gray-100">
                    <img
                      src={hotel.image}
                      alt={hotel.label}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />

                    {/* Tier badge */}
                    <div className="absolute top-3 left-3 z-10">
                      <span className={`text-[10px] sm:text-xs font-bold px-3 py-1 rounded-full shadow-md ${hotel.badgeColor}`}>
                        ⭐ {hotel.tier}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-4 sm:p-5">
                    <h3 className="font-playfair font-bold text-xl text-divine-dark mb-0.5 leading-tight">
                      {hotel.label}
                    </h3>
                    <p className="text-saffron-600 font-semibold text-xs mb-2 line-clamp-1">
                      {hotel.tagline}
                    </p>
                    <p className="text-gray-500 text-xs leading-relaxed mb-4 line-clamp-2">
                      {hotel.description}
                    </p>

                    {/* Amenity Icons Box */}
                    <div className="bg-[#FFF9F2] border border-amber-200/60 rounded-2xl p-3 grid grid-cols-3 gap-2 mb-4">
                      {hotel.amenities.map(({ icon: Icon, label }) => (
                        <div key={label} className="flex flex-col items-center gap-1 text-center">
                          <Icon size={14} className="text-amber-600 flex-shrink-0" />
                          <span className="text-gray-700 font-medium text-[9px] leading-tight line-clamp-1">
                            {label}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Features Checklist */}
                    <ul className="space-y-1.5 text-xs text-gray-700 font-medium mb-4">
                      {hotel.features.map((f) => (
                        <li key={f} className="flex items-center gap-2">
                          <div className="w-4 h-4 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 flex-shrink-0">
                            <Check size={10} strokeWidth={3} />
                          </div>
                          <span className="line-clamp-1">{f}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Used In Note */}
                    <div className="bg-gray-50 border border-gray-100 rounded-xl px-3 py-2 text-[10px] text-gray-500 mb-3">
                      <span className="font-semibold text-divine-dark">Included in: </span>
                      {hotel.usedIn.join(" · ")}
                    </div>
                  </div>
                </div>

                {/* Bottom CTA Block */}
                <div className="p-4 sm:p-5 border-t border-gray-100 bg-gray-50/50 flex flex-col gap-1.5">
                  <p className="text-saffron-600 font-semibold text-xs text-center mb-1">
                    {hotel.priceNote}
                  </p>
                  <a
                    href="/#get-quote"
                    onClick={() => {
                      const event = new CustomEvent("select-tour", { detail: { hotelId: hotel.id } });
                      window.dispatchEvent(event);
                    }}
                    className="w-full bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white font-bold text-sm py-3 px-4 rounded-2xl shadow-md shadow-orange-500/25 transition-all text-center block"
                  >
                    Enquire Hotel
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Progress Bar Indicator for Mobile Carousel */}
          <div className="lg:hidden mt-4 flex flex-col items-center gap-2">
            <div className="w-48 h-1.5 bg-white/20 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-orange-500 to-amber-500 rounded-full transition-all duration-150"
                style={{ width: `${Math.max(15, scrollProgress)}%` }}
              />
            </div>
          </div>
        </div>

        {/* Bottom trust note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-10 text-center"
        >
          <p className="text-white/60 text-xs sm:text-sm">
            🏨 All hotels are personally vetted by our team · Pre-confirmed before your booking · No last-minute surprises
          </p>
        </motion.div>
      </div>
    </section>
  );
}
