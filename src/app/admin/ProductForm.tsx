"use client";

import { useState } from "react";

export default function ProductForm() {

  const [name,setName] = useState("");
  const [description,setDescription] = useState("");
  const [price,setPrice] = useState("");
  const [stock,setStock] = useState("");
  const [category,setCategory] = useState("");

  async function submit() {

    const response =
      await createProduct(), {

        method:"POST",

        headers:{
          "Content-Type":"application/json"
        },

        body:JSON.stringify({
          name,
          description,
          price:Number(price),
          stock:Number(stock),
          category
        })

      });

    if(response.ok){
      alert("Product created");
    }

  }

  return (

    <div className="space-y-4 max-w-xl">

      <input
        placeholder="Name"
        className="glass p-4 w-full"
        onChange={(e)=>setName(e.target.value)}
      />

      <textarea
        placeholder="Description"
        className="glass p-4 w-full"
        onChange={(e)=>setDescription(e.target.value)}
      />

      <input
        placeholder="Price"
        className="glass p-4 w-full"
        onChange={(e)=>setPrice(e.target.value)}
      />

      <input
        placeholder="Stock"
        className="glass p-4 w-full"
        onChange={(e)=>setStock(e.target.value)}
      />

      <input
        placeholder="Category"
        className="glass p-4 w-full"
        onChange={(e)=>setCategory(e.target.value)}
      />

      <button
        onClick={submit}
        className="
        bg-red-500
        px-6
        py-3
        rounded-xl
        "
      >
        Create Product
      </button>

    </div>

  );
}