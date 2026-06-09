"use client";

import { useState } from "react";

export default function ProductForm() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [category, setCategory] = useState("");

  async function submit() {
    try {
      const response = await fetch("/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          description,
          price: Number(price),
          stock: Number(stock),
          category,
        }),
      });

      if (response.ok) {
        alert("Product created");

        setName("");
        setDescription("");
        setPrice("");
        setStock("");
        setCategory("");
      } else {
        alert("Failed to create product");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    }
  }

  return (
    <div className="space-y-4 max-w-xl">
      <input
        value={name}
        placeholder="Name"
        className="glass p-4 w-full"
        onChange={(e) => setName(e.target.value)}
      />

      <textarea
        value={description}
        placeholder="Description"
        className="glass p-4 w-full"
        onChange={(e) => setDescription(e.target.value)}
      />

      <input
        value={price}
        placeholder="Price"
        className="glass p-4 w-full"
        onChange={(e) => setPrice(e.target.value)}
      />

      <input
        value={stock}
        placeholder="Stock"
        className="glass p-4 w-full"
        onChange={(e) => setStock(e.target.value)}
      />

      <input
        value={category}
        placeholder="Category"
        className="glass p-4 w-full"
        onChange={(e) => setCategory(e.target.value)}
      />

      <button
        onClick={submit}
        className="
          bg-red-500
          hover:bg-red-600
          px-6
          py-3
          rounded-xl
          font-semibold
        "
      >
        Create Product
      </button>
    </div>
  );
}