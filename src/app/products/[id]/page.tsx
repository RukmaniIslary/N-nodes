export const dynamic = "force-dynamic";

import { prisma } from "@/lib/prisma";
import ProductPageClient from "./ProductPageClient";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

async function getProductWithSizes(id: string) {
  // The ProductSize table may not exist in every environment.
  // Try to include sizes, and gracefully fall back if the relation
  // query fails so the product page always renders.
  try {
    return await prisma.product.findUnique({
      where: { id },
      include: { sizes: true },
    });
  } catch {
    const product = await prisma.product.findUnique({
      where: { id },
    });

    return product ? { ...product, sizes: [] } : null;
  }
}

export default async function ProductPage({
  params,
}: Props) {
  const { id } = await params;

  const product = await getProductWithSizes(id);

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
