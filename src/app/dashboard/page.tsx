import { auth } from "@/auth";

export default async function Dashboard() {

  const session =
    await auth();

  return (

    <div className="p-10">

      <h1
        className="
        text-5xl
        font-black
        "
      >
        Welcome
      </h1>

      <p>
        {session?.user?.email}
      </p>

    </div>

  );

}