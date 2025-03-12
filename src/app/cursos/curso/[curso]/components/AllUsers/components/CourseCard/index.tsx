import PreviewCourse from '@/app/cursos/components/PreviewCourse'
import { getFavoriteContentByCourse } from '@/supabase/getFavoriteContentByCourse'
import type { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'

import Link from 'next/link'

export default async function CourseCard({
  image,
  title,
  text,
  extraBoxClass,
  link,
}: {
  image: StaticImport
  title: string
  text: string
  extraBoxClass?: string
  link?: string
}) {
  async function getFavoriteContent() {
    const response = await getFavoriteContentByCourse({
      curso: title.split(':')[0],
    })

    return response
  }

  const favoriteContent = await getFavoriteContent()

  return (
    <>
      <Link
        href={link ? link : '#'}
        className={`mx-auto w-4/12 max-sm:min-w-72 min-w-96 px-6 py-5 flex max-sm:flex-col justify-start items-center bg-primary mt-12 rounded text-white hover:opacity-95 hover:scale-105 hover:duration-150 ${extraBoxClass}`}
      >
        <Image src={image} alt={title} className="w-28 pr-4" />
        <div className="flex flex-col justify-center items-start">
          <h2 className="font-extrabold text-2xl">{title}</h2>
          <p className="text-xl">{text}</p>
        </div>
      </Link>
      {favoriteContent && <PreviewCourse content={favoriteContent} />}
    </>
  )
}
