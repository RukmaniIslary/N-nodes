import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

async function createProduct(
  formData: FormData
) {
  "use server";

  await prisma.product.create({
    data: {
      name: formData.get("name") as string,
      slug: formData.get("slug") as string,
      description:
        formData.get("description") as string,
      image: formData.get("image") as string,
      price: Number(
        formData.get("price")
      ),
      stock: Number(
        formData.get("stock")
      ),
      category:
        formData.get("category") as string,
      featured:
        formData.get("featured") === "on",
    },
  });

  redirect("/admin/products");
}

export default function NewProductPage() {
  return (
    <div className="p-10">

      <h1 className="text-4xl font-black mb-10">
        New Product
      </h1>

      <form
        action={createProduct}
        className="space-y-6 max-w-2xl"
      >

        <input
          name="name"
          placeholder="Name"
          required
          className="glass p-4 w-full rounded-xl"
        />

        <input
          name="slug"
          placeholder="Slug"
          required
          className="glass p-4 w-full rounded-xl"
        />

        <textarea
          name="description"
          placeholder="Description"
          required
          className="glass p-4 w-full rounded-xl h-40"
        />

        <input
          name="image"
          placeholder="/shoes/jordan1.png"
          required
          className="glass p-4 w-full rounded-xl"
        />

        <input
          type="number"
          step="0.01"
          name="price"
          placeholder="Price"
          required
          className="glass p-4 w-full rounded-xl"
        />

        <input
          type="number"
          name="stock"
          placeholder="Stock"
          required
          className="glass p-4 w-full rounded-xl"
        />

        <input
          name="category"
          placeholder="Category"
          required
          className="glass p-4 w-full rounded-xl"
        />

        <label className="flex gap-3">
          <input
            type="checkbox"
            name="featured"
          />
          Featured Product
        </label>

        <button
          type="submit"
          className="
          bg-red-500
          px-8
          py-4
          rounded-xl
          "
        >
          Create Product
        </button>

      </form>

    </div>
  );
}