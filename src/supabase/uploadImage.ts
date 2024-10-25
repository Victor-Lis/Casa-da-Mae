import type { InscriptionType } from '@/@types/Inscription'
import { supabase } from './index'

const generateRandomId = () =>
  `${Math.ceil(Math.random() * 10000)}${Math.ceil(Math.random() * 10000)}${Math.ceil(Math.random() * 10000)}${Math.ceil(Math.random() * 10000)}${Math.ceil(Math.random() * 10000)}${Math.ceil(Math.random() * 10000)}${Math.ceil(Math.random() * 10000)}${Math.ceil(Math.random() * 10000)}`

export async function uploadImage({
  file,
  fileType,
}: { file: any; fileType: string }): Promise<boolean> {
  const { data, error } = await supabase.storage
    .from('contribuicoes')
    .upload(`${generateRandomId()}${fileType}`, file, {
      cacheControl: '3600',
      upsert: false,
    })

  return !!data
}
