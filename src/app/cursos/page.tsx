import CourseCard from '@/app/arearestrita/components/WithSignUp/CourseCard'
import Hero from './components/Hero'

import { authOptions } from '@/lib/auth'
import { getServerSession } from 'next-auth'

import ContabilidadeImage from '@/assets/cursos/contabilidade.png'
import FluxoImage from '@/assets/cursos/fluxo-de-caixa.png'
import ControleImage from '@/assets/cursos/recebimento.png'
import GastosImage from '@/assets/cursos/gastos.png'
import EstoqueImage from '@/assets/cursos/qualidade.png'
import Link from 'next/link'

import { getInscriptionsByEmail } from '@/supabase/getInscriptionsByEmail'

export default async function Cursos() {
  const session = await getServerSession(authOptions)

  async function getInscriptions() {
    const inscriptions = await getInscriptionsByEmail({
      email: session?.user?.email as string,
    })
    return inscriptions
  }

  const cursos = await getInscriptions()

  return (
    <main className="bg-tertiary pb-12 flex flex-col items-center justify-center">
      <Hero />
      <Link
        href={'/cursos/inscricao'}
        className="bg-secondary text-2xl mt-12 px-4 py-2 mx-auto font-extrabold uppercase text-white rounded hover:opacity-85 hover:scale-105 hover:duration-150"
      >
        Inscreva-se
      </Link>
      <CourseCard
        image={ContabilidadeImage}
        title="Contabilidade para Iniciantes:"
        text="Entenda os princípios básicos da contabilidade de uma maneira clara, direta e simples."
        link={'cursos/curso/contabilidade-para-iniciantes'}
      />
      {cursos?.find(
        curso =>
          curso.nome_do_curso === 'Contabilidade para Iniciantes' &&
          curso.status_aprovacao
      ) && (
        <h2 className="mt-1 text-lg bg-green-500 text-white px-3 py-1 text-center">
          Você tem acesso ao curso acima!
        </h2>
      )}
      <CourseCard
        image={FluxoImage}
        title="Fluxo de Caixa:"
        text="Aprenda a gerenciar e prever as entradas e saídas de recursos financeiros"
        link={'cursos/curso/fluxo-de-caixa'}
      />
      {cursos?.find(
        curso =>
          curso.nome_do_curso === 'Fluxo de Caixa' && curso.status_aprovacao
      ) && (
        <h2 className="mt-1 text-lg bg-green-500 text-white px-3 py-1 text-center">
          Você tem acesso ao curso acima!
        </h2>
      )}
      <CourseCard
        image={ControleImage}
        title="Controle de Contas a Receber: "
        text="Organize suas finanças mantendo a saúde dos seus recebimentos."
        link={'cursos/curso/controle-de-contas-a-receber'}
      />
      {cursos?.find(
        curso =>
          curso.nome_do_curso === 'Controle de Contas a Receber' &&
          curso.status_aprovacao
      ) && (
        <h2 className="mt-1 text-lg bg-green-500 text-white px-3 py-1 text-center">
          Você tem acesso ao curso acima!
        </h2>
      )}
      <CourseCard
        image={GastosImage}
        title="Controle de Contas a Pagar:"
        text="Controle absoluto sobre suas dívidas. Importantíssimo para a tomada de decisão. "
        link={'cursos/curso/controle-de-contas-a-pagar'}
      />
      {cursos?.find(
        curso =>
          curso.nome_do_curso === 'Controle de Contas a Pagar' &&
          curso.status_aprovacao
      ) && (
        <h2 className="mt-1 text-lg bg-green-500 text-white px-3 py-1 text-center">
          Você tem acesso ao curso acima!
        </h2>
      )}
      <CourseCard
        image={EstoqueImage}
        title="Controle de Estoque:"
        text="Domine as técnicas para gerir eficientemente os recursos ou produtos disponíveis."
        link={'cursos/curso/controle-de-estoque'}
      />
      {cursos?.find(
        curso =>
          curso.nome_do_curso === 'Controle de Estoque' &&
          curso.status_aprovacao
      ) && (
        <h2 className="mt-1 text-lg bg-green-500 text-white px-3 py-1 text-center">
          Você tem acesso ao curso acima!
        </h2>
      )}
    </main>
  )
}
