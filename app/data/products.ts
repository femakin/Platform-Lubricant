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
    image: "/assets/KEG-11.jpg",
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
    image: "/assets/KEG-2.jpg",
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
    image: "/assets/KEG-5.jpg",
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
    image: "/assets/KEG-8.jpg",
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
    image: "/assets/KEG-5.jpg",
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
    image: "/assets/KEG-6.jpg",
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
  // Additional product variants
  {
    id: "7",
    name: "GEAR SURE EP 140",
    slug: "gear-sure-ep-140-api-gl-5",
    image: "/assets/KEG-10.jpg",
    description: "GEAR SURE EP 140 API GL-5 is a premium extreme pressure gear oil designed for heavy-duty applications requiring superior protection under extreme loads and high temperatures.",
    specifications: ["API GL-5", "Extreme Pressure"],
    category: "Gear Oils",
    apiRating: "API GL-5",
    applications: [
      "Heavy-duty differentials",
      "Rear axles of trucks, buses, SUVs",
      "Off-road and construction machinery"
    ],
    performanceBenefits: [
      "Superior Extreme Pressure Protection",
      "Excellent Thermal & Oxidation Stability",
      "Rust, Corrosion & Foaming Protection"
    ],
  },
  {
    id: "9",
    name: "EDGE ULTRA",
    slug: "edge-ultra-sae-20w-50",
    image: "/assets/KEG-12.jpg",
    description: "EDGE ULTRA SAE 20W-50 is a premium multi-grade engine oil for petrol and diesel engines. Delivers exceptional performance and protection for modern engines.",
    specifications: ["SAE 20W-50", "Multi-grade"],
    category: "Engine Oils",
    size: "1L",
    applications: [
      "Petrol engine vehicles",
      "Light-duty diesel engines",
      "High-performance applications"
    ],
    performanceBenefits: [
      "Superior engine wear protection",
      "Enhanced fuel economy",
      "Extended drain intervals"
    ],
  },
  {
    id: "10",
    name: "GEAR SURE EP 90",
    slug: "gear-sure-ep-90-api-gl-5",
    image: "/assets/KEG-9.jpg",
    description: "GEAR SURE EP 90 API GL-5 is a premium extreme pressure gear oil designed for automotive differentials and manual transmissions requiring superior protection.",
    specifications: ["SAE 90", "API GL-5", "Extreme Pressure"],
    category: "Gear Oils",
    apiRating: "API GL-5",
    applications: [
      "Automotive differentials",
      "Rear axles of cars, SUVs, trucks",
      "Manual transmissions"
    ],
    performanceBenefits: [
      "Superior Extreme Pressure Protection",
      "Excellent Thermal Stability",
      "Rust & Corrosion Protection"
    ],
  },
  {
    id: "11",
    name: "EDGE ULTRA",
    slug: "edge-ultra-sae-20w-50-4l",
    image: "/assets/KEG-1.jpg",
    description: "EDGE ULTRA SAE 20W-50 is a premium multi-grade engine oil for petrol and diesel engines. Available in 4L size for extended use.",
    specifications: ["SAE 20W-50", "Multi-grade"],
    category: "Engine Oils",
    size: "4L",
    applications: [
      "Petrol engine vehicles",
      "Light-duty diesel engines",
      "High-performance applications"
    ],
    performanceBenefits: [
      "Superior engine wear protection",
      "Enhanced fuel economy",
      "Extended drain intervals"
    ],
  },
  {
    id: "12",
    name: "GEAR SURE EP 140",
    slug: "gear-sure-ep-140-api-gl-5-4l",
    image: "/assets/KEG-3.jpg",
    description: "GEAR SURE EP 140 API GL-5 is a premium heavy-duty extreme pressure gear oil. Available in 4L size for heavy-duty applications.",
    specifications: ["SAE 140", "API GL-5", "Extreme Pressure"],
    category: "Gear Oils",
    size: "4L",
    apiRating: "API GL-5",
    applications: [
      "Heavy-duty differentials",
      "Rear axles of trucks, buses, SUVs",
      "Off-road machinery"
    ],
    performanceBenefits: [
      "Maximum Extreme Pressure Protection",
      "Superior High-Temperature Stability",
      "Long Gear Life"
    ],
  },
  {
    id: "13",
    name: "GEAR SURE EP 90",
    slug: "gear-sure-ep-90-api-gl-5-4l",
    image: "/assets/KEG-4.jpg",
    description: "GEAR SURE EP 90 API GL-5 is a premium extreme pressure gear oil. Available in 4L size for automotive and commercial applications.",
    specifications: ["SAE 90", "API GL-5", "Extreme Pressure"],
    category: "Gear Oils",
    size: "4L",
    apiRating: "API GL-5",
    applications: [
      "Automotive differentials",
      "Rear axles of cars, SUVs, trucks",
      "Manual transmissions"
    ],
    performanceBenefits: [
      "Superior Extreme Pressure Protection",
      "Excellent Thermal Stability",
      "Rust & Corrosion Protection"
    ],
  },
  {
    id: "14",
    name: "EDGE SUPER",
    slug: "edge-super-sae-20w-50-4l",
    image: "/assets/KEG-7.jpg",
    description: "EDGE SUPER SAE 20W-50 is a premium multi-grade engine oil for petrol and diesel engines. Available in 4L size for extended use.",
    specifications: ["SAE 20W-50", "Multi-grade"],
    category: "Engine Oils",
    size: "4L",
    applications: [
      "Petrol engine vehicles",
      "Light-duty diesel engines",
      "Mixed urban & highway driving"
    ],
    performanceBenefits: [
      "Advanced protection against engine wear",
      "Superior sludge & varnish resistance",
      "Excellent high-temperature stability"
    ],
  },
  {
    id: "15",
    name: "EDGE ULTRA",
    slug: "edge-ultra-sae-20w-50-5l",
    image: "/assets/KEG-6.jpg",
    description: "EDGE ULTRA SAE 20W-50 is a premium multi-grade engine oil for petrol and diesel engines. Available in 5L size for extended use.",
    specifications: ["SAE 20W-50", "Multi-grade"],
    category: "Engine Oils",
    size: "5L",
    applications: [
      "Petrol engine vehicles",
      "Light-duty diesel engines",
      "High-performance applications"
    ],
    performanceBenefits: [
      "Superior engine wear protection",
      "Enhanced fuel economy",
      "Extended drain intervals"
    ],
  },
  {
    id: "16",
    name: "EDGE SUPER",
    slug: "edge-super-sae-20w-50-5l",
    image: "/assets/KEG-2.jpg",
    description: "EDGE SUPER SAE 20W-50 is a premium multi-grade engine oil for petrol and diesel engines. Available in 5L size for extended use.",
    specifications: ["SAE 20W-50", "Multi-grade"],
    category: "Engine Oils",
    size: "5L",
    applications: [
      "Petrol engine vehicles",
      "Light-duty diesel engines",
      "Mixed urban & highway driving"
    ],
    performanceBenefits: [
      "Advanced protection against engine wear",
      "Superior sludge & varnish resistance",
      "Excellent high-temperature stability"
    ],
  },
  {
    id: "17",
    name: "VERO 40",
    slug: "vero-40-diesel-25l-api-cf-sf",
    image: "/assets/KEG-14.jpg",
    description: "VERO 40 is a high-quality single-grade SAE 40 engine oil for diesel engines. Available in 25L size for commercial and industrial applications.",
    specifications: ["SAE 40", "API CF/SF", "Monograde"],
    category: "Engine Oils",
    size: "25L",
    apiRating: "API CF/SF",
    applications: [
      "Heavy-duty diesel engines",
      "Trucks, buses & tankers",
      "Diesel generators & compressors",
      "Construction & agricultural machinery"
    ],
    performanceBenefits: [
      "Strong oil film for extreme load protection",
      "Excellent wear control",
      "High detergent power for cleaner engines",
      "Good oxidation & thermal stability"
    ],
  },
  {
    id: "18",
    name: "VERO 50",
    slug: "vero-50-diesel-25l-api-cf-sf",
    image: "/assets/KEG-15.jpg",
    description: "VERO 50 is a high-quality single-grade SAE 50 engine oil for diesel engines. Available in 25L size for commercial and industrial applications.",
    specifications: ["SAE 50", "API CF/SF", "Monograde"],
    category: "Engine Oils",
    size: "25L",
    apiRating: "API CF/SF",
    applications: [
      "Heavy-duty diesel engines",
      "Trucks, buses & tankers",
      "Diesel generators & compressors",
      "Construction & agricultural machinery"
    ],
    performanceBenefits: [
      "Strong oil film for extreme load protection",
      "Excellent wear control",
      "High detergent power for cleaner engines",
      "Good oxidation & thermal stability"
    ],
  },
  {
    id: "19",
    name: "GEAR SURE EP 90",
    slug: "gear-sure-ep-90-diesel-25l-api-gl-5",
    image: "/assets/KEG-16.jpg",
    description: "GEAR SURE EP 90 API GL-5 is a premium extreme pressure gear oil. Available in 25L size for commercial and industrial applications.",
    specifications: ["SAE 90", "API GL-5", "Extreme Pressure"],
    category: "Gear Oils",
    size: "25L",
    apiRating: "API GL-5",
    applications: [
      "Automotive differentials",
      "Rear axles of trucks, buses",
      "Industrial gear drives"
    ],
    performanceBenefits: [
      "Superior Extreme Pressure Protection",
      "Excellent Thermal Stability",
      "Rust & Corrosion Protection"
    ],
  },
  {
    id: "20",
    name: "GEAR SURE EP 140",
    slug: "gear-sure-ep-140-diesel-25l-api-gl-5",
    image: "/assets/KEG-13.jpg",
    description: "GEAR SURE EP 140 API GL-5 is a premium heavy-duty extreme pressure gear oil. Available in 25L size for commercial and industrial applications.",
    specifications: ["SAE 140", "API GL-5", "Extreme Pressure"],
    category: "Gear Oils",
    size: "25L",
    apiRating: "API GL-5",
    applications: [
      "Heavy-duty differentials",
      "Rear axles of trucks, buses, SUVs",
      "Off-road and construction machinery"
    ],
    performanceBenefits: [
      "Maximum Extreme Pressure Protection",
      "Superior High-Temperature Stability",
      "Long Gear Life"
    ],
  },
  {
    id: "21",
    name: "VERO 40",
    slug: "vero-40-diesel-sae-40",
    image: "/assets/KEG-17.jpg",
    description: "VERO 40 is a high-quality single-grade SAE 40 engine oil for diesel engines. Formulated with premium base oils and robust additive technology.",
    specifications: ["SAE 40", "Diesel"],
    category: "Engine Oils",
    applications: [
      "Heavy-duty diesel engines",
      "Trucks, buses & tankers",
      "Diesel generators & compressors"
    ],
    performanceBenefits: [
      "Strong oil film for extreme load protection",
      "Excellent wear control",
      "High detergent power for cleaner engines"
    ],
  },
  // Category Products (for navigation)
  // {
  //   id: "7",
  //   name: "Engine Oils",
  //   slug: "engine-oils",
  //   image: "/assets/KEG-15.jpg",
  //   description: "Premium engine oils for optimal performance and engine protection. Our comprehensive range of engine oils ensures superior lubrication, reduced wear, and extended engine life for all types of vehicles and machinery.",
  //   specifications: ["Multi-grade options", "Extended drain intervals", "Superior wear protection"],
  //   category: "Engine Oils",
  // },
  // {
  //   id: "8",
  //   name: "Automotive Lubricants",
  //   slug: "automotive-lubricants",
  //   image: "/assets/KEG-7.jpg",
  //   description: "Comprehensive range of premium lubricants designed specifically for automotive applications. From passenger cars to commercial vehicles and motorcycles, our automotive lubricants ensure optimal performance, engine protection, and extended vehicle life.",
  //   specifications: ["OEM specifications", "Multi-grade options", "Extended drain intervals"],
  //   category: "Automotive Lubricants",
  // },
  // {
  //   id: "9",
  //   name: "Industrial Lubricants",
  //   slug: "industrial-lubricants",
  //   image: "/assets/KEG-8.jpg",
  //   description: "High-performance industrial lubricants designed for heavy machinery and industrial equipment. Ensures optimal performance, extended equipment life, and reduced maintenance costs.",
  //   specifications: ["Heavy-duty protection", "Extended drain intervals", "High temperature stability"],
  //   category: "Industrial Lubricants",
  // },
  // {
  //   id: "10",
  //   name: "Hydraulic Fluids",
  //   slug: "hydraulic-fluids",
  //   image: "/assets/KEG-9.jpg",
  //   description: "Premium hydraulic fluids for hydraulic systems, ensuring smooth operation and protection against wear, oxidation, and foaming. Suitable for various industrial and mobile hydraulic applications.",
  //   specifications: ["Anti-wear protection", "Oxidation resistance", "Foam control"],
  //   category: "Hydraulic Fluids",
  // },
  // {
  //   id: "11",
  //   name: "Gear Oils",
  //   slug: "gear-oils",
  //   image: "/assets/KEG-10.jpg",
  //   description: "Specialized gear oils for manual transmissions, differentials, and gearboxes. Provides excellent protection against wear, pitting, and scuffing under extreme pressure conditions.",
  //   specifications: ["Extreme pressure protection", "Thermal stability", "Long service life"],
  //   category: "Gear Oils",
  // },
  // {
  //   id: "12",
  //   name: "Greases",
  //   slug: "greases",
  //   image: "/assets/KEG-11.jpg",
  //   description: "High-quality greases for bearings, joints, and moving parts. Offers excellent water resistance, high temperature performance, and long-lasting lubrication.",
  //   specifications: ["Water resistance", "High temperature performance", "Long-lasting"],
  //   category: "Greases",
  // },
  // {
  //   id: "13",
  //   name: "Specialty Lubricants",
  //   slug: "specialty-lubricants",
  //   image: "/assets/KEG-12.jpg",
  //   description: "Specialized lubricants for unique applications and challenging environments. Customized solutions for specific industrial needs and extreme operating conditions.",
  //   specifications: ["Custom formulations", "Extreme conditions", "Specialized applications"],
  //   category: "Specialty Lubricants",
  // },
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

