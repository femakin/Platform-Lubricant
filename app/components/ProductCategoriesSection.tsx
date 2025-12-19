"use client";

import SectionHeader from "./SectionHeader";
import ProductCategoryCard from "./ProductCategoryCard";
import { productCategories } from "../data/productCategories";

export default function ProductCategoriesSection() {
  return (
    <section id="product-categories" className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Product Categories"
          description="Explore our comprehensive range of premium lubricants for every application"
        />
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-12">
          {productCategories.map((category) => (
            <ProductCategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}

