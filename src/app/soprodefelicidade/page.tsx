import type { UserType } from "@/@types/User";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { getPageContent } from "./utils/get-page-content";
import BlogContent from "./components/blog-content";
import { PostType } from "@/@types/PostType";
import CreateContentForm from "./components/create-content-form";

export default async function SoproDeFelicidade() {
  const session = await getServerSession(authOptions);
  const user = session?.user as UserType;

  const content = await getPageContent({ page: "soprodefelicidade" });

  return (
    <main className="bg-tertiary py-10 flex flex-col items-center justify-start min-h-svh">
      <h1 className="text-4xl font-bold mb-4 text-secondary bg-primary p-4 rounded">
        Sopro de Felicidade
      </h1>
      {content.length ? (
        <div className="max-w-3xl w-full px-4">
          {content.map((post) => (
            <BlogContent key={post.id} post={post} isAdmin={user?.admin} />
          ))}
        </div>
      ) : (
        <div className="text-center text-xl font-semibold text-gray-500 bg-white p-4 rounded-lg my-10">
          <p>Ainda não há nenhum post por aqui.</p>
        </div>
      )}
      {user?.admin && <CreateContentForm contentType="soprodefelicidade" />}
    </main>
  );
}
