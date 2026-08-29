"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ChevronDown, Sun, Sunset, Moon, MapPin, MessageCircle } from "lucide-react";

const WA_NUMBER = "919235222399";

import { Day, ItineraryItem, itineraries } from "@/data/packagesData";

const timeIcons = {
  Morning: Sun,
  Afternoon: Sunset,
  Evening: Moon,
};

const timeColors = {
  Morning: "text-amber-500",
  Afternoon: "text-orange-500",
  Evening: "text-indigo-400",
};

function ItineraryDay({ day, index }: { day: Day; index: number }) {
  const [isOpen, setIsOpen] = useState(index === 0);

  return (
    <details
      open={isOpen}
      onToggle={(e) => setIsOpen(e.currentTarget.open)}
      className="group"
    >
      <summary
        className="w-full flex items-center justify-between gap-4 px-6 sm:px-8 py-4 text-left hover:bg-gray-50/50 transition-colors cursor-pointer list-none [&::-webkit-details-marker]:hidden select-none"
      >
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-saffron-100 flex items-center justify-center flex-shrink-0">
            <span className="text-saffron-700 font-bold text-xs">{index + 1}</span>
          </div>
          <span className="font-semibold text-divine-dark text-sm sm:text-base leading-snug">
            {day.title}
          </span>
        </div>
        <div
          className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center bg-gray-50 group-open:bg-saffron-100 transition-colors duration-300"
        >
          <ChevronDown
            size={15}
            className="text-gray-400 group-open:text-saffron-600 group-open:rotate-180 transition-transform duration-300"
          />
        </div>
      </summary>

      <div className="px-6 sm:px-8 pb-5 space-y-4">
        {day.activities.map((act, ai) => {
          const Icon = timeIcons[act.time];
          return (
            <div key={ai} className="flex gap-4">
              <div className="flex flex-col items-center gap-1 flex-shrink-0">
                <div className="w-8 h-8 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center">
                  <Icon size={15} className={timeColors[act.time]} />
                </div>
                {ai < day.activities.length - 1 && (
                  <div className="w-px flex-1 bg-gray-100 min-h-[20px]" />
                )}
              </div>
              <div className="pt-1 pb-2">
                <div className={`text-xs font-semibold mb-1.5 ${timeColors[act.time]}`}>
                  {act.time}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{act.activity}</p>
              </div>
            </div>
          );
        })}
      </div>
    </details>
  );
}

function ItineraryCard({ item }: { item: ItineraryItem }) {
  return (
    <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
      {/* Card Header */}
      <div
        className="px-6 sm:px-8 py-6 border-b border-gray-50"
        style={{
          background:
            "linear-gradient(135deg, #FFF8F0 0%, #FFFAF5 100%)",
        }}
      >
        <div className="flex items-center justify-between flex-wrap gap-3">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-saffron-100 text-saffron-700">
                {item.duration}
              </span>
              <span className="inline-flex items-center gap-1 text-xs text-gray-500 px-3 py-1 rounded-full bg-gray-50 border border-gray-100">
                <MapPin size={11} />
                {item.destination}
              </span>
            </div>
            <h3 className="font-playfair font-bold text-xl text-divine-dark">{item.package}</h3>
          </div>
          <a
            href="/#get-quote"
            onClick={() => {
              const tourIdMapping: Record<string, string> = {
                "itinerary-ayodhya": "ayodhya-darshan",
                "itinerary-ayodhya-varanasi": "ayodhya-varanasi",
                "itinerary-ayodhya-prayagraj-varanasi": "ayodhya-prayagraj-varanasi",
              };
              const mappedId = tourIdMapping[item.id] || item.id;
              const event = new CustomEvent("select-tour", { detail: mappedId });
              window.dispatchEvent(event);
            }}
            className="flex items-center justify-center bg-saffron-600 hover:bg-saffron-700 text-white px-5 py-2.5 rounded-xl font-bold text-sm transition-all hover:scale-105 active:scale-95 flex-shrink-0 shadow-md"
          >
            Book This Trip
          </a>
        </div>
      </div>

      {/* Days Accordion (Native <details> for 100% search engine/crawler indexing) */}
      <div className="divide-y divide-gray-50">
        {item.days.map((day, di) => (
          <ItineraryDay key={di} day={day} index={di} />
        ))}
      </div>
    </div>
  );
}

export default function Itinerary() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section ref={ref} id="itinerary" className="py-24 sm:py-32 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <div className="ornament-line max-w-xl mx-auto mb-4">
            <span className="text-gold-600 text-xs tracking-[0.3em] uppercase font-medium whitespace-nowrap px-4">
              Day-by-Day Travel Plan
            </span>
          </div>
          <h2 className="font-playfair font-bold text-4xl sm:text-5xl lg:text-[3.4rem] text-divine-dark mb-5 leading-tight">
            Detailed{" "}
            <span className="text-gradient-saffron">Day-by-Day Plan</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Explore our carefully crafted pilgrimage plans — so you know exactly what to expect at every step of your sacred journey.
          </p>
        </motion.div>

        {/* Destination Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex flex-wrap gap-2 justify-center mb-8"
        >
          {itineraries.map((item, i) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(i)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                activeTab === i
                  ? "bg-saffron-600 text-white shadow-md"
                  : "bg-gray-50 text-gray-600 border border-gray-100 hover:border-saffron-200 hover:text-saffron-600"
              }`}
            >
              {item.destination} ({item.duration})
            </button>
          ))}
        </motion.div>

        {/* All Itineraries (Rendered in DOM, toggled with hidden class for 100% crawlability) */}
        <div className="relative">
          {itineraries.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={activeTab === i ? { opacity: 1, y: 0 } : { opacity: 0 }}
              transition={{ duration: 0.45 }}
              className={activeTab === i ? "block" : "hidden"}
            >
              <ItineraryCard item={item} />
            </motion.div>
          ))}
        </div>

        {/* Bottom nudge */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="text-center text-gray-400 text-sm mt-8"
        >
          All itineraries are customisable.{" "}
          <a
            href="/#get-quote"
            className="text-saffron-600 font-semibold hover:underline"
          >
            Enquire here to personalise your plan →
          </a>
        </motion.p>
      </div>
    </section>
  );
}
