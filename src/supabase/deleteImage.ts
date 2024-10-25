import { supabase } from './index'

export async function deleteImage({
  file,
}: { file: string }): Promise<boolean> {
  const { data, error } = await supabase.storage
    .from('contribuicoes')
    .remove([file])

  return !!data
}
