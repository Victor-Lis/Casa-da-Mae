import { PostType } from "@/@types/PostType";
import { supabase } from "@/supabase";

export async function getPageContent({
  page,
}: {
  page: "soprodefelicidade" | "saberesemroda";
}): Promise<PostType[]> {
  const { data: posts, error } = await supabase
    .from("blog")
    .select()
    .eq("page", page)

  if (!posts?.length) return [];

  return posts;
}
