"use server";

import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";

export async function registerUser(
  name: string,
  email: string,
  password: string
) {
  const existing =
    await prisma.user.findUnique({
      where: { email },
    });

  if (existing) {
    throw new Error("User already exists");
  }

  const hashed =
    await bcrypt.hash(password, 12);

  return prisma.user.create({
    data: {
      name,
      email,
      password: hashed,
    },
  });
}