import { getCourseContent } from '@/supabase/getCourseContent'
import ContentCard from './components/ContentCard'

export default async function AllUsers({ curso }: { curso: string }) {
  const conteudos = await getCourseContent({ curso })
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <h2 className="mt-10 mb-5 text-5xl font-bold uppercase text-primary py-2 px-4 bg-white rounded max-sm:text-3xl">
        Conteúdos
      </h2>
      <div className="w-full flex flex-col justify-center items-center">
        {conteudos?.map(conteudo => (
          <ContentCard content={conteudo} key={conteudo.id} />
        ))}
      </div>
      {!conteudos?.length && (
        <h2 className="text-red-500 text-3xl w-full text-center">
          Não há conteúdos ainda...
        </h2>
      )}
    </div>
  )
}
