"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Heart,
  ShoppingBag,
  Search,
} from "lucide-react";

import { useCartStore } from "@/store/cartStore";
import { useWishlistStore } from "@/store/wishlistStore";

export default function Navbar() {
  const items = useCartStore((s) => s.items);
  const openCart = useCartStore((s) => s.openCart);

  const wishlist =
    useWishlistStore((s) => s.items);

  return (
    <motion.nav
      initial={{ y: -50 }}
      animate={{ y: 0 }}
      className="
      fixed
      top-0
      left-0
      w-full
      z-50
      backdrop-blur-2xl
      bg-black/30
      border-b
      border-white/10
      "
    >
      <div
        className="
        max-w-7xl
        mx-auto
        px-8
        py-5
        flex
        items-center
        justify-between
        "
      >
        <Link href="/">
          <h1
            className="
            text-3xl
            font-black
            bg-gradient-to-r
            from-red-500
            via-pink-500
            to-blue-500
            text-transparent
            bg-clip-text
            "
          >
            N-Nodes
          </h1>
        </Link>

        <div
          className="
          hidden
          md:flex
          gap-8
          text-sm
          uppercase
          tracking-widest
          "
        >
          <button>Shop</button>
          <button>Collections</button>
          <button>Featured</button>
          <button>Contact</button>
        </div>

        <div className="flex items-center gap-4">

          {/* Search */}
          <button
            className="
            p-3
            rounded-xl
            bg-white/5
            hover:bg-white/10
            transition
            "
          >
            <Search size={18} />
          </button>

          {/* Wishlist */}
          <Link
            href="/wishlist"
            className="
            relative
            p-3
            rounded-xl
            bg-white/5
            hover:bg-white/10
            transition
            "
          >
            <Heart size={18} />

            {wishlist.length > 0 && (
              <span
                className="
                absolute
                -top-2
                -right-2
                w-5
                h-5
                rounded-full
                bg-red-500
                text-xs
                flex
                items-center
                justify-center
                "
              >
                {wishlist.length}
              </span>
            )}
          </Link>

          {/* Cart */}
          <button
            onClick={openCart}
            className="
            relative
            p-3
            rounded-xl
            bg-red-500
            hover:bg-red-600
            transition
            "
          >
            <ShoppingBag size={18} />

            {items.length > 0 && (
              <span
                className="
                absolute
                -top-2
                -right-2
                w-5
                h-5
                rounded-full
                bg-white
                text-black
                text-xs
                font-bold
                flex
                items-center
                justify-center
                "
              >
                {items.length}
              </span>
            )}
          </button>

        </div>
      </div>
    </motion.nav>
  );
}