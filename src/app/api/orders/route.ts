import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(
  request: Request
) {
  try {
    const body =
      await request.json();

    const order =
      await prisma.order.create({
        data: {
          userId:
            body.userId,

          total:
            Number(body.total),

          status:
            "PENDING",

          items:
            body.items,
        },
      });

    return NextResponse.json(
      order,
      { status: 201 }
    );

  } catch (error) {

    console.error(error);

    return NextResponse.json(
      {
        error:
          "Failed to create order",
      },
      {
        status: 500,
      }
    );

  }
}