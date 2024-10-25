import ContabilidadeImage from '@/assets/cursos/contabilidade.png'
import FluxoImage from '@/assets/cursos/fluxo-de-caixa.png'
import ControleImage from '@/assets/cursos/recebimento.png'
import GastosImage from '@/assets/cursos/gastos.png'
import EstoqueImage from '@/assets/cursos/qualidade.png'

import type { InscriptionType } from '@/@types/Inscription'
import CourseCard from '@/components/CourseCard'

export default function CoursesContainer({
  inscricoes,
}: { inscricoes: InscriptionType[] }) {
  const cursos = [
    {
      image: ContabilidadeImage,
      title: 'Contabilidade para Leigos:',
      text: 'Entenda os princípios básicos da contabilidade de uma maneira clara, direta e simples.',
      extraBoxClass: 'bg-tertiary sm:min-w-[80%] max-sm:min-w-[240px]',
    },
    {
      image: FluxoImage,
      title: 'Fluxo de Caixa:',
      text: 'Aprenda a gerenciar e prever as entradas e saídas de recursos financeiros',
      extraBoxClass: 'bg-tertiary sm:min-w-[80%] max-sm:min-w-[240px]',
    },
    {
      image: ControleImage,
      title: 'Controle de Contas a Receber: ',
      text: 'Organize suas finanças mantendo a saúde dos seus recebimentos.',
      extraBoxClass: 'bg-tertiary sm:min-w-[80%] max-sm:min-w-[240px]',
    },
    {
      image: GastosImage,
      title: 'Controle de Contas a Pagar:',
      text: 'Controle absoluto sobre suas dívidas. Importantíssimo para a tomada de decisão. ',
      extraBoxClass: 'bg-tertiary sm:min-w-[80%] max-sm:min-w-[240px]',
    },
    {
      image: EstoqueImage,
      title: 'Controle de Estoque:',
      text: 'Domine as técnicas para gerir eficientemente os recursos ou produtos disponíveis.',
      extraBoxClass: 'bg-tertiary sm:min-w-[80%] max-sm:min-w-[240px]',
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
              extraBoxClass={`bg-tertiary sm:min-w-[80%] max-sm:min-w-[240px] border-4 ${inscricao.status_aprovacao ? 'border-green-500' : 'border-red-400'}`}
            />
          )
        }
      })}
    </>
  )
}
