"use client";

import Image from "next/image";

import { products } from "@/data/products";

import { useWishlistStore } from "@/store/wishlistStore";
import { useCartStore } from "@/store/cartStore";

export default function WishlistPage() {
  const wishlist =
    useWishlistStore((s) => s.items);

  const addItem =
    useCartStore((s) => s.addItem);

  const savedProducts =
    products.filter((p) =>
      wishlist.includes(p.id)
    );

  return (
    <div className="max-w-7xl mx-auto p-10">

      <h1 className="text-5xl font-black mb-10">
        Wishlist
      </h1>

      {savedProducts.length === 0 ? (
        <div className="text-gray-400">
          No saved sneakers yet.
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {savedProducts.map((product) => (

            <div
              key={product.id}
              className="
              rounded-3xl
              border
              border-white/10
              bg-white/5
              backdrop-blur-xl
              p-5
              "
            >

              <Image
                src={product.image}
                alt={product.name}
                width={400}
                height={400}
                className="
                object-contain
                h-[220px]
                mx-auto
                "
              />

              <h3 className="mt-4 font-bold">
                {product.name}
              </h3>

              <p className="text-red-400">
                ${product.price}
              </p>

              <button
                onClick={() =>
                  addItem(product)
                }
                className="
                w-full
                mt-4
                py-3
                rounded-xl
                bg-red-500
                "
              >
                Add To Cart
              </button>

            </div>

          ))}

        </div>
      )}

    </div>
  );
}