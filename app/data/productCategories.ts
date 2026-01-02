export interface ProductCategory {
  id: string;
  name: string;
  slug: string;
  image: string;
  description: string;
  icon?: string;
}

export const productCategories: ProductCategory[] = [
  {
    id: "1",
    name: "Automotive Lubricants",
    slug: "automotive-lubricants",
    image: "/assets/KEG-13.jpg",
    description: "Premium lubricants for passenger cars, commercial vehicles, and motorcycles",
  },
  {
    id: "2",
    name: "Industrial Lubricants",
    slug: "industrial-lubricants",
    image: "/assets/KEG-14.jpg",
    description: "High-performance lubricants for heavy machinery and industrial equipment",
  },
  {
    id: "3",
    name: "Engine Oils",
    slug: "engine-oils",
    image: "/assets/KEG-15.jpg",
    description: "Premium engine oils for optimal performance and engine protection",
  },
  {
    id: "4",
    name: "Hydraulic Oils",
    slug: "hydraulic-fluids",
    image: "/assets/KEG-16.jpg",
    description: "Premium hydraulic fluids for smooth operation and system protection",
  },
  {
    id: "5",
    name: "Gear Oils",
    slug: "gear-oils",
    image: "/assets/KEG-10.jpg",
    description: "Specialized gear oils for transmissions, differentials, and gearboxes",
  },
  {
    id: "6",
    name: "Greases",
    slug: "greases",
    image: "/assets/KEG-17.jpg",
    description: "High-quality greases for bearings, joints, and moving parts",
  },
];

