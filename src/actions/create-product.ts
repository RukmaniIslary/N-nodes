"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function createProduct(
  formData: FormData
) {

  await prisma.product.create({

    data: {

      name: String(
        formData.get("name")
      ),

      slug: String(
        formData.get("slug")
      ),

      description: String(
        formData.get("description")
      ),

      image: "/placeholder.png",

      price: Number(
        formData.get("price")
      ),

      stock: Number(
        formData.get("stock")
      ),

      category: String(
        formData.get("category")
      )

    }

  });

  revalidatePath(
    "/admin/products"
  );

}