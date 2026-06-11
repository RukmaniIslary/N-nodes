"use client";

import Image from "next/image";
import Link from "next/link";

import {
  X,
  Minus,
  Plus,
  Trash2,
} from "lucide-react";

import { motion, AnimatePresence } from "framer-motion";

import { useCartStore } from "@/store/cartStore";

export default function CartDrawer() {
  const {
    items,
    isOpen,
    closeCart,
    removeItem,
    increase,
    decrease,
    subtotal,
  } = useCartStore();

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="
          fixed
          inset-0
          z-[200]
          bg-black/70
          backdrop-blur-sm
          "
          onClick={closeCart}
        >
          <motion.div
            initial={{ x: 500 }}
            animate={{ x: 0 }}
            exit={{ x: 500 }}
            transition={{
              type: "spring",
              damping: 25,
              stiffness: 250,
            }}
            onClick={(e) => e.stopPropagation()}
            className="
            absolute
            right-0
            top-0
            h-full
            w-[450px]
            bg-black
            border-l
            border-white/10
            p-6
            overflow-y-auto
            "
          >
            {/* Header */}
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-black">
                Shopping Cart
              </h2>

              <button
                onClick={closeCart}
                className="
                p-2
                rounded-xl
                hover:bg-white/10
                "
              >
                <X />
              </button>
            </div>

            {/* Empty State */}
            {items.length === 0 && (
              <div
                className="
                flex
                flex-col
                items-center
                justify-center
                h-[60vh]
                text-center
                "
              >
                <p className="text-gray-400 mb-4">
                  Your cart is empty
                </p>

                <button
                  onClick={closeCart}
                  className="
                  bg-red-500
                  px-6
                  py-3
                  rounded-xl
                  "
                >
                  Continue Shopping
                </button>
              </div>
            )}

            {/* Items */}
            <div className="space-y-6">
              {items.map((item) => (
                <div
                  key={`${item.id}-${item.size}`}
                  className="
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/5
                  backdrop-blur-xl
                  p-4
                  "
                >
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={120}
                    height={120}
                    className="
                    object-contain
                    mx-auto
                    "
                  />

                  <h3
                    className="
                    mt-3
                    font-bold
                    "
                  >
                    {item.name}
                  </h3>

                  <p className="text-gray-400 text-sm">
                    Size: US {item.size}
                  </p>

                  <p className="text-red-400">
                    ${item.price}
                  </p>

                  <div
                    className="
                    flex
                    items-center
                    gap-3
                    mt-4
                    "
                  >
                    <button
                      onClick={() =>
                        decrease(item.id, item.size)
                      }
                      className="
                      p-2
                      rounded-lg
                      bg-white/5
                      "
                    >
                      <Minus size={16} />
                    </button>

                    <span>
                      {item.quantity}
                    </span>

                    <button
                      onClick={() =>
                        increase(item.id, item.size)
                      }
                      className="
                      p-2
                      rounded-lg
                      bg-white/5
                      "
                    >
                      <Plus size={16} />
                    </button>
                  </div>

                  <button
                    onClick={() =>
                      removeItem(item.id, item.size)
                    }
                    className="
                    mt-4
                    text-red-500
                    "
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              ))}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div
                className="
                mt-10
                border-t
                border-white/10
                pt-6
                "
              >
                <div
                  className="
                  flex
                  justify-between
                  text-xl
                  font-semibold
                  "
                >
                  <span>Subtotal</span>

                  <span>
                    ${subtotal().toFixed(2)}
                  </span>
                </div>

                <Link
                  href="/checkout"
                  onClick={closeCart}
                  className="
                  block
                  w-full
                  mt-6
                  py-4
                  rounded-2xl
                  bg-red-500
                  hover:bg-red-600
                  text-center
                  text-lg
                  font-bold
                  transition
                  "
                >
                  Proceed To Checkout
                </Link>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}