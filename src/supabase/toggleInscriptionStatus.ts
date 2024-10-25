import type { InscriptionType } from '@/@types/Inscription'
import { supabase } from './index'

export async function toggleInscriptionStatus({
  id,
  status_aprovacao,
}: { id: string; status_aprovacao: boolean }): Promise<boolean> {
  const { data: inscricoes, error } = await supabase
    .from('inscricoes')
    .update({ status_aprovacao: !status_aprovacao })
    .eq('id', id)
    .select()

  return !!inscricoes
}
