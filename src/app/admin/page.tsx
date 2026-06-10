export const dynamic = "force-dynamic";

import { prisma } from "@/lib/prisma";
import { requireAdmin } from "@/lib/admin";

export default async function AdminDashboard() {
  await requireAdmin();

  const [
    products,
    orders,
    users
  ] = await Promise.all([
    prisma.product.count(),
    prisma.order.count(),
    prisma.user.count()
  ]);

  return (
    <div className="p-10">
      <h1 className="text-5xl font-black mb-10">
        Dashboard
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="glass p-6 rounded-3xl">
          <h2>Products</h2>
          <p className="text-4xl">{products}</p>
        </div>

        <div className="glass p-6 rounded-3xl">
          <h2>Orders</h2>
          <p className="text-4xl">{orders}</p>
        </div>

        <div className="glass p-6 rounded-3xl">
          <h2>Users</h2>
          <p className="text-4xl">{users}</p>
        </div>
      </div>
    </div>
  );
}