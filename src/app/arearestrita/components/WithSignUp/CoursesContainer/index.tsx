import ContabilidadeImage from '@/assets/cursos/contabilidade.png'
import FluxoImage from '@/assets/cursos/fluxo-de-caixa.png'
import ControleImage from '@/assets/cursos/recebimento.png'
import GastosImage from '@/assets/cursos/gastos.png'
import EstoqueImage from '@/assets/cursos/qualidade.png'
import CourseCard from '../CourseCard'

import type { InscriptionType } from '@/@types/Inscription'

export default function CoursesContainer({
  inscricoes,
}: { inscricoes: InscriptionType[] }) {
  const cursos = [
    {
      image: ContabilidadeImage,
      title: 'Contabilidade para Iniciantes:',
      text: 'Entenda os princípios básicos da contabilidade de uma maneira clara, direta e simples.',
      extraBoxClass: 'bg-tertiary sm:min-w-[80%] max-sm:min-w-[240px]',
      link: '/cursos/curso/contabilidade-para-iniciantes',
    },
    {
      image: FluxoImage,
      title: 'Fluxo de Caixa:',
      text: 'Aprenda a gerenciar e prever as entradas e saídas de recursos financeiros',
      extraBoxClass: 'bg-tertiary sm:min-w-[80%] max-sm:min-w-[240px]',
      link: '/cursos/curso/fluxo-de-caixa',
    },
    {
      image: ControleImage,
      title: 'Controle de Contas a Receber: ',
      text: 'Organize suas finanças mantendo a saúde dos seus recebimentos.',
      extraBoxClass: 'bg-tertiary sm:min-w-[80%] max-sm:min-w-[240px]',
      link: '/cursos/curso/controle-de-contas-a-receber',
    },
    {
      image: GastosImage,
      title: 'Controle de Contas a Pagar:',
      text: 'Controle absoluto sobre suas dívidas. Importantíssimo para a tomada de decisão. ',
      extraBoxClass: 'bg-tertiary sm:min-w-[80%] max-sm:min-w-[240px]',
      link: '/cursos/curso/controle-de-contas-a-pagar',
    },
    {
      image: EstoqueImage,
      title: 'Controle de Estoque:',
      text: 'Domine as técnicas para gerir eficientemente os recursos ou produtos disponíveis.',
      extraBoxClass: 'bg-tertiary sm:min-w-[80%] max-sm:min-w-[240px]',
      link: '/cursos/curso/controle-de-estoque',
    },
  ]

  return (
    <>
      {inscricoes?.map(inscricao => {
        const curso = cursos.find(curso => {
          return (
            curso.title.slice(0, inscricao.nome_do_curso.length) ===
            inscricao.nome_do_curso
          )
        })
        if (curso) {
          return (
            <CourseCard
              key={inscricao.id}
              image={curso.image}
              title={curso.title}
              text={curso.text}
              link={curso.link}
              extraBoxClass={`bg-tertiary sm:min-w-[80%] max-sm:min-w-[240px] border-4 ${inscricao.status_aprovacao ? 'border-green-500' : 'border-red-400'}`}
            />
          )
        }
      })}
    </>
  )
}
