"use client";

import Link from "next/link";

export default function DistributorCTASection() {
  return (
    <section className="bg-gradient-to-r from-[#f78a24] to-[#e67a14] py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
            Become a Platform Lubricant Distributor
          </h2>
          <p className="text-white/90 text-base sm:text-lg mb-8 max-w-2xl mx-auto">
            Join our network of trusted distributors and grow your business with premium quality lubricants. 
            Enjoy competitive pricing, marketing support, and exclusive territory rights.
          </p>
          <Link
            href="/become-a-distributor"
            className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-gray-900 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Become a Distributor
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

