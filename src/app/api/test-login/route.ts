import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const user = await prisma.user.findUnique({
    where: {
      email: "dubmachine303@gmail.com",
    },
  });

  if (!user) {
    return NextResponse.json({
      error: "User not found",
    });
  }

  const valid = await bcrypt.compare(
    "@Skunktech1",
    user.password
  );

  return NextResponse.json({
    email: user.email,
    valid,
  });
}