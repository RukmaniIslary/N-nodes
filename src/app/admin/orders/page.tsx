import { prisma } from "@/lib/prisma";

export default async function OrdersPage() {
  const orders = await prisma.order.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div className="p-10">

      <h1 className="text-4xl font-black mb-10">
        Orders
      </h1>

      <div className="glass rounded-3xl overflow-hidden">

        <table className="w-full">

          <thead>

            <tr className="border-b border-white/10">

              <th className="p-4 text-left">
                Order ID
              </th>

              <th className="p-4 text-left">
                Status
              </th>

              <th className="p-4 text-left">
                Total
              </th>

              <th className="p-4 text-left">
                Created
              </th>

            </tr>

          </thead>

          <tbody>

            {orders.map((order) => (

              <tr
                key={order.id}
                className="border-b border-white/5"
              >

                <td className="p-4">
                  {order.id}
                </td>

                <td className="p-4">
                  {order.status}
                </td>

                <td className="p-4">
                  ${order.total}
                </td>

                <td className="p-4">
                  {order.createdAt.toLocaleDateString()}
                </td>

              </tr>

            ))}

            {orders.length === 0 && (
              <tr>
                <td
                  colSpan={4}
                  className="p-10 text-center text-gray-400"
                >
                  No orders yet
                </td>
              </tr>
            )}

          </tbody>

        </table>

      </div>

    </div>
  );
}