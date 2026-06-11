export const dynamic = "force-dynamic";

import { prisma } from "@/lib/prisma";
import ProductPageClient from "./ProductPageClient";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProductPage({
  params,
}: Props) {
  const { id } = await params;

  const product =
    await prisma.product.findUnique({
      where: {
        id,
      },

      include: {
        sizes: true,
      },
    });

  if (!product) {
    return (
      <div className="p-20 text-center">
        Product not found
      </div>
    );
  }

  const related =
    await prisma.product.findMany({
      where: {
        category: product.category,
        NOT: {
          id: product.id,
        },
      },
      take: 4,
    });

  return (
    <ProductPageClient
      product={product}
      related={related}
    />
  );
}