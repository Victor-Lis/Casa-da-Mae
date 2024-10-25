import Link from 'next/link'
import StyledBox from '../../../StyledBox'
import Table from './components/Table'

export default function Inscriptions() {
  return (
    <StyledBox extraClass="overflow-x-hidden">
      <h1 className="text-white text-5xl w-full text-center font-bold mb-8 max-sm:text-3xl">
        Inscrições
      </h1>
      <h1 className="text-white text-2xl w-full text-center max-sm:text-xl">
        Abaixo estão todas inscrições que foram realizadas buscando entrar em
        alguns cursos, é possível definir o status da inscrição como:{' '}
        <strong className="text-green-500">ativada</strong> ou{' '}
        <strong className="text-red-400">desativada</strong>, basta clicar no
        ícone respectivo.
      </h1>
      <Table title="Inscrições Ativadas" status_das_inscricoes={true} />
      <Table title="Inscrições Desativadas" status_das_inscricoes={false} />
    </StyledBox>
  )
}
