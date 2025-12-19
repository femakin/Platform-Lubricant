"use client";

import Image from "next/image";
import LubricantCard from "./LubricantCard";
import SectionHeader from "./SectionHeader";
import { lubricants } from "../data/lubricants";

const backgroundImageUrl =
  "https://images.unsplash.com/photo-1657270081105-d6a924b9ddab?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

export default function LubricantsSection() {
  return (
    <section className="relative py-16 sm:py-24 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImageUrl}
          alt="Lubricants background"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        {/* Gradient overlay for smooth transition and readability */}
        <div className="absolute inset-0 bg-linear-to-b from-black/20 via-white/60 to-white/80"></div>
        {/* Additional subtle overlay for better card visibility */}
        <div className="absolute inset-0 bg-[#fefcfc]/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeader
          title="Our Lubricants"
          description="Premium quality lubricants for all your industrial and automotive needs"
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mt-12">
          {lubricants.map((lubricant) => (
            <LubricantCard key={lubricant.id} lubricant={lubricant} />
          ))}
        </div>
      </div>
    </section>
  );
}

