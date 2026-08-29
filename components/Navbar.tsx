"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X, MessageCircle, ChevronDown } from "lucide-react";
import Image from "next/image";
import { packages } from "@/data/packagesData";

const WA_NUMBER   = "919235222399";
const PHONE       = "+91 9235222399";
const PHONE_TEL   = "tel:+919235222399";
const WA_MESSAGE  = encodeURIComponent(
  "Jai Shri Ram 🙏 I want to book an Ayodhya tour package. Please share full details."
);

const navLinks = [
  { label: "Packages",   href: "/#packages" },
  { label: "Itinerary",  href: "/#itinerary" },
  { label: "Why Us",     href: "/#why-us" },
  { label: "Reviews",    href: "/#testimonials" },
  { label: "FAQ",        href: "/#faq" },
];

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false);
  const [mobilePackagesOpen, setMobilePackagesOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      <motion.header
        className={`fixed left-0 right-0 z-40 transition-all duration-300 ${
          scrolled || menuOpen
            ? "top-0 bg-transparent"
            : "top-10 bg-transparent"
        }`}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      >
        <nav className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">

          {/* Mobile menu toggle (left-aligned on mobile) */}
          <button
            onClick={() => setMenuOpen(o => !o)}
            className={`md:hidden p-2 rounded-xl transition-colors relative z-10 ${
              scrolled || menuOpen ? "text-divine-dark hover:bg-gray-100" : "text-white hover:bg-white/10"
            }`}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          {/* Logo (absolute centered on mobile, left-aligned next to menu toggle on scroll, default on desktop) */}
          <a
            href="#"
            className={`flex items-center gap-2.5 group flex-shrink-0 transition-all duration-300 md:static md:translate-x-0 md:translate-y-0 ${
              scrolled ? "static translate-x-0 translate-y-0 ml-2" : "absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"
            }`}
            aria-label="Ayodhya Dharshan"
          >
            <div className="relative flex-shrink-0 w-[44px] h-[44px] md:w-[56px] md:h-[56px]">
              <Image
                src="/logo.png"
                alt="Ayodhya Dharshan"
                fill
                sizes="(max-width: 768px) 44px, 56px"
                className="object-contain drop-shadow-sm"
                priority
              />
            </div>
            <div className={`transition-colors duration-300 ${scrolled || menuOpen ? "text-divine-dark" : "text-white"}`}>
              <div className="font-playfair font-bold text-[15px] leading-tight tracking-wide">
                Ayodhya Dharshan
              </div>
              <div className={`text-[9px] tracking-[0.24em] uppercase font-semibold ${scrolled || menuOpen ? "text-saffron-600" : "text-gold-300"}`}>
                Premium Pilgrimage
              </div>
            </div>
          </a>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map(link => {
              if (link.label === "Packages") {
                return (
                  <div
                    key={link.label}
                    className="relative py-4"
                    onMouseEnter={() => setDesktopDropdownOpen(true)}
                    onMouseLeave={() => setDesktopDropdownOpen(false)}
                  >
                    <a
                      href="/#packages"
                      className={`text-[13px] font-medium tracking-wide hover:text-saffron-600 transition-colors duration-200 flex items-center gap-1 ${
                        scrolled ? "text-divine-dark/75" : "text-white/80"
                      }`}
                    >
                      <span>Packages</span>
                      <ChevronDown size={12} className={`transition-transform duration-250 ${desktopDropdownOpen ? "rotate-180" : ""}`} />
                    </a>

                    <AnimatePresence>
                      {desktopDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.15 }}
                          className="absolute left-0 mt-1 bg-white rounded-2xl shadow-2xl border border-gray-100 py-3 w-80 z-50 text-divine-dark max-h-[350px] overflow-y-auto"
                        >
                          <a
                            href="/#packages"
                            onClick={() => setDesktopDropdownOpen(false)}
                            className="block px-4 py-2 hover:bg-saffron-50 transition-colors group border-b border-gray-50 mb-1"
                          >
                            <div className="font-bold text-[13px] text-saffron-600 group-hover:text-saffron-700">
                              ⚡ View All Packages
                            </div>
                            <div className="text-[10px] text-gray-400">
                              Browse all our main tour options
                            </div>
                          </a>
                          {packages.map(pkg => (
                            <a
                              key={pkg.id}
                              href={`/packages/${pkg.id}`}
                              onClick={() => setDesktopDropdownOpen(false)}
                              className="block px-4 py-2 hover:bg-saffron-50 transition-colors group"
                            >
                              <div className="font-semibold text-[13px] group-hover:text-saffron-700 text-divine-dark">
                                {pkg.name}
                              </div>
                              <div className="text-[10px] text-gray-400">
                                {pkg.duration} · {pkg.cities.join(" - ")}
                              </div>
                            </a>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <a
                  key={link.label}
                  href={link.href}
                  className={`text-[13px] font-medium tracking-wide hover:text-saffron-600 transition-colors duration-200 ${
                    scrolled ? "text-divine-dark/75" : "text-white/80"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-4">
            <div className={`flex items-center gap-1.5 text-[13px] font-semibold select-all ${
              scrolled ? "text-divine-dark/75" : "text-white/80"
            }`}>
              <Phone size={14} className="text-saffron-500" />
              <span className="hidden lg:inline">{PHONE}</span>
            </div>

            <a
              href="/#get-quote"
              className="flex items-center justify-center bg-saffron-600 hover:bg-saffron-700 text-white px-5 py-2.5 rounded-full text-[13px] font-semibold transition-all duration-250 hover:shadow-saffron-glow hover:scale-[1.04] active:scale-[0.97]"
              data-cta="scroll-quote"
              data-source="navbar"
            >
              Book Now
            </a>
          </div>
        </nav>
      </motion.header>

      {/* Mobile menu drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className={`fixed left-4 w-[240px] z-40 md:hidden bg-white rounded-2xl shadow-2xl border border-gold-500/15 overflow-y-auto max-h-[50vh] transition-all duration-300 ${
              scrolled || menuOpen ? "top-[4.5rem]" : "top-[7rem]"
            }`}
          >
            <div className="p-3 sm:p-4 space-y-0.25">
              {/* Special Packages Dropdown for Mobile */}
              <div className="space-y-0.5">
                <button
                  onClick={() => setMobilePackagesOpen(o => !o)}
                  className="flex items-center justify-between w-full px-3.5 py-1.5 text-divine-dark font-medium rounded-lg hover:bg-saffron-50 hover:text-saffron-700 transition-colors text-[13.5px]"
                >
                  <span>Packages</span>
                  <ChevronDown size={14} className={`transition-transform duration-200 ${mobilePackagesOpen ? "rotate-180" : ""}`} />
                </button>
                
                <AnimatePresence>
                  {mobilePackagesOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="pl-3 overflow-hidden border-l border-saffron-200 ml-4 space-y-1.5 my-1"
                    >
                      <a
                        href="/#packages"
                        onClick={() => setMenuOpen(false)}
                        className="block py-0.5 text-saffron-600 hover:text-saffron-700 text-[12.5px] font-semibold"
                      >
                        ⚡ View All Packages
                      </a>
                      {packages.map(pkg => (
                        <a
                          key={pkg.id}
                          href={`/packages/${pkg.id}`}
                          onClick={() => setMenuOpen(false)}
                          className="block py-0.5 text-divine-dark/80 hover:text-saffron-700 text-[12.5px] truncate max-w-[200px]"
                        >
                          • {pkg.name}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Map other links except Packages */}
              {navLinks.filter(link => link.label !== "Packages").map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                  onClick={() => setMenuOpen(false)}
                  className="block px-3.5 py-1.5 text-divine-dark font-medium rounded-lg hover:bg-saffron-50 hover:text-saffron-700 transition-colors text-[13.5px]"
                >
                  {link.label}
                </motion.a>
              ))}
              <div className="pt-2 pb-0.5 space-y-1 border-t border-gray-50 mt-1.5">
                <div className="flex items-center justify-center gap-2 w-full py-1.5 text-divine-dark/70 font-semibold text-[12px] select-all">
                  <Phone size={13} className="text-saffron-500" />
                  <span>Call Support: {PHONE}</span>
                </div>
                <a
                  href="/#get-quote"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-saffron-600 text-white font-semibold text-[13px] hover:bg-saffron-700 transition-colors"
                  data-cta="scroll-quote"
                  data-source="navbar-mobile"
                >
                  Book Your Tour
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
