import type { DirectionType } from '@/@types/DirectionType'
import { getCourseContent } from './getCourseContent'
import { supabase } from './index'

export async function moveContentPositionById({
  id,
  curso,
  direction,
}: {
  id: number
  curso: string
  direction: DirectionType
}) {
  const conteudos = await getCourseContent({ curso })
  const conteudo = conteudos.findIndex(conteudo => conteudo.id === id)

  const previusContent = conteudos[conteudo + 1]
  const nextContent = conteudos[conteudo - 1]

  if (direction === 'next') {
    if (!nextContent)
      return {
        error: 'This is the first content',
      }

    const nextDate = new Date(nextContent.edited_at)
    nextDate.setSeconds(nextDate.getSeconds() + 1)

    const { data, error } = await supabase
      .from('conteudos')
      .update({ edited_at: nextDate.toISOString() })
      .eq('id', id)

    return {
      data,
      error,
    }
  }

  if (!previusContent)
    return {
      error: 'This is the last content',
    }

  const previusDate = new Date(previusContent.edited_at)
  previusDate.setSeconds(previusDate.getSeconds() - 1)

  const { data, error } = await supabase
    .from('conteudos')
    .update({ edited_at: previusDate.toISOString() })
    .eq('id', id)

  return {
    data,
    error,
  }

  // const { data, error } = await supabase
  // .from('conteudos')
  // .update({ id })
  // .eq('id', id)
}
