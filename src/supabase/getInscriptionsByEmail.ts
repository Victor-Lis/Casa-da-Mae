import type { InscriptionType } from '@/@types/Inscription'
import { supabase } from './index'

export async function getInscriptionsByEmail({
  email,
}: { email: string }): Promise<InscriptionType[] | null> {
  const { data, error } = await supabase.from('inscricoes').select()

  return data as InscriptionType[] | null
}
