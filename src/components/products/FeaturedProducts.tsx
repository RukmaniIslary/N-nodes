"use client";

import ProductGrid from "./ProductGrid";

export default function FeaturedProducts() {
  return (
    <section
      className="
      py-32
      px-8
      "
    >
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-20">

          <span
            className="
            text-red-400
            uppercase
            tracking-[0.4em]
            text-sm
            "
          >
            Premium Collection
          </span>

          <h2
            className="
            text-6xl
            font-black
            mt-6
            "
          >
            Featured Sneakers
          </h2>

          <p
            className="
            text-gray-400
            mt-6
            max-w-2xl
            mx-auto
            "
          >
            Discover the most exclusive
            sneakers curated by N-Nodes.
          </p>

        </div>

        <ProductGrid />

      </div>
    </section>
  );
}