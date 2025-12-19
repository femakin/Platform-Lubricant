export interface Certification {
  id: string;
  name: string;
  description: string;
  image?: string;
}

export interface QualityAssurance {
  title: string;
  description: string;
  certifications: Certification[];
  processSteps: string[];
}

export const qualityAssurance: QualityAssurance = {
  title: "Certifications & Quality Assurance",
  description:
    "Our commitment to quality is demonstrated through rigorous testing, international certifications, and adherence to the highest industry standards. Every product undergoes comprehensive quality control processes to ensure optimal performance and reliability.",
  certifications: [
    {
      id: "1",
      name: "SON Certified",
      description: "Standards Organisation of Nigeria certified products",
    },
    {
      id: "2",
      name: "ISO Standards",
      description: "International quality management standards",
    },
    {
      id: "3",
      name: "Lab Tested",
      description: "Rigorous laboratory testing and quality verification",
    },
    {
      id: "4",
      name: "OEM Approved",
      description: "Meets Original Equipment Manufacturer specifications",
    },
  ],
  processSteps: [
    "Raw material sourcing from certified suppliers",
    "Advanced blending and formulation processes",
    "Comprehensive laboratory testing and analysis",
    "Quality control inspections at every stage",
    "Performance testing under extreme conditions",
    "Final certification and quality assurance approval",
  ],
};

