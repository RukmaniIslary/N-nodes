"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/layout/Footer";
import AddToCartButton from "@/components/products/AddToCartButton";
import WishlistButton from "@/components/products/WishlistButton";
import SizeSelector from "@/components/products/SizeSelector";

import { getDiscountPrice } from "@/lib/pricing";

interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
  stock: number;
  category: string;
  sizes: {
    id: string;
    size: string;
    stock: number;
  }[];
}

interface RelatedProduct {
  id: string;
  name: string;
  image: string;
  price: number;
}

interface Props {
  product: Product;
  related: RelatedProduct[];
}

export default function ProductPageClient({
  product,
  related,
}: Props) {
  const [selectedSize, setSelectedSize] = useState("");

  const pricing = getDiscountPrice(product.price);
  const inStock = product.stock > 0;

  return (
    <>
      <Navbar />

      <div className="max-w-7xl mx-auto px-8 py-32">

        <nav className="text-sm text-gray-400 mb-8">
          <Link href="/" className="hover:text-white transition">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link href="/#shop" className="hover:text-white transition">
            {product.category}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-white">{product.name}</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-16">

          <div
            className="
            rounded-3xl
            border
            border-white/10
            bg-white/5
            backdrop-blur-xl
            p-10
            "
          >
            <Image
              src={product.image}
              alt={product.name}
              width={900}
              height={900}
              className="
              object-contain
              mx-auto
              "
            />
          </div>

          <div>

            <div className="flex items-center gap-3">
              <span
                className="
                bg-red-500
                px-4
                py-2
                rounded-full
                text-sm
                "
              >
                Premium Sneaker
              </span>

              {inStock ? (
                <span className="text-green-400 text-sm">
                  In Stock
                </span>
              ) : (
                <span className="text-red-400 text-sm">
                  Out of Stock
                </span>
              )}
            </div>

            <h1
              className="
              text-6xl
              font-black
              mt-6
              "
            >
              {product.name}
            </h1>

            <p
              className="
              text-gray-400
              mt-6
              text-lg
              "
            >
              {product.description}
            </p>

            <div className="mt-10">

              <div
                className="
                line-through
                text-gray-500
                text-xl
                "
              >
                ${pricing.marketPrice}
              </div>

              <div
                className="
                text-red-400
                text-6xl
                font-black
                "
              >
                ${pricing.discountPrice}
              </div>

              <div
                className="
                text-green-400
                mt-2
                "
              >
                Save ${pricing.savings}
              </div>

            </div>

            <SizeSelector
              sizes={product.sizes}
              onSizeSelect={setSelectedSize}
              selectedSize={selectedSize}
            />

            <div className="mt-10 flex gap-4">

              <AddToCartButton
                product={{
                  id: product.id,
                  name: product.name,
                  image: product.image,
                  price: pricing.discountPrice,
                }}
                size={selectedSize}
                disabled={!inStock}
              />

              <WishlistButton
                id={product.id}
              />

            </div>

            <div
              className="
              mt-12
              rounded-3xl
              border
              border-white/10
              bg-white/5
              p-6
              "
            >
              <h3 className="font-bold mb-4">
                Specifications
              </h3>

              <ul className="space-y-2 text-gray-400">
                <li>Premium Construction</li>
                <li>Luxury Comfort Sole</li>
                <li>Breathable Upper Mesh</li>
                <li>Advanced Cushioning</li>
                <li>
                  Stock Available: {product.stock}
                </li>
                <li>
                  Category: {product.category}
                </li>
              </ul>
            </div>

          </div>

        </div>

        {related.length > 0 && (
          <div className="mt-24">

            <h2
              className="
              text-4xl
              font-black
              mb-10
              "
            >
              Related Sneakers
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

              {related.map((shoe) => (

                <Link
                  key={shoe.id}
                  href={`/products/${shoe.id}`}
                >

                  <div
                    className="
                    rounded-3xl
                    border
                    border-white/10
                    bg-white/5
                    backdrop-blur-xl
                    p-5
                    hover:-translate-y-2
                    transition
                    "
                  >

                    <Image
                      src={shoe.image}
                      alt={shoe.name}
                      width={400}
                      height={400}
                    />

                    <h3 className="mt-4 font-bold">
                      {shoe.name}
                    </h3>

                    <div className="text-red-400">
                      ${getDiscountPrice(shoe.price).discountPrice}
                    </div>

                  </div>

                </Link>

              ))}

            </div>

          </div>
        )}

      </div>

      <Footer />
    </>
  );
}
