"use client";

import { useState } from "react";
import ImageUploader from "@/components/admin/ImageUploader";

export default function ProductForm() {

  const [name,setName] =
    useState("");

  const [description,setDescription] =
    useState("");

  const [price,setPrice] =
    useState("");

  const [stock,setStock] =
    useState("");

  const [category,setCategory] =
    useState("");

  const [image,setImage] =
    useState("");

  const [loading,setLoading] =
    useState(false);

  async function submit() {

    setLoading(true);

    try {

      const response =
        await fetch(
          "/api/products",
          {
            method:"POST",
            headers:{
              "Content-Type":
                "application/json"
            },
            body:JSON.stringify({
              name,
              description,
              image,
              price:Number(price),
              stock:Number(stock),
              category
            })
          }
        );

      if(response.ok){

        alert(
          "Product Created"
        );

        window.location.href =
          "/admin/products";

      }else{

        alert(
          "Failed to create product"
        );

      }

    }catch(error){

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
        onChange={(e)=>
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
        onChange={(e)=>
          setDescription(
            e.target.value
          )
        }
      />

      <input
        value={price}
        placeholder="Price"
        className="
        glass
        p-4
        w-full
        rounded-xl
        "
        onChange={(e)=>
          setPrice(
            e.target.value
          )
        }
      />

      <input
        value={stock}
        placeholder="Stock"
        className="
        glass
        p-4
        w-full
        rounded-xl
        "
        onChange={(e)=>
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
        onChange={(e)=>
          setCategory(
            e.target.value
          )
        }
      />

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