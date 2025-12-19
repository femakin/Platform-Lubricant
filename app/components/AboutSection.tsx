"use client";

import Image from "next/image";

interface AboutSectionProps {
  title: string;
  description: string;
  image: string;
}

export default function AboutSection({
  title,
  description,
  image,
}: AboutSectionProps) {
  return (
    <section id="about" className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
          {/* Left Section - Text Content */}
          <div className="space-y-6 lg:space-y-8 order-2 lg:order-1">
            {/* Title */}
            <div className="space-y-2">
              <span className="text-sm font-semibold text-[#f78a24] uppercase tracking-wider">
                Our Story
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black">
                {title}
              </h2>
            </div>

            {/* Company Description */}
            <div className="space-y-4">
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                {description}
              </p>
            </div>

            {/* Key Points */}
            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#f78a24]/10 flex items-center justify-center mt-0.5">
                  <svg
                    className="w-4 h-4 text-[#f78a24]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-black text-sm">Quality Assured</p>
                  <p className="text-sm text-gray-600">International standards</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#f78a24]/10 flex items-center justify-center mt-0.5">
                  <svg
                    className="w-4 h-4 text-[#f78a24]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-black text-sm">Trusted Partner</p>
                  <p className="text-sm text-gray-600">Industry leaders</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#f78a24]/10 flex items-center justify-center mt-0.5">
                  <svg
                    className="w-4 h-4 text-[#f78a24]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-black text-sm">Reliable Supply</p>
                  <p className="text-sm text-gray-600">Nationwide coverage</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#f78a24]/10 flex items-center justify-center mt-0.5">
                  <svg
                    className="w-4 h-4 text-[#f78a24]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-black text-sm">Expert Support</p>
                  <p className="text-sm text-gray-600">Dedicated service</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Image */}
          <div className="relative order-1 lg:order-2">
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <div className="aspect-[4/5] lg:aspect-square relative">
                <Image
                  src={image}
                  alt="About Platform Lubricant"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              {/* Decorative overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
            </div>
            {/* Decorative accent */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#f78a24]/10 rounded-full blur-3xl -z-10 hidden lg:block" />
          </div>
        </div>
      </div>
    </section>
  );
}

