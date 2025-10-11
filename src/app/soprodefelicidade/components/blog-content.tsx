import { PostType } from "@/@types/PostType";
import { deletePageContent } from "../utils/handle-delete-content";
import EditOptions from "./edit-options";

export default function BlogContent({ post, isAdmin }: { post: PostType, isAdmin?: boolean }) {
  const formattedDate = new Date(post.created_at).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  console.log({ post });

  return (
    <article
      key={post.id}
      className="mb-8 overflow-hidden rounded-xl bg-white shadow-lg transition-transform duration-300 ease-in-out"
    >
      <div className="p-6">
        <p className="mb-2 text-sm text-gray-500">{formattedDate}</p>
        <h2 className="mb-4 text-3xl font-bold text-primary">{post.title}</h2>
        <p className="text-gray-700 leading-relaxed">{post.content}</p>
      </div>
      {isAdmin && (
        <EditOptions post={post} />
      )}
    </article>
  );
}
