import type { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'

export default function Section({
  image,
  title,
  texts,
  imageFull,
}: {
  image: StaticImport
  title: string
  texts: string[]
  imageFull?: boolean
}) {
  return (
    <section className="w-full mt-20">
      <div
        className={`overflow-x-hidden relative w-full ${imageFull && 'min-h-72'} bg-secondary flex ${imageFull ? 'justify-between' : 'justify-center'} items-center ${!imageFull && 'flex-wrap'} gap-x-10 ${imageFull ? 'p-0' : 'px-10 py-20 md:py-8'}`}
      >
        <h2
          className={`text-5xl md:text-7xl font-extrabold uppercase ml-10 mb-40 z-20 ${imageFull && 'md:absolute md:top-24 md:left-4'}`}
        >
          {title}
        </h2>
        <Image
          src={image}
          alt="Imagem de acolhimento"
          className={`${imageFull ? 'h-full max-sm:absolute max-sm:left-0 sm:ml-auto max-md:z-10' : 'w-72 md:w-[34rem]'}`}
        />
      </div>
      {texts?.map(text => {
        return (
          <p key={text} className="text-2xl w-9/12 mx-auto mt-20">
            {text}
          </p>
        )
      })}
    </section>
  )
}
