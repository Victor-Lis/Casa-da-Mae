import type { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'

export default function CourseCard({
  image,
  title,
  text,
}: { image: StaticImport; title: string; text: string }) {
  return (
    <div className="mx-auto w-4/12 max-sm:min-w-72 min-w-96 px-6 py-5 flex max-sm:flex-col justify-start items-center bg-primary mt-12 rounded text-white">
      <Image src={image} alt={title} className="w-28 pr-4" />
      <div className="flex flex-col justify-center items-start">
        <h2 className="font-extrabold text-2xl">{title}</h2>
        <p className="text-xl">{text}</p>
      </div>
    </div>
  )
}
