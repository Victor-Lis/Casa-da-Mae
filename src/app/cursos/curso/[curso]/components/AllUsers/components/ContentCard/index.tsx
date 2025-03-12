import type { UserType } from '@/@types/User'
import type { ContentType } from '@/@types/ContentType'
import DeleteButton from '../DeleteButton'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import SwitchButton from '../SwitchButton'
import FavoriteButton from '../FavoriteButton'

export default async function ContentCard({
  content,
}: { content: ContentType }) {
  const session = await getServerSession(authOptions)
  const user = session?.user as UserType

  return (
    <>
      <div className="bg-primary min-h-96 w-9/12 min-w-72 flex flex-wrap justify-center items-center mt-7 rounded overflow-hidden max-[1050px]:flex-col">
        {content.tipo_de_midia === 'pdf' ||
        content.tipo_de_midia === 'video' ? (
          <iframe
            title={content.titulo}
            src={content.link}
            className={
              'w-2/4 max-[1050px]:w-full min-w-80 min-h-96 flex justify-center items-center'
            }
          />
        ) : (
          <img
            src={content.link}
            alt={content.titulo}
            className="bg-contain max-h-96 w-2/4 flex justify-center items-center'"
          />
        )}
        <aside className="flex-1 p-4 flex flex-col justify-start items-start gap-5">
          <h1 className="text-3xl text-white font-bold">{content.titulo}</h1>
          <p className="text-xl text-white font-bold">{content.descricao}</p>
        </aside>
      </div>
      {user.admin && (
        <section className="w-9/12 min-w-72 flex justify-between items-center mt-2">
          <aside className="flex gap-2 mr-auto">
            <FavoriteButton content={content} />
            <SwitchButton direction="next" content={content} />
            <SwitchButton direction="previus" content={content} />
          </aside>
          <DeleteButton content={content} />
        </section>
      )}
    </>
  )
}
