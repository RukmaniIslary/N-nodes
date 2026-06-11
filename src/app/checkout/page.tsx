"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import { useCartStore } from "@/store/cartStore";
import PayWithMaxelPay from "@/components/checkout/PayWithMaxelPay";

export default function CheckoutPage() {
  const [mounted, setMounted] = useState(false);

  const items =
    useCartStore((s) => s.items);

  const subtotal =
    useCartStore((s) => s.subtotal);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="max-w-7xl mx-auto p-10">

      <h1 className="text-5xl font-black mb-10">
        Checkout
      </h1>

      <div className="grid lg:grid-cols-3 gap-8">

        "use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import { useCartStore } from "@/store/cartStore";
import PayWithMaxelPay from "@/components/checkout/PayWithMaxelPay";

export default function CheckoutPage() {
  const [mounted, setMounted] = useState(false);

  const items =
    useCartStore((s) => s.items);

  const subtotal =
    useCartStore((s) => s.subtotal);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="max-w-7xl mx-auto p-10">

      <h1 className="text-5xl font-black mb-10">
        Checkout
      </h1>

      <div className="grid lg:grid-cols-3 gap-8">

        {/* LEFT */}
        <div className="lg:col-span-2">

          <div
            className="
            rounded-3xl
            border
            border-white/10
            bg-white/5
            backdrop-blur-xl
            p-8
            "
          >

            <h2 className="text-3xl font-bold mb-8">
              Shipping Information
            </h2>

            <div className="grid md:grid-cols-2 gap-4">

              <input
                placeholder="Full Name"
                className="
                p-4
                rounded-xl
                bg-black/40
                border
                border-white/10
                "
              />

              <input
                placeholder="Email Address"
                className="
                p-4
                rounded-xl
                bg-black/40
                border
                border-white/10
                "
              />

              <input
                placeholder="Phone Number"
                className="
                p-4
                rounded-xl
                bg-black/40
                border
                border-white/10
                "
              />

              <input
                placeholder="Country"
                className="
                p-4
                rounded-xl
                bg-black/40
                border
                border-white/10
                "
              />

              <input
                placeholder="State / Province"
                className="
                p-4
                rounded-xl
                bg-black/40
                border
                border-white/10
                "
              />

              <input
                placeholder="City"
                className="
                p-4
                rounded-xl
                bg-black/40
                border
                border-white/10
                "
              />

              <input
                placeholder="ZIP / Postal Code"
                className="
                p-4
                rounded-xl
                bg-black/40
                border
                border-white/10
                "
              />

              <input
                placeholder="Apartment / Suite (Optional)"
                className="
                p-4
                rounded-xl
                bg-black/40
                border
                border-white/10
                "
              />

            </div>

            <textarea
              placeholder="Street Address"
              className="
              mt-4
              w-full
              h-32
              p-4
              rounded-xl
              bg-black/40
              border
              border-white/10
              "
            />

            <div
              className="
              mt-6
              rounded-2xl
              bg-green-500/10
              border
              border-green-500/20
              p-4
              space-y-2
              "
            >
              <div className="text-green-400">
                Free Worldwide Shipping
              </div>

              <div className="text-blue-400">
                Secure Crypto Checkout
              </div>

              <div className="text-yellow-400">
                Estimated Delivery: 5-10 Days
              </div>
            </div>

          </div>

        </div>

        {/* RIGHT */}
        <div>

          <div
            className="
            rounded-3xl
            border
            border-white/10
            bg-white/5
            backdrop-blur-xl
            p-8
            "
          >

            <h2
              className="
              text-2xl
              font-bold
              mb-6
              "
            >
              Order Summary
            </h2>

            <div className="space-y-4">

              {items.map((item) => (

                <div
                  key={item.id}
                  className="
                  flex
                  gap-4
                  "
                >

                  <Image
                    src={item.image}
                    alt={item.name}
                    width={70}
                    height={70}
                  />

                  <div>

                    <div className="font-semibold">
                      {item.name}
                    </div>

                    <div
                      className="
                      text-gray-400
                      "
                    >
                      Qty: {item.quantity}
                    </div>

                    <div className="text-red-400">
                      $
                      {(
                        item.price *
                        item.quantity
                      ).toFixed(2)}
                    </div>

                  </div>

                </div>

              ))}

              {items.length === 0 && (
                <p className="text-gray-400">
                  Your cart is empty.
                </p>
              )}

            </div>

            <div
              className="
              border-t
              border-white/10
              mt-6
              pt-6
              "
            >

              <div
                className="
                flex
                justify-between
                mb-3
                "
              >
                <span>Subtotal</span>

                <span>
                  ${subtotal().toFixed(2)}
                </span>
              </div>

              <div
                className="
                flex
                justify-between
                mb-3
                "
              >
                <span>Shipping</span>

                <span>Free</span>
              </div>

              <div
                className="
                flex
                justify-between
                text-xl
                font-black
                "
              >
                <span>Total</span>

                <span>
                  ${subtotal().toFixed(2)}
                </span>
              </div>

            </div>

            <PayWithMaxelPay />

          </div>

        </div>

      </div>

    </div>
  );
}