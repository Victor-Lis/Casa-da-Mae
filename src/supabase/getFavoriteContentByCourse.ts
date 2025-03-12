import type { ContentType } from '@/@types/ContentType'
import { supabase } from './index'

export async function getFavoriteContentByCourse({
  curso,
}: { curso: string }): Promise<ContentType | null> {
  const { data: conteudo, error } = await supabase
    .from('conteudos')
    .select()
    .eq('curso', curso)
    .eq('is_favorite', true)
    .order('edited_at', { ascending: false })

  return conteudo
    ? conteudo.length
      ? (conteudo[0] as ContentType)
      : null
    : null
}
