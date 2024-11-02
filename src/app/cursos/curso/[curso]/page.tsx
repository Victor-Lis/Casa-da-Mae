import type { UserType } from '@/@types/User'
import { authOptions } from '@/lib/auth'
import { hasThisCourse } from '@/supabase/hasThisCourse'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'

import AdminUsers from './components/AdminUsers'
import AllUsers from './components/AllUsers'

type CursoProps = {
  curso: string
}

export default async function Curso({ params }: { params: CursoProps }) {
  const curso = params.curso

  const session = await getServerSession(authOptions)
  const user = session?.user as UserType

  if (!curso) redirect('/cursos')
  if (!user) redirect('/arearestrita')

  function formatCourse({ curso }: { curso: string }) {
    const formattedCurso = curso.replaceAll('-', ' ')
    const palavras = formattedCurso.split(' ')

    const palavrasCapitalizadas = palavras.map(palavra => {
      if (palavra === 'para' || palavra === 'de' || palavra === 'a')
        return palavra
      return palavra.charAt(0).toUpperCase() + palavra.slice(1)
    })

    const novoCurso = palavrasCapitalizadas.join(' ')

    return novoCurso
  }

  const formattedCurso = formatCourse({ curso })
  const hasCourse = await hasThisCourse({
    curso: formattedCurso,
    email: user?.email,
  })

  if (!user?.admin && !hasCourse) redirect('/cursos')

  return (
    <main className="bg-tertiary py-6 flex flex-col items-center justify-center">
      <AllUsers curso={formattedCurso} />
      {user?.admin && <AdminUsers curso={formattedCurso} />}
    </main>
  )
}
