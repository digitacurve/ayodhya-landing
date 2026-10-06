"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Star, ShieldCheck, Users, Headphones, ChevronLeft, ChevronRight } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

const PHONE       = siteConfig.phoneDisplay;
const PHONE_TEL   = `tel:${siteConfig.telephone}`;

const heroSlides = [
  {
    id: "ayodhya-darshan",
    badge: "AYODHYA",
    title: "Ayodhya Darshan",
    subtitle: "Seek blessings at Shri Ram Janmabhoomi Mandir, witness evening Saryu Aarti, and explore Ayodhya Dham.",
    duration: "2 NIGHTS / 3 DAYS",
    price: "₹7,499",
    priceSuffix: "/ Person",
    image: "/places/ram-mandir.jpg",
  },
  {
    id: "ayodhya-varanasi",
    badge: "AYODHYA & VARANASI",
    title: "Ayodhya & Varanasi Yatra",
    subtitle: "Combine Shri Ram Mandir darshan with Kashi Vishwanath Jyotirlinga and world-famous evening Ganga Aarti.",
    duration: "3 NIGHTS / 4 DAYS",
    price: "₹12,999",
    priceSuffix: "/ Person",
    image: "/places/ganga-aarti.jpg",
  },
  {
    id: "ayodhya-prayagraj-varanasi",
    badge: "AYODHYA · PRAYAGRAJ · VARANASI",
    title: "Ayodhya Prayagraj Varanasi",
    subtitle: "Complete tirthdham circuit with holy Triveni Sangam dip, Ram Mandir darshan, and Kashi Vishwanath corridor.",
    duration: "4 NIGHTS / 5 DAYS",
    price: "₹15,999",
    priceSuffix: "/ Person",
    image: "/places/ram-ki-paidi.jpg",
  },
  {
    id: "lucknow-ayodhya",
    badge: "LUCKNOW & AYODHYA",
    title: "Lucknow & Ayodhya Heritage Tour",
    subtitle: "Experience Bara Imambara, Awadhi culture, and heritage monuments combined with sacred Ram Mandir darshan.",
    duration: "3 NIGHTS / 4 DAYS",
    price: "₹14,999",
    priceSuffix: "/ Person",
    image: "/places/bara-imambara.jpg",
  },
  {
    id: "full-circuit",
    badge: "FULL RAMAYANA CIRCUIT",
    title: "Full Ramayana Circuit Yatra",
    subtitle: "Trace Lord Ram's sacred journey covering Ayodhya, Prayagraj, Chitrakoot, and Varanasi.",
    duration: "5 NIGHTS / 6 DAYS",
    price: "₹18,499",
    priceSuffix: "/ Person",
    image: "/places/chitrakoot-ramghat.jpg",
  },
];

const trustBadges = [
  { icon: Star,        label: "GOOGLE RATED",     sub: "4.9/5 Star Rating" },
  { icon: ShieldCheck, label: "GST REGISTERED",   sub: "GSTIN: 09CJPPJ6346G1ZR" },
  { icon: Users,       label: "HAPPY TRAVELLERS", sub: "50,000+ Journeys" },
  { icon: Headphones,  label: "24X7 ASSISTANCE",  sub: "On-Trip Support" },
];

export default function Hero() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isHovered, setIsHovered]   = useState(false);

  // Auto-slide every 4 seconds
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % heroSlides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isHovered]);

  const slide = heroSlides[currentIdx];

  const handleNext = () => setCurrentIdx((prev) => (prev + 1) % heroSlides.length);
  const handlePrev = () => setCurrentIdx((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);

  return (
    <section
      className="relative min-h-[92vh] flex flex-col justify-between overflow-hidden bg-[#0A0300] pt-28 pb-8"
      id="home"
      data-section="hero"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* ── Dynamic Background Image with Smooth Crossfade ── */}
      <AnimatePresence mode="wait">
        <motion.div
          key={slide.id}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0 z-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
            style={{ backgroundImage: `url('${slide.image}')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#080200]/85 via-[#100500]/75 to-[#0A0300]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0300]/90 via-transparent to-[#0A0300]/90" />
        </motion.div>
      </AnimatePresence>

      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[90vw] h-[55vh] pointer-events-none z-0"
        style={{
          background: "radial-gradient(ellipse at center bottom, rgba(255,107,0,0.25) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      {/* ── Side Navigation Arrows ── */}
      <button
        onClick={handlePrev}
        className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/50 hover:bg-black/80 border border-white/20 text-white flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 shadow-xl"
        aria-label="Previous Package"
      >
        <ChevronLeft size={22} />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/50 hover:bg-black/80 border border-white/20 text-white flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 shadow-xl"
        aria-label="Next Package"
      >
        <ChevronRight size={22} />
      </button>

      {/* ── Main Hero Content Slide ── */}
      <div className="relative z-20 w-full max-w-4xl mx-auto px-6 text-center my-auto flex-1 flex flex-col justify-center items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center"
          >
            {/* Top Destination Pill Badge */}
            <div className="inline-flex items-center gap-2 mb-4 bg-saffron-500/10 border border-gold-500/35 backdrop-blur-md px-4 py-1 rounded-full text-gold-400 font-inter text-[11px] sm:text-xs font-bold tracking-[0.2em] uppercase shadow-lg">
              {slide.badge}
            </div>

            {/* Huge Package Title */}
            <h1 className="font-playfair font-bold text-3xl sm:text-5xl lg:text-6xl text-white mb-4 leading-tight tracking-tight drop-shadow-md max-w-3xl">
              {slide.title}
            </h1>

            {/* Subtitle */}
            <p className="text-white/85 text-xs sm:text-base lg:text-lg font-inter font-light max-w-2xl leading-relaxed mb-6">
              {slide.subtitle}
            </p>

            {/* Duration & Price Tag Pill */}
            <div className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-3 bg-black/60 backdrop-blur-md border border-white/15 rounded-full px-5 py-2.5 mb-8 shadow-2xl text-xs sm:text-sm">
              <span className="text-white/70 font-semibold tracking-wider uppercase text-[10px] sm:text-xs">
                {slide.duration}
              </span>
              <span className="text-white/30">•</span>
              <span className="text-saffron-400 font-playfair font-bold text-base sm:text-xl">
                Starting From {slide.price} <span className="text-white/60 font-sans text-xs font-normal">{slide.priceSuffix}</span>
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full max-w-md">
              <a
                href="#get-quote"
                className="liquid-glass-btn-primary text-white px-7 py-3.5 rounded-full font-bold text-xs sm:text-sm w-full sm:w-auto justify-center text-center flex items-center shadow-lg hover:scale-105 transition-transform"
                data-cta="scroll-quote"
                data-source="hero"
              >
                Get Free Itinerary
              </a>

              <a
                href={PHONE_TEL}
                className="liquid-glass-btn-secondary text-white px-6 py-3.5 rounded-full font-bold text-xs sm:text-sm w-full sm:w-auto justify-center text-center flex items-center gap-2 hover:scale-105 transition-transform"
                data-cta="call-hero"
              >
                <Phone size={15} className="text-saffron-400" />
                <span>Call Now {PHONE}</span>
              </a>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ── 4 Trust Badges Grid + Dots ── */}
      <div className="relative z-20 w-full max-w-5xl mx-auto px-4 sm:px-6 pt-4 flex-shrink-0">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 w-full">
          {trustBadges.map((badge, i) => (
            <div
              key={i}
              className="bg-[#140803]/85 backdrop-blur-md rounded-2xl p-3.5 sm:p-4 border border-white/12 shadow-xl flex flex-col items-center justify-center text-center gap-2 hover:border-gold-500/40 transition-all duration-300"
            >
              <div className="w-8 h-8 rounded-full bg-gold-500/10 border border-gold-500/30 flex items-center justify-center flex-shrink-0">
                <badge.icon size={15} className="text-gold-400" />
              </div>
              <div>
                <div className="text-white font-bold text-[10px] sm:text-[11px] uppercase tracking-wider leading-tight">
                  {badge.label}
                </div>
                <div className="text-white/55 text-[9px] sm:text-[10px] mt-0.5 leading-tight">
                  {badge.sub}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Slide Dots Indicator */}
        <div className="flex items-center justify-center gap-2 mt-4">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIdx(i)}
              className={`transition-all duration-300 rounded-full ${
                currentIdx === i
                  ? "w-7 h-2 bg-saffron-500 shadow-[0_0_10px_rgba(255,107,0,0.6)]"
                  : "w-2 h-2 bg-white/25 hover:bg-white/45"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
