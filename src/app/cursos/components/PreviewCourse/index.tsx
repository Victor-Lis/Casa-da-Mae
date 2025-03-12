import type { ContentType } from '@/@types/ContentType'

export default function PreviewCourse({ content }: { content: ContentType }) {
  return (
    <div className="mx-auto w-4/12 max-sm:min-w-72 min-w-96 px-6 py-5 flex max-sm:flex-col justify-start items-center bg-primary mt-2 rounded text-white hover:opacity-95 hover:scale-105 hover:duration-150">
      {content.tipo_de_midia === 'pdf' || content.tipo_de_midia === 'video' ? (
        <iframe
          title={content.titulo}
          src={content.link}
          className={'w-full min-h-52 flex justify-center items-center'}
        />
      ) : (
        <img
          src={content.link}
          alt={content.titulo}
          className="bg-contain max-h-96 w-2/4 flex justify-center items-center'"
        />
      )}
    </div>
  )
}
