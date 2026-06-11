"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Heart, Trash2 } from "lucide-react";

import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/layout/Footer";

import { Product } from "@/types/product";
import { getDiscountPrice } from "@/lib/pricing";
import { useWishlistStore } from "@/store/wishlistStore";

export default function WishlistPage() {
  const wishlist = useWishlistStore((s) => s.items);
  const toggle = useWishlistStore((s) => s.toggle);

  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch("/api/products");
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    load();
  }, []);

  const savedProducts = products.filter((p) =>
    wishlist.includes(p.id)
  );

  return (
    <>
      <Navbar />

      <div className="max-w-7xl mx-auto p-10 pt-32 min-h-screen">
        <h1 className="text-5xl font-black mb-10">Your Wishlist</h1>

        {loading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="rounded-3xl border border-white/10 bg-white/5 p-5 animate-pulse"
              >
                <div className="h-[220px] rounded-2xl bg-white/10" />
                <div className="h-5 w-2/3 mt-4 rounded bg-white/10" />
                <div className="h-10 w-full mt-4 rounded-xl bg-white/10" />
              </div>
            ))}
          </div>
        ) : savedProducts.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <div className="p-6 rounded-full bg-white/5 mb-6">
              <Heart size={40} className="text-gray-500" />
            </div>
            <p className="text-gray-400 mb-6">
              No saved sneakers yet.
            </p>
            <Link
              href="/#shop"
              className="bg-red-500 hover:bg-red-600 px-8 py-3 rounded-xl font-semibold transition"
            >
              Browse Sneakers
            </Link>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {savedProducts.map((product) => {
              const pricing = getDiscountPrice(product.price);

              return (
                <div
                  key={product.id}
                  className="
                  group
                  relative
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/5
                  backdrop-blur-xl
                  p-5
                  transition
                  hover:-translate-y-2
                  "
                >
                  <button
                    onClick={() => toggle(product.id)}
                    aria-label="Remove from wishlist"
                    className="
                    absolute
                    top-3
                    right-3
                    z-10
                    p-2
                    rounded-full
                    bg-black/30
                    hover:bg-red-500
                    transition
                    "
                  >
                    <Trash2 size={16} />
                  </button>

                  <Image
                    src={product.image}
                    alt={product.name}
                    width={400}
                    height={400}
                    className="object-contain h-[220px] mx-auto"
                  />

                  <h3 className="mt-4 font-bold">{product.name}</h3>

                  <div className="text-red-400 text-xl font-black mt-1">
                    ${pricing.discountPrice}
                  </div>

                  <Link
                    href={`/products/${product.id}`}
                    className="
                    block
                    w-full
                    mt-4
                    py-3
                    rounded-xl
                    bg-red-500
                    hover:bg-red-600
                    text-center
                    font-semibold
                    transition
                    "
                  >
                    Select Size
                  </Link>
                </div>
              );
            })}
          </div>
        )}
      </div>

      <Footer />
    </>
  );
}
