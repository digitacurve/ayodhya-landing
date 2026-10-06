"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Check, Clock, MapPin, Hotel, Car, Compass, Headphones } from "lucide-react";
import Link from "next/link";
import { packages, PackageItem } from "@/data/packagesData";

const filterCategories = [
  { id: "all", label: "All" },
  { id: "varanasi", label: "Varanasi" },
  { id: "ayodhya", label: "Ayodhya" },
  { id: "prayagraj", label: "Prayagraj" },
  { id: "ujjain", label: "Ujjain" },
  { id: "gaya", label: "Gaya" },
];

function PackageCard({ pkg, tokenAmount }: { pkg: PackageItem; tokenAmount: number }) {
  const isPopular = pkg.popular;
  const isFeatured = pkg.featured;

  // Calculate discount percentage
  const discountPercent = Math.round(((pkg.originalPrice - pkg.price) / pkg.originalPrice) * 100);

  return (
    <div
      className="bg-white rounded-3xl shadow-xl border border-gray-100/90 overflow-hidden flex flex-col justify-between h-full w-[84vw] max-w-[340px] sm:w-[380px] lg:w-full flex-shrink-0 snap-center text-left transition-all duration-300 hover:shadow-2xl"
    >
      <div>
        {/* Top Image Section */}
        <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-gray-100 flex-shrink-0">
          <img
            src={pkg.image}
            alt={pkg.name}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />

          {/* Top Left Badge */}
          {isPopular && (
            <div className="absolute top-3 left-0 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold text-[10px] sm:text-xs px-3 py-1 rounded-r-full shadow-md flex items-center gap-1 z-10">
              <span>⭐</span> MOST POPULAR
            </div>
          )}
          {!isPopular && isFeatured && (
            <div className="absolute top-3 left-0 bg-gradient-to-r from-orange-600 to-red-500 text-white font-bold text-[10px] sm:text-xs px-3 py-1 rounded-r-full shadow-md flex items-center gap-1 z-10">
              <span>🔥</span> BEST SELLER
            </div>
          )}

          {/* Bottom Right Duration Badge */}
          <div className="absolute bottom-3 right-3 bg-black/75 backdrop-blur-md text-white font-semibold text-xs px-3 py-1 rounded-full border border-white/20 flex items-center gap-1.5 z-10">
            <Clock size={12} className="text-amber-400" />
            {pkg.duration}
          </div>
        </div>

        {/* Content Body */}
        <div className="p-4 sm:p-5 flex flex-col flex-1">
          {/* City Location Pills */}
          <div className="flex flex-wrap gap-1.5 mb-2">
            {pkg.cities.map((city) => (
              <span
                key={city}
                className="bg-amber-100/80 border border-amber-300/60 text-amber-950 text-[10px] font-bold px-2.5 py-0.5 rounded-md uppercase tracking-wider flex items-center gap-1"
              >
                <MapPin size={10} className="text-saffron-600" />
                {city}
              </span>
            ))}
          </div>

          {/* Package Title & Subtitle */}
          <h3 className="font-playfair font-bold text-xl text-divine-dark leading-tight mb-0.5 min-h-[28px]">
            {pkg.name}
          </h3>
          <p className="text-gray-500 text-xs italic line-clamp-1 mb-3">
            {pkg.subtitle}
          </p>

          {/* Core Inclusions Cream Box */}
          <div className="bg-[#FFF9F2] border border-amber-200/60 rounded-2xl p-3 grid grid-cols-2 gap-2 mb-3">
            <div className="flex items-center gap-2 text-gray-700 font-medium text-[11px]">
              <Car size={13} className="text-amber-600 flex-shrink-0" />
              <span>AC Transfer</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700 font-medium text-[11px]">
              <Hotel size={13} className="text-amber-600 flex-shrink-0" />
              <span>Best Hotel</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700 font-medium text-[11px]">
              <Compass size={13} className="text-amber-600 flex-shrink-0" />
              <span>Sightseeing</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700 font-medium text-[11px]">
              <Headphones size={13} className="text-amber-600 flex-shrink-0" />
              <span>24×7 Support</span>
            </div>
          </div>

          {/* Lock Price Button */}
          <a
            href="/#get-quote"
            onClick={() => {
              const event = new CustomEvent("select-tour", {
                detail: { tourId: pkg.id, mode: "lock" }
              });
              window.dispatchEvent(event);
            }}
            className="w-full bg-amber-50 border-2 border-dashed border-amber-300/90 text-amber-950 rounded-xl py-2 px-3 flex items-center justify-center gap-1.5 text-xs font-bold hover:bg-amber-100 transition-colors shadow-xs mb-3.5 cursor-pointer"
          >
            <span>🔒</span>
            <span>LOCK PRICE FOR ₹{tokenAmount.toLocaleString("en-IN")}</span>
          </a>

          {/* Pricing Block */}
          <div className="mb-3">
            <div className="flex items-center gap-2">
              <span className="text-gray-400 text-xs line-through">
                ₹{pkg.originalPrice.toLocaleString("en-IN")}
              </span>
              <span className="bg-emerald-100 text-emerald-800 font-bold text-[10px] px-2 py-0.5 rounded-md">
                SAVE {discountPercent}%
              </span>
            </div>
            <div className="flex items-baseline gap-1 mt-0.5">
              <span className="font-playfair font-extrabold text-2xl text-divine-dark">
                ₹{pkg.price.toLocaleString("en-IN")}
              </span>
              <span className="text-gray-400 text-xs font-medium uppercase">
                {pkg.priceSuffix || "/PERSON"}
              </span>
            </div>
            <p className="text-gray-400 text-[10px] mt-0.5">
              *Excluding GST (5%) &amp; monument entries.
            </p>
          </div>

          {/* Feature Checklist */}
          <ul className="space-y-1.5 text-xs text-gray-700 font-medium">
            <li className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 flex-shrink-0">
                <Check size={10} strokeWidth={3} />
              </div>
              <span>Private AC Cab</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 flex-shrink-0">
                <Check size={10} strokeWidth={3} />
              </div>
              <span>Premium Hotel</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 flex-shrink-0">
                <Check size={10} strokeWidth={3} />
              </div>
              <span>Temple Darshan</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 flex-shrink-0">
                <Check size={10} strokeWidth={3} />
              </div>
              <span>Sightseeing</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom CTA Block */}
      <div className="p-4 sm:p-5 border-t border-gray-100 bg-gray-50/50 flex flex-col gap-2 flex-shrink-0">
        <a
          href="/#get-quote"
          onClick={() => {
            const event = new CustomEvent("select-tour", { detail: { tourId: pkg.id } });
            window.dispatchEvent(event);
          }}
          className="w-full bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white font-bold text-sm py-3 px-4 rounded-2xl shadow-md shadow-orange-500/25 transition-all text-center block"
        >
          Get Full Itinerary
        </a>
        <Link
          href={`/packages/${pkg.id}`}
          className="text-gray-500 hover:text-saffron-600 font-semibold text-xs text-center block transition-colors"
        >
          View Full Itinerary &amp; Details
        </Link>
      </div>
    </div>
  );
}

export default function Packages() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20px" });
  const [tokenAmount, setTokenAmount] = useState(1999);
  const [activeCategory, setActiveCategory] = useState("all");

  const carouselRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (localStorage.getItem("price_lock_discount") === "true") {
        setTokenAmount(1749);
      }
      const handleDiscount = () => setTokenAmount(1749);
      window.addEventListener("apply-discount", handleDiscount);
      return () => window.removeEventListener("apply-discount", handleDiscount);
    }
  }, []);

  const handleScroll = () => {
    if (!carouselRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
    const maxScroll = scrollWidth - clientWidth;
    if (maxScroll > 0) {
      setScrollProgress((scrollLeft / maxScroll) * 100);
    }
  };

  // Filter packages based on activeCategory
  const filteredPackages = packages.filter((pkg) => {
    if (activeCategory === "all") return true;
    const catLower = activeCategory.toLowerCase();
    return pkg.cities.some((c) => c.toLowerCase().includes(catLower)) || pkg.name.toLowerCase().includes(catLower);
  });

  return (
    <section ref={ref} id="packages" className="py-14 sm:py-24 bg-divine-dark relative overflow-hidden" data-section="packages">
      {/* Background radial glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] pointer-events-none opacity-20"
        style={{
          background: "radial-gradient(ellipse at top, rgba(255,140,0,0.2) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12"
        >
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-gold-500/40 bg-gold-500/10 text-gold-400 text-xs font-bold uppercase tracking-wider mb-3">
            ✨ SACRED EXPERIENCES
          </div>
          <h2 className="font-playfair font-bold text-3xl sm:text-5xl text-white mb-3 leading-tight">
            Explore Our Most Popular <span className="text-saffron-400">Spiritual Tour Packages</span>
          </h2>
          <p className="text-white/70 text-xs sm:text-base max-w-xl mx-auto leading-relaxed">
            Choose from carefully designed pilgrimage tours covering India&apos;s holiest destinations with hotels, private transport, sightseeing, and expert assistance.
          </p>
        </motion.div>

        {/* Filter Pills Bar */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8 sm:mb-12"
        >
          {filterCategories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg shadow-orange-500/30 scale-105"
                    : "bg-white/10 hover:bg-white/20 border border-white/20 text-white/80"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </motion.div>

        {/* Swipable Carousel for Mobile | 3-Column Grid for Desktop */}
        <div className="relative">
          <div
            ref={carouselRef}
            onScroll={handleScroll}
            className="flex lg:grid lg:grid-cols-3 gap-4 sm:gap-6 overflow-x-auto lg:overflow-x-visible snap-x snap-mandatory scrollbar-none pb-4 -mx-4 px-4 sm:mx-0 sm:px-0 items-stretch"
          >
            {filteredPackages.map((pkg) => (
              <PackageCard key={pkg.id} pkg={pkg} tokenAmount={tokenAmount} />
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

        {/* Bottom Disclaimer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center text-white/50 text-[11px] sm:text-xs mt-10 max-w-2xl mx-auto leading-relaxed"
        >
          *Prices shown are starting rates per person. Stated price may vary depending on hotel availability, season, and group sizes. GST (5%) &amp; monument entry tickets are extra.
        </motion.p>

      </div>
    </section>
  );
}
