"use client";

import SectionHeader from "./SectionHeader";
import { qualityAssurance } from "../data/certifications";

export default function CertificationsSection() {
  return (
    <section id="certifications" className="bg-gradient-to-b from-gray-50 to-white py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title={qualityAssurance.title}
          description={qualityAssurance.description}
        />

        <div className="mt-12 lg:mt-16">
          {/* Certifications Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 lg:mb-16">
            {qualityAssurance.certifications.map((certification) => (
              <div
                key={certification.id}
                className="group relative bg-white rounded-xl p-6 sm:p-8 shadow-md hover:shadow-xl border border-gray-100 hover:border-[#f78a24]/30 transition-all duration-300 text-center"
              >
                {/* Badge Icon */}
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#f78a24]/10 to-[#f78a24]/5 flex items-center justify-center text-[#f78a24] group-hover:from-[#f78a24] group-hover:to-[#e67a14] group-hover:text-white transition-all duration-300">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>

                <h3 className="text-lg font-bold text-black mb-2 group-hover:text-[#f78a24] transition-colors duration-300">
                  {certification.name}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {certification.description}
                </p>
              </div>
            ))}
          </div>

          {/* Production & Testing Process */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 sm:p-10 lg:p-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-black mb-6 text-center">
              Production & Testing Process
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {qualityAssurance.processSteps.map((step, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 group"
                >
                  {/* Step Number */}
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-[#f78a24] to-[#e67a14] flex items-center justify-center text-white font-bold text-sm shadow-md group-hover:scale-110 transition-transform duration-300">
                    {index + 1}
                  </div>
                  {/* Step Content */}
                  <div className="flex-1 pt-2">
                    <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                      {step}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

