"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Check, MessageCircle, Clock, MapPin, Hotel, Car, UserCheck, Ticket, Sparkles } from "lucide-react";
import Link from "next/link";
import { packages } from "@/data/packagesData";

const coreInclusions = [
  { icon: Car,           label: "AC Transfer" },
  { icon: Hotel,         label: "Best Hotel" },
  { icon: MapPin,        label: "Sightseeing" },
  { icon: MessageCircle, label: "24/7 Support" },
];

function PackageCard({ pkg, index, tokenAmount }: { pkg: (typeof packages)[0]; index: number; tokenAmount: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const inView  = useInView(cardRef, { once: true, margin: "-60px" });

  const waMsg = encodeURIComponent(
    `Jai Shri Ram! 🙏 I'm interested in the "${pkg.name}" tour package (₹${pkg.price.toLocaleString("en-IN")} for couple). Please share availability and full itinerary.`
  );

  const isPopular = pkg.popular;

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 44 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: (index % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className={`relative flex flex-col rounded-2xl sm:rounded-3xl overflow-hidden transition-all duration-500 w-full h-full ${
        isPopular
          ? "liquid-glass-dark border border-gold-500/50 shadow-2xl hover:-translate-y-1"
          : "liquid-glass border border-white/60 shadow-lg hover:-translate-y-1"
      }`}
    >
      {/* Popular banner */}
      {isPopular && (
        <div className="bg-gold-gradient text-divine-dark text-center py-1.5 sm:py-2.5 text-[9px] sm:text-[11px] font-bold tracking-wider sm:tracking-[0.2em] uppercase flex items-center justify-center gap-1 sm:gap-2">
          <Sparkles size={11} className="sm:w-3 sm:h-3" />
          <span>Most Popular</span>
          <span className="hidden sm:inline">— Best Value</span>
          <Sparkles size={11} className="sm:w-3 sm:h-3" />
        </div>
      )}

      {/* Featured badge (non-popular) */}
      {pkg.featured && !isPopular && (
        <div
          className="absolute top-2 right-2 sm:top-4 sm:right-4 z-10 text-[8px] sm:text-[10px] font-bold px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full backdrop-blur-md"
          style={{ backgroundColor: `${pkg.accent}25`, color: pkg.accent, border: `1px solid ${pkg.accent}40` }}
        >
          ✦ Best Value
        </div>
      )}

      {/* Package Image */}
      <div className="relative h-32 sm:h-44 lg:h-48 w-full overflow-hidden bg-gray-100 flex-shrink-0">
        <img
          src={pkg.image}
          alt={pkg.name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </div>

      <div className="flex flex-col flex-1 p-3 sm:p-6 lg:p-7">
        {/* Duration + cities */}
        <div className="flex flex-wrap items-center gap-1 sm:gap-2 mb-2 sm:mb-4">
          <span className={`inline-flex items-center gap-1 text-[9px] sm:text-[11px] font-semibold px-2 py-1 sm:px-3 sm:py-1.5 rounded-full ${
            isPopular ? "bg-white/10 text-gold-300 border border-gold-500/25" : "bg-gray-50 border border-gray-100 text-gray-500"
          }`}>
            <Clock size={10} className="sm:w-3 sm:h-3" />
            {pkg.duration}
          </span>
          <span className={`inline-flex items-center gap-1 text-[9px] sm:text-[11px] px-2 py-1 sm:px-3 sm:py-1.5 rounded-full ${
            isPopular ? "bg-white/8 text-white/55 border border-white/12" : "bg-gray-50 border border-gray-100 text-gray-400"
          }`}>
            <MapPin size={10} className="sm:w-3 sm:h-3" />
            {pkg.cities.join(" · ")}
          </span>
        </div>

        {/* Name */}
        <h3 className={`font-playfair font-bold text-sm sm:text-xl lg:text-2xl leading-tight mb-1 line-clamp-2 ${
          isPopular ? "text-white" : "text-divine-dark"
        }`}>
          {pkg.name}
        </h3>
        <p className={`text-[10px] sm:text-sm mb-3 sm:mb-5 line-clamp-2 ${isPopular ? "text-gold-300" : "text-gray-400"}`}>
          {pkg.subtitle}
        </p>

        {/* Core inclusions icons */}
        <div className={`flex items-center justify-between mb-3 pb-3 sm:mb-5 sm:pb-5 border-b ${
          isPopular ? "border-white/10" : "border-gray-100"
        }`}>
          {coreInclusions.map(({ icon: Icon, label }) => (
            <div key={label} className="flex flex-col items-center gap-1">
              <div
                className="w-7 h-7 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl flex items-center justify-center"
                style={{ backgroundColor: isPopular ? "rgba(212,175,55,0.12)" : `${pkg.accent}12` }}
              >
                <Icon size={13} className="sm:w-4 sm:h-4" style={{ color: isPopular ? "#D4AF37" : pkg.accent }} />
              </div>
              <span className={`text-[8px] sm:text-[9px] font-medium text-center leading-tight ${
                isPopular ? "text-white/60" : "text-gray-400"
              }`}>
                {label}
              </span>
            </div>
          ))}
        </div>

        {/* Price & Lock Section */}
        <div className={`mb-3 sm:mb-6 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2 sm:gap-3 border-t border-b py-2.5 sm:py-4 ${
          isPopular ? "border-white/10" : "border-gray-100"
        }`}>
          {/* Lock Price Pill */}
          <a
            href="/#get-quote"
            onClick={() => {
              const event = new CustomEvent("select-tour", {
                detail: { tourId: pkg.id, mode: "lock" }
              });
              window.dispatchEvent(event);
            }}
            className={`flex items-center justify-center gap-1 px-2 py-1.5 sm:px-3 sm:py-2 rounded-lg sm:rounded-xl text-[10px] sm:text-[12px] font-bold transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer shadow-sm ${
              isPopular
                ? "bg-gradient-to-r from-saffron-500/25 to-amber-500/25 text-amber-200 border border-saffron-500/40 hover:from-saffron-500/35 hover:to-amber-500/35"
                : "bg-gradient-to-r from-amber-50 to-amber-100/60 text-amber-900 border border-amber-200/80 hover:from-amber-100 hover:to-amber-200/50"
            }`}
          >
            <span className="text-[10px] sm:text-[11px]">🔒</span>
            <span>Lock ₹{tokenAmount.toLocaleString("en-IN")}</span>
            <span className="text-[8px] sm:text-[9px] opacity-70">❯</span>
          </a>

          {/* Pricing */}
          <div className="text-center sm:text-right">
            <div className="flex items-baseline justify-center sm:justify-end gap-1">
              <span className={`text-[9px] sm:text-[11px] line-through ${
                isPopular ? "text-white/35" : "text-gray-400"
              }`}>
                ₹{(pkg.priceSuffix?.includes("Pax") ? pkg.originalPrice : (pkg.originalPrice / 2)).toLocaleString("en-IN")}
              </span>
              <span className={`font-playfair font-bold text-base sm:text-2xl lg:text-[1.7rem] leading-none ${
                isPopular ? "text-gold-400" : "text-divine-dark"
              }`}>
                ₹{(pkg.priceSuffix?.includes("Pax") ? pkg.price : (pkg.price / 2)).toLocaleString("en-IN")}
              </span>
              <span className={`text-[9px] sm:text-[11px] font-medium ${
                isPopular ? "text-white/50" : "text-gray-500"
              }`}>
                {pkg.priceSuffix || "/ person"}
              </span>
            </div>
            <p className={`text-[8px] sm:text-[9px] mt-0.5 sm:mt-1 font-medium ${
              isPopular ? "text-gold-300/80" : "text-saffron-600/90"
            }`}>
              {pkg.priceSuffix?.includes("Pax") 
                ? (pkg.note || "AC Cab & Driver included") 
                : `₹${pkg.price.toLocaleString("en-IN")} total for couple`
              }
            </p>
          </div>
        </div>

        {/* Features */}
        <ul className="space-y-1.5 sm:space-y-2.5 flex-1 mb-3 sm:mb-5">
          {pkg.features.map((f) => (
            <li key={f} className="flex items-start gap-1.5 sm:gap-2.5">
              <div
                className="flex-shrink-0 w-3.5 h-3.5 sm:w-[18px] sm:h-[18px] rounded-full flex items-center justify-center mt-[2px]"
                style={{
                  backgroundColor: isPopular ? "rgba(212,175,55,0.15)" : `${pkg.accent}18`,
                }}
              >
                <Check
                  size={8}
                  strokeWidth={3}
                  className="sm:w-2.5 sm:h-2.5"
                  style={{ color: isPopular ? "#D4AF37" : pkg.accent }}
                />
              </div>
              <span className={`text-[10px] sm:text-[13px] leading-snug line-clamp-2 ${
                isPopular ? "text-white/80" : "text-gray-600"
              }`}>
                {f}
              </span>
            </li>
          ))}
        </ul>

        {/* Urgency note */}
        {pkg.note && (
          <div className={`mb-3 sm:mb-4 text-[10px] sm:text-[12px] font-medium px-2.5 py-1.5 sm:px-3.5 sm:py-2.5 rounded-lg sm:rounded-xl line-clamp-2 ${
            isPopular
              ? "bg-saffron-500/15 text-saffron-300 border border-saffron-500/20"
              : "bg-amber-50 text-amber-700 border border-amber-100"
          }`}>
            🔔 {pkg.note}
          </div>
        )}

        {/* Exclusions block inside card */}
        <div className={`mb-3 sm:mb-6 pt-2.5 sm:pt-4 border-t ${isPopular ? "border-white/10" : "border-gray-100"}`}>
          <div className={`text-[8px] sm:text-[10px] font-bold uppercase tracking-wider mb-1.5 sm:mb-2.5 ${isPopular ? "text-gold-300" : "text-gray-400"}`}>
            Notes:
          </div>
          <ul className="space-y-1 sm:space-y-2 text-[9px] sm:text-[11px] leading-tight">
            <li className="flex items-start gap-1 sm:gap-2">
              <span className="text-blue-500 font-bold text-[8px] sm:text-[10px] mt-[1px] flex-shrink-0">✈️</span>
              <span className={isPopular ? "text-white/80 font-medium" : "text-gray-600 font-medium"}>
                Flights/Trains: Self OR actual cost
              </span>
            </li>
            <li className="flex items-start gap-1 sm:gap-2">
              <span className="text-red-500 font-bold text-[8px] sm:text-[10px] mt-[1px] flex-shrink-0">✕</span>
              <span className={isPopular ? "text-white/60" : "text-gray-500"}>
                5% GST extra on invoice
              </span>
            </li>
          </ul>
        </div>

        {/* CTA */}
        <Link
          href={`/packages/${pkg.id}`}
          className={`wa-shimmer flex items-center justify-center gap-1.5 sm:gap-2.5 w-full py-2.5 sm:py-3.5 rounded-xl sm:rounded-2xl text-white font-bold text-[11px] sm:text-[14px] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] ${
            isPopular
              ? "bg-gold-gradient text-divine-dark hover:brightness-105"
              : "hover:brightness-110"
          }`}
          style={
            isPopular
              ? {}
              : { backgroundColor: pkg.accent }
          }
          data-cta="view-details"
          data-source="packages"
          data-package={pkg.id}
        >
          {pkg.ctaText}
        </Link>

        <p className={`text-center text-[9px] sm:text-[11px] mt-1.5 sm:mt-2.5 ${
          isPopular ? "text-white/30" : "text-gray-300"
        }`}>
          Confirm with 25% Advance
        </p>
      </div>
    </motion.div>
  );
}

export default function Packages() {
  const ref   = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20px" });
  const [tokenAmount, setTokenAmount] = useState(1999);

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

  return (
    <section ref={ref} id="packages" className="py-16 sm:py-24 lg:py-32 bg-sacred-cream" data-section="packages">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-10 sm:mb-16 lg:mb-20"
        >
          <div className="ornament-line max-w-xl mx-auto mb-3 sm:mb-5">
            <span className="text-gold-600 text-[10px] sm:text-[11px] tracking-[0.32em] uppercase font-semibold whitespace-nowrap px-4">
              Choose Your Journey
            </span>
          </div>
          <h2 className="font-playfair font-bold text-3xl sm:text-5xl lg:text-[3.4rem] text-divine-dark mb-3 sm:mb-5 leading-tight">
            Ayodhya Tour{" "}
            <span className="text-gradient-saffron">Packages 2025</span>
          </h2>
          <p className="text-gray-500 text-sm sm:text-lg max-w-xl mx-auto leading-relaxed">
            Every detail pre-arranged — best hotel stays, comfortable AC transport and seamless logistics — so you arrive and simply pray.
          </p>
          <div className="inline-flex items-center gap-2 mt-4 sm:mt-6 text-xs sm:text-sm text-gray-500 bg-white border border-gray-100 shadow-sm rounded-full px-4 py-2 sm:px-5 sm:py-2.5">
            <MapPin size={13} className="text-saffron-500" />
            Departures from all major cities across India
          </div>
        </motion.div>

        {/* Cards grid: 2 cards per row on mobile (grid-cols-2), 3 on desktop (lg:grid-cols-3) */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-5 lg:gap-6 items-stretch">
          {packages.map((pkg, i) => (
            <PackageCard key={pkg.id} pkg={pkg} index={i} tokenAmount={tokenAmount} />
          ))}
        </div>

        {/* Prominent Flight/Train Booking Assistance Banner — Positioned right below package cards */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 sm:mt-12 bg-gradient-to-r from-saffron-50 to-amber-50 border border-saffron-200/60 rounded-2xl sm:rounded-3xl p-4 sm:p-7 max-w-4xl mx-auto shadow-sm flex flex-col sm:flex-row items-center gap-3 sm:gap-5 text-center sm:text-left relative overflow-hidden"
        >
          {/* Decorative background circle */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-saffron-300/10 rounded-full blur-2xl pointer-events-none" />
          
          <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-saffron-500/10 flex items-center justify-center flex-shrink-0 text-xl sm:text-3xl shadow-inner">
            ✈️
          </div>
          <div className="flex-1">
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mb-1 sm:mb-2">
              <h4 className="font-playfair font-bold text-divine-dark text-base sm:text-lg">
                Flight & Train Ticket Bookings Available!
              </h4>
              <span className="bg-saffron-600 text-white text-[9px] sm:text-[10px] font-bold px-2 py-0.5 sm:px-2.5 rounded-full uppercase tracking-wider">
                Yatra Add-on
              </span>
            </div>
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
              We arrange direct flights, trains, and luxury sleeper buses from any city in India (Delhi, Mumbai, Bengaluru, Chennai, etc.) at <strong>actual market rates</strong>. Prefer booking your own tickets? No problem! Your yatra packages will start directly from your arrival airport/station with our private AC pickup.
            </p>
          </div>
        </motion.div>

        {/* General Exclusions and Guidelines Disclaimer Block */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 bg-white border border-gray-100 rounded-3xl p-6 sm:p-8 max-w-4xl mx-auto shadow-sm"
        >
          <h3 className="font-playfair font-bold text-lg sm:text-xl text-divine-dark text-center mb-6 flex items-center justify-center gap-2">
            📋 Booking Guidelines & Package Exclusions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 text-blue-600 font-bold text-sm">✈️</div>
              <div>
                <h4 className="font-semibold text-divine-dark text-[13px] mb-1">Flexible Transport Options</h4>
                <p className="text-gray-400 text-xs leading-relaxed">Book your own flight, train, or bus to the yatra starting point, or ask our team to book them for you at actual cost during confirmation.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0 text-red-600 font-bold text-sm">✕</div>
              <div>
                <h4 className="font-semibold text-divine-dark text-[13px] mb-1">5% Tax Excluded</h4>
                <p className="text-gray-400 text-xs leading-relaxed">A standard 5% GST/Service Tax is not included in the package prices shown. The final tax amount will be detailed clearly in your invoice before booking.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-amber-50 flex items-center justify-center flex-shrink-0 text-amber-600 font-bold text-sm">⚠️</div>
              <div>
                <h4 className="font-semibold text-divine-dark text-[13px] mb-1">Darshan Pass Booking</h4>
                <p className="text-gray-400 text-xs leading-relaxed">Ram Mandir darshan passes are arranged strictly as part of our complete tour packages. We do not provide or sell standalone passes without hotel/transport booking.</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Early bird price lock warning card — Hidden on mobile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="hidden lg:flex mt-8 bg-amber-500/10 border border-amber-500/20 rounded-3xl p-5 sm:p-6 max-w-4xl mx-auto flex-col sm:flex-row items-center gap-4 text-center sm:text-left"
        >
          <span className="text-2xl">💡</span>
          <div>
            <h4 className="font-semibold text-amber-200 text-sm mb-0.5">Early Bird Tip for Future Travels</h4>
            <p className="text-gray-300 text-xs leading-relaxed">
              Traveling this month? Pay a 25% advance to confirm your dates immediately. Traveling in future months? Avoid seasonal price surges of up to 45% by securing a Flexi-Date Price Lock for just ₹{tokenAmount.toLocaleString("en-IN")} today. Finalize your exact dates later!
            </p>
          </div>
        </motion.div>

        {/* Custom nudge — Hidden on mobile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="hidden lg:block mt-12 text-center"
        >
          <p className="text-gray-400 text-sm">
            Need a custom group tour, senior citizen plan or a different itinerary?{" "}
            <a
              href="/#get-quote"
              className="text-saffron-600 font-semibold hover:text-saffron-700 underline underline-offset-2"
            >
              Plan your custom trip here →
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
