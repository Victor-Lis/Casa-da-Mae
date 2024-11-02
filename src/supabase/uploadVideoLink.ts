import { supabase } from './index'

type UploadImageProps = {
  link: string

  titulo: string
  descricao: string

  curso: string
}

export async function uploadVideoLink({
  link,

  curso,

  titulo,
  descricao,
}: UploadImageProps): Promise<boolean | null> {
  const { data: insertData, error: insertError } = await supabase
    .from('conteudos')
    .insert([{ link, titulo, descricao, curso, tipo_de_midia: 'video' }])
    .select()

  return !!insertData
}
