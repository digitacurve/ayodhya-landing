"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ChevronDown, Sun, Sunset, Moon, MapPin, MessageCircle } from "lucide-react";

const WA_NUMBER = "919235222399";

type DayActivity = {
  time: "Morning" | "Afternoon" | "Evening";
  activity: string;
};

type Day = {
  title: string;
  activities: DayActivity[];
};

type ItineraryItem = {
  id: string;
  destination: string;
  duration: string;
  package: string;
  days: Day[];
};

const itineraries: ItineraryItem[] = [
  {
    id: "ayodhya",
    destination: "Ayodhya",
    duration: "2N / 3D",
    package: "Ayodhya Darshan Package",
    days: [
      {
        title: "Day 1 — Arrival & Ram Mandir Darshan",
        activities: [
          {
            time: "Morning",
            activity:
              "Arrive at Ayodhya Railway Station / Airport. Meet & greet by our representative. Transfer to hotel, check-in and freshen up.",
          },
          {
            time: "Afternoon",
            activity:
              "Visit Shri Ram Janmabhoomi (Ram Mandir) — darshan of Ram Lalla with our pre-arranged darshan pass. Guided tour of the temple complex with spiritual commentary.",
          },
          {
            time: "Evening",
            activity:
              "Visit Hanuman Garhi temple. Attend the evening aarti on the steps of Hanuman Garhi. Walk through the vibrant Ram Ghat bazaar. Return to hotel for dinner.",
          },
        ],
      },
      {
        title: "Day 2 — Sacred Temples & Saryu River",
        activities: [
          {
            time: "Morning",
            activity:
              "Early morning visit to Saryu River for a holy dip (snan). Sunrise walk along the ghats. Visit Nageshwarnath Temple and Ram Ki Paidi.",
          },
          {
            time: "Afternoon",
            activity:
              "Visit Kanak Bhawan (ornate temple gifted to Sita by Queen Kaikeyi). Explore Dashrath Bhawan (birthplace of King Dashrath). Visit Ram Katha Kunj museum.",
          },
          {
            time: "Evening",
            activity:
              "Attend the grand Saryu Aarti at Ram Ki Paidi — one of the most spiritually moving experiences in Ayodhya. Light diyas on the river. Return to hotel.",
          },
        ],
      },
      {
        title: "Day 3 — Heritage Temples & Departure",
        activities: [
          {
            time: "Morning",
            activity:
              "Visit Treta Ka Thakur (ancient Ramayana-era temple). Explore Mani Parvat — a sacred hillock associated with the Ramayana. Light shopping for prasad and religious items.",
          },
          {
            time: "Afternoon",
            activity:
              "Check-out from hotel. Final blessings at Ram Mandir if time permits. Transfer to Ayodhya Railway Station / Airport for onward journey.",
          },
          {
            time: "Evening",
            activity: "Depart from Ayodhya with a heart full of divine blessings. Jai Shri Ram! 🙏",
          },
        ],
      },
    ],
  },
  {
    id: "varanasi",
    destination: "Varanasi",
    duration: "3N / 4D",
    package: "Ayodhya Varanasi Tour Package",
    days: [
      {
        title: "Day 1 — Arrival in Ayodhya & Temple Darshan",
        activities: [
          {
            time: "Morning",
            activity:
              "Arrive at Lucknow Airport / Ayodhya Station. Transfer to Ayodhya hotel. Check-in and freshen up. Enjoy welcome lunch.",
          },
          {
            time: "Afternoon",
            activity:
              "Ram Mandir darshan with our pre-arranged darshan pass. Guided tour of the magnificent new temple complex. Visit Hanuman Garhi and Kanak Bhawan.",
          },
          {
            time: "Evening",
            activity:
              "Evening Saryu Aarti at Ram Ki Paidi. Ghat walk and diya lighting ceremony. Dinner at hotel with sattvic food.",
          },
        ],
      },
      {
        title: "Day 2 — Ayodhya Deep Dive & Drive to Varanasi",
        activities: [
          {
            time: "Morning",
            activity:
              "Early Saryu snan (holy dip) at sunrise. Visit Nageshwarnath Temple, Dashrath Bhawan and Ram Katha Kunj museum. Light breakfast.",
          },
          {
            time: "Afternoon",
            activity:
              "Depart Ayodhya for Varanasi (approx 200 km, 4.5 hours). Check-in at Varanasi hotel. Rest and freshen up.",
          },
          {
            time: "Evening",
            activity:
              "First glimpse of Varanasi — evening walk along the Ganga ghats. Optional boat ride on the Ganga at sunset. Dinner at hotel.",
          },
        ],
      },
      {
        title: "Day 3 — Kashi Darshan & Ganga Aarti",
        activities: [
          {
            time: "Morning",
            activity:
              "Early morning boat ride on the Ganga — witness Varanasi's sunrise ritual and burning ghats (from a respectful distance). Visit Manikarnika and Dashashwamedh Ghat.",
          },
          {
            time: "Afternoon",
            activity:
              "Visit Shri Kashi Vishwanath Temple (Jyotirlinga) via the newly built Kashi Vishwanath Corridor. Visit Annapurna Temple and Kal Bhairav Temple.",
          },
          {
            time: "Evening",
            activity:
              "Attend the iconic Ganga Aarti at Dashashwamedh Ghat — a mesmerising ceremony of fire, bells and chants. Return to hotel for dinner.",
          },
        ],
      },
      {
        title: "Day 4 — Sarnath & Departure",
        activities: [
          {
            time: "Morning",
            activity:
              "Visit Sarnath (15 km from Varanasi) — where Lord Buddha delivered his first sermon. Explore Dhamek Stupa, Sarnath Museum and the Deer Park.",
          },
          {
            time: "Afternoon",
            activity:
              "Check-out from hotel. Transfer to Varanasi Airport / Railway Station. Last blessings at Ganga Ghat if time permits.",
          },
          {
            time: "Evening",
            activity:
              "Depart Varanasi carrying the blessings of Kashi and the divine grace of Ram Lalla. Jai Shri Ram! 🙏",
          },
        ],
      },
    ],
  },
  {
    id: "prayagraj",
    destination: "Prayagraj",
    duration: "4N / 5D",
    package: "Ayodhya Prayagraj Varanasi Package",
    days: [
      {
        title: "Day 1 — Arrival in Ayodhya & Ram Mandir Darshan",
        activities: [
          {
            time: "Morning",
            activity:
              "Arrive at Lucknow Airport. Transfer to Ayodhya (75 km). Check-in at hotel. Welcome with tilak and teerth water ceremony.",
          },
          {
            time: "Afternoon",
            activity:
              "Ram Mandir darshan with pre-arranged pass. Comprehensive temple tour with our expert guide — learn the Ramayana history and architecture.",
          },
          {
            time: "Evening",
            activity:
              "Saryu Aarti at Ram Ki Paidi. Hanuman Garhi temple visit. Dinner and overnight stay in Ayodhya.",
          },
        ],
      },
      {
        title: "Day 2 — Full Ayodhya Exploration",
        activities: [
          {
            time: "Morning",
            activity:
              "Sunrise Saryu snan. Visit Kanak Bhawan, Treta Ka Thakur, Nageshwarnath and Dashrath Bhawan — covering the complete Ayodhya temple circuit.",
          },
          {
            time: "Afternoon",
            activity:
              "Explore Ram Katha Kunj museum (Ramayana in art and sculpture). Visit Mani Parvat and Gulab Bari. Light prasad shopping in temple bazaar.",
          },
          {
            time: "Evening",
            activity: "Sunset Saryu ghat walk. Traditional sattvic dinner. Overnight at Ayodhya hotel.",
          },
        ],
      },
      {
        title: "Day 3 — Drive to Prayagraj & Sangam Darshan",
        activities: [
          {
            time: "Morning",
            activity:
              "Depart Ayodhya for Prayagraj (175 km, approx 3.5 hours). Check-in at hotel. Rest and freshen up.",
          },
          {
            time: "Afternoon",
            activity:
              "Visit Triveni Sangam — the sacred confluence of Ganga, Yamuna and the invisible Saraswati. Boat ride on the Sangam. Ritual snan and puja at the ghats.",
          },
          {
            time: "Evening",
            activity:
              "Visit Hanuman Temple at Prayagraj. Explore the Kumbh Mela grounds (historical significance). Dinner and overnight at Prayagraj.",
          },
        ],
      },
      {
        title: "Day 4 — Prayagraj Heritage & Drive to Varanasi",
        activities: [
          {
            time: "Morning",
            activity:
              "Visit Anand Bhawan (ancestral home of Nehru family — now a museum). Allahabad Fort (visible exterior). Mankameshwar Temple.",
          },
          {
            time: "Afternoon",
            activity:
              "Depart for Varanasi (120 km, approx 2.5 hours). Check-in at Varanasi hotel. Evening boat ride on the Ganga.",
          },
          {
            time: "Evening",
            activity:
              "Attend the grand Ganga Aarti at Dashashwamedh Ghat. Optional visit to silk saree showroom (Varanasi Banarasi silk). Dinner.",
          },
        ],
      },
      {
        title: "Day 5 — Kashi Darshan & Departure",
        activities: [
          {
            time: "Morning",
            activity:
              "Early morning visit to Kashi Vishwanath Temple. Also visit Annapurna Temple, Kal Bhairav and Sankat Mochan Hanuman Temple.",
          },
          {
            time: "Afternoon",
            activity:
              "Check-out from hotel. Transfer to Varanasi Airport / Railway Station. Departure for home.",
          },
          {
            time: "Evening",
            activity:
              "Return home blessed from three of India's most sacred tirthdham cities. Jai Shri Ram! 🙏",
          },
        ],
      },
    ],
  },
  {
    id: "chitrakoot",
    destination: "Chitrakoot",
    duration: "4N / 5D",
    package: "Ayodhya Varanasi Chitrakoot Package",
    days: [
      {
        title: "Day 1 — Arrival in Ayodhya",
        activities: [
          {
            time: "Morning",
            activity: "Arrive in Ayodhya. Transfer to hotel. Check-in and welcome ceremony.",
          },
          {
            time: "Afternoon",
            activity:
              "Ram Mandir darshan with our pre-arranged darshan pass. Temple complex tour. Visit Hanuman Garhi.",
          },
          {
            time: "Evening",
            activity: "Saryu Aarti at Ram Ki Paidi. Dinner and rest.",
          },
        ],
      },
      {
        title: "Day 2 — Ayodhya Temples & Drive to Chitrakoot",
        activities: [
          {
            time: "Morning",
            activity:
              "Visit Kanak Bhawan, Dashrath Bhawan, Saryu Ghat. Full Ayodhya temple circuit with guide.",
          },
          {
            time: "Afternoon",
            activity:
              "Depart Ayodhya for Chitrakoot (210 km, approx 4 hours). Check-in at Chitrakoot hotel.",
          },
          {
            time: "Evening",
            activity:
              "Visit Ramghat — where Lord Ram bathed in Mandakini River. Evening aarti at Ramghat. Rest.",
          },
        ],
      },
      {
        title: "Day 3 — Chitrakoot Parikrama & Sacred Sites",
        activities: [
          {
            time: "Morning",
            activity:
              "Kamadgiri Parikarama (5 km sacred walk around the holy mountain where Ram lived during exile). Visit Kamtanath Temple at the peak.",
          },
          {
            time: "Afternoon",
            activity:
              "Visit Sati Anusuya Ashram (where Sita received divine blessings). Gupt Godavari caves (sacred caves). Janaki Kund.",
          },
          {
            time: "Evening",
            activity:
              "Sphatik Shila (the rock where Ram and Sita rested). Bharat Koop — the sacred well. Evening at Ramghat.",
          },
        ],
      },
      {
        title: "Day 4 — Drive to Varanasi & Ganga Aarti",
        activities: [
          {
            time: "Morning",
            activity: "Early departure from Chitrakoot to Varanasi (210 km, approx 4 hours). Check-in at hotel.",
          },
          {
            time: "Afternoon",
            activity:
              "Visit Kashi Vishwanath Temple via the Kashi Vishwanath Corridor. Annapurna Temple and Kal Bhairav.",
          },
          {
            time: "Evening",
            activity:
              "Grand Ganga Aarti at Dashashwamedh Ghat — the most spectacular aarti ceremony in India. Dinner.",
          },
        ],
      },
      {
        title: "Day 5 — Varanasi Morning & Departure",
        activities: [
          {
            time: "Morning",
            activity:
              "Sunrise boat ride on the Ganga. Visit Manikarnika Ghat. Sankat Mochan Hanuman Temple. Last puja at Ganga.",
          },
          {
            time: "Afternoon",
            activity:
              "Check-out from hotel. Transfer to Varanasi Airport / Railway Station for departure.",
          },
          {
            time: "Evening",
            activity:
              "Depart Varanasi — blessed by Ram Lalla, the forests of Chitrakoot and the sacred waters of the Ganga. Jai Shri Ram! 🙏",
          },
        ],
      },
    ],
  },
];

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

function ItineraryCard({ item }: { item: ItineraryItem }) {
  const [openDays, setOpenDays] = useState<Set<number>>(new Set([0]));

  const toggleDay = (i: number) => {
    setOpenDays((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });
  };

  const waMessage = encodeURIComponent(
    `Jai Shri Ram! 🙏 I'm interested in the "${item.package}" itinerary. Please share availability and full details.`
  );

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
            href={`https://wa.me/${WA_NUMBER}?text=${waMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white px-4 py-2.5 rounded-xl font-semibold text-sm transition-all hover:scale-105 active:scale-95 flex-shrink-0"
          >
            <MessageCircle size={15} />
            Book This Trip
          </a>
        </div>
      </div>

      {/* Days Accordion */}
      <div className="divide-y divide-gray-50">
        {item.days.map((day, di) => {
          const isOpen = openDays.has(di);
          return (
            <div key={di}>
              <button
                onClick={() => toggleDay(di)}
                className="w-full flex items-center justify-between gap-4 px-6 sm:px-8 py-4 text-left hover:bg-gray-50/50 transition-colors"
                aria-expanded={isOpen}
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-saffron-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-saffron-700 font-bold text-xs">{di + 1}</span>
                  </div>
                  <span className="font-semibold text-divine-dark text-sm sm:text-base leading-snug">
                    {day.title}
                  </span>
                </div>
                <motion.div
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.25 }}
                  className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-colors ${
                    isOpen ? "bg-saffron-100" : "bg-gray-50"
                  }`}
                >
                  <ChevronDown
                    size={15}
                    className={isOpen ? "text-saffron-600" : "text-gray-400"}
                  />
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  >
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
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
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
          <div className="ornament-line max-w-xs mx-auto mb-4">
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

        {/* Active Itinerary */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
        >
          <ItineraryCard item={itineraries[activeTab]} />
        </motion.div>

        {/* Bottom nudge */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="text-center text-gray-400 text-sm mt-8"
        >
          All itineraries are customisable.{" "}
          <a
            href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
              "Jai Shri Ram! I'd like to customise my Ayodhya tour itinerary. Please help me plan."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-saffron-600 font-semibold hover:underline"
          >
            Chat with us to personalise your plan →
          </a>
        </motion.p>
      </div>
    </section>
  );
}
