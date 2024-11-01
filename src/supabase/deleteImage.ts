import { supabase } from './index'

export async function deleteImage({
  dir,
  fileName,
}: { dir: string; fileName: string }): Promise<boolean> {
  fileName
  const { data, error } = await supabase.storage
    .from('arquivos')
    .remove([`${dir}/${fileName}`])

  return !!data
}
