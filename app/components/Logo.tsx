"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface LogoProps {
  className?: string;
}

export default function Logo({ className = "" }: LogoProps) {
  const [imageError, setImageError] = useState(false);

  // Fallback text logo if images fail to load
  const FallbackLogo = () => (
    <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
      <div className="w-10 h-10 bg-[#f78a24] rounded flex items-center justify-center flex-shrink-0">
        <svg
          className="w-6 h-6 text-black"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
          />
        </svg>
      </div>
      <div>
        <div className="font-bold text-base sm:text-lg text-white">Platform Lubricant</div>
        <div className="text-xs text-gray-400">SOLUTIONS</div>
      </div>
    </Link>
  );

  if (imageError) {
    return <FallbackLogo />;
  }

  return (
    <Link href="/" className={`flex items-center ${className} hover:opacity-80 transition-opacity`}>
      {/* Desktop Logo */}
      <div className="hidden md:block">
        <Image
          src="/assets/logodesktop.png"
          alt="Platform Lubricant Logo"
          width={200}
          height={60}
          className="h-auto w-auto max-h-[60px] object-contain"
          priority
          onError={() => setImageError(true)}
        />
      </div>
      {/* Mobile Logo */}
      <div className="block md:hidden">
        <Image
          src="/assets/logomobile.png"
          alt="Platform Lubricant Logo"
          width={150}
          height={50}
          className="h-auto w-auto max-h-[50px] object-contain"
          priority
          onError={() => setImageError(true)}
        />
      </div>
    </Link>
  );
}

