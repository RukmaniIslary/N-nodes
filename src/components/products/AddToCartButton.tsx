"use client";

import { useCartStore } from "@/store/cartStore";

interface Props {
  product: {
    id: string;
    name: string;
    image: string;
    price: number;
  };
}

export default function AddToCartButton({
  product,
}: Props) {
  const addItem =
    useCartStore((s) => s.addItem);

  const openCart =
    useCartStore((s) => s.openCart);

  return (
    <button
      onClick={() => {
        addItem(product);
        openCart();
      }}
      className="
      bg-red-500
      hover:bg-red-600
      px-8
      py-4
      rounded-2xl
      font-bold
      "
    >
      Add To Cart
    </button>
  );
}