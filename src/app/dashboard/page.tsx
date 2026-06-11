import { auth } from "@/auth";
import LogoutButton from "@/components/logout-button";

export default async function Dashboard() {
  const session = await auth();

  return (
    <div className="p-10">
      <h1 className="text-5xl font-black">
        Welcome
      </h1>

      <p>
        {session?.user?.email}
      </p>

      <div className="mt-6">
        <LogoutButton />
      </div>
    </div>
  );
}