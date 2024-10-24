import type { InscriptionType } from '@/@types/Inscription'
import { supabase } from './index'

type InscriptionParams = {
  gmail: string
  curso: string
}

type ResponseType = {
  status: boolean
  message?: string
}

export async function insertCourseInscription({
  inscricao,
}: { inscricao: InscriptionParams }): Promise<ResponseType> {
  const { data: dataSelect } = await supabase.from('inscricoes').select()

  const inscricoes: InscriptionType[] = dataSelect || []

  const alreadyHasAnInscriptionAtThisCourse = () =>
    !!inscricoes?.find(
      insc =>
        insc.aluno === inscricao.gmail && insc.nome_do_curso === inscricao.curso
    )

  if (!alreadyHasAnInscriptionAtThisCourse()) {
    const { data, error } = await supabase
      .from('inscricoes')
      .insert([{ aluno: inscricao.gmail, nome_do_curso: inscricao.curso }])
      .select()

    return {
      status: !!data,
      message: error ? (error as unknown as string) : undefined,
    }
  }

  return {
    status: false,
    message: 'Inscrição para esse curso já realizada!',
  }
}
