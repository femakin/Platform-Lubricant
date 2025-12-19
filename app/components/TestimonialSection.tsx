"use client";

import Image from "next/image";
import { Testimonial } from "../data/testimonials";

interface TestimonialSectionProps {
  testimonials: Testimonial[];
}

export default function TestimonialSection({
  testimonials,
}: TestimonialSectionProps) {
  return (
    <section id="testimonials" className="bg-gradient-to-b from-[#fefcfc] to-gray-50 py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#f78a24] rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#f78a24] rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-sm font-semibold text-[#f78a24] uppercase tracking-wider mb-4 block">
            Customer Stories
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-4">
            We Make Our Product Users
            <br />
            <span className="text-[#f78a24]">Genuinely Happy</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from our satisfied customers who trust Platform Lubricants for their operations
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="group relative"
              style={{
                transform: index % 2 === 0 ? "rotate(-1deg)" : "rotate(1deg)",
              }}
            >
              {/* Card */}
              <div className="bg-linear-to-br from-gray-900 to-black rounded-2xl p-6 sm:p-8 lg:p-10 shadow-2xl hover:shadow-[#f78a24]/20 transition-all duration-300 hover:scale-[1.02] h-full flex flex-col">
                {/* Profile Section */}
                <div className="flex items-start gap-4 sm:gap-6 mb-6">
                  <div className="relative shrink-0">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden ring-4 ring-[#f78a24]/20 group-hover:ring-[#f78a24]/40 transition-all duration-300">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={80}
                        height={80}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {/* Status indicator */}
                    <div className="absolute bottom-0 right-0 w-5 h-5 bg-[#f78a24] rounded-full border-4 border-gray-900" />
                  </div>
                  <div className="flex-1 pt-2">
                    <h3 className="text-white font-bold text-lg sm:text-xl mb-1">
                      {testimonial.name}
                    </h3>
                    <p className="text-[#f78a24] text-sm sm:text-base font-medium mb-1">
                      {testimonial.role}
                    </p>
                    <p className="text-gray-400 text-xs sm:text-sm">
                      {testimonial.company}
                    </p>
                  </div>
                </div>

                {/* Testimonial Content */}
                <div className="flex-1 space-y-4">
                  <h4 className="text-white font-bold text-base sm:text-lg uppercase tracking-wide">
                    {testimonial.title}
                  </h4>
                  <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                    {testimonial.content}
                  </p>
                </div>

                {/* Quote Icon */}
                <div className="mt-6 pt-6 border-t border-gray-800">
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-6 h-6 text-[#f78a24]"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.984zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                    <span className="text-gray-500 text-xs italic">
                      Verified Customer
                    </span>
                  </div>
                </div>
              </div>

              {/* Decorative accent */}
              <div className="absolute -z-10 top-4 right-4 w-full h-full bg-[#f78a24]/10 rounded-2xl blur-xl group-hover:bg-[#f78a24]/20 transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

