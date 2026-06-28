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
  "Ayodhya Darshan",
  "Ayodhya – Prayagraj – Varanasi Tour",
  "Varanasi Darshan",
  "Prayagraj Sangam Darshan",
  "Prayagraj",
  "Ayodhya – Varanasi",
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
  "w-full bg-white/[0.06] border border-white/[0.12] rounded-xl px-4 py-3.5 text-white placeholder-white/25 text-[14px] focus:outline-none focus:border-saffron-400/70 focus:bg-white/[0.09] focus:ring-2 focus:ring-saffron-400/15 transition-all duration-200 appearance-none";

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
function LeadForm({ tokenAmount, setTokenAmount }: { tokenAmount: number; setTokenAmount: React.Dispatch<React.SetStateAction<number>> }) {
  const [fields, setFields] = useState({
    name: "", phone: "", tour: "", email: "", request: "", packageType: "",
  });
  const [date,    setDate]    = useState<Date | undefined>(undefined);
  const [errors,  setErrors]  = useState<Record<string, string>>({});
  const [status,  setStatus]  = useState<"idle" | "submitting" | "error">("idle");
  const [bookingType, setBookingType] = useState<"confirm" | "lock">("confirm");
  const [flexMonth, setFlexMonth] = useState("");

  // Auto-select package on select-tour event & handle discount
  useEffect(() => {
    const handleApplyDiscount = () => {
      setBookingType("lock");
      setTokenAmount(1749);
    };

    const handleSelectTour = (e: Event) => {
      const detail = (e as CustomEvent).detail;
      const tourId = typeof detail === "string" ? detail : detail?.tourId;
      const mode = typeof detail === "object" ? detail?.mode : undefined;

      const tourMapping: Record<string, string> = {
        "ayodhya-darshan": "Ayodhya Darshan",
        "ayodhya-varanasi": "Ayodhya – Varanasi",
        "ayodhya-prayagraj-varanasi": "Ayodhya – Prayagraj – Varanasi Tour",
        "lucknow-ayodhya": "Custom Trip",
        "ayodhya-varanasi-chitrakoot": "Custom Trip",
        "full-circuit": "Custom Trip",
      };
      const tourName = tourMapping[tourId];
      if (tourName) {
        setFields(f => ({ ...f, tour: tourName }));
      }
      if (mode === "lock") {
        setBookingType("lock");
      } else if (mode === "confirm") {
        setBookingType("confirm");
      }
    };

    window.addEventListener("select-tour", handleSelectTour);
    window.addEventListener("apply-discount", handleApplyDiscount);
    return () => {
      window.removeEventListener("select-tour", handleSelectTour);
      window.removeEventListener("apply-discount", handleApplyDiscount);
    };
  }, [setTokenAmount]);

  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFields(f => ({ ...f, [k]: e.target.value }));
    if (errors[k]) setErrors(er => { const n = { ...er }; delete n[k]; return n; });
  };


  const validate = () => {
    const e: Record<string, string> = {};
    if (!fields.name.trim())  e.name  = "Please enter your name";
    
    const phoneTrimmed = fields.phone.trim();
    if (!phoneTrimmed) {
      e.phone = "Please enter your phone number";
    } else {
      // Allow valid international numbers by stripping spaces, hyphens, brackets, and +
      const cleanPhone = phoneTrimmed.replace(/[\s\-()+]/g, "");
      if (!/^\d{7,15}$/.test(cleanPhone)) {
        e.phone = "Please enter a valid phone number (7-15 digits)";
      }
    }
    
    if (!fields.tour)         e.tour  = "Please select a tour";
    if (!fields.packageType)  e.packageType = "Please select package class / budget preference";
    if (bookingType === "confirm" && !date) e.date  = "Please select your travel date";
    if (bookingType === "lock" && !flexMonth) e.flexMonth = "Please select tentative travel month";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("submitting");

    const travelDateString = bookingType === "lock" ? `Flexible - ${flexMonth}` : (date ? fmtDate(date) : "");

    try {
      const payload: Record<string, string> = {
        access_key:     WEB3FORMS_KEY,
        name:           fields.name,
        phone:          fields.phone,
        tour:           fields.tour,
        package_type:   fields.packageType,
        travel_date:    travelDateString,
        booking_type:   bookingType === "confirm" ? "Direct Confirmation (25% Advance)" : `Flexi-Date Price Lock (₹${tokenAmount})`,
        special_request:fields.request || "(none)",
      };

      if (fields.email.trim()) {
        payload.email = fields.email.trim();
      }

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
              booking_type: bookingType,
            });
          }
        }
        const queryParams = new URLSearchParams({
          name: fields.name,
          phone: fields.phone,
          tour: fields.tour,
          package_type: fields.packageType,
          date: travelDateString,
          booking_type: bookingType,
          is_flexible: bookingType === "lock" ? "true" : "false",
          token_amount: tokenAmount.toString(),
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

      {/* Row 3: Booking Type & Date Selection */}
      <div className="space-y-3">
        <label className="block text-white/60 text-[11px] font-semibold tracking-[0.14em] uppercase">
          Select Booking Type & Timeline
        </label>
        
        {/* Tab Toggle */}
        <div className="grid grid-cols-2 gap-2 bg-white/[0.04] p-1.5 rounded-xl border border-white/[0.08]">
          <button
            type="button"
            onClick={() => {
              setBookingType("confirm");
              setFlexMonth("");
              if (errors.flexMonth || errors.date) {
                setErrors(er => { const n = { ...er }; delete n.date; delete n.flexMonth; return n; });
              }
            }}
            className={`py-2.5 rounded-lg text-[11px] font-semibold uppercase tracking-wider transition-all duration-200 ${
              bookingType === "confirm"
                ? "bg-saffron-600 text-white shadow-[0_2px_8px_rgba(255,107,0,0.3)]"
                : "text-white/50 hover:text-white hover:bg-white/5"
            }`}
          >
            Direct Confirm (25% Adv)
          </button>
          <button
            type="button"
            onClick={() => {
              setBookingType("lock");
              setDate(undefined);
              if (errors.flexMonth || errors.date) {
                setErrors(er => { const n = { ...er }; delete n.date; delete n.flexMonth; return n; });
              }
            }}
            className={`py-2.5 rounded-lg text-[11px] font-semibold uppercase tracking-wider transition-all duration-200 ${
              bookingType === "lock"
                ? "bg-saffron-600 text-white shadow-[0_2px_8px_rgba(255,107,0,0.3)]"
                : "text-white/50 hover:text-white hover:bg-white/5"
            }`}
          >
            Flexi-Price Lock (₹{tokenAmount})
          </button>
        </div>

        {/* Date Input */}
        <div>
          {bookingType === "lock" ? (
            <div className="relative">
              <select
                value={flexMonth}
                onChange={(e) => {
                  setFlexMonth(e.target.value);
                  if (errors.flexMonth) setErrors(er => { const n = { ...er }; delete n.flexMonth; return n; });
                }}
                className={`${inputClass} pr-10 ${errors.flexMonth ? "border-red-400/60" : ""} cursor-pointer`}
                style={{ background: "rgba(255,255,255,0.06)" }}
              >
                <option value="" disabled style={{ background: "#160800" }}>Select tentative travel month</option>
                <option value="June 2026" style={{ background: "#160800" }}>June 2026</option>
                <option value="July 2026" style={{ background: "#160800" }}>July 2026</option>
                <option value="August 2026" style={{ background: "#160800" }}>August 2026</option>
                <option value="September 2026" style={{ background: "#160800" }}>September 2026</option>
                <option value="October 2026" style={{ background: "#160800" }}>October 2026 (Festive Season)</option>
                <option value="November 2026" style={{ background: "#160800" }}>November 2026</option>
                <option value="December 2026" style={{ background: "#160800" }}>December 2026</option>
                <option value="Later / Undecided" style={{ background: "#160800" }}>Later / Undecided</option>
              </select>
              <ChevronDown size={15} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-white/30 pointer-events-none" />
              {errors.flexMonth && <p className="text-red-400 text-[11px] mt-1.5">{errors.flexMonth}</p>}
            </div>
          ) : (
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
          )}
        </div>
      </div>

      {/* Row 4: Email */}
      <Field label="Email Address">
        <div className="relative">
          <Mail size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/25 pointer-events-none" />
          <input
            type="email"
            value={fields.email}
            onChange={set("email")}
            placeholder="your@email.com (optional)"
            className={`${inputClass} pl-10`}
            autoComplete="email"
          />
        </div>
      </Field>

      {/* Row 5: Special Request */}
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
        className="wa-shimmer w-full py-4 rounded-2xl font-bold text-[15px] text-white relative overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_8px_32px_rgba(255,107,0,0.4)] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
        data-cta="form-submit"
        data-source="lead-capture"
        style={{
          background: status === "submitting"
            ? "rgba(255,107,0,0.6)"
            : "linear-gradient(135deg, #FF6B00 0%, #FF8C00 50%, #D4AF37 100%)",
          boxShadow: "0 4px 24px rgba(255,107,0,0.3)",
        }}
      >
        {status === "submitting" ? (
          <span className="flex items-center justify-center gap-2">
            <Loader2 size={17} className="animate-spin" />
            Sending your request…
          </span>
        ) : bookingType === "confirm" ? (
          "Submit & Confirm Booking (25% Advance)"
        ) : (
          `Submit & Lock Today's Rates (₹${tokenAmount})`
        )}
      </button>

      {/* Trust line */}
      <p className="text-center text-[13px] font-medium" style={{ color: "rgba(255,200,80,0.75)" }}>
        ⏱️ We will call you within 2 hours
      </p>

      {/* Micro-trust strip */}
      <div className="flex items-center justify-center gap-4 pt-1">
        {[
          bookingType === "confirm" ? "25% Advance Payment" : "Price Lock Guarantee",
          bookingType === "confirm" ? "Exact Dates Confirmed" : "Flexible Dates",
          "100% secure tirth yatra",
        ].map(t => (
          <span key={t} className="text-white/70 text-[11px] whitespace-nowrap flex items-center gap-1">
            <CheckCircle2 size={10} className="text-emerald-400/80" />
            {t}
          </span>
        ))}
      </div>
    </form>
  );
}

// ─── Section ─────────────────────────────────────────────────────────────────
const proofPoints = [
  { icon: Star,         text: "4.9★ on Google",      sub: "2,847 verified reviews" },
  { icon: Users,        text: "50,000+ pilgrims",     sub: "Trusted since 2009" },
  { icon: ShieldCheck,  text: "Zero hidden charges",  sub: "Price you see is what you pay" },
  { icon: BadgeCheck,   text: "Darshan guaranteed",   sub: "Pre-arranged VIP slot" },
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
      id="get-quote"
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

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* ── Left: Value Proposition ── */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 lg:pt-4"
          >
            {/* Label */}
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-saffron-500/40" />
              <span className="text-saffron-400 text-[10px] font-bold tracking-[0.35em] uppercase">
                Quick Enquiry
              </span>
            </div>

            <h2 className="font-playfair font-bold text-white leading-[1.1] mb-5"
              style={{ fontSize: "clamp(1.85rem, 4vw, 2.8rem)" }}
            >
              Plan Your Divine{" "}
              <span className="text-gradient-gold">Ayodhya Yatra</span>
            </h2>

            <p className="text-white/50 text-[15px] leading-relaxed mb-8 max-w-sm">
              Fill in your details. Our pilgrimage expert will call you within 2 hours
              with a personalised itinerary and the best available price.
            </p>

            {/* Inclusions */}
            <ul className="space-y-3 mb-10">
              {inclusions.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-saffron-500/15 border border-saffron-400/25 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 size={11} className="text-saffron-400" />
                  </div>
                  <span className="text-white/65 text-[14px]">{item}</span>
                </li>
              ))}
            </ul>

            {/* Proof grid */}
            <div className="grid grid-cols-2 gap-3">
              {proofPoints.map(({ icon: Icon, text, sub }) => (
                <div
                  key={text}
                  className="bg-white/[0.04] border border-white/[0.07] rounded-2xl p-4"
                >
                  <Icon size={16} className="text-saffron-400 mb-2.5" />
                  <div className="text-white font-semibold text-[13px] leading-tight">{text}</div>
                  <div className="text-white/35 text-[11px] mt-0.5 leading-tight">{sub}</div>
                </div>
              ))}
            </div>

            {/* Testimonial snippet */}
            <div
              className="mt-8 rounded-2xl p-5 border border-white/[0.08]"
              style={{ background: "rgba(255,255,255,0.03)" }}
            >
              <div className="flex items-center gap-0.5 mb-2.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={12} className="text-[#FBBC05] fill-[#FBBC05]" />
                ))}
              </div>
              <p className="text-white/55 text-[13px] leading-relaxed italic mb-3">
                &ldquo;Everything was arranged perfectly — hotel, darshan, transport. We just
                came with devotion and they handled everything else. Priceless experience.&rdquo;
              </p>
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-full bg-saffron-500/20 flex items-center justify-center text-saffron-400 text-[11px] font-bold flex-shrink-0">
                  RS
                </div>
                <div>
                  <div className="text-white/60 text-[12px] font-medium">Ramesh Sharma</div>
                  <div className="text-white/30 text-[10px]">Delhi · Verified pilgrim</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── Right: Form Card ── */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7"
          >
            <div
              className="rounded-3xl p-6 sm:p-8 border"
              style={{
                background:
                  "linear-gradient(145deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.04) 100%)",
                backdropFilter: "blur(32px)",
                WebkitBackdropFilter: "blur(32px)",
                borderColor: "rgba(212,175,55,0.2)",
                boxShadow:
                  "0 32px 80px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.08)",
              }}
            >
              {/* Form header */}
              <div className="mb-7 pb-6 border-b border-white/[0.08]">
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-2xl flex items-center justify-center flex-shrink-0"
                    style={{ background: "linear-gradient(135deg, rgba(255,107,0,0.25) 0%, rgba(212,175,55,0.15) 100%)" }}
                  >
                    <span className="font-playfair text-gold-400 text-lg font-bold leading-none">ॐ</span>
                  </div>
                  <div>
                    <h3 className="font-playfair font-bold text-white text-[1.25rem] leading-tight">
                      Get Your Free Tour Quote
                    </h3>
                    <p className="text-white/40 text-[12px] mt-0.5">
                      Confirm Travel This Month (25% Adv) OR Lock Future Rates (₹{tokenAmount})
                    </p>
                  </div>
                </div>
              </div>

              <LeadForm tokenAmount={tokenAmount} setTokenAmount={setTokenAmount} />
            </div>
          </motion.div>
        </div>
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
