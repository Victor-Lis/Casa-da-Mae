import type { UserProps } from '@/@types/User'
import StyledBox from '../../StyledBox'

import Link from 'next/link'

import { getInscriptionsByEmail } from '@/supabase/getInscriptionsByEmail'
import CoursesContainer from '../CoursesContainer'

export default async function Courses({ email }: UserProps) {
  const inscriptions = await getInscriptionsByEmail({
    email: email as string,
  })

  return (
    <StyledBox extraClass="pb-12">
      <h1 className="text-white text-5xl w-full text-center font-bold mb-8 max-sm:text-3xl">
        Cursos
      </h1>
      <h1 className="text-white text-2xl w-full text-center max-sm:text-xl mb-6">
        Abaixo estão os cursos disponíveis para esse email, caso queira ter
        acesso a mais cursos acesse a aba de cursos e realize sua inscrição! Ou{' '}
        <Link href="/cursos" className="font-bold">
          clique aqui
        </Link>{' '}
        se preferir.
      </h1>
      <h1 className="text-white text-2xl w-full text-center max-sm:text-xl">
        Os cursos abaixo estão divididos em cursos com acesso já{' '}
        <strong className="text-green-500">liberado</strong> e cursos com status{' '}
        <strong className="text-red-400">pendente</strong>, para descobrir em
        qual cada um se encaixa, basta analisar a cor da borda
      </h1>
      <CoursesContainer inscricoes={inscriptions || []} />
    </StyledBox>
  )
}