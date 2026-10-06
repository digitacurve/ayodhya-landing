"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X, MessageCircle, ChevronDown } from "lucide-react";
import Image from "next/image";
import { packages } from "@/data/packagesData";
import { siteConfig } from "@/data/siteConfig";

const WA_NUMBER   = siteConfig.whatsappNumber;
const PHONE       = siteConfig.phoneDisplay;
const PHONE_TEL   = `tel:${siteConfig.telephone}`;
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
        className={`fixed left-0 right-0 z-40 transition-all duration-300 px-3 sm:px-6 ${
          scrolled ? "top-2 sm:top-3" : "top-3 sm:top-5"
        }`}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      >
        <nav className="relative max-w-7xl mx-auto h-15 sm:h-16 px-4 sm:px-6 flex items-center justify-between liquid-glass-nav rounded-2xl sm:rounded-full">

          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-2.5 group flex-shrink-0 relative z-10"
            aria-label="Ayodhya Dharshan"
          >
            <div className="relative flex-shrink-0 w-[38px] h-[38px] md:w-[48px] md:h-[48px]">
              <Image
                src="/logo.png"
                alt="Ayodhya Dharshan"
                fill
                sizes="(max-width: 768px) 38px, 48px"
                className="object-contain drop-shadow-sm"
                priority
              />
            </div>
            <div className="transition-colors duration-300 text-white">
              <div className="font-playfair font-bold text-[14px] sm:text-[15px] leading-tight tracking-wide">
                Ayodhya Dharshan
              </div>
              <div className="text-[8px] sm:text-[9px] tracking-[0.22em] uppercase font-semibold text-gold-300">
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
                      className="text-[13px] font-medium tracking-wide hover:text-saffron-400 transition-colors duration-200 flex items-center gap-1 text-white/90"
                    >
                      <span>Packages</span>
                      <ChevronDown size={12} className={`transition-transform duration-250 ${desktopDropdownOpen ? "rotate-180" : ""}`} />
                    </a>

                    <AnimatePresence>
                      {desktopDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.96 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.96 }}
                          transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                          className="absolute left-0 mt-2 liquid-glass-dark rounded-2xl shadow-2xl py-3 w-80 z-50 text-white max-h-[360px] overflow-y-auto"
                        >
                          <a
                            href="/#packages"
                            onClick={() => setDesktopDropdownOpen(false)}
                            className="block px-4 py-2.5 hover:bg-white/10 transition-colors group border-b border-white/10 mb-1"
                          >
                            <div className="font-bold text-[13px] text-saffron-400 group-hover:text-saffron-300">
                              ⚡ View All Packages
                            </div>
                            <div className="text-[10px] text-white/60">
                              Browse all our main tour options
                            </div>
                          </a>
                          {packages.map(pkg => (
                            <a
                              key={pkg.id}
                              href={`/packages/${pkg.id}`}
                              onClick={() => setDesktopDropdownOpen(false)}
                              className="block px-4 py-2 hover:bg-white/10 transition-colors group"
                            >
                              <div className="font-semibold text-[13px] group-hover:text-saffron-300 text-white/90">
                                {pkg.name}
                              </div>
                              <div className="text-[10px] text-white/50">
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
                  className="text-[13px] font-medium tracking-wide hover:text-saffron-400 transition-colors duration-200 text-white/90"
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-1.5 text-[13px] font-semibold select-all text-white/90">
              <Phone size={14} className="text-saffron-400" />
              <span className="hidden lg:inline">{PHONE}</span>
            </div>

            <a
              href="/#get-quote"
              className="liquid-glass-btn-primary flex items-center justify-center text-white px-5 py-2 rounded-full text-[13px] font-semibold"
              data-cta="scroll-quote"
              data-source="navbar"
            >
              Book Now
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMenuOpen(o => !o)}
            className="md:hidden p-2 rounded-xl transition-all duration-300 z-20 relative text-white hover:bg-white/10"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile menu drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -16, scale: 0.96 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="fixed right-4 w-[240px] z-40 md:hidden liquid-glass-dark rounded-2xl shadow-2xl overflow-y-auto max-h-[60vh] top-[4.5rem] text-white"
          >
            <div className="p-3 sm:p-4 space-y-0.25">
              {/* Special Packages Dropdown for Mobile */}
              <div className="space-y-0.5">
                <button
                  onClick={() => setMobilePackagesOpen(o => !o)}
                  className="flex items-center justify-between w-full px-3.5 py-2 text-white font-medium rounded-xl hover:bg-white/10 transition-colors text-[13.5px]"
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
                      className="pl-3 overflow-hidden border-l border-white/15 ml-4 space-y-1.5 my-1"
                    >
                      <a
                        href="/#packages"
                        onClick={() => setMenuOpen(false)}
                        className="block py-0.5 text-saffron-400 hover:text-saffron-300 text-[12.5px] font-semibold"
                      >
                        ⚡ View All Packages
                      </a>
                      {packages.map(pkg => (
                        <a
                          key={pkg.id}
                          href={`/packages/${pkg.id}`}
                          onClick={() => setMenuOpen(false)}
                          className="block py-0.5 text-white/80 hover:text-saffron-300 text-[12.5px] truncate max-w-[200px]"
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
                  className="block px-3.5 py-2 text-white/90 font-medium rounded-xl hover:bg-white/10 transition-colors text-[13.5px]"
                >
                  {link.label}
                </motion.a>
              ))}
              <div className="pt-2 pb-0.5 space-y-2 border-t border-white/10 mt-1.5">
                <div className="flex items-center justify-center gap-2 w-full py-1 text-white/80 font-semibold text-[12px] select-all">
                  <Phone size={13} className="text-saffron-400" />
                  <span>Call: {PHONE}</span>
                </div>
                <a
                  href="/#get-quote"
                  onClick={() => setMenuOpen(false)}
                  className="liquid-glass-btn-primary flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-white font-semibold text-[13px]"
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
