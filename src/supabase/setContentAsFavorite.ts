import type { DirectionType } from '@/@types/DirectionType'
import { getCourseContent } from './getCourseContent'
import { supabase } from './index'

export async function setContentAsFavorite({
  id,
  status,
}: {
  id: number
  status: boolean
}) {
  const { data, error } = await supabase
    .from('conteudos')
    .update({ is_favorite: !status })
    .eq('id', id)

  return {
    data,
    error,
  }
}
