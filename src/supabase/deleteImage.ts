import { supabase } from './index'

export async function deleteImage({
  fileName,
}: { fileName: string }): Promise<boolean> {
  console.log(fileName)
  const { data, error } = await supabase.storage
    .from('contribuicoes')
    .remove([fileName])

  return !!data
}
