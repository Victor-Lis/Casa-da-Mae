import type { InscriptionType } from '@/@types/Inscription'
import ButtonToggleStatus from '../ButtonToggleStatus'

export default function TableRow({
  aluno,
  nome_do_curso,
  created_at,
  status_aprovacao,
  id,
}: InscriptionType) {
  const formatDate = (date: string) =>
    `${new Date(date).getDate()}/${new Date(date).getMonth() + 1}/${new Date(date).getFullYear()}`
  return (
    <tr className="bg-white/90 text-center">
      <td className="border px-4 py-2">{aluno}</td>
      <td className="border px-4 py-2">{nome_do_curso}</td>
      <td className="border px-4 py-2">{formatDate(created_at)}</td>
      <td
        className={`border px-4 py-2 ${status_aprovacao ? 'text-green-500' : 'text-red-400'}`}
      >
        {status_aprovacao ? 'Ativada' : 'Desativada'}
      </td>
      <td className="border px-4 py-2">
        <ButtonToggleStatus id={id} status_aprovacao={status_aprovacao} />
      </td>
    </tr>
  )
}
