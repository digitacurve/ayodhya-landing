import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { packages, itineraries } from "@/data/packagesData";
import { Clock, MapPin, Check, Phone, ArrowLeft, ShieldCheck, BadgeCheck, Star, Users, Sun, Sunset, Moon } from "lucide-react";
import LeadCapture from "@/components/LeadCapture";
import Footer from "@/components/Footer";
import ClientSelectTour from "./ClientSelectTour";

// Static params generation for SSG
export async function generateStaticParams() {
  return packages.map((pkg) => ({
    id: pkg.id,
  }));
}

// Dynamic SEO metadata generation
export async function generateMetadata({ params }: { params: { id: string } }) {
  const pkg = packages.find((p) => p.id === params.id);
  if (!pkg) {
    return {
      title: "Package Not Found",
    };
  }

  return {
    title: `${pkg.name} Tour Package (${pkg.duration}) | Ayodhya Dharshan`,
    description: `${pkg.subtitle}. Covers ${pkg.cities.join(", ")}. Book our premium, government registered yatra with comfortable hotels, private AC transport, and pre-arranged darshan.`,
    alternates: {
      canonical: `https://www.ayodhyadarshantourpackages.com/packages/${pkg.id}`,
    },
  };
}

const customItineraries: Record<
  string,
  {
    days: {
      title: string;
      activities: { time: "Morning" | "Afternoon" | "Evening"; activity: string }[];
    }[];
  }
> = {
  "ayodhya-same-day": {
    days: [
      {
        title: "Day 1 — Quick Ayodhya Same Day Yatra",
        activities: [
          {
            time: "Morning",
            activity: "Direct pickup from Ayodhya station/airport. Meet our driver-cum-guide and visit the historic Hanuman Garhi temple to take Hanuman ji's permission.",
          },
          {
            time: "Afternoon",
            activity: "Proceed to Shri Ram Janmabhoomi (Ram Mandir) for special darshan of Ram Lalla. Walk around the massive temple complex and explore Kanak Bhawan.",
          },
          {
            time: "Evening",
            activity: "Explore Dashrath Mahal and take a walk along Saryu River. Attend the grand Saryu Aarti at sunset, and transfer back to Ayodhya Railway Station / Airport.",
          },
        ],
      },
    ],
  },
  "varanasi-same-day": {
    days: [
      {
        title: "Day 1 — Complete Varanasi Same Day Yatra",
        activities: [
          {
            time: "Morning",
            activity: "Pickup from Varanasi Airport / Station. Drive straight to the sacred Shri Kashi Vishwanath Jyotirlinga Temple via the modern Corridor. Visit Annapurna temple.",
          },
          {
            time: "Afternoon",
            activity: "Drive to Sarnath (where Lord Buddha delivered his first sermon). Explore the Dhamek Stupa, ancient monastery ruins, and the Sarnath Archaeological Museum.",
          },
          {
            time: "Evening",
            activity: "Attend the world-famous evening Ganga Aarti at Dashashwamedh Ghat from a private boat. Walk through local markets and drop-off at Airport / Railway Station.",
          },
        ],
      },
    ],
  },
  "prayagraj-same-day": {
    days: [
      {
        title: "Day 1 — Prayagraj Same Day Yatra",
        activities: [
          {
            time: "Morning",
            activity: "Pickup from Prayagraj / Varanasi. Drive straight to Triveni Sangam — the holy confluence of Ganga, Yamuna, and invisible Saraswati. Board a boat for ritual dip (snan).",
          },
          {
            time: "Afternoon",
            activity: "Visit the unique reclining Letaji Hanuman Temple near Sangam. Explore Anand Bhawan, the historic ancestral home of the Nehru family (now a heritage museum).",
          },
          {
            time: "Evening",
            activity: "Visit the Mankameshwar Temple on the banks of Yamuna. Take a walk along the ghats and drop-off at Prayagraj Railway Station or Airport.",
          },
        ],
      },
    ],
  },
  "ayodhya-1n2d": {
    days: [
      {
        title: "Day 1 — Arrival & Ram Mandir Darshan",
        activities: [
          {
            time: "Morning",
            activity: "Pickup from Ayodhya Railway Station / Airport. Transfer to your hotel, check-in, and freshen up.",
          },
          {
            time: "Afternoon",
            activity: "Visit Shri Ram Janmabhoomi (Ram Mandir) — experience special darshan of Ram Lalla. Guided walk through the beautiful temple architecture.",
          },
          {
            time: "Evening",
            activity: "Visit the fortress temple of Hanuman Garhi. Walk through the colourful local bazaar and attend evening Saryu River Aarti at Ram Ki Paidi.",
          },
        ],
      },
      {
        title: "Day 2 — Sacred Stays & Departure",
        activities: [
          {
            time: "Morning",
            activity: "Enjoy a sunrise walk along Saryu River ghats and take a holy dip. Visit Nageshwarnath Temple, Kanak Bhawan, and Dashrath Mahal.",
          },
          {
            time: "Afternoon",
            activity: "Check-out from hotel. Explore local markets to buy authentic prasad and souvenirs.",
          },
          {
            time: "Evening",
            activity: "Transfer to Ayodhya Railway Station / Airport for your onward journey, carrying divine blessings of Ram Lalla.",
          },
        ],
      },
    ],
  },
  "varanasi-1n2d": {
    days: [
      {
        title: "Day 1 — Arrival & Ganga Aarti",
        activities: [
          {
            time: "Morning",
            activity: "Arrive at Lal Bahadur Shastri Airport / Varanasi Station. Meet our coordinator and transfer to hotel near the ghats. Check-in and relax.",
          },
          {
            time: "Afternoon",
            activity: "Visit Kashi Vishwanath Jyotirlinga Temple, the newly built Vishwanath Corridor, Annapurna Temple, and the protective deity Kal Bhairav Temple.",
          },
          {
            time: "Evening",
            activity: "Experience the mesmerizing evening Ganga Aarti at Dashashwamedh Ghat from a private boat. Dinner at local traditional restaurant.",
          },
        ],
      },
      {
        title: "Day 2 — Subah-e-Banaras & Sarnath Excursion",
        activities: [
          {
            time: "Morning",
            activity: "Wake up early for Subah-e-Banaras at Assi Ghat — watch classical music, yoga, and sunrise fire rituals. Sunrise boat ride on Ganga.",
          },
          {
            time: "Afternoon",
            activity: "Check-out from hotel. Drive to Sarnath to visit the historical Dhamek Stupa, deer park, and Buddhist temples.",
          },
          {
            time: "Evening",
            activity: "Free time for shopping (Banarasi Silk sarees / local sweets like Lal Peda). Drop-off at Airport / Railway Station for departure.",
          },
        ],
      },
    ],
  },
  "varanasi-ayodhya-2n3d": {
    days: [
      {
        title: "Day 1 — Kashi Darshan & Ganga Aarti",
        activities: [
          {
            time: "Morning",
            activity: "Arrive at Varanasi Airport/Station. Direct AC transfer to hotel. Visit Kashi Vishwanath Corridor, Annapurna Mandir, and Kal Bhairav.",
          },
          {
            time: "Afternoon",
            activity: "Visit the historical Sarnath site and museum. Explore the Buddhist monuments and gardens.",
          },
          {
            time: "Evening",
            activity: "Witness the magnificent Ganga Aarti from a boat at Dashashwamedh Ghat. Dinner and overnight stay in Varanasi.",
          },
        ],
      },
      {
        title: "Day 2 — Varanasi Sunrise & Drive to Ayodhya",
        activities: [
          {
            time: "Morning",
            activity: "Wake up for Subah-e-Banaras at Assi Ghat. Enjoy a sunrise boat ride. Return to hotel for check-out.",
          },
          {
            time: "Afternoon",
            activity: "Drive to Ayodhya in our private AC vehicle (approx 4.5 hours). Check-in at hotel and freshen up.",
          },
          {
            time: "Evening",
            activity: "Visit Hanuman Garhi and attend the grand Saryu River Aarti at Ram Ki Paidi. Overnight in Ayodhya.",
          },
        ],
      },
      {
        title: "Day 3 — Ram Mandir Darshan & Departure",
        activities: [
          {
            time: "Morning",
            activity: "Early morning darshan of Ram Lalla at the grand Ram Mandir. Explore Kanak Bhawan and Dashrath Mahal with guide.",
          },
          {
            time: "Afternoon",
            activity: "Check-out from hotel. Buy prasad and local goods. Transfer to Ayodhya Airport / Railway Station or back to Lucknow.",
          },
          {
            time: "Evening",
            activity: "Depart carrying the blessings of both Lord Shiva and Lord Ram. Yatra concludes. 🙏",
          },
        ],
      },
    ],
  },
};

const itineraryMapping: Record<string, string> = {
  "ayodhya-darshan": "ayodhya",
  "ayodhya-varanasi": "varanasi",
  "ayodhya-prayagraj-varanasi": "prayagraj",
  "lucknow-ayodhya": "lucknow-ayodhya",
  "ayodhya-varanasi-chitrakoot": "chitrakoot",
  "full-circuit": "full-circuit",
};

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

export default function PackageDetailPage({ params }: { params: { id: string } }) {
  const pkg = packages.find((p) => p.id === params.id);
  if (!pkg) {
    notFound();
  }

  const itinerary = customItineraries[pkg.id] || (() => {
    const itineraryId = itineraryMapping[pkg.id] || pkg.id;
    return itineraries.find((it) => it.id === itineraryId);
  })();

  const WA_NUMBER = "917011960307";
  const waMsg = encodeURIComponent(
    `Jai Shri Ram! 🙏 I am interested in the "${pkg.name}" tour package (${pkg.duration}, ₹${pkg.price.toLocaleString("en-IN")} for couple). Please share details.`
  );

  return (
    <div className="bg-sacred-cream min-h-screen font-inter overflow-x-hidden selection:bg-saffron-100 selection:text-saffron-800">
      <ClientSelectTour tourId={pkg.id} />

      {/* Top Banner */}
      <div className="bg-divine-dark border-b border-gold-500/15 py-2.5 text-center text-gold-400/85 text-[11px] font-medium tracking-wide uppercase px-4">
        🛡️ Govt. Registered & GST Approved — GSTIN: 09CJPPJ6346G1ZR  •  📞 Call: +91 9235222399
      </div>

      {/* Back Navigation Header */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group text-divine-dark hover:text-saffron-600 transition-colors">
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-semibold tracking-wide">Back to Home</span>
          </Link>

          <div className="flex items-center gap-3">

            <a
              href={`https://wa.me/${WA_NUMBER}?text=${waMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 hover:shadow-emerald-glow"
            >
              <span>💬</span> Custom Quote
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-divine-dark py-16 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 pattern-bg opacity-30"></div>
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[80vw] h-[30vh] bg-saffron-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 text-left">
              <div className="inline-flex items-center gap-1.5 mb-5 bg-saffron-500/10 border border-saffron-500/25 px-3 py-1 rounded-full text-saffron-400 font-inter text-[11px] font-semibold tracking-wide uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-saffron-400 animate-pulse"></span>
                Govt. Registered Agency (GSTIN)
              </div>
              
              <h1 className="font-playfair font-bold text-4xl sm:text-5xl lg:text-6xl text-white mb-4 leading-tight">
                {pkg.name}
              </h1>
              <p className="text-gold-300 text-lg sm:text-xl font-light mb-6">
                {pkg.subtitle}
              </p>

              {/* Tag Badges */}
              <div className="flex flex-wrap gap-2.5 mb-8">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-full bg-white/10 text-gold-300 border border-gold-500/20">
                  <Clock size={13} />
                  {pkg.duration}
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-full bg-white/5 text-white/70 border border-white/10">
                  <MapPin size={13} />
                  {pkg.cities.join(" · ")}
                </span>
              </div>

              {/* Pricing Callout Card */}
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5 sm:p-6 max-w-md">
                <div className="flex items-baseline gap-1.5 mb-1">
                  <span className="text-white/40 text-xs">Special Price:</span>
                  <span className="text-white/40 line-through text-sm">₹{(pkg.priceSuffix?.includes("Pax") ? pkg.originalPrice : (pkg.originalPrice / 2)).toLocaleString("en-IN")}</span>
                  <span className="text-gold-400 font-playfair font-bold text-3xl">₹{(pkg.priceSuffix?.includes("Pax") ? pkg.price : (pkg.price / 2)).toLocaleString("en-IN")}</span>
                  <span className="text-white/50 text-xs font-medium">{pkg.priceSuffix || "/ person"}</span>
                </div>
                <p className="text-saffron-400 text-xs font-semibold">
                  {pkg.priceSuffix?.includes("Pax") 
                    ? (pkg.note || "AC Cab & Driver-cum-Guide included") 
                    : `₹${pkg.price.toLocaleString("en-IN")} total for couple (double-sharing basis)`
                  }
                </p>
                <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between gap-4">
                  <span className="text-white/60 text-xs leading-snug">Confirm with 25% Advance payment</span>
                  <a
                    href="#book-now"
                    className="bg-saffron-600 hover:bg-saffron-700 text-white px-5 py-2.5 rounded-xl text-xs font-bold transition-all shadow-md shadow-saffron-500/10"
                  >
                    Lock Yatra Rates
                  </a>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/5 aspect-[4/3] sm:aspect-[16/10] lg:aspect-square bg-gray-900">
                <img
                  src={pkg.image}
                  alt={pkg.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Itinerary Timeline (Left/Center) */}
            <div className="lg:col-span-7 space-y-12">
              <div>
                <h2 className="font-playfair font-bold text-3xl sm:text-4xl text-divine-dark mb-4">
                  Day-by-Day Itinerary
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed max-w-xl">
                  This detailed plan traces your complete spiritual journey. Our licensed guides and experienced driver ensure everything moves perfectly on schedule.
                </p>
              </div>

              {itinerary && itinerary.days ? (
                <div className="space-y-6 relative before:absolute before:left-4 before:top-4 before:bottom-4 before:w-0.5 before:bg-saffron-200">
                  {itinerary.days.map((day, di) => (
                    <div key={di} className="relative pl-10 group">
                      {/* Timeline dot */}
                      <div className="absolute left-1.5 top-1.5 w-6.5 h-6.5 rounded-full bg-saffron-600 text-white flex items-center justify-center border-4 border-sacred-cream z-10 shadow-sm text-[10px] font-bold">
                        {di + 1}
                      </div>

                      {/* Day card */}
                      <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition-shadow">
                        <h3 className="font-semibold text-divine-dark text-lg mb-4">
                          {day.title}
                        </h3>

                        {/* Activities timeline */}
                        <div className="space-y-4">
                          {day.activities.map((act, ai) => {
                            const Icon = timeIcons[act.time];
                            return (
                              <div key={ai} className="flex gap-3">
                                <div className="flex flex-col items-center flex-shrink-0">
                                  <div className="w-8 h-8 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center">
                                    <Icon size={14} className={timeColors[act.time]} />
                                  </div>
                                </div>
                                <div className="pt-0.5">
                                  <div className={`text-[10px] font-bold uppercase tracking-wider ${timeColors[act.time]} mb-0.5`}>
                                    {act.time}
                                  </div>
                                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                                    {act.activity}
                                  </p>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-400 italic">No detailed itinerary available for this package.</p>
              )}
            </div>

            {/* Inclusions & Highlights Sidebar (Right) */}
            <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-24">
              
              {/* Features Card */}
              <div className="bg-white rounded-3xl border border-gray-100 p-6 sm:p-8 shadow-sm">
                <h3 className="font-playfair font-bold text-xl text-divine-dark mb-4 pb-3 border-b border-gray-100">
                  What's Included:
                </h3>
                <ul className="space-y-3.5">
                  {pkg.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-saffron-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check size={11} className="text-saffron-600 font-bold" strokeWidth={3} />
                      </div>
                      <span className="text-gray-600 text-sm leading-snug font-medium">
                        {feat}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Exclusions Card */}
              <div className="bg-white rounded-3xl border border-gray-100 p-6 shadow-sm">
                <h3 className="font-playfair font-bold text-[15px] uppercase tracking-wider text-gray-400 mb-4">
                  Exclusions & Notes:
                </h3>
                <ul className="space-y-3.5 text-xs text-gray-500 leading-normal">
                  <li className="flex items-start gap-2.5">
                    <span className="text-[12px] flex-shrink-0">✈️</span>
                    <span><strong>Flight/Train/Bus Tickets:</strong> Not included in base pricing. You can self-book or request us to book them at actual cost during confirmation.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-red-500 font-bold flex-shrink-0 text-[10px] mt-[1px]">✕</span>
                    <span><strong>GST/Service Tax:</strong> 5% GST is not included and will be detailed in your invoice.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-amber-500 font-bold flex-shrink-0 text-[10px] mt-[1px]">⚠️</span>
                    <span><strong>Darshan Passes:</strong> Provided strictly as a yatra package bundle. We cannot provide standalone darshan passes.</span>
                  </li>
                </ul>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Booking Form Anchor */}
      <div id="book-now" />
      <LeadCapture />

      <Footer />
    </div>
  );
}
