"use client";

import { useState } from "react";
import Link from "next/link";
import { products } from "../data/products";

export default function NavBar() {
  const [isProductsHovered, setIsProductsHovered] = useState(false);

  const navLinks = [
    { href: "/#about", label: "About Us" },
    { href: "/#why-choose-us", label: "Why Us" },
    { href: "/#services", label: "Services" },
    { href: "/#testimonials", label: "Testimonials" },
    // { href: "/#blogs", label: "Blogs" },
    { href: "/#contact", label: "Contact Us" },
  ];

  return (
    <nav className="bg-black/80 backdrop-blur-sm text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-[#f78a24] transition-colors text-sm sm:text-base"
              >
                {link.label}
              </Link>
            ))}
            
            {/* Our Products Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsProductsHovered(true)}
              onMouseLeave={() => setIsProductsHovered(false)}
            >
              <Link
                href="/"
                className="hover:text-[#f78a24] transition-colors text-sm sm:text-base flex items-center gap-1"
              >
                Our Products
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${
                    isProductsHovered ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </Link>

              {/* Dropdown Menu */}
              {isProductsHovered && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                  {products.map((product) => (
                    <Link
                      key={product.slug}
                      href={`/products/${product.slug}`}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#f78a24] transition-colors"
                      onClick={() => setIsProductsHovered(false)}
                    >
                      {product.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
          <Link
            href="/get-a-quote"
            className="bg-[#f78a24] text-black px-4 sm:px-6 py-2 rounded flex items-center gap-2 hover:bg-[#e67a14] transition-colors font-medium text-sm sm:text-base whitespace-nowrap"
          >
            Get a Quote
            <svg
              className="w-4 h-4"
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
    </nav>
  );
}

