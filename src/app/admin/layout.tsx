import { auth } from "@/auth";
import { redirect } from "next/navigation";

import AdminSidebar from "@/components/admin/AdminSidebar";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const session = await auth();

  if (!session) {
    redirect("/login");
  }

  if (
    (session.user as any)?.role !==
    "ADMIN"
  ) {
    redirect("/");
  }

  return (
    <div className="flex">

      <AdminSidebar />

      <main
        className="
        flex-1
        p-8
        "
      >
        {children}
      </main>

    </div>
  );
}