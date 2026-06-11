import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {

  const products =
    await prisma.product.findMany({

      include: {
        sizes: true,
      },

      orderBy: {
        createdAt: "desc",
      },

    });

  return NextResponse.json(
    products
  );

}

export async function POST(
  request: Request
) {

  const body =
    await request.json();

  const slug =
    body.name
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/g, "");

  const product =
    await prisma.product.create({

      data: {

        name:
          body.name,

        slug,

        description:
          body.description,

        price:
          body.price,

        stock:
          body.stock,

        category:
          body.category,

        image:
          body.image ||
          "/placeholder.png",

        featured:
          body.featured ||
          false,

        sizes: {

          create:
            body.sizes
              ?.filter(
                (s: any) =>
                  s.stock > 0
              )
              .map(
                (s: any) => ({
                  size: s.size,
                  stock: s.stock,
                })
              ) || [],

        },

      },

      include: {
        sizes: true,
      },

    });

  return NextResponse.json(
    product
  );

}