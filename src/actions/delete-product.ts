"use server";

import { prisma } from "@/lib/prisma";

export async function deleteProduct(
  id: string
) {

  await prisma.product.delete({
    where: {
      id,
    },
  });

}