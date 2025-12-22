"use client";

import Image from "next/image";
import Link from "next/link";
import { Product } from "../data/products";

interface ProductDetailProps {
  product: Product;
  nextProduct?: Product;
}

export default function ProductDetail({
  product,
  nextProduct,
}: ProductDetailProps) {
  return (
    <div className="min-h-screen">
      {/* Product Image Section */}
      <section className="relative bg-gradient-to-br from-[#f78a24]/10 via-white to-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
            {/* Product Image */}
            <div className="relative w-full max-w-2xl aspect-square lg:aspect-auto lg:h-[600px]">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-contain"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Product Details Section */}
      <section className="bg-gradient-to-br from-[#f78a24] to-[#e67a14] py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Product Name */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 text-center">
            {product.name}
          </h1>

          {/* Product Description */}
          <div className="bg-black/30 backdrop-blur-sm rounded-lg p-8 mb-8">
            <p className="text-white text-lg sm:text-xl leading-relaxed text-center">
              {product.description}
            </p>
          </div>

          {/* API Rating & Size */}
          <div className="flex flex-wrap gap-4 justify-center mb-8">
            {product.apiRating && (
              <div className="bg-black/30 backdrop-blur-sm rounded-lg px-6 py-3">
                <span className="text-white/80 text-sm">API Rating:</span>
                <span className="text-white font-semibold text-lg ml-2">{product.apiRating}</span>
              </div>
            )}
            {product.size && (
              <div className="bg-black/30 backdrop-blur-sm rounded-lg px-6 py-3">
                <span className="text-white/80 text-sm">Size:</span>
                <span className="text-white font-semibold text-lg ml-2">{product.size}</span>
              </div>
            )}
          </div>

          {/* Specifications */}
          {product.specifications && product.specifications.length > 0 && (
            <div className="bg-black/30 backdrop-blur-sm rounded-lg p-8 mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">
                Specifications
              </h2>
              <ul className="space-y-2">
                {product.specifications.map((spec, index) => (
                  <li
                    key={index}
                    className="text-white/90 text-lg flex items-center gap-2"
                  >
                    <span className="text-[#f78a24]">•</span>
                    {spec}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Applications */}
          {product.applications && product.applications.length > 0 && (
            <div className="bg-black/30 backdrop-blur-sm rounded-lg p-8 mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">
                Applications
              </h2>
              <ul className="space-y-3">
                {product.applications.map((app, index) => (
                  <li
                    key={index}
                    className="text-white/90 text-lg flex items-start gap-3"
                  >
                    <span className="text-[#f78a24] mt-1">✅</span>
                    <span>{app}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Performance Benefits */}
          {product.performanceBenefits && product.performanceBenefits.length > 0 && (
            <div className="bg-black/30 backdrop-blur-sm rounded-lg p-8 mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">
                Performance Benefits
              </h2>
              <ul className="space-y-3">
                {product.performanceBenefits.map((benefit, index) => (
                  <li
                    key={index}
                    className="text-white/90 text-lg flex items-start gap-3"
                  >
                    <span className="text-[#f78a24] mt-1">✔</span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href={`/get-a-quote?product=${product.slug}`}
              className="inline-flex items-center gap-2 bg-white text-[#f78a24] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
            >
              Request a Quote
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
            {nextProduct && (
              <Link
                href={`/products/${nextProduct.slug}`}
                className="inline-flex items-center gap-2 bg-black/50 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-black/70 transition-colors"
              >
                Next Product
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
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

