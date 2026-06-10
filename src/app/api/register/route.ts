import { NextResponse } from "next/server";
import { registerUser } from "@/actions/register";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const user = await registerUser(
      body.name,
      body.email,
      body.password
    );

    return NextResponse.json(user);
  } catch (error: any) {
    return NextResponse.json(
      {
        error: error.message,
      },
      {
        status: 400,
      }
    );
  }
}