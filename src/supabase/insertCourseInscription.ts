import type { InscriptionType } from '@/@types/Inscription'
import { supabase } from './index'

type InscriptionParams = {
  gmail: string
  curso: string
}

export async function insertCourseInscription({
  inscricao,
}: { inscricao: InscriptionParams }): Promise<boolean> {
  const { data, error } = await supabase
    .from('inscricoes')
    .insert([{ aluno: inscricao.gmail, nome_do_curso: inscricao.curso }])
    .select()

  return !!data
}
