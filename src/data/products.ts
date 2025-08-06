
export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  images: string[];
  rating: number;
  reviewCount: number;
  category: string;
  description: string;
  features: string[];
  specifications: Record<string, string>;
  inStock: boolean;
  stockCount: number;
}

export const allProducts: Product[] = [
  {
    id: "1",
    name: "iPhone 15 Pro Max",
    price: 1199,
    originalPrice: 1299,
    images: [
      "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=600&h=600&fit=crop",
      // add more images if needed
    ],
    rating: 4.9,
    reviewCount: 2847,
    category: "smartphones",
    description: "The most advanced iPhone yet with titanium design, A17 Pro chip, and professional camera system.",
    features: ["A17 Pro Chip", "Titanium Design", "Pro Camera System", "Action Button", "USB-C"],
    specifications: {
      Display: "6.1-inch Super Retina XDR",
      Chip: "A17 Pro",
      Storage: "128GB, 256GB, 512GB, 1TB",
      Camera: "48MP Main, 12MP Ultra Wide, 12MP Telephoto",
      Video: "4K Dolby Vision up to 60 fps",
      Battery: "Up to 23 hours video playback",
      Weight: "187 grams",
      Colors: "Natural Titanium, Blue Titanium, White Titanium, Black Titanium"
    },
    inStock: true,
    stockCount: 23,
  },
  {
    id: "2",
    name: "MacBook Pro M3",
    price: 1999,
    originalPrice: 2199,
    images: [
      "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=600&h=600&fit=crop",
    ],
    rating: 4.8,
    reviewCount: 1523,
    category: "laptops",
    description: "Supercharged by M3 chip for incredible performance and all-day battery life.",
    features: ["M3 Chip", "14-inch Display", "18-hour Battery", "Space Black", "Studio-quality Mics"],
    specifications: {
      Display: "14-inch Retina Display",
      Chip: "Apple M3",
      Storage: "512GB, 1TB, 2TB",
      Camera: "1080p FaceTime HD",
      Battery: "Up to 18 hours video playback",
      Weight: "3.5 pounds",
      Colors: "Space Black, Silver"
    },
    inStock: true,
    stockCount: 10,
  },
  {
    id: "3",
    name: "Air Pods Pro 2",
    price: 249,
    originalPrice:299 ,
    images: [
      "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=400&h=400&fit=crop",
    ],
    rating: 4.8,
    reviewCount: 1523,
    category: "audio",
    description: "AirPods Pro (2nd Generation) deliver an unparalleled listening experience with Active Noise Cancellation, Transparency Mode, and a customizable fit for all-day comfort. Powered by the H2 chip, they offer richer audio quality, improved battery life, and Adaptive Transparency that intelligently tunes the outside world. With spatial audio, touch controls, and a MagSafe charging case, they're the perfect companion for music, calls, and everything in between.",
    features: ["H2 Chip", "Active Noise Cancellation (ANC)", "Adaptive Transparency Mode", "Personalized Spatial Audio", "Touch Controls"],
    specifications: {
      Battery: "Upto 8 hours",
      Chip: "Apple H2",
      Sound:"Personalized Spatial Audio with dynamic head tracking",
      Weight: "5.3 grams",
      Colors: "White"
    },
    inStock: true,
    stockCount: 10,
  },
  {
    id: "4",
    name: "Apple Watch Ultra 2",
    price: 249,
    originalPrice:299 ,
    images: [
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=400&h=400&fit=crop",
    ],
    rating: 4.8,
reviewCount: 2145,
category: "wearables",
description: "Apple Watch Ultra 2 is the ultimate smartwatch for athletes and adventurers, featuring a rugged titanium case, 49mm display, and the powerful S9 SiP chip. It offers an always-on Retina display, advanced health sensors, customizable Action button, dual-frequency GPS, and up to 36 hours of battery life. Built for endurance, exploration, and water sports, it’s the most capable and durable Apple Watch ever.",
features: [
  "S9 SiP chip",
  "Always-On Retina display",
  "Dual-frequency GPS",
  "Customizable Action button",
  "Advanced health sensors (heart, blood oxygen, ECG)",
  "Depth gauge and water temperature sensor",
  "36-hour battery life",
  "Night Mode",
  "IP6X dust resistance and WR100 water resistance"
],
specifications: {
  Battery: "Up to 36 hours (regular use)",
  Chip: "Apple S9 SiP",
  Display: "49mm Always-On Retina LTPO OLED display",
  GPS: "Precision dual-frequency GPS",
  Weight: "61.4 grams",
  Colors: "Titanium"
},
inStock: false,
stockCount: 0
  },

  // Add more products as needed
];


//  id: "4",
//     name: "Apple Watch Ultra 2",
//     price: 799,
//     images: [
//       "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=400&h=400&fit=crop",
//     ],
//     rating: 4.8,
//     reviewCount: 987,
//     category: "Wearables",
//   },