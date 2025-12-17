"use client";

import { ReactNode, useState } from "react";
import Image from "next/image";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  category?: string;
  number: number;
  backgroundImage: string;
  isDefaultHovered?: boolean;
}

export default function ServiceCard({
  title,
  description,
  icon,
  category = "Industrial Services",
  number,
  backgroundImage,
  isDefaultHovered = false,
}: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(isDefaultHovered);

  return (
    <div
      className="relative p-8 rounded-lg transition-all duration-500 h-[400px] overflow-hidden group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        backgroundColor: isHovered ? "transparent" : "white",
        border: isHovered ? "none" : "1px solid #e5e7eb",
      }}
    >
      {/* Background Image on Hover */}
      <div
        className={`absolute inset-0 z-0 transition-opacity duration-500 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      >
        <Image
          src={backgroundImage}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
        <div className="absolute inset-0 bg-black/70 z-0"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col">
        {/* Category */}
        <div className="mb-4">
          <span className="text-sm font-medium text-[#f78a24]">
            {category}
          </span>
        </div>

        {/* Title */}
        <h3
          className={`text-2xl font-semibold mb-4 leading-tight transition-colors duration-300 ${
            isHovered ? "text-white" : "text-black"
          }`}
        >
          {title}
        </h3>

        {/* Description */}
        <p
          className={`text-base leading-relaxed grow transition-colors duration-300 ${
            isHovered ? "text-white/90" : "text-gray-600"
          }`}
        >
          {description}
        </p>

        {/* Bottom Elements */}
        <div className="mt-auto pt-8 flex items-end justify-between">
          {/* Arrow */}
          <div
            className={`transition-all duration-300 ${
              isHovered
                ? "text-white translate-x-2"
                : "text-gray-400 translate-x-0"
            }`}
          >
            <svg
              className="w-6 h-6"
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

          {/* Number */}
          <div
            className={`text-7xl font-bold leading-none transition-colors duration-300 ${
              isHovered ? "text-white/20" : "text-gray-200"
            }`}
          >
            {String(number).padStart(2, "0")}
          </div>
        </div>
      </div>
    </div>
  );
}

