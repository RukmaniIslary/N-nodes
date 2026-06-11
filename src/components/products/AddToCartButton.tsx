"use client";

import { useCartStore } from "@/store/cartStore";

interface Props {
  product: {
    id: string;
    name: string;
    image: string;
    price: number;
  };
  size: string;
  disabled?: boolean;
}

export default function AddToCartButton({
  product,
  size,
  disabled = false,
}: Props) {
  const addItem =
    useCartStore((s) => s.addItem);

  const openCart =
    useCartStore((s) => s.openCart);

  const handleAddToCart = () => {
    if (!size) {
      alert("Please select a size first");
      return;
    }
    addItem({ ...product, size });
    openCart();
  };

  return (
    <button
      onClick={handleAddToCart}
      disabled={disabled || !size}
      className={`
      px-8
      py-4
      rounded-2xl
      font-bold
      transition
      ${
        disabled || !size
          ? "bg-gray-500 cursor-not-allowed"
          : "bg-red-500 hover:bg-red-600"
      }
      `}
    >
      Add To Cart
    </button>
  );
}