"use client";

import { motion } from "framer-motion";
import { Building2, Car, BookOpen, HeadphonesIcon, BadgeCheck } from "lucide-react";

const line1 = [
  { icon: Building2,      label: "Verified Hotels",   sub: "Pre-inspected",     fullLabel: "Verified Hotel Stays",   fullSub: "Pre-inspected properties" },
  { icon: Car,            label: "AC Transport",      sub: "AC vehicle",        fullLabel: "Comfortable Transport",   fullSub: "AC vehicle throughout" },
  { icon: BookOpen,       label: "Pilgrimage Experts", sub: "15+ yrs exp",      fullLabel: "Pilgrimage Experts",      fullSub: "15+ years experience" },
];

const line2 = [
  { icon: HeadphonesIcon, label: "24/7 Support",      sub: "Reply in 2 mins",   fullLabel: "24/7 Local Support",      fullSub: "Reply in 2 minutes" },
  { icon: BadgeCheck,     label: "Govt. Registered", sub: "GSTIN: 09CJPPJ...", fullLabel: "Govt. Registered Agency", fullSub: "GSTIN: 09CJPPJ6346G1ZR" },
];

const allItems = [...line1, ...line2];

export default function TrustStrip() {
  return (
    <section className="relative bg-divine-dark py-6 sm:py-8 border-y border-white/10 overflow-hidden">
      {/* Decorative ambient background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[200px] pointer-events-none opacity-40"
        style={{
          background: "radial-gradient(ellipse at center, rgba(255,140,0,0.15) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        
        {/* Mobile View: Exactly 2 lines layout (Line 1 has 3 items, Line 2 has 2 items) */}
        <div className="sm:hidden space-y-1.5">
          {/* Line 1: 3 Items */}
          <div className="grid grid-cols-3 gap-1.5">
            {line1.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.3 }}
                className="flex items-center gap-1.5 p-2 rounded-xl bg-[#141722]/90 border border-white/10 text-left min-w-0"
              >
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center flex-shrink-0 text-white shadow-sm shadow-orange-500/20">
                  <item.icon size={11} />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-white font-bold text-[10px] leading-tight truncate">
                    {item.label}
                  </div>
                  <div className="text-white/60 text-[8px] leading-tight truncate">
                    {item.sub}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Line 2: 2 Items Centered */}
          <div className="grid grid-cols-2 gap-1.5 max-w-[85%] mx-auto">
            {line2.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i + 3) * 0.05, duration: 0.3 }}
                className="flex items-center gap-1.5 p-2 rounded-xl bg-[#141722]/90 border border-white/10 text-left min-w-0"
              >
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center flex-shrink-0 text-white shadow-sm shadow-orange-500/20">
                  <item.icon size={11} />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-white font-bold text-[10px] leading-tight truncate">
                    {item.label}
                  </div>
                  <div className="text-white/60 text-[8px] leading-tight truncate">
                    {item.sub}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Tablet / Desktop View: All 5 items in 1 row */}
        <div className="hidden sm:grid sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
          {allItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.4 }}
              className="flex items-center gap-3 p-3.5 sm:p-4 rounded-2xl bg-[#141722]/90 border border-white/10 hover:border-saffron-500/35 transition-all shadow-md backdrop-blur-md"
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center flex-shrink-0 text-white shadow-md shadow-orange-500/20">
                <item.icon size={18} />
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-white font-bold text-xs sm:text-sm leading-snug truncate">
                  {item.fullLabel}
                </div>
                <div className="text-white/60 text-[11px] leading-tight truncate">
                  {item.fullSub}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
