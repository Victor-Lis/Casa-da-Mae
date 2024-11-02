import type { InscriptionType } from '@/@types/Inscription'
import { supabase } from './index'

const generateRandomId = () =>
  `${Math.ceil(Math.random() * 10000)}${Math.ceil(Math.random() * 10000)}${Math.ceil(Math.random() * 10000)}${Math.ceil(Math.random() * 10000)}${Math.ceil(Math.random() * 10000)}${Math.ceil(Math.random() * 10000)}${Math.ceil(Math.random() * 10000)}${Math.ceil(Math.random() * 10000)}`

type UploadImageProps = {
  file: any
  dir: string
  fileType: string

  titulo: string
  descricao: string

  curso: string
}

export async function uploadCourseContent({
  file,
  dir,
  fileType,

  curso,

  titulo,
  descricao,
}: UploadImageProps): Promise<boolean | null> {
  const id = generateRandomId().slice(0, 8)

  const { data, error } = await supabase.storage
    .from('arquivos')
    .upload(`${dir}/${id}${fileType}`, file, {
      cacheControl: '3600',
      upsert: false,
    })

  const { data: url } = await supabase.storage
    .from('arquivos')
    .getPublicUrl(`${dir}/${id}${fileType}`)

  const { data: insertData, error: insertError } = await supabase
    .from('conteudos')
    .insert([
      {
        id,
        link: url.publicUrl,
        titulo,
        descricao,
        curso,
        tipo_de_midia: fileType.includes('pdf') ? 'pdf' : 'imagem',
        tipo: fileType,
      },
    ])
    .select()

  return !!insertData
}
