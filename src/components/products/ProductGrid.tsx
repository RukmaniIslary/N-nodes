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
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          Loading products...
        </div>
      </section>
    );
  }

  return (
    <section className="py-32">
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

      </div>
    </section>
  );
}