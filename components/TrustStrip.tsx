"use client";

import { motion } from "framer-motion";
import { Building2, Car, BookOpen, HeadphonesIcon, BadgeCheck } from "lucide-react";

const items = [
  { icon: Building2,      label: "Verified Hotel Stays",    sub: "Pre-inspected properties" },
  { icon: Car,            label: "Comfortable Transport",    sub: "AC vehicle throughout" },
  { icon: BookOpen,       label: "Pilgrimage Experts",       sub: "15+ years experience" },
  { icon: HeadphonesIcon, label: "24/7 Local Support",       sub: "Reply in 2 minutes" },
  { icon: BadgeCheck,     label: "Govt. Registered Agency",  sub: "GSTIN: 09CJPPJ6346G1ZR" },
];

export default function TrustStrip() {
  return (
    <section className="relative bg-divine-dark py-8 sm:py-10 border-y border-white/10 overflow-hidden">
      {/* Decorative ambient background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[200px] pointer-events-none opacity-40"
        style={{
          background: "radial-gradient(ellipse at center, rgba(255,140,0,0.15) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.4 }}
              className="flex items-center gap-3 p-3.5 sm:p-4 rounded-2xl bg-[#141722]/90 border border-white/10 hover:border-saffron-500/35 transition-all shadow-md backdrop-blur-md"
            >
              {/* Circular Orange Gradient Icon */}
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center flex-shrink-0 text-white shadow-md shadow-orange-500/20">
                <item.icon size={18} />
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-white font-bold text-xs sm:text-sm leading-snug truncate">
                  {item.label}
                </div>
                <div className="text-white/60 text-[11px] leading-tight truncate">
                  {item.sub}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
