import type { UserType } from "@/@types/User";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import AllUsers from "./components/AllUsers";
import AdminUsers from "./components/AdminUsers";

export default async function Curso() {
  const session = await getServerSession(authOptions);
  const user = session?.user as UserType;

  return (
    <main className="bg-tertiary py-6 flex flex-col items-center justify-center min-h-svh">
      <AllUsers />
      {user?.admin && <AdminUsers />}
    </main>
  );
}
