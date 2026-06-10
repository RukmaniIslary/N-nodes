export const dynamic = "force-dynamic";

import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { redirect } from "next/navigation";

async function deleteProduct(
  formData: FormData
) {
  "use server";

  const id =
    formData.get("id") as string;

  await prisma.product.delete({
    where: {
      id,
    },
  });

  redirect("/admin/products");
}

export default async function ProductsPage({
  searchParams,
}: {
  searchParams?: Promise<{
    search?: string;
  }>;
}) {
  const params =
    searchParams
      ? await searchParams
      : {};

  const search =
    params?.search || "";

  const products =
    await prisma.product.findMany({
      where: {
        name: {
          contains: search,
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });

  return (
    <div className="p-10">

      <div
        className="
        flex
        justify-between
        items-center
        mb-10
        "
      >
        <h1
          className="
          text-4xl
          font-black
          "
        >
          Products
        </h1>

        <Link
          href="/admin/products/new"
          className="
          bg-red-500
          hover:bg-red-600
          px-6
          py-3
          rounded-xl
          "
        >
          Add Product
        </Link>
      </div>

      <form className="mb-6">

        <input
          name="search"
          defaultValue={search}
          placeholder="Search products..."
          className="
          glass
          p-4
          w-full
          rounded-xl
          "
        />

      </form>

      <div
        className="
        glass
        rounded-3xl
        overflow-hidden
        "
      >

        <table className="w-full">

          <thead>

            <tr
              className="
              border-b
              border-white/10
              "
            >

              <th className="p-4 text-left">
                Name
              </th>

              <th className="p-4 text-left">
                Category
              </th>

              <th className="p-4 text-left">
                Price
              </th>

              <th className="p-4 text-left">
                Stock
              </th>

              <th className="p-4 text-left">
                Actions
              </th>

            </tr>

          </thead>

          <tbody>

            {products.map((product: any) => (

              <tr
                key={product.id}
                className="
                border-b
                border-white/5
                "
              >

                <td className="p-4">
                  {product.name}
                </td>

                <td className="p-4">
                  {product.category}
                </td>

                <td className="p-4">
                  ${product.price}
                </td>

                <td className="p-4">
                  {product.stock}
                </td>

                <td className="p-4">

                  <div
                    className="
                    flex
                    gap-4
                    "
                  >

                    <Link
                      href={`/admin/products/${product.id}`}
                      className="
                      text-blue-400
                      hover:text-blue-300
                      "
                    >
                      Edit
                    </Link>

                    <form
                      action={deleteProduct}
                    >

                      <input
                        type="hidden"
                        name="id"
                        value={product.id}
                      />

                      <button
                        type="submit"
                        className="
                        text-red-400
                        hover:text-red-300
                        "
                      >
                        Delete
                      </button>

                    </form>

                  </div>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}