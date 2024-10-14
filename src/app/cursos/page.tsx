import CourseCard from './components/CourseCard'
import Hero from './components/Hero'

import ContabilidadeImage from '@/assets/cursos/contabilidade.png'
import FluxoImage from '@/assets/cursos/fluxo-de-caixa.png'
import ControleImage from '@/assets/cursos/recebimento.png'
import GastosImage from '@/assets/cursos/gastos.png'
import EstoqueImage from '@/assets/cursos/qualidade.png'

export default function Cursos() {
  return (
    <main className="bg-tertiary pb-6 flex flex-col items-center justify-center">
      <Hero />
      <CourseCard
        image={ContabilidadeImage}
        title="Contabilidade para Leigos:"
        text="Entenda os princípios básicos da contabilidade de uma maneira clara, direta e simples."
      />
      <CourseCard
        image={FluxoImage}
        title="Fluxo de Caixa:"
        text="Aprenda a gerenciar e prever as entradas e saídas de recursos financeiros"
      />
      <CourseCard
        image={ControleImage}
        title="Controle de Contas a Receber: "
        text="Organize suas finanças mantendo a saúde dos seus recebimentos."
      />
      <CourseCard
        image={GastosImage}
        title="Controle de Contas a Pagar:"
        text="Controle absoluto sobre suas dívidas. Importantíssimo para a tomada de decisão. "
      />
      <CourseCard
        image={EstoqueImage}
        title="Controle de Estoque:"
        text="Domine as técnicas para gerir eficientemente os recursos ou produtos disponíveis."
      />
      <button
        type="button"
        className="bg-secondary text-2xl mt-12 px-4 py-2 mx-auto font-extrabold uppercase text-white rounded"
      >
        Inscreva-se
      </button>
    </main>
  )
}
