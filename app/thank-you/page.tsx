"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { CheckCircle2, MessageCircle, Loader2, Home, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const WA_NUMBER = "919235222399";

function ThankYouDetails() {
  const searchParams = useSearchParams();
  const name = searchParams.get("name") || "";
  const phone = searchParams.get("phone") || "";
  const tour = searchParams.get("tour") || "";
  const date = searchParams.get("date") || "";

  const [countdown, setCountdown] = useState(3);
  const [redirected, setRedirected] = useState(false);

  const waMsg = encodeURIComponent(
    `Jai Shri Ram! 🙏 I have submitted the yatra inquiry form:\n\n• *Name*: ${name}\n• *Phone*: ${phone}\n• *Tour*: ${tour}\n• *Travel Date*: ${date}\n\nPlease share the details and custom itinerary.`
  );

  const waUrl = `https://wa.me/${WA_NUMBER}?text=${waMsg}`;

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else if (!redirected) {
      setRedirected(true);
      window.location.href = waUrl;
    }
  }, [countdown, redirected, waUrl]);

  return (
    <div className="w-full max-w-xl mx-auto text-center px-4">
      {/* Icon checkmark */}
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className="mb-8 flex justify-center"
      >
        <div className="w-20 h-20 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
          <CheckCircle2 size={44} />
        </div>
      </motion.div>

      {/* Success Title */}
      <motion.h1
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.15 }}
        className="font-playfair font-bold text-3xl sm:text-4xl text-white mb-4 leading-tight"
      >
        Request Received Successfully!
      </motion.h1>

      {/* Personalized message */}
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.25 }}
        className="text-white/70 text-base sm:text-lg mb-8 leading-relaxed"
      >
        {name ? `Thank you, ${name}! ` : "Thank you! "}
        Your travel plan request for <span className="text-gold-300 font-semibold">{tour || "Ayodhya Tour"}</span> on <span className="text-gold-300 font-semibold">{date || "selected date"}</span> has been recorded.
      </motion.p>

      {/* Countdown Card */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.35 }}
        className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-6 mb-8 mx-auto"
      >
        <div className="flex items-center justify-center gap-3 mb-4">
          <Loader2 size={16} className="text-saffron-500 animate-spin" />
          <span className="text-white/60 text-sm font-medium">
            Redirecting to WhatsApp in <span className="text-saffron-400 font-bold text-base">{countdown}</span> seconds...
          </span>
        </div>

        <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden mb-5">
          <motion.div
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 3, ease: "linear" }}
            className="h-full bg-gradient-to-r from-saffron-500 to-gold-500"
          />
        </div>

        <a
          href={waUrl}
          className="wa-shimmer wa-cta-glow flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20c05c] text-white py-4 px-6 rounded-xl font-bold text-sm sm:text-base transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] w-full shadow-[0_4px_20px_rgba(37,211,102,0.25)]"
        >
          <MessageCircle size={18} />
          <span>Open WhatsApp Chat Now</span>
          <ArrowRight size={16} />
        </a>
      </motion.div>

      {/* Back home */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.45 }}
      >
        <a
          href="/"
          className="inline-flex items-center gap-2 text-white/40 hover:text-white text-sm font-medium transition-colors"
        >
          <Home size={15} />
          Back to Homepage
        </a>
      </motion.div>
    </div>
  );
}

export default function ThankYouPage() {
  return (
    <div
      className="min-h-screen flex items-center justify-center relative overflow-hidden py-12 px-4"
      style={{
        background: "linear-gradient(180deg, #100500 0%, #160800 50%, #0d0400 100%)",
      }}
    >
      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23D4AF37' fill-opacity='1' fill-rule='evenodd'%3E%3Ccircle cx='40' cy='40' r='1.5'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Top divider accent */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[500px] h-[3px]"
        style={{
          background: "linear-gradient(90deg, transparent 0%, rgba(212,175,55,0.4) 50%, transparent 100%)",
        }}
      />

      <div className="relative z-10 w-full">
        <Suspense fallback={
          <div className="flex flex-col items-center justify-center text-white/50 gap-3">
            <Loader2 size={32} className="animate-spin text-saffron-500" />
            <span>Loading details...</span>
          </div>
        }>
          <ThankYouDetails />
        </Suspense>
      </div>
    </div>
  );
}
