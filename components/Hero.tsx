"use client";

import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Star, ShieldCheck, Users, ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react";

const WA_NUMBER = "917011960307";

const slides = [
  {
    id: "ayodhya-same-day",
    title: "Ayodhya Same Day Tour",
    description: "Quick single-day direct pilgrimage featuring priority support for Ram Mandir, Hanuman Garhi, and Saryu River.",
    duration: "1 Day",
    price: 5999,
    priceSuffix: " (For 3 Pax)",
    image: "/places/ram-ki-paidi.jpg",
    waMsg: "Jai Shri Ram 🙏 I want to book the Ayodhya Same Day Tour (₹5,999 for up to 3 Pax). Please share details."
  },
  {
    id: "varanasi-same-day",
    title: "Varanasi Same Day Tour",
    description: "Complete Kashi darshan including Kashi Vishwanath corridor, evening Ganga Aarti boat ride, and Sarnath excursion.",
    duration: "1 Day",
    price: 7999,
    priceSuffix: " (For 3 Pax)",
    image: "/places/assi-ghat.jpg",
    waMsg: "Jai Shri Ram 🙏 I want to book the Varanasi Same Day Tour (₹7,999 for up to 3 Pax). Please share details."
  },
  {
    id: "ayodhya-1n2d",
    title: "Ayodhya Yatra (1N/2D)",
    description: "Devotional overnight stay in the sacred land of Ram Mandir, Kanak Bhawan, Hanuman Garhi, and sunset Saryu Aarti.",
    duration: "2 Days",
    price: 9998,
    priceSuffix: " / Person",
    image: "/places/ram-mandir.jpg",
    waMsg: "Jai Shri Ram 🙏 I want to book the Ayodhya Yatra 1N/2D package (₹4,999/person). Please share details."
  },
  {
    id: "varanasi-1n2d",
    title: "Varanasi Yatra (1N/2D)",
    description: "Experience the timeless spiritual energy of Varanasi with Kashi Vishwanath darshan, Ganga Aarti, and Subah-e-Banaras.",
    duration: "2 Days",
    price: 9998,
    priceSuffix: " / Person",
    image: "/places/ganga-aarti.jpg",
    waMsg: "Jai Shri Ram 🙏 I want to book the Varanasi Yatra 1N/2D package (₹4,999/person). Please share details."
  }
];

const trustBadges = [
  { icon: Star,         label: "GOOGLE RATED",      sub: "4.9/5 Star Rating" },
  { icon: ShieldCheck,  label: "GST REGISTERED",    sub: "100% Secure Billing" },
  { icon: Users,        label: "HAPPY TRAVELLERS",  sub: "12,000+ Journeys" },
  { icon: CheckCircle2, label: "24X7 ASSISTANCE",   sub: "On-Trip Support" }
];



export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  const startAutoPlay = () => {
    stopAutoPlay();
    autoPlayRef.current = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
  };

  const stopAutoPlay = () => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }
  };

  useEffect(() => {
    startAutoPlay();
    return () => stopAutoPlay();
  }, []);

  const handlePrev = () => {
    stopAutoPlay();
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    startAutoPlay();
  };

  const handleNext = () => {
    stopAutoPlay();
    setDirection(1);
    setCurrent((prev) => (prev + 1) % slides.length);
    startAutoPlay();
  };

  const handleDotClick = (index: number) => {
    stopAutoPlay();
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
    startAutoPlay();
  };

  const activeSlide = slides[current];

  const handleSelectPackage = (packageId: string) => {
    const event = new CustomEvent("select-tour", {
      detail: { tourId: packageId, mode: "confirm" }
    });
    window.dispatchEvent(event);
  };

  const displayPrice = activeSlide.priceSuffix.includes("Pax") ? activeSlide.price : (activeSlide.price / 2);

  return (
    <section
      className="relative min-h-[100svh] flex flex-col items-center justify-between overflow-hidden bg-[#0A0300]"
      id="home"
      data-section="hero"
    >
      {/* ── Background Carousel Images ── */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence initial={false} mode="popLayout">
          <motion.div
            key={current}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 0.45, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${activeSlide.image})` }}
          />
        </AnimatePresence>
        
        <div className="absolute inset-0 bg-gradient-to-b from-[#080200]/70 via-[#100500]/60 to-[#0A0300]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0300]/80 via-transparent to-[#0A0300]/80" />
      </div>

      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[90vw] h-[65vh] pointer-events-none z-0"
        style={{
          background: "radial-gradient(ellipse at center bottom, rgba(255,107,0,0.2) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      {/* ── Navigation Arrows ── */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full border border-white/20 hover:border-white/50 text-white/70 hover:text-white bg-black/25 hover:bg-black/45 flex items-center justify-center transition-all duration-200 hidden md:flex"
        aria-label="Previous Slide"
      >
        <ChevronLeft size={22} />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full border border-white/20 hover:border-white/50 text-white/70 hover:text-white bg-black/25 hover:bg-black/45 flex items-center justify-center transition-all duration-200 hidden md:flex"
        aria-label="Next Slide"
      >
        <ChevronRight size={22} />
      </button>

      <div className="h-28 flex-shrink-0" />

      {/* ── Main Content Carousel ── */}
      <div className="relative z-20 w-full max-w-5xl mx-auto px-5 sm:px-8 flex-1 flex flex-col justify-center text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="inline-flex items-center gap-1.5 mb-5 bg-emerald-500/10 border border-emerald-500/25 px-3 py-1 rounded-full text-emerald-400 font-inter text-[11px] font-medium tracking-wide uppercase shadow-[0_2px_12px_rgba(16,185,129,0.08)]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Govt. Registered Agency (GSTIN: 09CJPPJ6346G1ZR)
            </div>

            <h1 className="font-playfair font-bold text-4xl sm:text-5xl lg:text-7.5xl text-white mb-4 leading-tight tracking-tight drop-shadow-md">
              {activeSlide.title}
            </h1>

            <p className="text-white/75 text-sm sm:text-base lg:text-lg font-inter font-light max-w-2xl mx-auto leading-relaxed mb-6">
              {activeSlide.description}
            </p>

            {/* Price badge formatted according to instructions */}
            <div className="inline-flex items-center justify-center gap-2 bg-black/45 border border-white/10 backdrop-blur-md rounded-full px-5 py-3.5 mb-8 shadow-inner select-none text-xs sm:text-sm">
              <span className="text-white/60 font-semibold uppercase tracking-wider pr-3 border-r border-white/15">
                {activeSlide.duration}
              </span>
              <span className="text-white/70 font-medium pl-1">Starting From</span>
              <span className="text-saffron-400 font-playfair font-bold text-lg sm:text-xl leading-none">
                ₹{displayPrice.toLocaleString("en-IN")}
              </span>
              <span className="text-white/50 font-medium">{activeSlide.priceSuffix}</span>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-md mx-auto mb-6">
              <a
                href="#get-quote"
                onClick={() => handleSelectPackage(activeSlide.id)}
                className="wa-shimmer bg-saffron-gradient hover:brightness-105 text-white px-7 py-3.5 rounded-full font-bold text-[14px] sm:text-base transition-all duration-300 hover:scale-[1.04] active:scale-[0.97] w-full justify-center text-center shadow-[0_4px_24px_rgba(255,107,0,0.25)] flex items-center"
                data-cta="scroll-quote"
                data-source="hero-slide"
              >
                Get Free Itinerary
              </a>

              <a
                href="tel:+919235222399"
                className="flex items-center gap-2 border border-white/20 hover:border-white/50 text-white px-6 py-3.5 rounded-full font-semibold text-[14px] sm:text-base backdrop-blur-sm hover:bg-white/[0.05] transition-all duration-300 w-full justify-center"
                data-cta="call"
                data-source="hero-slide"
              >
                <Phone size={15} />
                Call Now: +91 9235222399
              </a>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="flex items-center justify-center gap-2.5 mt-4 mb-8">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => handleDotClick(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                current === idx ? "w-7 bg-saffron-500" : "w-2 bg-white/25 hover:bg-white/45"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      <div className="relative z-20 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 flex-shrink-0 flex flex-col items-center">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-6" />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-4 gap-x-6 w-full max-w-4xl justify-center text-center md:text-left mb-6">
          {trustBadges.map((badge, i) => (
            <div key={i} className="flex flex-col md:flex-row items-center gap-2 md:gap-3 text-white/70 justify-center md:justify-start">
              <div className="w-8 h-8 rounded-full bg-white/[0.05] border border-white/[0.12] flex items-center justify-center flex-shrink-0">
                <badge.icon size={14} className="text-gold-400" />
              </div>
              <div className="text-center md:text-left">
                <div className="text-white/90 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider leading-tight">
                  {badge.label}
                </div>
                <div className="text-white/40 text-[9px] sm:text-[10px] mt-0.5 leading-tight">
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
