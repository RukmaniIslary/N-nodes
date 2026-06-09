import Link from "next/link";

export default function AdminSidebar() {

  return (

    <aside
      className="
      w-72
      min-h-screen
      glass
      p-6
      "
    >

      <div className="text-2xl font-black mb-10">
        N-Nodes Admin
      </div>

      <div className="space-y-4">

        <Link href="/admin">
          Dashboard
        </Link>

        <br />

        <Link href="/admin/products">
          Products
        </Link>

        <br />

        <Link href="/admin/orders">
          Orders
        </Link>

        <br />

        <Link href="/admin/customers">
          Customers
        </Link>

      </div>

    </aside>

  );

}