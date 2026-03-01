export interface PackageType {
  id: number;
  title: string;
  duration: string;
  price: string;
  vehicle: string;
  description: string;
  highlights: string[];
  badge?: string;
}

export const packages: PackageType[] = [
  {
    id: 1,
    title: "Char Dham Yatra Cab Service",
    duration: "10–11 Days",
    price: "₹55,000 approx.",
    vehicle: "Ertiga / Dzire",
    description:
      "Private cab service for complete Char Dham Yatra including Yamunotri, Gangotri, Kedarnath and Badrinath.",
    highlights: [
      "Private vehicle for full trip",
      "Driver allowance included",
      "Toll & parking included",
      "Pickup from Haridwar / Dehradun",
      "Hotels booked by customer (assistance available)",
    ],
    badge: "Most Booked",
  },

  {
    id: 2,
    title: "Do Dham Cab Service",
    duration: "5–6 Days",
    price: "₹30,000 approx.",
    vehicle: "Ertiga / Dzire",
    description:
      "Private cab for Kedarnath & Badrinath Yatra with experienced hill driver.",
    highlights: [
      "Safe mountain driving",
      "Flexible darshan timing",
      "Pickup & drop service",
      "Hotel guidance available",
    ],
  },

  {
    id: 3,
    title: "Kedarnath Cab Service",
    duration: "3–4 Days",
    price: "₹18,000 approx.",
    vehicle: "Dzire / Ertiga",
    description:
      "Dedicated Kedarnath Yatra cab service including Sonprayag drop and return.",
    highlights: [
      "Private cab",
      "Flexible pickup timing",
      "Driver experienced in hill roads",
      "Hotel suggestion support",
    ],
    badge: "High Demand",
  },

  {
    id: 4,
    title: "Badrinath Cab Service",
    duration: "3 Days",
    price: "₹16,000 approx.",
    vehicle: "Dzire",
    description:
      "Comfortable cab service for Badrinath Yatra from Haridwar or Dehradun.",
    highlights: [
      "Private sedan",
      "Flexible itinerary",
      "Experienced hill driver",
    ],
  },

  {
    id: 5,
    title: "Gangotri & Yamunotri Cab",
    duration: "4–5 Days",
    price: "₹28,000 approx.",
    vehicle: "Ertiga",
    description:
      "Private cab service for Gangotri and Yamunotri pilgrimage.",
    highlights: [
      "Comfortable family vehicle",
      "Safe driving in mountain terrain",
      "Flexible schedule",
    ],
  },

  {
    id: 6,
    title: "Tungnath Chopta Cab + Stay",
    duration: "2 Days",
    price: "₹12,000 approx.",
    vehicle: "Dzire / Ertiga",
    description:
      "Cab service to Chopta & Tungnath with optional stay assistance (subject to availability).",
    highlights: [
      "Scenic Himalayan drive",
      "Stay assistance in Tungnath area",
      "Perfect weekend trip",
    ],
    badge: "Weekend Special",
  },
];