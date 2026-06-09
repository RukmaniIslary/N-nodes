"use client";

import { useRouter } from "next/navigation";
import { useCartStore } from "@/store/cartStore";

export default function PlaceOrderButton() {
  const router = useRouter();

  const items =
    useCartStore((s) => s.items);

  const subtotal =
    useCartStore((s) => s.subtotal);

  const clearCart =
    useCartStore((s) => s.clearCart);

  async function placeOrder() {
    const response =
      await fetch("/api/orders", {
        method: "POST",

        headers: {
          "Content-Type":
            "application/json",
        },

        body: JSON.stringify({
          userId: "demo-user",
          total: subtotal(),
          items,
        }),
      });

    if (!response.ok) {
      alert("Order failed");
      return;
    }

    clearCart();

    router.push(
      "/checkout/success"
    );
  }

  return (
    <button
      onClick={placeOrder}
      className="
      w-full
      mt-8
      py-4
      rounded-2xl
      bg-red-500
      hover:bg-red-600
      text-lg
      font-bold
      "
    >
      Place Order
    </button>
  );
}   