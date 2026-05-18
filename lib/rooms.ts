export interface Room {
  id: string;
  name: string;
  description: string;
  price: number;
  size: string;
  guests: number;
  view: string;
  tag: string;
  amenities: string[];
  gradient: string;
  image?: string | null;
}

export const rooms: Room[] = [
  {
    id: "deluxe-valley-view",
    name: "Deluxe Valley View",
    description: "Panoramic Lidder Valley views from a private balcony. Handcrafted Kashmiri décor, king-size bed, and premium bathroom with rain shower.",
    price: 7500,
    size: "380 sqft",
    guests: 2,
    view: "Valley View",
    tag: "Best Seller",
    amenities: ["Valley View", "King Bed", "Free WiFi", "Breakfast", "Rain Shower"],
    gradient: "linear-gradient(135deg, #1a3040, #2a5060)",
  },
  {
    id: "premium-mountain-suite",
    name: "Premium Mountain Suite",
    description: "Spacious suite with separate living area, wood-burning fireplace, and sweeping mountain vistas. Perfect for families and extended stays.",
    price: 12500,
    size: "650 sqft",
    guests: 4,
    view: "Mountain View",
    tag: "Popular",
    amenities: ["Fireplace", "Living Area", "Jacuzzi", "Mini Bar", "Balcony"],
    gradient: "linear-gradient(135deg, #3a2010, #5a3820)",
  },
  {
    id: "royal-cliff-suite",
    name: "Royal Cliff Suite",
    description: "Our crown jewel. A 1200 sqft suite perched on the highest cliff with a private terrace overlooking the entire Pahalgam valley.",
    price: 22000,
    size: "1200 sqft",
    guests: 2,
    view: "360° View",
    tag: "Signature",
    amenities: ["Private Terrace", "Butler", "360° Views", "All Inclusive"],
    gradient: "linear-gradient(135deg, #1a1a2a, #2a2a4a)",
  },
  {
    id: "honeymoon-cottage",
    name: "Honeymoon Cottage",
    description: "A secluded private cottage with flower-canopied terrace, clawfoot bathtub, and candlelit dining for the most romantic Kashmir experience.",
    price: 15000,
    size: "520 sqft",
    guests: 2,
    view: "Garden View",
    tag: "Romantic",
    amenities: ["Private Cottage", "Clawfoot Bath", "Canopy Bed", "Dinner Included"],
    gradient: "linear-gradient(135deg, #0a2a1a, #1a4a2a)",
  },
  {
    id: "grand-family-suite",
    name: "Grand Family Suite",
    description: "Two interconnected bedrooms, large living room and dining area. Ideal for families of up to 6 with dedicated kids corner and butler.",
    price: 18000,
    size: "980 sqft",
    guests: 6,
    view: "Garden + Valley",
    tag: "Family",
    amenities: ["2 Bedrooms", "Living Room", "Kids Area", "Butler"],
    gradient: "linear-gradient(135deg, #2a1a3a, #4a2a5a)",
  },
  {
    id: "superior-forest-view",
    name: "Superior Forest View",
    description: "Nestled among pine trees with a view of the dense Pahalgam forests. Perfect for nature lovers seeking peace and birdsong every morning.",
    price: 9500,
    size: "420 sqft",
    guests: 2,
    view: "Forest View",
    tag: "New",
    amenities: ["Forest View", "Queen Bed", "Private Sit-out", "Breakfast"],
    gradient: "linear-gradient(135deg, #1a2a1a, #2a4a3a)",
  },
];