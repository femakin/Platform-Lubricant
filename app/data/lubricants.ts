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
    image: "https://images.unsplash.com/photo-1516937941344-00b4e0337589?q=80&w=1170&auto=format&fit=crop",
    backgroundImage: "https://images.unsplash.com/photo-1602928261664-bfcf023fbc23?q=80&w=1541&auto=format&fit=crop",
    slug: "edge-super-sae-20w-50",
  },
  {
    id: "2",
    name: "VERO 50",
    description: "High-Quality Single-Grade SAE 50 Engine Oil",
    image: "https://images.unsplash.com/photo-1606964212858-c215029db704?q=80&w=1470&auto=format&fit=crop",
    backgroundImage: "https://images.unsplash.com/photo-1602928261664-bfcf023fbc23?q=80&w=1541&auto=format&fit=crop",
    slug: "vero-50",
  },
  {
    id: "3",
    name: "VERO 40",
    description: "Premium Single-Grade SAE 40 Engine Oil",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070&auto=format&fit=crop",
    backgroundImage: "https://images.unsplash.com/photo-1602928261664-bfcf023fbc23?q=80&w=1541&auto=format&fit=crop",
    slug: "vero-40",
  },
  {
    id: "4",
    name: "GearSure EP 90",
    description: "Premium Extreme Pressure Gear Oil API GL-5",
    image: "https://images.unsplash.com/photo-1668261584978-c800ae21b237?w=500&auto=format&fit=crop",
    backgroundImage: "https://images.unsplash.com/photo-1602928261664-bfcf023fbc23?q=80&w=1541&auto=format&fit=crop",
    slug: "gearsure-ep-90",
  },
];

