"use client";

import Image from "next/image";
import Link from "next/link";

interface LubricantCardProps {
  lubricant: {
    id: string;
    name: string;
    description: string;
    image: string;
    backgroundImage?: string;
    slug: string;
  };
}

export default function LubricantCard({ lubricant }: LubricantCardProps) {
  return (
    <Link href={`/products/${lubricant.slug}`}>
      <div className="group relative bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-2xl hover:border-[#f78a24]/20 transition-all duration-500 h-full">
        {/* Content */}
        <div className="relative p-8 flex flex-col items-center text-center h-full min-h-[400px]">
          {/* Product Image */}
          <div className="relative w-full max-w-[180px] h-[280px] mb-6 flex-shrink-0">
            <Image
              src={lubricant.image}
              alt={lubricant.name}
              fill
              className="object-contain group-hover:scale-110 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, 25vw"
            />
          </div>

          {/* Product Name */}
          <h3 className="text-xl font-bold text-black mb-3 group-hover:text-[#f78a24] transition-colors duration-300">
            {lubricant.name}
          </h3>

          {/* Description */}
          <p className="text-sm text-gray-600 leading-relaxed mt-auto">
            {lubricant.description}
          </p>
        </div>

        {/* Hover effect overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#f78a24]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
      </div>
    </Link>
  );
}

