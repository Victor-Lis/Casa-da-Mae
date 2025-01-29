import { supabase } from './index'

export async function deleteCourseContent({
  id,
  tipo,
  fileType,
}: { id: number; tipo: string; fileType?: string }): Promise<boolean> {
  if (tipo !== 'video') {
    const { data, error } = await supabase.storage
      .from('arquivos')
      .remove([`cursos/${id}${fileType}`])
    if (error) return false
  }

  const { data, error } = await supabase.from('conteudos').delete().eq('id', id)
  //console.log(error)
  if (error) return false

  return true
}
