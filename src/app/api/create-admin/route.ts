import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const hashed = await bcrypt.hash(
    "@Skunktech1",
    12
  );

  const user = await prisma.user.create({
    data: {
      name: "Admin",
      email: "dubmachine303@gmail.com",
      password: hashed,
      role: "ADMIN",
    },
  });

  return NextResponse.json(user);
}