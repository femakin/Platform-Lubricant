export interface Product {
  id: string;
  name: string;
  slug: string;
  image: string;
  description: string;
  specifications?: string[];
  category: string;
}

export const products: Product[] = [
  {
    id: "1",
    name: "ACE PLUS 20W 50 4L",
    slug: "ace-plus-20w-50-4l",
    image: "https://images.unsplash.com/photo-1516937941344-00b4e0337589?q=80&w=1170&auto=format&fit=crop",
    description: "Good Quality Multi Grade With OEM Specification. Premium engine oils for passenger cars, commercial vehicles, motorcycles, tricycles, and all kinds of generators. Formulated with high-quality virgin base oil and proven selected advanced additives designed to meet OEM specification lubricant requirements.",
    specifications: ["20W-50 Multi Grade", "OEM Specification", "4 Litres"],
    category: "Engine Oils",
  },
  {
    id: "2",
    name: "SUPER HD 50 4L",
    slug: "super-hd-50-4l",
    image: "https://images.unsplash.com/photo-1606964212858-c215029db704?q=80&w=1470&auto=format&fit=crop",
    description: "Superior Quality Monograde Lubricant For Diesel Engines. High-performance lubricants designed for heavy-duty diesel engines, ensuring optimal performance, extended equipment life, and reduced maintenance costs.",
    specifications: ["Monograde SAE 50", "Diesel Engine", "4 Litres"],
    category: "Engine Oils",
  },
  {
    id: "3",
    name: "SPRINT SAE 40 4L",
    slug: "sprint-sae-40-4l",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070&auto=format&fit=crop",
    description: "Premium Monograde Engine Oil For Petrol Engines Only. High-quality monograde engine oil specifically formulated for petrol engines, providing excellent protection and performance.",
    specifications: ["SAE 40 Monograde", "Petrol Engine Only", "4 Litres"],
    category: "Engine Oils",
  },
  {
    id: "4",
    name: "ACE SPEEDMAX 85W 140",
    slug: "ace-speedmax-85w-140",
    image: "https://images.unsplash.com/photo-1668261584978-c800ae21b237?w=500&auto=format&fit=crop",
    description: "Super Gear Oil Is A Lubricant Made Specifically For Transmissions. Specialized gear oil for manual transmissions, differentials, and gearboxes. Provides excellent protection against wear, pitting, and scuffing under extreme pressure conditions.",
    specifications: ["85W-140 Gear Oil", "Transmission Specific", "4 Litres"],
    category: "Gear Oils",
  },
  {
    id: "5",
    name: "Engine Oils",
    slug: "engine-oils",
    image: "https://images.unsplash.com/photo-1516937941344-00b4e0337589?q=80&w=1170&auto=format&fit=crop",
    description: "Premium engine oils for passenger cars, commercial vehicles, motorcycles, tricycles, and all kinds of generators. Formulated with high-quality virgin base oil and proven selected advanced additives designed to meet OEM specification lubricant requirements.",
    specifications: ["API SD/CC", "Monograde Engine Oil", "PETROL ENGINE ONLY"],
    category: "Engine Oils",
  },
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
    id: "6",
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

