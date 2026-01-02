export interface Lubricant {
  id: string;
  name: string;
  description: string;
  image: string;
  backgroundImage?: string;
  slug: string;
}

export const lubricants: Lubricant[] = [
  {
    id: "1",
    name: "EDGE Super SAE 20W-50",
    description: "Premium Multi-Grade Engine Oil for Petrol & Diesel",
    image: "/assets/KEG-1.jpg",
    backgroundImage: "/assets/keg set.png",
    slug: "edge-super-sae-20w-50",
  },
  {
    id: "2",
    name: "VERO 50",
    description: "High-Quality Single-Grade SAE 50 Engine Oil",
    image: "/assets/KEG-3.jpg",
    backgroundImage: "/assets/keg set.png",
    slug: "vero-50",
  },
  {
    id: "3",
    name: "VERO 40",
    description: "Premium Single-Grade SAE 40 Engine Oil",
    image: "/assets/KEG-4.jpg",
    backgroundImage: "/assets/keg set.png",
    slug: "vero-40",
  },
  {
    id: "4",
    name: "GearSure EP 90",
    description: "Premium Extreme Pressure Gear Oil API GL-5",
    image: "/assets/KEG-5.jpg",
    backgroundImage: "/assets/keg set.png",
    slug: "gearsure-ep-90",
  },
];

