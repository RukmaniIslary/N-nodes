export const dynamic = "force-dynamic";

import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function EditProductPage({
  params,
}: Props) {
  const { id } = await params;

  const product =
    await prisma.product.findUnique({
      where: {
        id,
      },
    });

  if (!product) {
    return (
      <div className="p-10">
        Product not found
      </div>
    );
  }

  async function updateProduct(
    formData: FormData
  ) {
    "use server";

    await prisma.product.update({
      where: {
        id,
      },
      data: {
        name:
          formData.get("name") as string,

        slug:
          formData.get("slug") as string,

        description:
          formData.get(
            "description"
          ) as string,

        image:
          formData.get("image") as string,

        price: Number(
          formData.get("price")
        ),

        stock: Number(
          formData.get("stock")
        ),

        category:
          formData.get(
            "category"
          ) as string,

        featured:
          formData.get("featured") ===
          "on",
      },
    });

    redirect("/admin/products");
  }

  return (
    <div className="p-10">

      <h1 className="text-4xl font-black mb-10">
        Edit Product
      </h1>

      <form
        action={updateProduct}
        className="space-y-6 max-w-2xl"
      >

        <input
          name="name"
          defaultValue={product.name}
          className="
          glass
          p-4
          w-full
          rounded-xl
          "
        />

        <input
          name="slug"
          defaultValue={product.slug ?? ""}
          className="
          glass
          p-4
          w-full
          rounded-xl
          "
        />

        <textarea
          name="description"
          defaultValue={
            product.description
          }
          className="
          glass
          p-4
          w-full
          rounded-xl
          h-40
          "
        />

        <input
          name="image"
          defaultValue={product.image}
          className="
          glass
          p-4
          w-full
          rounded-xl
          "
        />

        <input
          type="number"
          step="0.01"
          name="price"
          defaultValue={product.price}
          className="
          glass
          p-4
          w-full
          rounded-xl
          "
        />

        <input
          type="number"
          name="stock"
          defaultValue={product.stock}
          className="
          glass
          p-4
          w-full
          rounded-xl
          "
        />

        <input
          name="category"
          defaultValue={product.category}
          className="
          glass
          p-4
          w-full
          rounded-xl
          "
        />

        <label className="flex gap-3">

          <input
            type="checkbox"
            name="featured"
            defaultChecked={
              product.featured
            }
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
          Save Changes
        </button>

      </form>

    </div>
  );
}