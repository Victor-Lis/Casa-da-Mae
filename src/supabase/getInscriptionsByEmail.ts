import type { InscriptionType } from '@/@types/Inscription'
import { supabase } from './index'

export async function getInscriptionsByEmail({
  email,
}: { email: string }): Promise<InscriptionType[] | null> {
  const { data: inscricoes, error } = await supabase
    .from('inscricoes')
    .select()
    .eq('aluno', email)

  return inscricoes as InscriptionType[] | null
}
