"use client";

import TopBar from "./components/TopBar";
import NavBar from "./components/NavBar";
import HeroCarousel from "./components/HeroCarousel";
import ServiceCard from "./components/ServiceCard";
import SectionHeader from "./components/SectionHeader";
import Footer from "./components/Footer";
import { heroSlides } from "./data/heroSlides";
import { services } from "./data/services";

export default function Home() {

  return (
    <div className="min-h-screen bg-[#fefcfc]">
      <TopBar />
      <NavBar />
      <HeroCarousel slides={heroSlides} />
      
      {/* Services Section */}
      <section id="services" className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <SectionHeader
          title="Comprehensive Services"
          description="Comprehensive solutions for your industrial needs"
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              icon={service.icon}
              category={service.category}
              number={service.number}
              backgroundImage={service.backgroundImage}
              isDefaultHovered={index === 0}
            />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
