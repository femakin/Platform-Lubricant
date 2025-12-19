export interface Industry {
  id: string;
  name: string;
  description: string;
  image: string;
  icon: string;
}

export const industries: Industry[] = [
  {
    id: "1",
    name: "Automotive",
    description: "Premium lubricants for passenger vehicles, commercial fleets, and automotive workshops",
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1923&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    icon: "car",
  },
  {
    id: "2",
    name: "Manufacturing",
    description: "Industrial lubricants for production machinery and manufacturing equipment",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    icon: "factory",
  },
  {
    id: "3",
    name: "Construction",
    description: "Heavy-duty lubricants for construction equipment and machinery",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    icon: "construction",
  },
  {
    id: "4",
    name: "Power & Energy",
    description: "Specialized lubricants for power generation and energy sector applications",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    icon: "energy",
  },
  {
    id: "5",
    name: "Marine",
    description: "Marine-grade lubricants for ships, boats, and maritime equipment",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    icon: "marine",
  },
  {
    id: "6",
    name: "Agriculture",
    description: "Agricultural lubricants for farming equipment and machinery",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    icon: "agriculture",
  },
];

