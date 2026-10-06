"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Users, Star, Award, Heart, CheckCircle2 } from "lucide-react";

const metrics = [
  {
    icon: Users,
    end: 50000,
    suffix: "+",
    title: "50,000+ HAPPY PILGRIMS",
    sub: "Families served since 2009",
  },
  {
    icon: Star,
    end: 4.9,
    suffix: "★",
    title: "4.9/5 GOOGLE RATED",
    sub: "312 verified reviews",
    isDecimal: true,
  },
  {
    icon: Award,
    end: 15,
    suffix: "+",
    title: "15+ YEARS EXCELLENCE",
    sub: "Ministry of Tourism certified",
  },
  {
    icon: Heart,
    end: 100,
    suffix: "%",
    title: "100% SATISFACTION RATE",
    sub: "Money-back guaranteed",
  },
];

function CountUp({ end, isDecimal, inView }: { end: number; isDecimal?: boolean; inView: boolean }) {
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const duration = 1800;
    const update = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      const current = end * eased;
      setVal(isDecimal ? Math.round(current * 10) / 10 : Math.floor(current));
      if (p < 1) requestAnimationFrame(update);
    };
    requestAnimationFrame(update);
  }, [inView, end, isDecimal]);

  if (isDecimal) return <>{val.toFixed(1)}</>;
  return <>{val.toLocaleString("en-IN")}</>;
}

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export default function TrustMetrics() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <section ref={ref} className="py-10 sm:py-14 bg-divine-dark relative overflow-hidden">
      {/* Ambient background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, rgba(255,140,0,0.08) 0%, transparent 70%)",
          filter: "blur(50px)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 sm:mb-10"
        >
          <div className="inline-flex items-center gap-1.5 bg-saffron-500/10 border border-saffron-500/25 px-3 py-1 rounded-full text-saffron-400 text-[11px] font-semibold uppercase tracking-wider mb-2.5">
            Trusted Across India
          </div>
          <h2 className="font-playfair font-bold text-2xl sm:text-3xl lg:text-4xl text-white">
            Numbers That <span className="text-saffron-400">Speak for Themselves</span>
          </h2>
        </motion.div>

        {/* Compact 4 Dark Glass Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4"
        >
          {metrics.map((m, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="relative rounded-2xl p-4 sm:p-5 bg-[#141722]/90 border border-white/10 hover:border-saffron-500/35 transition-all shadow-lg backdrop-blur-md overflow-hidden text-left"
            >
              {/* Gradient Icon Badge */}
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center text-white mb-3 shadow-md shadow-orange-500/20 flex-shrink-0">
                <m.icon size={18} />
              </div>

              {/* Bold Title */}
              <h3 className="font-inter font-bold text-white text-xs sm:text-sm tracking-wide mb-1 leading-snug">
                {m.title}
              </h3>

              {/* Subtext */}
              <p className="text-white/60 text-[11px] sm:text-xs leading-normal">
                {m.sub}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Certifications row */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-white/70 text-xs sm:text-sm"
        >
          {["IATA Certified", "Ministry of Tourism Approved", "UP Tourism Registered", "GST Verified"].map(cert => (
            <div key={cert} className="flex items-center gap-1.5">
              <CheckCircle2 size={14} className="text-emerald-400" />
              <span>{cert}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
