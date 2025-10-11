import { PostType } from "@/@types/PostType";
import { supabase } from "@/supabase";

export async function createPageContent({
  post,
}: {
  post: Pick<PostType, "title" | "content" | "page">;
}): Promise<PostType[]> {
  const { data: posts, error } = await supabase
    .from("blog")
    .insert([{ ...post }])
    .select();

  if (error) {
    console.error("Error creating post:", error);
    return [];
  }

  return posts;
}
