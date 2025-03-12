import type { DirectionType } from '@/@types/DirectionType'
import { getCourseContent } from './getCourseContent'
import { supabase } from './index'

export async function setContentAsFavorite({
  id,
}: {
  id: number
}) {
  const { data, error } = await supabase
    .from('conteudos')
    .update({ is_favorite: true })
    .eq('id', id)

  return {
    data,
    error,
  }
}
