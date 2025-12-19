"use client";

import Image from "next/image";
import Link from "next/link";

interface ProductCategoryCardProps {
  category: {
    id: string;
    name: string;
    slug: string;
    image: string;
    description: string;
  };
}

export default function ProductCategoryCard({
  category,
}: ProductCategoryCardProps) {
  return (
    <Link href={`/products/${category.slug}`}>
      <div className="group relative bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden hover:shadow-2xl hover:border-[#f78a24] transition-all duration-500 h-full">
        {/* Background Image with Overlay */}
        <div className="relative h-48 overflow-hidden">
          <Image
            src={category.image}
            alt={category.name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/40 to-transparent group-hover:from-black/80 group-hover:via-black/50 transition-all duration-500" />
          
          {/* Category Name on Image */}
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#f78a24] transition-colors duration-300">
              {category.name}
            </h3>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6">
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            {category.description}
          </p>
          
          {/* View Products Link */}
          <div className="flex items-center gap-2 text-[#f78a24] font-semibold text-sm group-hover:gap-3 transition-all duration-300">
            <span>View Products</span>
            <svg
              className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
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
          </div>
        </div>

        {/* Hover Accent */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#f78a24] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    </Link>
  );
}

