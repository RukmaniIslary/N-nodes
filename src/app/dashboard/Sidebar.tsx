import Link from "next/link";

export default function Sidebar(){

 return(

  <aside
   className="
   w-72
   glass
   min-h-screen
   p-6
   "
  >

   <div
    className="
    text-2xl
    font-black
    mb-10
    "
   >
    N-Nodes
   </div>

   <div className="space-y-4">

    <Link href="/dashboard">
      Dashboard
    </Link>

    <br />

    <Link
      href="/dashboard/orders"
    >
      Orders
    </Link>

    <br />

    <Link
      href="/dashboard/wishlist"
    >
      Wishlist
    </Link>

   </div>

  </aside>

 );

}