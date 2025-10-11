import { PostType } from "@/@types/PostType";
import { supabase } from "@/supabase";

export async function deletePageContent({
  id,
}: {
  id: number;
}): Promise<PostType[]> {
  const { data: posts, error } = await supabase
    .from("blog")
    .select()
    .eq("id", id)

  if (!posts?.length) return [];

  const { error: deleteError } = await supabase
    .from("blog")
    .delete()
    .eq("id", id)

  if (deleteError) {
    console.error("Error deleting post:", deleteError);
    return [];
  }

  return posts;
}
