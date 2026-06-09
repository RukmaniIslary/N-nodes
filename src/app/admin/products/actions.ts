"use server";

import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

export async function deleteProduct(
  id: string
) {
  await prisma.product.delete({
    where: {
      id,
    },
  });

  redirect("/admin/products");
}