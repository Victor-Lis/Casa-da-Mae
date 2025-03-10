import type { ContentType } from '@/@types/ContentType'
import { supabase } from './index'

export async function getCourseContent({
  curso,
}: { curso: string }): Promise<ContentType[] | null> {
  const { data: conteudo, error } = await supabase
    .from('conteudos')
    .select()
    .eq('curso', curso)
    .order('edited_at', { ascending: false })

  return conteudo as ContentType[] | null
}
