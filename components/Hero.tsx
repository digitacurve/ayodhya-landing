"use client";

import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Star, ShieldCheck, Users, CheckCircle2, MessageCircle } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

const WA_NUMBER   = siteConfig.whatsappNumber;
const PHONE       = siteConfig.phoneDisplay;
const PHONE_TEL   = `tel:${siteConfig.telephone}`;
const WA_MESSAGE  = encodeURIComponent(
  "Jai Shri Ram 🙏 I want to book an Ayodhya tour package. Please share full details and itinerary."
);

const trustBadges = [
  { icon: Star,         label: "GOOGLE RATED",      sub: "4.9/5 Star Rating" },
  { icon: ShieldCheck,  label: "GST REGISTERED",    sub: "100% Secure Billing" },
  { icon: Users,        label: "HAPPY TRAVELLERS",  sub: "50,000+ Journeys" },
  { icon: CheckCircle2, label: "24X7 ASSISTANCE",   sub: "On-Trip Support" }
];

export default function Hero() {
  return (
    <section
      className="relative min-h-[90vh] flex flex-col items-center justify-between overflow-hidden bg-[#0A0300] pt-28 pb-8"
      id="home"
      data-section="hero"
    >
      {/* ── Background Hero Image & Overlay ── */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 scale-105 transition-transform duration-1000"
          style={{ backgroundImage: `url('/places/ram-mandir.jpg')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#080200]/80 via-[#100500]/70 to-[#0A0300]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0300]/90 via-transparent to-[#0A0300]/90" />
      </div>

      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[90vw] h-[55vh] pointer-events-none z-0"
        style={{
          background: "radial-gradient(ellipse at center bottom, rgba(255,107,0,0.22) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      {/* ── Main Hero Content ── */}
      <div className="relative z-20 w-full max-w-5xl mx-auto px-4 sm:px-6 flex-1 flex flex-col justify-center text-center my-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Badge / Pilgrimage Label */}
          <div className="inline-flex items-center gap-2 mb-4 bg-emerald-500/10 border border-emerald-500/30 backdrop-blur-md px-3.5 py-1.5 rounded-full text-emerald-400 font-inter text-[11px] sm:text-xs font-semibold tracking-wide uppercase shadow-[0_2px_12px_rgba(16,185,129,0.12)]">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            🚩 Shri Ram Janmabhoomi Pilgrimage 2025-2026
          </div>

          {/* Large Hero Title */}
          <h1 className="font-playfair font-bold text-3xl sm:text-5xl lg:text-6xl text-white mb-4 leading-tight tracking-tight drop-shadow-md max-w-4xl mx-auto">
            Ayodhya Ram Mandir <span className="text-saffron-400">Tour Packages</span>
          </h1>

          {/* Short Description */}
          <p className="text-white/85 text-sm sm:text-base lg:text-lg font-inter font-light max-w-2xl mx-auto leading-relaxed mb-6">
            Book authentic Ram Mandir VIP Darshan, Saryu Aarti, and customized pilgrimage tour packages for Ayodhya, Varanasi & Prayagraj with private AC transport and best hotel stay.
          </p>

          {/* Starting Price Pill */}
          <div className="inline-flex items-center justify-center gap-2 liquid-glass-dark border border-gold-500/30 rounded-full px-5 py-2.5 mb-8 shadow-2xl select-none text-xs sm:text-sm">
            <span className="text-white/70 font-medium">Packages Starting From</span>
            <span className="text-saffron-400 font-playfair font-bold text-lg sm:text-xl leading-none">
              ₹7,499
            </span>
            <span className="text-white/50 font-medium">/ person (₹14,998 per couple)</span>
          </div>

          {/* CTAs: Primary + WhatsApp + Call */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-xl mx-auto mb-6">
            <a
              href="#get-quote"
              className="liquid-glass-btn-primary text-white px-7 py-3.5 rounded-full font-bold text-[14px] sm:text-base w-full sm:w-auto justify-center text-center flex items-center shadow-lg"
              data-cta="scroll-quote"
              data-source="hero"
            >
              Get Free Itinerary & Quote
            </a>

            <a
              href={`https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-3.5 rounded-full font-bold text-[14px] sm:text-base w-full sm:w-auto justify-center text-center flex items-center gap-2 transition-all duration-200 shadow-lg"
              data-cta="whatsapp-hero"
            >
              <MessageCircle size={18} />
              <span>WhatsApp Us</span>
            </a>

            <a
              href={PHONE_TEL}
              className="liquid-glass-btn-secondary text-white px-6 py-3.5 rounded-full font-bold text-[14px] sm:text-base w-full sm:w-auto justify-center text-center flex items-center gap-2"
              data-cta="call-hero"
            >
              <Phone size={16} className="text-saffron-400" />
              <span>Call {PHONE}</span>
            </a>
          </div>
        </motion.div>
      </div>

      {/* ── 4 Trust / USP Badges Grid (Exact Kashi Darshan Format) ── */}
      <div className="relative z-20 w-full max-w-5xl mx-auto px-4 sm:px-6 pt-4 flex-shrink-0">
        <div className="w-full liquid-glass-dark rounded-2xl p-4 sm:p-5 border border-white/12 shadow-2xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-4 gap-x-4 w-full justify-center text-center md:text-left">
            {trustBadges.map((badge, i) => (
              <div key={i} className="flex flex-col md:flex-row items-center gap-2 md:gap-3 text-white/75 justify-center md:justify-start">
                <div className="w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center flex-shrink-0">
                  <badge.icon size={14} className="text-gold-400" />
                </div>
                <div className="text-center md:text-left">
                  <div className="text-white/95 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider leading-tight">
                    {badge.label}
                  </div>
                  <div className="text-white/50 text-[9px] sm:text-[10px] mt-0.5 leading-tight">
                    {badge.sub}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
