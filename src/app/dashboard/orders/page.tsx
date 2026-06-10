export const dynamic = "force-dynamic";

import { prisma } from "@/lib/prisma";

export default async function OrdersPage() {
  const orders =
    await prisma.order.findMany();

  return (
    <div className="p-10">
      <h1
        className="
        text-4xl
        mb-10
        "
      >
        Orders
      </h1>

      <pre>
        {JSON.stringify(
          orders,
          null,
          2
        )}
      </pre>
    </div>
  );
}