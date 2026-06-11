"use client";

import { useState, useEffect } from "react";

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

  const [selected,
    setSelected] =
    useState(selectedSize || "");

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

      <h3
        className="
        text-xl
        font-bold
        mb-4
        "
      >
        Select Size
      </h3>

      <div
        className="
        flex
        flex-wrap
        gap-3
        "
      >

        {sizes.map((size) => (

          <button
            key={size.id}
            onClick={() =>
              handleSelect(
                size.size
              )
            }
            className={`
              px-5
              py-3
              rounded-xl
              border
              transition
              ${
                selected ===
                size.size
                  ? "bg-red-500 border-red-500"
                  : "border-white/10"
              }
            `}
          >
            US {size.size}
          </button>

        ))}

      </div>

      {selected && (

        <div
          className="
          mt-4
          text-green-400
          "
        >
          Selected Size:
          {" "}
          US {selected}
        </div>

      )}

    </div>

  );

}