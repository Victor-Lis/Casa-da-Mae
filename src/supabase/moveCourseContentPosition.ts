import { supabase } from './index'

export async function moveContentPositionById({
  id,
}: {
  id: number
  curso: string
}) {
  const { data, error } = await supabase
    .from('conteudos')
    .update({ id })
    .eq('id', id)

  return {
    data,
    error,
  }
}
