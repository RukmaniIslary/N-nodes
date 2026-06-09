"use client";

import { useCartStore } from "@/store/cartStore";

export default function PayWithMaxelPay() {
  const subtotal =
    useCartStore((s) => s.subtotal);

  async function pay() {
    try {
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

      alert(
        "Failed to create payment session"
      );

      console.log(data);

    } catch (error) {

      console.error(error);

      alert(
        "Payment error. Check browser console."
      );

    }
  }

  return (
    <button
      onClick={pay}
      className="
      w-full
      mt-8
      py-4
      rounded-2xl
      bg-green-500
      hover:bg-green-600
      text-lg
      font-bold
      "
    >
      Pay With Crypto
    </button>
  );
}