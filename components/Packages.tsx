"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check, MessageCircle, Clock, MapPin, Hotel, Car, UserCheck, Ticket, Sparkles } from "lucide-react";

const WA_NUMBER = "919235222399";

const packages = [
  {
    id: "ayodhya-darshan",
    name: "Ayodhya Darshan",
    subtitle: "Ideal for a short, focused pilgrimage",
    duration: "2 Nights / 3 Days",
    cities: ["Ayodhya"],
    price: 6999,
    popular: false,
    featured: false,
    ctaText: "Get Tour Details",
    accent: "#FF6B00",
    features: [
      "Intercity AC Car Transfers",
      "Airport / Railway Pickup & Drop",
      "Ram Mandir Darshan Pass",
      "Professional Licensed Guide",
      "3 Star / 4 Star Hotel Stay",
      "Hanuman Garhi & Kanak Bhawan",
      "Saryu River Ghat Walk",
      "24/7 WhatsApp Support",
    ],
    note: "Ideal for a short divine weekend escape",
  },
  {
    id: "ayodhya-varanasi",
    name: "Ayodhya Varanasi",
    subtitle: "Our most booked spiritual circuit",
    duration: "3 Nights / 4 Days",
    cities: ["Ayodhya", "Varanasi"],
    price: 9999,
    popular: true,
    featured: false,
    ctaText: "Get Full Itinerary",
    accent: "#D4AF37",
    features: [
      "Intercity AC Car Transfers",
      "Airport / Railway Pickup & Drop",
      "Ram Mandir Darshan Pass",
      "Professional Licensed Guide",
      "3 Star / 4 Star Hotel Stay",
      "Kashi Vishwanath Corridor Visit",
      "Ganga Aarti at Dashashwamedh Ghat",
      "Sarnath Excursion Included",
    ],
    note: "8 of 12 seats booked this week",
  },
  {
    id: "ayodhya-prayagraj-varanasi",
    name: "Ayodhya · Prayagraj · Varanasi",
    subtitle: "The complete tirthdham circuit",
    duration: "4 Nights / 5 Days",
    cities: ["Ayodhya", "Prayagraj", "Varanasi"],
    price: 10999,
    popular: false,
    featured: true,
    ctaText: "Get Full Itinerary",
    accent: "#7C3AED",
    features: [
      "Intercity AC Car Transfers",
      "Airport / Railway Pickup & Drop",
      "Ram Mandir Darshan Pass",
      "Professional Licensed Guide",
      "3 Star / 4 Star Hotel Stay",
      "Triveni Sangam Prayagraj Visit",
      "Anand Bhawan & Heritage Tour",
      "Kashi Vishwanath + Ganga Aarti",
    ],
    note: "Covers three of India's holiest cities",
  },
  {
    id: "lucknow-ayodhya",
    name: "Lucknow · Ayodhya",
    subtitle: "Heritage & devotion beautifully combined",
    duration: "3 Nights / 4 Days",
    cities: ["Lucknow", "Ayodhya"],
    price: 8999,
    popular: false,
    featured: false,
    ctaText: "Get Tour Details",
    accent: "#0891B2",
    features: [
      "Intercity AC Car Transfers",
      "Airport / Railway Pickup & Drop",
      "Ram Mandir Darshan Pass",
      "Professional Licensed Guide",
      "3 Star / 4 Star Hotel Stay",
      "Bara Imambara & Heritage Tour",
      "Lucknow Food Walk Experience",
      "24/7 WhatsApp Support",
    ],
    note: "Nawabi culture meets Ram Bhumi devotion",
  },
  {
    id: "ayodhya-varanasi-chitrakoot",
    name: "Ayodhya · Varanasi · Chitrakoot",
    subtitle: "Tracing the sacred path of Lord Ram",
    duration: "4 Nights / 5 Days",
    cities: ["Ayodhya", "Varanasi", "Chitrakoot"],
    price: 10999,
    popular: false,
    featured: false,
    ctaText: "Talk To Tour Expert",
    accent: "#059669",
    features: [
      "Intercity AC Car Transfers",
      "Airport / Railway Pickup & Drop",
      "Ram Mandir Darshan Pass",
      "Professional Licensed Guide",
      "3 Star / 4 Star Hotel Stay",
      "Kamadgiri Parikarama Chitrakoot",
      "Ramghat & Sati Anusuya Ashram",
      "Varanasi Ganga Aarti Experience",
    ],
    note: "Follow Ram's footsteps from Ayodhya to exile",
  },
  {
    id: "full-circuit",
    name: "Full Ramayana Circuit",
    subtitle: "The ultimate Ramayana pilgrimage",
    duration: "5 Nights / 6 Days",
    cities: ["Ayodhya", "Prayagraj", "Varanasi", "Chitrakoot"],
    price: 14999,
    popular: false,
    featured: true,
    ctaText: "Talk To Tour Expert",
    accent: "#8B0000",
    features: [
      "Intercity AC Car Transfers",
      "Airport / Railway Pickup & Drop",
      "Ram Mandir Darshan Pass",
      "Professional Licensed Guide",
      "3 Star / 4 Star Hotel Stay",
      "All 4 Sacred Destinations Covered",
      "Triveni Sangam + Kamadgiri Parikrama",
      "Ganga Aarti + Personal Puja Arranged",
    ],
    note: "Most complete Ramayana circuit — limited slots",
  },
];

const coreInclusions = [
  { icon: Car,      label: "AC Transfer" },
  { icon: Hotel,    label: "3★/4★ Hotel" },
  { icon: Ticket,   label: "Darshan Pass" },
  { icon: UserCheck,label: "Expert Guide" },
];

function PackageCard({ pkg, index }: { pkg: (typeof packages)[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const inView  = useInView(cardRef, { once: true, margin: "-60px" });

  const waMsg = encodeURIComponent(
    `Jai Shri Ram! 🙏 I'm interested in the "${pkg.name}" tour package (₹${pkg.price.toLocaleString("en-IN")}/person). Please share availability and full itinerary.`
  );

  const isPopular = pkg.popular;

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 44 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: (index % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className={`relative flex flex-col rounded-3xl overflow-hidden transition-all duration-500 ${
        isPopular
          ? "bg-divine-dark ring-2 ring-gold-500/80 shadow-gold-glow hover:shadow-[0_28px_80px_rgba(212,175,55,0.3)]"
          : "premium-card shine-effect"
      }`}
    >
      {/* Popular banner */}
      {isPopular && (
        <div className="bg-gold-gradient text-divine-dark text-center py-2.5 text-[11px] font-bold tracking-[0.2em] uppercase flex items-center justify-center gap-2">
          <Sparkles size={12} />
          Most Popular — Best Value
          <Sparkles size={12} />
        </div>
      )}

      {/* Featured badge (non-popular) */}
      {pkg.featured && !isPopular && (
        <div
          className="absolute top-4 right-4 z-10 text-[10px] font-bold px-2.5 py-1 rounded-full"
          style={{ backgroundColor: `${pkg.accent}18`, color: pkg.accent, border: `1px solid ${pkg.accent}30` }}
        >
          ✦ Best Value
        </div>
      )}

      <div className="flex flex-col flex-1 p-6 sm:p-7">
        {/* Duration + cities */}
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className={`inline-flex items-center gap-1.5 text-[11px] font-semibold px-3 py-1.5 rounded-full ${
            isPopular ? "bg-white/10 text-gold-300 border border-gold-500/25" : "bg-gray-50 border border-gray-100 text-gray-500"
          }`}>
            <Clock size={11} />
            {pkg.duration}
          </span>
          <span className={`inline-flex items-center gap-1.5 text-[11px] px-3 py-1.5 rounded-full ${
            isPopular ? "bg-white/8 text-white/55 border border-white/12" : "bg-gray-50 border border-gray-100 text-gray-400"
          }`}>
            <MapPin size={11} />
            {pkg.cities.join(" · ")}
          </span>
        </div>

        {/* Name */}
        <h3 className={`font-playfair font-bold text-xl sm:text-2xl leading-snug mb-1 ${
          isPopular ? "text-white" : "text-divine-dark"
        }`}>
          {pkg.name}
        </h3>
        <p className={`text-sm mb-5 ${isPopular ? "text-gold-400/80" : "text-gray-400"}`}>
          {pkg.subtitle}
        </p>

        {/* Core inclusions icons */}
        <div className={`flex items-center justify-between mb-5 pb-5 border-b ${
          isPopular ? "border-white/10" : "border-gray-100"
        }`}>
          {coreInclusions.map(({ icon: Icon, label }) => (
            <div key={label} className="flex flex-col items-center gap-1.5">
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: isPopular ? "rgba(212,175,55,0.12)" : `${pkg.accent}12` }}
              >
                <Icon size={16} style={{ color: isPopular ? "#D4AF37" : pkg.accent }} />
              </div>
              <span className={`text-[9px] font-medium text-center leading-tight ${
                isPopular ? "text-white/45" : "text-gray-400"
              }`}>
                {label}
              </span>
            </div>
          ))}
        </div>

        {/* Price */}
        <div className="mb-5">
          <div className="flex items-end gap-1.5">
            <span className={`font-playfair font-bold text-[2.6rem] leading-none ${
              isPopular ? "text-gold-400" : "text-divine-dark"
            }`}>
              ₹{pkg.price.toLocaleString("en-IN")}
            </span>
            <span className={`text-sm pb-1 ${isPopular ? "text-white/40" : "text-gray-400"}`}>
              / person
            </span>
          </div>
          <p className={`text-[11px] mt-1 ${isPopular ? "text-white/30" : "text-gray-300"}`}>
            Onwards · Per adult on sharing basis
          </p>
        </div>

        {/* Features */}
        <ul className="space-y-2.5 flex-1 mb-5">
          {pkg.features.map((f) => (
            <li key={f} className="flex items-start gap-2.5">
              <div
                className="flex-shrink-0 w-[18px] h-[18px] rounded-full flex items-center justify-center mt-[1px]"
                style={{
                  backgroundColor: isPopular ? "rgba(212,175,55,0.15)" : `${pkg.accent}18`,
                }}
              >
                <Check
                  size={10}
                  strokeWidth={3}
                  style={{ color: isPopular ? "#D4AF37" : pkg.accent }}
                />
              </div>
              <span className={`text-[13px] leading-snug ${
                isPopular ? "text-white/72" : "text-gray-600"
              }`}>
                {f}
              </span>
            </li>
          ))}
        </ul>

        {/* Urgency note */}
        {pkg.note && (
          <div className={`mb-5 text-[12px] font-medium px-3.5 py-2.5 rounded-xl ${
            isPopular
              ? "bg-saffron-500/15 text-saffron-300 border border-saffron-500/20"
              : "bg-amber-50 text-amber-700 border border-amber-100"
          }`}>
            🔔 {pkg.note}
          </div>
        )}

        {/* CTA */}
        <a
          href={`https://wa.me/${WA_NUMBER}?text=${waMsg}`}
          target="_blank"
          rel="noopener noreferrer"
          className={`wa-shimmer flex items-center justify-center gap-2.5 w-full py-3.5 rounded-2xl text-white font-semibold text-[14px] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] ${
            isPopular
              ? "bg-gold-gradient text-divine-dark hover:brightness-105"
              : "hover:brightness-110"
          }`}
          style={
            isPopular
              ? {}
              : { backgroundColor: pkg.accent }
          }
          data-cta="whatsapp"
          data-source="packages"
          data-package={pkg.id}
        >
          <MessageCircle size={16} />
          {pkg.ctaText}
        </a>

        <p className={`text-center text-[11px] mt-2.5 ${
          isPopular ? "text-white/30" : "text-gray-300"
        }`}>
          No advance payment &nbsp;·&nbsp; Free cancellation within 48 h
        </p>
      </div>
    </motion.div>
  );
}

export default function Packages() {
  const ref   = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="packages" className="py-24 sm:py-32 bg-sacred-cream" data-section="packages">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 sm:mb-20"
        >
          <div className="ornament-line max-w-[200px] mx-auto mb-5">
            <span className="text-gold-600 text-[11px] tracking-[0.32em] uppercase font-semibold whitespace-nowrap px-4">
              Choose Your Journey
            </span>
          </div>
          <h2 className="font-playfair font-bold text-4xl sm:text-5xl lg:text-[3.4rem] text-divine-dark mb-5 leading-tight">
            Ayodhya Tour{" "}
            <span className="text-gradient-saffron">Packages 2025</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto leading-relaxed">
            Every detail pre-arranged — hotel, darshan pass, AC transport and expert guide — so you arrive and simply pray.
          </p>
          <div className="inline-flex items-center gap-2 mt-6 text-sm text-gray-500 bg-white border border-gray-100 shadow-sm rounded-full px-5 py-2.5">
            <MapPin size={13} className="text-saffron-500" />
            Departures from all major cities across India
          </div>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {packages.map((pkg, i) => (
            <PackageCard key={pkg.id} pkg={pkg} index={i} />
          ))}
        </div>

        {/* Custom nudge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-400 text-sm">
            Need a custom group tour, senior citizen plan or a different itinerary?{" "}
            <a
              href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
                "Jai Shri Ram! I need a custom Ayodhya tour package. Please help me plan."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-saffron-600 font-semibold hover:text-saffron-700 underline underline-offset-2"
            >
              Chat with our experts →
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
