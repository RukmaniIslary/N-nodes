"use client";

import { useState } from "react";
import ImageUploader from "@/components/admin/ImageUploader";

export default function ProductForm() {

  const [name, setName] =
    useState("");

  const [description, setDescription] =
    useState("");

  const [price, setPrice] =
    useState("");

  const [stock, setStock] =
    useState("");

  const [category, setCategory] =
    useState("");

  const [image, setImage] =
    useState("");

  const [featured, setFeatured] =
    useState(false);

  const [loading, setLoading] =
    useState(false);

  const [sizes, setSizes] =
    useState([
      { size: "7", stock: 0 },
      { size: "8", stock: 0 },
      { size: "9", stock: 0 },
      { size: "10", stock: 0 },
      { size: "11", stock: 0 },
      { size: "12", stock: 0 },
    ]);

  async function submit() {

    setLoading(true);

    try {

      const response =
        await fetch(
          "/api/products",
          {
            method: "POST",

            headers: {
              "Content-Type":
                "application/json",
            },

            body: JSON.stringify({

              name,
              description,
              image,

              price:
                Number(price),

              stock:
                Number(stock),

              category,

              featured,

              sizes,

            }),
          }
        );

      if (response.ok) {

        alert(
          "Product Created"
        );

        window.location.href =
          "/admin/products";

      } else {

        alert(
          "Failed to create product"
        );

      }

    } catch (error) {

      console.error(error);

      alert(
        "Something went wrong"
      );

    }

    setLoading(false);

  }

  return (

    <div
      className="
      space-y-6
      max-w-3xl
      "
    >

      <ImageUploader
        value={image}
        onChange={setImage}
      />

      <input
        value={name}
        placeholder="Product Name"
        className="
        glass
        p-4
        w-full
        rounded-xl
        "
        onChange={(e) =>
          setName(
            e.target.value
          )
        }
      />

      <textarea
        value={description}
        placeholder="Description"
        className="
        glass
        p-4
        w-full
        rounded-xl
        h-40
        "
        onChange={(e) =>
          setDescription(
            e.target.value
          )
        }
      />

      <input
        value={price}
        placeholder="Price"
        type="number"
        className="
        glass
        p-4
        w-full
        rounded-xl
        "
        onChange={(e) =>
          setPrice(
            e.target.value
          )
        }
      />

      <input
        value={stock}
        placeholder="Total Stock"
        type="number"
        className="
        glass
        p-4
        w-full
        rounded-xl
        "
        onChange={(e) =>
          setStock(
            e.target.value
          )
        }
      />

      <input
        value={category}
        placeholder="Category"
        className="
        glass
        p-4
        w-full
        rounded-xl
        "
        onChange={(e) =>
          setCategory(
            e.target.value
          )
        }
      />

      <label
        className="
        flex
        items-center
        gap-3
        "
      >
        <input
          type="checkbox"
          checked={featured}
          onChange={(e) =>
            setFeatured(
              e.target.checked
            )
          }
        />

        Featured Product
      </label>

      <div
        className="
        border
        border-white/10
        rounded-3xl
        p-6
        "
      >

        <h2
          className="
          text-2xl
          font-bold
          mb-6
          "
        >
          Shoe Sizes
        </h2>

        <div className="space-y-4">

          {sizes.map(
            (
              item,
              index
            ) => (

              <div
                key={item.size}
                className="
                flex
                gap-4
                "
              >

                <div
                  className="
                  glass
                  p-4
                  rounded-xl
                  w-32
                  text-center
                  "
                >
                  US {item.size}
                </div>

                <input
                  type="number"
                  placeholder="Stock"
                  value={
                    item.stock
                  }
                  onChange={(e) => {

                    const updated =
                      [...sizes];

                    updated[index]
                      .stock =
                      Number(
                        e.target.value
                      );

                    setSizes(
                      updated
                    );

                  }}
                  className="
                  glass
                  p-4
                  rounded-xl
                  flex-1
                  "
                />

              </div>

            )
          )}

        </div>

      </div>

      <button
        onClick={submit}
        disabled={loading}
        className="
        bg-red-500
        hover:bg-red-600
        px-8
        py-4
        rounded-xl
        font-bold
        "
      >
        {
          loading
            ? "Creating..."
            : "Create Product"
        }
      </button>

    </div>

  );

}