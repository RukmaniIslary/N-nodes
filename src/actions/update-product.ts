"use server";

import { prisma } from "@/lib/prisma";

export async function updateProduct(
  id: string,
  data: {
    name: string;
    description: string;
    price: number;
    stock: number;
    category: string;
  }
) {

  await prisma.product.update({
    where: {
      id,
    },
    data,
  });

}