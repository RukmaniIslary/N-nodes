"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Tilt from "react-parallax-tilt";
import { Heart } from "lucide-react";

import QuickViewModal from "./QuickViewModal";

import { Product } from "@/types/product";
import { getDiscountPrice } from "@/lib/pricing";

import { useWishlistStore } from "@/store/wishlistStore";

export default function ProductCard({
  product,
}: {
  product: Product;
}) {
  const [open, setOpen] = useState(false);

  const toggle =
    useWishlistStore((s) => s.toggle);

  const pricing =
    getDiscountPrice(product.price);

  return (
    <>
      <Tilt
        tiltMaxAngleX={12}
        tiltMaxAngleY={12}
        glareEnable
        glareMaxOpacity={0.15}
      >
        <div
          className="
          group
          relative
          overflow-hidden
          rounded-3xl
          border
          border-white/10
          bg-white/5
          backdrop-blur-xl
          p-5
          transition-all
          duration-500
          hover:-translate-y-3
          hover:shadow-[0_0_60px_rgba(255,40,80,0.25)]
          "
        >
          <div
            className="
            absolute
            inset-0
            pointer-events-none
            opacity-0
            group-hover:opacity-100
            transition
            duration-500
            bg-gradient-to-br
            from-red-500/5
            via-transparent
            to-purple-500/5
            "
          />

          <div className="relative">
            <div
              className="
              absolute
              top-3
              left-3
              z-10
              bg-red-500
              px-3
              py-1
              rounded-full
              text-xs
              font-semibold
              "
            >
              30% OFF
            </div>

            <button
              onClick={() => toggle(product.id)}
              className="
              absolute
              top-3
              right-3
              z-10
              bg-black/30
              backdrop-blur
              p-2
              rounded-full
              hover:bg-red-500
              transition
              "
            >
              <Heart size={18} />
            </button>

            <Image
              src={product.image}
              alt={product.name}
              width={500}
              height={500}
              className="
              object-contain
              mx-auto
              h-[250px]
              transition-all
              duration-500
              group-hover:scale-110
              group-hover:-rotate-6
              "
            />

            <div
              className="
              absolute
              bottom-4
              left-1/2
              -translate-x-1/2
              w-32
              h-6
              bg-red-500/20
              blur-2xl
              rounded-full
              "
            />
          </div>

          <Link href={`/product/${product.id}`}>
            <h3
              className="
              mt-5
              text-xl
              font-bold
              hover:text-red-400
              transition
              cursor-pointer
              "
            >
              {product.name}
            </h3>
          </Link>

          <p className="text-gray-400">
            ⭐ {product.rating ?? 5}
          </p>

          <div className="mt-4">
            <div
              className="
              line-through
              text-gray-500
              "
            >
              ${pricing.marketPrice}
            </div>

            <div
              className="
              text-red-400
              text-2xl
              font-black
              "
            >
              ${pricing.discountPrice}
            </div>

            <div
              className="
              text-green-400
              "
            >
              Save ${pricing.savings}
            </div>
          </div>

          <div
            className="
            flex
            gap-3
            mt-5
            "
          >
            <Link
              href={`/products/${product.id}`}
              className="
              relative
              z-20
              flex-1
              bg-red-500
              hover:bg-red-600
              rounded-xl
              py-3
              font-semibold
              transition
              text-center
              "
            >
              Select Size
            </Link>

            <button
              onClick={() => setOpen(true)}
              className="
              glass
              px-4
              rounded-xl
              border
              border-white/10
              hover:bg-white/10
              transition
              "
            >
              View
            </button>
          </div>
        </div>
      </Tilt>

      <QuickViewModal
        open={open}
        onClose={() => setOpen(false)}
        model={
          product.model ||
          "/models/air-jordan.glb"
        }
        name={product.name}
        price={pricing.discountPrice}
        rating={product.rating}
      />
    </>
  );
}