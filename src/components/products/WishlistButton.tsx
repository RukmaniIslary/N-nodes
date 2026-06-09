"use client";

import { Heart } from "lucide-react";

import {
  useWishlistStore,
} from "@/store/wishlistStore";

export default function WishlistButton({
  id,
}: {
  id: string;
}) {

  const toggle =
    useWishlistStore(
      (s) => s.toggle
    );

  const isWishlisted =
    useWishlistStore(
      (s) => s.isWishlisted(id)
    );

  return (
    <button
      onClick={() => toggle(id)}
      className="
      border
      border-white/10
      bg-white/5
      px-8
      py-4
      rounded-2xl
      flex
      items-center
      gap-2
      "
    >
      <Heart
        fill={
          isWishlisted
            ? "currentColor"
            : "none"
        }
      />

      Wishlist
    </button>
  );
}