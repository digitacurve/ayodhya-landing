"use client";

import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Star, ShieldCheck, Users, CheckCircle2, ChevronLeft, ChevronRight, Clock, MapPin, Sparkles } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

const PHONE       = siteConfig.phoneDisplay;
const PHONE_TEL   = `tel:${siteConfig.telephone}`;

const heroPackages = [
  {
    id: "ayodhya-darshan",
    name: "Ayodhya Darshan Package",
    duration: "2 Nights / 3 Days",
    cities: ["Ayodhya"],
    price: "₹7,499",
    priceNote: "per person (₹14,998 per couple)",
    tag: "🚩 Most Popular Pilgrimage",
    image: "/places/ram-mandir.jpg",
    highlights: ["Ram Mandir VIP Darshan", "Hanuman Garhi & Kanak Bhawan", "Saryu River Evening Aarti", "Private AC Cab & 3★ Hotel Stay"],
  },
  {
    id: "ayodhya-varanasi",
    name: "Ayodhya & Varanasi Yatra",
    duration: "3 Nights / 4 Days",
    cities: ["Ayodhya", "Varanasi"],
    price: "₹12,999",
    priceNote: "per person (₹25,998 per couple)",
    tag: "🔥 Best-Selling Dual Circuit",
    image: "/places/ganga-aarti.jpg",
    highlights: ["Shri Ram Mandir Darshan", "Kashi Vishwanath Jyotirlinga", "Grand Ganga Aarti Boat Ride", "Subah-e-Banaras Ghats Walk"],
  },
  {
    id: "ayodhya-prayagraj-varanasi",
    name: "Ayodhya · Prayagraj · Varanasi",
    duration: "4 Nights / 5 Days",
    cities: ["Ayodhya", "Prayagraj", "Varanasi"],
    price: "₹15,999",
    priceNote: "per person (₹31,998 per couple)",
    tag: "🌊 Holy Sangam Special",
    image: "/places/triveni-sangam.jpg",
    highlights: ["Triveni Sangam Ritual Snan", "Anand Bhawan & Letaji Hanuman", "Ram Mandir & Kashi Vishwanath", "All Intercity AC Transfers"],
  },
  {
    id: "lucknow-ayodhya",
    name: "Lucknow & Ayodhya Heritage Tour",
    duration: "3 Nights / 4 Days",
    cities: ["Lucknow", "Ayodhya"],
    price: "₹14,999",
    priceNote: "per person (₹29,998 per couple)",
    tag: "🏰 Heritage & Devotion",
    image: "/places/bara-imambara.jpg",
    highlights: ["Bara Imambara & Bhool Bhulaiya", "Rumi Darwaza & Awadhi Food Walk", "Ram Mandir Darshan Assistance", "Hotel & Private Transport Included"],
  },
  {
    id: "full-circuit",
    name: "Full Ramayana Circuit Yatra",
    duration: "5 Nights / 6 Days",
    cities: ["Ayodhya", "Prayagraj", "Varanasi", "Chitrakoot"],
    price: "₹18,499",
    priceNote: "per person (₹36,998 per couple)",
    tag: "👑 Ultimate Pilgrimage Circuit",
    image: "/places/ram-mandir.jpg",
    highlights: ["Covers All 4 Sacred Destinations", "Chitrakoot Kamadgiri Parikrama", "Personal Puja & Saryu Aarti", "Exclusive SUV Transport & 3★/4★ Hotels"],
  },
];

const trustBadges = [
  { icon: Star,         label: "GOOGLE RATED",      sub: "4.9/5 Star Rating" },
  { icon: ShieldCheck,  label: "GST REGISTERED",    sub: "100% Secure Billing" },
  { icon: Users,        label: "HAPPY TRAVELLERS",  sub: "50,000+ Journeys" },
  { icon: CheckCircle2, label: "24X7 ASSISTANCE",   sub: "On-Trip Support" }
];

export default function Hero() {
  const [activePkgIdx, setActivePkgIdx] = useState(0);
  const [isHovered, setIsHovered]       = useState(false);

  // Auto-slide every 4 seconds
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setActivePkgIdx(prev => (prev + 1) % heroPackages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isHovered]);

  const currentPkg = heroPackages[activePkgIdx];

  const handleNext = () => setActivePkgIdx(prev => (prev + 1) % heroPackages.length);
  const handlePrev = () => setActivePkgIdx(prev => (prev - 1 + heroPackages.length) % heroPackages.length);

  return (
    <section
      className="relative min-h-[90vh] flex flex-col items-center justify-between overflow-hidden bg-[#0A0300] pt-28 pb-8"
      id="home"
      data-section="hero"
    >
      {/* ── Background Hero Image & Overlay ── */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-35 scale-105 transition-transform duration-1000"
          style={{ backgroundImage: `url('/places/ram-mandir.jpg')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#080200]/85 via-[#100500]/75 to-[#0A0300]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0300]/90 via-transparent to-[#0A0300]/90" />
      </div>

      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[90vw] h-[55vh] pointer-events-none z-0"
        style={{
          background: "radial-gradient(ellipse at center bottom, rgba(255,107,0,0.22) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      {/* ── Main Hero Header ── */}
      <div className="relative z-20 w-full max-w-5xl mx-auto px-4 sm:px-6 text-center pt-2">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Badge / Pilgrimage Label */}
          <div className="inline-flex items-center gap-2 mb-3 bg-emerald-500/10 border border-emerald-500/30 backdrop-blur-md px-3.5 py-1 rounded-full text-emerald-400 font-inter text-[11px] sm:text-xs font-semibold tracking-wide uppercase shadow-[0_2px_12px_rgba(16,185,129,0.12)]">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            🚩 Shri Ram Janmabhoomi Pilgrimage 2025-2026
          </div>

          {/* Large Hero Title */}
          <h1 className="font-playfair font-bold text-3xl sm:text-5xl lg:text-6xl text-white mb-3 leading-tight tracking-tight drop-shadow-md max-w-4xl mx-auto">
            Ayodhya Ram Mandir <span className="text-saffron-400">Tour Packages</span>
          </h1>

          {/* Short Description */}
          <p className="text-white/85 text-xs sm:text-base font-inter font-light max-w-2xl mx-auto leading-relaxed mb-4">
            Book authentic Ram Mandir VIP Darshan, Saryu Aarti, and customized pilgrimage tour packages for Ayodhya, Varanasi & Prayagraj with private AC transport and best hotel stay.
          </p>
        </motion.div>
      </div>

      {/* ── Auto-Sliding 5 Packages Carousel ── */}
      <div
        className="relative z-20 w-full max-w-4xl mx-auto px-3 sm:px-6 my-2"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="bg-[#180A04]/90 backdrop-blur-xl border border-gold-500/35 rounded-3xl p-4 sm:p-5 shadow-[0_12px_40px_rgba(0,0,0,0.6)] relative overflow-hidden">

          {/* Top Label */}
          <div className="flex items-center justify-between gap-2 mb-3 pb-2.5 border-b border-white/10">
            <div className="flex items-center gap-1.5 text-gold-400 font-bold text-[11px] sm:text-xs uppercase tracking-wider">
              <Sparkles size={14} />
              <span>Featured Package ({activePkgIdx + 1}/5)</span>
            </div>
            <div className="text-saffron-400 text-[10px] sm:text-xs font-semibold bg-saffron-500/10 px-2.5 py-0.5 rounded-full border border-saffron-500/20">
              {currentPkg.tag}
            </div>
          </div>

          {/* Active Package Card Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPkg.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center"
            >
              {/* Left Details */}
              <div className="md:col-span-7 text-left space-y-2.5">
                <h3 className="font-playfair font-bold text-xl sm:text-2xl text-white leading-snug">
                  {currentPkg.name}
                </h3>

                <div className="flex flex-wrap items-center gap-2 text-xs">
                  <span className="inline-flex items-center gap-1 text-gold-300 bg-gold-500/10 px-2.5 py-1 rounded-full border border-gold-500/20 font-semibold">
                    <Clock size={12} /> {currentPkg.duration}
                  </span>
                  <span className="inline-flex items-center gap-1 text-white/70 bg-white/5 px-2.5 py-1 rounded-full border border-white/10">
                    <MapPin size={12} /> {currentPkg.cities.join(" · ")}
                  </span>
                </div>

                {/* Highlights List */}
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 pt-1">
                  {currentPkg.highlights.map((h, idx) => (
                    <li key={idx} className="flex items-center gap-1.5 text-white/80 text-[11px] sm:text-xs">
                      <span className="text-saffron-400 font-bold">✓</span> {h}
                    </li>
                  ))}
                </ul>

                {/* Pricing & CTA */}
                <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-white/50 text-[11px]">Starts:</span>
                      <span className="text-saffron-400 font-playfair font-bold text-2xl">{currentPkg.price}</span>
                    </div>
                    <div className="text-white/45 text-[10px]">{currentPkg.priceNote}</div>
                  </div>

                  <div className="flex items-center gap-2">
                    <a
                      href={`/packages/${currentPkg.id}`}
                      className="liquid-glass-btn-primary text-white text-xs font-bold px-4 py-2.5 rounded-full transition-transform hover:scale-105 shadow-md"
                    >
                      View Details
                    </a>
                    <a
                      href="#get-quote"
                      className="liquid-glass-btn-secondary text-white text-xs font-bold px-4 py-2.5 rounded-full transition-transform hover:scale-105"
                    >
                      Get Quote
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Image */}
              <div className="md:col-span-5 relative h-36 sm:h-44 rounded-2xl overflow-hidden border border-white/15 shadow-xl hidden md:block">
                <img
                  src={currentPkg.image}
                  alt={currentPkg.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls: Arrows + Dots */}
          <div className="mt-3 pt-3 border-t border-white/10 flex items-center justify-between">
            <button
              onClick={handlePrev}
              className="p-1.5 rounded-full bg-white/5 hover:bg-white/15 text-white/80 transition-all border border-white/10"
              aria-label="Previous package"
            >
              <ChevronLeft size={18} />
            </button>

            {/* 5 Dots Indicator */}
            <div className="flex items-center gap-2">
              {heroPackages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActivePkgIdx(i)}
                  className={`transition-all duration-300 rounded-full ${
                    activePkgIdx === i
                      ? "w-7 h-2 bg-saffron-500 shadow-[0_0_10px_rgba(255,107,0,0.6)]"
                      : "w-2 h-2 bg-white/20 hover:bg-white/40"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="p-1.5 rounded-full bg-white/5 hover:bg-white/15 text-white/80 transition-all border border-white/10"
              aria-label="Next package"
            >
              <ChevronRight size={18} />
            </button>
          </div>

        </div>
      </div>

      {/* ── 4 Trust / USP Badges Grid (4 Distinct Card Boxes) ── */}
      <div className="relative z-20 w-full max-w-5xl mx-auto px-4 sm:px-6 pt-2 flex-shrink-0">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 w-full">
          {trustBadges.map((badge, i) => (
            <div
              key={i}
              className="bg-[#180A04]/90 backdrop-blur-md rounded-2xl p-4 border border-gold-500/30 shadow-[0_4px_20px_rgba(0,0,0,0.4)] flex flex-col items-center justify-center text-center gap-2.5 hover:border-gold-400 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-full bg-gold-500/10 border border-gold-500/30 flex items-center justify-center flex-shrink-0">
                <badge.icon size={18} className="text-gold-400" />
              </div>
              <div>
                <div className="text-white font-bold text-[11px] sm:text-xs uppercase tracking-wider leading-tight">
                  {badge.label}
                </div>
                <div className="text-white/60 text-[10px] sm:text-[11px] mt-1 leading-tight">
                  {badge.sub}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
