"use client";

import TopBar from "./components/TopBar";
import NavBar from "./components/NavBar";
import HeroCarousel from "./components/HeroCarousel";
import LubricantsSection from "./components/LubricantsSection";
import ProductCategoriesSection from "./components/ProductCategoriesSection";
import ServiceCard from "./components/ServiceCard";
import SectionHeader from "./components/SectionHeader";
import WhyChooseSection from "./components/WhyChooseSection";
import IndustriesSection from "./components/IndustriesSection";
import CertificationsSection from "./components/CertificationsSection";
import DistributorCTASection from "./components/DistributorCTASection";
import AboutSection from "./components/AboutSection";
import TestimonialSection from "./components/TestimonialSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import { heroSlides } from "./data/heroSlides";
import { services } from "./data/services";
import { aboutData } from "./data/aboutData";
import { testimonials } from "./data/testimonials";

export default function Home() {

  return (
    <div className="min-h-screen bg-[#fefcfc]">
      <TopBar />
      <NavBar />
      <HeroCarousel slides={heroSlides} />
      
      {/* Product Categories Section */}
      <ProductCategoriesSection />
      
      {/* Lubricants Section */}
      <LubricantsSection />
      
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

      {/* Why Choose Us Section */}
      <WhyChooseSection />

      {/* Industries Section */}
      <IndustriesSection />

      {/* About Us Section */}
      <AboutSection
        title={aboutData.title}
        description={aboutData.description}
        image={aboutData.image}
      />

      {/* Certifications Section */}
      <CertificationsSection />

      {/* Distributor CTA Section */}
      <DistributorCTASection />

      {/* Testimonials Section */}
      <TestimonialSection testimonials={testimonials} />

      {/* Contact Section */}
      <ContactSection />

      <Footer />
    </div>
  );
}
