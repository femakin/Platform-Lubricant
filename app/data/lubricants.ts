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
    name: "ACE PLUS 20W 50 4L",
    description: "Good Quality Multi Grade With OEM Specification",
    image: "https://images.unsplash.com/photo-1516937941344-00b4e0337589?q=80&w=1170&auto=format&fit=crop",
    backgroundImage: "https://images.unsplash.com/photo-1602928261664-bfcf023fbc23?q=80&w=1541&auto=format&fit=crop",
    slug: "ace-plus-20w-50-4l",
  },
  {
    id: "2",
    name: "SUPER HD 50 4L",
    description: "Superior Quality Monograde Lubricant For Diesel Engines",
    image: "https://images.unsplash.com/photo-1606964212858-c215029db704?q=80&w=1470&auto=format&fit=crop",
    backgroundImage: "https://images.unsplash.com/photo-1602928261664-bfcf023fbc23?q=80&w=1541&auto=format&fit=crop",
    slug: "super-hd-50-4l",
  },
  {
    id: "3",
    name: "SPRINT SAE 40 4L",
    description: "Premium Monograde Engine Oil For Petrol Engines Only",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070&auto=format&fit=crop",
    backgroundImage: "https://images.unsplash.com/photo-1602928261664-bfcf023fbc23?q=80&w=1541&auto=format&fit=crop",
    slug: "sprint-sae-40-4l",
  },
  {
    id: "4",
    name: "ACE SPEEDMAX 85W 140",
    description: "Super Gear Oil Is A Lubricant Made Specifically For Transmissions",
    image: "https://images.unsplash.com/photo-1668261584978-c800ae21b237?w=500&auto=format&fit=crop",
    backgroundImage: "https://images.unsplash.com/photo-1602928261664-bfcf023fbc23?q=80&w=1541&auto=format&fit=crop",
    slug: "ace-speedmax-85w-140",
  },
];

