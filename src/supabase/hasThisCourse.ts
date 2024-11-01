import type { InscriptionType } from '@/@types/Inscription'
import { supabase } from './index'

export async function hasThisCourse({
  email,
  curso,
}: { email: string; curso: string }): Promise<boolean> {
  const { data: inscricoes, error } = await supabase
    .from('inscricoes')
    .select()
    .eq('aluno', email)
    .eq('nome_do_curso', curso)

  if (!inscricoes?.length) return !!inscricoes?.length

  const inscricao = inscricoes[0] as InscriptionType

  return inscricao.status_aprovacao
}
