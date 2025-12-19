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
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1923&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Premium lubricants for passenger cars, commercial vehicles, and motorcycles",
  },
  {
    id: "2",
    name: "Industrial Lubricants",
    slug: "industrial-lubricants",
   // https://images.unsplash.com/photo-1657270057967-bd83afe3ce2c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
    image: "https://images.unsplash.com/photo-1657270057967-bd83afe3ce2c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "High-performance lubricants for heavy machinery and industrial equipment",
  },
  {
    id: "3",
    name: "Engine Oils",
    slug: "engine-oils",
    image: "https://images.unsplash.com/photo-1590096227076-ebf4b077c89d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Premium engine oils for optimal performance and engine protection",
  },
  {
    id: "4",
    name: "Hydraulic Oils",
    slug: "hydraulic-fluids",
    image: "https://images.unsplash.com/photo-1657818681207-79e5e206d226?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Premium hydraulic fluids for smooth operation and system protection",
  },
  {
    id: "5",
    name: "Gear Oils",
    slug: "gear-oils",
    image: "https://images.unsplash.com/photo-1701448149957-b96dbd1926ff?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Specialized gear oils for transmissions, differentials, and gearboxes",
  },
  {
    id: "6",
    name: "Greases",
    slug: "greases",
    image: "https://images.unsplash.com/photo-1581418412893-7bd90746381d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "High-quality greases for bearings, joints, and moving parts",
  },
];

