"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Plus, Minus, MessageCircle } from "lucide-react";
import { faqData } from "@/lib/faqData";

const WA_NUMBER = "919235222399";

function FAQItem({ item, index }: { item: (typeof faqData)[0]; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.04 }}
      className={`rounded-2xl overflow-hidden transition-all duration-300 ${
        open
          ? "bg-white shadow-[0_4px_24px_rgba(0,0,0,0.07)] border border-saffron-100"
          : "bg-white border border-gray-100 hover:border-gray-200"
      }`}
    >
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center justify-between gap-4 px-5 sm:px-6 py-5 text-left"
        aria-expanded={open}
      >
        <span className={`font-playfair font-semibold text-base sm:text-lg leading-snug transition-colors ${
          open ? "text-saffron-700" : "text-divine-dark"
        }`}>
          {item.question}
        </span>
        <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
          open ? "bg-saffron-100 rotate-0" : "bg-gray-50 rotate-0"
        }`}>
          {open
            ? <Minus size={15} className="text-saffron-600" />
            : <Plus size={15} className="text-gray-400" />
          }
        </div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="px-5 sm:px-6 pb-6">
              <div className="h-px bg-saffron-100 mb-4" />
              <p className="text-gray-600 text-sm sm:text-[15px] leading-relaxed">
                {item.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const ref    = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="faq" className="py-24 sm:py-32 bg-sacred-light">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 sm:mb-14"
        >
          <div className="ornament-line max-w-[220px] mx-auto mb-5">
            <span className="text-gold-600 text-[11px] tracking-[0.32em] uppercase font-semibold whitespace-nowrap px-4">
              Common Questions Answered
            </span>
          </div>
          <h2 className="font-playfair font-bold text-4xl sm:text-5xl text-divine-dark mb-4 leading-tight">
            Frequently Asked{" "}
            <span className="text-gradient-saffron">Questions</span>
          </h2>
          <p className="text-gray-400 text-base max-w-md mx-auto">
            Everything you need to know before booking your Ayodhya yatra. Still have questions? We respond in 2 minutes.
          </p>
        </motion.div>

        {/* FAQ list */}
        <div className="space-y-2.5 sm:space-y-3">
          {faqData.map((item, i) => (
            <FAQItem key={i} item={item} index={i} />
          ))}
        </div>

        {/* CTA block below FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-10 bg-divine-dark rounded-3xl p-8 sm:p-10 text-center"
        >
          <div className="text-3xl mb-3" aria-hidden>🙏</div>
          <h3 className="font-playfair font-bold text-white text-2xl mb-2">
            Still Have Questions?
          </h3>
          <p className="text-white/45 text-sm mb-7 max-w-xs mx-auto">
            Our travel experts answer on WhatsApp within 2 minutes — any time of day.
          </p>
          <a
            href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
              "Jai Shri Ram! I have some questions about the Ayodhya tour packages. Can you help?"
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="wa-shimmer inline-flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20c05c] text-white px-8 py-4 rounded-full font-semibold text-[15px] transition-all duration-300 hover:scale-[1.04] active:scale-[0.97]"
          >
            <MessageCircle size={18} />
            Ask on WhatsApp — Free
          </a>
        </motion.div>
      </div>
    </section>
  );
}
