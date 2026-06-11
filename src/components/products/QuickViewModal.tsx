"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, Heart, ArrowRight, Star } from "lucide-react";

import SneakerViewer from "./SneakerViewer";

import { useWishlistStore } from "@/store/wishlistStore";

interface Props {
  open: boolean;
  onClose: () => void;
  productId?: string;
  model: string;
  name?: string;
  price?: number;
  rating?: number;
}

export default function QuickViewModal({
  open,
  onClose,
  productId,
  model,
  name = "Nike Sneaker",
  price = 170,
  rating = 4.9,
}: Props) {
  const toggle = useWishlistStore((s) => s.toggle);
  const isWishlisted = useWishlistStore((s) =>
    productId ? s.isWishlisted(productId) : false
  );
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="
          fixed
          inset-0
          z-[100]
          bg-black/80
          backdrop-blur-xl
          flex
          items-center
          justify-center
          p-6
          "
          onClick={onClose}
        >
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9,
              y: 50,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.9,
              y: 50,
            }}
            transition={{
              duration: 0.3,
            }}
            onClick={(e) => e.stopPropagation()}
            className="
            relative
            w-full
            max-w-6xl
            rounded-3xl
            border
            border-white/10
            bg-white/5
            backdrop-blur-2xl
            overflow-hidden
            "
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="
              absolute
              top-5
              right-5
              z-20
              p-3
              rounded-full
              bg-white/10
              hover:bg-red-500
              transition
              "
            >
              <X size={20} />
            </button>

            <div className="grid lg:grid-cols-2 min-h-[700px]">
              {/* LEFT SIDE */}
              <div
                className="
                bg-gradient-to-br
                from-red-950/30
                via-black
                to-purple-950/20
                "
              >
                <SneakerViewer model={model} />
              </div>

              {/* RIGHT SIDE */}
              <div className="p-10 flex flex-col justify-center">
                <span
                  className="
                  inline-block
                  bg-red-500
                  text-white
                  px-4
                  py-2
                  rounded-full
                  text-sm
                  font-semibold
                  mb-4
                  w-fit
                  "
                >
                  30% OFF
                </span>

                <h2 className="text-5xl font-black mb-4">
                  {name}
                </h2>

                <div className="flex items-center gap-2 mb-6">
                  <Star
                    size={20}
                    className="text-yellow-400 fill-yellow-400"
                  />
                  <span className="text-lg">
                    {rating}
                  </span>
                </div>

                <div className="mb-8">
                  <div className="text-gray-500 line-through text-xl">
                    $200
                  </div>

                  <div className="text-5xl font-black text-red-400">
                    ${price}
                  </div>

                  <div className="text-green-400 text-lg mt-2">
                    Save $30
                  </div>
                </div>

                <p className="text-gray-400 leading-relaxed mb-10">
                  Experience premium comfort,
                  futuristic design, and elite
                  performance with N-Nodes'
                  curated sneaker collection.
                </p>

                <div className="flex gap-4">
                  <Link
                    href={
                      productId
                        ? `/products/${productId}`
                        : "#"
                    }
                    onClick={onClose}
                    className="
                    flex-1
                    bg-red-500
                    hover:bg-red-600
                    px-6
                    py-4
                    rounded-2xl
                    flex
                    items-center
                    justify-center
                    gap-2
                    font-semibold
                    transition
                    "
                  >
                    Select Size & Buy
                    <ArrowRight size={20} />
                  </Link>

                  <button
                    onClick={() =>
                      productId && toggle(productId)
                    }
                    className={`
                    px-6
                    py-4
                    rounded-2xl
                    border
                    border-white/10
                    transition
                    ${
                      isWishlisted
                        ? "bg-red-500/20 text-red-400"
                        : "bg-white/5 hover:bg-white/10"
                    }
                    `}
                  >
                    <Heart
                      size={22}
                      fill={isWishlisted ? "currentColor" : "none"}
                    />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}