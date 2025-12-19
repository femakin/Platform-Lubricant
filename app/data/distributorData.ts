export interface DistributorBenefit {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Region {
  id: string;
  name: string;
  description: string;
}

export const distributorBenefits: DistributorBenefit[] = [
  {
    id: "1",
    title: "Competitive Pricing",
    description: "Attractive wholesale pricing and volume discounts for distributors",
    icon: "pricing",
  },
  {
    id: "2",
    title: "Marketing Support",
    description: "Comprehensive marketing materials and promotional support",
    icon: "marketing",
  },
  {
    id: "3",
    title: "Training & Support",
    description: "Product training and ongoing technical support for your team",
    icon: "training",
  },
  {
    id: "4",
    title: "Exclusive Territory",
    description: "Protected territory rights for authorized distributors",
    icon: "territory",
  },
  {
    id: "5",
    title: "Fast Delivery",
    description: "Reliable supply chain with timely delivery to your location",
    icon: "delivery",
  },
  {
    id: "6",
    title: "Brand Recognition",
    description: "Partner with a trusted brand known for quality and reliability",
    icon: "brand",
  },
];

export const regions: Region[] = [
  {
    id: "1",
    name: "Lagos State",
    description: "Main distribution hub covering Lagos and surrounding areas",
  },
  {
    id: "2",
    name: "Abuja FCT",
    description: "Federal Capital Territory and neighboring states",
  },
  {
    id: "3",
    name: "South-West",
    description: "Ogun, Oyo, Osun, Ondo, Ekiti states",
  },
  {
    id: "4",
    name: "South-East",
    description: "Anambra, Enugu, Imo, Abia, Ebonyi states",
  },
  {
    id: "5",
    name: "South-South",
    description: "Rivers, Delta, Bayelsa, Akwa Ibom, Cross River states",
  },
  {
    id: "6",
    name: "North-Central",
    description: "Kogi, Kwara, Benue, Plateau, Nasarawa, Niger states",
  },
  {
    id: "7",
    name: "North-East",
    description: "Borno, Yobe, Adamawa, Taraba, Bauchi, Gombe states",
  },
  {
    id: "8",
    name: "North-West",
    description: "Kaduna, Kano, Katsina, Sokoto, Kebbi, Zamfara, Jigawa states",
  },
];

