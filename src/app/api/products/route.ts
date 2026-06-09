import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const products = await prisma.product.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return NextResponse.json(products);
}

export async function POST(
  request: Request
) {
  const body = await request.json();

  const product =
    await prisma.product.create({
      data: {
        name: body.name,
        description: body.description,
        price: body.price,
        stock: body.stock,
        category: body.category,
        image: body.image || "/placeholder.png",
      },
    });

  return NextResponse.json(product);
}