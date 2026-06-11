"use client";

import { useState } from "react";
import { useCartStore } from "@/store/cartStore";

export default function PayWithMaxelPay() {
  const subtotal =
    useCartStore((s) => s.subtotal);

  const [loading, setLoading] =
    useState(false);

  async function pay() {
    try {
      setLoading(true);

      const response = await fetch(
        "/api/maxelpay/session",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify({
            amount: subtotal(),
            email:
              "customer@example.com",
          }),
        }
      );

      const data =
        await response.json();

      console.log(
        "MAXELPAY RESPONSE:",
        data
      );

      if (
        data?.data?.paymentUrl
      ) {
        window.location.href =
          data.data.paymentUrl;
        return;
      }

      if (
        data?.paymentUrl
      ) {
        window.location.href =
          data.paymentUrl;
        return;
      }

      if (
        data?.data?.checkoutUrl
      ) {
        window.location.href =
          data.data.checkoutUrl;
        return;
      }

      if (
        data?.checkoutUrl
      ) {
        window.location.href =
          data.checkoutUrl;
        return;
      }

      console.error(
        "No payment URL found:",
        data
      );

    } catch (error) {

      console.error(
        "PAYMENT ERROR:",
        error
      );

    } finally {

      setLoading(false);

    }
  }

  return (
    <button
      onClick={pay}
      disabled={loading}
      className="
      w-full
      mt-8
      py-4
      rounded-2xl
      bg-green-500
      hover:bg-green-600
      text-lg
      font-bold
      disabled:opacity-50
      "
    >
      {loading
        ? "Creating Payment..."
        : "Pay With Crypto"}
    </button>
  );
}