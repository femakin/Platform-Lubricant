export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  image: string;
  title: string;
  content: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "James Okafor",
    role: "Fleet Manager",
    company: "Reliable Logistics Ltd.",
    image: "https://images.unsplash.com/photo-1675383094408-5ba5f3e185f0?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "SINCE SWITCHING TO PLATFORM LUBRICANTS",
    content:
      "As the Fleet Manager for Reliable Logistics Ltd., maintaining the performance and longevity of our vehicles is paramount. Since switching to Platform Lubricants, we've noticed a significant improvement in the efficiency and reliability of our fleet. The engine oils and gear oils provide exceptional protection and performance, even under the demanding conditions of our logistics operations. Downtime has decreased, and maintenance costs have been reduced. Platform Lubricants has truly exceeded our expectations and has become an integral part of our maintenance program.",
  },
  {
    id: "2",
    name: "Michael Adebayo",
    role: "Operations Director",
    company: "GreenTech Manufacturing",
    image: "https://images.unsplash.com/photo-1698885765700-77c5a9b5cc8a?q=80&w=692&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "SPECIALTY LUBRICANTS AND HYDRAULIC FLUIDS",
    content:
      "At GreenTech Manufacturing, we rely heavily on the performance of our industrial machinery to meet production targets. Using Platform Lubricants' specialty lubricants and hydraulic fluids has made a world of difference in our operations. The high-performance hydraulic oils keep our systems running smoothly and efficiently, while the specialty greases ensure the longevity of our equipment. The superior quality and reliability of Platform Lubricants have helped us achieve greater productivity and reduced wear and tear on our machines. I highly recommend Platform Lubricants to anyone looking for top-notch industrial lubricants.",
  },
  {
    id: "3",
    name: "Amina Ibrahim",
    role: "Workshop Owner",
    company: "AutoCare Services",
    image: "https://images.unsplash.com/photo-1576568684781-f409ebf87cc3?q=80&w=669&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "EXCEPTIONAL QUALITY AND PERFORMANCE",
    content:
      "Running an automotive workshop requires reliable products that I can trust with my customers' vehicles. Platform Lubricants has been our go-to choice for over two years now. Their engine oils, especially the ACE PLUS 20W 50, deliver outstanding performance across all vehicle types. Customer satisfaction has increased significantly, and we've seen fewer engine-related issues. The quality is consistent, and the pricing is competitive. Platform Lubricants has earned our trust and loyalty.",
  },
];

