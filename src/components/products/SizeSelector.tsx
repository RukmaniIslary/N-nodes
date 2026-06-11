"use client";

import { useState, useEffect } from "react";

import { resolveSizes } from "@/lib/sizes";

export default function SizeSelector({
  sizes,
  onSizeSelect,
  selectedSize,
}: {
  sizes: {
    id: string;
    size: string;
    stock: number;
  }[];
  onSizeSelect?: (size: string) => void;
  selectedSize?: string;
}) {
  const available = resolveSizes(sizes);

  const [selected, setSelected] = useState(selectedSize || "");

  useEffect(() => {
    if (selectedSize !== undefined) {
      setSelected(selectedSize);
    }
  }, [selectedSize]);

  const handleSelect = (size: string) => {
    setSelected(size);
    onSizeSelect?.(size);
  };

  return (
    <div className="mt-8">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold">Select Size</h3>
        <span className="text-sm text-gray-400">US Sizing</span>
      </div>

      <div className="flex flex-wrap gap-3">
        {available.map((size) => {
          const outOfStock = size.stock <= 0;
          const isSelected = selected === size.size;

          return (
            <button
              key={size.id}
              type="button"
              disabled={outOfStock}
              onClick={() => handleSelect(size.size)}
              className={`
                min-w-[64px]
                px-5
                py-3
                rounded-xl
                border
                font-semibold
                transition
                ${
                  isSelected
                    ? "bg-red-500 border-red-500 text-white"
                    : "border-white/10 hover:border-white/40"
                }
                ${
                  outOfStock
                    ? "opacity-30 cursor-not-allowed line-through"
                    : ""
                }
              `}
            >
              US {size.size}
            </button>
          );
        })}
      </div>

      {selected ? (
        <div className="mt-4 text-green-400">
          Selected Size: US {selected}
        </div>
      ) : (
        <div className="mt-4 text-gray-400 text-sm">
          Please select a size to continue
        </div>
      )}
    </div>
  );
}
