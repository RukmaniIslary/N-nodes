"use client";

import { useEffect, useState } from "react";

import ProductCard from "./ProductCard";
import ProductSearch from "./ProductSearch";
import ProductFilter from "./ProductFilter";

import { Product } from "@/types/product";

export default function ProductGrid() {
  const [products, setProducts] = useState<Product[]>([]);

  const [search, setSearch] =
    useState("");

  const [category, setCategory] =
    useState("All");

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    async function loadProducts() {
      try {
        const res =
          await fetch("/api/products");

        const data =
          await res.json();

        setProducts(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    loadProducts();
  }, []);

  const filtered =
    products.filter((product) => {

      const matchesSearch =
        product.name
          .toLowerCase()
          .includes(
            search.toLowerCase()
          );

      const matchesCategory =
        category === "All"
          ? true
          : product.category === category;

      return (
        matchesSearch &&
        matchesCategory
      );
    });

  if (loading) {
    return (
      <section id="shop" className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-black mb-10">
            Featured Collection
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="
                rounded-3xl
                border
                border-white/10
                bg-white/5
                p-5
                animate-pulse
                "
              >
                <div className="h-[250px] rounded-2xl bg-white/10" />
                <div className="h-5 w-2/3 mt-5 rounded bg-white/10" />
                <div className="h-4 w-1/3 mt-3 rounded bg-white/10" />
                <div className="h-10 w-full mt-5 rounded-xl bg-white/10" />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="shop" className="py-32">
      <div className="max-w-7xl mx-auto px-6">

        <h2
          className="
          text-5xl
          font-black
          mb-10
          "
        >
          Featured Collection
        </h2>

        <div className="space-y-5 mb-10">

          <ProductSearch
            value={search}
            setValue={setSearch}
          />

          <ProductFilter
            value={category}
            setValue={setCategory}
          />

        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-20 text-gray-400">
            No sneakers match your search.
          </div>
        ) : (
          <div
            className="
            grid
            md:grid-cols-2
            lg:grid-cols-4
            gap-8
            "
          >
            {filtered.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </div>
        )}

      </div>
    </section>
  );
}