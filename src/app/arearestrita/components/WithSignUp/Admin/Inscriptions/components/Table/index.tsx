import { getInscriptions } from '@/supabase/getInscriptions'
import TableHeader from '../TableHeader'
import TableRow from '../TableRow'

export default async function Table({
  title,
  status_das_inscricoes,
}: { title: string; status_das_inscricoes: boolean }) {
  const inscricoes = await getInscriptions()

  return (
    <div className="w-full overflow-x-auto mt-10">
      <h1 className="text-3xl text-white font-bold mx-auto mb-2">{title}</h1>
      <table className="table-fixed mx-auto">
        <TableHeader />
        <tbody>
          {inscricoes
            ?.filter(
              inscricao => inscricao.status_aprovacao === status_das_inscricoes
            )
            .sort(
              (a, b) =>
                new Date(a.created_at).getTime() -
                new Date(b.created_at).getTime()
            )
            .map(inscricao => (
              <TableRow key={inscricao.id} {...inscricao} />
            ))}
        </tbody>
      </table>
    </div>
  )
}
