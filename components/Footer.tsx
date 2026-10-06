"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, MapPin, Instagram, Facebook, Youtube, ChevronDown, AlertCircle, CreditCard, RefreshCw, Ban } from "lucide-react";
import Image from "next/image";
import { siteConfig } from "@/data/siteConfig";

const EMAIL        = siteConfig.email;
const PHONE_DISPLAY = siteConfig.phoneDisplay;

const socialLinks = [
  {
    Icon: Instagram,
    label: "Instagram",
    href: "https://www.instagram.com/ayodhyadharshan/",
    hoverColor: "hover:bg-[#E1306C]/20 hover:border-[#E1306C]/40 hover:text-[#E1306C]",
  },
  {
    Icon: Facebook,
    label: "Facebook",
    href: "https://www.facebook.com/Ayodhhyadharsha/",
    hoverColor: "hover:bg-[#1877F2]/20 hover:border-[#1877F2]/40 hover:text-[#1877F2]",
  },
  {
    Icon: Youtube,
    label: "YouTube",
    href: "https://www.youtube.com/@AyodhyaDharshan_official",
    hoverColor: "hover:bg-[#FF0000]/20 hover:border-[#FF0000]/40 hover:text-[#FF0000]",
  },
];

const footerLinks = {
  packages: [
    { label: "Ayodhya Darshan (2N/3D)",           href: "/packages/ayodhya-darshan-2n3d" },
    { label: "Ayodhya Varanasi (3N/4D)",          href: "/packages/ayodhya-varanasi-3n4d" },
    { label: "Ayodhya Prayagraj (4N/5D)",         href: "/packages/ayodhya-prayagraj-varanasi-4n5d" },
    { label: "Lucknow Ayodhya (3N/4D)",           href: "/packages/lucknow-ayodhya-3n4d" },
    { label: "Varanasi Chitrakoot (4N/5D)",        href: "/packages/ayodhya-varanasi-chitrakoot-4n5d" },
    { label: "Ramayana Circuit (5N/6D)",          href: "/packages/ayodhya-prayagraj-varanasi-chitrakoot-5n6d" },
  ],
  destinations: [
    { label: "Ram Mandir Darshan",  href: "/#packages" },
    { label: "Hanuman Garhi",       href: "/#packages" },
    { label: "Kanak Bhawan",        href: "/#packages" },
    { label: "Saryu River Ghat",    href: "/#packages" },
    { label: "Naimisharanya",       href: "/#packages" },
  ],
  company: [
    { label: "About Us",       href: "/#why-us" },
    { label: "Why Choose Us",  href: "/#why-us" },
    { label: "Testimonials",   href: "/#testimonials" },
    { label: "FAQ",            href: "/#faq" },
  ],
};

const policyItems = [
  {
    icon: CreditCard,
    title: "Advance Payment",
    color: "#D4AF37",
    points: [
      "Pay 20% advance to reserve your seat.",
      "Balance paid after check-in at hotel.",
      "Flight bookings require 100% advance.",
    ],
  },
  {
    icon: CreditCard,
    title: "Credit Card Charges",
    color: "#60A5FA",
    points: [
      "2.5% gateway charge for Indian cards.",
      "4.5% gateway charge for international cards.",
    ],
  },
  {
    icon: RefreshCw,
    title: "Rescheduling",
    color: "#FB923C",
    points: ["25% rescheduling charges applicable."],
  },
  {
    icon: Ban,
    title: "Cancellation Policy",
    color: "#F87171",
    points: [
      "Booking amount is non-refundable.",
      "Inform at least 7 days prior to arrival.",
      "Within 7 days: 100% tour cost charged.",
    ],
  },
];

function PolicyAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-2 gap-2">
      {policyItems.map((item, i) => {
        const isOpen = openIndex === i;
        const Icon   = item.icon;
        return (
          <div
            key={item.title}
            className={`rounded-xl border transition-all duration-300 overflow-hidden ${
              isOpen
                ? "col-span-2 border-white/[0.14] bg-white/[0.06]"
                : "col-span-1 border-white/[0.06] bg-white/[0.02] hover:border-white/[0.1]"
            }`}
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="w-full flex items-center justify-between gap-1.5 px-3 py-2.5 text-left"
              aria-expanded={isOpen}
            >
              <div className="flex items-center gap-2 min-w-0">
                <div
                  className="w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: `${item.color}18` }}
                >
                  <Icon size={12} style={{ color: item.color }} />
                </div>
                <span className="text-white/80 text-[11px] sm:text-xs font-medium truncate">{item.title}</span>
              </div>
              <ChevronDown
                size={12}
                className={`text-white/40 transition-transform duration-300 flex-shrink-0 ${isOpen ? "rotate-180" : ""}`}
              />
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="px-3 pb-3">
                    <div className="h-px bg-white/[0.06] mb-2.5" />
                    <ul className="space-y-1.5">
                      {item.points.map((point, j) => (
                        <li key={j} className="flex items-start gap-2">
                          <span
                            className="mt-[5px] w-1.5 h-1.5 rounded-full flex-shrink-0"
                            style={{ backgroundColor: item.color }}
                          />
                          <span className="text-white/70 text-[11px] leading-relaxed">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#0D0400] border-t border-white/5">
      {/* Main footer section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8">

          {/* Brand column */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-4 mb-4">
              <div className="relative flex-shrink-0 w-[60px] h-[60px] sm:w-[72px] sm:h-[72px]">
                <Image
                  src="/logo.png"
                  alt="Ayodhya Dharshan"
                  fill
                  sizes="72px"
                  className="object-contain"
                />
              </div>
              <div>
                <div className="font-playfair font-bold text-white text-lg sm:text-xl leading-tight tracking-wide">
                  Ayodhya Dharshan
                </div>
                <div className="text-saffron-500 text-[9px] sm:text-[10px] tracking-[0.24em] uppercase mt-0.5">
                  Premium Pilgrimage Specialists
                </div>
              </div>
            </div>

            <p className="text-white/40 text-xs sm:text-sm leading-relaxed mb-4 max-w-sm">
              India&apos;s most trusted Ayodhya pilgrimage specialists. Serving 50,000+ devotees
              since 2009 with premium yatra experiences, VIP darshan arrangements, and
              unforgettable spiritual journeys.
            </p>

            {/* Contact */}
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-center gap-2.5 text-white/50 text-xs sm:text-sm select-all">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0">
                  <Phone size={13} className="text-saffron-500" />
                </div>
                {PHONE_DISPLAY}
              </div>
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center gap-2.5 text-white/50 hover:text-white text-xs sm:text-sm transition-colors group"
              >
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-saffron-600/20 transition-colors flex-shrink-0">
                  <Mail size={13} className="text-saffron-500" />
                </div>
                {EMAIL}
              </a>
              <div className="flex items-start gap-2.5 text-white/50 text-xs sm:text-sm">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin size={13} className="text-saffron-500" />
                </div>
                <span>
                  Second Floor, Plot No 12, Transport Nagar, Ayodhya, UP — 224001
                </span>
              </div>
            </div>

            {/* Quote CTA */}
            <a
              href="/#get-quote"
              className="inline-flex items-center justify-center gap-2 mt-5 bg-saffron-600 hover:bg-saffron-700 text-white px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all hover:scale-105 active:scale-95"
              data-cta="scroll-quote"
              data-source="footer"
            >
              Get Free Tour Quote
            </a>
          </div>

          {/* 3 Columns Row on Mobile: Packages | Temples | Company */}
          <div className="lg:col-span-8 grid grid-cols-3 gap-2 sm:gap-6">
            
            {/* Packages */}
            <div>
              <h4 className="text-white font-semibold text-[11px] sm:text-xs tracking-wider uppercase mb-3">
                Our Packages
              </h4>
              <ul className="space-y-2">
                {footerLinks.packages.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-white/50 hover:text-saffron-400 text-[11px] sm:text-xs transition-colors leading-tight block"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Temples */}
            <div>
              <h4 className="text-white font-semibold text-[11px] sm:text-xs tracking-wider uppercase mb-3">
                Temples
              </h4>
              <ul className="space-y-2">
                {footerLinks.destinations.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-white/50 hover:text-saffron-400 text-[11px] sm:text-xs transition-colors leading-tight block"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-white font-semibold text-[11px] sm:text-xs tracking-wider uppercase mb-3">
                Company
              </h4>
              <ul className="space-y-2">
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-white/50 hover:text-saffron-400 text-[11px] sm:text-xs transition-colors leading-tight block"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Social + Booking Policy Container */}
          <div className="lg:col-span-12 pt-4 border-t border-white/5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
              <div>
                <h4 className="text-white font-semibold text-[11px] sm:text-xs tracking-[0.2em] uppercase mb-2">
                  Follow Us
                </h4>
                <div className="flex gap-2">
                  {socialLinks.map(({ Icon, label, href, hoverColor }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className={`w-8 h-8 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/50 transition-all duration-250 ${hoverColor}`}
                    >
                      <Icon size={15} />
                    </a>
                  ))}
                </div>
              </div>

              <div className="flex-1 sm:max-w-xl sm:ml-auto">
                <div className="flex items-center gap-2 mb-2">
                  <AlertCircle size={13} className="text-saffron-400 flex-shrink-0" />
                  <h4 className="text-white font-semibold text-[11px] sm:text-xs tracking-[0.2em] uppercase">
                    Booking Policy
                  </h4>
                </div>
                <PolicyAccordion />
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Divider */}
      <div
        className="w-full h-px"
        style={{
          background: "linear-gradient(90deg, transparent 0%, rgba(255,107,0,0.2) 30%, rgba(212,175,55,0.2) 50%, rgba(255,107,0,0.2) 70%, transparent 100%)",
        }}
      />

      {/* Bottom bar */}
      <div className="py-4 sm:py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <p className="text-white/30 text-[11px]">
            © 2025 Ayodhya Dharshan. All rights reserved. |{" "}
            <span className="text-saffron-600/70 font-medium">Jai Shri Ram 🙏</span>
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-5 text-white/30 text-[11px]">
            <span className="text-white/50 font-medium">GSTIN: 09CJPPJ6346G1ZR</span>
            <span className="text-white/10">•</span>
            <span>IATA Certified</span>
            <span className="text-white/10">•</span>
            <span>Ministry of Tourism Registered</span>
            <span className="text-white/10">•</span>
            <span>UP Tourism Registered</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
