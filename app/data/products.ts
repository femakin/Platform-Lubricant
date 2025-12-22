export interface Product {
  id: string;
  name: string;
  slug: string;
  image: string;
  description: string;
  specifications?: string[];
  category: string;
  size?: string;
  applications?: string[];
  performanceBenefits?: string[];
  apiRating?: string;
}

export const products: Product[] = [
  // Engine Oils
  {
    id: "1",
    name: "EDGE Super SAE 20W-50",
    slug: "edge-super-sae-20w-50",
    image: "https://images.unsplash.com/photo-1516937941344-00b4e0337589?q=80&w=1170&auto=format&fit=crop",
    description: "EDGE Super SAE 20W-50 API SL/CF is a premium multi-grade engine oil formulated with high-quality base oils and advanced dual-purpose additive technology. It provides excellent wear protection, superior oxidation resistance, strong sludge control, and reliable light-diesel soot handling for both modern petrol engines and light-duty diesel engines.",
    specifications: ["SAE 20W-50", "API SL/CF", "Multi-grade"],
    category: "Engine Oils",
    size: "1L",
    apiRating: "API SL/CF",
    applications: [
      "Petrol engine vehicles (Motorcycle, cars, SUVs, taxis)",
      "Light-duty diesel engines (pickups, vans, generators)",
      "Mixed urban & highway driving",
      "Tropical high-temperature conditions",
      "Stop-and-go traffic operations"
    ],
    performanceBenefits: [
      "Advanced protection against engine wear",
      "Superior sludge & varnish resistance",
      "Improved piston and ring cleanliness",
      "Excellent high-temperature stability",
      "Smooth cold-start lubrication",
      "Reduced oil thickening & oxidation",
      "Strong oil-film strength under load",
      "Designed for petrol & light-duty diesel use"
    ],
  },
  {
    id: "2",
    name: "EDGE 20W-50 SL/CF-4",
    slug: "edge-20w-50-sl-cf-4",
    image: "https://images.unsplash.com/photo-1516937941344-00b4e0337589?q=80&w=1170&auto=format&fit=crop",
    description: "EDGE 20W-50 SL/CF-4 is a premium high-performance multi-grade engine oil formulated with premium base oils and advanced dual-purpose additive technology. It delivers superior wear protection, oxidation resistance, piston cleanliness, and strong soot control for both modern petrol engines and light-duty diesel engines.",
    specifications: ["SAE 20W-50", "API SL/CF-4", "Multi-grade"],
    category: "Engine Oils",
    apiRating: "API SL/CF-4",
    applications: [
      "Petrol engine vehicles (Motorcycle, cars, SUVs, taxis)",
      "Light-duty diesel engines (pickups, vans, generators)",
      "Mixed urban & highway driving",
      "Tropical high-temperature conditions",
      "Stop-and-go traffic operations",
      "Turbo-diesel and naturally aspirated diesel engines",
      "High-temperature, high-load operations"
    ],
    performanceBenefits: [
      "Advanced engine wear protection",
      "Heavy-duty diesel soot & acid control",
      "Superior sludge & deposit resistance",
      "High-temperature oxidation stability",
      "Strong oil film for extreme loads",
      "Improved piston & ring cleanliness",
      "Extended drain capability",
      "Reliable cold starting (20W grade)"
    ],
  },
  {
    id: "3",
    name: "VERO 50",
    slug: "vero-50",
    image: "https://images.unsplash.com/photo-1606964212858-c215029db704?q=80&w=1470&auto=format&fit=crop",
    description: "VERO 50 is a high-quality single-grade SAE 50 engine oil, formulated with premium base oils and robust CF/SF additive technology. It delivers strong oil film strength, superior wear protection, high detergent performance, and excellent oxidation stability, especially under high-temperature and heavy-load conditions.",
    specifications: ["SAE 50", "API CF/SF", "Monograde"],
    category: "Engine Oils",
    size: "4L",
    apiRating: "API CF/SF",
    applications: [
      "Heavy-duty diesel engines",
      "Petrol engines requiring SAE 50",
      "Trucks, buses & tankers",
      "Diesel generators & compressors",
      "Construction & agricultural machinery",
      "Marine & stationary engines",
      "High-temperature tropical operations"
    ],
    performanceBenefits: [
      "Strong oil film for extreme load protection",
      "Excellent wear control for pistons & bearings",
      "High detergent power for cleaner engines",
      "Good oxidation & thermal stability",
      "Superior acid neutralization (high TBN)",
      "Controls sludge, carbon & varnish",
      "Ideal for hot-climate continuous operation",
      "Reduces oil consumption in worn engines"
    ],
  },
  {
    id: "4",
    name: "VERO 40",
    slug: "vero-40",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070&auto=format&fit=crop",
    description: "VERO 40 is a high-quality single-grade SAE 40 engine oil, formulated with premium base oils and robust CF/SF additive technology. It delivers strong oil film strength, superior wear protection, high detergent performance, and excellent oxidation stability, especially under high-temperature and heavy-load conditions.",
    specifications: ["SAE 40", "API CF/SF", "Monograde"],
    category: "Engine Oils",
    size: "4L",
    apiRating: "API CF/SF",
    applications: [
      "Heavy-duty diesel engines",
      "Petrol engines requiring SAE 40",
      "Trucks, buses & tankers",
      "Diesel generators & compressors",
      "Construction & agricultural machinery",
      "Marine & stationary engines",
      "High-temperature tropical operations"
    ],
    performanceBenefits: [
      "Strong oil film for extreme load protection",
      "Excellent wear control for pistons & bearings",
      "High detergent power for cleaner engines",
      "Good oxidation & thermal stability",
      "Superior acid neutralization (high TBN)",
      "Controls sludge, carbon & varnish",
      "Ideal for hot-climate continuous operation",
      "Reduces oil consumption in worn engines"
    ],
  },
  // Gear Oils
  {
    id: "5",
    name: "GearSure EP 90",
    slug: "gearsure-ep-90",
    image: "https://images.unsplash.com/photo-1668261584978-c800ae21b237?w=500&auto=format&fit=crop",
    description: "GearSure EP 90 (API GL-5) is a premium Extreme Pressure (EP) gear oil formulated with high-quality mineral base oils and a superior sulphur-phosphorus additive package designed to protect gear systems operating under very high loads, high torque, and severe shock conditions. It delivers excellent lubrication for hypoid gears, heavy-duty manual transmissions, and automotive differentials.",
    specifications: ["SAE 90", "API GL-5", "Extreme Pressure"],
    category: "Gear Oils",
    apiRating: "API GL-5",
    applications: [
      "Automotive differentials",
      "Rear axles of cars, SUVs, trucks",
      "Hypoid gear systems",
      "Manual transmissions requiring GL-5",
      "Off-road vehicles",
      "Light and heavy commercial vehicles",
      "Industrial & agricultural final drives"
    ],
    performanceBenefits: [
      "Superior Extreme Pressure Protection",
      "Protection for Hypoid & High-Load Gears",
      "Excellent Thermal & Oxidation Stability",
      "Rust, Corrosion & Foaming Protection",
      "Good Low-Temperature Fluidity"
    ],
  },
  {
    id: "6",
    name: "GearSure EP 140",
    slug: "gearsure-ep-140",
    image: "https://images.unsplash.com/photo-1668261584978-c800ae21b237?w=500&auto=format&fit=crop",
    description: "GearSure EP 140 (API GL-5) is a premium, heavy-duty gear oil formulated with high-quality mineral base oils and a high-strength sulphur-phosphorus Extreme Pressure additive system. It is designed for high-load, high-torque, slow-speed gear systems, especially hypoid and final drive gears operating under severe service conditions such as heavy trucks, buses, SUVs, and off-road machinery.",
    specifications: ["SAE 140", "API GL-5", "Extreme Pressure"],
    category: "Gear Oils",
    apiRating: "API GL-5",
    applications: [
      "Heavy-duty differentials",
      "Rear axles of trucks, buses, SUVs",
      "Off-road and construction machinery",
      "Final drive units",
      "Hypoid gears under severe pressure",
      "Agricultural gear drives",
      "Manual transmissions requiring SAE 140 GL-5"
    ],
    performanceBenefits: [
      "Maximum Extreme Pressure Protection",
      "Superior High-Temperature Stability",
      "Designed for Heavy Loads & Tough Conditions",
      "Rust, Corrosion, and Foaming Protection",
      "Long Gear Life"
    ],
  },
  // Category Products (for navigation)
  {
    id: "7",
    name: "Automotive Lubricants",
    slug: "automotive-lubricants",
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1923&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Comprehensive range of premium lubricants designed specifically for automotive applications. From passenger cars to commercial vehicles and motorcycles, our automotive lubricants ensure optimal performance, engine protection, and extended vehicle life.",
    specifications: ["OEM specifications", "Multi-grade options", "Extended drain intervals"],
    category: "Automotive Lubricants",
  },
  {
    id: "8",
    name: "Industrial Lubricants",
    slug: "industrial-lubricants",
    image: "https://images.unsplash.com/photo-1657270057967-bd83afe3ce2c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "High-performance industrial lubricants designed for heavy machinery and industrial equipment. Ensures optimal performance, extended equipment life, and reduced maintenance costs.",
    specifications: ["Heavy-duty protection", "Extended drain intervals", "High temperature stability"],
    category: "Industrial Lubricants",
  },
  {
    id: "9",
    name: "Hydraulic Fluids",
    slug: "hydraulic-fluids",
    image: "https://images.unsplash.com/photo-1657818681207-79e5e206d226?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Premium hydraulic fluids for hydraulic systems, ensuring smooth operation and protection against wear, oxidation, and foaming. Suitable for various industrial and mobile hydraulic applications.",
    specifications: ["Anti-wear protection", "Oxidation resistance", "Foam control"],
    category: "Hydraulic Fluids",
  },
  {
    id: "10",
    name: "Gear Oils",
    slug: "gear-oils",
    image: "https://images.unsplash.com/photo-1701448149957-b96dbd1926ff?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Specialized gear oils for manual transmissions, differentials, and gearboxes. Provides excellent protection against wear, pitting, and scuffing under extreme pressure conditions.",
    specifications: ["Extreme pressure protection", "Thermal stability", "Long service life"],
    category: "Gear Oils",
  },
  {
    id: "11",
    name: "Greases",
    slug: "greases",
    image: "https://images.unsplash.com/photo-1581418412893-7bd90746381d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "High-quality greases for bearings, joints, and moving parts. Offers excellent water resistance, high temperature performance, and long-lasting lubrication.",
    specifications: ["Water resistance", "High temperature performance", "Long-lasting"],
    category: "Greases",
  },
  {
    id: "12",
    name: "Specialty Lubricants",
    slug: "specialty-lubricants",
    image: "https://images.unsplash.com/photo-1657270057967-bd83afe3ce2c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Specialized lubricants for unique applications and challenging environments. Customized solutions for specific industrial needs and extreme operating conditions.",
    specifications: ["Custom formulations", "Extreme conditions", "Specialized applications"],
    category: "Specialty Lubricants",
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}

export function getNextProduct(currentSlug: string): Product | undefined {
  const currentIndex = products.findIndex((p) => p.slug === currentSlug);
  if (currentIndex === -1 || currentIndex === products.length - 1) {
    return products[0]; // Loop back to first
  }
  return products[currentIndex + 1];
}

