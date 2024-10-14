import type { StaticImport } from 'next/dist/shared/lib/get-img-props'
import { StaticImageData } from 'next/image'

export default function Section({
  Image,
  title,
  texts,
  imageFull,
  className,
}: {
  Image: React.ReactNode
  title: string
  texts: string[]
  imageFull?: boolean
  className?: string
}) {
  return (
    <section className={`w-full pb-20 ${className}`}>
      <div className="min-w-60 w-6/12 mx-auto mb-6 flex justify-around items-center flex-wrap bg-primary py-10 px-5 rounded-lg">
        {Image}
        <h1 className="max-md:text-2xl max-lg:text-3xl text-4xl text-white text-center">
          {title}
        </h1>
      </div>
      {texts?.map(text => {
        return (
          <p key={text} className="text-xl md:text-2xl w-9/12 mx-auto mt-20">
            {text}
          </p>
        )
      })}
    </section>
  )
}
