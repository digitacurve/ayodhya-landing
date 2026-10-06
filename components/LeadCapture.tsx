"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import {
  User, Phone, CalendarDays, Mail, MessageSquare, ChevronDown,
  CheckCircle2, Loader2, AlertCircle,
  Star, Users, ShieldCheck, BadgeCheck,
} from "lucide-react";

// ─── Constants ────────────────────────────────────────────────────────────────
const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";
const WEB3FORMS_KEY      = "91c6129d-ac01-41e8-ae6a-3b04e733c34f";
const REDIRECT    = "/thank-you";

const TOURS = [
  "Ayodhya Deepotsav Special Yatra",
  "Dev Diwali Special: Varanasi Ayodhya Yatra",
  "Ayodhya Same Day Tour",
  "Varanasi Same Day Tour",
  "Varanasi Yatra (1N/2D)",
  "Varanasi Ayodhya Yatra",
  "Prayagraj Same Day Tour",
  "Ayodhya Darshan",
  "Ayodhya Varanasi",
  "Ayodhya · Prayagraj · Varanasi",
  "Lucknow · Ayodhya",
  "Ayodhya · Varanasi · Chitrakoot",
  "Full Ramayana Circuit",
  "Ayodhya · Lucknow · Varanasi",
  "Complete UP Pilgrimage Tour",
  "Custom Trip",
];

const inclusions = [
  "Ram Mandir darshan pre-arranged",
  "3★ / 4★ hotel stay included",
  "AC transport from day one",
  "Expert guide throughout yatra",
];

const MONTHS = [
  "January","February","March","April","May","June",
  "July","August","September","October","November","December",
];

// ─── Field wrapper ─────────────────────────────────────────────────────────────
function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-white/60 text-[11px] font-semibold tracking-[0.14em] uppercase mb-2">
        {label}
        {required && <span className="text-saffron-400 ml-0.5">*</span>}
      </label>
      {children}
    </div>
  );
}

const inputClass =
  "w-full liquid-glass-input rounded-xl px-4 py-3.5 text-white placeholder-white/35 text-[14px] appearance-none";

// ─── Format date ────────────────────────────────────────────────────────────
function fmtDate(d: Date) {
  return `${d.getDate()} ${MONTHS[d.getMonth()]} ${d.getFullYear()}`;
}

function getLocalDateString(d: Date) {
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

// ─── Form Component ───────────────────────────────────────────────────────────
function LeadForm() {
  const [fields, setFields] = useState({
    name: "", phone: "", tour: "", request: "", packageType: "",
  });
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "error">("idle");

  // Auto-select package on select-tour event
  useEffect(() => {
    const handleSelectTour = (e: Event) => {
      const detail = (e as CustomEvent).detail;
      const tourId = typeof detail === "string" ? detail : detail?.tourId;

      const tourMapping: Record<string, string> = {
        "ayodhya-same-day": "Ayodhya Same Day Tour",
        "varanasi-same-day": "Varanasi Same Day Tour",
        "ayodhya-1n2d": "Ayodhya Deepotsav Special Yatra",
        "varanasi-1n2d": "Varanasi Yatra (1N/2D)",
        "varanasi-ayodhya-2n3d": "Dev Diwali Special: Varanasi Ayodhya Yatra",
        "prayagraj-same-day": "Prayagraj Same Day Tour",
        "ayodhya-darshan": "Ayodhya Darshan",
        "ayodhya-varanasi": "Ayodhya Varanasi",
        "ayodhya-prayagraj-varanasi": "Ayodhya · Prayagraj · Varanasi",
        "lucknow-ayodhya": "Lucknow · Ayodhya",
        "ayodhya-varanasi-chitrakoot": "Ayodhya · Varanasi · Chitrakoot",
        "full-circuit": "Full Ramayana Circuit",
        "ayodhya-lucknow-varanasi": "Ayodhya · Lucknow · Varanasi",
        "complete-up-pilgrimage": "Complete UP Pilgrimage Tour",
      };
      const tourName = tourMapping[tourId];
      if (tourName) {
        setFields(f => ({ ...f, tour: tourName }));
      }
    };

    window.addEventListener("select-tour", handleSelectTour);
    return () => {
      window.removeEventListener("select-tour", handleSelectTour);
    };
  }, []);

  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFields(f => ({ ...f, [k]: e.target.value }));
    if (errors[k]) setErrors(er => { const n = { ...er }; delete n[k]; return n; });
  };

  const validate = () => {
    const e: Record<string, string> = {};
    if (!fields.name.trim()) e.name = "Please enter your name";
    
    const phoneTrimmed = fields.phone.trim();
    if (!phoneTrimmed) {
      e.phone = "Please enter your phone number";
    } else {
      const cleanPhone = phoneTrimmed.replace(/[\s\-()+]/g, "");
      if (!/^\d{7,15}$/.test(cleanPhone)) {
        e.phone = "Please enter a valid phone number (7-15 digits)";
      }
    }
    
    if (!fields.tour) e.tour = "Please select a tour";
    if (!fields.packageType) e.packageType = "Please select package class / budget preference";
    if (!date) e.date = "Please select your travel date";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("submitting");

    const travelDateString = date ? fmtDate(date) : "";

    try {
      const payload: Record<string, string> = {
        access_key: WEB3FORMS_KEY,
        name: fields.name,
        phone: fields.phone,
        tour: fields.tour,
        package_type: fields.packageType,
        travel_date: travelDateString,
        special_request: fields.request || "(none)",
      };

      const res = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        if (typeof window !== "undefined") {
          const w = window as unknown as { dataLayer?: object[] };
          if (w.dataLayer) {
            w.dataLayer.push({
              event: "form_submit",
              form_name: "lead_capture",
              tour_selected: fields.tour,
              travel_date: travelDateString,
            });
          }
        }
        if (typeof window !== 'undefined' && window.fbq) {
          window.fbq('track', 'Lead', {
            source: 'form'
          });
        }
        const queryParams = new URLSearchParams({
          name: fields.name,
          phone: fields.phone,
          tour: fields.tour,
          package_type: fields.packageType,
          date: travelDateString,
        }).toString();
        window.location.href = `${REDIRECT}?${queryParams}`;
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">

      {/* Row 1: Name + Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field label="Full Name" required>
          <div className="relative">
            <User size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/25 pointer-events-none" />
            <input
              type="text"
              value={fields.name}
              onChange={set("name")}
              placeholder="Your name"
              className={`${inputClass} pl-10 ${errors.name ? "border-red-400/60 focus:border-red-400/70 focus:ring-red-400/15" : ""}`}
              autoComplete="name"
            />
          </div>
          {errors.name && <p className="text-red-400 text-[11px] mt-1.5">{errors.name}</p>}
        </Field>

        <Field label="Phone Number" required>
          <div className="relative">
            <Phone size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/25 pointer-events-none" />
            <input
              type="tel"
              value={fields.phone}
              onChange={set("phone")}
              placeholder="e.g. +91 98765 43210"
              className={`${inputClass} pl-10 ${errors.phone ? "border-red-400/60 focus:border-red-400/70 focus:ring-red-400/15" : ""}`}
              autoComplete="tel"
              inputMode="tel"
            />
          </div>
          {errors.phone && <p className="text-red-400 text-[11px] mt-1.5">{errors.phone}</p>}
        </Field>
      </div>

      {/* Row 2: Tour & Package Type */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field label="Spiritual Tour" required>
          <div className="relative">
            <select
              value={fields.tour}
              onChange={set("tour")}
              className={`${inputClass} pr-10 ${errors.tour ? "border-red-400/60" : ""} cursor-pointer`}
              style={{ background: "rgba(255,255,255,0.06)" }}
            >
              <option value="" disabled style={{ background: "#160800" }}>Select your tour</option>
              {TOURS.map(t => (
                <option key={t} value={t} style={{ background: "#160800" }}>{t}</option>
              ))}
            </select>
            <ChevronDown size={15} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-white/30 pointer-events-none" />
          </div>
          {errors.tour && <p className="text-red-400 text-[11px] mt-1.5">{errors.tour}</p>}
        </Field>

        <Field label="Package Class & Budget" required>
          <div className="relative">
            <select
              value={fields.packageType}
              onChange={set("packageType")}
              className={`${inputClass} pr-10 ${errors.packageType ? "border-red-400/60" : ""} cursor-pointer`}
              style={{ background: "rgba(255,255,255,0.06)" }}
            >
              <option value="" disabled style={{ background: "#160800" }}>Select category</option>
              <option value="Standard / Budget" style={{ background: "#160800" }}>Standard / Budget (Clean Hotels & AC Travel)</option>
              <option value="Deluxe" style={{ background: "#160800" }}>Deluxe (3★ Hotels, Dedicated AC Sedan)</option>
              <option value="Premium / Luxury" style={{ background: "#160800" }}>Premium / Luxury (4★/5★ Hotels, AC SUV & VIP Help)</option>
            </select>
            <ChevronDown size={15} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-white/30 pointer-events-none" />
          </div>
          {errors.packageType && <p className="text-red-400 text-[11px] mt-1.5">{errors.packageType}</p>}
        </Field>
      </div>

      {/* Row 3: Travel Date Selection */}
      <Field label="Travel Date" required>
        <div className="relative">
          <CalendarDays size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/25 pointer-events-none z-10" />
          <input
            type="date"
            value={date ? getLocalDateString(date) : ""}
            min={getLocalDateString(new Date())}
            onChange={(e) => {
              const val = e.target.value;
              setDate(val ? new Date(val) : undefined);
              if (errors.date) setErrors(er => { const n = { ...er }; delete n.date; return n; });
            }}
            className={`${inputClass} pl-10 cursor-pointer text-white`}
            style={{ colorScheme: "dark" }}
          />
          {errors.date && <p className="text-red-400 text-[11px] mt-1.5">{errors.date}</p>}
        </div>
      </Field>

      {/* Row 4: Special Request */}
      <Field label="Special Request">
        <div className="relative">
          <MessageSquare size={15} className="absolute left-3.5 top-4 text-white/25 pointer-events-none" />
          <textarea
            value={fields.request}
            onChange={set("request")}
            placeholder="Senior citizens, wheelchair, Jain food, extra nights... (optional)"
            rows={3}
            className={`${inputClass} pl-10 resize-none leading-relaxed`}
          />
        </div>
      </Field>

      {/* Error message */}
      {status === "error" && (
        <div className="flex items-center gap-2.5 bg-red-500/10 border border-red-400/20 rounded-xl px-4 py-3">
          <AlertCircle size={15} className="text-red-400 flex-shrink-0" />
          <p className="text-red-300 text-[13px]">
            Something went wrong. Please try WhatsApp or call us directly.
          </p>
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "submitting"}
        className="liquid-glass-btn-primary w-full py-4 rounded-2xl font-bold text-[15px] text-white flex items-center justify-center cursor-pointer"
        data-cta="form-submit"
        data-source="lead-capture"
      >
        {status === "submitting" ? (
          <span className="flex items-center justify-center gap-2">
            <Loader2 size={17} className="animate-spin" />
            Sending your request…
          </span>
        ) : (
          "Submit & Get Free Tour Quote"
        )}
      </button>

      {/* Trust line */}
      <p className="text-center text-[13px] font-medium" style={{ color: "rgba(255,200,80,0.75)" }}>
        ⏱️ We will call you within 2 hours with best available pricing
      </p>
    </form>
  );
}

// ─── Section ─────────────────────────────────────────────────────────────────
const proofPoints = [
  { icon: Star,         text: "4.9★ on Google",      sub: "312 verified reviews" },
  { icon: Users,        text: "50,000+ pilgrims",     sub: "Trusted since 2009" },
  { icon: ShieldCheck,  text: "Zero hidden charges",  sub: "Price you see is what you pay" },
  { icon: BadgeCheck,   text: "Govt. Registered Agency", sub: "GSTIN: 09CJPPJ6346G1ZR" },
];

export default function LeadCapture() {
  const ref    = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [tokenAmount, setTokenAmount] = useState(1999);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (localStorage.getItem("price_lock_discount") === "true") {
        setTokenAmount(1749);
      }
      const handleDiscount = () => setTokenAmount(1749);
      window.addEventListener("apply-discount", handleDiscount);
      return () => window.removeEventListener("apply-discount", handleDiscount);
    }
  }, []);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden"
      data-section="lead-form"
      style={{
        background:
          "linear-gradient(180deg, #100500 0%, #160800 40%, #1c0a00 80%, #1f0c00 100%)",
      }}
    >
      {/* Top separator line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(212,175,55,0.25) 30%, rgba(255,107,0,0.3) 50%, rgba(212,175,55,0.25) 70%, transparent 100%)",
        }}
      />

      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 65% 50%, rgba(255,107,0,0.07) 0%, transparent 60%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <motion.div
          id="get-quote"
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="scroll-mt-24"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column — Section Info & Proof Points (Kashi Darshan Format) */}
            <div className="lg:col-span-5 space-y-6 lg:pr-4 pt-2 text-center lg:text-left">
              <div className="inline-flex items-center gap-1.5 bg-saffron-500/10 border border-saffron-500/25 px-3 py-1 rounded-full text-saffron-400 text-xs font-semibold uppercase tracking-wider">
                ⚡ Quick Enquiry
              </div>

              <h2 className="font-playfair font-bold text-3xl sm:text-4xl text-white leading-tight">
                Plan Your Divine <span className="text-saffron-400">Ayodhya Yatra</span>
              </h2>

              <p className="text-white/75 text-sm sm:text-base font-inter leading-relaxed">
                Fill in your details below. Our pilgrimage expert will call you within 2 hours with a personalised itinerary and the best available price.
              </p>

              {/* Four Inclusions Checklist */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5 space-y-3.5 backdrop-blur-md">
                {inclusions.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-left">
                    <div className="w-6 h-6 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 size={14} className="text-emerald-400" />
                    </div>
                    <span className="text-white/90 text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>

              {/* Devotee Quote */}
              <div className="border-l-2 border-saffron-500 pl-4 py-1 text-left hidden sm:block">
                <p className="text-white/70 italic text-xs leading-relaxed">
                  “Everything was arranged perfectly — hotel, darshan, transport. We just came with devotion and they handled everything else.”
                </p>
                <div className="text-gold-400 text-[11px] font-semibold mt-1">
                  ⭐ 4.9/5 Rating from 50,000+ Yatris
                </div>
              </div>
            </div>

            {/* Right Column — Main Form Card */}
            <div className="lg:col-span-7">
              <div className="liquid-glass-dark rounded-3xl p-6 sm:p-8 lg:p-9 border border-gold-500/30 shadow-2xl">
                {/* Form header */}
                <div className="mb-6 pb-5 border-b border-white/[0.1] text-center sm:text-left">
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
                    <h3 className="font-playfair font-bold text-white text-2xl sm:text-3xl leading-tight">
                      Get Your Free Tour Quote
                    </h3>
                    <span className="text-xs text-saffron-300 bg-saffron-500/15 border border-saffron-500/30 px-3 py-1 rounded-full font-medium">
                      ⏱️ Call within 2 hrs
                    </span>
                  </div>
                  <p className="text-white/60 text-xs sm:text-sm mt-1">
                    Confirm Travel This Month (25% Adv) OR Lock Future Rates (₹1,999)
                  </p>
                </div>

                <LeadForm />
              </div>
            </div>

          </div>
        </motion.div>
      </div>

      {/* Bottom separator */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(255,107,0,0.15) 50%, transparent 100%)",
        }}
      />
    </section>
  );
}
