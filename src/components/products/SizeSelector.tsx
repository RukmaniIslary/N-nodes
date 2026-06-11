"use client";

import { useState } from "react";

export default function SizeSelector({
  sizes,
}: {
  sizes: {
    id: string;
    size: string;
    stock: number;
  }[];
}) {

  const [selected,
    setSelected] =
    useState("");

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
              setSelected(
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