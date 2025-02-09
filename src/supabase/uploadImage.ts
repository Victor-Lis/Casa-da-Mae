import type { InscriptionType } from '@/@types/Inscription'
import { supabase } from './index'

const generateRandomId = () =>
  `${Math.ceil(Math.random() * 10000)}${Math.ceil(Math.random() * 10000)}${Math.ceil(Math.random() * 10000)}${Math.ceil(Math.random() * 10000)}${Math.ceil(Math.random() * 10000)}${Math.ceil(Math.random() * 10000)}${Math.ceil(Math.random() * 10000)}${Math.ceil(Math.random() * 10000)}`

type UploadImageProps = {
  file: any
  dir: string
  fileType: string
}

export async function uploadImage({
  file,
  dir,
  fileType,
}: UploadImageProps): Promise<boolean | null> {
  const id = generateRandomId()

  const { data, error } = await supabase.storage
    .from('arquivos')
    .upload(`${dir}/${id}${fileType}`, file, {
      cacheControl: '3600',
      upsert: false,
    })

  return !!data
}
