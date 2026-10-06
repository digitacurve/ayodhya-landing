"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Compass,
  IndianRupee,
  Building2,
  Car,
  HeadphonesIcon,
  ShieldCheck,
  Award,
} from "lucide-react";

const usps = [
  {
    icon: Compass,
    title: "Experienced Tour Operators",
    description: "Over 15 years of curating flawless pilgrimage journeys with deep local knowledge of sacred rituals.",
  },
  {
    icon: IndianRupee,
    title: "Affordable Luxury Packages",
    description: "Transparent pricing with no hidden charges. Premium service tailored to suit your spiritual needs and budget.",
  },
  {
    icon: Building2,
    title: "Handpicked Luxury Hotels",
    description: "Stay in the finest properties close to the temples, offering top-tier comfort, hygiene, and satvik dining.",
  },
  {
    icon: Car,
    title: "Private AC Cab & Travel",
    description: "Chauffeur-driven executive vehicles at your service for smooth intercity transits and local temple visits.",
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Spiritual & Ground Support",
    description: "Round-the-clock customer care and on-ground guides to assist you with temple timings, rituals, and VIP entries.",
  },
  {
    icon: ShieldCheck,
    title: "Verified & Courteous Drivers",
    description: "Highly professional, English/Hindi speaking local drivers familiar with all routes and pilgrimage protocols.",
  },
];

const centeredUsp = {
  icon: Award,
  title: "Trusted by Thousands",
  description: "Proudly served over 50,000+ happy families. Rated 4.9/5 stars on Google and major travel networks.",
};

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
};

export default function WhyChooseUs() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <section
      ref={ref}
      id="why-us"
      className="py-12 sm:py-20 bg-divine-dark relative overflow-hidden"
    >
      {/* Ambient background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] pointer-events-none opacity-30"
        style={{
          background: "radial-gradient(ellipse at center, rgba(255,140,0,0.12) 0%, transparent 70%)",
          filter: "blur(50px)",
        }}
      />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-8 sm:mb-12"
        >
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-gold-500/30 bg-gold-500/10 text-gold-400 text-xs font-semibold uppercase tracking-wider mb-3">
            THE DIVINE STANDARD
          </div>
          <h2 className="font-playfair font-bold text-2xl sm:text-3xl lg:text-4xl text-white mb-3">
            Why Pilgrims Choose <span className="text-saffron-400">Divine Journeys</span>
          </h2>
          <p className="text-white/70 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
            We do not just organize tours; we curate sacred milestones. Every detail of your journey is handled with devotion, security, and absolute transparency.
          </p>
        </motion.div>

        {/* USP Grid — 2 Columns on Mobile */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-2 gap-3 sm:gap-4 max-w-4xl mx-auto"
        >
          {usps.map((usp, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="rounded-2xl p-4 sm:p-5 bg-[#1C1E29]/90 border border-white/10 hover:border-saffron-500/35 transition-all text-left shadow-lg backdrop-blur-md"
            >
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-amber-500/10 border border-amber-500/25 flex items-center justify-center text-amber-400 mb-3 flex-shrink-0">
                <usp.icon size={18} />
              </div>

              <h3 className="font-semibold text-white text-xs sm:text-sm mb-1 leading-snug">
                {usp.title}
              </h3>
              <p className="text-white/60 text-[11px] sm:text-xs leading-relaxed">
                {usp.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Centered 7th Card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-3 sm:mt-4 max-w-md mx-auto"
        >
          <div className="rounded-2xl p-4 sm:p-5 bg-[#1C1E29]/90 border border-white/10 hover:border-saffron-500/35 transition-all text-left shadow-lg backdrop-blur-md">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-amber-500/10 border border-amber-500/25 flex items-center justify-center text-amber-400 mb-3 flex-shrink-0">
              <centeredUsp.icon size={18} />
            </div>

            <h3 className="font-semibold text-white text-xs sm:text-sm mb-1 leading-snug">
              {centeredUsp.title}
            </h3>
            <p className="text-white/60 text-[11px] sm:text-xs leading-relaxed">
              {centeredUsp.description}
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
