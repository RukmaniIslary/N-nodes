import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const response = await fetch(
      "https://api.maxelpay.com/api/v1/payments/sessions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-API-KEY": process.env.MAXELPAY_API_KEY!,
        },
        body: JSON.stringify({
          orderId: `order_${Date.now()}`,
          amount: body.amount,
          currency: "USD",
          description: "N-Nodes Sneaker Order",
          successUrl:
            "http://localhost:3000/payment/success",
          cancelUrl:
            "http://localhost:3000/payment/cancel",
          customerEmail:
            body.email || "customer@example.com",
        }),
      }
    );

    const data = await response.json();

    console.log(
      "MAXELPAY RESPONSE:",
      JSON.stringify(data, null, 2)
    );

    return NextResponse.json(data);

  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Payment session creation failed",
      },
      { status: 500 }
    );
  }
}