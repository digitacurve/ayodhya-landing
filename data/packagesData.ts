export type DayActivity = {
  time: "Morning" | "Afternoon" | "Evening";
  activity: string;
};

export type Day = {
  title: string;
  activities: DayActivity[];
};

export type ItineraryItem = {
  id: string;
  destination: string;
  duration: string;
  package: string;
  days: Day[];
};

export type PackageItem = {
  id: string;
  name: string;
  subtitle: string;
  duration: string;
  cities: string[];
  price: number;
  originalPrice: number;
  image: string;
  popular: boolean;
  featured: boolean;
  ctaText: string;
  accent: string;
  features: string[];
  priceSuffix: string;
  note?: string;
};

export const packages: PackageItem[] = [
  {
    id: "ayodhya-same-day",
    name: "Ayodhya Same Day Tour",
    subtitle: "Quick single-day direct pilgrimage",
    duration: "1 Day",
    cities: ["Ayodhya"],
    price: 5999,
    originalPrice: 7999,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Ram_Mandir%2C_Ayodhya.png/960px-Ram_Mandir%2C_Ayodhya.png",
    popular: false,
    featured: false,
    ctaText: "Get Tour Details",
    accent: "#FF6B00",
    features: [
      "AC Cab with Driver-cum-Guide",
      "Valid for up to 3 Pax",
      "Hanuman Garhi & Kanak Bhawan",
      "Ram Mandir Darshan Support",
      "Saryu River Ghat Walk",
      "24/7 WhatsApp Support",
    ],
    priceSuffix: " (For 3 Pax)",
    note: "Perfect for quick Vande Bharat travellers",
  },
  {
    id: "varanasi-same-day",
    name: "Varanasi Same Day Tour",
    subtitle: "Complete Kashi darshan in one day",
    duration: "1 Day",
    cities: ["Varanasi"],
    price: 7999,
    originalPrice: 10999,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Evening_Ganga_Aarti_at_Dashashwamedh_Ghat.JPG/960px-Evening_Ganga_Aarti_at_Dashashwamedh_Ghat.JPG",
    popular: true,
    featured: false,
    ctaText: "Get Full Itinerary",
    accent: "#D4AF37",
    features: [
      "AC Cab with Driver-cum-Guide",
      "Valid for up to 3 Pax",
      "Kashi Vishwanath Corridor Visit",
      "Excursion to Sarnath Ruins",
      "Evening Ganga Aarti Boat Ride",
      "Assam Ghat & Manikarnika",
    ],
    priceSuffix: " (For 3 Pax)",
    note: "Most popular for quick transit flights",
  },
  {
    id: "ayodhya-1n2d",
    name: "Ayodhya Yatra (1N/2D)",
    subtitle: "Devotional overnight stay in Ram Bhumi",
    duration: "2 Days",
    cities: ["Ayodhya"],
    price: 9998,
    originalPrice: 12998,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Ram_Mandir%2C_Ayodhya.png/960px-Ram_Mandir%2C_Ayodhya.png",
    popular: false,
    featured: false,
    ctaText: "Get Tour Details",
    accent: "#FF6B00",
    features: [
      "Best Hotel Stay near Mandir",
      "Private AC Transfers Included",
      "Ram Mandir Darshan Assistance",
      "Hanuman Garhi & Kanak Bhawan",
      "Saryu River Evening Aarti",
      "Pure Veg Breakfast Included",
    ],
    priceSuffix: " / Person",
    note: "Ideal divine weekend escape",
  },
  {
    id: "varanasi-1n2d",
    name: "Varanasi Yatra (1N/2D)",
    subtitle: "Experience the eternal vibes of Kashi",
    duration: "2 Days",
    cities: ["Varanasi"],
    price: 9998,
    originalPrice: 12998,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Evening_Ganga_Aarti_at_Dashashwamedh_Ghat.JPG/960px-Evening_Ganga_Aarti_at_Dashashwamedh_Ghat.JPG",
    popular: false,
    featured: false,
    ctaText: "Get Tour Details",
    accent: "#D4AF37",
    features: [
      "Spotless 3★ Hotel Accommodation",
      "Private AC Cab Transfers",
      "Kashi Vishwanath Corridor Visit",
      "Sunset Ganga Aarti Boat Ride",
      "Guide support throughout yatra",
      "Morning Subah-e-Banaras Ghats",
    ],
    priceSuffix: " / Person",
    note: "Perfect spiritual transit",
  },
  {
    id: "varanasi-ayodhya-2n3d",
    name: "Varanasi Ayodhya Yatra (2N/3D)",
    subtitle: "Double holy circuit package",
    duration: "3 Days",
    cities: ["Varanasi", "Ayodhya"],
    price: 13998,
    originalPrice: 18998,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Ram_Mandir%2C_Ayodhya.png/960px-Ram_Mandir%2C_Ayodhya.png",
    popular: true,
    featured: false,
    ctaText: "Get Full Itinerary",
    accent: "#7C3AED",
    features: [
      "Intercity AC Cab Transfers",
      "Spotless Hotel Stay Included",
      "Ram Mandir priority entry passes",
      "Kashi Vishwanath Corridor Visit",
      "Hanuman Garhi & Kanak Bhawan",
      "Evening Ganga Aarti & Saryu Aarti",
    ],
    priceSuffix: " / Person",
    note: "Covers both sacred destinations",
  },
  {
    id: "prayagraj-same-day",
    name: "Prayagraj Same Day Tour",
    subtitle: "Holy Triveni Sangam single-day tour",
    duration: "1 Day",
    cities: ["Prayagraj"],
    price: 6999,
    originalPrice: 8999,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Triveni_Sangam.JPG/960px-Triveni_Sangam.JPG",
    popular: false,
    featured: false,
    ctaText: "Get Tour Details",
    accent: "#0891B2",
    features: [
      "AC Cab with Driver-cum-Guide",
      "Valid for up to 3 Pax",
      "Triveni Sangam Holy Dip Snan",
      "Anand Bhawan Heritage Museum",
      "Sleeping Hanuman Temple Visit",
      "Mankameshwar Mandir Visit",
    ],
    priceSuffix: " (For 3 Pax)",
    note: "Best for quick ritual dips",
  },
  {
    id: "ayodhya-darshan",
    name: "Ayodhya Darshan",
    subtitle: "Ideal for a short, focused pilgrimage",
    duration: "2 Nights / 3 Days",
    cities: ["Ayodhya"],
    price: 14998,
    originalPrice: 19998,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Ram_Mandir%2C_Ayodhya.png/960px-Ram_Mandir%2C_Ayodhya.png",
    popular: false,
    featured: false,
    ctaText: "Get Tour Details",
    accent: "#FF6B00",
    features: [
      "Intercity AC Car Transfers",
      "Airport / Railway Pickup & Drop",
      "Best Hotel Stay",
      "Covers Sightseeing & Temple Visits",
      "Driver will guide you during the yatra",
      "Hanuman Garhi & Kanak Bhawan",
      "Saryu River Ghat Walk",
      "24/7 WhatsApp Support",
    ],
    priceSuffix: " / Person",
    note: "Ideal for a short divine weekend escape",
  },
  {
    id: "ayodhya-varanasi",
    name: "Ayodhya Varanasi",
    subtitle: "Our most booked Ayodhya tour with Varanasi",
    duration: "3 Nights / 4 Days",
    cities: ["Ayodhya", "Varanasi"],
    price: 25998,
    originalPrice: 33998,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Evening_Ganga_Aarti_at_Dashashwamedh_Ghat.JPG/960px-Evening_Ganga_Aarti_at_Dashashwamedh_Ghat.JPG",
    popular: true,
    featured: false,
    ctaText: "Get Full Itinerary",
    accent: "#D4AF37",
    features: [
      "Intercity AC Car Transfers",
      "Airport / Railway Pickup & Drop",
      "Best Hotel Stay",
      "Covers Sightseeing & Temple Visits",
      "Driver will guide you during the yatra",
      "Kashi Vishwanath Corridor Visit",
      "Ganga Aarti at Dashashwamedh Ghat",
      "Sarnath Excursion Included",
    ],
    priceSuffix: " / Person",
    note: "8 of 12 seats booked this week",
  },
  {
    id: "ayodhya-prayagraj-varanasi",
    name: "Ayodhya · Prayagraj · Varanasi",
    subtitle: "The complete tirthdham circuit",
    duration: "4 Nights / 5 Days",
    cities: ["Ayodhya", "Prayagraj", "Varanasi"],
    price: 31998,
    originalPrice: 41998,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Triveni_Sangam.JPG/960px-Triveni_Sangam.JPG",
    popular: false,
    featured: true,
    ctaText: "Get Full Itinerary",
    accent: "#7C3AED",
    features: [
      "Intercity AC Car Transfers",
      "Airport / Railway Pickup & Drop",
      "Best Hotel Stay",
      "Covers Sightseeing & Temple Visits",
      "Driver will guide you during the yatra",
      "Triveni Sangam Prayagraj Visit",
      "Anand Bhawan & Heritage Tour",
      "Kashi Vishwanath + Ganga Aarti",
    ],
    priceSuffix: " / Person",
    note: "Covers three of India's holiest cities",
  },
  {
    id: "lucknow-ayodhya",
    name: "Lucknow · Ayodhya",
    subtitle: "Heritage & devotion beautifully combined",
    duration: "3 Nights / 4 Days",
    cities: ["Lucknow", "Ayodhya"],
    price: 29998,
    originalPrice: 39998,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Bara_Imambara_Lucknow.jpg/960px-Bara_Imambara_Lucknow.jpg",
    popular: false,
    featured: false,
    ctaText: "Get Tour Details",
    accent: "#0891B2",
    features: [
      "Intercity AC Car Transfers",
      "Airport / Railway Pickup & Drop",
      "Best Hotel Stay",
      "Covers Sightseeing & Temple Visits",
      "Driver will guide you during the yatra",
      "Bara Imambara & Heritage Tour",
      "Lucknow Food Walk Experience",
      "24/7 WhatsApp Support",
    ],
    priceSuffix: " / Person",
    note: "Nawabi culture meets Ram Bhumi devotion",
  },
  {
    id: "ayodhya-varanasi-chitrakoot",
    name: "Ayodhya · Varanasi · Chitrakoot",
    subtitle: "Tracing the sacred path of Lord Ram",
    duration: "4 Nights / 5 Days",
    cities: ["Ayodhya", "Varanasi", "Chitrakoot"],
    price: 33998,
    originalPrice: 43998,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Mandakini_River.jpg/960px-Mandakini_River.jpg",
    popular: true,
    featured: false,
    ctaText: "Talk To Tour Expert",
    accent: "#059669",
    features: [
      "Intercity AC Car Transfers",
      "Airport / Railway Pickup & Drop",
      "Best Hotel Stay",
      "Covers Sightseeing & Temple Visits",
      "Driver will guide you during the yatra",
      "Kamadgiri Parikarama Chitrakoot",
      "Ramghat & Sati Anusuya Ashram",
      "Varanasi Ganga Aarti Experience",
    ],
    priceSuffix: " / Person",
    note: "Follow Ram's footsteps from Ayodhya to exile",
  },
  {
    id: "full-circuit",
    name: "Full Ramayana Circuit",
    subtitle: "The ultimate Ramayana pilgrimage",
    duration: "5 Nights / 6 Days",
    cities: ["Ayodhya", "Prayagraj", "Varanasi", "Chitrakoot"],
    price: 36998,
    originalPrice: 47998,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Ram_Mandir%2C_Ayodhya.png/960px-Ram_Mandir%2C_Ayodhya.png",
    popular: false,
    featured: true,
    ctaText: "Talk To Tour Expert",
    accent: "#8B0000",
    features: [
      "Intercity AC Car Transfers",
      "Airport / Railway Pickup & Drop",
      "Best Hotel Stay",
      "Covers Sightseeing & Temple Visits",
      "Driver will guide you during the yatra",
      "All 4 Sacred Destinations Covered",
      "Triveni Sangam + Kamadgiri Parikrama",
      "Ganga Aarti + Personal Puja Arranged",
    ],
    priceSuffix: " / Person",
    note: "Most complete Ramayana circuit — limited slots",
  },
  {
    id: "ayodhya-lucknow-varanasi",
    name: "Ayodhya · Lucknow · Varanasi",
    subtitle: "Spiritual yatra combined with Nawabi culture",
    duration: "4 Nights / 5 Days",
    cities: ["Ayodhya", "Lucknow", "Varanasi"],
    price: 35998,
    originalPrice: 45998,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Bara_Imambara_Lucknow.jpg/960px-Bara_Imambara_Lucknow.jpg",
    popular: false,
    featured: false,
    ctaText: "Get Tour Details",
    accent: "#7C3AED",
    features: [
      "Intercity Private AC Car Transfers",
      "Spotless 3★ Accommodation Stay",
      "Ram Mandir Pre-arranged Passes",
      "Bara Imambara & Heritage Tour",
      "Kashi Vishwanath Corridor Visit",
      "Varanasi Ganga Aarti Boat Ride",
    ],
    priceSuffix: " / Person",
    note: "Premium heritage and devotional circuit",
  },
  {
    id: "kashi-viswanath-special",
    name: "Kashi Vishwanath Special",
    subtitle: "Sacred trip to Lord Shiva's holy city",
    duration: "2 Nights / 3 Days",
    cities: ["Varanasi"],
    price: 12998,
    originalPrice: 16998,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Evening_Ganga_Aarti_at_Dashashwamedh_Ghat.JPG/960px-Evening_Ganga_Aarti_at_Dashashwamedh_Ghat.JPG",
    popular: true,
    featured: false,
    ctaText: "Get Full Itinerary",
    accent: "#D4AF37",
    features: [
      "AC Cab Transfers from Station/Airport",
      "Best Hotel Accommodation near Corridor",
      "Ganga Aarti Sunset Boat Cruise",
      "Subah-e-Banaras Ghats Visit",
      "Professional Licensed Guide Support",
      "Sarnath Buddhist Excursion Visit",
    ],
    priceSuffix: " / Person",
    note: "Middle column alignment - Best seller for Kashi",
  },
  {
    id: "complete-up-pilgrimage",
    name: "Complete UP Pilgrimage Tour",
    subtitle: "The ultimate 5-city holy circuit",
    duration: "6 Nights / 7 Days",
    cities: ["Ayodhya", "Prayagraj", "Varanasi", "Lucknow", "Chitrakoot"],
    price: 42998,
    originalPrice: 54998,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Ram_Mandir%2C_Ayodhya.png/960px-Ram_Mandir%2C_Ayodhya.png",
    popular: false,
    featured: true,
    ctaText: "Talk To Tour Expert",
    accent: "#8B0000",
    features: [
      "AC Transfers between all UP cities",
      "Spotless Hotel Stay in all destinations",
      "Ram Mandir priority passes coordinate",
      "Triveni Sangam snan boat ride",
      "Kamadgiri Parikrama & forest trails",
      "Kashi Vishwanath Corridor & Ganga Aarti",
    ],
    priceSuffix: " / Person",
    note: "The most comprehensive UP pilgrimage",
  },
];

export const itineraries: ItineraryItem[] = [
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
    destination: "Ayodhya & Varanasi",
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
    destination: "Ayodhya, Prayagraj & Varanasi",
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
    id: "lucknow-ayodhya",
    destination: "Lucknow & Ayodhya",
    duration: "3N / 4D",
    package: "Lucknow Ayodhya Tour Package",
    days: [
      {
        title: "Day 1 — Welcome to Lucknow: The City of Nawabs",
        activities: [
          {
            time: "Morning",
            activity:
              "Arrive at Lucknow Amausi Airport / Railway Station. Meet our representative and transfer to your hotel. Check-in and relax.",
          },
          {
            time: "Afternoon",
            activity:
              "Explore the majestic Bara Imambara and its famous Bhool Bhulaiya (labyrinth). Take a picture at the iconic Rumi Darwaza. Guided heritage walk.",
          },
          {
            time: "Evening",
            activity:
              "Enjoy a local culinary food walk in Hazratganj bazaar. Taste the legendary vegetarian kebabs or explore local handicraft shops (Chikan embroidery).",
          },
        ],
      },
      {
        title: "Day 2 — Lucknow Monuments & Scenic Drive to Ayodhya",
        activities: [
          {
            time: "Morning",
            activity:
              "Visit the historic British Residency (1857 Mutiny landmark) and the beautiful Chhota Imambara. Return to hotel for check-out.",
          },
          {
            time: "Afternoon",
            activity:
              "Scenic drive to Ayodhya via the national highway (approx. 135 km, 2.5 hours). Check-in to hotel in Ayodhya and freshen up.",
          },
          {
            time: "Evening",
            activity:
              "First visit to Saryu River Ghats. Experience the serene evening walk along the river bed. Traditional dinner at your Ayodhya hotel.",
          },
        ],
      },
      {
        title: "Day 3 — Ram Janmabhoomi Darshan & Local Sightseeing",
        activities: [
          {
            time: "Morning",
            activity:
              "Ram Mandir (Shri Ram Janmabhoomi) darshan with our priority pass. Witness the grand morning aarti. Guided tour of the complex.",
          },
          {
            time: "Afternoon",
            activity:
              "Visit Hanuman Garhi temple (76 steps lead to the fortress temple). Visit Kanak Bhawan and explore the Dashrath Mahal complex.",
          },
          {
            time: "Evening",
            activity:
              "Attend the grand Saryu Aarti at Ram Ki Paidi ghat. Diya lighting ceremony on the holy Saryu waters. Dinner at hotel.",
          },
        ],
      },
      {
        title: "Day 4 — Mani Parvat & Departure via Lucknow",
        activities: [
          {
            time: "Morning",
            activity:
              "Visit Mani Parvat (sacred hillock) and explore Nageshwarnath Temple. Time for buying local prasad and souvenirs.",
          },
          {
            time: "Afternoon",
            activity:
              "Check-out from hotel. Drive back to Lucknow. Transfer to Lucknow Airport / Railway Station for onward journey.",
          },
          {
            time: "Evening",
            activity:
              "Depart Lucknow carrying wonderful memories of Awadhi culture and the spiritual blessings of Ayodhya. Jai Shri Ram! 🙏",
          },
        ],
      },
    ],
  },
  {
    id: "ayodhya-varanasi-chitrakoot",
    destination: "Ayodhya, Varanasi & Chitrakoot",
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
  {
    id: "full-circuit",
    destination: "Ayodhya, Prayagraj, Varanasi & Chitrakoot",
    duration: "5N / 6D",
    package: "Full Ramayana Circuit",
    days: [
      {
        title: "Day 1 — Arrival in Ayodhya & Ram Mandir Darshan",
        activities: [
          {
            time: "Morning",
            activity:
              "Arrive at Ayodhya Airport / Railway Station. Meet & greet, transfer to hotel. Quick freshen up and check-in.",
          },
          {
            time: "Afternoon",
            activity:
              "Special darshan of Ram Lalla at the grand Ram Mandir using our VIP passes. Guided parikrama of the temple compound.",
          },
          {
            time: "Evening",
            activity:
              "Visit Hanuman Garhi temple and Kanak Bhawan. Attend the soul-stirring Saryu River evening aarti with diya lighting. Overnight in Ayodhya.",
          },
        ],
      },
      {
        title: "Day 2 — Ayodhya Sightseeing & Drive to Prayagraj",
        activities: [
          {
            time: "Morning",
            activity:
              "Sunrise visit to Saryu River. Explore Dashrath Bhawan and Treta Ke Thakur temple. Return to hotel for breakfast and check-out.",
          },
          {
            time: "Afternoon",
            activity:
              "Drive to Prayagraj (approx. 170 km, 3.5 hours). Check-in at Prayagraj hotel and rest.",
          },
          {
            time: "Evening",
            activity:
              "Visit Mankameshwar Temple and explore the local Triveni Sangam ghat walk. Dinner and overnight stay in Prayagraj.",
          },
        ],
      },
      {
        title: "Day 3 — Prayagraj Sangam & Drive to Chitrakoot",
        activities: [
          {
            time: "Morning",
            activity:
              "Enjoy a boat ride to Triveni Sangam (confluence of Ganga, Yamuna & Saraswati) for holy dip and prayer. Visit the reclining Hanuman temple.",
          },
          {
            time: "Afternoon",
            activity:
              "Visit Anand Bhawan (historical Nehru family house). Check-out and drive to Chitrakoot (125 km, 3 hours). Check-in at hotel.",
          },
          {
            time: "Evening",
            activity:
              "Attend the evening Ganga Aarti at Ramghat on the banks of Mandakini River. Boat ride along Ramghat. Dinner at hotel.",
          },
        ],
      },
      {
        title: "Day 4 — Chitrakoot Holy Excursion & Drive to Varanasi",
        activities: [
          {
            time: "Morning",
            activity:
              "Perform Kamadgiri Parikrama (5 km path around the holy hill). Visit Gupt Godavari Caves and the sacred Sphatik Shila rock.",
          },
          {
            time: "Afternoon",
            activity:
              "Visit Sati Anusuya Ashram and Bharat Koop. Check-out and drive to Varanasi (approx. 220 km, 4.5 hours). Check-in at hotel.",
          },
          {
            time: "Evening",
            activity:
              "Relax and walk along the vibrant ghats of Varanasi. Dinner and overnight stay in Varanasi.",
          },
        ],
      },
      {
        title: "Day 5 — Varanasi Corridor & Ganga Aarti",
        activities: [
          {
            time: "Morning",
            activity:
              "Early morning boat ride to witness Subah-e-Banaras. Visit Kashi Vishwanath Temple (Jyotirlinga) via the corridor, Annapurna & Kal Bhairav.",
          },
          {
            time: "Afternoon",
            activity:
              "Excursion to Sarnath (where Buddha preached first sermon). Visit Dhamek Stupa and local archaeological museum.",
          },
          {
            time: "Evening",
            activity:
              "Experience the world-famous Ganga Aarti at Dashashwamedh Ghat from a private boat. Dinner and overnight stay in Varanasi.",
          },
        ],
      },
      {
        title: "Day 6 — Varanasi Ghats & Departure",
        activities: [
          {
            time: "Morning",
            activity:
              "Visit Sankat Mochan Hanuman Temple and Durga Mandir. Free time for buying Banarasi Silk sarees and souvenirs.",
          },
          {
            time: "Afternoon",
            activity:
              "Check-out from hotel. Transfer to Varanasi Airport or Railway Station for your return flight/train.",
          },
          {
            time: "Evening",
            activity:
              "Depart Varanasi, completing the ultimate Ramayana Yatra with divine blessings from all holy cities. Jai Shri Ram! 🙏",
          },
        ],
      },
    ],
  },
];
